# IBGram — Long-Form SEO Page Inventory

**Repo:** santoshnxtutors/IBGram
**Branch:** `codex-publish-project`
**Site:** https://www.ibgram.com/
**Date:** 2026-05-30
**Stack:** Next.js 16.2.2 (App Router) · React 19 · TypeScript 5 · Prisma 6.19 · PostgreSQL
**Purpose:** Read-only inventory of every public route, its current content source, current word/FAQ/SEO health, and rewrite priority. This is the input doc for [IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md](IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md).
**This document changes no source files.**

---

## 0. Quick Numbers

| | Count |
|---|---|
| Public marketing routes inventoried | 36 |
| Static marketing routes | 21 |
| Dynamic `[param]` templates | 13 |
| Other public routes (`/tutor-profile/`, `/tutor-compare/`) | 2 |
| Protected (do **not** rewrite) | 5 |
| **Eligible for long-form rewrite** | **31** |
| Eligible static pages (single rewrite per route) | ~16 |
| Eligible dynamic templates (drive 100s of generated URLs via `GeneratedPage`) | 13 |
| Supported cities (IB) | 29 (Gurugram, Delhi, Noida, Mumbai + 25 more) |
| Pre-seeded Gurugram money pages in DB | 26 (1 city hub + 7 areas + 3 schools + 1 IGCSE hub + 6 IGCSE subjects + 9 IB subjects — via [seed-gurgaon-money-pages.ts](../database/prisma/seed-gurgaon-money-pages.ts)) |
| Pre-seeded Gurgaon → Gurugram redirects | 13 (via [seed-seo-rules.ts](../database/prisma/seed-seo-rules.ts)) |
| Priority **P0** (money pages) | 8 |
| Priority **P1** (important SEO pages) | 11 |
| Priority **P2** (supporting pages) | 12 |
| Priority **P3** (low / noindex candidates) | 5 |

---

## 1. Protected Pages — DO NOT REWRITE

These pages must keep their current copy, headings, SEO positioning, layout, and section structure. Tiny technical fixes (broken imports, accessibility, responsive breakpoints) are permitted; copy edits are not.

| Path | File | Why protected |
|---|---|---|
| `/` | [src/app/(marketing)/page.tsx](../src/app/(marketing)/page.tsx) | Explicitly protected — homepage |
| `/ib-tutors/` | [src/app/(marketing)/ib-tutors/page.tsx](../src/app/(marketing)/ib-tutors/page.tsx) | Treated as the "main IB page / IB hub" per user instruction. **Assumption** — there is no dedicated `/ib/` route in this repo. If the user considers `/programmes/dp/` to be the canonical "main IB page" instead, swap that into the protected set. |
| `/tutors/` | [src/app/(marketing)/tutors/page.tsx](../src/app/(marketing)/tutors/page.tsx) | Explicitly protected — main tutors directory |
| `/admissions/` | [src/app/(marketing)/admissions/page.tsx](../src/app/(marketing)/admissions/page.tsx) | Explicitly protected |
| `/admissions/test-prep/` | [src/app/(marketing)/admissions/test-prep/page.tsx](../src/app/(marketing)/admissions/test-prep/page.tsx) | Explicitly protected |

> `/login/` and `/signup/` are not "protected" but are excluded from rewrite scope (auth pages, must be `noindex`).

---

## 2. Eligible Routes — Full Page Inventory

Columns:
- **Source** — `hardcoded` (JSX + static TS), `static-seed` (TS data in `src/lib/seo/`), `db-first` (Prisma `GeneratedPage` → JSON fallback → static-seed fallback), `generated-only` (JSON store via `src/lib/generated-pages/` only), `mixed`
- **Words** — body word estimate of the rendered page (today). Long city pages span 1,500–2,000 because they assemble from many static sections; static marketing pages are mostly 600–1,500.
- **FAQs** — count today (target is **≥ 8**)
- **Meta / Schema / Crumb / Idx** — metadata exported / JSON-LD present / breadcrumb component / indexable
- **Risk** — `thin` (under 1,200 words), `dup` (template-derived siblings risk duplicate content), `responsive` (long-form risk on small screens)
- **Pri** — P0 money, P1 important SEO, P2 supporting, P3 low

