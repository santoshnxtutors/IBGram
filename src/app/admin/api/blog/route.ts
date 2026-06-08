import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAffectedPathsForBlog } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  slug: z.string().min(1).max(200),
  title: z.string().min(1).max(300),
  excerpt: z.string().max(2000).optional().nullable(),
  body: z.string().min(1),
  authorName: z.string().max(200).optional().nullable(),
  categoryId: z.string().optional().nullable(),
  featuredImageId: z.string().optional().nullable(),
  ogImageAssetId: z.string().optional().nullable(),
  metaTitle: z.string().max(300).optional().nullable(),
  metaDescription: z.string().max(600).optional().nullable(),
  metaKeywords: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  indexFlag: z.enum(["index", "noindex", "auto"]).optional(),
  readingTimeMinutes: z.number().int().min(1).max(120).optional().nullable(),
  publishedAt: z.string().datetime().optional().nullable(),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.blogPost.findMany({
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: 200,
    include: { category: true },
  });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const { publishedAt, ...data } = parsed.data;
  const created = await prisma.blogPost.create({
    data: { ...data, ...(publishedAt ? { publishedAt: new Date(publishedAt) } : {}) },
  });
  const revalidated = applyRevalidationTargets(getAffectedPathsForBlog(created));
  return jsonNoStore({ item: created, revalidated });
}
