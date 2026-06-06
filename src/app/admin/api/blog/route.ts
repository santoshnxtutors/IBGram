import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { BLOG_CACHE_TAG } from "@/lib/cms/blog";
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

function revalidateBlogSurfaces(slug?: string | null) {
  revalidateTag(BLOG_CACHE_TAG, { expire: 0 });
  revalidatePath("/blog/");
  revalidatePath("/");
  revalidatePath("/igcse/");
  if (slug) revalidatePath(`/blog/${slug}/`);
}

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.blogPost.findMany({
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: 200,
    include: { category: true },
  });
  return Response.json({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const { publishedAt, ...data } = parsed.data;
  const created = await prisma.blogPost.create({
    data: { ...data, ...(publishedAt ? { publishedAt: new Date(publishedAt) } : {}) },
  });
  revalidateBlogSurfaces(created.slug);
  return Response.json({ item: created });
}
