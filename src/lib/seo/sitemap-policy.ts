import type { MetadataRoute } from "next";
import { canonicalPath, canonicalUrl, getCanonicalTargetForDuplicate, normalizePath } from "./canonical";
import { getRobotsForPublicPage, isPrivateOrUtilityPath } from "./indexing-policy";
import { getGeneratedIndexingDecision } from "./indexing";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
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

  // getRobotsForPublicPage only sees the path, so it answers "index" for any
  // public-looking URL. The page itself decides from its own content, and the
  // two disagreed: sitemap emitters that fan out over static params (city x
  // subject, city x area) advertised URLs whose page rendered `noindex, follow`.
  // Google reports that contradiction as "Excluded by 'noindex' tag" and indexes
  // none of them. Asking the store for the page's real decision closes the gap
  // for every emitter at once, since all of them funnel through this guard.
  const generatedPage = getGeneratedPageByPath(path);
  if (generatedPage && !getGeneratedIndexingDecision(generatedPage).index) return false;

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
