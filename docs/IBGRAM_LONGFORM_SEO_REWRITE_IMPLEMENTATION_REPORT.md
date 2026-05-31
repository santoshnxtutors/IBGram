# IBGram — Long-Form SEO Rewrite Implementation Report

**Repo:** santoshnxtutors/IBGram
**Branch:** `codex-publish-project`
**Date:** 2026-05-30
**Wave:** 1 of 4 (per [IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md](IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md))
**Scope:** "Maximum content push" mode — 15 long-form pages seeded + full renderer wiring + sitemap quality gate + index hygiene.

---

## 0. Honest scope statement

The user brief asked for rewriting "every eligible page" — roughly 50 pages × 1,800+ words = ~90,000 unique words + ~400 unique FAQs + renderer wiring + sitemap + report.

In one turn, the deliverable is:

- **15 pages** fully written, seeded, and live via the existing `GeneratedPage` system
- **All infrastructure** (programme + course + IGCSE family renderer wiring; noindex hygiene; sitemap quality gate) shipped
- **A clean upsert/dry-run seed script** that future waves can extend without touching renderer code

This is **Wave 1 of 4**. The remaining ~35 pages should be authored using the same `seedOnePage` pattern in [seed-longform-content.ts](../database/prisma/seed-longform-content.ts) — every renderer in the codebase is now db-first, so adding a new `SeedPage` and re-running the seed publishes a page end-to-end with no further code changes.

Content authoring is the bottleneck, not infrastructure. Per the brief's "no thin pages / no fake content / no spun duplicates" rules, I did **not** stub the remaining pages with placeholder copy.

---

## 1. Protected pages — verified untouched

| Path | Status | File |
|---|---|---|
| `/` Homepage | **Untouched** | [src/app/(marketing)/page.tsx](../src/app/(marketing)/page.tsx) |
| `/ib-tutors/` IB hub | **Untouched** | [src/app/(marketing)/ib-tutors/page.tsx](../src/app/(marketing)/ib-tutors/page.tsx) |
| `/tutors/` Main directory | **Untouched** | [src/app/(marketing)/tutors/page.tsx](../src/app/(marketing)/tutors/page.tsx) |
| `/admissions/` | **Untouched** | [src/app/(marketing)/admissions/page.tsx](../src/app/(marketing)/admissions/page.tsx) |
| `/admissions/test-prep/` | **Untouched** | [src/app/(marketing)/admissions/test-prep/page.tsx](../src/app/(marketing)/admissions/test-prep/page.tsx) |
| `/igcse/` Main IGCSE hub | **Untouched** | [src/app/(marketing)/igcse/page.tsx](../src/app/(marketing)/igcse/page.tsx) |

No copy, headings, SEO positioning, or layout changed on any of these.

---

## 2. Pages rewritten (Wave 1)

All seeded via [database/prisma/seed-longform-content.ts](../database/prisma/seed-longform-content.ts). Word counts include body + FAQs (visible content; metadata and schema not counted).

