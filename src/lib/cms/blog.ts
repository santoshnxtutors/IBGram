import "server-only";

import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";
import { isStaticSafeSlug, normalizeSlug } from "@/lib/seo/slug-utils";

/** The URL-safe slug for a post, whatever the stored column holds. */
function publicSlug(slug: string): string {
  return isStaticSafeSlug(slug) ? slug : normalizeSlug(slug);
}

export const BLOG_CACHE_TAG = "blog";

export type PublicBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  authorName: string | null;
  categoryName: string | null;
  categorySlug: string | null;
  tags: string[];
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  readingTimeMinutes: number | null;
  publishedAt: string | null;
  updatedAt: string;
  indexFlag: string;
  featuredImageUrl: string | null;
  featuredImageAlt: string | null;
  ogImageUrl: string | null;
};

export type PublicBlogCategory = { name: string; slug: string };

function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Rewrite a stored Asset url for public consumption. Legacy `/uploads/<key>`
 * static paths are served through the `/api/media/<key>` route handler; absolute
 * and already-rewritten urls pass through unchanged.
 */
function normaliseImageUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("/uploads/")) return `/api/media/${trimmed.slice("/uploads/".length)}`;
  if (trimmed.startsWith("uploads/")) return `/api/media/${trimmed.slice("uploads/".length)}`;
  return trimmed;
}

function toPublic(row: {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  authorName: string | null;
  tags: string[];
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  readingTimeMinutes: number | null;
  indexFlag: string;
  publishedAt: Date | string | null;
  updatedAt: Date | string;
  category: { name: string; slug: string } | null;
  featuredImage?: { url: string; altText?: string | null } | null;
  ogImage?: { url: string } | null;
}): PublicBlogPost {
  const toIso = (v: Date | string | null | undefined): string | null => {
    if (!v) return null;
    return v instanceof Date ? v.toISOString() : String(v);
  };
  return {
    id: row.id,
    // A handful of rows were saved with the raw title as the slug ("IB Tutor
    // Fees in Gurgaon: What Affects the Cost?"). isStaticSafeSlug kept those out
    // of the sitemap, but the listing pages still linked the encoded form, which
    // Googlebot crawled into Search Console's "Not found (404)" bucket.
    // Normalising here fixes every link, the sitemap and prerendering at once;
    // getBlogPostBySlug resolves the clean slug back to the row below.
    slug: publicSlug(row.slug),
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    authorName: row.authorName,
    categoryName: row.category?.name ?? null,
    categorySlug: row.category?.slug ?? null,
    tags: row.tags ?? [],
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    metaKeywords: row.metaKeywords ?? [],
    readingTimeMinutes: row.readingTimeMinutes ?? estimateReadingTime(row.body),
    publishedAt: toIso(row.publishedAt),
    updatedAt: toIso(row.updatedAt) ?? new Date().toISOString(),
    indexFlag: row.indexFlag,
    featuredImageUrl: normaliseImageUrl(row.featuredImage?.url ?? null),
    featuredImageAlt: row.featuredImage?.altText?.trim() || null,
    ogImageUrl: normaliseImageUrl(row.ogImage?.url ?? null),
  };
}

/**
 * All published blog posts (status = published, and publishedAt in the past or
 * null), newest first. Used by the public /blog list.
 */
export const getPublishedBlogPosts = unstable_cache(
  async (): Promise<PublicBlogPost[]> => {
    try {
      const rows = await prisma.blogPost.findMany({
        where: { status: "published" },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: 200,
        include: { category: true, featuredImage: true },
      });
      const now = Date.now();
      return rows
        .filter((r) => !r.publishedAt || new Date(r.publishedAt).getTime() <= now)
        .map(toPublic);
    } catch {
      return [];
    }
  },
  ["public-blog-posts"],
  { tags: [BLOG_CACHE_TAG], revalidate: 60 },
);

