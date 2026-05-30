import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../../_components/AdminPrimitives";
import { RedirectsClient } from "./RedirectsClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminRedirectsPage() {
  let rows: Awaited<ReturnType<typeof prisma.redirectRule.findMany>> = [];
  let dbError: string | null = null;
  try {
    rows = await prisma.redirectRule.findMany({ orderBy: { updatedAt: "desc" }, take: 200 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const items = rows.map((row) => ({
    id: row.id,
    sourcePath: row.sourcePath,
    targetPath: row.targetPath,
    statusCode: row.statusCode,
    reason: row.reason,
    isActive: row.isActive,
    updatedAt: row.updatedAt.toISOString(),
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="SEO"
        title="Redirect Rules"
        description="Database-backed 301/302 redirects. The proxy applies these at the edge; cache invalidates immediately on save."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Redirect database not reachable" detail={dbError} /> : <RedirectsClient items={items} />}
      </AdminCard>
    </AdminShell>
  );
}
