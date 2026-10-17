import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";

export const dynamic = "force-dynamic";

const submission = z.object({
  authorName: z.string().trim().min(2, "Please write your name.").max(120, "That name is too long."),
  authorRole: z.string().trim().max(120, "That role is too long.").optional().default(""),
  location: z.string().trim().max(120, "That city name is too long.").optional().default(""),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  rating: z.coerce.number().int("Pick a rating.").min(1, "Pick a rating.").max(5, "Ratings go from 1 to 5 stars."),
  quote: z.string().trim().min(20, "Please write at least a couple of sentences.").max(2000, "Please keep the review under 2000 characters."),
});

async function findTutor(slug: string) {
  return prisma.tutor.findFirst({
    where: { deletedAt: null, OR: [{ slug }, { id: slug }] },
    select: { id: true, slug: true, displayName: true, headline: true, avatarUrl: true, verified: true },
  });
}

/** Public: who this review link belongs to, so the form can show the tutor. */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutor = await findTutor(slug);
  if (!tutor) return jsonNoStore({ error: "That review link is not valid." }, { status: 404 });

  const agg = await prisma.tutorReview.aggregate({
    where: { tutorId: tutor.id, status: "published" },
    _avg: { rating: true },
    _count: { _all: true },
  });

  return jsonNoStore({
    tutor,
    rating: agg._count._all ? Number((agg._avg.rating ?? 0).toFixed(1)) : null,
    count: agg._count._all,
  });
}

/**
 * Public review submission from the tutor's shared link / QR code. Lands as
 * "review" (pending) so the IB Gram team moderates it before it goes public.
 */
export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutor = await findTutor(slug);
  if (!tutor) return jsonNoStore({ error: "That review link is not valid." }, { status: 404 });

  const parsed = submission.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Please check the form." }, { status: 400 });
  const input = parsed.data;

  // Cheap double-submit / spam guard: the same words for the same tutor land once.
  const duplicate = await prisma.tutorReview.findFirst({
    where: { tutorId: tutor.id, quote: input.quote },
    select: { id: true },
  });
  if (duplicate) return jsonNoStore({ ok: true, duplicate: true });

  await prisma.tutorReview.create({
    data: {
      tutorId: tutor.id,
      authorName: input.authorName,
      authorRole: input.authorRole || null,
      location: input.location || null,
      curriculum: input.curriculum ?? null,
      rating: input.rating,
      quote: input.quote,
      status: "review",
    },
  });

  // Nothing is public yet, but clear the cached carousel so an admin publish shows at once.
  revalidateTag(`cms:tutor-reviews:${tutor.id}`, { expire: 0 });
  revalidatePath(`/tutor-profile/${tutor.id}/`);

  return jsonNoStore({ ok: true });
}
