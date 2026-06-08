import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  tutorId: z.string().min(1),
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

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.tutorReview.findMany({
    orderBy: [{ createdAt: "desc" }],
    take: 500,
    include: { tutor: { select: { id: true, slug: true, displayName: true } } },
  });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const { tutorId: rawTutorId, ...rest } = parsed.data;
  const tutor = await prisma.tutor.findFirst({
    where: { OR: [{ id: rawTutorId }, { slug: rawTutorId }] },
    select: { id: true },
  });
  if (!tutor) return jsonNoStore({ error: "Tutor not found" }, { status: 404 });

  const created = await prisma.tutorReview.create({ data: { ...rest, tutorId: tutor.id } });
  revalidateTag(`cms:tutor-reviews:${tutor.id}`, { expire: 0 });
  return jsonNoStore({ item: created });
}
