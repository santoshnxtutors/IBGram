import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { FaqsClient } from "./FaqsClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminFaqsPage() {
  let items: Awaited<ReturnType<typeof prisma.faqItem.findMany>> = [];
  let dbError: string | null = null;
  try {
    items = await prisma.faqItem.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }], take: 500 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    category: item.category,
    citySlug: item.citySlug,
    pageId: item.pageId,
    curriculum: item.curriculum,
    sortOrder: item.sortOrder,
    status: item.status,
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Content"
        title="FAQ Library"
        description="Global FAQ pool. Attach to a city slug, page id, or curriculum to control where the FAQ surfaces."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <FaqsClient items={serialised} />}
      </AdminCard>
    </AdminShell>
  );
}
