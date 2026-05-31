import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { TeacherReviewsClient } from "./TeacherReviewsClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminTeacherReviewsPage() {
  let items: Array<{
    id: string;
    tutorId: string;
    tutorName: string;
    tutorSlug: string;
    authorName: string;
    authorRole: string | null;
    location: string | null;
    rating: number;
    quote: string;
    curriculum: string | null;
    status: string;
    featured: boolean;
    sortOrder: number;
    updatedAt: string;
  }> = [];
  let tutors: Array<{ id: string; slug: string; displayName: string }> = [];
  let dbError: string | null = null;

  try {
    const [reviews, tutorRows] = await Promise.all([
      prisma.tutorReview.findMany({
        orderBy: [{ createdAt: "desc" }],
        take: 500,
        include: { tutor: { select: { id: true, slug: true, displayName: true } } },
      }),
      prisma.tutor.findMany({
        where: { deletedAt: null },
        orderBy: { displayName: "asc" },
        select: { id: true, slug: true, displayName: true },
        take: 1000,
      }),
    ]);
    items = reviews.map((r) => ({
      id: r.id,
      tutorId: r.tutorId,
      tutorName: r.tutor.displayName,
      tutorSlug: r.tutor.slug,
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
    tutors = tutorRows;
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Content"
        title="Teacher Reviews"
        description="All per-tutor reviews across every teacher. These render in the carousel on each tutor's public profile."
      />
      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Database not reachable" detail={dbError} />
        ) : (
          <TeacherReviewsClient items={items} tutors={tutors} />
        )}
      </AdminCard>
    </AdminShell>
  );
}
