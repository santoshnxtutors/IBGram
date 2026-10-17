import type { MetadataRoute } from "next";
import { getBlogSitemapEntries } from "@/lib/cms/blog";
import { listPublishedDbSitemapEntries } from "@/lib/cms/generated-pages-db";
import { getPublicTutorProfileSitemapEntries } from "@/lib/cms/public-tutors";
import { getTutorReachSitemapEntries } from "@/lib/cms/tutor-reach";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getIncludedSitemapEntries } from "@/lib/seo/seo-db";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { dedupeSitemapUrls, normalizeCanonicalUrl, shouldIncludeInSitemap } from "@/lib/seo/sitemap-policy";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [codeEntries, dbOverrides, dbPublishedPages, blogEntries, reachEntries, tutorProfileEntries] = await Promise.all([
    Promise.resolve(getFullPublicSitemapEntries()),
    getIncludedSitemapEntries().catch(() => []),
    listPublishedDbSitemapEntries().catch(() => []),
    getBlogSitemapEntries().catch(() => []),
    getTutorReachSitemapEntries().catch(() => []),
    getPublicTutorProfileSitemapEntries().catch(() => []),
  ]);

  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const entry of codeEntries) setSitemapEntry(byUrl, entry);

  for (const post of blogEntries) {
    setSitemapEntry(byUrl, {
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: post.lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  for (const reach of reachEntries) {
    setSitemapEntry(byUrl, {
      url: absoluteUrl(`/tutor/${reach.slug}/`),
      lastModified: reach.lastModified,
      changeFrequency: "weekly",
      priority: 0.68,
    });
  }

  for (const tutor of tutorProfileEntries) {
    setSitemapEntry(byUrl, {
      url: absoluteUrl(`/tutor-profile/${tutor.slug}/`),
      lastModified: tutor.lastModified,
      changeFrequency: "weekly",
      priority: 0.64,
    });
  }

  for (const page of dbPublishedPages) {
    setSitemapEntry(byUrl, {
      url: normalizeCanonicalUrl(page.canonicalUrl ?? page.fullPath),
      lastModified: page.publishedAt ?? page.updatedAt,
      changeFrequency: "weekly",
      priority: page.qualityScore ? Math.min(1, Math.max(0.4, page.qualityScore / 100)) : 0.7,
    });
  }

  for (const row of dbOverrides) {
    const url = normalizeCanonicalUrl(row.loc);
    const existing = byUrl.get(url);
    setSitemapEntry(byUrl, {
      url,
      lastModified: row.lastmod ?? existing?.lastModified,
      changeFrequency: (row.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"]) ?? existing?.changeFrequency,
      priority: row.priority ?? existing?.priority,
    });
  }

  return dedupeSitemapUrls([...byUrl.values()]);
}

function setSitemapEntry(map: Map<string, MetadataRoute.Sitemap[number]>, entry: MetadataRoute.Sitemap[number]) {
  if (!shouldIncludeInSitemap(entry)) return;
  const url = normalizeCanonicalUrl(entry.url);
  map.set(url, { ...entry, url });
}
