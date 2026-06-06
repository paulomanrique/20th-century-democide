# 20th-century-democide — Rummel/powerkills preservation archive

Open-source preservation archive for R.J. Rummel's *powerkills* corpus (`hawaii.edu/powerkills`, starting from `20TH.HTM`). Static Astro site published on GitHub Pages with full provenance metadata, local asset copies, and a multilingual editorial layer.

## 0. Language rule — English everywhere in code

All project-authored artifacts must be written in **English**: file names, code comments, variable/function/class names, commit messages, script output/log messages, internal notes, and documentation.

Exceptions (the only places non-English text belongs):
- translated UI strings in `src/lib/i18n/strings/*.ts`;
- translated editorial page content under `src/pages/[lang]/`;
- the preserved corpus itself (verbatim, whatever language the source uses).

---

## 1. Mission and core principle

The original hawaii.edu host may degrade or disappear. This project keeps a local, auditable copy.

**Preserve first.** Always prioritize provenance integrity over modernization or editorial reinterpretation. Never rewrite, modernize, or "improve" Rummel's original text. Fix only technical defects (encoding, rendering, link integrity). Project-authored clarifications must be marked as editorial notes, outside the preserved body text.

## 2. Two-layer architecture — critical distinction

The site has two strictly separated layers:

1. **Preserved corpus** (`src/content/en/items`, `src/content/en/collections`) — Rummel's original texts, English only, canonical, **never translated and never editorially altered**.
2. **Editorial/digested layer** (`src/pages/[lang]/` — home, `autor`, `tese`, `guia`, `democidios/*`, `preservation/*`) — project-authored interpretation, fully translatable.

**Translation scope:** only UI/chrome strings and the editorial pages. Do **not** propose or perform translation of anything under `src/content/en/**`. If a feature mixes both layers, translate only the surrounding chrome and keep the corpus in "original English".

Languages: `pt` (default), `en`, `es`, `fr`, `it`, `de`, `zh`, `ja` — see `src/lib/i18n/index.ts`. UI strings live in `src/lib/i18n/strings/*.ts`.

## 3. Stack

- Astro 6, static output, GitHub Pages (`site: https://paulomanrique.github.io/20th-century-democide`, `base: /20th-century-democide/`)
- Markdown content collections (`src/content.config.ts`)
- Node.js >= 22.12, ESM scripts (`.mjs`), cheerio + turndown for HTML→Markdown, YAML manifests
- Custom rehype plugin `src/lib/rehype-rewrite-corpus-links.mjs` rewrites preserved `.HTM`/`.GIF` links; root-relative URLs are prefixed with `base` at build time
- GitHub Actions for validation, preview, deploy

## 4. Commands

```bash
npm run dev                # local dev server
npm run build              # astro build
npm run validate           # full check: manifests + links + i18n + astro check + build

# Preservation pipeline (in order):
npm run inventory:20th                                 # seed manifests from 20TH.HTM
npm run fetch:item -- --item <item-id>                 # capture raw HTML
npm run fetch:assets -- --item <item-id>               # capture images/PDFs
npm run normalize:item -- --item <item-id>             # HTML → Markdown
npm run validate

# Individual validators:
npm run validate:manifests / validate:links / validate:i18n / validate:sync-status
```

Bulk capture helpers: `scripts/capture_all.mjs`, `scripts/capture_iterate.mjs`, `scripts/audit_corpus_refs.mjs`.

## 5. Repository layout

- `data/manifests/` — `sources.yaml`, `collections.yaml`, `items.yaml` (inventory + status tracking)
- `data/raw/` — captured source material + fetch metadata
- `data/normalized/` — normalized derivatives
- `public/assets/` — locally hosted images, PDFs, preserved binaries
- `src/content/en/` — published preserved corpus (canonical, English)
- `src/pages/` — site pages; `[lang]/` holds the SSG multilingual editorial pages
- `src/lib/i18n/` — language config + translated UI strings
- `scripts/` — inventory / fetch / normalize / validate tooling
- `handbook/` — editorial, provenance, source-priority, translation policies (**read before content work**)

## 6. Provenance rules (from `handbook/`)

Every preserved item records: canonical original URL, final capture URL, UTC capture timestamp, source type (`original`/`mirror`/`wayback`), content type, sha256 of raw capture, local raw + normalized paths.

Source priority when recovering material:
1. Live original on `hawaii.edu/powerkills`
2. Live original on self-authored blogs (e.g. `freedomspeace.blogspot.com`)
3. Self-authored mirrors preserving the original text
4. Wayback snapshot closest to publication window (or latest intact)
5. Mark `blocked` and document the failure

Prefer hosting referenced images/attachments locally. Source-material rights are separate from repo code/tooling — see `RIGHTS.md`.

## 7. Status

~44 items catalogued, all `capture_status: published`. Editorial layer migrated to SSG `[lang]/` routes with sitemap, OG tags, absolute URLs. Corpus translation: permanently out of scope (see §2); UI/editorial translation ongoing.
