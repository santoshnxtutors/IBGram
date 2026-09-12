import type { MetadataRoute } from "next";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { generatedPageToSitemapEntry } from "@/lib/seo/sitemap-utils";
import pagesJson from "./pages.json";

/**
 * The 40 standalone Gurgaon keyword pages (/ib-tutor-in-gurgaon/, /igcse-tuition-in-gurgaon/, ...).
 * Written and gated by scripts/gurgaon-keywords/build.ts and served by the root slug route with
 * the city-page renderer. Kept out of the generated-pages store so no city route can claim them.
 */
const pages = pagesJson as unknown as GeneratedSeoPage[];
const bySlug = new Map(pages.map((page) => [page.slug, page]));

export const gurgaonKeywordSlugs = pages.map((page) => page.slug);

export function getGurgaonKeywordPage(slug: string): GeneratedSeoPage | undefined {
  return bySlug.get(slug);
}

export function getGurgaonKeywordSitemapEntries(): MetadataRoute.Sitemap {
  return pages.map(generatedPageToSitemapEntry);
}
