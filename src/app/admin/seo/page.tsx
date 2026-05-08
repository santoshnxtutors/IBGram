import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminMetricCard, AdminCard, AdminDataTable, AdminScoreBadge } from "../_components/AdminPrimitives";
import { getSeoHealth } from "../_lib/admin-data";

export default async function AdminSeoPage() {
  const seo = await getSeoHealth();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="SEO" title="SEO Health Center" description="Metadata, canonical, robots, sitemap, schema, content quality and internal link risk controls." />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <AdminMetricCard label="Missing titles" value={seo.missingTitle.length} tone="rose" />
        <AdminMetricCard label="Missing meta descriptions" value={seo.missingMetaDescription.length} tone="rose" />
        <AdminMetricCard label="Duplicate titles" value={seo.duplicateMetaTitles.length} tone="amber" />
        <AdminMetricCard label="Duplicate descriptions" value={seo.duplicateMetaDescriptions.length} tone="amber" />
        <AdminMetricCard label="Missing H1" value={seo.missingH1.length} tone="rose" />
        <AdminMetricCard label="Missing canonical" value={seo.missingCanonical.length} tone="rose" />
        <AdminMetricCard label="Noindex pages" value={seo.noindexPages.length} tone="amber" />
        <AdminMetricCard label="Indexable pages" value={seo.indexablePages.length} tone="emerald" />
        <AdminMetricCard label="Sitemap included" value={seo.sitemapIncludedPages.length} />
        <AdminMetricCard label="Sitemap excluded" value={seo.sitemapExcludedPages.length} />
        <AdminMetricCard label="Missing schema" value={seo.missingSchema.length} tone="amber" />
        <AdminMetricCard label="Thin content" value={seo.thinContentPages.length} tone="rose" />
      </div>
      <AdminCard className="mt-5">
        <h2 className="mb-4 text-xl font-black text-white">Weak internal link pages</h2>
        <AdminDataTable columns={["Page", "URL", "SEO", "Links"]} rows={seo.weakInternalLinks.slice(0, 20).map((page) => [page.title, page.url, <AdminScoreBadge key={page.id} score={page.seoScore} />, page.internalLinksCount])} />
      </AdminCard>
    </AdminShell>
  );
}


