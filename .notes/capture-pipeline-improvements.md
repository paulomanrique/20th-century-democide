# Capture pipeline — melhorias planejadas

Estado atual: `capture_all.mjs` roda single-pass com fallback wayback no
primeiro erro. Lições de `fgcmirror` aplicáveis abaixo.

## Prioridade A — aplicar logo após terminar o capture atual

### A1. Loop iterativo até convergir
**Problema.** Single-pass: os 228 HTM novos vão revelar refs que ainda
não estão no manifest. Lethal-politics-note tinha NOTE10–14 invisíveis
até a captura. Cada captura nova é uma fonte de novas refs.

**Implementação.** Wrapper `scripts/capture_iterate.mjs`:
```
for (let iter = 0; iter < 5; iter++) {
  const before = countManifest();
  await runCaptureAll();
  const after = countManifest();
  if (after === before) break;
  console.log(`iter ${iter}: +${after - before} items`);
}
```
`capture_all.mjs` já é idempotente em descoberta (filtra `indexedShortTitles`),
então re-rodar só processa os novos.

### A2. Idempotência verificada
**Problema.** Re-rodar `capture_all` em estado parcial: itens 'pending'
ou 'failed' ficam pra trás sem retry. Já 'published' são pulados ok.

**Implementação.** Adicionar modo `--retry-failed` e `--retry-pending`
ao `capture_all.mjs`:
```
const candidates = args['retry-failed']
  ? items.filter(i => i.capture_status === 'failed')
  : args['retry-pending']
  ? items.filter(i => i.capture_status === 'pending')
  : newPending;
```
E NÃO adicionar entries quando esses flags estão ligados.

### A3. Stickiness no primário
**Problema.** Hoje: `try fetcher(originalUrl); catch → wayback fallback`.
Qualquer 5xx, socket reset, ou timeout perde a primária mesmo quando
ela tem o conteúdo bom.

**Implementação.** Wrap fetch em retry loop com backoff:
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
Hard 404 → wayback. Tudo mais → 5 retries no primário primeiro.

## Prioridade B — robustez (depois de A)

### B1. Wayback: múltiplos vizinhos via CDX
**Problema.** `findWaybackSnapshot` retorna o primeiro snapshot 200.
Se a captura específica estiver corrompida, perde. Não tenta vizinhos.

**Implementação.** Mudar lib pra retornar lista, tentar até N:
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

// uso:
for (const snap of await findWaybackSnapshots(url, 20)) {
  try { return await fetcher(snap.url); } catch {}
}
```

### B2. Miss tracking persistente
**Problema.** Itens 'failed' viram massa parada. Sem histórico de
tentativas, sem retry futuro automático.

**Implementação.** `data/manifests/miss-attempts.json`:
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
Script `scripts/recover_misses.mjs` re-tenta entries com
`(now - last_attempt) > retry_due_date(n_attempts)` (backoff
exponencial: 1d, 3d, 7d, 14d).

## Prioridade C — long-tail

### C1. CDX cache local
**Onde.** `data/cdx-cache/<sha1(url)>.json` com TTL 7 dias.
**Por quê.** Reduz hits no Wayback durante retries; permite trabalho
offline na fase de normalize/fix.

### C2. Strip Wayback chrome
**Quando.** Após fetch via wayback fallback. Hoje o HTML cru contém
`<!-- BEGIN WAYBACK TOOLBAR -->`, `<script src="archive.org/...">`,
`data-wbm-*` attrs, `__wm.*` blocks.
**Implementação.** Adicionar ao `normalizeHtml()`:
```
$('script[src*="archive.org"], link[href*="archive.org"]').remove();
$('[data-wbm-postjsonp], [data-wbm-bm]').removeAttr('data-wbm-postjsonp data-wbm-bm');
$('*').contents().filter((_, n) => n.type === 'comment' &&
  /BEGIN WAYBACK|END WAYBACK/.test(n.data)).remove();
```

### C3. CDX wildcard discovery
**Por quê.** Captura tudo arquivado sob `hawaii.edu/powerkills/*`,
mesmo URLs que nunca aparecem como link em página alguma. Pode
descobrir páginas "órfãs" preservadas só pelo Wayback.
**Cuidado.** Pode trazer lixo (versões antigas de URLs já capturadas,
páginas de teste). Filtrar por extension válida e dedup por
content hash.

### C4. sweep_refs como lib compartilhada
**Estado.** Regex `\]\(([A-Z0-9._-]+\.(HTM|...))\)` aparece em
`capture_all.mjs` e variante em `rehype-rewrite-corpus-links.mjs`.
**Implementação.** `scripts/lib_sweep_refs.mjs` exporta `discoverRefs(text)`,
usado por ambos.

## Ordem de execução proposta

1. **Aguardar capture atual terminar** (target ~30 min ainda)
2. **Validar resultado**: `npm run validate`, build, ver dist/
3. **Aplicar A1+A2+A3** (iterative wrapper + retry modes + stickiness)
   — branch `chore/capture-resilience`
4. **Rodar capture iterativa** — esperando 1-3 iterações
5. **Aplicar B1+B2** se houver falhas residuais
6. **Aplicar C1-C4** como cleanup/long-tail

## Métricas de sucesso

- Após iteração: `npm run validate:i18n` verde, build verde
- `scripts/audit_corpus_refs.mjs` (a criar) reporta: total refs vs.
  refs locais vs. refs fallback hawaii.edu
- Alvo realista: 80%+ dos refs apontam pra items locais; o resto cai
  pra fallback (páginas removidas, snapshots não-recuperáveis)
