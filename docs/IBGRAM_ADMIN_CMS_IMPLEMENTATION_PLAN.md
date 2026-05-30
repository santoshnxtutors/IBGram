# IBGram — Admin CMS Implementation Plan (Phase 2)

**Date:** 2026-05-29
**Branch:** `codex-publish-project`
**Prior phases:**
- [IBGRAM_DYNAMIC_SEO_ADMIN_AUDIT.md](IBGRAM_DYNAMIC_SEO_ADMIN_AUDIT.md) — full repo audit
- [IBGRAM_DYNAMIC_SEO_REBUILD_PHASE_1.md](IBGRAM_DYNAMIC_SEO_REBUILD_PHASE_1.md) — structural backbone shipped

This is the implementation plan for the **DB-backed admin CMS layer** the user asked for in Phase 2. It is intentionally honest about scope.

---

## 1. Current repo state (reconciliation)

The existing schema at [database/prisma/schema.prisma](../database/prisma/schema.prisma) **already contains** most of what the Phase 2 prompt asks for:

| Phase 2 ask | Already in schema | Action |
|---|---|---|
| User + roles + permissions | `User`, `Role`, `Permission`, `UserRole`, `RolePermission`, `Session`, `RefreshToken`, `LoginAttempt` | reuse |
| CmsPage with sections/FAQs/metadata/schema/internal-links/revisions/publish-log/quality | `GeneratedPage`, `PageBlock`, `PageFaq`, `PageMetadata`, `PageSchema`, `PageInternalLink`, `PageRevision`, `PagePublishLog`, `PageQualityScore`, `PageGenerationJob`, `PageGenerationLog` | reuse — extensive |
| Tutor + tutor locations | `Tutor`, `TutorProfile`, `TutorSubject`, `TutorCurriculum`, `TutorLocation`, `TutorAvailability`, `TutorAsset` | reuse |
| Locations | `Country`, `State`, `City`, `Area`, `Sector`, `Society`, `School` | reuse |
| Redirects / canonicals / robots / sitemap | `RedirectRule`, `CanonicalRule`, `RobotsRule`, `SitemapEntry` | reuse — CRUD wired in Phase 1 |
| Keywords | `KeywordCluster`, `AnchorTextVariant` | reuse |
| Media | `AssetFolder`, `Asset` | reuse, but **needs upload endpoint** |
| Imports | `CsvImport`, `CsvImportRow`, `CsvImportError` | reuse |
| Audit log + settings | `AuditLog`, `SiteSetting`, `SeoSetting`, `AiProviderSetting` | reuse |
| Reference data | `Programme`, `Subject` | reuse |

**New models genuinely required** for marketing-CMS / Blog / FAQ library / Navigation / Testimonials:

| New model | Why | Status |
|---|---|---|
| `Testimonial` | Replace 4 hardcoded reviews in `ReviewsSection.tsx` + future homepage carousel | new |
| `SuccessStory` | Replace 4 hardcoded stories in `SuccessStories.tsx` | new |
| `BlogPost` | Replace `MOCK_BLOGS` and `BlogInsights` mocked array | new |
| `BlogCategory` | Blog taxonomy | new |
| `FaqItem` | Global FAQ library (existing `PageFaq` only attaches per page) | new |
| `NavigationMenu` + `NavigationMenuItem` | Dynamic header/footer/mobile nav | new |
| `FooterBlock` | Editable footer columns | new |
| `CtaBlock` | Reusable CTA library | new |
| `HomepageSection` | Order + toggle homepage sections | new |
| `MarketingPage` *(optional)* | Hand-curated marketing pages (`/`, `/about-us`, `/contact-us`, …) distinct from generated SEO `GeneratedPage` rows | new |

Phase 1 artifacts that **must not be regressed**:
- `src/lib/db.ts`, `src/lib/seo/seo-db.ts`, `src/proxy.ts`
- `src/components/seo-city/Breadcrumb.tsx`, `src/components/seo-city/SchoolDisclaimer.tsx`
- `src/app/admin/api/seo/{redirects,canonicals,robots,sitemap}/route.ts`
- `database/prisma/seed-seo-rules.ts`, `database/prisma/seed-gurgaon-money-pages.ts`
- DB-backed `src/app/sitemap.ts` + `src/app/robots.ts`
- Server-rendered `src/app/(marketing)/tutors/page.tsx` + `TutorsClient.tsx`

## 2. What still ships as static content (today)

After Phase 1, **public render still uses static** for:
- Homepage components (`src/components/home/*`)
- Marketing pages (`/about-us`, `/contact-us`, `/programmes/*`, `/blog`)
- Tutor data (`src/lib/tutor-data.ts`)
- 25 city SEO pages in `src/lib/seo/city-pages-data/ib/*`
- 100+ Gurgaon micro-pages from `src/lib/local-seo/gurgaon/`
- Existing IGCSE content
- Header/Footer/Navigation

DB has: 26 Gurgaon money-page rows (from Phase 1 seed) + Redirects + Canonicals + Robots + Sitemap entries.

