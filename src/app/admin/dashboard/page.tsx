import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminMetricCard, AdminCard, AdminDataTable, AdminIcons, AdminStatusBadge } from "../_components/AdminPrimitives";
import { AdminApiError, getDashboardSummary } from "../_lib/admin-api-client";
import type { DashboardSummary } from "../_types/dashboard";

const EMPTY_SUMMARY: DashboardSummary = {
  pages: { total: 0, published: 0, draft: 0, needsReview: 0, approved: 0, noindex: 0, sitemapIncluded: 0 },
  tutors: { total: 0, active: 0, missingLocation: 0, unverified: 0 },
  locations: { countries: 0, states: 0, cities: 0, areas: 0, sectors: 0, societies: 0, schools: 0 },
  generatedPages: { cityPages: 0, areaPages: 0, sectorPages: 0, societyPages: 0, schoolPages: 0, subjectPages: 0, programmePages: 0 },
  seo: { avgSeoScore: 0, missingMetaTitle: 0, missingMetaDescription: 0, missingH1: 0, missingCanonical: 0, redirects: 0, canonicals: 0, sitemapEntries: 0, robotsRules: 0 },
  internalLinks: { total: 0, withoutTarget: 0 },
  activity: { recentAuditLogs: [], recentPageUpdates: [], recentGenerationJobs: [] },
  users: { total: 0, active: 0, suspended: 0, invited: 0 },
};

function formatRelativeTime(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return date.toISOString().slice(0, 16).replace("T", " ");
}

async function loadSummary(): Promise<{ summary: DashboardSummary; error: string | null }> {
  try {
    return { summary: await getDashboardSummary(), error: null };
  } catch (error) {
    if (error instanceof AdminApiError) {
      return { summary: EMPTY_SUMMARY, error: `${error.code}: ${error.message}` };
    }
    return { summary: EMPTY_SUMMARY, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export default async function AdminDashboardPage() {
  const { summary, error } = await loadSummary();
  const seoTone: "emerald" | "amber" | "rose" = summary.seo.avgSeoScore >= 75 ? "emerald" : summary.seo.avgSeoScore >= 50 ? "amber" : "rose";

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Dashboard"
        title="Website Control Overview"
        description="Live operations view across pages, generated SEO routes, tutors, locations, indexing and audit activity. Numbers come straight from the backend."
      />

      {error && (
        <div className="mb-5 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm font-bold text-amber-100">
          Backend unavailable: {error}. Showing zeroed metrics until the backend is reachable.
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <AdminMetricCard label="Total pages" value={summary.pages.total} detail="Generated SEO pages tracked in the database" icon={<AdminIcons.FileText className="size-5" />} />
        <AdminMetricCard label="Published pages" value={summary.pages.published} tone="emerald" detail={`${summary.pages.draft} drafts · ${summary.pages.needsReview} need review`} />
        <AdminMetricCard label="Noindex pages" value={summary.pages.noindex} tone="amber" detail="Pages excluded from indexing" />
        <AdminMetricCard label="Pages needing review" value={summary.pages.needsReview} tone="rose" detail="Approve or revise before publishing" />
        <AdminMetricCard label="Total tutors" value={summary.tutors.total} icon={<AdminIcons.Users className="size-5" />} detail={`${summary.tutors.active} active`} />
        <AdminMetricCard label="Tutors missing location" value={summary.tutors.missingLocation} tone="amber" detail="No TutorLocation rows" />
        <AdminMetricCard label="Cities covered" value={summary.locations.cities} icon={<AdminIcons.Globe2 className="size-5" />} detail={`${summary.locations.countries} countries · ${summary.locations.states} states`} />
        <AdminMetricCard label="Areas / Sectors / Societies" value={`${summary.locations.areas} / ${summary.locations.sectors} / ${summary.locations.societies}`} detail="Micro-locations in the location tree" />
        <AdminMetricCard label="Generated area pages" value={summary.generatedPages.areaPages} />
        <AdminMetricCard label="Generated sector pages" value={summary.generatedPages.sectorPages} />
        <AdminMetricCard label="Generated society pages" value={summary.generatedPages.societyPages} />
        <AdminMetricCard label="Average SEO score" value={summary.seo.avgSeoScore} tone={seoTone} detail="Average qualityScore across pages" />
        <AdminMetricCard label="Broken / unlinked targets" value={summary.internalLinks.withoutTarget} tone={summary.internalLinks.withoutTarget > 0 ? "rose" : "emerald"} detail={`${summary.internalLinks.total} internal links total`} />
        <AdminMetricCard label="Missing metadata" value={summary.seo.missingMetaTitle + summary.seo.missingMetaDescription} tone="rose" detail={`${summary.seo.missingMetaTitle} titles · ${summary.seo.missingMetaDescription} descriptions`} />
        <AdminMetricCard label="Sitemap entries" value={summary.seo.sitemapEntries} tone="sky" detail={`${summary.pages.sitemapIncluded} pages flagged for sitemap`} />
        <AdminMetricCard label="Admin users" value={summary.users.total} icon={<AdminIcons.Users className="size-5" />} detail={`${summary.users.active} active · ${summary.users.suspended} suspended`} />
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
                  <div className="mt-3 h-2 rounded-full bg-white/10"><div className={`${color} h-2 rounded-full`} style={{ width: `${width}%` }} /></div>
                  <p className="mt-2 text-2xl font-black text-white">{value}</p>
                </div>
              );
            })}
          </div>
        </AdminCard>
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Internal link health</h2>
          <p className="text-5xl font-black text-white">{summary.internalLinks.total}</p>
          <p className="mt-2 text-sm font-semibold text-slate-400">Internal links indexed in the database. {summary.internalLinks.withoutTarget} have no resolved target page.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Redirects</p>
              <p className="mt-1 text-2xl font-black text-white">{summary.seo.redirects}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Canonicals</p>
              <p className="mt-1 text-2xl font-black text-white">{summary.seo.canonicals}</p>
            </div>
          </div>
        </AdminCard>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recent admin activity</h2>
          <AdminDataTable
            columns={["Time", "Actor", "Action", "Entity"]}
            empty="No audit logs yet. Activity will appear here after the first login or page change."
            rows={summary.activity.recentAuditLogs.map((log) => [
              formatRelativeTime(log.createdAt),
              log.actor?.username ?? "system",
              log.action,
              `${log.entityType}${log.entityId ? `:${log.entityId.slice(0, 8)}` : ""}`,
            ])}
          />
        </AdminCard>
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recently updated pages</h2>
          <AdminDataTable
            columns={["Path", "Title", "Status", "Updated"]}
            empty="No generated pages yet. Use the AI Generator or seed data to populate this table."
            rows={summary.activity.recentPageUpdates.map((page) => [
              page.fullPath,
              page.title ?? "Untitled",
              <AdminStatusBadge key={page.id} status={page.status as never} />,
              formatRelativeTime(page.updatedAt),
            ])}
          />
        </AdminCard>
      </div>

      <div className="mt-5">
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recent generation jobs</h2>
          <AdminDataTable
            columns={["Type", "Status", "Created", "Completed"]}
            empty="No generation jobs recorded yet."
            rows={summary.activity.recentGenerationJobs.map((job) => [
              job.jobType,
              job.status,
              formatRelativeTime(job.createdAt),
              job.completedAt ? formatRelativeTime(job.completedAt) : "—",
            ])}
          />
        </AdminCard>
      </div>
    </AdminShell>
  );
}
