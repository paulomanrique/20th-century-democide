#!/usr/bin/env node
/**
 * Iterative wrapper around capture_all.mjs.
 *
 * Each pass of capture_all surfaces new HTM/HTML pages, whose
 * markdown bodies will reference further filenames that were
 * invisible in the previous iteration. This script reruns the
 * single-pass capture until the manifest size stops growing
 * (or a max-iter cap is hit).
 *
 * Usage:
 *   node scripts/capture_iterate.mjs              # up to 5 iters
 *   node scripts/capture_iterate.mjs --max 10
 *   node scripts/capture_iterate.mjs --kind htm   # passed through
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import { readYaml, parseArgs } from './lib.mjs';

const args = parseArgs(process.argv.slice(2));
const MAX = args.max ? Number(args.max) : 5;
const passthrough = [];
for (const k of ['kind', 'limit']) {
	if (args[k]) passthrough.push(`--${k}`, String(args[k]));
}

function runCaptureAll() {
	return new Promise((resolve, reject) => {
		const child = spawn(
			'node',
			['scripts/capture_all.mjs', ...passthrough],
			{ stdio: 'inherit' },
		);
		child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`exit ${code}`))));
	});
}

function manifestSize() {
	const items = readYaml('data/manifests/items.yaml') ?? [];
	return items.length;
}

console.log(`Iterative capture, max ${MAX} iterations.\n`);
for (let i = 1; i <= MAX; i++) {
	const before = manifestSize();
	console.log(`\n── Iteration ${i}/${MAX} — manifest size ${before} ──`);
	try {
		await runCaptureAll();
	} catch (e) {
		console.error(`Iteration ${i} failed: ${e.message}. Stopping.`);
		break;
	}
	const after = manifestSize();
	const delta = after - before;
	console.log(`── Iteration ${i} done: +${delta} items (total ${after}) ──`);
	if (delta === 0) {
		console.log('\n✓ Converged — no new refs discovered. Stopping.');
		break;
	}
}
console.log(`\nFinal manifest size: ${manifestSize()}`);
