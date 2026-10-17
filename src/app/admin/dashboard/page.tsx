import Link from "next/link";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminDataTable, AdminStatusBadge } from "../_components/AdminPrimitives";
import { getAdminDashboardSummary, type AdminDashboardSummary } from "@/lib/admin/dashboard";
import { getAdminAnalytics } from "@/lib/admin/analytics";
import {
  ActivityLogs,
  AnalyticsUnavailable,
  Breakdowns,
  BusinessPulse,
  CardHeading,
  DegradedNotice,
  NeedsAttention,
  SectionHeading,
  Stat,
  TrendCharts,
} from "./AnalyticsSections";

export const dynamic = "force-dynamic";

function timestamp(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  return Number.isNaN(date.getTime()) ? "—" : date.toISOString().slice(0, 16).replace("T", " ");
}

const JUMPS = [
  { id: "business", label: "Business" },
  { id: "content", label: "Content & SEO" },
  { id: "inventory", label: "Inventory" },
  { id: "activity", label: "Activity" },
];

/** One compact line instead of a full-width banner — the state still reads at a glance. */
function ConnectionBanner({ state, error }: { state: AdminDashboardSummary["state"]; error: string | null }) {
  if (state === "live") return null;

  if (state === "empty") {
    return (
      <div className="mb-5 rounded-xl border border-sky-300/25 bg-sky-300/[0.07] p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-300">Database connected · no content yet</p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-sky-100/90">Prisma is reachable but the tables are empty. Populate them in one command:</p>
        <pre className="mt-3 overflow-auto rounded-md bg-black/30 p-3 text-xs leading-6 text-emerald-100">
          <code>npm run db:import-all</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="mb-5 rounded-xl border border-amber-300/25 bg-amber-300/[0.07] p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">Database unreachable</p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-amber-100/90">
        The admin app cannot reach PostgreSQL via Prisma. Check <code>DATABASE_URL</code>, network reachability to the DB host, and run{" "}
        <code>npx prisma migrate deploy</code> if the schema is missing.
      </p>
      {error && <p className="mt-3 rounded-md bg-black/30 p-3 font-mono text-xs leading-6 text-amber-200">{error}</p>}
    </div>
  );
}

export default async function AdminDashboardPage() {
  // Sequential on purpose: with no PRISMA_CONNECTION_LIMIT set the pool is a
  // single connection, so running both query sets at once would only queue.
  const summary = await getAdminDashboardSummary();
  const analytics = await getAdminAnalytics();

  const seoTone: "emerald" | "amber" | "rose" =
    summary.seo.avgSeoScore >= 75 ? "emerald" : summary.seo.avgSeoScore >= 50 ? "amber" : "rose";
  const missingMeta = summary.seo.missingMetaTitle + summary.seo.missingMetaDescription;
  const allPages = summary.pages.total + summary.tutorPages.total + summary.cms.blogPosts;

  return (
    <AdminShell>
      {/* ───────────── command bar ───────────── */}
      <header className="mb-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">Website Control Overview</h1>
            <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-slate-400">
              Everything running on IB Gram, live from PostgreSQL: money, demand, people, content, SEO and the full activity log.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {summary.state === "live" && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3.5 py-2 text-xs font-black text-emerald-200">
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
                Live · {analytics.dbLatencyMs} ms
              </span>
            )}
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-slate-400">
              {timestamp(analytics.generatedAt)} UTC
            </span>
          </div>
        </div>

        {/* Jump links: this page is long on purpose. */}
        <nav className="mt-5 flex flex-wrap gap-2">
          {JUMPS.map((j) => (
            <a
              key={j.id}
              href={`#${j.id}`}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-400 transition-colors hover:border-emerald-300/30 hover:text-emerald-200"
            >
              {j.label}
            </a>
          ))}
        </nav>
      </header>

      <ConnectionBanner state={summary.state} error={summary.error} />
      <DegradedNotice degraded={analytics.degraded} />

      {/* ───────────── what needs an admin ───────────── */}
      {analytics.state === "ok" ? <NeedsAttention analytics={analytics} /> : <AnalyticsUnavailable analytics={analytics} />}

      {/* ───────────── business ───────────── */}
      {analytics.state === "ok" && (
        <section className="mt-8">
          <SectionHeading id="business" title="Business" hint="Money in, demand coming through, and the people on both sides of it." />
          <BusinessPulse analytics={analytics} />
          <div className="mt-4">
            <TrendCharts analytics={analytics} />
          </div>
        </section>
      )}

      {/* ───────────── content & SEO ───────────── */}
      <section className="mt-8">
        <SectionHeading id="content" title="Content & SEO" hint="Generated routes, tutor pages, the location tree and indexing health." />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Stat big label="Pages total" value={allPages} href="/admin/pages" detail={`${summary.pages.total} generated · ${summary.tutorPages.total} tutor reach · ${summary.cms.blogPosts} blog`} />
          <Stat big label="Published" value={summary.pages.published} tone="emerald" href="/admin/pages?status=published" detail={`${summary.pages.draft} drafts · ${summary.pages.approved} approved`} />
          <Stat
            big
            label="Needs review"
            value={summary.pages.needsReview}
            tone={summary.pages.needsReview > 0 ? "amber" : "emerald"}
            href="/admin/pages?status=needs_review"
            detail="Approve or revise before publishing"
          />
          <Stat big label="Average SEO score" value={summary.seo.avgSeoScore} tone={seoTone} href="/admin/seo" detail="Average GeneratedPage.qualityScore" />

          <Stat label="Tutors" value={summary.tutors.total} href="/admin/tutors" detail={`${summary.tutors.active} active · ${summary.tutors.verified} verified`} />
          <Stat
            label="Tutors missing location"
            value={summary.tutors.missingLocation}
            tone={summary.tutors.missingLocation > 0 ? "amber" : "emerald"}
            href="/admin/tutors"
            detail="No TutorLocation rows"
          />
          <Stat label="Tutor reach pages" value={summary.tutorPages.total} href="/admin/tutor-reach" detail={`${summary.tutorPages.published} published`} />
          <Stat label="Cities covered" value={summary.locations.cities} href="/admin/locations" detail={`${summary.locations.countries} countries · ${summary.locations.states} states`} />

          <Stat label="Areas / sectors / societies" value={`${summary.locations.areas} / ${summary.locations.sectors} / ${summary.locations.societies}`} href="/admin/locations" detail="Micro-locations in the location tree" />
          <Stat label="Generated area pages" value={summary.pages.byType.area} href="/admin/pages?group=local" />
          <Stat label="Generated sector pages" value={summary.pages.byType.sector} href="/admin/pages?group=local" />
          <Stat label="Generated society pages" value={summary.pages.byType.society} href="/admin/pages?group=local" />

          <Stat label="Noindex pages" value={summary.pages.noindex} tone={summary.pages.noindex > 0 ? "amber" : "slate"} detail="Excluded from sitemap.xml" />
          <Stat
            label="Broken / unlinked targets"
            value={summary.internalLinks.withoutTarget}
            tone={summary.internalLinks.withoutTarget > 0 ? "rose" : "emerald"}
            href="/admin/internal-links?only=broken"
            detail={`${summary.internalLinks.total} internal links total`}
          />
          <Stat
            label="Missing metadata"
            value={missingMeta}
            tone={missingMeta > 0 ? "rose" : "emerald"}
            href="/admin/seo"
            detail={`${summary.seo.missingMetaTitle} titles · ${summary.seo.missingMetaDescription} descriptions`}
          />
          <Stat label="Sitemap entries" value={summary.seo.sitemapEntries} tone="sky" detail={`${summary.pages.sitemapIncluded} pages flagged for sitemap`} />
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-3">
          <AdminCard className="xl:col-span-2">
            <CardHeading title="Page pipeline" hint="Where every generated page sits right now." href="/admin/pages" />
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {(
                [
                  ["Published", summary.pages.published, "bg-emerald-300"],
                  ["Approved", summary.pages.approved, "bg-sky-300"],
                  ["Needs review", summary.pages.needsReview, "bg-amber-300"],
                  ["Draft", summary.pages.draft, "bg-rose-300"],
                ] as const
              ).map(([label, value, color]) => {
                const width = Math.min(100, Math.round((value / Math.max(1, summary.pages.total)) * 100));
                return (
                  <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-3.5">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-black leading-none text-white">{value}</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`${color} h-full rounded-full`} style={{ width: `${width}%` }} />
                    </div>
                    <p className="mt-1.5 text-[10px] font-bold text-slate-600">{width}% of all pages</p>
                  </div>
                );
              })}
            </div>
          </AdminCard>

          <AdminCard>
            <CardHeading title="SEO governance" href="/admin/seo" />
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  ["Redirects", summary.seo.activeRedirects, `${summary.seo.redirects} total`],
                  ["Canonicals", summary.seo.canonicals, undefined],
                  ["Robots rules", summary.seo.robotsRules, undefined],
                  ["Sitemap entries", summary.seo.sitemapEntries, undefined],
                  ["Missing H1", summary.seo.missingH1, undefined],
                  ["Missing canonical", summary.seo.missingCanonical, undefined],
                ] as const
              ).map(([label, value, hint]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  <p className="mt-1 text-2xl font-black leading-none text-white">{value}</p>
                  {hint && <p className="mt-1 text-[10px] font-semibold text-slate-600">{hint}</p>}
                </div>
              ))}
            </div>
          </AdminCard>
        </div>
      </section>

      {/* ───────────── inventory ───────────── */}
      <section className="mt-8">
        <SectionHeading id="inventory" title="Inventory" hint="Everything the CMS holds, and the latest page edits." />
        <div className="grid gap-4 xl:grid-cols-3">
          <AdminCard>
            <CardHeading title="CMS inventory" href="/admin/homepage" />
            <ul className="space-y-2 text-sm font-bold text-slate-400">
              {(
                [
                  ["Homepage sections", summary.cms.homepageSections, "/admin/homepage"],
                  ["Testimonials", summary.cms.testimonials, "/admin/testimonials"],
                  ["Success stories", summary.cms.successStories, "/admin/success-stories"],
                  ["Blog posts", summary.cms.blogPosts, "/admin/blog"],
                  ["Blog categories", summary.cms.blogCategories, "/admin/blog"],
                  ["FAQ items", summary.cms.faqItems, "/admin/faqs"],
                  ["Navigation menus", `${summary.cms.navigationMenus} (${summary.cms.navigationMenuItems} items)`, "/admin/menus"],
                  ["Footer blocks", summary.cms.footerBlocks, "/admin/menus"],
                  ["CTA blocks", summary.cms.ctaBlocks, "/admin/homepage"],
                  ["Media assets", summary.cms.mediaAssets, "/admin/assets"],
                  ["Admin & app users", `${summary.users.total} (${summary.users.active} active)`, "/admin/users"],
                ] as const
              ).map(([label, value, href]) => (
                <li key={label}>
                  <Link href={href} className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-white/[0.04] hover:text-slate-200">
                    <span>{label}</span>
                    <span className="text-white">{value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </AdminCard>

          <AdminCard className="xl:col-span-2">
            <CardHeading title="Recently updated pages" hint="The last ten edits across every generated route." href="/admin/pages" />
            <AdminDataTable
              columns={["Path", "Title", "Status", "Updated"]}
              empty="No GeneratedPage rows yet. Run npm run db:import-all to populate."
              rows={summary.activity.recentPageUpdates.map((page) => [
                <code key={`p-${page.id}`} className="text-xs text-slate-300">{page.fullPath}</code>,
                page.title ?? "Untitled",
                <AdminStatusBadge key={page.id} status={page.status as never} />,
                timestamp(page.updatedAt),
              ])}
            />
          </AdminCard>
        </div>

        {analytics.state === "ok" && (
          <div className="mt-4">
            <Breakdowns analytics={analytics} />
          </div>
        )}
      </section>

      {/* ───────────── activity ───────────── */}
      <section className="mt-8">
        <SectionHeading id="activity" title="Activity" hint="Who did what, when — publishing, admin actions, sign-ins, money and bookings." />

        <div className="grid gap-4 xl:grid-cols-2">
          <AdminCard>
            <CardHeading title="Page publish log" hint="Edits and publishes on generated pages." href="/admin/pages" />
            <AdminDataTable
              columns={["Time", "Action", "Page", "From → To"]}
              empty="No publish events yet. Edit and save any page to record one."
              rows={summary.activity.recentPagePublishLogs.map((log) => [
                timestamp(log.createdAt),
                log.action,
                <code key={`pp-${log.id}`} className="text-xs text-slate-300">{log.pagePath ?? log.pageTitle ?? log.pageId}</code>,
                <span key={`s-${log.id}`} className="text-xs font-semibold text-slate-400">
                  {log.fromStatus ?? "—"} → {log.toStatus ?? "—"}
                </span>,
              ])}
            />
          </AdminCard>

          <AdminCard>
            <CardHeading title="Admin audit" hint="Every authenticated mutation." href="/admin/audit-logs" />
            <AdminDataTable
              columns={["Time", "Actor", "Action", "Entity"]}
              empty="No AuditLog rows yet. Authenticated mutations record here."
              rows={summary.activity.recentAuditLogs.map((log) => [
                timestamp(log.createdAt),
                log.actor ?? "system",
                log.action,
                `${log.entityType}${log.entityId ? `:${log.entityId.slice(0, 8)}` : ""}`,
              ])}
            />
          </AdminCard>
        </div>

        {analytics.state === "ok" && (
          <div className="mt-4">
            <ActivityLogs analytics={analytics} />
          </div>
        )}
      </section>
    </AdminShell>
  );
}