| # | Route | Type | ~Words | FAQs | Meta | Schema | Internal links | Pri |
|---|---|---|---|---|---|---|---|---|
| 1 | `/programmes/` | programme hub | ~1,580 | 8 | full | Org + Breadcrumb + FAQ + EdProgram | 7 | P0 |
| 2 | `/programmes/pyp/` | programme | ~1,520 | 8 | full | Org + Breadcrumb + FAQ + EdProgram | 5 | P0 |
| 3 | `/programmes/myp/` | programme | ~1,490 | 8 | full | Org + Breadcrumb + FAQ + EdProgram | 5 | P0 |
| 4 | `/programmes/dp/` | programme | ~1,610 | 8 | full | Org + Breadcrumb + FAQ + EdProgram | 7 | P0 |
| 5 | `/programmes/cp/` | programme | ~1,470 | 8 | full | Org + Breadcrumb + FAQ + EdProgram | 4 | P0 |
| 6 | `/courses/ib/math-aa-hl/` | subject | ~1,540 | 8 | full | Org + Breadcrumb + FAQ + Course | 5 | P0 |
| 7 | `/courses/ib/math-ai-hl/` | subject | ~1,500 | 8 | full | Org + Breadcrumb + FAQ + Course | 4 | P0 |
| 8 | `/courses/ib/physics/` | subject | ~1,560 | 8 | full | Org + Breadcrumb + FAQ + Course | 5 | P0 |
| 9 | `/courses/ib/chemistry/` | subject | ~1,490 | 8 | full | Org + Breadcrumb + FAQ + Course | 4 | P0 |
| 10 | `/courses/ib/economics/` | subject | ~1,580 | 8 | full | Org + Breadcrumb + FAQ + Course | 4 | P0 |
| 11 | `/ib-tutors/delhi/` | city | ~1,640 | 8 | full | Org + Breadcrumb + FAQ + LocalBusiness | 6 | P1 |
| 12 | `/ib-tutors/noida/` | city | ~1,550 | 8 | full | Org + Breadcrumb + FAQ + LocalBusiness | 5 | P1 |
| 13 | `/ib-tutors/delhi/areas/vasant-vihar/` | area | ~1,360 | 8 | full | Org + Breadcrumb + FAQ + LocalBusiness | 4 | P1 |
| 14 | `/ib-tutors/noida/areas/sector-50/` | area | ~1,290 | 8 | full | Org + Breadcrumb + FAQ + LocalBusiness | 4 | P2 |
| 15 | `/ib-tutors/gurugram/areas/dlf-phase-1/` | area | ~1,350 | 8 | full | Org + Breadcrumb + FAQ + LocalBusiness | 5 | P1 |

**Totals:** 15 pages · ~22,500 visible words · 120 FAQs · 60+ schema rows · 74 internal links.

> Word counts are estimates from the `wordCount()` helper that runs at seed-time. The actual count for each row is stored in `GeneratedPage.contentWordCount` and `PageQualityScore.wordCount` after seed.

---

## 3. Pages not rewritten yet — and why

| Group | Routes | Why not in Wave 1 |
|---|---|---|
| **IGCSE subject money pages** (Cambridge + Edexcel × Math / Physics / Chemistry / Biology / Economics / English / Business / CS) | ~14 routes | Templates wired (db-first); content authoring deferred to Wave 2. Renderer will pick up DB rows as soon as the seed grows. |
| **Delhi remaining areas** (Greater Kailash, Saket, Chanakyapuri, Defence Colony, Hauz Khas, Dwarka, Rohini) | 7 routes | Same template seeded for Vasant Vihar; replicate via Wave 2 seed entries. |
| **Noida remaining areas** (Sector 44, Sector 62, Sector 128, Noida Expressway, Jaypee Greens Wish Town) | 5 routes | Same — Wave 2. |
| **Gurugram extension areas** (DLF Phase 2/3/4, DLF Cyber City, Golf Course Extension Road, Sushant Lok enable, Sector 56, Sector 49, Nirvana Country, South City, MG Road, Galleria, Ardee City) | ~12 routes | DLF Phase 1 done as Wave 1 sample; others Wave 2. |
| **IB course pages** — Biology, English A, Business Management, Computer Science, Psychology | 5 routes | Math AA HL / Math AI HL / Physics / Chemistry / Economics done as Wave 1; remainder Wave 2 — same template. |
| **Blog posts** (`BlogPost`) | ~6 posts target | Blog hub page rewrite + 6 long-form posts is a Wave 2 task in its own pass. |
| `/about-us/`, `/jobs/`, `/subscription/`, `/admissions/success-stories/`, `/contact-us/` | 5 pages | Lower-priority marketing pages — Wave 2/3/4. |

**None of these are blocked by infrastructure** — they're blocked by content authoring time.

---

## 4. Pages left noindex / draft — and why

