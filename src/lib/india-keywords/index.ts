import type { MetadataRoute } from "next";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { generatedPageToSitemapEntry } from "@/lib/seo/sitemap-utils";
import pagesJson from "./pages.json";

/**
 * The 100 India keyword pages, written and gated by scripts/india-keywords/build.ts and drawn with
 * the same renderer as the Gurgaon hub pages. They live at /india/<slug>/ and are served by
 * /india/[slug]. Kept out of the generated-pages store so no city route can claim them.
 */
const pages = pagesJson as unknown as GeneratedSeoPage[];
const bySlug = new Map(pages.map((page) => [page.slug, page]));

export const indiaKeywordSlugs = [...bySlug.keys()];

export function getIndiaKeywordPage(slug: string): GeneratedSeoPage | undefined {
  return bySlug.get(slug);
}

/** Which directory section a page belongs to on /india/. Driven by the slug, which encodes the family. */
function groupFor(page: GeneratedSeoPage): string {
  const { slug, pageType } = page;
  if (pageType === "subject") return slug.startsWith("igcse-") ? "IGCSE subject tutors" : "IB subject and core tutors";
  if (slug.startsWith("ib-igcse-")) return "IB and IGCSE together";
  if (slug.startsWith("ibdp-") || slug.startsWith("ib-diploma-")) return "IB Diploma Programme tutors";
  if (slug.startsWith("ib-myp-")) return "IB Middle Years Programme tutors";
  if (slug.startsWith("ib-pyp-")) return "IB Primary Years Programme tutors";
  if (slug.startsWith("igcse-")) return "IGCSE tutors and tuition";
  return "IB tutors and tuition";
}

/** Grouped links for the /india/ directory, in the order the sections should read. */
const GROUP_ORDER = [
  "IB tutors and tuition",
  "IGCSE tutors and tuition",
  "IB and IGCSE together",
  "IB Diploma Programme tutors",
  "IB Middle Years Programme tutors",
  "IB Primary Years Programme tutors",
  "IB subject and core tutors",
  "IGCSE subject tutors",
];

export function getIndiaKeywordDirectory(): Array<{ name: string; links: Array<{ label: string; href: string }> }> {
  const groups = new Map<string, Array<{ label: string; href: string }>>();
  for (const page of pages) {
    const name = groupFor(page);
    groups.set(name, [...(groups.get(name) ?? []), { label: page.breadcrumbTitle, href: `/india/${page.slug}/` }]);
  }
  return GROUP_ORDER.filter((name) => groups.has(name)).map((name) => ({ name, links: groups.get(name) as Array<{ label: string; href: string }> }));
}

export function getIndiaKeywordSitemapEntries(): MetadataRoute.Sitemap {
  return pages.map(generatedPageToSitemapEntry);
}
