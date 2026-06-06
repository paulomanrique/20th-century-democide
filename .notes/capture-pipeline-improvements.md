# Capture pipeline — planned improvements

Current state: `capture_all.mjs` runs single-pass with wayback fallback on
the first error. Applicable lessons from `fgcmirror` below.

## Priority A — apply right after the current capture finishes

### A1. Iterative loop until convergence
**Problem.** Single-pass: the 228 new HTMs will reveal refs that are not
in the manifest yet. Lethal-politics-note had NOTE10–14 invisible until
capture. Every new capture is a source of new refs.

**Implementation.** Wrapper `scripts/capture_iterate.mjs`:
```
for (let iter = 0; iter < 5; iter++) {
  const before = countManifest();
  await runCaptureAll();
  const after = countManifest();
  if (after === before) break;
  console.log(`iter ${iter}: +${after - before} items`);
}
```
`capture_all.mjs` is already idempotent in discovery (filters
`indexedShortTitles`), so re-running only processes the new ones.

### A2. Verified idempotency
**Problem.** Re-running `capture_all` in a partial state: 'pending' or
'failed' items get left behind with no retry. 'published' ones are
correctly skipped.

**Implementation.** Add `--retry-failed` and `--retry-pending` modes
to `capture_all.mjs`:
```
const candidates = args['retry-failed']
  ? items.filter(i => i.capture_status === 'failed')
  : args['retry-pending']
  ? items.filter(i => i.capture_status === 'pending')
  : newPending;
```
And do NOT add entries when these flags are on.

### A3. Stickiness on the primary source
**Problem.** Today: `try fetcher(originalUrl); catch → wayback fallback`.
Any 5xx, socket reset, or timeout loses the primary even when it has the
good content.

**Implementation.** Wrap fetch in a retry loop with backoff:
```
async function fetchWithRetry(url, fetcher, opts = { tries: 5 }) {
  let lastErr;
  for (let i = 0; i < opts.tries; i++) {
    try {
      const p = await fetcher(url);
      if (p.status === 404) throw new HardError('404');
      if (p.status >= 400) throw new TransientError(`HTTP ${p.status}`);
      return p;
    } catch (e) {
      if (e instanceof HardError) throw e;
      lastErr = e;
      await sleep(500 * Math.pow(2, i));  // 500ms, 1s, 2s, 4s, 8s
    }
  }
  throw lastErr;
}
```
Hard 404 → wayback. Everything else → 5 retries on the primary first.

## Priority B — robustness (after A)

### B1. Wayback: multiple neighbors via CDX
**Problem.** `findWaybackSnapshot` returns the first 200 snapshot. If
that specific capture is corrupted, it loses. It never tries neighbors.

**Implementation.** Change the lib to return a list, try up to N:
```
async function findWaybackSnapshots(url, limit = 20) {
  const cdx = `https://web.archive.org/cdx/search/cdx?url=${enc(url)}
              &output=json&fl=timestamp,original,statuscode,mimetype
              &filter=statuscode:200&limit=${limit}`;
  const data = await fetchJson(cdx);
  return data.slice(1).map(([ts, orig, status, mime]) => ({
    ts, orig, status, mime,
    url: `https://web.archive.org/web/${ts}id_/${orig}`,
  }));
}

// usage:
for (const snap of await findWaybackSnapshots(url, 20)) {
  try { return await fetcher(snap.url); } catch {}
}
```

### B2. Persistent miss tracking
**Problem.** 'failed' items become dead weight. No attempt history, no
automatic future retry.

**Implementation.** `data/manifests/miss-attempts.json`:
```json
{
  "<item_id>": {
    "first_attempt": "2026-06-06T...",
    "last_attempt": "2026-06-06T...",
    "n_attempts": 1,
    "last_status": "404",
    "kind": "hard|transient"
  }
}
```
Script `scripts/recover_misses.mjs` retries entries with
`(now - last_attempt) > retry_due_date(n_attempts)` (exponential
backoff: 1d, 3d, 7d, 14d).

## Priority C — long-tail

### C1. Local CDX cache
**Where.** `data/cdx-cache/<sha1(url)>.json` with a 7-day TTL.
**Why.** Reduces Wayback hits during retries; allows offline work
during the normalize/fix phase.

### C2. Strip Wayback chrome
**When.** After fetching via wayback fallback. Today the raw HTML
contains `<!-- BEGIN WAYBACK TOOLBAR -->`, `<script src="archive.org/...">`,
`data-wbm-*` attrs, `__wm.*` blocks.
**Implementation.** Add to `normalizeHtml()`:
```
$('script[src*="archive.org"], link[href*="archive.org"]').remove();
$('[data-wbm-postjsonp], [data-wbm-bm]').removeAttr('data-wbm-postjsonp data-wbm-bm');
$('*').contents().filter((_, n) => n.type === 'comment' &&
  /BEGIN WAYBACK|END WAYBACK/.test(n.data)).remove();
```

### C3. CDX wildcard discovery
**Why.** Captures everything archived under `hawaii.edu/powerkills/*`,
even URLs that never appear as a link on any page. Can discover
"orphan" pages preserved only by the Wayback Machine.
**Caution.** May bring in junk (old versions of already-captured URLs,
test pages). Filter by valid extension and dedup by content hash.

### C4. sweep_refs as a shared lib
**State.** The regex `\]\(([A-Z0-9._-]+\.(HTM|...))\)` appears in
`capture_all.mjs` and a variant in `rehype-rewrite-corpus-links.mjs`.
**Implementation.** `scripts/lib_sweep_refs.mjs` exports `discoverRefs(text)`,
used by both.

## Proposed execution order

1. **Wait for the current capture to finish** (target ~30 min remaining)
2. **Validate the result**: `npm run validate`, build, inspect dist/
3. **Apply A1+A2+A3** (iterative wrapper + retry modes + stickiness)
   — branch `chore/capture-resilience`
4. **Run iterative capture** — expecting 1-3 iterations
5. **Apply B1+B2** if residual failures remain
6. **Apply C1-C4** as cleanup/long-tail

## Success metrics

- After iteration: `npm run validate:i18n` green, build green
- `scripts/audit_corpus_refs.mjs` (to be created) reports: total refs vs.
  local refs vs. hawaii.edu fallback refs
- Realistic target: 80%+ of refs point to local items; the rest falls
  back (removed pages, unrecoverable snapshots)