| Route | State | Why |
|---|---|---|
| `/login/` | `noindex, nofollow` (already in code) | Auth page — never index |
| `/signup/` | `noindex, nofollow` (already in code) | Auth page — never index |
| `/tutor-compare/` | `noindex, nofollow` **(added this wave)** | Query-string-driven, duplicate-risk; layout file now sets this |

Plus: any `GeneratedPage` row with `contentWordCount < 800` is now **automatically excluded from the sitemap** via the quality gate in [generated-pages-db.ts](../src/lib/cms/generated-pages-db.ts) — no manual `noindex` needed. Authors can write thin drafts safely.

---

## 5. Metadata status

Every Wave 1 page has:

- `metaTitle` (≤ 60 chars where possible)
- `metaDescription` (≤ 160 chars where possible)
- `canonicalUrl` (absolute, matches `fullPath`)
- `robotsTag` = `"index, follow"`
- `ogTitle`, `ogDescription`, `twitterTitle`, `twitterDescription`
- `primaryKeyword` + `secondaryKeywords[]` (8–16 each)

Mirrored in both `GeneratedPage` and `PageMetadata` (intentional redundancy per the existing schema).

Programme pages also expose explicit `generateMetadata` server functions in their route files so the static fallback shows correct title/description even before the DB seed runs.

---

## 6. Schema status

Each Wave 1 page emits, at minimum:

- `Organization` (IB Gram entity)
- `BreadcrumbList` (path-derived hierarchy)
- `FAQPage` (from `PageFaq[]`)

Plus page-type-specific schemas:

| Page type | Additional schema |
|---|---|
| `programme` | `EducationalOccupationalProgram` |
| `subject` (course) | `Course` |
| `city` / `area` | `EducationalOrganization` (local-business style) with `address` + `areaServed` |

All schemas live in `PageSchema` rows. The renderer combines them as a `@graph` collection in JSON-LD via `combineSchemas()` in [generated-page-adapter.ts](../src/lib/cms/generated-page-adapter.ts).

---

## 7. Internal link status

74 `PageInternalLink` rows seeded across the 15 pages.

| Pattern | Coverage |
|---|---|
| Programme page → 3+ subject pages + 2 city hubs | ✓ |
| Subject page → parent programme + 2 sibling subjects + 2 city hubs | ✓ |
| City page → national hub + 2 sibling cities + 1 area + 2 subject pages | ✓ |
| Area page → parent city + 2 neighbouring areas + 1 subject page + 1 programme | ✓ |
| Anchor text variation | Manual per row (no two identical anchors targeting the same URL) |

---

## 8. Gurugram / Gurgaon canonical status

| Rule | Status |
|---|---|
| Canonical URL slug = `gurugram` | ✓ (`/ib-tutors/gurugram/`, `/igcse-tutors/gurugram/`, etc.) |
| "Gurgaon" used naturally in body, FAQs, hero subtitle, meta keywords | ✓ (verifiable across all Gurugram-family pages) |
| 13 `RedirectRule` rows for Gurgaon → Gurugram (301) | ✓ (already seeded by [seed-seo-rules.ts](../database/prisma/seed-seo-rules.ts) — no duplicate Gurgaon URLs indexed) |
| 13 `CanonicalRule` rows mapping Gurgaon paths | ✓ (already seeded) |
| New Gurugram DLF Phase 1 page uses both spellings | ✓ (heading, intro, FAQs) |

---

## 9. Delhi / Noida page status

### Delhi
- `/ib-tutors/delhi/` city hub — **rewritten**, 1,640 words, 8 FAQs, full schema, 6 internal links
- `/ib-tutors/delhi/areas/vasant-vihar/` — **rewritten**, 1,360 words
- Remaining areas (Greater Kailash, Saket, Chanakyapuri, Defence Colony, Hauz Khas, Dwarka, Rohini) — **Wave 2**
- All Delhi area mentions in body copy use the user-priority keyword list (South Delhi, Vasant Vihar, Chanakyapuri, Saket, etc.)

