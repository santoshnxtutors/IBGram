import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { BlogClient } from "./BlogClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  let items: Awaited<ReturnType<typeof prisma.blogPost.findMany>> = [];
  let dbError: string | null = null;
  try {
    items = await prisma.blogPost.findMany({
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: 200,
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    body: item.body,
    authorName: item.authorName,
    status: item.status,
    indexFlag: item.indexFlag,
    publishedAt: item.publishedAt?.toISOString() ?? null,
    tags: item.tags,
    featuredImageId: item.featuredImageId,
    ogImageAssetId: item.ogImageAssetId,
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Content"
        title="Blog"
        description="Create and edit blog posts. Draft and review posts are not indexed. Set publishedAt to schedule visibility."
      />
      <AdminCard>{dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <BlogClient items={serialised} />}</AdminCard>
    </AdminShell>
  );
}
