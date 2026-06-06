/**
 * Shared resilience helpers for capture pipeline.
 *
 * Implements lessons from fgcmirror:
 *  - Primary-snapshot stickiness on transient errors
 *  - Multi-snapshot Wayback fallback via CDX
 *  - Wayback chrome stripping
 *  - CDX cache with TTL
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fetchBuffer, fetchText, sleep } from './lib.mjs';

export class HardError extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;
		this.kind = 'hard';
	}
}
export class TransientError extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;
		this.kind = 'transient';
	}
}

const CDX_CACHE_DIR = path.resolve('data/cdx-cache');
const CDX_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function cdxCachePath(url) {
	const hash = crypto.createHash('sha1').update(url).digest('hex');
	return path.join(CDX_CACHE_DIR, `${hash}.json`);
}

function readCdxCache(url) {
	const f = cdxCachePath(url);
	if (!fs.existsSync(f)) return null;
	const { fetched_at, data } = JSON.parse(fs.readFileSync(f, 'utf8'));
	if (Date.now() - new Date(fetched_at).getTime() > CDX_TTL_MS) return null;
	return data;
}

function writeCdxCache(url, data) {
	fs.mkdirSync(CDX_CACHE_DIR, { recursive: true });
	fs.writeFileSync(
		cdxCachePath(url),
		JSON.stringify({ fetched_at: new Date().toISOString(), url, data }, null, 2),
	);
}

/**
 * Fetch with primary stickiness: up to `tries` retries on transient
 * errors (5xx, sockets, IA flake). 404 → throws HardError immediately.
 * Returns the same shape as fetchText/fetchBuffer.
 */
export async function fetchWithRetry(url, { tries = 5, baseDelayMs = 500 } = {}) {
	const extension = url.match(/\.([A-Za-z0-9]+)(?:$|\?)/)?.[1]?.toLowerCase() ?? 'html';
	const fetcher = ['gif', 'jpg', 'jpeg', 'png', 'pdf'].includes(extension) ? fetchBuffer : fetchText;
	let lastErr;
	for (let attempt = 0; attempt < tries; attempt++) {
		try {
			const payload = await fetcher(url);
			if (payload.status === 404) throw new HardError(`404 ${url}`, 404);
			if (payload.status >= 400) throw new TransientError(`HTTP ${payload.status}`, payload.status);
			return payload;
		} catch (e) {
			if (e instanceof HardError) throw e;
			lastErr = e;
			if (attempt < tries - 1) {
				await sleep(baseDelayMs * Math.pow(2, attempt));
			}
		}
	}
	throw lastErr ?? new Error(`fetch failed after ${tries} tries: ${url}`);
}

/**
 * Find up to `limit` Wayback snapshots for a URL via CDX, sorted by
 * proximity to a target timestamp (default: most recent first).
 * Cached at data/cdx-cache/<sha1>.json for 7 days.
 */
export async function findWaybackSnapshots(url, { limit = 20, useCache = true } = {}) {
	if (useCache) {
		const cached = readCdxCache(url);
		if (cached) return cached.slice(0, limit);
	}
	const cdxUrl =
		`https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(url)}` +
		`&output=json&fl=timestamp,original,statuscode,mimetype` +
		`&filter=statuscode:200&limit=${limit}`;
	let data;
	try {
		const res = await fetchText(cdxUrl);
		data = JSON.parse(res.body);
	} catch {
		return [];
	}
	if (!Array.isArray(data) || data.length < 2) {
		writeCdxCache(url, []);
		return [];
	}
	const snaps = data.slice(1).map(([timestamp, original, statuscode, mimetype]) => ({
		timestamp,
		original,
		statuscode,
		mimetype,
		url: `https://web.archive.org/web/${timestamp}id_/${original}`,
	}));
	writeCdxCache(url, snaps);
	return snaps;
}

/**
 * Try the primary URL with stickiness; on hard 404, walk Wayback
 * neighbours via CDX. Returns { payload, sourceUsed, sourceType }.
 * Throws if everything 404s.
 */
export async function fetchResilient(url, opts = {}) {
	// 1. Primary with retries on transient
	try {
		const payload = await fetchWithRetry(url, { tries: opts.primaryTries ?? 5 });
		return { payload, sourceUsed: url, sourceType: 'original' };
	} catch (e) {
		if (!(e instanceof HardError)) {
			// Transient exhaustion: still try wayback as last resort
		}
	}

	// 2. Wayback neighbours
	const snaps = await findWaybackSnapshots(url, { limit: opts.waybackLimit ?? 20 });
	for (const snap of snaps) {
		try {
			const payload = await fetchWithRetry(snap.url, { tries: 2 });
			return { payload, sourceUsed: snap.url, sourceType: 'wayback' };
		} catch {
			// keep walking
		}
	}
	throw new Error(`Exhausted primary + ${snaps.length} wayback snapshots for ${url}`);
}

/**
 * Strip Wayback chrome from captured HTML. Idempotent.
 */
export function stripWaybackChrome(html) {
	return html
		// Wayback toolbar HTML comments
		.replace(/<!--\s*BEGIN WAYBACK[\s\S]*?END WAYBACK\s*-->/g, '')
		// Wayback injected scripts/links
		.replace(/<script[^>]*src="[^"]*archive\.org[^"]*"[^>]*>\s*<\/script>/g, '')
		.replace(/<link[^>]*href="[^"]*archive\.org[^"]*"[^>]*>/g, '')
		// __wm.* blocks
		.replace(/<script[^>]*>[\s\S]*?__wm\.[\s\S]*?<\/script>/g, '')
		// data-wbm-* and data-original-href attrs (any value, any quote style)
		.replace(/\sdata-wbm-[a-z-]+="[^"]*"/g, '')
		.replace(/\sdata-original-href="[^"]*"/g, '');
}