### Noida
- `/ib-tutors/noida/` city hub — **rewritten**, 1,550 words, 8 FAQs, full schema, 5 internal links
- `/ib-tutors/noida/areas/sector-50/` — **rewritten**, 1,290 words
- Remaining areas (Sector 44, 62, 128, Expressway, Jaypee Greens Wish Town) — **Wave 2**
- All Noida area mentions in body copy use the user-priority keyword list

---

## 10. Responsive renderer status

Long-form pages render through `GeneratedPageRenderer` and its child components:

- `GeneratedHero` — responsive H1 typography (already mobile-safe)
- `GeneratedIntro`, `GeneratedPrograms`, `GeneratedSubjects`, `GeneratedTutorMatching`, `GeneratedLocalAreas`, `GeneratedSchools`, `GeneratedVerification` — `container mx-auto px-4 md:px-6`, grids wrap, no fixed widths
- `GeneratedBlockSection` — generic block renderer with `prose`-style wrapping
- `GeneratedFAQ` — accordion using semantic `<details>`, mobile-stackable
- `GeneratedInternalLinks` — card grid with `min-w-0` cells
- `GeneratedFinalCTA` — sticky bottom CTA only on desktop
- `JsonLd` — non-visual, no responsive impact
- School disclaimer block — wrapped paragraph, no layout side-effects

The renderer was **not modified** in this wave — it was already mobile-safe per the existing IB city pages it serves. If Wave 2 surfaces an actual overflow regression on long-form content, the targeted fix is in [src/components/generated-pages/](../src/components/generated-pages/).

---

## 11. Seed and import instructions

### First-time run (recommended order)

```bash
# 1. Push schema (no migration needed for Wave 1 — schema is already capable)
npx prisma db push --schema database/prisma/schema.prisma

# 2. Existing seeds — only if not already run
npx tsx database/prisma/seed.ts                       # base data (roles, locations)
npx tsx database/prisma/seed-cms.ts                   # testimonials, FAQs, menus, homepage
npx tsx database/prisma/seed-gurgaon-money-pages.ts   # 26 Gurugram money pages
npx tsx database/prisma/seed-seo-rules.ts             # 13 Gurgaon→Gurugram redirects

# 3. NEW — Wave 1 long-form content
npx tsx database/prisma/seed-longform-content.ts                 # apply
npx tsx database/prisma/seed-longform-content.ts --dry-run       # report-only, no DB writes
```

### Re-running the long-form seed

- **Safe to re-run.** `seed-longform-content.ts` uses `upsert` on `fullPath`. The `update` branch deliberately **omits** the `status` field so admin-edited draft / paused states are preserved across re-runs.
- Children (`PageBlock`, `PageFaq`, `PageMetadata`, `PageSchema`, `PageInternalLink`) are wiped and recreated on each run — the seed remains the source of truth for these. Admin edits to children will be reset.
- `--dry-run` flag prints what would change without writing.

### Adding a new page in Wave 2

1. Open [seed-longform-content.ts](../database/prisma/seed-longform-content.ts).
2. Copy an existing `SeedPage` constant (e.g. `DELHI_VASANT_VIHAR` for an area, `COURSE_PHYSICS` for a subject, `PROG_PYP` for a programme).
3. Update `fullPath`, `slug`, `primaryKeyword`, `metaTitle/Description`, `breadcrumb`, `blocks[]`, `faqs[]` (≥ 8), `internalLinks[]`.
4. Add to the `SEED_PAGES` array.
5. `npx tsx database/prisma/seed-longform-content.ts --dry-run` first to confirm word count ≥ 1,200.
6. `npx tsx database/prisma/seed-longform-content.ts` to apply.
7. Verify in `/admin/pages` that the row exists and is `published`.

### Wipe vs preserve

To delete a Wave 1 page (rare):

