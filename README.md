# 20th Century Democide

Open source preservation project for the R.J. Rummel `powerkills` corpus, starting with the materials directly referenced by [`20TH.HTM`](https://www.hawaii.edu/powerkills/20TH.HTM).

## Mission

This repository preserves source material published by Rummel across `hawaii.edu/powerkills`, self-authored blogs, and archival mirrors when the original is missing or degraded. The project keeps a clear provenance trail for every preserved item and publishes a local static site through GitHub Pages.

## Principles

- Preserve first. Do not modernize or rewrite the original text.
- Separate source material rights from repository code and tooling.
- Prefer original URLs, then authorial mirrors, then Wayback snapshots.
- Keep editorial intervention outside the preserved body text.
- Make future translation work possible without blocking the English preservation track.

## Repository layout

- `data/manifests/`: source, collection, and item inventories.
- `data/raw/`: captured source material and fetch metadata.
- `data/normalized/`: normalized derivatives and working files.
- `public/assets/`: locally hosted images, PDFs, and preserved binaries.
- `src/content/`: published content collections.
- `scripts/`: inventory, fetch, normalize, and validate tooling.
- `handbook/`: editorial and provenance policies.

## Quick start

```bash
npm install
npm run inventory:20th
npm run fetch:item -- --item 20th-century-democide
npm run fetch:assets -- --item 20th-century-democide
npm run normalize:item -- --item 20th-century-democide
npm run validate
npm run dev
```

## Current status

The initial scaffold includes:

- an Astro site for GitHub Pages;
- manifests seeded from `20TH.HTM`;
- fetch and normalization scripts;
- GitHub workflows for validation, preview, and deploy.
