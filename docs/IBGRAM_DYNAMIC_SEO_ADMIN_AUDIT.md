# IBGram — Dynamic SEO + Admin CMS Audit

**Repo:** santoshnxtutors/IBGram
**Branch:** `codex-publish-project`
**Live site:** https://www.ibgram.com/
**Date:** 2026-05-29
**Goal:** Make every public surface (homepage, money pages, Gurgaon/Gurugram + ~1800 scalable city pages, tutors, blogs, FAQs, testimonials, metadata, schema, internal links, menus, footers, CTAs, images) editable from an admin panel and stored in PostgreSQL via Prisma — with versioning, draft/publish workflow, redirect/canonical management, RBAC, audit logs, and a media library.

This audit is a **read-only inventory**. No source files are modified by this document. It is the artifact the next prompt must build foundation work against.

---

## 1. Current Tech Stack & Routing

### 1.1 Stack
- **Framework:** Next.js **16.2.2** (App Router) — **NOT the Next.js training-data version**; per [AGENTS.md](AGENTS.md), agents must read `node_modules/next/dist/docs/` before writing code.
- **Runtime:** React **19.2.4**, Node 20+.
- **Language:** TypeScript 5.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`), `tw-animate-css`, shadcn-style primitives (`shadcn`, `class-variance-authority`, `clsx`, `tailwind-merge`).
- **UI/UX libs:** `@base-ui/react`, `framer-motion`, `gsap`, `@studio-freight/lenis` (smooth scroll), `lucide-react`, `recharts`.
- **Validation:** `zod` v4.
- **Database:** PostgreSQL via Prisma **6.19.3** (schema at [database/prisma/schema.prisma](database/prisma/schema.prisma)).
- **Auth/RBAC:** Custom workspace `@ibgram/authentication` (opaque session tokens + JWT helper, RBAC middleware).
- **Backend service:** Separate Express server in [backend/](backend/) (workspace `@ibgram/backend`), owns Prisma access.
- **Shared:** [shared/](shared/) workspace (`@ibgram/shared`) holds permission constants, role names, validators.
- **Testing:** Vitest (unit) + Playwright (e2e).
- **Workspaces:** Root `package.json` declares `backend`, `shared`, `authentication`.

### 1.2 Route Map
| Path | Purpose | Source |
|---|---|---|
| `/` | Homepage (hardcoded sections) | [src/app/(marketing)/page.tsx](src/app/(marketing)/page.tsx) |
| `/about-us`, `/admissions`, `/blog`, `/contact-us`, `/courses`, `/igcse`, `/igcse-pages`, `/igcse-tutors`, `/jobs`, `/programmes`, `/subscription`, `/login`, `/signup` | Marketing pages | [src/app/(marketing)/](src/app/(marketing)/) |
| `/tutors` | Tutor listing (filters from `allTutors` static) | [src/app/(marketing)/tutors/page.tsx](src/app/(marketing)/tutors/page.tsx) |
| `/ib-tutors` | IB hub | [src/app/(marketing)/ib-tutors/page.tsx](src/app/(marketing)/ib-tutors/page.tsx) |
| `/ib-tutors/[citySlug]` | City IB pages (hybrid static + JSON store) | [src/app/(marketing)/ib-tutors/[citySlug]/page.tsx](src/app/(marketing)/ib-tutors/%5BcitySlug%5D/page.tsx) |
| `/ib-tutors/[citySlug]/areas/[areaSlug]` | Area pages | same dir |
| `/igcse-tutors/[citySlug]`, `/igcse-pages/[citySlug]` | IGCSE variants | [src/app/(marketing)/igcse-tutors/](src/app/(marketing)/igcse-tutors/), [src/app/(marketing)/igcse-pages/](src/app/(marketing)/igcse-pages/) |
| `/tutor-profile/[id]`, `/tutor-compare` | Tutor flows (client components, no SSR metadata) | [src/app/tutor-profile/](src/app/tutor-profile/), [src/app/tutor-compare/](src/app/tutor-compare/) |
| `/admin/*` | Admin CMS shell (auth, dashboard, pages, tutors, locations, seo, assets, audit-logs, imports, users) | [src/app/admin/](src/app/admin/) |
| `/(dashboard)/student`, `/(dashboard)/tutor`, `/(dashboard)/ai-tools` | End-user dashboard (separate route group) | [src/app/(dashboard)/](src/app/(dashboard)/) |
| `/sitemap.xml`, `/robots.txt` | Built from code (no DB) | [src/app/sitemap.ts](src/app/sitemap.ts), [src/app/robots.ts](src/app/robots.ts) |

---

## 2. Hardcoded Content Locations

Everything user-visible that lives in source code today (mismatching the goal of full CMS editability).

### 2.1 Root + marketing layout
- [src/app/layout.tsx](src/app/layout.tsx) — root metadata: title, description, keywords, OpenGraph, Twitter cards (lines 16-42).
- [src/app/(marketing)/layout.tsx](src/app/(marketing)/layout.tsx) — wraps `Header`, `Footer`, Lenis provider.

### 2.2 Homepage components (entirely hardcoded JSX/data arrays)
- [src/components/home/Hero.tsx](src/components/home/Hero.tsx) — tagline, h1, description, CTA labels, trust message, 4 "Why IBGram" cards (lines 28-128).
- [src/components/home/TrustIndicators.tsx](src/components/home/TrustIndicators.tsx) — 4 stat objects (lines 6-11).
- [src/components/home/CourseExplorer.tsx](src/components/home/CourseExplorer.tsx) — `PROGRAMS` (4) + `CATEGORIES` (5 groups, 15+ courses) arrays (lines 15-97).
- [src/components/home/TutorDiscovery.tsx](src/components/home/TutorDiscovery.tsx) — section headline + description; reads `allTutors` static.
- [src/components/home/FAQSection.tsx](src/components/home/FAQSection.tsx) — 10 FAQ Q&A baked in (lines 21-62).
- [src/components/home/SuccessStories.tsx](src/components/home/SuccessStories.tsx) — 4 stories with image paths, accent classes (lines 8-53).
- [src/components/home/ReviewsSection.tsx](src/components/home/ReviewsSection.tsx) — 4 reviews with names/locations/text (lines 6-35).
- [src/components/home/AIToolsShowcase.tsx](src/components/home/AIToolsShowcase.tsx) — 2 hardcoded tool cards (lines 39-83).
- [src/components/home/BlogInsights.tsx](src/components/home/BlogInsights.tsx) — `MOCK_BLOGS` array of 3 entries with Unsplash URLs (lines 8-36).
- [src/components/home/SEOPlatformInfo.tsx](src/components/home/SEOPlatformInfo.tsx) — platform overview copy (lines 37-97).
- [src/components/home/WhyIBGram.tsx](src/components/home/WhyIBGram.tsx) — 4 hardcoded reasons (lines 31-52).

### 2.3 Marketing pages
- [src/app/(marketing)/about-us/page.tsx](src/app/(marketing)/about-us/page.tsx) — founder bio (Ajay Vatsyayan), philosophy, values, pedagogy, testimonial (lines 20-195).
- [src/app/(marketing)/programmes/page.tsx](src/app/(marketing)/programmes/page.tsx) — PYP/MYP/DP/CP comparison table + 4 cards (lines 12-166).
- [src/app/(marketing)/programmes/pyp/page.tsx](src/app/(marketing)/programmes/pyp/page.tsx) — 6 subjects, 6 themes, assessment copy (lines 13-75). MYP/DP/CP follow same pattern.
- [src/app/(marketing)/contact-us/page.tsx](src/app/(marketing)/contact-us/page.tsx) — contact email `ibgram24@gmail.com`, phone `+91 9582706764`, WhatsApp URL, registered address (lines 77-201).
- [src/app/(marketing)/blog/page.tsx](src/app/(marketing)/blog/page.tsx) — `MOCK_BLOGS` (6 entries) + 6 category pills (lines 9-67).
- [src/app/(marketing)/ib-tutors/page.tsx](src/app/(marketing)/ib-tutors/page.tsx) — hero + metadata for hub (lines 10-42).

### 2.4 Navigation
- [src/components/layout/Header.tsx](src/components/layout/Header.tsx) — `PROGRAMS` + `COURSE_GROUPS` arrays, curriculum switcher, mobile menu (lines 18-31).
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) — 4 columns, conditional IGCSE/IB labels (lines 31-92).
- [src/components/dashboard/Sidebar.tsx](src/components/dashboard/Sidebar.tsx) — placeholder student/tutor profiles `Sarah M.` / `Dr. Alex J.` (lines 54-74).

### 2.5 SEO infrastructure constants
- [src/app/robots.ts](src/app/robots.ts) — User-Agent / Disallow / sitemap URL all hardcoded (lines 4-12).
- [src/lib/seo/sitemap.ts](src/lib/seo/sitemap.ts) — core URLs + priorities + `LAST_MODIFIED` (lines 20-21, 52-81).
- [src/lib/seo/schema.ts](src/lib/seo/schema.ts) — organization name "IB Gram", logo URL, email, phone hardcoded (lines 250, 252, 253, 372-373).
- [src/lib/page-generator/schema-generator.ts](src/lib/page-generator/schema-generator.ts) — same org schema constants (lines 29-35).
- [src/lib/seo/slug-utils.ts](src/lib/seo/slug-utils.ts) — `SITE_URL = 'https://ibgram.com'` (line 1).
- [src/lib/seo/indexing.ts](src/lib/seo/indexing.ts) — quality thresholds: demand 65, uniqueness 75, internal links 8, FAQ 6 (lines 12-17).
- [src/lib/page-generator/quality-score.ts](src/lib/page-generator/quality-score.ts) — `LOCAL_TERMS`, word-count gates, scoring weights, keyword stuffing limits (lines 4, 21-22, 30, 44).
- [src/lib/page-generator/page-status.ts](src/lib/page-generator/page-status.ts) — `seoScore >= 72`, `wordCount >= 1400`, duplicateRisk gates (lines 11-12, 22-24, 44).
- [src/lib/page-generator/internal-link-engine.ts](src/lib/page-generator/internal-link-engine.ts) — `GLOBAL_LINKS` array (lines 6-12).
- [src/lib/page-generator/slug.ts](src/lib/page-generator/slug.ts) — programme/subject slug mappings (lines 4-22).

### 2.6 Admin shell
- [src/app/admin/_components/AdminShell.tsx](src/app/admin/_components/AdminShell.tsx) — sidebar nav with 12 routes hardcoded.
- [src/app/admin/seo/robots/page.tsx](src/app/admin/seo/robots/page.tsx) — robots.txt previewed as static `<pre>` block.
- [src/app/admin/seo/keyword-clusters/page.tsx](src/app/admin/seo/keyword-clusters/page.tsx) — stub list (IB, IGCSE, Gurugram, Tutor profiles).
- [src/app/admin/_components/AdminForms.tsx](src/app/admin/_components/AdminForms.tsx) — `AdminTutorEditor`, `AdminLocationEditor`, `AdminAssetManager`, `AdminSettingsForm` are **preview-only** with no submit handlers.

---

## 3. Static Data Locations (the things 1800+ pages currently come from)

### 3.1 Tutor master data
- [src/lib/tutor-data.ts](src/lib/tutor-data.ts) (~993 lines) — `tutorSeeds` (23 records), `locationProfiles` (Gurugram, Delhi, Noida, Bangalore, Pune, Mumbai), `tutorEnrichmentById` mapping (lines 208-457), derived `allTutors` export, static image paths like `/tutor_sarah_avatar_*.png`.
- [src/lib/tutors/data.ts](src/lib/tutors/data.ts), [src/lib/tutors/routes.ts](src/lib/tutors/routes.ts), [src/lib/tutors/store.ts](src/lib/tutors/store.ts) — in-memory runtime access layer.
- [src/lib/tutors/tutor-location-matching.ts](src/lib/tutors/tutor-location-matching.ts) — `getTutorsForCity/Area/Sector/Society/School` with exactLocal / city / online fallback bands.
- [src/lib/tutors/admin-tutor-location-fields.ts](src/lib/tutors/admin-tutor-location-fields.ts) — validation; TODO comment to wire into admin tutor form.
- [src/lib/tutors/igcse-route-helpers.ts](src/lib/tutors/igcse-route-helpers.ts) — IGCSE static-param helpers.
- [src/lib/tutors/__tests__/tutor-location-matching.test.tsx](src/lib/tutors/__tests__/tutor-location-matching.test.tsx) — locks matching behavior.

### 3.2 City SEO seed
- [src/lib/seo/city-pages.ts](src/lib/seo/city-pages.ts) (~1900 lines) — `citySeoPageBaseData` for 25 cities (Gurugram + 24 more). `getCitySeoPageBySlug`, `getLiveCitySeoPages`.
- [src/lib/seo/city-pages-data/ib/](src/lib/seo/city-pages-data/ib/) — 25 city folders (`ahmedabad/`, `bhopal/`, `chennai/`, `pune/`, ...) each exporting hardcoded `cityPageBase` with hero, programs, subjects, areas, schools, FAQs, testimonials, schema config.
- [src/lib/seo/city-page-types.ts](src/lib/seo/city-page-types.ts) — `CitySeoPage`, `CityLocationData`, `CityAcademicData`, `CitySchoolEcosystem`, `CityTutorInventory`, `CityContentBlocks`, `CityFaq`, `InternalLink`, `SchemaConfig`, `IndexingConfig`, `IndexFlag` interfaces.
- [src/lib/seo/igcse-city-pages.ts](src/lib/seo/igcse-city-pages.ts), [src/lib/seo/igcse-pages.ts](src/lib/seo/igcse-pages.ts) — IGCSE variant is a transform of IB seed (no independent IGCSE seed).

### 3.3 Gurgaon/Gurugram local SEO (100+ pages built in memory)
Full module at [src/lib/local-seo/gurgaon/](src/lib/local-seo/gurgaon/):
- `gurgaon-areas.ts` — 20 premium areas (Golf Course Rd, DLF phases, Sushant Lok, Sohna Rd, …).
- `gurgaon-sectors.ts` — 75 sectors (14–113) with parent area / nearby refs.
- `gurgaon-societies.ts` — 50+ communities (The Aralias, The Magnolias, DLF Crest, …).
- `gurgaon-keywords.ts`, `gurgaon-metadata.ts`, `gurgaon-faqs.ts`, `gurgaon-internal-links.ts`, `gurgaon-quality.ts`, `gurgaon-schema.ts` — template factories.
- `gurgaon.types.ts` — `GurgaonLocalPlace`, `GurgaonLocalPageType` (`area | sector | society`).
- `index.ts` — `gurgaonLocalPlaces`, `buildGeneratedPage()`, exports `gurgaonGeneratedSeoPages`.
- `__tests__/gurgaon-local-seo.test.ts` — validates ~100 pages with quality scores, schema, link counts.

### 3.4 Generated-pages runtime store
- [src/lib/generated-pages/data.ts](src/lib/generated-pages/data.ts) — `generatedSeoPages` array, currently fed by `gurgaonGeneratedSeoPages`.
- [src/lib/generated-pages/routes.ts](src/lib/generated-pages/routes.ts) — `getGeneratedPageForRoute`, `getGeneratedStaticParamsForTypes`, `getAllGeneratedPagesForAdmin`.
- [src/lib/generated-pages/store.ts](src/lib/generated-pages/store.ts) — merges code array with a local JSON file (`generated-pages.local.json`). `saveGeneratedPage()` writes to that file. **This is the current persistence layer for admin page edits — NOT Prisma.**

### 3.5 SEO/page-generator pipeline (in-memory only)
- [src/lib/page-generator/](src/lib/page-generator/) — `page-generator.ts`, `metadata-generator.ts`, `schema-generator.ts`, `content-normalizer.ts`, `internal-link-engine.ts`, `quality-score.ts`, `page-status.ts`, `slug.ts`, `prompts.ts`, `types.ts`, `validators.ts`, plus tests. Output is a `GeneratedSeoPage` object; never written to Prisma.
- [src/lib/seo/](src/lib/seo/) — `metadata.ts`, `schema.ts`, `canonical.ts`, `indexing.ts`, `internal-links.ts`, `content-quality.ts`, `slug-utils.ts`, `sitemap.ts`, `sitemap-utils.ts`.

### 3.6 IGCSE marketing content
- `src/app/(marketing)/igcse/content.ts` (referenced by admin adapter) — IGCSE home content blocks, FAQs, links.
- `src/app/(marketing)/igcse/data.ts` — Cambridge / Edexcel subject arrays.
- `src/app/(marketing)/courses/[curriculum]/[subject]/course-tutor-data.ts` — subject tutor data by curriculum.

### 3.7 Admin user store
- [src/app/admin/_data/admin-users.local.json](src/app/admin/_data/admin-users.local.json) — JSON file with admin user records when backend is unavailable (dev fallback).

### 3.8 Public assets
- [public/](public/) — favicon, logos, OG defaults, founder/tutor avatars, SVG hero graphics, success-story images. All candidates for migration to `Asset` rows.

---

## 4. Existing SEO Strengths

1. **City SEO page structure** — `CitySeoPage` is rich and typed; per-city `cityFaqs`, `premiumAreas`, `nearbyAreas`, `nearbyCities`, `schoolEcosystem`, `localTestimonials`, `internalLinks`, `schemaConfig`, `indexingConfig`. Test suite ([src/lib/seo/__tests__/city-pages.test.ts](src/lib/seo/__tests__/city-pages.test.ts)) locks 30 cities resolving via slug, ≥6 FAQs and ≥12 internal links per page, and normalized slug variants (Gurugram, GURUGRAM, gurugram → `gurugram`).
2. **Sitemap union** — [src/lib/seo/sitemap.ts](src/lib/seo/sitemap.ts) deduplicates across core public + city SEO + IGCSE + tutor + generated pages, prioritized.
3. **Generated-page abstraction** — `GeneratedSeoPage` shape covers metadata, hero, content blocks (hero/intro/programmes/subjects/local_areas/schools/matching_process/tutoring_modes/verification/cta), FAQs, internal links, quality scores, schema, status, indexFlag — already aligned ~1:1 with the Prisma `GeneratedPage` + child tables.
4. **Metadata generator** — `buildCityMetadata`, `buildIgcseCityMetadata`, `buildGeneratedPageMetadata` produce Next.js `Metadata` with OG / Twitter / canonical / robots.
5. **JSON-LD generators** — `buildCitySchema`, `buildGeneratedPageSchema`, `buildIgcseCityPageSchema`, `buildGurgaonSchema` emit `@graph` with `Organization` / `EducationalOrganization` / `WebPage` / `BreadcrumbList` / `FAQPage` / `Service` / `LocalBusiness`. Renderable component at [src/components/seo-city/JsonLd.tsx](src/components/seo-city/JsonLd.tsx).
6. **Indexing quality gate** — `getIndexingDecision` enforces demand / uniqueness / internal-link / FAQ thresholds before marking pages `index, follow`.
7. **Internal link engine** — `internal-link-engine.ts` builds prioritized candidates (global + city + programme + subject + area + school + nearby city) and de-dupes.
8. **Quality scoring** — multi-factor (word count, local depth, readability, keyword stuffing, internal link count, FAQ presence, duplicate risk) feeding `recommendedIndexFlag`.
9. **City alias normalization** — `normalizeSlug` already collapses `gurgaon` variants to `gurugram` at lookup time.
10. **Local city pages** — [src/lib/local-seo/gurgaon/](src/lib/local-seo/gurgaon/) is the template/reference implementation: hierarchical area → sector → society, with contextual links, FAQs, schema and quality scoring per place. Test-locked.
11. **Page-status state machine** — `PageStatus` enum already supports `draft | generated | needs_review | approved | published | paused | archived`.
12. **AI prompt scaffolding** — [src/lib/page-generator/prompts.ts](src/lib/page-generator/prompts.ts) defines a strict JSON output schema for AI page generation; ready to hook to `AiProviderSetting`.

---

## 5. Existing Gaps

### 5.1 No real database source of truth
- The Prisma schema is comprehensive (40+ models, see §6), **but almost none of it is read or written by the running app.** Public pages, admin reads, and admin edits all use TypeScript files + a JSON store ([src/lib/generated-pages/generated-pages.local.json](src/lib/generated-pages/generated-pages.local.json)).
- [database/prisma/import-current.ts](database/prisma/import-current.ts) exists to seed DB from static, but it is a one-shot script and is not the runtime source.
- `migrations/` folder is effectively empty (`.gitkeep`); the schema has never been formally migrated. Production DB shape is unknown until first `prisma migrate dev`.

### 5.2 No complete admin CMS for every page
The admin shell ([src/app/admin/](src/app/admin/)) is well-built, but the editors that exist are mostly **read-only adapters** or **preview-only forms**:
- **Page editor** ([src/app/admin/_components/AdminPageEditor.tsx](src/app/admin/_components/AdminPageEditor.tsx)) persists via `PATCH /admin/api/pages/[id]` which writes to the local JSON store, not Prisma.
- **Tutor / Location editors** ([src/app/admin/_components/AdminForms.tsx](src/app/admin/_components/AdminForms.tsx)) have no submit handlers.
- **Asset manager**, **CSV imports**, **redirects**, **canonicals**, **robots**, **sitemap**, **keyword clusters** are stubs or read-only.
- **No admin editor exists** for: homepage, marketing pages (about-us, contact-us, programmes, blog), navigation menus, footer, testimonials, success stories, blog posts, global FAQ library, hero/banner library, CTA library, programmes & subjects, organisation schema, AI provider config.

### 5.3 No dynamic image/media manager
- `Asset`, `AssetFolder`, and `UploadProvider (local | cloudinary | s3)` exist in Prisma.
- **No backend route** exists for upload (no `POST /api/assets`).
- **No admin UI** for browsing/searching/picking assets.
- No `ogImageAssetId` picker in the page editor (FK exists but unused).
- All images on the live site come from `public/` static paths or hardcoded Unsplash URLs (`MOCK_BLOGS`).

### 5.4 Static tutor data
- 23 tutors live in [src/lib/tutor-data.ts](src/lib/tutor-data.ts). Admin tutor list / detail / edit pages exist but **`updateTutor()` in [src/app/admin/_lib/admin-data.ts](src/app/admin/_lib/admin-data.ts) is a stub** — edits do not persist.
- Individual tutor pages at `/tutor-profile/[id]` are **client-rendered with no server metadata or JSON-LD `Person`/`Service`/`AggregateRating` schema**.
- No `TutorReview`, `TutorTestimonial`, `TutorCertification`, or `TutorPageMetadata` models. Tags like "Examiner", "Oxford Alumni", "PhD holder" are inline strings.
- Filter dropdowns on `/tutors` hardcode `IB_SUBJECTS`, `IB_GRADES`, `IGCSE_SUBJECTS`, `IGCSE_GRADES` (lines 20-47) instead of querying `Subject` / `Programme`.
- Tutor avatars are static `/tutor_*.png` paths, not `Asset` rows.

### 5.5 Static homepage sections
All 10+ homepage components carry inline copy + data arrays — see §2.2. No CMS schema exists yet for `HomepageSection`, `Testimonial`, `SuccessStory`, `BlogPost`, `CtaBlock`, `FaqTemplate`, or `SocialProofStat`.

### 5.6 Static/generated local JSON pages
- The Gurgaon 100+ pages exist only at process boot from TypeScript modules, merged with `generated-pages.local.json`.
- No `GeneratedPage` rows yet, so no `PageRevision` audit, no `PagePublishLog`, no per-page `Asset` linkage, no draft/review/publish state machine — even though all of these models exist.

### 5.7 Limited admin sidebar
- [src/app/admin/_components/AdminShell.tsx](src/app/admin/_components/AdminShell.tsx) shows 12 links (Dashboard, Pages, Tutors, Locations, Internal Links, SEO, Assets, Imports, Audit Logs, Settings, Generator, Users). Missing groups: Homepage, Marketing Pages, Navigation, Footer, Testimonials, Success Stories, Blog, FAQ Library, CTA Library, Canonicals/Redirects/Robots/Sitemap as **editable** screens, Page Templates, Block Library, Media Library, Programmes, Subjects, Reviews, Reports/SEO Health, Content Calendar.

### 5.8 Duplicate / thin SEO page risk
- IGCSE pages are a near-mechanical transform of IB pages (subject names swapped); risk of Google deduping.
- 100+ Gurgaon sector/society pages share the same hero/intro/block templates with only place name substituted; high duplicate risk unless `ContentTemplate` rules + unique local data are introduced.
- Indexing thresholds are hardcoded in [src/lib/seo/indexing.ts](src/lib/seo/indexing.ts) and [src/lib/page-generator/quality-score.ts](src/lib/page-generator/quality-score.ts); no admin override or per-page quality dashboard.

### 5.9 Missing Gurgaon/Gurugram alias strategy
- `normalizeSlug` collapses `gurgaon` → `gurugram` for **internal lookup only**.
- `/ib-tutors/gurgaon` returns **404 in production** — there is no `RedirectRule`, no `CanonicalRule`, no Next middleware rewrite, and the route segment is `[citySlug]` literal.
- No `CityAlias` model. No admin UI to manage city aliases. No tests for the alias path.

### 5.10 Missing 1800+ scalable page governance
- No bulk page-generation job runner. `PageGenerationJob` + `PageGenerationLog` models exist but no backend worker, no admin trigger UI, no progress monitoring beyond the dashboard's read-only recent-jobs section.
- No `ContentTemplate` or `InternalLinkRule` records — every keyword/anchor/copy template lives in TypeScript factories.
- No keyword research integration (Ahrefs/SEMrush/Search Console).
- No automatic noindex / refresh recommendation when quality scores fall.
- No per-page OG image generation; all 1800+ pages would share one OG image.
- Sitemap.xml is fully computed per request from static arrays; no DB-backed `SitemapEntry` toggles.
- `robots.txt` is hardcoded; `RobotsRule` rows unused.
- No `revalidatePath` / `revalidateTag` wiring between admin edits and the public site cache.
- No optimistic locking / conflict detection in the admin editor (two editors → lost writes).
- No RBAC enforcement on most page / tutor / location / SEO admin routes (permission checks only exist on `/admin/api/users/*` and settings).

### 5.11 Backend CMS API gaps
- Backend at [backend/src/](backend/src/) exposes only **auth**, **users**, **roles** (read), **audit logs** (read), **dashboard** (aggregation).
- No `GET/POST/PATCH/DELETE /api/pages`, no `/api/assets/upload`, no `/api/seo/canonicals|redirects|robots|sitemap`, no `/api/pages/:id/publish`, no `/api/pages/:id/revisions`, no `/api/tutors` CRUD, no `/api/locations` CRUD, no `/api/blocks|faqs|internal-links` per page.
- No server-side cache invalidation hooks back to Next.js (`revalidatePath`/`revalidateTag`).
- No content-approval workflow / scheduled-publish queue.

---

## 6. Proposed Final Architecture

### 6.1 Database schema — what we already have

The Prisma schema at [database/prisma/schema.prisma](database/prisma/schema.prisma) already covers the **vast majority** of CMS needs. Existing models grouped:

| Group | Models |
|---|---|
| Auth / RBAC | `User`, `Role`, `Permission`, `UserRole`, `RolePermission`, `Session`, `RefreshToken`, `LoginAttempt` |
| Page CMS | `GeneratedPage`, `PageRevision`, `PageBlock`, `PageFaq`, `PageMetadata`, `PageSchema`, `PageInternalLink`, `PageQualityScore`, `PagePublishLog`, `PageGenerationJob`, `PageGenerationLog` |
| Locations | `Country`, `State`, `City`, `Area`, `Sector`, `Society`, `School` |
| Tutors | `Tutor`, `TutorProfile`, `TutorSubject`, `TutorCurriculum`, `TutorLocation`, `TutorAvailability`, `TutorAsset` |
| SEO governance | `CanonicalRule`, `RedirectRule`, `SitemapEntry`, `RobotsRule`, `KeywordCluster`, `AnchorTextVariant` |
| Media | `AssetFolder`, `Asset` |
| Import pipeline | `CsvImport`, `CsvImportRow`, `CsvImportError` |
| Audit / settings | `AuditLog`, `SiteSetting`, `SeoSetting`, `AiProviderSetting` |
| Reference data | `Programme`, `Subject` |

Enums: `UserStatus`, `PageStatus`, `IndexFlag`, `PageType`, `Curriculum`, `UploadProvider`, `ImportStatus`, `ImportRowStatus`, `TutorStatus`.

### 6.2 Database schema — what we must add

These are the **only genuine gaps** for the dynamic CMS goal. Everything else maps onto existing tables.

| New model | Purpose | Key fields |
|---|---|---|
| `MarketingPage` | Backs homepage + about-us + contact-us + programmes hubs + blog hub. Separate from `GeneratedPage` because they're hand-curated marketing surfaces, not SEO-template pages. | `slug` (unique), `kind` (`home|about|contact|programmes|blog_hub|igcse_home|courses_hub|custom`), `status`, `metaTitle`, `metaDescription`, `heroTitle`, `heroSubtitle`, `heroAssetId`, `createdById`, `updatedById`, `publishedAt`. Has-many `PageBlock` (reuse) + `PageFaq` (reuse) + `PageMetadata` (reuse via polymorphic refactor OR mirror table). |
| `MarketingPageBlock` *(optional — alternative is to allow `PageBlock.pageId` to be polymorphic)* | Block content for marketing pages | mirrors `PageBlock` |
| `NavigationMenu` | Header / footer / sidebar / mobile menus | `slug` (`header-main`, `footer-programmes`, `mobile`), `position`, `isActive` |
| `NavigationMenuItem` | Items inside a menu, nestable | `menuId`, `parentItemId`, `label`, `url`, `icon`, `isExternal`, `sortOrder`, `requiresAuth`, `requiredRole`, `visibilityCurriculum` (`IB|IGCSE|BOTH|null`) |
| `FooterBlock` | Footer columns + sub-content | `slug`, `columnTitle`, `contentJson`, `sortOrder`, `isActive` |
| `Testimonial` | Reusable testimonials/reviews | `authorName`, `authorRole` (student/parent/educator), `location`, `rating`, `quote`, `imageAssetId`, `verifiedById`, `verifiedAt`, `featured`, `useOnHomepage`, `sortOrder`, `status` |
| `SuccessStory` | Curated outcome stories | `studentName`, `subject`, `focus`, `outcome`, `nextStep`, `imageAssetId`, `accentClass`, `sortOrder`, `status` |
| `BlogPost` | Blog articles | `slug` (unique), `title`, `excerpt`, `contentJson`, `categoryId`, `authorId`, `featuredImageAssetId`, `metaTitle`, `metaDescription`, `status`, `publishedAt`, `readingTimeMinutes`, `viewCount`, `tags` |
| `BlogCategory` | Blog taxonomy | `name`, `slug`, `description`, `featuredImageAssetId`, `sortOrder` |
| `CtaBlock` | Reusable CTAs (Find Tutor, Book Demo, …) | `slug`, `displayName`, `heading`, `description`, `buttonText`, `buttonUrl`, `variant`, `sortOrder` |
| `FaqTemplate` | Templated Q&A with `{placeholder}` interpolation, used by city/area/sector page generation | `slug`, `pageTypes` (string[]), `curriculum`, `question`, `answerTemplate`, `placeholders` (string[]), `sortOrder`, `isActive` |
| `SocialProofStat` | Trust metrics (1000+ families, 95% retention, …) | `key`, `label`, `value`, `displayFormat`, `updateFrequency`, `lastUpdatedAt` |
| `CityAlias` | Maps `gurgaon` → `gurugram` (and similar) at the route level | `cityId`, `alias` (unique), `isCanonical` |
| `PageTemplate` | Defines block order + region rules per `PageType` | `slug`, `pageType`, `description`, `templateJson`, `isActive` |
| `PageTemplateBlock` | Allowed block types per template with required-fields schema | `templateId`, `blockType`, `blockLabel`, `isRequired`, `sortOrder`, `fieldSchema` |
| `TutorReview` | Individual reviews | `tutorId`, `studentName`, `studentEmail`, `rating`, `title`, `reviewText`, `isVerified`, `isApproved`, `tutorResponse`, `helpfulCount` |
| `TutorCertification` | Tutor credentials/badges | `tutorId`, `type` (`examiner|alumni|phd|masters|board_cert|…`), `title`, `issuer`, `isVerified`, `proofAssetId`, `displayOrder` |
| `TutorTestimonial` | Long-form curated case studies | `tutorId`, `studentName`, `studentSchool`, `outcomeDescription`, `fullStory`, `mediaAssetId`, `isApproved`, `displayOrder` |
| `ContentTemplate` *(optional Phase 7)* | Reusable copy templates for SEO generation | `slug`, `templateType` (`area_hero|sector_intro|…`), `curriculum`, `templateText`, `placeholders`, `isActive` |
| `InternalLinkRule` *(optional Phase 7)* | Rules driving link engine | `sourcePageType`, `targetPageType`, `linkType`, `anchorTemplate`, `maxCount`, `priority`, `followStatus` |

Existing models that need minor extensions:
- `TutorProfile` — add `successRate` (string), `responseTime` (string), `recentlyActiveAt` (DateTime).
- `PageInternalLink` — already has `linkType`/`priority`/`followStatus`/`linkStatus` fields in audit description (verify against current schema; if missing, add).
- `Tutor` — confirm `pricingTierId` / `recentlyActiveAt` if needed.

### 6.3 Admin routes (target sitemap of `/admin`)

Group by domain. Bold = priority for foundation phase.

**Content**
- **`/admin/pages`** (already exists — extend to query Prisma) — list of `MarketingPage` ∪ `GeneratedPage` with status filters, bulk actions, search.
- `/admin/pages/[id]/edit` — block-based editor (extend existing `AdminPageEditor`); drag-drop blocks; tabbed sidebars for Metadata / Schema / FAQs / Internal Links / Quality / Revisions / Publish.
- `/admin/pages/[id]/revisions` — list `PageRevision`, diff viewer, restore.
- `/admin/pages/[id]/publish` — workflow: draft → needs_review → approved → published; emit `PagePublishLog`.
- **`/admin/pages/home`**, `/admin/pages/about-us`, `/admin/pages/contact-us`, `/admin/pages/programmes`, `/admin/pages/programmes/[code]`, `/admin/pages/blog-hub`, `/admin/pages/igcse-home`, `/admin/pages/courses-hub` — typed editors per `MarketingPage.kind`.
- **`/admin/pages/cities`**, `/admin/pages/cities/[citySlug]` — generated city pages (rendered from `GeneratedPage` + child tables).
- `/admin/pages/areas`, `/admin/pages/sectors`, `/admin/pages/societies`, `/admin/pages/schools` — per location-type list.
- **`/admin/seo-generator`** — bulk generation wizard (extend existing). Triggers `PageGenerationJob`.

**Marketing surfaces**
- `/admin/homepage/sections` — order, enable/disable homepage `PageBlock` rows.
- `/admin/testimonials`, `/admin/success-stories`, `/admin/social-proof`, `/admin/cta-library`, `/admin/faq-library`.
- `/admin/blog`, `/admin/blog/categories`, `/admin/blog/posts/new`, `/admin/blog/posts/[id]/edit`.

**Navigation**
- `/admin/navigation` (list menus), `/admin/navigation/[menuSlug]` (drag-drop items).
- `/admin/footer` (FooterBlock CRUD).

**Tutors**
- `/admin/tutors` (extend — wire to Prisma).
- `/admin/tutors/[id]/edit`, `/subjects`, `/locations`, `/availability`, `/media`, `/certifications`, `/reviews`, `/testimonials`, `/seo`, `/history`.
- `/admin/tutors/new`, `/admin/tutors/import` (CSV).

**Locations**
- `/admin/locations/{cities|areas|sectors|societies|schools}` (extend — wire to Prisma + CRUD).
- `/admin/locations/city-aliases` (gurgaon ↔ gurugram).

**SEO governance**
- **`/admin/seo/redirects`** (CRUD on `RedirectRule`), **`/admin/seo/canonicals`** (CRUD on `CanonicalRule`), **`/admin/seo/robots`** (CRUD on `RobotsRule`), **`/admin/seo/sitemap`** (toggle `SitemapEntry` inclusion).
- `/admin/seo/keyword-clusters`, `/admin/seo/anchor-text`.
- `/admin/seo/health` (existing — extend), `/admin/seo/index-preview`, `/admin/seo/internal-links` (graph view).
- `/admin/seo/settings` (thresholds → `SeoSetting`).
- `/admin/seo/content-templates`, `/admin/seo/link-rules` (Phase 7).

**Media**
- **`/admin/assets`** (folder tree + upload + browse + alt text + crop). Picker variants for inline use.

**Programmes / Subjects**
- `/admin/programmes`, `/admin/subjects` (manage reference data).

**Settings**
- `/admin/settings/site` (`SiteSetting` for org name, contact email/phone/WhatsApp, address, social links, logo, favicon, default OG).
- `/admin/settings/organization-schema` (`SeoSetting` for org JSON-LD).
- `/admin/settings/ai` (`AiProviderSetting`).
- `/admin/settings/quality-thresholds`.

**Operations**
- `/admin/imports` (CSV pipelines for tutors, locations, pages, testimonials, blog posts).
- `/admin/jobs` (page-generation queue).
- `/admin/audit-logs` (existing — extend filters + export).
- `/admin/users`, `/admin/roles`.
- `/admin/reports/seo-audit`, `/admin/reports/content-gaps`.

### 6.4 API / Server-action surface

**Strategy:** All mutations go through the backend Express service ([backend/src/](backend/src/)) for consistency with existing auth and audit middleware. Next.js admin server actions become thin wrappers around the `adminApi` client. This is cleaner than splitting persistence between Next routes (`/admin/api/*`) and the backend.

New backend route modules to add under `backend/src/modules/`:

```
modules/
├── pages/         GET/POST/PATCH/DELETE /api/pages, /api/pages/:id, /:id/publish, /:id/draft, /:id/archive
├── pageBlocks/    GET/POST/PATCH/DELETE /api/pages/:id/blocks
├── pageFaqs/      GET/POST/PATCH/DELETE /api/pages/:id/faqs
├── pageMetadata/  GET/PATCH /api/pages/:id/metadata
├── pageSchemas/   GET/POST/PATCH/DELETE /api/pages/:id/schemas
├── pageLinks/     GET/POST/DELETE /api/pages/:id/internal-links
├── pageRevisions/ GET /api/pages/:id/revisions, POST /api/pages/:id/revisions/:version/restore
├── marketingPages/ CRUD on MarketingPage + child blocks
├── tutors/        Tutor + child resources CRUD
├── locations/     City/Area/Sector/Society/School CRUD + alias CRUD
├── assets/        POST /api/assets/upload (multipart), GET/PATCH/DELETE
├── seo/           canonicals, redirects, robots, sitemap, keyword-clusters, anchor-text endpoints
├── settings/      site/seo/ai/quality threshold CRUD (SiteSetting, SeoSetting, AiProviderSetting)
├── testimonials/  CRUD
├── successStories/ CRUD
├── blog/          BlogPost + BlogCategory CRUD
├── navigation/    NavigationMenu + NavigationMenuItem CRUD
├── footer/        FooterBlock CRUD
├── ctaLibrary/    CtaBlock CRUD
├── faqLibrary/    FaqTemplate CRUD
├── socialProof/   SocialProofStat CRUD
├── programmes/    Programme + Subject CRUD
├── jobs/          PageGenerationJob trigger + status
├── imports/       CsvImport pipeline
├── revalidation/  POST /api/revalidation/path, /api/revalidation/tag — called by other modules after writes
```

Each module follows the existing pattern: service.ts (Prisma) + routes.ts (Express with `requirePermission` middleware) + writes `AuditLog`.

Public-side reads (the marketing pages) stay in Next.js and use a thin `@ibgram/shared` data layer that imports Prisma directly via a Server Component data fetcher, so that we don't pay an HTTP roundtrip on page render. Admin reads + all writes go through the backend.

### 6.5 Public page renderer

- Page route handlers (`/`, `/about-us`, …, `/ib-tutors/[citySlug]`, `/igcse-tutors/[citySlug]`, …) become **data-first**: load `MarketingPage` / `GeneratedPage` + child tables, pass to existing block-component tree, fall back to existing static seed if no DB row exists yet.
- Keep [src/components/seo-city/](src/components/seo-city/) and [src/components/generated-pages/](src/components/generated-pages/) component trees — they already accept data props.
- Tutor profile page becomes a **Server Component** with metadata + JSON-LD (currently a client component with no SSR metadata).
- Homepage components ([src/components/home/](src/components/home/)) become "block renderers" — each accepts a typed block payload and renders.

### 6.6 SEO metadata system
- All `Metadata` exports become `generateMetadata` async functions reading from `PageMetadata` or `MarketingPage`.
- Org schema constants (`name`, `email`, `phone`, `logo`) move from [src/lib/seo/schema.ts](src/lib/seo/schema.ts) and [src/lib/page-generator/schema-generator.ts](src/lib/page-generator/schema-generator.ts) into `SiteSetting` rows; readers cache for the request via `unstable_cache`.
- `SITE_URL` moves from constant to env + `SiteSetting` fallback.
- Quality thresholds (indexing, scoring) move from constants to `SeoSetting` rows.

### 6.7 Sitemap / robots
- [src/app/sitemap.ts](src/app/sitemap.ts) becomes: `getFullPublicSitemapEntries(prisma)` — UNION of `MarketingPage`, `GeneratedPage` (status published, indexFlag != noindex, sitemapIncluded), `Tutor` (active, approved), plus `SitemapEntry` overrides.
- [src/app/robots.ts](src/app/robots.ts) becomes: read `RobotsRule` rows for `userAgent=*` and any specialized agents, ordered by directive; fallback to hardcoded defaults if no rows.

### 6.8 Image upload / media library
- Backend `modules/assets/`:
  - `POST /api/assets/upload` (multipart). Switch on `UploadProvider` to local (filesystem), Cloudinary, or S3.
  - Persist `Asset` row with `provider`, `key`, `url`, `mimeType`, `sizeBytes`, `width`, `height`, `altText`.
  - Streams: when local, store under `public/uploads/{folderSlug}/…`; respect Next dev/prod paths.
- `AssetFolder` tree managed via `/admin/assets` UI.
- `Asset` picker component reusable in page editor, blog editor, homepage editor, tutor editor.

### 6.9 Content versioning / draft / publish
- Every write to `GeneratedPage` / `MarketingPage` snapshots into `PageRevision` (`contentJson` = `{ blocks, faqs, metadata, schemas }`, incrementing version).
- Publish action: status transition `draft → needs_review → approved → published`; writes `PagePublishLog`; triggers `revalidatePath(fullPath)`.
- Optimistic concurrency: bump a `version` int on `GeneratedPage`; editor sends prev `version` on PATCH; server rejects with 409 on mismatch.
- Scheduled publish: add `publishAt` / `unpublishAt` (small additive migration on `GeneratedPage` and `MarketingPage`).

### 6.10 Redirect / canonical management
- `RedirectRule` consulted in **Next.js middleware** (new file `src/middleware.ts`) which queries a `unstable_cache`-wrapped reader keyed on `sourcePath`.
- `CanonicalRule` consulted by `generateMetadata` to override `alternates.canonical`.
- Seed initial rule: `RedirectRule` for `gurgaon` → `gurugram` (301), plus `CityAlias` row for completeness.

### 6.11 Role-based auth
- Existing 7 roles in `@ibgram/shared` (`super_admin`, `admin`, `seo_manager`, `content_manager`, `tutor_manager`, `editor`, `viewer`).
- Add new permissions: `cms:read`, `cms:write`, `cms:publish`, `cms:approve`, `media:upload`, `media:delete`, `seo:manage`, `redirects:manage`, `canonicals:manage`, `nav:manage`, `blog:write`, `blog:publish`, `testimonials:manage`, `settings:manage`, `audit:export`, `imports:run`.
- Enforce on every backend route via `requirePermission(...)` middleware (existing pattern).
- Enforce on admin Next routes via wrapper in `requireAdminSession` + role check.

### 6.12 Audit logs
- Every backend mutation writes `AuditLog` with `beforeJson`/`afterJson` for diff.
- Add `entityType` taxonomy in shared constants.
- Admin viewer at `/admin/audit-logs` (extend existing) — add filters by actor, entityType, action, date range; CSV export.

---

## 7. Phased Implementation Plan

Each phase is shippable independently and **must not break the live marketing pages**. Strategy: feature-flag DB reads with fallback to existing static data until each surface is fully migrated.

### Phase 0 — Foundation (the next prompt)
**Goal:** Wire Prisma into runtime, ensure migrations exist, expose a typed Prisma client for both Next and backend, without changing any rendered output.

Files to create:
- `database/migrations/<timestamp>_init/migration.sql` — `prisma migrate dev --name init` to formalize the existing schema.
- `database/prisma/client.ts` — shared singleton (`globalThis`-guarded) used by backend AND Next Server Components.
- `src/lib/db.ts` — re-exports the client for Next-side imports.
- `database/prisma/seed.ts` — verify it runs cleanly; add idempotent guards.

Files to modify:
- `package.json` — confirm `db:generate`, `db:migrate`, `db:seed`, `db:import-current` scripts work cross-platform (PowerShell vs bash); add `postinstall: prisma generate`.
- `.env.example` — `DATABASE_URL`, `BACKEND_URL`, `NEXT_PUBLIC_SITE_URL`, asset/upload provider envs.
- `next.config.ts` — confirm any image-domain config still needed.

**Acceptance:** `npm run db:generate && npm run lint && npm run test && npm run build` all pass; live marketing pages render unchanged.

### Phase 1 — Backend CMS routes + admin persistence
- New backend modules for `pages`, `pageBlocks`, `pageFaqs`, `pageMetadata`, `pageSchemas`, `pageLinks`, `pageRevisions`, `revalidation`.
- Replace local-JSON store in [src/lib/generated-pages/store.ts](src/lib/generated-pages/store.ts) with a Prisma reader that **falls back** to the static array when no DB rows match.
- Migrate [src/app/admin/api/pages/[id]/route.ts](src/app/admin/api/pages/%5Bid%5D/route.ts) to call the backend.
- Run `db:import-current` to seed DB with current static pages.
- Wire `revalidatePath` from a publish action.

### Phase 2 — SEO governance CRUD + Gurgaon redirect
- Backend `seo/` module (canonicals, redirects, robots, sitemap, keyword-clusters, anchor-text).
- Admin screens: `/admin/seo/redirects|canonicals|robots|sitemap|keyword-clusters|anchor-text` become editable.
- Add `src/middleware.ts` consulting `RedirectRule` (with in-process LRU cache).
- Seed `RedirectRule(gurgaon → gurugram, 301)` and `CityAlias`.
- Refactor [src/app/robots.ts](src/app/robots.ts) and [src/app/sitemap.ts](src/app/sitemap.ts) to read from DB with fallback to current logic.

### Phase 3 — Media library
- Add new Prisma migration for any missing `Asset` fields.
- Backend `assets/` module with multipart upload (start with `local` provider under `public/uploads`).
- Admin `/admin/assets` browser + picker component.
- Wire `ogImageAssetId` into page editor metadata tab.

### Phase 4 — Marketing CMS (homepage + about + contact + programmes + blog + testimonials + success stories + CTA + FAQ library + social proof)
- Add new Prisma models: `MarketingPage`, `Testimonial`, `SuccessStory`, `BlogPost`, `BlogCategory`, `CtaBlock`, `FaqTemplate`, `SocialProofStat`.
- Backend modules for each.
- Admin editors: `/admin/pages/{home|about-us|contact-us|programmes|blog-hub}`, `/admin/testimonials`, `/admin/success-stories`, `/admin/cta-library`, `/admin/faq-library`, `/admin/social-proof`, `/admin/blog/*`.
- Refactor [src/components/home/](src/components/home/) components to accept block payloads.
- Each marketing page route does `await getMarketingPage(slug) ?? renderStaticFallback()`.
- Move contact email/phone/address/WhatsApp/socials to `SiteSetting`; expose at `/admin/settings/site`.

### Phase 5 — Navigation + footer CMS
- Add `NavigationMenu`, `NavigationMenuItem`, `FooterBlock` models + backend.
- Admin screens `/admin/navigation`, `/admin/navigation/[menuSlug]`, `/admin/footer`.
- Refactor `Header.tsx` + `Footer.tsx` to read menu rows server-side.

### Phase 6 — Tutor CMS
- Wire admin tutor list / detail / edit to Prisma (replace `allTutors` adapter).
- Run `db:import-current` to ingest [src/lib/tutor-data.ts](src/lib/tutor-data.ts) into `Tutor`/`TutorProfile`/`TutorSubject`/`TutorCurriculum`/`TutorLocation`/`TutorAvailability`.
- Add new models: `TutorReview`, `TutorCertification`, `TutorTestimonial`.
- Add admin tabs: `/admin/tutors/[id]/{subjects,locations,availability,media,certifications,reviews,testimonials,seo,history}`.
- Convert `/tutor-profile/[id]` to Server Component with per-tutor `generateMetadata` and `Person`/`Service`/`AggregateRating` JSON-LD.
- Replace static tutor avatars with `Asset` references.
- Source filter dropdowns from `Subject`/`Programme`.

### Phase 7 — City / local-SEO CMS at scale (1800+ pages)
- Add `CityAlias`, `PageTemplate`, `PageTemplateBlock`, `ContentTemplate`, `InternalLinkRule`.
- Backend `modules/pageGeneration/` with worker (BullMQ or in-process queue) to execute `PageGenerationJob`.
- Admin `/admin/seo-generator/bulk` to enqueue (city × pageType × curriculum); progress UI; logs viewer.
- Migrate 25 city seeds + 100+ Gurgaon micro-pages from TypeScript → DB via `db:import-current` extension.
- Move SEO thresholds from constants to `SeoSetting`.
- IGCSE: introduce optional independent seed data per city to avoid IB duplication; if not maintained, route IGCSE → IB with explicit canonical.

### Phase 8 — Workflow polish
- Page revisions list / diff / restore UI.
- Approval workflow (`needs_review` → `approved` requires reviewer permission).
- Scheduled publishing (`publishAt`/`unpublishAt`).
- Content calendar at `/admin/content-calendar`.
- Audit log filters + CSV export.
- RBAC enforcement audit pass across all admin routes.
- Optimistic locking in `AdminPageEditor` (version int).

### Phase 9 — AI + automation
- Wire `AiProviderSetting` to page-generator (`OPENAI_API_KEY` → DB-backed).
- Admin `/admin/settings/ai`.
- Bulk regenerate failing/stale pages job.
- Google Search Console sync (auto-noindex zero-click pages).
- Per-place OG image generation (`@vercel/og` or similar).

---

## 8. Risks

1. **SEO regression** during migration if static fallbacks are removed before DB rows are validated. Mitigation: feature-flag DB reads per surface; keep static seed in repo as canary; staged rollout.
2. **Thin / duplicate content** at 1800+ scale, especially IGCSE-as-IB-clone and Gurgaon templated pages. Mitigation: `ContentTemplate` + `InternalLinkRule` per page-type; minimum quality gate enforced in publish action; admin dashboard flagging dupes.
3. **Cache invalidation gaps** — Next.js ISR / `unstable_cache` keyed reads will go stale unless backend writes call `revalidatePath`/`revalidateTag` via a backend → Next HTTP hook. Risk of admin edits not showing for hours.
4. **RBAC enforcement holes** — existing admin only enforces on user / settings APIs. Need a systematic sweep on Phase 1 to add `requirePermission` to every new backend route AND wrapper checks on admin Next routes.
5. **Concurrent edits / lost writes** — `AdminPageEditor` is currently in-memory; without optimistic locking two editors will silently overwrite. Mitigation: version int + 409 conflict UI.
6. **Asset orphaning** — deleting an `Asset` referenced by `PageBlock.items[].assetId` (free-form JSON) will not cascade. Mitigation: explicit FK columns where possible (`GeneratedPage.ogImageAssetId` already does this); reference scanner in the asset delete flow.
7. **Gurgaon ↔ Gurugram redirect** — current state is 404 for `/ib-tutors/gurgaon`. Mitigation: middleware-based redirect added in Phase 2 BEFORE wider city migration so we don't compound the problem.
8. **Migration drift** — empty `migrations/` folder means dev DBs may not match. Mitigation: `prisma migrate dev --name init` in Phase 0 to formalize the baseline, then required-migration check in CI.
9. **Backend dependence** — admin currently falls back to local JSON auth if backend is down. Once admin reads/writes flow through backend, an outage takes down admin. Mitigation: clear ops doc; backend health check in dashboard.
10. **Image upload provider lock-in** — local upload paths bake into URLs; switching to Cloudinary/S3 later requires bulk URL rewrite. Mitigation: store `provider` + `key` and resolve URL at read time via a helper.
11. **Performance at scale** — dashboard aggregates 20+ Prisma queries; page lists may exceed 1000 rows. Mitigation: indexes (most exist already), pagination on list views, materialized `DashboardSummary` cache.
12. **Schema validation on `PageRevision.contentJson`** — schema can drift across versions. Mitigation: stamp `schemaVersion` in `contentJson`; migration runner upgrades old revisions when read.
13. **Sensitive PII in audit logs** — `beforeJson`/`afterJson` may capture passwords or emails. Mitigation: redaction allowlist in `writeAuditLog`.
14. **Mobile rendering regression** when navigation becomes DB-driven (longer labels). Mitigation: visual diff test fixtures + max-length validation in admin form.

---

## 9. Acceptance Criteria

### 9.1 Audit (this document)
- [x] Sections 1–8 present and specific.
- [x] Every claim cites a repo-relative path.
- [x] No source files modified.

### 9.2 Phase 0 (next prompt)
- `prisma migrate dev` produces a clean migration; `npm run db:generate && npm run lint && npm run test && npm run build` all pass.
- A singleton Prisma client is importable from both backend and Next.js without instantiation duplication.
- `.env.example` reflects required vars.
- Visiting `/`, `/about-us`, `/contact-us`, `/programmes`, `/tutors`, `/ib-tutors`, `/ib-tutors/gurugram`, `/blog`, `/admin/login`, `/admin/dashboard` all render exactly as before this work started.
- Lighthouse scores on `/` and `/ib-tutors/gurugram` unchanged within ±2 pts.

### 9.3 Phase 1
- Editing a page in `/admin/pages/[id]/edit` writes to Prisma (`GeneratedPage` + `PageRevision` + `PagePublishLog`), not the local JSON store.
- `revalidatePath` fires on publish and the public page reflects the change within one revalidation tick.
- Backend `/api/pages` covered by integration tests (happy path + RBAC + audit log assertion).

### 9.4 Phase 2
- `RedirectRule(gurgaon, gurugram, 301)` produces a real 301 in production (verified via `curl -I`).
- `/admin/seo/redirects|canonicals|robots|sitemap` all support create/edit/delete with audit logging.
- Sitemap and robots.txt change in production within one revalidation tick after admin edits.

### 9.5 Long-term (Phase 4+)
- Every piece of inline copy listed in §2 is replaced by a DB-backed read with a corresponding admin editor.
- No hardcoded organisation `name` / `email` / `phone` / `logo` remains in JSON-LD output; sourced from `SiteSetting`/`SeoSetting`.
- `npm run check:all` (the existing combined script) passes in CI.
- Content team can publish a new city page end-to-end (city → DB → live URL → sitemap → indexable robots tag) without a code change.

---

## 10. What This Audit Does Not Cover

- **Pricing / billing surfaces** — the `subscription` route group was inventoried but the commerce layer (Razorpay/Stripe) is out of scope; flagged for a future audit.
- **Public-facing search** (e.g. ElasticSearch / Meilisearch) — not present today; consider once tutor + page counts pass a threshold.
- **Analytics & funnel telemetry** — GA4 / PostHog / Segment integration absent; tracked separately.
- **Internationalisation** — all copy is English; no `next-i18n`.
- **Accessibility audit** — required before scaling to 1800+ pages; recommend WCAG 2.1 AA pass during Phase 4.
- **Per-tutor SEO performance** beyond template metadata — keyword research and Search Console integration deferred to Phase 9.

---

_This audit was produced by an 8-way parallel investigation across the marketing routes, tutor system, city SEO pipeline, page-generator infrastructure, admin panel, backend service, Prisma schema/media layer, and shared components. See repo for source._
