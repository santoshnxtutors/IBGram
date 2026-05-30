# IBGram — Admin Backend Fix Plan (Phase 5)

**Date:** 2026-05-29
**Branch:** `codex-publish-project`
**Trigger:** Production screenshot showing "BACKEND_UNREACHABLE: Backend unreachable. Showing zeroed metrics until the backend is reachable." with every dashboard tile at 0.

## 1. Why the admin currently shows BACKEND_UNREACHABLE

[src/app/admin/dashboard/page.tsx](../src/app/admin/dashboard/page.tsx) calls `getDashboardSummary()` from [src/app/admin/_lib/admin-api-client.ts](../src/app/admin/_lib/admin-api-client.ts). That client does an **HTTP fetch to `BACKEND_URL`** (the Express service in [backend/](../backend/)). When the Express service is not running locally — which is the case in the screenshot — the `fetch` throws and the dashboard catches `AdminApiError` with code `BACKEND_UNREACHABLE`, then renders `EMPTY_SUMMARY` (all zeros).

Per the existing architecture, the Express backend was meant to be the authoritative read layer for the dashboard. But Phases 1–3 have moved every CRUD path directly to Prisma in the Next.js admin app (`/admin/api/*` routes call `prisma.*` directly, not the backend). The dashboard is the only screen still routed through the backend HTTP layer — that's why it breaks while the rest of admin works.

## 2. Which adapters are still disconnected

| Adapter | Where it lives | Today | Fix |
|---|---|---|---|
| Dashboard metrics | `_lib/admin-api-client.ts → getDashboardSummary()` | HTTP → backend Express → Prisma | Replace with direct Prisma calls in a new `src/lib/admin/dashboard.ts` |
| Page editor save | `_lib/admin-data.ts → savePage` | ✅ Phase 3 already dual-writes to Prisma | Confirm + log audit |
| Page list | `_lib/admin-data.ts → getPages()` | Mixes static city seeds + Prisma `GeneratedPage` rows | Keep — already DB-aware |
| Tutor list | `_lib/admin-data.ts → getTutors()` | Reads `allTutors` static | Phase 5b: read Prisma when seeded, fall back to static |
| Audit logs | `getAuditLogs()` via backend HTTP | HTTP → backend | Replace with direct Prisma `prisma.auditLog.findMany` |
| Auth | `admin-auth.ts` | Backend HTTP + local JSON fallback | Keep — already resilient |

## 3. Files to create / modify

### Create
- `src/lib/admin/dashboard.ts` — Prisma-direct dashboard summary builder
- `src/lib/admin/audit.ts` — `getRecentAuditLogs()` from Prisma
- `docs/IBGRAM_ADMIN_BACKEND_FIX_PLAN.md` (this file)
- `docs/IBGRAM_ADMIN_BACKEND_FIX_REPORT.md`

### Modify
- `src/app/admin/dashboard/page.tsx` — use Prisma-direct loaders; show 3-state banner: "DB unavailable" / "DB connected, no data" / "DB connected"
- `package.json` — add a `db:import-all` script that runs all existing seeds in order so the user can populate everything with one command

## 4. The dashboard 3-state pattern

```
1. Prisma connection succeeds + at least 1 row in core tables  → "Live"   (green)
2. Prisma connection succeeds + all tables empty               → "DB connected — no content yet. Run npm run db:import-all"   (sky)
3. Prisma connection throws                                    → "DB unreachable: <error>"   (amber)
```

The current code shows state 3 even when the DB is fine but the *separate* Express backend is down — that's the bug. After this fix, the dashboard only complains about the database that actually matters.

## 5. Content import strategy

The repo already has three working seed scripts from prior phases:
- `npm run db:seed-seo` — Gurgaon → Gurugram redirects, canonicals, robots
- `npm run db:seed-gurugram` — 26 published Gurugram money pages with full content (PageBlock, PageFaq, PageMetadata, PageSchema, PageInternalLink, PageQualityScore, PagePublishLog, SitemapEntry)
- `npm run db:seed-cms` — 4 testimonials, 4 success stories, 6 blog categories, 3 blog posts, 10 FAQs, header + footer navigation menus, 4 footer blocks, 5 CTA blocks, 11 homepage sections

Plus `database/prisma/import-current.ts` (long-standing) which ingests the static tutor data + city SEO + IGCSE pages.

For Phase 5 I will **wire these together** into a single command:

```
npm run db:import-all
```

This runs, in order: `prisma generate` → `import-current` (tutors + city pages + IGCSE) → `seed-seo` → `seed-gurugram` → `seed-cms`. Each script is already idempotent, so re-running is safe.

## 6. Public render verification

Phase 3 already wired the city / area / school routes to read Prisma first, with the JSON store + static city seed as fallbacks. After the dashboard fix lands, the user will see real numbers on the dashboard once `npm run db:import-all` completes.

## 7. How the admin save → publish flow will work after Phase 5

```
Admin edits a page in /admin/pages/[id]/edit
       ↓ user clicks Save
PATCH /admin/api/pages/[id]
       ↓ requireAdminRequest guards
updatePage() in _lib/admin-data.ts
       ↓
savePage() (Phase 3 dual-write)
       ↓
1. Local JSON store    (back-compat, unchanged)
2. Prisma GeneratedPage + PageBlock + PageFaq + PageMetadata
                       + PageSchema + PageInternalLink + PagePublishLog
       ↓ revalidateTag('cms:generated-pages') + revalidateTag('seo:sitemap')
Public route handler reads Prisma first → user sees new content live
```

Audit log is written via `PagePublishLog` on every save. Adding `AuditLog` rows for non-publish admin actions is a Phase 5b follow-up.

## 8. Out-of-scope for this PR

- Tutor admin → Prisma swap (still preview-only)
- Public homepage components reading DB (data ready, render swap deferred per "don't rewrite copy" rule)
- Fine-grained per-route RBAC (umbrella `requireAdminRequest` continues)
- Cloud media (S3 / Cloudinary)
- AI "Improve grammar" / "Humanize content" buttons — they will be hidden when AI provider not configured

The headline fix in this PR is the dashboard going green, which proves the admin is connected.
