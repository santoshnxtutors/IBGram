import "server-only";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";

export type PublicReview = {
  id: string;
  name: string;
  role: string | null;
  location: string;
  rating: number;
  text: string;
};

export type PublicSuccessStory = {
  id: string;
  name: string;
  subject: string;
  focus: string;
  outcome: string;
  nextStep: string;
  accent: string;
  image: string;
  imageAlt: string;
};

export type PublicTutorReview = {
  id: string;
  name: string;
  role: string | null;
  location: string;
  rating: number;
  text: string;
};

function normaliseImageUrl(value: string | null | undefined): string {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("/uploads/")) return `/api/media/${trimmed.slice("/uploads/".length)}`;
  if (trimmed.startsWith("uploads/")) return `/api/media/${trimmed.slice("uploads/".length)}`;
  if (trimmed.startsWith("/")) return trimmed;
  return `/${trimmed}`;
}

/**
 * Homepage "Stories from families using IB Gram" — pulls published Testimonials
 * (kind=review) marked `useOnHomepage`. Returns null if DB unreachable so the
 * frontend can fall back to its static seed array.
 */
export const getPublicHomepageReviews = unstable_cache(
  async (): Promise<PublicReview[] | null> => {
    try {
      const rows = await prisma.testimonial.findMany({
        where: {
          status: "published",
          useOnHomepage: true,
          kind: "review",
        },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
        take: 24,
      });
      if (rows.length === 0) return null;
      return rows.map((row) => ({
        id: row.id,
        name: row.authorName,
        role: row.authorRole,
        location: row.location ?? "",
        rating: row.rating ?? 5,
        text: row.quote,
      }));
    } catch {
      return null;
    }
  },
  ["public-homepage-reviews"],
  { tags: ["cms:testimonials"], revalidate: 300 },
);

/**
 * Homepage "Our Student Success Stories" — pulls published SuccessStory rows.
 * Returns null if DB unreachable so the frontend can fall back to its static seed array.
 */
export const getPublicSuccessStories = unstable_cache(
  async (): Promise<PublicSuccessStory[] | null> => {
    try {
      const rows = await prisma.successStory.findMany({
        where: { status: "published" },
        include: { imageAsset: true },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
        take: 24,
      });
      if (rows.length === 0) return null;
      return rows.map((row) => ({
        id: row.id,
        name: row.studentName,
        subject: row.subject ?? "",
        focus: row.focus ?? "Student story",
        outcome: row.outcome ?? "",
        nextStep: row.nextStep ?? "",
        accent: row.accentClass ?? "text-primary border-primary/20 bg-primary/10",
        image: normaliseImageUrl(row.imageAsset?.url ?? null),
        imageAlt: `Success story for ${row.studentName}`,
      }));
    } catch {
      return null;
    }
  },
  ["public-success-stories"],
  { tags: ["cms:success-stories"], revalidate: 300 },
);

/**
 * Per-tutor reviews carousel — pulls published TutorReview rows for a given tutor
 * (looked up by id OR slug). Returns [] if none, null if DB unreachable.
 */
export async function getTutorReviewsForPublic(idOrSlug: string): Promise<PublicTutorReview[] | null> {
  try {
    const tutor = await prisma.tutor.findFirst({
      where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
      select: { id: true },
    });
    if (!tutor) return [];
    const cached = unstable_cache(
      async (tutorId: string) => {
        const rows = await prisma.tutorReview.findMany({
          where: { tutorId, status: "published" },
          orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
          take: 30,
        });
        return rows.map((row) => ({
          id: row.id,
          name: row.authorName,
          role: row.authorRole,
          location: row.location ?? "",
          rating: row.rating,
          text: row.quote,
        }));
      },
      [`public-tutor-reviews-${tutor.id}`],
      { tags: [`cms:tutor-reviews:${tutor.id}`], revalidate: 300 },
    );
    return await cached(tutor.id);
  } catch {
    return null;
  }
}
