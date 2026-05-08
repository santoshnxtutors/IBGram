import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminStatusBadge } from "../../_components/AdminPrimitives";
import { getSeoHealth } from "../../_lib/admin-data";
export default async function IndexingPage() { const seo = await getSeoHealth(); return <AdminShell><AdminPageHeader eyebrow="SEO" title="Indexing Recommendations" description="Recommendations based on quality, content depth, FAQs, schema and internal links." /><AdminCard><AdminDataTable columns={["Page", "Current", "Recommendation"]} rows={seo.sitemapExcludedPages.slice(0, 50).map(({ page, reason }) => [page.title, <AdminStatusBadge key={page.id} indexFlag={page.indexFlag} />, reason === "Noindex" && page.qualityScore > 80 ? "Review for index" : "Keep excluded until improved"])} /></AdminCard></AdminShell>; }


