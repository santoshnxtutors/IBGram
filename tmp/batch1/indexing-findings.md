# Global technical indexing findings (sitemap-wide)

## Clean / OK
- Sitemap: 1,638 URLs. All https, all trailing-slash, no admin/api/query-param URLs, no duplicates, no uppercase.
- Sampled URLs across every page type (city, area, society, sector, school, subject, igcse, blog, core) all return HTTP 200 (content exists).
- Key IB pages emit `index, follow` (homepage default-index; /ib-tutors/, city, area pages all index,follow). No accidental noindex on target/important pages.
- Production serves target pages from the JSON store (verified: live MG Road matches generated-pages.local.json verbatim; sector-56 resolves to the published gurgaon entry locally and matches live). No prod/local drift observed.

## Issues to decide / fix (global)
1. HOST CANONICALIZATION (highest priority, sweeping):
   - `https://ibgram.com/*` 301-redirects to `https://www.ibgram.com/*` (www is the live 200 host).
   - BUT every sitemap URL and every canonical tag uses NON-www `ibgram.com`.
   - Effect: sitemap advertises redirecting URLs; canonicals point to a redirecting host.
   - Two valid fixes (user decision; NOT auto-applied because it touches every URL + the
     validator regex `^https://ibgram\.com/` + all seed data + the 300 new pages):
       a) Make www canonical: change SITE_URL/absoluteUrl base to https://www.ibgram.com
          (one base constant) + update validator regex + regenerate canonicals.
       b) Make non-www canonical: flip the host 301 to www -> non-www at the host/Vercel level
          (keeps existing code/canonicals correct; infra change, no code change).
   - The 300 new batch-1 pages use ibgram.com canonicals to stay consistent with the existing
     codebase convention, so this batch does not make the situation worse.

2. IGCSE city pages are noindex but in sitemap (e.g., /igcse-tutors/delhi/ => `noindex, follow`).
   Noindex URLs should not be in the sitemap. Relevant to the IGCSE batch (not batch 1).
   Will be resolved when IGCSE pages are enriched + set to index, or removed from sitemap if kept thin.

## Pre-deploy manual check (could not verify; DB read is intentionally restricted)
- Confirm the production database has NO conflicting *published* GeneratedPage rows for the 300
  batch-1 paths. The area/city/subject routes are DB-first (DB -> JSON store -> static). If prod DB
  has published rows for these exact fullPaths (e.g., from a prior `db:push-all-pages` run), the
  DB-first read would SHADOW the JSON-store content for those routes.
  - Evidence suggests DB is currently empty/unreachable in prod (live MG Road == JSON store verbatim;
    igcse city pages are noindex, implying no published-index DB rows). But verify before relying on it.
  - Society & sector routes are JSON-store-only (no DB read), so they are unaffected regardless.
