import type { MetadataRoute } from "next";
import { getBlogSitemapEntries } from "@/lib/cms/blog";
import { listPublishedDbSitemapEntries } from "@/lib/cms/generated-pages-db";
import { getPublicTutorProfileSitemapEntries } from "@/lib/cms/public-tutors";
import { getTutorReachSitemapEntries } from "@/lib/cms/tutor-reach";
import { SITEMAP_SECTIONS, getSectionedSitemapEntries, type SitemapSection } from "@/lib/seo/sitemap";
import { getIncludedSitemapEntries } from "@/lib/seo/seo-db";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { dedupeSitemapUrls, normalizeCanonicalUrl, shouldIncludeInSitemap } from "@/lib/seo/sitemap-policy";

export const revalidate = 3600;

/**
 * One sitemap per section, behind the index Next.js serves at /sitemap.xml.
 *
 * Search Console reports indexed-vs-submitted PER SITEMAP. A single file gave
 * one number for ~3,500 URLs and no way to tell which section the
 * "Discovered - currently not indexed" URLs belonged to. Splitting attributes
 * that per city/board without changing the URL set.
 *
 * `buildSections()` below is the single source of truth: it builds every
 * section, then dedupes GLOBALLY with first-wins, so no URL can appear in two
 * child sitemaps and the union is byte-for-byte the set the old single sitemap
 * produced.
 */
export async function generateSitemaps(): Promise<Array<{ id: SitemapSection }>> {
  return [...SITEMAP_SECTIONS, "blog"].map((id) => ({ id: id as SitemapSection }));
}

type Sections = Record<string, MetadataRoute.Sitemap>;

async function buildSections(): Promise<Sections> {
  const [dbOverrides, dbPublishedPages, blogEntries, reachEntries, tutorProfileEntries] = await Promise.all([
    getIncludedSitemapEntries().catch(() => []),
    listPublishedDbSitemapEntries().catch(() => []),
    getBlogSitemapEntries().catch(() => []),
    getTutorReachSitemapEntries().catch(() => []),
    getPublicTutorProfileSitemapEntries().catch(() => []),
  ]);

  const sections: Sections = { ...getSectionedSitemapEntries(), blog: [] };

  sections.blog = blogEntries.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}/`),
    lastModified: post.lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  sections["tutor-profiles"] = [
    ...sections["tutor-profiles"],
    ...reachEntries.map((reach) => ({
      url: absoluteUrl(`/tutor/${reach.slug}/`),
      lastModified: reach.lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.68,
    })),
    ...tutorProfileEntries.map((tutor) => ({
      url: absoluteUrl(`/tutor-profile/${tutor.slug}/`),
      lastModified: tutor.lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.64,
    })),
  ];

  sections.generated = [
    ...sections.generated,
    ...dbPublishedPages.map((page) => ({
      url: normalizeCanonicalUrl(page.canonicalUrl ?? page.fullPath),
      lastModified: page.publishedAt ?? page.updatedAt,
      changeFrequency: "weekly" as const,
      priority: page.qualityScore ? Math.min(1, Math.max(0.4, page.qualityScore / 100)) : 0.7,
    })),
  ];

  // Global first-wins dedupe across every section, so a URL reachable from two
  // sources is emitted once, in the earliest section.
  const claimed = new Set<string>();
  for (const id of Object.keys(sections)) {
    const kept: MetadataRoute.Sitemap = [];
    for (const entry of sections[id]) {
      if (!shouldIncludeInSitemap(entry)) continue;
      const url = normalizeCanonicalUrl(entry.url);
      if (claimed.has(url)) continue;
      claimed.add(url);
      kept.push({ ...entry, url });
    }
    sections[id] = dedupeSitemapUrls(kept);
  }

  // DB overrides only adjust lastmod/changefreq/priority of a URL that is
  // already in a section; they never introduce or move one.
  if (dbOverrides.length > 0) {
    const overrideByUrl = new Map(dbOverrides.map((row) => [normalizeCanonicalUrl(row.loc), row]));
    for (const id of Object.keys(sections)) {
      sections[id] = sections[id].map((entry) => {
        const row = overrideByUrl.get(entry.url);
        if (!row) return entry;
        return {
          ...entry,
          lastModified: row.lastmod ?? entry.lastModified,
          changeFrequency: (row.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"]) ?? entry.changeFrequency,
          priority: row.priority ?? entry.priority,
        };
      });
    }
  }

  return sections;
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  const sections = await buildSections();
  return sections[id] ?? [];
}
