import "server-only";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";

const TAG_REDIRECTS = "seo:redirects";
const TAG_CANONICALS = "seo:canonicals";
const TAG_ROBOTS = "seo:robots";
const TAG_SITEMAP = "seo:sitemap";

export type RedirectRow = {
  sourcePath: string;
  targetPath: string;
  statusCode: number;
};

export type CanonicalRow = {
  sourcePath: string;
  targetPath: string;
};

export type RobotsRow = {
  userAgent: string;
  directive: string;
  path: string;
};

export type SitemapEntryRow = {
  loc: string;
  lastmod: Date | null;
  changefreq: string | null;
  priority: number | null;
};

export const getActiveRedirects = unstable_cache(
  async (): Promise<RedirectRow[]> => {
    try {
      const rows = await prisma.redirectRule.findMany({
        where: { isActive: true },
        select: { sourcePath: true, targetPath: true, statusCode: true },
      });
      return rows;
    } catch {
      return [];
    }
  },
  ["seo-active-redirects"],
  { tags: [TAG_REDIRECTS], revalidate: 600 },
);

export const getActiveCanonicals = unstable_cache(
  async (): Promise<CanonicalRow[]> => {
    try {
      const rows = await prisma.canonicalRule.findMany({
        where: { isActive: true },
        select: { sourcePath: true, targetPath: true },
      });
      return rows;
    } catch {
      return [];
    }
  },
  ["seo-active-canonicals"],
  { tags: [TAG_CANONICALS], revalidate: 600 },
);

export const getActiveRobotsRules = unstable_cache(
  async (): Promise<RobotsRow[]> => {
    try {
      const rows = await prisma.robotsRule.findMany({
        where: { isActive: true },
        select: { userAgent: true, directive: true, path: true },
        orderBy: [{ userAgent: "asc" }, { directive: "asc" }, { path: "asc" }],
      });
      return rows;
    } catch {
      return [];
    }
  },
  ["seo-active-robots"],
  { tags: [TAG_ROBOTS], revalidate: 600 },
);

export const getIncludedSitemapEntries = unstable_cache(
  async (): Promise<SitemapEntryRow[]> => {
    try {
      const rows = await prisma.sitemapEntry.findMany({
        where: { isIncluded: true },
        select: { loc: true, lastmod: true, changefreq: true, priority: true },
      });
      return rows;
    } catch {
      return [];
    }
  },
  ["seo-sitemap-entries"],
  { tags: [TAG_SITEMAP], revalidate: 600 },
);

export const SEO_CACHE_TAGS = {
  redirects: TAG_REDIRECTS,
  canonicals: TAG_CANONICALS,
  robots: TAG_ROBOTS,
  sitemap: TAG_SITEMAP,
} as const;

export function normalizePath(path: string): string {
  if (!path) return "/";
  let p = path.split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = `/${p}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p.toLowerCase();
}

export function resolveRedirect(pathname: string, rules: RedirectRow[]): RedirectRow | null {
  const target = normalizePath(pathname);
  return rules.find((rule) => normalizePath(rule.sourcePath) === target) ?? null;
}

export function resolveCanonical(pathname: string, rules: CanonicalRow[]): string | null {
  const target = normalizePath(pathname);
  const match = rules.find((rule) => normalizePath(rule.sourcePath) === target);
  return match ? match.targetPath : null;
}
