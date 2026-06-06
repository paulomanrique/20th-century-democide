#!/usr/bin/env node
/**
 * Audit corpus link coverage: for every .HTM/.HTML/.GIF/.JPG/.PDF
 * reference in the normalised item markdown, classify as:
 *   - local       → short_title exists in items.yaml
 *   - fallback    → falls through to hawaii.edu (manifest miss)
 *
 * Prints summary counts and (optionally) the top fallback filenames.
 *
 * Usage:
 *   node scripts/audit_corpus_refs.mjs
 *   node scripts/audit_corpus_refs.mjs --list-fallback   # show all
 *   node scripts/audit_corpus_refs.mjs --top 30           # top N fallbacks
 */
import fs from 'node:fs';
import path from 'node:path';
import { readYaml, parseArgs } from './lib.mjs';

const args = parseArgs(process.argv.slice(2));
const TOP = args.top ? Number(args.top) : 20;

const items = readYaml('data/manifests/items.yaml') ?? [];
const indexedShortTitles = new Set(items.map((i) => (i.short_title || '').toUpperCase()));
const itemsBySlug = new Map(items.map((i) => [i.item_id, i]));

const dir = path.resolve('src/content/en/items');
const refCounts = new Map();
const fallbackUses = new Map();

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
	const body = fs.readFileSync(path.join(dir, f), 'utf8');
	for (const m of body.matchAll(/\]\(([A-Z0-9._-]+\.(?:HTM|HTML|GIF|JPG|JPEG|PNG|PDF))\)/gi)) {
		const fn = m[1].toUpperCase();
		refCounts.set(fn, (refCounts.get(fn) || 0) + 1);
		if (!indexedShortTitles.has(fn)) {
			fallbackUses.set(fn, (fallbackUses.get(fn) || 0) + 1);
		}
	}
}

const totalRefs = [...refCounts.values()].reduce((a, b) => a + b, 0);
const fallbackRefs = [...fallbackUses.values()].reduce((a, b) => a + b, 0);
const localRefs = totalRefs - fallbackRefs;
const uniqueRefs = refCounts.size;
const uniqueFallback = fallbackUses.size;
const uniqueLocal = uniqueRefs - uniqueFallback;

console.log('=== Corpus link audit ===\n');
console.log(`Items in manifest:       ${items.length}`);
console.log(`  published:             ${items.filter((i) => i.capture_status === 'published').length}`);
console.log(`  failed:                ${items.filter((i) => i.capture_status === 'failed').length}`);
console.log(`  pending:               ${items.filter((i) => i.capture_status === 'pending').length}`);
console.log('');
console.log(`Item markdown files:     ${fs.readdirSync(dir).filter((x) => x.endsWith('.md')).length}`);
console.log(`Total link occurrences:  ${totalRefs}`);
console.log(`  resolved locally:      ${localRefs} (${((localRefs / totalRefs) * 100).toFixed(1)}%)`);
console.log(`  fallback to hawaii.edu: ${fallbackRefs} (${((fallbackRefs / totalRefs) * 100).toFixed(1)}%)`);
console.log('');
console.log(`Unique filenames:        ${uniqueRefs}`);
console.log(`  matched in manifest:   ${uniqueLocal}`);
console.log(`  missing:               ${uniqueFallback}`);

if (uniqueFallback > 0) {
	console.log('');
	console.log(`Top ${Math.min(TOP, uniqueFallback)} fallback filenames (by ref count):`);
	const sorted = [...fallbackUses.entries()].sort((a, b) => b[1] - a[1]);
	for (const [fn, count] of sorted.slice(0, TOP)) {
		console.log(`  ${count.toString().padStart(4)}× ${fn}`);
	}
	if (args['list-fallback']) {
		console.log('\nAll fallback filenames:');
		for (const [fn, count] of sorted) console.log(`  ${count}× ${fn}`);
	}
}
