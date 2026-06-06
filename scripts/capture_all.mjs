#!/usr/bin/env node
/**
 * Discover all .HTM/.HTML/.GIF/.JPG/.PDF filenames referenced from the
 * already-normalized item markdown that are NOT yet present in the
 * manifest (data/manifests/items.yaml), add them as pending items, then
 * fetch + normalize each one. HTML pages also have their <img> assets
 * downloaded into public/assets/images/.
 *
 * Polite to hawaii.edu: ~250 ms between requests, wayback fallback on
 * any HTTP error, continues on failure (per-item), prints progress
 * every 10 items.
 *
 * Usage:
 *   node scripts/capture_all.mjs                # full run
 *   node scripts/capture_all.mjs --plan         # dry run (no fetches)
 *   node scripts/capture_all.mjs --limit 20     # only process first N
 *   node scripts/capture_all.mjs --kind htm     # only HTM/HTML pages
 */
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import {
	classifyItem,
	ensureDir,
	fetchBuffer,
	fetchText,
	findWaybackSnapshot,
	inferCollection,
	locateRawFolder,
	parseArgs,
	readYaml,
	resolveRawFolder,
	sha256,
	slugify,
	sourceIdForUrl,
	writeYaml,
} from './lib.mjs';

const args = parseArgs(process.argv.slice(2));
const DRY = !!args.plan;
const LIMIT = args.limit ? Number(args.limit) : Infinity;
const KIND = args.kind; // 'htm' | 'image' | undefined
const HAWAII_BASE = 'https://www.hawaii.edu/powerkills/';
const DELAY_MS = 250;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isImage = (ext) => ['gif', 'jpg', 'jpeg', 'png'].includes(ext);
const isHtml = (ext) => ['htm', 'html'].includes(ext);

/* ── 1. Discover missing filenames ─────────────────────────────── */

const items = readYaml('data/manifests/items.yaml') ?? [];
const indexedShortTitles = new Set(items.map((i) => (i.short_title || '').toUpperCase()));
const itemsById = new Map(items.map((i) => [i.item_id, i]));

const itemsDir = path.resolve('src/content/en/items');
const referenced = new Set();
for (const f of fs.readdirSync(itemsDir).filter((x) => x.endsWith('.md'))) {
	const body = fs.readFileSync(path.join(itemsDir, f), 'utf8');
	for (const m of body.matchAll(/\]\(([A-Z0-9._-]+\.(?:HTM|HTML|GIF|JPG|JPEG|PNG|PDF))\)/gi)) {
		referenced.add(m[1].toUpperCase());
	}
}
let missing = [...referenced].filter((fn) => !indexedShortTitles.has(fn)).sort();
if (KIND === 'htm') missing = missing.filter((fn) => isHtml(fn.split('.').pop().toLowerCase()));
if (KIND === 'image') missing = missing.filter((fn) => isImage(fn.split('.').pop().toLowerCase()));
missing = missing.slice(0, LIMIT);

console.log(`Discovered ${missing.length} missing filenames (after kind/limit filters).`);
if (DRY) {
	console.log('\nDry run. Sample of first 30:');
	missing.slice(0, 30).forEach((fn) => console.log('  ' + fn));
	process.exit(0);
}

/* ── 2. Add pending entries to manifest ───────────────────────── */

const generatedIds = new Map(); // shortTitle -> item_id
function uniqueSlug(base) {
	let s = base, n = 2;
	while (itemsById.has(s) || [...generatedIds.values()].includes(s)) {
		s = `${base}-${n++}`;
	}
	return s;
}

