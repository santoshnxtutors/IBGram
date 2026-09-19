import type { MetadataRoute } from "next";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { generatedPageToSitemapEntry } from "@/lib/seo/sitemap-utils";
import pagesJson from "./pages.json";

/**
 * The Gurgaon keyword pages, written and gated by scripts/gurgaon-keywords/build.ts and drawn with
 * the city-page renderer. Kept out of the generated-pages store so no city route can claim them.
 * Two sets share the file, told apart by path: 40 root-level pages (/ib-tutor-in-gurgaon/, served
 * by the root slug route) and 128 hub pages (/gurgaon/ib-tutor/, served by /gurgaon/[slug]).
 */
const pages = pagesJson as unknown as GeneratedSeoPage[];
const isHub = (page: GeneratedSeoPage) => new URL(page.canonicalUrl).pathname.startsWith("/gurgaon/");
const rootBySlug = new Map(pages.filter((page) => !isHub(page)).map((page) => [page.slug, page]));
const hubBySlug = new Map(pages.filter(isHub).map((page) => [page.slug, page]));

export const gurgaonKeywordSlugs = [...rootBySlug.keys()];
export const gurgaonHubKeywordSlugs = [...hubBySlug.keys()];

export function getGurgaonKeywordPage(slug: string): GeneratedSeoPage | undefined {
  return rootBySlug.get(slug);
}

export function getGurgaonHubKeywordPage(slug: string): GeneratedSeoPage | undefined {
  return hubBySlug.get(slug);
}

/** Hub pages grouped by board and subject ("IB Maths", "IGCSE") for the /gurgaon/ directory. */
export function getGurgaonHubKeywordDirectory(): Array<{ name: string; links: Array<{ label: string; href: string }> }> {
  const groups = new Map<string, Array<{ label: string; href: string }>>();
  for (const page of hubBySlug.values()) {
    // "IB Maths Home Tutor in Gurgaon" -> "IB Maths"
    const subject = page.breadcrumbTitle.match(/^(.*?) (?:Home |Private |One-to-One |Personal |Subject )?(?:Tutor|Tuition)\b/)?.[1] ?? page.breadcrumbTitle;
    const name = `${subject} tutors and tuition`;
    groups.set(name, [...(groups.get(name) ?? []), { label: page.breadcrumbTitle, href: new URL(page.canonicalUrl).pathname }]);
  }
  return [...groups.entries()].map(([name, links]) => ({ name, links }));
}

export function getGurgaonKeywordSitemapEntries(): MetadataRoute.Sitemap {
  return pages.map(generatedPageToSitemapEntry);
}
