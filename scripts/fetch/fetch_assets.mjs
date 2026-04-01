import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { ensureDir, fetchBuffer, locateRawFolder, parseArgs, readYaml } from '../lib.mjs';

const args = parseArgs(process.argv.slice(2));
const requestedId = args.item;

if (!requestedId) {
	console.error('Usage: npm run fetch:assets -- --item <item_id>');
	process.exit(1);
}

const items = readYaml('data/manifests/items.yaml') ?? [];
const item = items.find((entry) => entry.item_id === requestedId);

if (!item) {
	console.error(`Unknown item: ${requestedId}`);
	process.exit(1);
}

const rawFolder = locateRawFolder(requestedId);
if (!rawFolder) {
	console.error(`No raw folder found for ${requestedId}`);
	process.exit(1);
}
const htmlPath = path.join(rawFolder, `${requestedId}.html`);
if (!fs.existsSync(htmlPath)) {
	console.error(`Missing raw html: ${htmlPath}`);
	process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);
const assetsDir = path.join(process.cwd(), 'public', 'assets', 'images');
ensureDir(assetsDir);

const urls = new Set();
$('img[src]').each((_, element) => {
	const src = $(element).attr('src');
	if (!src || src.startsWith('data:') || src.includes('Count')) return;
	urls.add(new URL(src, item.original_url).toString());
});

for (const url of urls) {
	const fileName = path.basename(new URL(url).pathname);
	const target = path.join(assetsDir, fileName);
	if (fs.existsSync(target)) continue;
	const asset = await fetchBuffer(url);
	fs.writeFileSync(target, asset.body);
	console.log(`Fetched asset ${fileName}`);
}