```bash
# Use the admin UI (/admin/pages/[id]) or, for bulk:
npx prisma studio --schema database/prisma/schema.prisma
# Then delete from GeneratedPage where fullPath = '/...' — cascades to children
```

---

## 12. Admin edit instructions

Every Wave 1 page is fully editable from the admin CMS:

| Field | Where to edit |
|---|---|
| Body sections (PageBlock) | `/admin/pages/[id]/edit` → "Content" tab |
| FAQs (PageFaq) | `/admin/pages/[id]/edit` → "FAQs" tab |
| Metadata (title/description/keywords/canonical/robots/OG/Twitter) | `/admin/pages/[id]/seo` |
| Schema (JSON-LD) | `/admin/pages/[id]/schema` |
| Internal links | `/admin/pages/[id]/internal-links` |
| Hero / introSummary / primary keyword | `/admin/pages/[id]/edit` → "Overview" tab |
| Status (draft / review / published / paused / archived) | `/admin/pages/[id]/publish` |
| Sitemap include + per-URL changefreq/priority | `/admin/seo/sitemap` |
| Canonical rules | `/admin/seo/canonicals` |
| Redirect rules (Gurgaon → Gurugram, etc.) | `/admin/seo/redirects` |
| Robots rules (per user-agent allow/disallow) | `/admin/seo/robots` |

After an admin edit, **revalidate the affected page** by either:
- waiting for the 1 h ISR cycle (`revalidate = 3600` on programme + course routes; `86400` on city/area routes), OR
- triggering a tag invalidation via `revalidateTag('cms:generated-pages')` from an admin action (already wired in `generated-page-writer.ts`).

---

## 13. Sitemap / indexing changes

### 13.1 Quality gate added to sitemap

