import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { CACHE_TAGS } from "@/lib/cache/cache-tags";
import { getAffectedPathsForReviewSurface } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  kind: z.enum(["review", "success_story"]).optional(),
  authorName: z.string().min(1).max(200).optional(),
  authorRole: z.string().max(120).optional().nullable(),
  location: z.string().max(120).optional().nullable(),
  rating: z.number().int().min(1).max(5).optional().nullable(),
  quote: z.string().min(1).max(2000).optional(),
  longStory: z.string().max(8000).optional().nullable(),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  imageAssetId: z.string().optional().nullable(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  useOnHomepage: z.boolean().optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const updated = await prisma.testimonial.update({ where: { id }, data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForReviewSurface(CACHE_TAGS.testimonials));
  return jsonNoStore({ item: updated, revalidated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  await prisma.testimonial.delete({ where: { id } });
  const revalidated = applyRevalidationTargets(getAffectedPathsForReviewSurface(CACHE_TAGS.testimonials));
  return jsonNoStore({ ok: true, revalidated });
}