### 2.1 Programme pages

| Route | File | Source | Words | FAQs | Meta | Schema | Crumb | Idx | Risk | Pri |
|---|---|---|---|---|---|---|---|---|---|---|
| `/programmes/` | [programmes/page.tsx](../src/app/(marketing)/programmes/page.tsx) | hardcoded | ~1,200 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P0** |
| `/programmes/pyp/` | [programmes/pyp/page.tsx](../src/app/(marketing)/programmes/pyp/page.tsx) | hardcoded | ~1,100 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P0** |
| `/programmes/myp/` | [programmes/myp/page.tsx](../src/app/(marketing)/programmes/myp/page.tsx) | hardcoded | ~1,150 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P0** |
| `/programmes/dp/` | [programmes/dp/page.tsx](../src/app/(marketing)/programmes/dp/page.tsx) | hardcoded | ~1,200 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P0** |
| `/programmes/cp/` | [programmes/cp/page.tsx](../src/app/(marketing)/programmes/cp/page.tsx) | hardcoded | ~1,050 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P0** |

> All five programme pages are entirely client/static JSX with **no metadata exports**, **no JSON-LD**, **no breadcrumbs**, and **zero FAQs**. They are the highest-impact rewrites in the project.

### 2.2 Course pages

| Route | File | Source | Words | FAQs | Meta | Schema | Crumb | Idx | Risk | Pri |
|---|---|---|---|---|---|---|---|---|---|---|
| `/courses/[curriculum]/[subject]/` | [courses/[curriculum]/[subject]/page.tsx](../src/app/(marketing)/courses/[curriculum]/[subject]/page.tsx) | hardcoded client | ~650 | 0 | partial | ✗ | ✗ | ✓ | thin · dup | **P0** |

This single template currently renders **all** IB and IGCSE subject pages (e.g. `/courses/ib/math-aa-hl/`, `/courses/igcse/physics/`). Each subject combination is thin and templated. This is the **largest single SEO opportunity** — one rewrite of the template + per-subject `GeneratedPage` records lifts dozens of pages at once.

### 2.3 IB Tutors location templates

| Route pattern | File | Source | Words | FAQs | Meta | Schema | Crumb | Idx | Risk | Pri |
|---|---|---|---|---|---|---|---|---|---|---|
| `/ib-tutors/[citySlug]/` | [ib-tutors/[citySlug]/page.tsx](../src/app/(marketing)/ib-tutors/%5BcitySlug%5D/page.tsx) | db-first → static-seed | ~1,500–2,000 | ~5–8 | ✓ | ✓ | ✓ | ✓ | dup | **P1** |
| `/ib-tutors/[citySlug]/areas/[areaSlug]/` | [areas/[areaSlug]/page.tsx](../src/app/(marketing)/ib-tutors/%5BcitySlug%5D/areas/%5BareaSlug%5D/page.tsx) | db-first → static-seed | ~1,100–1,400 | ~4 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P1** |
| `/ib-tutors/[citySlug]/schools/[schoolSlug]/` | [schools/[schoolSlug]/page.tsx](../src/app/(marketing)/ib-tutors/%5BcitySlug%5D/schools/%5BschoolSlug%5D/page.tsx) | db-first → static-seed | ~900–1,200 | ~3–4 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P1** |
| `/ib-tutors/[citySlug]/sectors/[sectorSlug]/` | [sectors/[sectorSlug]/page.tsx](../src/app/(marketing)/ib-tutors/%5BcitySlug%5D/sectors/%5BsectorSlug%5D/page.tsx) | generated-only | ~800–1,000 | ~2–3 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P2** |
| `/ib-tutors/[citySlug]/societies/[societySlug]/` | [societies/[societySlug]/page.tsx](../src/app/(marketing)/ib-tutors/%5BcitySlug%5D/societies/%5BsocietySlug%5D/page.tsx) | generated-only | ~700–900 | ~2–3 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P2** |
| `/ib-tutors/[citySlug]/[pageSlug]/` | [[pageSlug]/page.tsx](../src/app/(marketing)/ib-tutors/%5BcitySlug%5D/%5BpageSlug%5D/page.tsx) | generated-only → static-seed | ~1,200–1,800 | ~4–6 | ✓ | ✓ | ✓ | ✓ | dup | **P1** |

