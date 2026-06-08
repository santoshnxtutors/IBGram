import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { CACHE_TAGS } from "@/lib/cache/cache-tags";
import { getAffectedPathsForReviewSurface } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  studentName: z.string().min(1).max(200).optional(),
  subject: z.string().max(200).optional().nullable(),
  focus: z.string().max(200).optional().nullable(),
  outcome: z.string().max(2000).optional().nullable(),
  nextStep: z.string().max(500).optional().nullable(),
  longStory: z.string().max(8000).optional().nullable(),
  imageAssetId: z.string().optional().nullable(),
  accentClass: z.string().max(200).optional().nullable(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const updated = await prisma.successStory.update({ where: { id }, data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForReviewSurface(CACHE_TAGS.successStories));
  return jsonNoStore({ item: updated, revalidated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  await prisma.successStory.delete({ where: { id } });
  const revalidated = applyRevalidationTargets(getAffectedPathsForReviewSurface(CACHE_TAGS.successStories));
  return jsonNoStore({ ok: true, revalidated });
}
