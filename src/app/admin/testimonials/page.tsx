import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { TestimonialsClient } from "./TestimonialsClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminTestimonialsPage() {
  let items: Awaited<ReturnType<typeof prisma.testimonial.findMany>> = [];
  let dbError: string | null = null;
  try {
    items = await prisma.testimonial.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }], take: 200 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    kind: item.kind,
    authorName: item.authorName,
    authorRole: item.authorRole,
    location: item.location,
    rating: item.rating,
    quote: item.quote,
    curriculum: item.curriculum,
    status: item.status,
    useOnHomepage: item.useOnHomepage,
    featured: item.featured,
    sortOrder: item.sortOrder,
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Content"
        title="Testimonials"
        description="Reviews and success stories shown on the homepage and city pages. Edits persist immediately to the database."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <TestimonialsClient items={serialised} />}
      </AdminCard>
    </AdminShell>
  );
}
