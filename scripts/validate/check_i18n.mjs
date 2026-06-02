#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const STRINGS_DIR = path.resolve('src/lib/i18n/strings');
const INDEX_FILE = path.resolve('src/lib/i18n/index.ts');

const REQUIRED_LANGS = ['pt', 'en', 'es', 'fr', 'it', 'de', 'zh', 'ja'];

const errors = [];
const warnings = [];

const allKeys = new Set();
const dupKeys = new Map();

function loadStringModule(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const objStart = src.indexOf('= {');
  if (objStart < 0) throw new Error(`No object literal in ${filePath}`);
  const slice = src.slice(objStart + 2);

  const result = {};
  const keyRegex = /'([^']+)': \{/g;
  let m;
  while ((m = keyRegex.exec(slice)) !== null) {
    const key = m[1];
    const blockStart = slice.indexOf('{', m.index);
    let depth = 0;
    let blockEnd = -1;
    for (let i = blockStart; i < slice.length; i++) {
      const c = slice[i];
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) {
          blockEnd = i;
          break;
        }
      }
    }
    if (blockEnd < 0) throw new Error(`Unclosed block for key ${key} in ${filePath}`);
    const block = slice.slice(blockStart + 1, blockEnd);
    const langs = {};
    const langRegex = /(\w{2}):\s*['"`]/g;
    let lm;
    while ((lm = langRegex.exec(block)) !== null) {
      langs[lm[1]] = true;
    }
    result[key] = Object.keys(langs);
  }
  return result;
}

const files = fs.readdirSync(STRINGS_DIR).filter((f) => f.endsWith('.ts'));
for (const f of files) {
  const filePath = path.join(STRINGS_DIR, f);
  let parsed;
  try {
    parsed = loadStringModule(filePath);
  } catch (e) {
    errors.push(`${f}: parse error — ${e.message}`);
    continue;
  }
  for (const [key, langs] of Object.entries(parsed)) {
    if (allKeys.has(key)) {
      dupKeys.set(key, (dupKeys.get(key) ?? []).concat(f));
    } else {
      allKeys.add(key);
      dupKeys.set(key, [f]);
    }
    const missing = REQUIRED_LANGS.filter((l) => !langs.includes(l));
    if (missing.length) {
      errors.push(`${f}  '${key}': missing langs → ${missing.join(', ')}`);
    }
  }
}

for (const [key, files] of dupKeys.entries()) {
  if (files.length > 1) {
    errors.push(`Duplicate key '${key}' in: ${files.join(', ')}`);
  }
}

const indexSrc = fs.readFileSync(INDEX_FILE, 'utf8');
const importedSlugs = [...indexSrc.matchAll(/from '\.\/strings\/(\w+)'/g)].map((m) => m[1]);
const filesOnDisk = files.map((f) => f.replace(/\.ts$/, ''));
const missingImport = filesOnDisk.filter((s) => !importedSlugs.includes(s));
const stray = importedSlugs.filter((s) => !filesOnDisk.includes(s));
if (missingImport.length) errors.push(`Strings file(s) not imported in index.ts: ${missingImport.join(', ')}`);
if (stray.length) errors.push(`index.ts imports nonexistent file(s): ${stray.join(', ')}`);

console.log(`Checked ${allKeys.size} unique keys across ${files.length} modules.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log(`  ✘ ${e}`);
  process.exit(1);
}
console.log('✓ i18n key coverage OK');
