# Non-Gurgaon SEO content pipeline

Writes unique, 2,000+ word, locality-specific landing-page content for every non-Gurgaon URL in
the sitemap, and wires it into the existing `GeneratedSeoPage` rendering path.

Gurgaon is **not** handled here — it has its own system in `src/lib/gurgaon-seo/`.

## Scope

1,638 sitemap URLs total, 397 of them Gurgaon. This pipeline owns the remaining **1,241**:

| Bucket | Count | Handled by |
|---|---:|---|
| IGCSE subject pages | 551 | this pipeline |
| IB subject + programme pages | 232 | this pipeline |
| IB / IGCSE area pages | 280 | this pipeline |
| City hubs (`ib-tutors`, `igcse-tutors`, `igcse-pages`) | 87 | this pipeline |
| School pages | 22 | this pipeline |
| National `/courses/*` and `/programmes/*` | 31 | this pipeline |
| Core marketing, blog, tutor profiles | 38 | bespoke (React / CMS) |

`1,203` of the 1,241 flow through this pipeline; the remaining 38 are hand-built React pages or
DB-backed CMS records.

## How it renders

No new renderer was written. Content is emitted as `GeneratedSeoPage` records — the same shape the
site already renders through `GeneratedPageRenderer` — and merged into the existing store:

```
src/lib/generated-pages/pages/*.json   <- sharded page bundles (generated)
src/lib/generated-pages/registry.ts    <- static imports of those shards (generated)
src/lib/generated-pages/store.ts       <- merges registry + data.ts + local JSON, memoised
```

Route resolution order in every page file is: DB -> local store -> static fallback. The IGCSE
routes, `/igcse-pages/[citySlug]`, `/courses/[curriculum]/[subject]` and `/programmes/*` were
DB-only and are now also wired to the local store.

## Running it

```bash
# 1. Extract real local context for every URL (areas, landmarks, schools, exam sessions)
npx tsx scripts/seo-content/build-url-context.ts     # -> tmp/seo/url-context.json

# 2. Turn that into one writing brief per URL, with a rotated angle + section order
npx tsx scripts/seo-content/build-briefs.ts          # -> tmp/seo/briefs/*.json

# 3. Agents write prose only, one per URL, into tmp/seo/agent-out/<key>.json
#    (driven by the write-pages workflow; see "Batching" below)

# 4. Join prose back to the brief and compute everything mechanical
npx tsx scripts/seo-content/finalize.ts              # -> tmp/seo/out/*.json

# 5. Gate on quality: length, AI tells, unverifiable claims, cross-page duplication
npx tsx scripts/seo-content/check-quality.ts         # -> tmp/seo/quality-report.json
                                                     #    tmp/seo/retry-keys.txt

# 6. Validate + shard into src/, regenerate the registry
npx tsx scripts/seo-content/compile-pages.ts
```

Steps 4-6 are idempotent and safe to re-run over a partially complete `agent-out/`.

## Batching

`tmp/seo/batches.json` holds the pending keys in priority order (city hubs, then national pages,
then IB subjects, then localities, then IGCSE subjects). To find what is still outstanding:

```bash
node -e "const fs=require('fs');const idx=require('./tmp/seo/brief-index.json');
const done=new Set(fs.readdirSync('tmp/seo/agent-out').map(f=>f.replace(/\.json$/,'')));
console.log(idx.filter(b=>!done.has(b.key)).length,'pending')"
```

Feed a slice of those keys to the `write-pages` workflow as `args`. Concurrency is capped at
`min(16, CPUs-2)`, so batches of 30-60 keep a run to a sensible length.

## What the agents may not do

Enforced by `check-quality.ts` and stated in `WRITER-GUIDE.md`:

- no tutor counts, ever
- no guaranteed grades, scores or percentage improvements
- no invented statistics, ratings or testimonials
- no claim of affiliation with any school, the IB Organization, Cambridge or Pearson Edexcel
- availability language stays conditional ("can be reviewed", "subject to tutor availability")
- 38 banned AI-tell phrases

Negated forms are allowed and expected — "no guaranteed grades" and "not officially affiliated
with" are correct copy, and the checker is negation-aware.

## Uniqueness

Three defences, in order of strength:

1. **Real per-URL facts.** Every brief carries that city's actual areas, landmarks, school
   clusters, nearby cities, subject inventory and exam-session focus.
2. **Rotation.** 20 opening angles x 7 section orders, assigned by index, so neighbouring pages
   never share a skeleton.
3. **Detection.** `check-quality.ts` builds a 64-value MinHash sketch over 8-grams for every page
   and flags any pair above 50% similarity, across the whole corpus.
