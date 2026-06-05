import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminMetricCard, AdminCard, AdminDataTable, AdminIcons, AdminStatusBadge } from "../_components/AdminPrimitives";
import { getAdminDashboardSummary, type AdminDashboardSummary } from "@/lib/admin/dashboard";

export const dynamic = "force-dynamic";

function formatRelativeTime(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return date.toISOString().slice(0, 16).replace("T", " ");
}

function ConnectionBanner({ state, error }: { state: AdminDashboardSummary["state"]; error: string | null }) {
  if (state === "live") {
    return (
      <div className="mb-5 flex items-center justify-between gap-3 rounded-lg border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm font-bold text-emerald-200">
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]" /> Database live · Prisma connected · live metrics
        </span>
        <span className="text-xs font-bold text-emerald-300/70">Reading directly from PostgreSQL</span>
      </div>
    );
  }
  if (state === "empty") {
    return (
      <div className="mb-5 rounded-lg border border-sky-300/30 bg-sky-300/10 p-4 text-sm font-bold text-sky-100">
        <span className="block font-black uppercase tracking-[0.15em] text-sky-300">Database connected · no content yet</span>
        <p className="mt-2 text-sm font-medium leading-relaxed text-sky-100/90">
          Prisma is reachable but the tables are empty. Populate the database in one command:
        </p>
        <pre className="mt-3 overflow-auto rounded-md bg-black/30 p-3 text-xs leading-6 text-emerald-100"><code>npm run db:import-all</code></pre>
        <p className="mt-2 text-xs font-medium text-sky-200/80">
          This runs (in order): <code>prisma generate</code> → <code>import-current</code> (tutors + city pages + IGCSE) → <code>seed-seo</code> → <code>seed-gurugram</code> → <code>seed-cms</code>.
          All scripts are idempotent.
        </p>
      </div>
    );
  }
  return (
    <div className="mb-5 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm font-bold text-amber-100">
      <span className="block font-black uppercase tracking-[0.15em] text-amber-300">Database unreachable</span>
      <p className="mt-2 text-sm font-medium leading-relaxed text-amber-100/90">
        The Next.js admin app cannot reach the PostgreSQL database via Prisma. Check <code>DATABASE_URL</code> in <code>.env</code>, network reachability to the DB host, and run <code>npx prisma migrate deploy</code> if the schema is missing.
      </p>
      {error && <p className="mt-3 rounded-md bg-black/30 p-3 text-xs font-mono leading-6 text-amber-200">{error}</p>}
    </div>
  );
}