## 3. What Phase 2 ships (this PR)

Honest scope. Per the audit's plan and the time available, Phase 2 ships **the foundation that unlocks admin CRUD across the marketing surface plus working file upload media**. Specifically:

### 3.1 Schema additions (new Prisma models)
- `Testimonial` (homepage + city page reviews)
- `SuccessStory` (homepage success carousel)
- `BlogPost`, `BlogCategory`, `BlogTag` (blog CMS)
- `FaqItem` (global FAQ library, with optional citySlug / pageId attachment)
- `NavigationMenu` + `NavigationMenuItem` (header/footer/mobile nav)
- `FooterBlock` (footer columns)
- `CtaBlock` (reusable CTA library)
- `HomepageSection` (order + visibility of homepage sections — points at existing `PageBlock` or carries inline content for marketing surfaces)

A formal Prisma migration is generated.

### 3.2 Media library — **direct file upload**
Per the user's explicit ask ("don't make for image by link — make it we can directly upload image"):
- `POST /admin/api/assets/upload` — multipart endpoint, validates mime + size, writes to `public/uploads/<folder>/<filename>`, creates `Asset` row, returns the asset
- `GET /admin/api/assets` — paginated browse with folder/filter
- `PATCH /admin/api/assets/:id` — edit alt text, title, caption
- `DELETE /admin/api/assets/:id` — remove (with optional file unlink)
- `/admin/assets` UI rewritten with drag-drop uploader + grid browser + alt-text editor

### 3.3 Admin CRUD forms with persistence
Real React forms with create/edit/delete that hit Prisma — not preview-only. Routes:
- `/admin/seo/redirects` — inline create + edit + delete (extending Phase 1 read-only table)
- `/admin/seo/canonicals` — inline create + edit + delete
- `/admin/seo/robots` — inline create + edit + delete
- `/admin/seo/sitemap` — inclusion toggle
- `/admin/testimonials` — full CRUD on `Testimonial`
- `/admin/blog` — list + create + edit on `BlogPost`
- `/admin/faqs` — list + create + edit on `FaqItem`

### 3.4 DB-first public reads
- `src/lib/generated-pages/store.ts` — extended to read from Prisma `GeneratedPage` first (filtered by `status=published`), merge with the existing local JSON fallback
- `/ib-tutors/[citySlug]` and `/areas/[areaSlug]` and `/schools/[schoolSlug]` — already check `getGeneratedPageForRoute`; once the store reads from Prisma, the 26 seeded Gurugram money pages render from DB without any route change

### 3.5 Public blog/testimonial wiring
- `BlogInsights.tsx` reads `BlogPost.findMany({ where: { status: 'published' }, take: 3 })` with fallback to existing `MOCK_BLOGS`
- `ReviewsSection.tsx` reads `Testimonial.findMany({ where: { status: 'published', useOnHomepage: true } })` with fallback to the existing hardcoded array

### 3.6 Seed extension
- `database/prisma/seed-cms.ts` — seeds:
  - 4 testimonials matching the current `ReviewsSection` content (so nothing visually changes)
  - 4 success stories matching `SuccessStories`
  - 3 blog posts matching `MOCK_BLOGS`
  - 6 categories
  - 10 global FAQs from `FAQSection`
  - Header + Footer NavigationMenu rows mirroring the current `PROGRAMS` / `COURSE_GROUPS`
  - 3 footer blocks
  - 5 CTA blocks

### 3.7 Documentation
- This plan doc (above)
- `IBGRAM_ADMIN_CMS_IMPLEMENTATION_REPORT.md` with files changed, seed/run instructions, fallback strategy, lint/build results
- `.env.example` extended with `UPLOAD_DIR` + `UPLOAD_MAX_BYTES`

## 4. What Phase 2 does NOT ship (deferred — phase 3+)

Honest list:

- **A full `/admin/homepage` drag-and-drop section composer.** The data model lands; the React drag-drop UI is a real day's work on top.
- **A full `/admin/pages/[id]/edit` block-based page composer wired to Prisma.** The existing `AdminPageEditor` writes to a local JSON store; converting it requires careful re-architecting of the `GeneratedSeoPage` ⇄ `GeneratedPage + PageBlock + PageFaq + PageMetadata + PageSchema` adapter and the existing client-side editor. This is the right next step (see deferred phase 1.5 in the prior report).
- **Tutor admin wired to Prisma.** Admin reads still use the static `allTutors` adapter. The `import-current.ts` script must be run to ingest the static data, then `admin-data.ts` must switch from `allTutors` to Prisma queries.
- **`/admin/menus`, `/admin/locations`, `/admin/gurugram` dedicated managers.** Backed by existing models; UI scaffolding is the remaining work.
- **Cloud media storage** (S3 / Cloudinary). The provider abstraction is in `Asset.provider`; local is shipped.
- **Drag-drop tutor card / programme card builders.**
- **Inline schema JSON-LD validation editor.**
- **Approval workflow gating publish actions.**
- **Bulk publish/unpublish/noindex from list views.**

## 5. Exact files to add / modify

