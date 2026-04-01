import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const items = YAML.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'manifests', 'items.yaml'), 'utf8')) ?? [];
const sources = YAML.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'manifests', 'sources.yaml'), 'utf8')) ?? [];
const collections = YAML.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'manifests', 'collections.yaml'), 'utf8')) ?? [];

const sourceIds = new Set(sources.map((source) => source.source_id));
const collectionIds = new Set(collections.map((collection) => collection.collection_id));
const itemIds = new Set();

for (const item of items) {
	if (itemIds.has(item.item_id)) throw new Error(`Duplicate item_id: ${item.item_id}`);
	itemIds.add(item.item_id);
	if (!collectionIds.has(item.collection_id)) throw new Error(`Unknown collection_id for ${item.item_id}: ${item.collection_id}`);
	if (!sourceIds.has(item.preferred_source_id)) throw new Error(`Unknown preferred_source_id for ${item.item_id}: ${item.preferred_source_id}`);
	for (const fallback of item.fallback_source_ids ?? []) {
		if (!sourceIds.has(fallback)) throw new Error(`Unknown fallback_source_id for ${item.item_id}: ${fallback}`);
	}
}

console.log(`Manifest consistency check passed for ${items.length} items.`);
