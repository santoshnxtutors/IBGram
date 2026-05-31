import "server-only";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";
import { dbBundleToGeneratedSeoPage, type DbPageWithChildren } from "./generated-page-adapter";
import type { GeneratedPageType, GeneratedSeoPage } from "@/lib/page-generator/types";

/**
 * DB-first reader for GeneratedPage rows. Returns null if the row does not
 * exist, the database is unreachable, or the page is not published.
 *
 * This is intentionally a *separate* helper from src/lib/generated-pages/store.ts
 * so the existing sync route handlers can continue to call the JSON store while
 * individual routes opt into DB-first reads at their own pace.
 *
 * Use shape:
 *   const dbPage = await getDbGeneratedPageByPath('/ib-tutors/gurugram/areas/golf-course-road/')
 *   if (dbPage) { renderDb(dbPage) } else { renderStaticFallback() }
 */
export const getDbGeneratedPageByPath = unstable_cache(
  async (path: string) => {
    try {
      const normalised = path.endsWith("/") ? path : `${path}/`;
      const row = await prisma.generatedPage.findFirst({
        where: { fullPath: normalised, status: "published" },
        include: {
          blocks: { orderBy: { sortOrder: "asc" } },
          faqs: { orderBy: { sortOrder: "asc" } },
          metadata: true,
          schemas: { where: { status: "published" } },
          sourceLinks: true,
        },
      });
      return row ?? null;
    } catch {
      return null;
    }
  },
  ["cms-generated-page-by-path"],
  { tags: ["cms:generated-pages"], revalidate: 600 },
);

export const listPublishedDbGeneratedPathsByType = unstable_cache(
  async (pageType: string) => {
    try {
      const rows = await prisma.generatedPage.findMany({
        where: { status: "published", pageType: pageType as never },
        select: { fullPath: true, slug: true, cityId: true },
      });
      return rows;
    } catch {
      return [];
    }
  },
  ["cms-generated-paths-by-type"],
  { tags: ["cms:generated-pages"], revalidate: 600 },
);

/**
 * High-level helper: look up a published GeneratedPage in Prisma by full path
 * and return it as the legacy GeneratedSeoPage shape so existing renderers
 * work unchanged. Returns null on miss or DB error.
 *
 * Optionally filter by allowed page types so a city route only resolves to
 * pageType="city" rows.
 */
export async function getDbGeneratedSeoPageByPath(
  path: string,
  allowedTypes?: GeneratedPageType[],
): Promise<GeneratedSeoPage | null> {
  const bundle = await getDbGeneratedPageByPath(path);
  if (!bundle) return null;
  if (allowedTypes && !allowedTypes.includes(bundle.pageType as GeneratedPageType)) return null;
  return dbBundleToGeneratedSeoPage(bundle as unknown as DbPageWithChildren);
}

/**
 * Lists published GeneratedPage rows as sitemap-eligible entries.
 *
 * Quality gate applied here so the sitemap never advertises thin, draft, or
 * noindex pages to search engines:
 *   - status MUST be 'published'
 *   - indexFlag MUST be 'index'
 *   - sitemapIncluded MUST be true
 *   - contentWordCount MUST be at least 800 (below this is considered thin)
 *   - canonicalTarget MUST be null (canonicalised pages point elsewhere and should not advertise themselves)
 *
 * Returns empty array on DB error.
 */
const SITEMAP_MIN_WORD_COUNT = 800;

export const listPublishedDbSitemapEntries = unstable_cache(
  async () => {
    try {
      const rows = await prisma.generatedPage.findMany({
        where: {
          status: "published",
          indexFlag: "index",
          sitemapIncluded: true,
          contentWordCount: { gte: SITEMAP_MIN_WORD_COUNT },
          canonicalTarget: null,
        },
        select: { fullPath: true, canonicalUrl: true, updatedAt: true, publishedAt: true, qualityScore: true },
      });
      return rows;
    } catch {
      return [];
    }
  },
  ["cms-sitemap-published"],
  { tags: ["cms:generated-pages", "seo:sitemap"], revalidate: 600 },
);