const newPending = [];
for (const fn of missing) {
	const baseSlug = slugify(fn.replace(/\.[^.]+$/, ''));
	const itemId = uniqueSlug(baseSlug || `item-${generatedIds.size}`);
	const originalUrl = HAWAII_BASE + fn;
	const entry = {
		item_id: itemId,
		title: fn,
		short_title: fn,
		collection_id: inferCollection(fn),
		item_type: classifyItem(fn),
		language: 'en',
		original_date: 'unknown',
		site_section: 'discovered',
		original_url: originalUrl,
		preferred_source_id: 'hawaii-powerkills',
		fallback_source_ids: ['wayback'],
		capture_status: 'pending',
		rights_note:
			'Preserved source material, rights retained by original rights holders unless stated otherwise.',
		translation_status: 'not-started',
		tags: ['auto-discovered'],
		related_item_ids: [],
	};
	items.push(entry);
	itemsById.set(itemId, entry);
	generatedIds.set(fn, itemId);
	newPending.push(entry);
}
items.sort((a, b) => a.item_id.localeCompare(b.item_id));
writeYaml('data/manifests/items.yaml', items);
console.log(`Added ${newPending.length} pending manifest entries.`);

/* ── 3. Fetch + normalize + assets, one by one ─────────────────── */

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

async function fetchOne(item) {
	const extension = item.original_url.match(/\.([A-Za-z0-9]+)(?:$|\?)/)?.[1]?.toLowerCase() ?? 'html';
	const fetcher = isImage(extension) || extension === 'pdf' ? fetchBuffer : fetchText;
	let payload, sourceId = 'hawaii-powerkills', sourceType = 'original';
	let rawFolder = path.join(process.cwd(), resolveRawFolder(item.original_url, sourceId));
	try {
		payload = await fetcher(item.original_url);
		if (payload.status >= 400) throw new Error(`HTTP ${payload.status}`);
	} catch (e) {
		const snap = await findWaybackSnapshot(item.original_url);
		if (!snap) throw e;
		payload = await fetcher(snap.url);
		sourceId = 'wayback';
		sourceType = 'wayback';
		rawFolder = path.join(process.cwd(), resolveRawFolder(snap.url, sourceId));
	}
	ensureDir(rawFolder);
	const rawPath = path.join(rawFolder, `${item.item_id}.${extension === 'htm' ? 'html' : extension}`);
	fs.writeFileSync(rawPath, payload.body);
	fs.writeFileSync(
		path.join(rawFolder, `${item.item_id}.meta.json`),
		JSON.stringify({
			item_id: item.item_id,
			original_url: item.original_url,
			source_used: payload.finalUrl,
			source_type: sourceType,
			content_type: payload.contentType,
			sha256: sha256(payload.body),
			captured_at: new Date().toISOString(),
		}, null, 2),
	);
	return { sourceId, sourceType, extension, rawPath, payload };
}

function trimChrome(md) {
	const markers = [
		'\n### DEATH BY GOVERNMENT', '\n## HOW MANY DID', '\n## DEMOCIDE SINCE',
		'\n## THE HOLOCAUST', '\n# HOW MANY', '\n# DEMOCIDE SINCE', '\n# THE HOLOCAUST',
		'\n# REFERENCES', '\n## Chapter ',
	];
	let cut = -1;
	for (const m of markers) {
		const i = md.indexOf(m);
		if (i >= 0 && (cut === -1 || i < cut)) cut = i + 1;
	}
	return cut === -1 ? md.trim() : md.slice(cut).trim();
}

function normalizeHtml(item, payload) {
	const $ = cheerio.load(payload.body);
	$('script, style').remove();
	$('body > a').remove();
	$('img[alt="Home"], img[alt="Documents on Site"], img[alt="Personal"], img[alt="Democratic Peace"], img[alt="Democide"], img[alt="20th C. Democide"], img[alt="Megamurderers"], img[alt="Lesser Murderers"], img[alt="Why Democide"], img[alt="Dimensions"], img[alt="Conflict"], img[alt="Methods"], img[alt="Theory"], img[alt="Policy"], img[alt="Links"], img[alt="PHOTOS OF DEMOCIDE"], img[alt="Galleries"]').closest('a').remove();
	$('a[href="welcome.html"], a[href="LIST.HTM"], a[href="PERSONAL.HTM"], a[href="MIRACLE.HTM"], a[href="MURDER.HTM"], a[href="20TH.HTM"], a[href="MEGA.HTM"], a[href="LESSER.HTM"], a[href="WHY.HTM"], a[href="DIMENSIONS.HTM"], a[href="VIOLENCE.HTM"], a[href="TECH.HTM"], a[href="THEORY.HTM"], a[href="POLICY.HTM"], a[href="LINKS.HTM"], a[href="RM1.PHOTOS.ROOM1.HTM"], a[href="GALLERY.HTM"]').remove();
	const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
	td.addRule('images', {
		filter: 'img',
		replacement(_c, node) {
			const alt = node.getAttribute('alt') ?? '';
			const src = node.getAttribute('src') ?? '';
			if (!src || src.includes('Count')) return '';
			const fileName = path.basename(new URL(src, item.original_url).pathname);
			return `![${alt}](/assets/images/${fileName})`;
		},
	});
	return trimChrome(td.turndown(($('body').html() ?? $.root().html() ?? '').trim()).replace(/\n{3,}/g, '\n\n').trim());
}

