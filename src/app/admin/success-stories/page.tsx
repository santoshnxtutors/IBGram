import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { SuccessStoriesClient } from "./SuccessStoriesClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminSuccessStoriesPage() {
  let items: Awaited<ReturnType<typeof prisma.successStory.findMany>> = [];
  let dbError: string | null = null;
  try {
    items = await prisma.successStory.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }], take: 200 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    studentName: item.studentName,
    subject: item.subject,
    focus: item.focus,
    outcome: item.outcome,
    nextStep: item.nextStep,
    longStory: item.longStory,
    accentClass: item.accentClass,
    imageAssetId: item.imageAssetId,
    status: item.status,
    featured: item.featured,
    sortOrder: item.sortOrder,
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Content"
        title="Success Stories"
        description="Student journey cards shown on the homepage Success Stories carousel. Edits persist immediately to the database."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <SuccessStoriesClient items={serialised} />}
      </AdminCard>
    </AdminShell>
  );
}
