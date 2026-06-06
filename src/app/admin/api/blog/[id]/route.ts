import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { BLOG_CACHE_TAG } from "@/lib/cms/blog";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  slug: z.string().min(1).max(200).optional(),
  title: z.string().min(1).max(300).optional(),
  excerpt: z.string().max(2000).optional().nullable(),
  body: z.string().min(1).optional(),
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

function revalidateBlogSurfaces(slugs: Array<string | null | undefined>) {
  revalidateTag(BLOG_CACHE_TAG, { expire: 0 });
  revalidatePath("/blog/");
  revalidatePath("/");
  revalidatePath("/igcse/");
  for (const slug of slugs) {
    if (slug) revalidatePath(`/blog/${slug}/`);
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const { publishedAt, ...rest } = parsed.data;
  const existing = await prisma.blogPost.findUnique({ where: { id }, select: { slug: true } });
  const updated = await prisma.blogPost.update({
    where: { id },
    data: { ...rest, ...(publishedAt !== undefined ? { publishedAt: publishedAt ? new Date(publishedAt) : null } : {}) },
  });
  revalidateBlogSurfaces([existing?.slug, updated.slug]);
  return Response.json({ item: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const existing = await prisma.blogPost.findUnique({ where: { id }, select: { slug: true } });
  await prisma.blogPost.delete({ where: { id } });
  revalidateBlogSurfaces([existing?.slug]);
  return Response.json({ ok: true });
}