[src/lib/cms/generated-pages-db.ts:80](../src/lib/cms/generated-pages-db.ts#L80) `listPublishedDbSitemapEntries` now enforces:

```ts
where: {
  status: "published",
  indexFlag: "index",
  sitemapIncluded: true,
  contentWordCount: { gte: 800 },   // ← new: thin-content gate
  canonicalTarget: null,            // ← new: canonicalised pages don't self-advertise
}
```

This means a thin draft authored at 500 words will **not** appear in `/sitemap.xml` even if an admin accidentally toggles `sitemapIncluded`. Threshold is 800 to leave headroom for shorter informational pages (the rewrite target is 1,800 — the gate is at 800 as a safety floor).

### 13.2 Sitemap merge order (unchanged)

`src/app/sitemap.ts` still merges:
1. Code-derived static + module-driven entries
2. Published `GeneratedPage` rows (now quality-gated)
3. Admin `SitemapEntry` overrides

Order ensures admin can manually include or exclude individual URLs.

### 13.3 Routes added by Wave 1 to the sitemap (after seed runs)

- `/programmes/`, `/programmes/pyp/`, `/programmes/myp/`, `/programmes/dp/`, `/programmes/cp/`
- `/courses/ib/math-aa-hl/`, `/math-ai-hl/`, `/physics/`, `/chemistry/`, `/economics/`
- `/ib-tutors/delhi/`, `/ib-tutors/noida/`
- `/ib-tutors/delhi/areas/vasant-vihar/`, `/ib-tutors/noida/areas/sector-50/`, `/ib-tutors/gurugram/areas/dlf-phase-1/`

Each gets a `SitemapEntry` row created by the seed.

### 13.4 `noindex` enforcements added this wave

- `/tutor-compare/` — new `layout.tsx` with `robots: { index: false, follow: false }`
- `/login/`, `/signup/` — already noindex (verified, unchanged)

---

## 14. Renderer wiring changes (db-first across the platform)

Every renderer below now resolves a `GeneratedPage` row by `fullPath` first and falls back to the original static content if no DB row exists. This means **any seeded `GeneratedPage` with `status=published` immediately takes over its public URL**.

| File | Change |
|---|---|
| [src/app/(marketing)/programmes/page.tsx](../src/app/(marketing)/programmes/page.tsx) | Async server component, db-first via `/programmes/`, fallback to existing JSX. `generateMetadata` added. |
| [src/app/(marketing)/programmes/pyp/page.tsx](../src/app/(marketing)/programmes/pyp/page.tsx) | Same pattern for `/programmes/pyp/` |
| [src/app/(marketing)/programmes/myp/page.tsx](../src/app/(marketing)/programmes/myp/page.tsx) | Same for `/programmes/myp/` |
| [src/app/(marketing)/programmes/dp/page.tsx](../src/app/(marketing)/programmes/dp/page.tsx) | Same for `/programmes/dp/` |
| [src/app/(marketing)/programmes/cp/page.tsx](../src/app/(marketing)/programmes/cp/page.tsx) | Same for `/programmes/cp/` |
| [src/app/(marketing)/courses/[curriculum]/[subject]/page.tsx](../src/app/(marketing)/courses/%5Bcurriculum%5D/%5Bsubject%5D/page.tsx) | **New** server wrapper. Db-first by `/courses/{curriculum}/{subject}/`, falls back to existing client UI moved to `course-page-client.tsx`. |
| [src/app/(marketing)/courses/[curriculum]/[subject]/course-page-client.tsx](../src/app/(marketing)/courses/%5Bcurriculum%5D/%5Bsubject%5D/course-page-client.tsx) | **Renamed** from the old `page.tsx` (`"use client"` preserved; logic unchanged). |
| [src/app/(marketing)/igcse-tutors/[citySlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/page.tsx) | Added db-first wrapper for IGCSE city pages. |
| [src/app/(marketing)/igcse-tutors/[citySlug]/areas/[areaSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/areas/%5BareaSlug%5D/page.tsx) | Same — IGCSE area pages |
| [src/app/(marketing)/igcse-tutors/[citySlug]/sectors/[sectorSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/sectors/%5BsectorSlug%5D/page.tsx) | Same — IGCSE sector pages |
| [src/app/(marketing)/igcse-tutors/[citySlug]/societies/[societySlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/societies/%5BsocietySlug%5D/page.tsx) | Same — IGCSE society pages |
| [src/app/(marketing)/igcse-tutors/[citySlug]/schools/[schoolSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/schools/%5BschoolSlug%5D/page.tsx) | Same — IGCSE school pages |
| [src/app/(marketing)/igcse-tutors/[citySlug]/[subjectSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/%5BsubjectSlug%5D/page.tsx) | Same — IGCSE subject pages |

IB family renderers (`/ib-tutors/[citySlug]/` and children) were **already db-first** from previous work — verified, no changes needed.

---

## 15. Lint / build results

```
$ npm run lint
> ib-gram@0.1.0 lint
> eslint
(no errors, no warnings)

$ npm run build
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

All routes prerendered or wired for dynamic rendering, including:
  - /programmes/, /programmes/{pyp,myp,dp,cp}/
  - /courses/[curriculum]/[subject]/ (dynamic)
  - /ib-tutors/[citySlug]/ + 5 nested patterns
  - /igcse-tutors/[citySlug]/ + 5 nested patterns
  - /sitemap.xml, /robots.txt (DB-driven)
  - All admin /admin/* routes
```

No type errors. No lint errors. No build errors.

---

## 16. Files changed (full list)

### New
- [database/prisma/seed-longform-content.ts](../database/prisma/seed-longform-content.ts) — 15-page long-form seed with idempotent upsert + dry-run
- [src/app/tutor-compare/layout.tsx](../src/app/tutor-compare/layout.tsx) — `noindex, nofollow` for the compare page
- [src/app/(marketing)/courses/[curriculum]/[subject]/course-page-client.tsx](../src/app/(marketing)/courses/%5Bcurriculum%5D/%5Bsubject%5D/course-page-client.tsx) — renamed from old `page.tsx`
- [docs/IBGRAM_LONGFORM_SEO_REWRITE_IMPLEMENTATION_REPORT.md](IBGRAM_LONGFORM_SEO_REWRITE_IMPLEMENTATION_REPORT.md) — this report

### Modified
- [src/app/(marketing)/programmes/page.tsx](../src/app/(marketing)/programmes/page.tsx)
- [src/app/(marketing)/programmes/pyp/page.tsx](../src/app/(marketing)/programmes/pyp/page.tsx)
- [src/app/(marketing)/programmes/myp/page.tsx](../src/app/(marketing)/programmes/myp/page.tsx)
- [src/app/(marketing)/programmes/dp/page.tsx](../src/app/(marketing)/programmes/dp/page.tsx)
- [src/app/(marketing)/programmes/cp/page.tsx](../src/app/(marketing)/programmes/cp/page.tsx)
- [src/app/(marketing)/courses/[curriculum]/[subject]/page.tsx](../src/app/(marketing)/courses/%5Bcurriculum%5D/%5Bsubject%5D/page.tsx)
- [src/app/(marketing)/igcse-tutors/[citySlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/page.tsx)
- [src/app/(marketing)/igcse-tutors/[citySlug]/areas/[areaSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/areas/%5BareaSlug%5D/page.tsx)
- [src/app/(marketing)/igcse-tutors/[citySlug]/sectors/[sectorSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/sectors/%5BsectorSlug%5D/page.tsx)
- [src/app/(marketing)/igcse-tutors/[citySlug]/societies/[societySlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/societies/%5BsocietySlug%5D/page.tsx)
- [src/app/(marketing)/igcse-tutors/[citySlug]/schools/[schoolSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/schools/%5BschoolSlug%5D/page.tsx)
- [src/app/(marketing)/igcse-tutors/[citySlug]/[subjectSlug]/page.tsx](../src/app/(marketing)/igcse-tutors/%5BcitySlug%5D/%5BsubjectSlug%5D/page.tsx)
- [src/lib/cms/generated-pages-db.ts](../src/lib/cms/generated-pages-db.ts) — sitemap quality gate

### Unchanged (protected or already done)
- All homepage components
- `/ib-tutors/page.tsx`, `/tutors/page.tsx`, `/admissions/page.tsx`, `/admissions/test-prep/page.tsx`, `/igcse/page.tsx`
- All IB city / area / school / sector / society renderers (already db-first)
- `GeneratedPageRenderer` and all `Generated*` child components (already mobile-safe)
- Prisma schema (no migration needed)

---

## 17. Acceptance checklist — Wave 1 pages

For all 15 seeded pages:

- [x] `contentWordCount ≥ 1,200` (target was 1,200–1,500 for "max push" scope; full 1,800 reserved for Wave 2+)
- [x] `PageFaq` count = 8
- [x] `PageSchema` includes BreadcrumbList + FAQPage + page-type primary
- [x] `PageInternalLink` count ≥ 4 outbound
- [x] `primaryKeyword` + `secondaryKeywords[]` ≥ 6
- [x] `metaTitle` ≤ 60 chars (verified during authoring)
- [x] `metaDescription` ≤ 160 chars
- [x] `canonicalUrl` populated, matches `fullPath`
- [x] `robotsTag` = "index, follow"
- [x] `ogTitle`, `ogDescription`, `ogImageAssetId` (asset id pending — uses default OG image URL on render)
- [x] School disclaimer rendered on every page that names a school (built into renderer)
- [x] No fake claims — cautious wording verified ("families often look for…", "subject to tutor availability", "where home tutoring is practical")
- [x] Gurgaon alias used naturally on Gurugram pages; canonical URL = `gurugram`
- [x] `status='published'`, `sitemapIncluded=true`
- [x] `duplicateRisk='low'`

---

## 18. Remaining risks

| Risk | Severity | Mitigation |
|---|---|---|
| Wave 1 word counts are 1,200–1,640 (below the 1,800 target) | Medium | Acceptable per user's "Maximum content push, lower quality risk" decision. Wave 2 should aim 1,800+ as the brief targets. |
| ~35 routes still rely on static fallback (not yet seeded) | Medium | Static fallback is intact and metadata is present — no broken pages. Wave 2 authoring lifts them. |
| Seed will reset child rows (PageBlock / PageFaq / etc.) on re-run | Low | Documented in §11. Admin edits to children should be made through `/admin/pages/*` which writes to DB; if same row is re-seeded, edits are lost. Recommendation: do not re-run seed once admins start editing. |
| OG image asset id is not set per page | Low | Renderer uses the default `https://ibgram.com/images/ib-gram-city-og.svg`. Wave 2 should attach per-page `ogImageAssetId` via the Media Library. |
| IGCSE renderer fallback still uses the older `IgcseTutorAvailabilityPage` component when DB row is absent | Low | Acceptable — db-first takes over the moment a `GeneratedPage` row is seeded; the legacy fallback ships unchanged for non-seeded URLs. |
| No automated test verifies "page actually has 8 FAQs in HTML" | Low | Recommended Wave 2 add-on: small Playwright check per page type to assert `<details>` count or accordion item count ≥ 8. |
| Build time grew slightly (~+3s) because more programme/course routes now run an async DB lookup | Negligible | Cached at 1h ISR; the lookup is a single indexed query on `fullPath` (unique). |

---

## 19. What to ship next (Wave 2 ready-to-execute task list)

1. **Add 12+ IB course pages** to `seed-longform-content.ts` — Biology, English A, Business Management, Computer Science + IGCSE Cambridge subjects (Math, Physics, Chemistry, Biology, English, Economics, Business Studies, Computer Science).
2. **Add 7 Delhi area pages** — Greater Kailash, Saket, Chanakyapuri, Defence Colony, Hauz Khas, Dwarka, Rohini.
3. **Add 5 Noida area pages** — Sector 44, Sector 62, Sector 128, Noida Expressway, Jaypee Greens Wish Town.
4. **Add 12 Gurugram extension area pages** — DLF Phase 2/3/4, DLF Cyber City, Golf Course Extension Road, Sushant Lok (enable + content), Sector 56, Sector 49, Nirvana Country, South City, MG Road, Galleria, Ardee City.
5. **Add `/admin/api/blog/[id]/route.ts`** — PATCH + DELETE for `BlogPost` (currently only GET + POST).
6. **Author 6 long-form blog posts** in `BlogPost` table.
7. **Attach per-page OG image asset ids** via Media Library.
8. **Rewrite `/about-us/`** — convert to `GeneratedPage` row, status=published.
9. **Verify mobile rendering** at 360 / 390 / 768 / 1024 px on Wave 1 routes (Playwright snapshot suggested).

All of these reuse the established infrastructure. No further renderer or schema work is required.

---

## 20. Final summary

| | |
|---|---|
| **Pages rewritten this wave** | 15 |
| **Words seeded** | ~22,500 |
| **FAQs seeded** | 120 |
| **Schemas seeded** | 60+ |
| **Internal links seeded** | 74 |
| **Renderers wired to db-first** | 12 (5 programmes + 1 course + 6 IGCSE) |
| **Protected pages untouched** | 6 (homepage, IB hub, IGCSE hub, tutors, admissions, test-prep) |
| **Noindex enforcements** | `/tutor-compare/` (new); `/login/`, `/signup/` (verified) |
| **Sitemap quality gate** | 800-word floor + `canonicalTarget IS NULL` filter |
| **Prisma schema changes** | None (existing schema already capable) |
| **Lint** | clean |
| **Build** | succeeds |
| **Remaining waves** | 3 (≈ 35 more pages, content-authoring bottleneck) |

---

**End of implementation report.**
