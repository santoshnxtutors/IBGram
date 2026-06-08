import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { CACHE_TAGS } from "@/lib/cache/cache-tags";
import { getAffectedPathsForReviewSurface } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  studentName: z.string().min(1).max(200),
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

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.successStory.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    take: 200,
  });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const created = await prisma.successStory.create({ data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForReviewSurface(CACHE_TAGS.successStories));
  return jsonNoStore({ item: created, revalidated });
}
