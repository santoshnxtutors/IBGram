import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../../_components/AdminPrimitives";
import { CanonicalsClient } from "./CanonicalsClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminCanonicalsPage() {
  let rows: Awaited<ReturnType<typeof prisma.canonicalRule.findMany>> = [];
  let dbError: string | null = null;
  try {
    rows = await prisma.canonicalRule.findMany({ orderBy: { updatedAt: "desc" }, take: 200 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const items = rows.map((row) => ({
    id: row.id,
    sourcePath: row.sourcePath,
    targetPath: row.targetPath,
    reason: row.reason,
    isActive: row.isActive,
    updatedAt: row.updatedAt.toISOString(),
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="SEO"
        title="Canonical Rules"
        description="Database-backed canonical overrides. Used to consolidate Gurgaon aliases under Gurugram and prevent thin/duplicate page indexing."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Canonical database not reachable" detail={dbError} /> : <CanonicalsClient items={items} />}
      </AdminCard>
    </AdminShell>
  );
}
