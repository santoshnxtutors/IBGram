import type { MetadataRoute } from "next";
import { canonicalPath, canonicalUrl, getCanonicalTargetForDuplicate, normalizePath } from "./canonical";
import { getRobotsForPublicPage, isPrivateOrUtilityPath } from "./indexing-policy";
import { SITE_URL } from "./slug-utils";

export type SitemapLikeEntry = MetadataRoute.Sitemap[number];

const TRACKING_OR_FACET_PARAMS = /[?&](utm_|ref=|q=|search=|sort=|filter=)/i;

export function normalizeCanonicalUrl(pathOrUrl: string): string {
  return canonicalUrl(pathOrUrl);
}

export function shouldIncludeInSitemap(entry: Pick<SitemapLikeEntry, "url">): boolean {
  if (!entry.url || TRACKING_OR_FACET_PARAMS.test(entry.url)) return false;

  const path = normalizePath(entry.url);
  if (isPrivateOrUtilityPath(path)) return false;

  const robots = getRobotsForPublicPage({ path });
  if (!robots.index) return false;

  return true;
}

export function dedupeSitemapUrls(entries: SitemapLikeEntry[]): SitemapLikeEntry[] {
  const byUrl = new Map<string, SitemapLikeEntry>();

  for (const entry of entries) {
    if (!shouldIncludeInSitemap(entry)) continue;

    const canonical = normalizeCanonicalUrl(getCanonicalTargetForDuplicate(entry.url) ?? entry.url);
    if (!canonical.startsWith(`${SITE_URL}/`) && canonical !== `${SITE_URL}/`) continue;

    const previous = byUrl.get(canonical);
    byUrl.set(canonical, {
      ...previous,
      ...entry,
      url: canonical,
      lastModified: entry.lastModified ?? previous?.lastModified,
      changeFrequency: entry.changeFrequency ?? previous?.changeFrequency,
      priority: entry.priority ?? previous?.priority,
    });
  }

  return [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url));
}

export function getPublicSitemapUrls(entries: SitemapLikeEntry[]): string[] {
  return dedupeSitemapUrls(entries).map((entry) => entry.url);
}

export function sitemapPath(pathOrUrl: string): string {
  return canonicalPath(pathOrUrl);
}