async function downloadAssets(item, html) {
	const $ = cheerio.load(html);
	const urls = new Set();
	$('img[src]').each((_, el) => {
		const src = $(el).attr('src');
		if (!src || src.startsWith('data:') || src.includes('Count')) return;
		urls.add(new URL(src, item.original_url).toString());
	});
	const assetsDir = path.join(process.cwd(), 'public', 'assets', 'images');
	ensureDir(assetsDir);
	for (const url of urls) {
		const fileName = path.basename(new URL(url).pathname);
		const target = path.join(assetsDir, fileName);
		if (fs.existsSync(target)) continue;
		try {
			const asset = await fetchBuffer(url);
			fs.writeFileSync(target, asset.body);
		} catch (e) {
			console.warn(`  asset failed: ${fileName} (${e.message})`);
		}
		await sleep(DELAY_MS);
	}
}

const outDir = path.resolve('src/content/en/items');
ensureDir(outDir);

const stats = { ok: 0, fail: 0, skipped: 0 };
let i = 0;
for (const item of newPending) {
	i++;
	try {
		const { extension, payload } = await fetchOne(item);
		if (isHtml(extension)) {
			const meta = JSON.parse(fs.readFileSync(path.join(locateRawFolder(item.item_id), `${item.item_id}.meta.json`), 'utf8'));
			const body = normalizeHtml(item, payload);
			const frontmatter = [
				'---',
				`title: ${JSON.stringify(item.title)}`,
				`itemId: ${item.item_id}`,
				`collection: ${item.collection_id}`,
				`originalUrl: ${JSON.stringify(item.original_url)}`,
				`sourceType: ${meta.source_type}`,
				`sourceUsed: ${JSON.stringify(meta.source_used)}`,
				`captureDate: ${JSON.stringify(meta.captured_at)}`,
				'provenance:',
				`  sourceId: ${item.preferred_source_id}`,
				`  rawPath: ${path.relative(process.cwd(), path.join(locateRawFolder(item.item_id), `${item.item_id}.html`))}`,
				`  hash: ${meta.sha256}`,
				'originalFormat: html',
				'assets: []',
				'editorialNotes:',
				'  - Automated Markdown conversion. Review formatting before treating as fully normalized.',
				'draft: false',
				'---',
				'',
			].join('\n');
			fs.writeFileSync(path.join(outDir, `${item.item_id}.md`), `${frontmatter}${body}\n`);
			item.capture_status = 'published';
			await downloadAssets(item, payload.body);
		} else {
			item.capture_status = 'published';
		}
		stats.ok++;
	} catch (e) {
		item.capture_status = 'failed';
		stats.fail++;
		console.warn(`  [${i}/${newPending.length}] FAIL ${item.item_id}: ${e.message}`);
	}
	if (i % 10 === 0) {
		writeYaml('data/manifests/items.yaml', items);
		console.log(`  [${i}/${newPending.length}] ok=${stats.ok} fail=${stats.fail}`);
	}
	await sleep(DELAY_MS);
}
writeYaml('data/manifests/items.yaml', items);
console.log(`Done. ok=${stats.ok} fail=${stats.fail} skipped=${stats.skipped}`);
