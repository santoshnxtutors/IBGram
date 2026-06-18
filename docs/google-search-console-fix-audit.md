# Google Search Console Fix Audit

Date: 2026-06-13
Project: IBGram public website
Stack detected: Next.js 16.2.2 App Router, React 19, TypeScript, Prisma-backed CMS reads, Vitest, ESLint, webpack-based `next build`.

## Current GSC Issues From Screenshots

- Indexed pages: 352
- Not indexed pages: 1.65K
- Excluded by noindex tag: 257
- Page with redirect: 60
- Server error 5xx: 29
- Not found 404: 13
- Blocked due to access forbidden 403: 1
- Discovered - currently not indexed: 1,260
- Crawled - currently not indexed: 30
- Enhancements currently visible: Breadcrumbs and FAQ

## Route Groups Found

- Public static/marketing routes: `/`, `/about-us/`, `/contact-us/`, `/programmes/`, `/courses/`, `/admissions/`, `/blog/`, `/jobs/`, `/tutors/`.
- Public SEO routes: `/ib-tutors/`, `/ib-tutors/[citySlug]/`, generated area/sector/society/school/subject variants, `/igcse-pages/`, `/igcse-tutors/`.
- Public tutor routes: `/tutors/`, `/tutor-profile/[id]/`, and quality-gated `/tutor/[slug]/`.
- Private/admin/auth/utility routes: `/admin/`, `/api/`, `/login/`, `/signup/`, dashboard routes, `/subscription/`, `/tutor-compare/`, job application forms.

## Findings

- Canonical host was mixed between `https://ibgram.com` and `https://www.ibgram.com`.
- Sitemap accepted DB sitemap rows and generated page rows without consistently normalizing host, redirect aliases, noindex routes, or private route patterns.
- Tutor profiles were public but missing page-specific metadata and were absent from sitemap.
- Tutor and tutor-reach pages emitted `Product`/review snippet schema for tutoring services, which can create invalid Review snippet enhancement errors.
- `robots.ts` could lose private disallows when DB robots rows existed.
- Some public generated sector/society routes could miss DB-backed pages and return 404 even when DB sitemap rows existed.
- Utility pages such as subscription, tutor compare, and job applications are useful to users but should not be indexed or included in sitemap.

## Indexable Pages

- Homepage and main public navigation pages.
- Published public blog posts.
- Published high-quality IB/IGCSE city, area, sector, society, school, subject, course, admissions, and test prep pages.
- Active approved tutor profiles with unique visible content.
- Quality-gated tutor reach pages only when their existing content is useful enough.

## Pages That Should Stay Noindex

- `/admin/`, dashboard, API, auth, preview, draft, search/filter, tracking/faceted URLs.
- `/subscription/`, `/tutor-compare/`, and job application forms.
- Generated draft/review/thin/duplicate pages.
- Unknown dynamic slugs, unpublished pages, invalid tutor/blog slugs.

## Planned Fixes

- Normalize public canonical host to `https://www.ibgram.com`.
- Add explicit indexing, sitemap, canonical, public URL inventory, and internal-link audit helpers.
- Filter sitemap entries to canonical, indexable, 200-style public URLs only.
- Keep robots public-friendly while always blocking private/admin/API/auth/utility paths.
- Add safe metadata for public tutor profile pages.
- Remove unsupported review snippet schema from tutoring service pages.
- Normalize JSON-LD URLs and strip undefined values before rendering.
- Add frontend-only tests for SEO policies.

## Completed Fixes

- Canonical URL helper now normalizes host, slashes, lowercase paths, and known redirect aliases.
- Sitemap policy now excludes noindex/private/utility/redirect-style URLs and dedupes canonical URLs.
- Robots rules now always include private/admin/API/auth/utility disallows.
- Tutor profiles now have page-specific canonical metadata and safe Person/Service/WebPage schema.
- Tutor reach schema no longer presents tutoring services as products with review snippets.
- Generated page JSON-LD and metadata normalize internal `ibgram.com` URLs to `www.ibgram.com`.
- DB-backed generated sector and society routes are supported before static fallback.
- Utility routes are explicitly noindex.