export default async function AdminDashboardPage() {
  const summary = await getAdminDashboardSummary();
  const seoTone: "emerald" | "amber" | "rose" =
    summary.seo.avgSeoScore >= 75 ? "emerald" : summary.seo.avgSeoScore >= 50 ? "amber" : "rose";

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Dashboard"
        title="Website Control Overview"
        description="Live operations view straight from PostgreSQL via Prisma. Pages, generated SEO routes, tutors, locations, indexing and audit activity."
      />

      <ConnectionBanner state={summary.state} error={summary.error} />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <AdminMetricCard
          label="Total pages"
          value={summary.pages.total + summary.tutorPages.total + summary.cms.blogPosts}
          detail={`${summary.pages.total} generated · ${summary.tutorPages.total} tutor reach · ${summary.cms.blogPosts} blog`}
          icon={<AdminIcons.FileText className="size-5" />}
        />
        <AdminMetricCard
          label="Published pages"
          value={summary.pages.published}
          tone="emerald"
          detail={`${summary.pages.draft} drafts · ${summary.pages.needsReview} need review`}
        />
        <AdminMetricCard
          label="Noindex pages"
          value={summary.pages.noindex}
          tone="amber"
          detail="Excluded from sitemap.xml"
        />
        <AdminMetricCard
          label="Pages needing review"
          value={summary.pages.needsReview}
          tone="rose"
          detail="Approve or revise before publishing"
        />
        <AdminMetricCard
          label="Total tutors"
          value={summary.tutors.total}
          icon={<AdminIcons.Users className="size-5" />}
          detail={`${summary.tutors.active} active`}
        />
        <AdminMetricCard
          label="Tutor reach pages"
          value={summary.tutorPages.total}
          icon={<AdminIcons.FileText className="size-5" />}
          detail={`${summary.tutorPages.published} published`}
        />
        <AdminMetricCard
          label="Tutors missing location"
          value={summary.tutors.missingLocation}
          tone={summary.tutors.missingLocation > 0 ? "amber" : "emerald"}
          detail="No TutorLocation rows"
        />
        <AdminMetricCard
          label="Cities covered"
          value={summary.locations.cities}
          icon={<AdminIcons.Globe2 className="size-5" />}
          detail={`${summary.locations.countries} countries · ${summary.locations.states} states`}
        />
        <AdminMetricCard
          label="Areas / Sectors / Societies"
          value={`${summary.locations.areas} / ${summary.locations.sectors} / ${summary.locations.societies}`}
          detail="Micro-locations in the location tree"
        />
        <AdminMetricCard label="Generated area pages" value={summary.pages.byType.area} />
        <AdminMetricCard label="Generated sector pages" value={summary.pages.byType.sector} />
        <AdminMetricCard label="Generated society pages" value={summary.pages.byType.society} />
        <AdminMetricCard
          label="Average SEO score"
          value={summary.seo.avgSeoScore}
          tone={seoTone}
          detail="Average GeneratedPage.qualityScore"
        />
        <AdminMetricCard
          label="Broken / unlinked targets"
          value={summary.internalLinks.withoutTarget}
          tone={summary.internalLinks.withoutTarget > 0 ? "rose" : "emerald"}
          detail={`${summary.internalLinks.total} internal links total`}
        />
        <AdminMetricCard
          label="Missing metadata"
          value={summary.seo.missingMetaTitle + summary.seo.missingMetaDescription}
          tone={summary.seo.missingMetaTitle + summary.seo.missingMetaDescription > 0 ? "rose" : "emerald"}
          detail={`${summary.seo.missingMetaTitle} titles · ${summary.seo.missingMetaDescription} descriptions`}
        />
        <AdminMetricCard
          label="Sitemap entries"
          value={summary.seo.sitemapEntries}
          tone="sky"
          detail={`${summary.pages.sitemapIncluded} pages flagged for sitemap`}
        />
        <AdminMetricCard
          label="Admin users"
          value={summary.users.total}
          icon={<AdminIcons.Users className="size-5" />}
          detail={`${summary.users.active} active · ${summary.users.suspended} suspended`}
        />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <AdminCard className="xl:col-span-2">
          <h2 className="mb-4 text-xl font-black text-white">Page pipeline</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["Published", summary.pages.published, "bg-emerald-300"],
              ["Approved", summary.pages.approved, "bg-sky-300"],
              ["Needs review", summary.pages.needsReview, "bg-amber-300"],
              ["Draft", summary.pages.draft, "bg-rose-300"],
            ].map(([label, value, color]) => {
              const max = Math.max(1, summary.pages.total);
              const width = Math.min(100, Math.round((Number(value) / max) * 100));
              return (
                <div key={String(label)} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="text-sm font-black text-white">{label}</p>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className={`${color} h-2 rounded-full`} style={{ width: `${width}%` }} />
                  </div>
                  <p className="mt-2 text-2xl font-black text-white">{value}</p>
                </div>
              );
            })}
          </div>
        </AdminCard>
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">SEO governance</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Redirects</p>
              <p className="mt-1 text-2xl font-black text-white">{summary.seo.activeRedirects}</p>
              <p className="text-[10px] font-semibold text-slate-500">{summary.seo.redirects} total</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Canonicals</p>
              <p className="mt-1 text-2xl font-black text-white">{summary.seo.canonicals}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Robots rules</p>
              <p className="mt-1 text-2xl font-black text-white">{summary.seo.robotsRules}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Sitemap entries</p>
              <p className="mt-1 text-2xl font-black text-white">{summary.seo.sitemapEntries}</p>
            </div>
          </div>
        </AdminCard>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">CMS inventory</h2>
          <ul className="space-y-2 text-sm font-bold text-slate-300">
            <li className="flex items-center justify-between"><span>Homepage sections</span><span className="text-white">{summary.cms.homepageSections}</span></li>
            <li className="flex items-center justify-between"><span>Testimonials</span><span className="text-white">{summary.cms.testimonials}</span></li>
            <li className="flex items-center justify-between"><span>Success stories</span><span className="text-white">{summary.cms.successStories}</span></li>
            <li className="flex items-center justify-between"><span>Blog posts</span><span className="text-white">{summary.cms.blogPosts}</span></li>
            <li className="flex items-center justify-between"><span>Blog categories</span><span className="text-white">{summary.cms.blogCategories}</span></li>
            <li className="flex items-center justify-between"><span>FAQ items</span><span className="text-white">{summary.cms.faqItems}</span></li>
            <li className="flex items-center justify-between"><span>Navigation menus</span><span className="text-white">{summary.cms.navigationMenus} ({summary.cms.navigationMenuItems} items)</span></li>
            <li className="flex items-center justify-between"><span>Footer blocks</span><span className="text-white">{summary.cms.footerBlocks}</span></li>
            <li className="flex items-center justify-between"><span>CTA blocks</span><span className="text-white">{summary.cms.ctaBlocks}</span></li>
            <li className="flex items-center justify-between"><span>Media assets</span><span className="text-white">{summary.cms.mediaAssets}</span></li>
          </ul>
        </AdminCard>
        <AdminCard className="xl:col-span-2">
          <h2 className="mb-4 text-xl font-black text-white">Recently updated pages</h2>
          <AdminDataTable
            columns={["Path", "Title", "Status", "Updated"]}
            empty="No GeneratedPage rows yet. Run npm run db:import-all to populate."
            rows={summary.activity.recentPageUpdates.map((page) => [
              <code key={`p-${page.id}`} className="text-xs text-slate-300">{page.fullPath}</code>,
              page.title ?? "Untitled",
              <AdminStatusBadge key={page.id} status={page.status as never} />,
              formatRelativeTime(page.updatedAt),
            ])}
          />
        </AdminCard>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recent page publish log</h2>
          <AdminDataTable
            columns={["Time", "Action", "Page", "From → To"]}
            empty="No publish events yet. Edit and save any page to record one."
            rows={summary.activity.recentPagePublishLogs.map((log) => [
              formatRelativeTime(log.createdAt),
              log.action,
              <code key={`pp-${log.id}`} className="text-xs text-slate-300">{log.pagePath ?? log.pageTitle ?? log.pageId}</code>,
              <span key={`s-${log.id}`} className="text-xs font-semibold text-slate-400">
                {log.fromStatus ?? "—"} → {log.toStatus ?? "—"}
              </span>,
            ])}
          />
        </AdminCard>
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recent admin audit</h2>
          <AdminDataTable
            columns={["Time", "Actor", "Action", "Entity"]}
            empty="No AuditLog rows yet. Authenticated mutations record here."
            rows={summary.activity.recentAuditLogs.map((log) => [
              formatRelativeTime(log.createdAt),
              log.actor ?? "system",
              log.action,
              `${log.entityType}${log.entityId ? `:${log.entityId.slice(0, 8)}` : ""}`,
            ])}
          />
        </AdminCard>
      </div>
    </AdminShell>
  );
}
