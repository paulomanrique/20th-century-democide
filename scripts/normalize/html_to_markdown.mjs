import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { ensureDir, locateRawFolder, parseArgs, readYaml, sha256, writeYaml } from '../lib.mjs';

const args = parseArgs(process.argv.slice(2));
const requestedId = args.item;

if (!requestedId) {
	console.error('Usage: npm run normalize:item -- --item <item_id>');
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
const metaPath = path.join(rawFolder, `${requestedId}.meta.json`);
if (!fs.existsSync(htmlPath) || !fs.existsSync(metaPath)) {
	console.error(`Missing raw capture for ${requestedId}`);
	process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const $ = cheerio.load(html);
const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

function trimChrome(markdown) {
	const lines = markdown.split('\n');
	const joined = lines.join('\n');
	const markers = [
		'\n### DEATH BY GOVERNMENT',
		'\n## HOW MANY DID',
		'\n## DEMOCIDE SINCE',
		'\n## THE HOLOCAUST',
		'\n# HOW MANY',
		'\n# DEMOCIDE SINCE',
		'\n# THE HOLOCAUST',
		'\n# REFERENCES',
		'\n## Chapter ',
	];

	let cutAt = -1;
	for (const marker of markers) {
		const idx = joined.indexOf(marker);
		if (idx >= 0 && (cutAt === -1 || idx < cutAt)) {
			cutAt = idx + 1;
		}
	}

	if (cutAt === -1) {
		return markdown.trim();
	}

	return joined.slice(cutAt).trim();
}

turndown.addRule('images', {
	filter: 'img',
	replacement(_content, node) {
		const alt = node.getAttribute('alt') ?? '';
		const src = node.getAttribute('src') ?? '';
		if (!src || src.includes('Count')) return '';
		const fileName = path.basename(new URL(src, item.original_url).pathname);
		return `![${alt}](/assets/images/${fileName})`;
	},
});

$('script, style').remove();
$('body > a').remove();
$('img[alt="Home"], img[alt="Documents on Site"], img[alt="Personal"], img[alt="Democratic Peace"], img[alt="Democide"], img[alt="20th C. Democide"], img[alt="Megamurderers"], img[alt="Lesser Murderers"], img[alt="Why Democide"], img[alt="Dimensions"], img[alt="Conflict"], img[alt="Methods"], img[alt="Theory"], img[alt="Policy"], img[alt="Links"], img[alt="PHOTOS OF DEMOCIDE"], img[alt="Galleries"]').closest('a').remove();
$('a[href="welcome.html"], a[href="LIST.HTM"], a[href="PERSONAL.HTM"], a[href="MIRACLE.HTM"], a[href="MURDER.HTM"], a[href="20TH.HTM"], a[href="MEGA.HTM"], a[href="LESSER.HTM"], a[href="WHY.HTM"], a[href="DIMENSIONS.HTM"], a[href="VIOLENCE.HTM"], a[href="TECH.HTM"], a[href="THEORY.HTM"], a[href="POLICY.HTM"], a[href="LINKS.HTM"], a[href="RM1.PHOTOS.ROOM1.HTM"], a[href="GALLERY.HTM"]').remove();
const markdownBody = trimChrome(
	turndown.turndown(($('body').html() ?? $.root().html() ?? '').trim()).replace(/\n{3,}/g, '\n\n').trim(),
);

const outDir = path.join(process.cwd(), 'src', 'content', 'en', 'items');
const normalizedDir = path.join(process.cwd(), 'data', 'normalized', item.collection_id);
ensureDir(outDir);
ensureDir(normalizedDir);

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
	`  rawPath: ${path.relative(process.cwd(), htmlPath)}`,
	`  hash: ${meta.sha256 ?? sha256(html)}`,
	'originalFormat: html',
	'assets: []',
	'editorialNotes:',
	'  - Automated Markdown conversion. Review formatting before treating as fully normalized.',
	'draft: false',
	'---',
	'',
	].join('\n');

const outPath = path.join(outDir, `${requestedId}.md`);
fs.writeFileSync(outPath, `${frontmatter}${markdownBody}\n`);
fs.writeFileSync(path.join(normalizedDir, `${requestedId}.md`), markdownBody);

item.capture_status = 'published';
writeYaml('data/manifests/items.yaml', items);
console.log(`Normalized ${requestedId} -> ${path.relative(process.cwd(), outPath)}`);
