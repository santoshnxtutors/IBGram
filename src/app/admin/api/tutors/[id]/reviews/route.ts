import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  authorName: z.string().min(1).max(200),
  authorRole: z.string().max(120).optional().nullable(),
  location: z.string().max(120).optional().nullable(),
  rating: z.number().int().min(1).max(5).optional(),
  quote: z.string().min(1).max(2000),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  imageAssetId: z.string().optional().nullable(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

async function resolveTutorId(idOrSlug: string): Promise<string | null> {
  const found = await prisma.tutor.findFirst({
    where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
    select: { id: true },
  });
  return found?.id ?? null;
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const tutorId = await resolveTutorId(id);
  if (!tutorId) return jsonNoStore({ error: "Tutor not found" }, { status: 404 });
  const items = await prisma.tutorReview.findMany({
    where: { tutorId },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    take: 200,
  });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const tutorId = await resolveTutorId(id);
  if (!tutorId) return jsonNoStore({ error: "Tutor not found" }, { status: 404 });
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const created = await prisma.tutorReview.create({ data: { ...parsed.data, tutorId } });
  revalidateTag(`cms:tutor-reviews:${tutorId}`, { expire: 0 });
  revalidatePath(`/tutor-profile/${tutorId}/`);
  return jsonNoStore({ item: created });
}
