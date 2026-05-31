import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader } from "../../../_components/AdminPrimitives";
import { AdminTutorEditor } from "../../../_components/AdminForms";
import { TutorReviewsAdmin } from "../../../_components/TutorReviewsAdmin";
import { getTutors } from "../../../_lib/admin-data";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminTutorEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tutor = (await getTutors()).find((item) => item.id === id);
  if (!tutor) notFound();

  let reviews: Awaited<ReturnType<typeof prisma.tutorReview.findMany>> = [];
  try {
    reviews = await prisma.tutorReview.findMany({
      where: { tutorId: tutor.id },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      take: 200,
    });
  } catch {
    reviews = [];
  }
  const serialised = reviews.map((r) => ({
    id: r.id,
    authorName: r.authorName,
    authorRole: r.authorRole,
    location: r.location,
    rating: r.rating,
    quote: r.quote,
    curriculum: r.curriculum,
    status: r.status,
    featured: r.featured,
    sortOrder: r.sortOrder,
    updatedAt: r.updatedAt.toISOString(),
  }));

  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Tutor editor" title={tutor.name} description="Edit tutor profile, verification, curriculum and location matching fields." />
      <AdminTutorEditor tutor={tutor} />
      <TutorReviewsAdmin tutorLookupKey={tutor.slug || tutor.id} items={serialised} />
    </AdminShell>
  );
}
