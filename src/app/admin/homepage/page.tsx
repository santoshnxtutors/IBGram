import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { HomepageClient } from "./HomepageClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminHomepagePage() {
  let items: Awaited<ReturnType<typeof prisma.homepageSection.findMany>> = [];
  let dbError: string | null = null;
  try {
    items = await prisma.homepageSection.findMany({ orderBy: { sortOrder: "asc" }, take: 200 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    sectionKey: item.sectionKey,
    displayName: item.displayName,
    sectionType: item.sectionType,
    heading: item.heading,
    subheading: item.subheading,
    body: item.body,
    sortOrder: item.sortOrder,
    isVisible: item.isVisible,
    status: item.status,
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Homepage"
        title="Homepage Sections"
        description="Compose the homepage: order, visibility and content for every section. Hero, programmes, testimonials, blog, FAQs, CTAs."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <HomepageClient items={serialised} />}
      </AdminCard>
    </AdminShell>
  );
}
