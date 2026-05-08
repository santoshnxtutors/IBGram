import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminStatusBadge } from "../../_components/AdminPrimitives";
import { getSeoHealth } from "../../_lib/admin-data";

export default async function AdminSitemapPage() {
  const seo = await getSeoHealth();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Sitemap" title="Sitemap Preview" description="Included and excluded URLs with reasons, last modified, priority and change-frequency guidance." />
      <AdminCard>
        <AdminDataTable columns={["URL", "Included", "Last modified", "Priority", "Change frequency"]} rows={seo.sitemapIncludedPages.map((page) => [page.url, <AdminStatusBadge key={page.id} indexFlag="index" />, page.lastUpdated, page.pageType === "homepage" ? "1.0" : "0.8", "weekly"])} />
      </AdminCard>
      <AdminCard className="mt-5">
        <AdminDataTable columns={["URL", "Reason"]} rows={seo.sitemapExcludedPages.map(({ page, reason }) => [page.url, reason])} />
      </AdminCard>
    </AdminShell>
  );
}


