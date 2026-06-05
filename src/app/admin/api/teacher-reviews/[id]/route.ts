import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  authorName: z.string().min(1).max(200).optional(),
  authorRole: z.string().max(120).optional().nullable(),
  location: z.string().max(120).optional().nullable(),
  rating: z.number().int().min(1).max(5).optional(),
  quote: z.string().min(1).max(2000).optional(),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  imageAssetId: z.string().optional().nullable(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const updated = await prisma.tutorReview.update({ where: { id }, data: parsed.data });
  revalidateTag(`cms:tutor-reviews:${updated.tutorId}`, { expire: 0 });
  return Response.json({ item: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const deleted = await prisma.tutorReview.delete({ where: { id } });
  revalidateTag(`cms:tutor-reviews:${deleted.tutorId}`, { expire: 0 });
  return Response.json({ ok: true });
}
