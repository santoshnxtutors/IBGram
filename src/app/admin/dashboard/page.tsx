import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminMetricCard, AdminCard, AdminDataTable, AdminIcons, AdminScoreBadge } from "../_components/AdminPrimitives";
import { getAuditLogs, getInternalLinks, getLocations, getPages, getSeoHealth, getTutors } from "../_lib/admin-data";

export default async function AdminDashboardPage() {
  const [pages, tutors, locations, links, seo, logs] = await Promise.all([getPages(), getTutors(), getLocations(), getInternalLinks(), getSeoHealth(), getAuditLogs()]);
  const published = pages.filter((page) => page.status === "published");
  const drafts = pages.filter((page) => page.status === "draft" || page.status === "review");
  const gurgaon = pages.filter((page) => page.city === "Gurugram");
  const avgSeo = Math.round(pages.reduce((sum, page) => sum + page.seoScore, 0) / pages.length);

  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Dashboard" title="Website Control Overview" description="A production-minded operations view across IB, IGCSE, Gurugram local SEO, generated pages, tutor coverage, indexing and internal link health." />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <AdminMetricCard label="Total pages" value={pages.length} detail="Static, city, IGCSE and generated routes" icon={<AdminIcons.FileText className="size-5" />} />
        <AdminMetricCard label="Published pages" value={published.length} tone="emerald" detail={`${drafts.length} drafts/review records`} />
        <AdminMetricCard label="Noindex pages" value={seo.noindexPages.length} tone="amber" detail="Mostly thin local review pages" />
        <AdminMetricCard label="Pages needing review" value={seo.thinContentPages.length + seo.weakInternalLinks.length} tone="rose" detail="Thin content or weak links" />
        <AdminMetricCard label="Total tutors" value={tutors.length} icon={<AdminIcons.Users className="size-5" />} />
        <AdminMetricCard label="Missing tutor location" value={tutors.filter((tutor) => !tutor.primaryCity).length} tone="amber" />
        <AdminMetricCard label="Cities covered" value={locations.filter((location) => location.type === "city").length} icon={<AdminIcons.Globe2 className="size-5" />} />
        <AdminMetricCard label="Gurugram local pages" value={gurgaon.length} detail="Areas, sectors, societies and city hubs" />
        <AdminMetricCard label="Area pages" value={locations.filter((location) => location.type === "area").length} />
        <AdminMetricCard label="Sector pages" value={locations.filter((location) => location.type === "sector").length} />
        <AdminMetricCard label="Society pages" value={locations.filter((location) => location.type === "society").length} />
        <AdminMetricCard label="Average SEO score" value={avgSeo} tone={avgSeo >= 75 ? "emerald" : "amber"} />
        <AdminMetricCard label="Broken links" value={seo.brokenInternalLinks.length} tone="rose" />
        <AdminMetricCard label="Missing metadata" value={seo.missingMetaDescription.length + seo.missingTitle.length} tone="rose" />
        <AdminMetricCard label="Missing FAQs/schema" value={seo.missingFaqSchema.length + seo.missingSchema.length} tone="amber" />
        <AdminMetricCard label="Sitemap indexable" value={seo.sitemapIncludedPages.length} tone="sky" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <AdminCard className="xl:col-span-2">
          <h2 className="mb-4 text-xl font-black text-white">SEO score distribution</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["80-100", pages.filter((page) => page.seoScore >= 80).length, "bg-emerald-300"],
              ["65-79", pages.filter((page) => page.seoScore >= 65 && page.seoScore < 80).length, "bg-amber-300"],
              ["0-64", pages.filter((page) => page.seoScore < 65).length, "bg-rose-300"],
              ["Noindex", seo.noindexPages.length, "bg-sky-300"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-3">
                <p className="text-sm font-black text-white">{label}</p>
                <div className="mt-3 h-2 rounded-full bg-white/10"><div className={`${color} h-2 rounded-full`} style={{ width: `${Math.min(100, Number(value) * 4)}%` }} /></div>
                <p className="mt-2 text-2xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </AdminCard>
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Internal link health</h2>
          <p className="text-5xl font-black text-white">{links.length}</p>
          <p className="mt-2 text-sm font-semibold text-slate-400">Known crawlable internal links across SEO data sources.</p>
        </AdminCard>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recent admin activity</h2>
          <AdminDataTable columns={["Action", "Target", "Detail"]} rows={logs.slice(0, 5).map((log) => [log.action, log.target, log.detail])} />
        </AdminCard>
        <AdminCard>
          <h2 className="mb-4 text-xl font-black text-white">Recent generated pages</h2>
          <AdminDataTable columns={["Title", "Status", "SEO"]} rows={pages.filter((page) => page.source === "generated").slice(0, 5).map((page) => [page.title, page.status, <AdminScoreBadge key={page.id} score={page.seoScore} />])} />
        </AdminCard>
      </div>
    </AdminShell>
  );
}


