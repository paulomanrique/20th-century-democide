# Contributing

## Preservation workflow

1. Add or update inventory metadata in `data/manifests/`.
2. Capture the raw source into `data/raw/`.
3. Record provenance metadata and hashes.
4. Normalize into Markdown only when the source is stable enough to publish.
5. Keep editorial notes separate from preserved body text.

## Pull request categories

- `content-preservation`: new preserved item or recovered source.
- `source-recovery`: original URL broken, mirror or Wayback fallback added.
- `editorial-correction`: provenance, metadata, or non-substantive transcription fix.
- `translation`: reserved for a later multilingual phase.

## Rules

- Do not remove provenance metadata.
- Do not overwrite manually reviewed Markdown without an explicit reason.
- Do not add an open source license header to preserved source material.
- If a text change affects meaning, include the source basis in the PR description.

## Validation

Run before opening a PR:

```bash
npm run validate
```
