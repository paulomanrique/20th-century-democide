import fs from 'node:fs';
import path from 'node:path';
import { readYaml, writeYaml } from '../lib.mjs';

const items = readYaml('data/manifests/items.yaml') ?? [];
const published = new Set(
	fs.readdirSync(path.join(process.cwd(), 'src', 'content', 'en', 'items'))
		.filter((file) => file.endsWith('.md'))
		.map((file) => file.replace(/\.md$/, '')),
);

for (const item of items) {
	if (published.has(item.item_id)) {
		item.capture_status = 'published';
		continue;
	}

	const metaPath = ['data/raw/hawaii-edu', 'data/raw/blogspot', 'data/raw/wayback']
		.map((folder) => path.join(process.cwd(), folder, `${item.item_id}.meta.json`))
		.find((candidate) => fs.existsSync(candidate));

	if (metaPath) {
		item.capture_status = 'captured';
	}
}

writeYaml('data/manifests/items.yaml', items);
console.log(`Synchronized manifest statuses for ${items.length} items.`);
