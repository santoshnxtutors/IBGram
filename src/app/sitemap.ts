import type { MetadataRoute } from "next";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getIncludedSitemapEntries } from "@/lib/seo/seo-db";
import { listPublishedDbSitemapEntries } from "@/lib/cms/generated-pages-db";
import { getBlogSitemapEntries } from "@/lib/cms/blog";
import { getTutorReachSitemapEntries } from "@/lib/cms/tutor-reach";
import { absoluteUrl } from "@/lib/seo/slug-utils";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [codeEntries, dbOverrides, dbPublishedPages, blogEntries, reachEntries] = await Promise.all([
    Promise.resolve(getFullPublicSitemapEntries()),
    getIncludedSitemapEntries().catch(() => []),
    listPublishedDbSitemapEntries().catch(() => []),
    getBlogSitemapEntries().catch(() => []),
    getTutorReachSitemapEntries().catch(() => []),
  ]);

  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  // 1. Code-derived entries (existing static + Phase 1 module-driven sitemap)
  for (const entry of codeEntries) byUrl.set(entry.url, entry);

  // 1b. Published blog posts (dynamic, admin-managed)
  for (const post of blogEntries) {
    const url = absoluteUrl(`/blog/${post.slug}/`);
    byUrl.set(url, {
      url,
      lastModified: post.lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // 1c. Published tutor-reach pages (quality-gated in getTutorReachSitemapEntries)
  for (const reach of reachEntries) {
    const url = absoluteUrl(`/tutor-pages/${reach.slug}/`);
    byUrl.set(url, {
      url,
      lastModified: reach.lastModified,
      changeFrequency: "weekly",
      priority: 0.68,
    });
  }

  // 2. Published DB GeneratedPage rows — added if not already present
  for (const page of dbPublishedPages) {
    const url = page.canonicalUrl ?? `https://ibgram.com${page.fullPath}`;
    if (!byUrl.has(url)) {
      byUrl.set(url, {
        url,
        lastModified: page.publishedAt ?? page.updatedAt,
        changeFrequency: "weekly",
        priority: page.qualityScore ? Math.min(1, Math.max(0.4, page.qualityScore / 100)) : 0.7,
      });
    }
  }

  // 3. DB SitemapEntry overrides (admin-controlled toggles + per-URL overrides)
  for (const row of dbOverrides) {
    const existing = byUrl.get(row.loc);
    byUrl.set(row.loc, {
      url: row.loc,
      lastModified: row.lastmod ?? existing?.lastModified,
      changeFrequency: (row.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"]) ?? existing?.changeFrequency,
      priority: row.priority ?? existing?.priority,
    });
  }

  return [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url));
}