Already wired through `GeneratedPage` + `PageBlock` + `PageFaq` + `PageMetadata` + `PageSchema` + `PageInternalLink`. Rewrite = author new long-form content into those DB rows; the renderers are ready.

### 2.4 IGCSE location templates

| Route pattern | File | Source | Words | FAQs | Meta | Schema | Crumb | Idx | Risk | Pri |
|---|---|---|---|---|---|---|---|---|---|---|
| `/igcse/` | [igcse/page.tsx](../src/app/(marketing)/igcse/page.tsx) | hardcoded + inline FAQ JSON-LD | ~1,600 | 6 | ✓ | ✓ (FAQPage) | ✗ | ✓ | — | **P1** |
| `/igcse-pages/` | [igcse-pages/page.tsx](../src/app/(marketing)/igcse-pages/page.tsx) | static-seed | ~900 | 0 | ✓ | ✓ (ItemList) | ✗ | ✓ | thin | **P1** |
| `/igcse-pages/[citySlug]/` | [igcse-pages/[citySlug]/page.tsx](../src/app/(marketing)/igcse-pages/%5BcitySlug%5D/page.tsx) | static-seed (derived from IB city) | ~1,400–1,700 | ~5–7 | ✓ | ✓ | ✓ | ✓ | dup | **P1** |
| `/igcse-tutors/[citySlug]/` | [igcse-tutors/[citySlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/page.tsx) | static-seed | ~1,100–1,400 | ~4–6 | ✓ | implicit | ✓ | ✓ | dup | **P1** |
| `/igcse-tutors/[citySlug]/areas/[areaSlug]/` | [areas/[areaSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/areas/%5BareaSlug%5D/page.tsx) | static-seed | ~900–1,200 | ~3–4 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P1** |
| `/igcse-tutors/[citySlug]/schools/[schoolSlug]/` | [schools/[schoolSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/schools/%5BschoolSlug%5D/page.tsx) | static-seed | ~700–900 | ~2–3 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P1** |
| `/igcse-tutors/[citySlug]/sectors/[sectorSlug]/` | [sectors/[sectorSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/sectors/%5BsectorSlug%5D/page.tsx) | static-seed | ~600–800 | ~2 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P2** |
| `/igcse-tutors/[citySlug]/societies/[societySlug]/` | [societies/[societySlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/societies/%5BsocietySlug%5D/page.tsx) | static-seed | ~600–800 | ~2 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P2** |
| `/igcse-tutors/[citySlug]/[subjectSlug]/` | [[subjectSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/%5BsubjectSlug%5D/page.tsx) | static-seed | ~800–1,000 | ~2–3 | ✓ | ✓ | ✓ | ✓ | thin · dup | **P1** |

> The IGCSE family does **not** yet read from `GeneratedPage`. Part 2 should add db-first fallbacks to these renderers (mirroring the IB family) so admin-authored long-form content can flow through.

### 2.5 Other marketing pages

| Route | File | Source | Words | FAQs | Meta | Schema | Crumb | Idx | Risk | Pri |
|---|---|---|---|---|---|---|---|---|---|---|
| `/about-us/` | [about-us/page.tsx](../src/app/(marketing)/about-us/page.tsx) | hardcoded | ~1,600 | 0 | ✗ | ✗ | ✗ | ✓ | — | **P1** |
| `/admissions/success-stories/` | [admissions/success-stories/page.tsx](../src/app/(marketing)/admissions/success-stories/page.tsx) | wraps scroll component | ~500 | 0 | partial | ✗ | ✗ | ✓ | thin | **P2** |
| `/blog/` | [blog/page.tsx](../src/app/(marketing)/blog/page.tsx) | hardcoded `MOCK_BLOGS` | ~800 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P1** |
| `/contact-us/` | [contact-us/page.tsx](../src/app/(marketing)/contact-us/page.tsx) | hardcoded (form) | ~450 | 0 | ✗ | ✗ | ✗ | ✓ | thin (intentional) | **P3** |
| `/jobs/` | [jobs/page.tsx](../src/app/(marketing)/jobs/page.tsx) | hardcoded `JOBS` | ~600 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P2** |
| `/subscription/` | [subscription/page.tsx](../src/app/(marketing)/subscription/page.tsx) | hardcoded plans | ~700 | 0 | ✗ | ✗ | ✗ | ✓ | thin | **P3** |

### 2.6 Tutor profile / compare

| Route | File | Source | Words | FAQs | Meta | Schema | Crumb | Idx | Risk | Pri |
|---|---|---|---|---|---|---|---|---|---|---|
| `/tutor-profile/[id]/` | [tutor-profile/[id]/page.tsx](../src/app/tutor-profile/%5Bid%5D/page.tsx) | db-first (tutors) | dynamic | 0 | ✗ (client) | ✗ | ✗ | ✓ | — | **P1** (template) |
| `/tutor-compare/` | [tutor-compare/page.tsx](../src/app/tutor-compare/page.tsx) | static query-driven | ~300 | 0 | ✗ | ✗ | ✗ | ✓ | dup-by-querystring | **P3** (noindex candidate) |

### 2.7 Auth / system

| Route | File | Status |
|---|---|---|
| `/login/` | [login/page.tsx](../src/app/(marketing)/login/page.tsx) | Out of scope · should be **noindex** (add to admin `RobotsRule`) |
| `/signup/` | [signup/page.tsx](../src/app/(marketing)/signup/page.tsx) | Out of scope · should be **noindex** |

---

## 3. Content Source Distribution

| Source | Count | Notes |
|---|---|---|
| `hardcoded` JSX + static TS | 16 | Programmes, about, blog, contact, jobs, subscription, igcse hub, course template, etc. **These are the highest-leverage rewrites** — moving them into the CMS unlocks editor-driven SEO updates. |
| `static-seed` (TS data in `src/lib/seo/city-pages-data/ib/*`) | many | IGCSE family + IB fallback. Already structured per-city; rewrite means authoring richer `GeneratedPage` rows so the db-first path supersedes the seed. |
| `db-first` (Prisma → JSON → static-seed fallback) | IB city / area / school / sector / society / `[pageSlug]` | Renderers already exist; just need richer DB content. |
| `generated-only` (JSON store) | IB sectors / societies | Same as above; recommend converting to db-first parity. |

---

## 4. Local SEO Geography Already in Repo

### 4.1 Cities (29)

`gurugram` · `delhi` · `noida` · `mumbai` · `pune` · `hyderabad` · `chennai` · `kolkata` · `ahmedabad` · `jaipur` · `chandigarh` · `lucknow` · `indore` · `kochi` · `coimbatore` · `surat` · `vadodara` · `faridabad` · `ghaziabad` · `greater-noida` · `dehradun` · `bhopal` · `nagpur` · `ludhiana` · `thane` · `navi-mumbai` · `mysuru` · `visakhapatnam` · `bhubaneswar`

### 4.2 Gurugram detail (in code)

- **Premium areas (4 enabled, 1 disabled):** Golf Course Road · DLF Phase 5 · Sector 57 · Sohna Road · *Sushant Lok (disabled)*
- **Nearby areas (mentioned, no page):** Nirvana Country · South City 1 · DLF Phase 1 · DLF Phase 4 · Sector 50 · Sector 65
- **Schools (3 enabled, 1 disabled):** Pathways World School · Lancers International · Scottish High International · *GD Goenka World (disabled)*
- **Subjects with strong inventory:** Math AA HL · Math AI HL · Physics · Chemistry · Economics · English A

> **Gap vs user priority list:** The user wants pages for DLF Phase 1–5, DLF Cyber City, Golf Course Extension Road, Sector 56, Sector 49, Nirvana Country, South City, MG Road, Galleria, Ardee City. Several of these are currently only listed as "nearby" with no published page. Part 2 must enable / generate these.

### 4.3 Delhi detail

- **Premium areas:** Vasant Vihar · Greater Kailash · Saket · *Chanakyapuri (disabled)*
- **Schools:** The British School New Delhi · American Embassy School · DPS International Saket

> **Gap:** User wants South Delhi · Defence Colony · Hauz Khas · Dwarka · Rohini — all missing.

### 4.4 Noida detail

- **Premium areas:** Sector 50 · Sector 62 · Noida Expressway · *Sector 128 (disabled)*
- **Schools:** Pathways School Noida · Genesis Global School · *Step by Step (disabled)*

> **Gap:** User wants Sector 44 · Jaypee Greens Wish Town — missing.

### 4.5 Gurgaon → Gurugram canonical rule

- 13 `RedirectRule` rows seeded by [seed-seo-rules.ts](../database/prisma/seed-seo-rules.ts) (Gurgaon → Gurugram, 301)
- 13 `CanonicalRule` rows seeded similarly
- "Gurgaon" already appears as an alias keyword in Gurugram page secondary keywords
- **Action:** keep Gurugram canonical URLs; use Gurgaon naturally in body copy / FAQs / meta keywords only. No duplicate indexed pages.

---

## 5. CMS Capability — What the DB Can Already Hold

Source: [database/prisma/schema.prisma](../database/prisma/schema.prisma).

### 5.1 Long-form content surface (`GeneratedPage` + relations)

| Need | Field / model | Available today? |
|---|---|---|
| Page slug + full path | `GeneratedPage.slug`, `.fullPath` (unique) | ✓ |
| Type / curriculum / status / index flag | `pageType`, `curriculum`, `status`, `indexFlag` | ✓ |
| Hierarchical parent / location FKs | `parentPageId`, `cityId`, `areaId`, `sectorId`, `societyId`, `schoolId` | ✓ |
| Primary + secondary keywords | `primaryKeyword`, `secondaryKeywords[]` | ✓ |
| H1 + hero title + hero subtitle + intro summary | `h1`, `heroTitle`, `heroSubtitle`, `introSummary` | ✓ |
| Meta title / description | `metaTitle`, `metaDescription` (also mirrored in `PageMetadata`) | ✓ |
| Canonical URL / robots | `canonicalUrl`, `canonicalTarget`, `robotsTag`, `sitemapIncluded` | ✓ |
| OG + Twitter | `ogTitle`, `ogDescription`, `twitterTitle`, `twitterDescription`, `ogImageAssetId` → `Asset` | ✓ |
| Long-form body in ordered sections (1,800+ words) | `PageBlock[]` with `blockType`, `heading`, `body`, `items` (JSON), `sortOrder` | ✓ (already used by [seed-gurgaon-money-pages.ts](../database/prisma/seed-gurgaon-money-pages.ts)) |
| FAQs (8+ per page) | `PageFaq[]` with `question`, `answer`, `sortOrder` | ✓ |
| JSON-LD schemas (multiple per page) | `PageSchema[]` with `schemaType`, `schemaJson` | ✓ |
| Internal-link graph | `PageInternalLink[]` (source ↔ target, `anchorText`, `context`) | ✓ |
| Quality metrics (word count, readability, dup risk, internal-link score) | `contentWordCount`, `qualityScore`, `localDepthScore`, `readabilityScore`, `duplicateRisk`, `internalLinkScore`, `schemaStatus` | ✓ |
| Audit trail (created/updated/approved/published by + at) | full set on `GeneratedPage` + `PagePublishLog` | ✓ |
| Versioning | `PageRevision[]` | ✓ |

### 5.2 Gaps relative to the rewrite spec

| Need | Gap | Mitigation for Part 2 |
|---|---|---|
| Primary CTA label / href on the page record | Not a dedicated field | Store inside a `PageBlock` with `blockType: 'cta'` and `items: { label, href, secondaryLabel?, secondaryHref? }` (already the pattern in the seed) |
| Explicit `breadcrumbsJson` on `GeneratedPage` | Generated at render time | Use `PageSchema` with `schemaType: 'BreadcrumbList'` (already the pattern) |
| Rich-text body (headings, lists, images inside a block) | `PageBlock.body` is a `String` | Use `PageBlock.items` (JSON) for structured lists; for paragraph + heading mix, create multiple ordered `PageBlock` rows. Optional future enhancement: add a `bodyJson` Json field with Plate/TipTap document — **not required to start Part 2** |
| `BlogPost` admin CRUD | API has GET + POST only; missing PATCH/DELETE | Add `/admin/api/blog/[id]/route.ts` (small, additive) — not blocking the SEO rewrite but should land alongside |
| IGCSE family db-first fallback | Renderers only read static-seed | Wire `getDbGeneratedSeoPageByPath` into the four IGCSE templates (mirror of IB) |

> **Net call: no Prisma schema changes are required to begin Part 2.** All long-form, FAQ, schema, and SEO content can be written today through `GeneratedPage` + `PageBlock` + `PageFaq` + `PageMetadata` + `PageSchema` + `PageInternalLink`. Field additions are deferrable enhancements, not blockers.

### 5.3 Admin surface already wired

`/admin/pages/*` (list, new, edit, preview, publish, SEO, schema, internal-links) · `/admin/blog/*` · `/admin/testimonials/*` · `/admin/success-stories/*` · `/admin/teacher-reviews/*` · `/admin/faqs/*` · `/admin/homepage/*` · `/admin/tutors/*` · `/admin/seo/*` (robots, sitemap, canonicals, redirects, keyword-clusters) · `/admin/seo-generator/*` · `/admin/menus/*` · `/admin/locations/*` (cities, areas, sectors, societies, schools) · `/admin/assets/*` · `/admin/audit-logs/*` · `/admin/imports/*` · `/admin/users/*` · `/admin/settings/*`

---

## 6. Risk Register (Per Page)

### 6.1 Thin-content risk (≤ 1,200 words today)

`/programmes/` · `/programmes/pyp/` · `/programmes/myp/` · `/programmes/dp/` · `/programmes/cp/` · `/courses/[curriculum]/[subject]/` (template) · `/igcse-pages/` · `/about-us/` (borderline) · `/blog/` · `/contact-us/` · `/jobs/` · `/subscription/` · `/admissions/success-stories/`

### 6.2 Template-duplication risk

Any IB / IGCSE template that fans out to many cities/areas/societies/schools without per-page unique copy. Mitigation in Part 2: each `GeneratedPage` row must own a distinct `primaryKeyword`, 2–3 distinct paragraphs of local context (landmark names, sector-specific schools, society-specific commute notes), and a unique FAQ block (8+).

### 6.3 Responsive layout risk (long-form pages on mobile)

Programme/course/blog rewrites will roughly **double or triple** word count. Three components need verification or upgrade before Part 2 ships content:

- `ProgrammeSection` (currently a card grid) — must wrap, no fixed widths, accept H3 subheads cleanly
- FAQ accordion — `/igcse/` uses `<details>`; ensure consistent component for all rewritten pages, mobile-tested
- Internal-link blocks (city link grids) — current cards must wrap at 360px and 390px viewports

### 6.4 Index hygiene risk

- `/login/`, `/signup/`, `/tutor-compare/` should be `noindex` (managed via admin `RobotsRule`). Verify in Part 2 launch checklist.

### 6.5 No-fake-claims risk

The current programme pages contain phrasing like *"99% success rate"* and *"certified IB tutors"*. Rewrites must replace with the cautious phrasing required by the brief: "families often look for…", "support can include…", "where home tutoring is practical…", "subject to tutor availability".

---

## 7. Priority Summary

### P0 — Money pages (rewrite first)
1. `/courses/[curriculum]/[subject]/` template + per-subject `GeneratedPage` rows (≈ 14 IB DP subjects + 12 IGCSE Cambridge + 12 IGCSE Edexcel)
2. `/programmes/`
3. `/programmes/pyp/`
4. `/programmes/myp/`
5. `/programmes/dp/`
6. `/programmes/cp/`
7. `/ib-tutors/gurugram/` + areas + schools + societies (build out the Gurugram map per user priority list)
8. `/igcse-tutors/gurugram/` + areas + schools + subjects (mirror)

### P1 — Important SEO pages
9. `/igcse/` (hub deepening)
10. `/igcse-pages/` (hub deepening)
11. `/igcse-pages/[citySlug]/` (Delhi, Noida priority)
12. `/igcse-tutors/[citySlug]/` (Delhi, Noida priority)
13. `/ib-tutors/[citySlug]/` for Delhi, Noida (richer DB content)
14. `/ib-tutors/[citySlug]/[pageSlug]/` for high-demand subjects in priority cities
15. `/about-us/`
16. `/blog/` hub + first 6 long-form posts
17. `/tutor-profile/[id]/` template (per-tutor SEO copy injected from CMS — bio + methodology long form)
18. IGCSE area / school / subject templates for Gurugram, Delhi, Noida
19. IGCSE family **wire-up to db-first** (renderer fix so DB content flows)

### P2 — Supporting pages
20. `/ib-tutors/[citySlug]/areas/` for non-Gurugram priority cities
21. `/ib-tutors/[citySlug]/sectors/` (Gurugram first)
22. `/ib-tutors/[citySlug]/societies/` (Gurugram first)
23. `/igcse-tutors/[citySlug]/sectors/` (Gurugram first)
24. `/igcse-tutors/[citySlug]/societies/` (Gurugram first)
25. `/jobs/`
26. `/admissions/success-stories/` (light expansion only)

### P3 — Low priority / noindex
27. `/contact-us/` (form page, keep short, ensure schema only)
28. `/subscription/` (conversion-focused; light SEO)
29. `/tutor-compare/` (noindex via robots)
30. `/login/` (noindex)
31. `/signup/` (noindex)

---

## 8. Acceptance Signals (what "done" looks like, per eligible page)

- Body word count ≥ **1,800** (queryable via `GeneratedPage.contentWordCount`)
- ≥ **8** FAQs in `PageFaq`
- `metaTitle`, `metaDescription`, `canonicalUrl`, `robotsTag`, `ogTitle`, `ogDescription`, `ogImageAssetId` all populated
- ≥ 3 `PageSchema` rows: `BreadcrumbList` + `FAQPage` + a primary type (`Service`, `EducationalOccupationalProgram`, `LocalBusiness`, `Person`)
- ≥ 4 outbound rows in `PageInternalLink` (siblings + parent hub)
- Breadcrumbs render on the page
- "IB Gram is an independent tutoring platform…" disclaimer rendered on any page mentioning a school
- No fake claims (no "guaranteed", no "99%", no "1000+ tutors" unless evidenced in admin)
- Lighthouse mobile layout shift = 0 at 360 / 390 / 768 / 1024 widths
- `status: 'published'` and `sitemapIncluded: true`

---

**End of inventory.**
The rewrite plan that depends on this document is at [IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md](IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md).
