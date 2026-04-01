import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import YAML from 'yaml';

export const repoRoot = process.cwd();

export function ensureDir(target) {
	fs.mkdirSync(target, { recursive: true });
}

export function readYaml(relativePath) {
	return YAML.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'));
}

export function writeYaml(relativePath, value) {
	fs.writeFileSync(path.join(repoRoot, relativePath), YAML.stringify(value, { indent: 2 }));
}

export function slugify(value) {
	return value
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 80);
}

export function sha256(input) {
	return crypto.createHash('sha256').update(input).digest('hex');
}

export function classifyItem(url, text = '') {
	const lower = `${url} ${text}`.toLowerCase();
	if (/\.(gif|jpg|jpeg|png)$/.test(lower)) return 'image';
	if (/\.pdf$/.test(lower)) return 'pdf';
	if (lower.includes('note')) return 'note';
	if (lower.includes('tab') || lower.includes('fig')) return 'figure';
	if (lower.includes('chap')) return 'chapter';
	return 'article';
}

export function inferCollection(url, text = '') {
	const lower = `${url} ${text}`.toLowerCase();
	if (lower.includes('dbg') || lower.includes('death by government')) return 'death-by-government';
	if (lower.includes('sod')) return 'statistics-of-democide';
	if (lower.includes('note2') || lower.includes('china')) return 'chinas-bloody-century';
	if (lower.includes('note3') || lower.includes('nazi')) return 'democide-nazi-genocide-and-mass-murder';
	if (lower.includes('note4') || lower.includes('soviet') || lower.includes('lethal politics')) return 'lethal-politics';
	if (lower.includes('20th')) return '20th-century-democide';
	if (lower.includes('tab') || lower.includes('fig') || lower.includes('note')) return 'notes-tables-and-figures';
	return 'articles-and-papers';
}

export function sourceIdForUrl(url) {
	if (url.includes('blogspot.com')) return 'freedomspeace-blogspot';
	if (url.includes('web.archive.org')) return 'wayback';
	return 'hawaii-powerkills';
}

export function resolveRawFolder(_url, sourceId) {
	if (sourceId === 'freedomspeace-blogspot') return 'data/raw/blogspot';
	if (sourceId === 'wayback') return 'data/raw/wayback';
	return 'data/raw/hawaii-edu';
}

export function locateRawFolder(itemId) {
	const folders = ['data/raw/hawaii-edu', 'data/raw/blogspot', 'data/raw/wayback'];
	for (const folder of folders) {
		if (fs.existsSync(path.join(repoRoot, folder, `${itemId}.meta.json`))) {
			return path.join(repoRoot, folder);
		}
	}
	return null;
}

export async function fetchText(url) {
	const response = await fetch(url, {
		headers: { 'user-agent': '20th-century-democide-preservation-bot/0.1' },
	});
	if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
	return {
		body: await response.text(),
		contentType: response.headers.get('content-type') ?? 'text/plain',
		finalUrl: response.url,
		status: response.status,
	};
}

export async function fetchBuffer(url) {
	const response = await fetch(url, {
		headers: { 'user-agent': '20th-century-democide-preservation-bot/0.1' },
	});
	if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
	const arrayBuffer = await response.arrayBuffer();
	return {
		body: Buffer.from(arrayBuffer),
		contentType: response.headers.get('content-type') ?? 'application/octet-stream',
		finalUrl: response.url,
		status: response.status,
	};
}

export async function findWaybackSnapshot(url) {
	const cdxUrl = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(url)}&output=json&fl=timestamp,original,statuscode,mimetype&filter=statuscode:200&limit=5`;
	const response = await fetch(cdxUrl, {
		headers: { 'user-agent': '20th-century-democide-preservation-bot/0.1' },
	});
	if (!response.ok) return null;
	const data = await response.json();
	if (!Array.isArray(data) || data.length < 2) return null;
	const [timestamp, original, statuscode, mimetype] = data[1];
	return {
		timestamp,
		original,
		statuscode,
		mimetype,
		url: `https://web.archive.org/web/${timestamp}id_/${original}`,
	};
}

export function parseArgs(argv) {
	const args = {};
	for (let i = 0; i < argv.length; i += 1) {
		const current = argv[i];
		if (!current.startsWith('--')) continue;
		const key = current.slice(2);
		const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
		args[key] = value;
	}
	return args;
}
