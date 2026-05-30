import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminStatusBadge, AdminEmptyState } from "../../_components/AdminPrimitives";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminSitemapPage() {
  let rows: Awaited<ReturnType<typeof prisma.sitemapEntry.findMany>> = [];
  let dbError: string | null = null;
  try {
    rows = await prisma.sitemapEntry.findMany({ orderBy: { loc: "asc" }, take: 500 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const included = rows.filter((r) => r.isIncluded);
  const excluded = rows.filter((r) => !r.isIncluded);

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="SEO"
        title="Sitemap Overrides"
        description="Database-backed sitemap overrides merged on top of the code-derived sitemap. Toggle inclusion per URL; set lastmod, priority, and change frequency."
      />
      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Sitemap database not reachable" detail={dbError} />
        ) : included.length === 0 ? (
          <AdminEmptyState
            title="No sitemap overrides yet"
            detail="The public sitemap is currently built from code seeds. Add per-URL overrides via POST /admin/api/seo/sitemap."
          />
        ) : (
          <AdminDataTable
            columns={["URL", "Included", "Last modified", "Priority", "Change freq"]}
            rows={included.map((row) => [
              <code key={`u-${row.id}`}>{row.loc}</code>,
              <AdminStatusBadge key={`i-${row.id}`} status="published" />,
              row.lastmod?.toISOString().slice(0, 10) ?? "—",
              row.priority?.toFixed(2) ?? "—",
              row.changefreq ?? "—",
            ])}
          />
        )}
      </AdminCard>
      {excluded.length > 0 && (
        <AdminCard className="mt-5">
          <h2 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-400">Excluded URLs</h2>
          <AdminDataTable
            columns={["URL", "Excluded since"]}
            rows={excluded.map((row) => [<code key={`u-${row.id}`}>{row.loc}</code>, row.updatedAt.toISOString().slice(0, 10)])}
          />
        </AdminCard>
      )}
    </AdminShell>
  );
}