/** Single published post by slug (for the /blog/[slug] detail page). */
export const getBlogPostBySlug = unstable_cache(
  async (slug: string): Promise<PublicBlogPost | null> => {
    try {
      let row = await prisma.blogPost.findUnique({
        where: { slug },
        include: { category: true, featuredImage: true, ogImage: true },
      });
      // Miss on a clean slug can still be a row whose stored slug is the raw
      // title. Match on the normalised form so the link toPublic() emits
      // resolves instead of 404ing.
      // Only slugs are pulled here: this runs on every /blog/<unknown> hit,
      // which is a path crawlers find constantly, so it must not load every
      // post body. The one match is then fetched in full.
      if (!row) {
        const slugs = await prisma.blogPost.findMany({
          where: { status: "published" },
          select: { slug: true },
          take: 500,
        });
        const match = slugs.find((c) => normalizeSlug(c.slug) === slug);
        row = match
          ? await prisma.blogPost.findUnique({
              where: { slug: match.slug },
              include: { category: true, featuredImage: true, ogImage: true },
            })
          : null;
      }
      if (!row || row.status !== "published") return null;
      if (row.publishedAt && new Date(row.publishedAt).getTime() > Date.now()) return null;
      return toPublic(row);
    } catch {
      return null;
    }
  },
  ["public-blog-post-by-slug"],
  { tags: [BLOG_CACHE_TAG], revalidate: 60 },
);

// Special tags an admin sets to surface a post on a home page.
export const HOME_TAG_IB = "home-ib";
export const HOME_TAG_IGCSE = "home-igcse";

/**
 * Posts to feature on a home page. Returns posts tagged `home-ib` / `home-igcse`
 * (newest first). If none are tagged, falls back to the latest published posts
 * so the home section is never empty.
 */
export const getHomeBlogPosts = unstable_cache(
  async (surface: "ib" | "igcse", limit = 3): Promise<PublicBlogPost[]> => {
    const tag = surface === "igcse" ? HOME_TAG_IGCSE : HOME_TAG_IB;
    try {
      const tagged = await prisma.blogPost.findMany({
        where: { status: "published", tags: { has: tag } },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: limit,
        include: { category: true, featuredImage: true },
      });
      const now = Date.now();
      const visible = (rows: typeof tagged) =>
        rows.filter((r) => !r.publishedAt || new Date(r.publishedAt).getTime() <= now).map(toPublic);

      const taggedVisible = visible(tagged);
      if (taggedVisible.length >= limit) return taggedVisible.slice(0, limit);

      // Fallback: top up with latest published posts (excluding ones already shown).
      const latest = await prisma.blogPost.findMany({
        where: { status: "published" },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: limit + taggedVisible.length,
        include: { category: true, featuredImage: true },
      });
      const seen = new Set(taggedVisible.map((p) => p.id));
      const filler = visible(latest).filter((p) => !seen.has(p.id));
      return [...taggedVisible, ...filler].slice(0, limit);
    } catch {
      return [];
    }
  },
  ["public-home-blog-posts"],
  { tags: [BLOG_CACHE_TAG], revalidate: 60 },
);

/** Distinct categories that have at least one published post. */
export const getBlogCategories = unstable_cache(
  async (): Promise<PublicBlogCategory[]> => {
    try {
      const cats = await prisma.blogCategory.findMany({
        where: { posts: { some: { status: "published" } } },
        orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        select: { name: true, slug: true },
      });
      return cats;
    } catch {
      return [];
    }
  },
  ["public-blog-categories"],
  { tags: [BLOG_CACHE_TAG], revalidate: 60 },
);

/** Slugs of all published posts — for generateStaticParams. */
export async function getPublishedBlogSlugs(): Promise<string[]> {
  try {
    const rows = await prisma.blogPost.findMany({
      where: { status: "published" },
      select: { slug: true },
      take: 500,
    });
    // A slug accidentally set to a title containing ":" or spaces would
    // prerender to an illegal filename and crash `actions/upload-artifact`
    // during deploy. Normalise rather than drop, so the post still gets a
    // prerendered, crawlable URL (getBlogPostBySlug resolves it back).
    return rows.map((r) => publicSlug(r.slug)).filter(isStaticSafeSlug);
  } catch {
    return [];
  }
}

/** Published, indexable posts as sitemap rows ({ slug, lastModified }). */
export async function getBlogSitemapEntries(): Promise<Array<{ slug: string; lastModified: string }>> {
  try {
    const rows = await prisma.blogPost.findMany({
      where: { status: "published", indexFlag: { not: "noindex" } },
      select: { slug: true, updatedAt: true, publishedAt: true },
      take: 500,
    });
    const now = Date.now();
    return rows
      .filter((r) => !r.publishedAt || new Date(r.publishedAt).getTime() <= now)
      .map((r) => ({ slug: publicSlug(r.slug), lastModified: r.updatedAt.toISOString() }))
      .filter((r) => isStaticSafeSlug(r.slug));
  } catch {
    return [];
  }
}
