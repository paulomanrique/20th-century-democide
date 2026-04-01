import fs from 'node:fs';
import path from 'node:path';
import {
	ensureDir,
	fetchBuffer,
	fetchText,
	findWaybackSnapshot,
	parseArgs,
	readYaml,
	resolveRawFolder,
	sha256,
	sourceIdForUrl,
	writeYaml,
} from '../lib.mjs';

const args = parseArgs(process.argv.slice(2));
const requestedId = args.item;

if (!requestedId) {
	console.error('Usage: npm run fetch:item -- --item <item_id>');
	process.exit(1);
}

const items = readYaml('data/manifests/items.yaml') ?? [];
const item = items.find((entry) => entry.item_id === requestedId);

if (!item) {
	console.error(`Unknown item: ${requestedId}`);
	process.exit(1);
}

const extension = item.original_url.match(/\.([A-Za-z0-9]+)(?:$|\?)/)?.[1]?.toLowerCase() ?? 'html';
const fetcher = ['gif', 'jpg', 'jpeg', 'png', 'pdf'].includes(extension) ? fetchBuffer : fetchText;

let payload;
let sourceId = sourceIdForUrl(item.original_url);
let sourceType = sourceId === 'freedomspeace-blogspot' ? 'mirror' : 'original';
let rawFolder = path.join(process.cwd(), resolveRawFolder(item.original_url, sourceId));

try {
	payload = await fetcher(item.original_url);
	if (payload.status >= 400) throw new Error(`HTTP ${payload.status}`);
} catch (error) {
	const snapshot = await findWaybackSnapshot(item.original_url);
	if (!snapshot) throw error;
	payload = await fetcher(snapshot.url);
	sourceId = 'wayback';
	sourceType = 'wayback';
	rawFolder = path.join(process.cwd(), resolveRawFolder(snapshot.url, sourceId));
}

ensureDir(rawFolder);
const rawPath = path.join(rawFolder, `${requestedId}.${extension === 'htm' ? 'html' : extension}`);
fs.writeFileSync(rawPath, payload.body);

fs.writeFileSync(
	path.join(rawFolder, `${requestedId}.meta.json`),
	JSON.stringify(
		{
			item_id: requestedId,
			original_url: item.original_url,
			source_used: payload.finalUrl,
			source_type: sourceType,
			content_type: payload.contentType,
			sha256: sha256(payload.body),
			captured_at: new Date().toISOString(),
		},
		null,
		2,
	),
);

if (item.capture_status !== 'published') {
	item.capture_status = ['image', 'pdf'].includes(item.item_type) ? 'published' : 'captured';
}
writeYaml('data/manifests/items.yaml', items);
console.log(`Fetched ${requestedId} -> ${path.relative(process.cwd(), rawPath)}`);