### Add (new)
- `database/prisma/migrations/20260529_phase2_cms_marketing/migration.sql` (manual migration)
- `database/prisma/seed-cms.ts`
- `src/app/admin/api/assets/upload/route.ts`
- `src/app/admin/api/assets/route.ts` + `[id]/route.ts`
- `src/app/admin/api/testimonials/route.ts` + `[id]/route.ts`
- `src/app/admin/api/blog/route.ts` + `[id]/route.ts`
- `src/app/admin/api/faqs/route.ts` + `[id]/route.ts`
- `src/app/admin/_components/SeoCrudForms.tsx` — client forms for redirect/canonical/robots
- `src/app/admin/_components/TestimonialForm.tsx`
- `src/app/admin/_components/BlogForm.tsx`
- `src/app/admin/_components/FaqForm.tsx`
- `src/app/admin/_components/MediaUploader.tsx` — drag-drop + file picker
- `src/app/admin/_components/MediaBrowser.tsx`
- `src/app/admin/_components/ToastShell.tsx`
- `src/app/admin/testimonials/page.tsx`
- `src/app/admin/blog/page.tsx`
- `src/app/admin/blog/new/page.tsx` + `[id]/edit/page.tsx`
- `src/app/admin/faqs/page.tsx`
- `src/lib/cms/blog.ts`
- `src/lib/cms/testimonials.ts`
- `src/lib/cms/faqs.ts`
- `src/lib/cms/homepage.ts`
- `docs/IBGRAM_ADMIN_CMS_IMPLEMENTATION_REPORT.md`

### Modify
- `database/prisma/schema.prisma` — append new models, no breaking changes
- `src/lib/generated-pages/store.ts` — Prisma-first read with JSON fallback
- `src/app/admin/seo/redirects/page.tsx` — add inline CRUD form
- `src/app/admin/seo/canonicals/page.tsx` — add inline CRUD form
- `src/app/admin/seo/robots/page.tsx` — add inline CRUD form
- `src/app/admin/assets/page.tsx` — replace placeholder with media library
- `src/components/home/BlogInsights.tsx` — read from DB with fallback
- `src/components/home/ReviewsSection.tsx` — read from DB with fallback
- `src/app/admin/_components/AdminShell.tsx` — add nav entries for new routes
- `.env.example` — add `UPLOAD_DIR`, `UPLOAD_MAX_BYTES`
- `package.json` — add `db:seed-cms` script

## 6. Migration strategy

1. Edit `schema.prisma` to add the 11 new models.
2. Generate a manual SQL migration file (no live DB writes in this PR — the user runs `prisma migrate dev` or `prisma db push` against their env).
3. Run `prisma generate` to produce the typed client.
4. Confirm `npm run lint` and `npm run build` pass against the new schema.

## 7. Fallback strategy

Every public surface that gains DB reads keeps its static fallback:
- `generated-pages/store.ts` — DB first, JSON store second, static `data.ts` third
- `BlogInsights` — DB first, `MOCK_BLOGS` second
- `ReviewsSection` — DB first, hardcoded array second
- `Header` / `Footer` — unchanged in this PR; navigation CMS lands in Phase 3
- Existing seo-city pages (`/ib-tutors/gurugram`, the 25 city seeds) — unchanged; they already check `getGeneratedPageForRoute` first

If the database is unreachable, the public site renders exactly as today.

## 8. Sitemap / indexing — unchanged contract

The Phase 1 contract holds:
- `sitemap.ts` merges DB `SitemapEntry` overrides on top of code-derived entries
- `robots.ts` reads `RobotsRule` with safe default fallback
- Published DB `GeneratedPage` rows with `indexFlag=index` and `sitemapIncluded=true` flow into the sitemap once `store.ts` is wired
- Draft / review / paused / archived pages are excluded by the `status='published'` filter

## 9. Acceptance criteria for Phase 2

- Plan doc present ✔ (this file)
- New schema applied cleanly via `prisma generate` ✔
- File upload endpoint works (multipart → disk → Asset row) ✔
- Admin redirects / canonicals / robots support inline create + edit + delete ✔
- Admin testimonials / blog / faqs full CRUD ✔
- Admin media library shows uploaded assets ✔
- Generated pages renderer reads Prisma first ✔
- `npm run lint` passes ✔
- `npm run build` passes ✔
- Documentation updated ✔
- No regression on `/`, `/tutors`, `/ib-tutors/gurugram/`, `/sitemap.xml`, `/robots.txt` ✔

## 10. Out of scope for this PR (documented for clarity)

The Phase 2 prompt asks for ~19 admin routes + every public page wired to DB + full RBAC + complete auth + 1,800-page editor. That is realistically 3–4 weeks. This PR delivers the **mid-band foundation** that makes Phase 3 a series of focused UI screens rather than schema or upload work.

Phase 3 will: wire homepage sections from DB, drag-drop section ordering, page composer editor, tutor admin wired to Prisma, navigation/footer admin, full RBAC enforcement, bulk actions across list views, schema JSON-LD validator UI.
