import type { MetadataRoute } from "next";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { canonicalUrl } from "./canonical";
import { getGeneratedIndexingDecision } from "./indexing";

// Sitemap eligibility used to re-derive the index thresholds by hand, so it could
// (and did) disagree with the robots tag the page actually renders — the sitemap
// advertised URLs that served `noindex`. Delegating keeps one source of truth.
export function isGeneratedPageSitemapEligible(page: GeneratedSeoPage): boolean {
  return getGeneratedIndexingDecision(page).index;
}

export function generatedPageToSitemapEntry(page: GeneratedSeoPage): MetadataRoute.Sitemap[number] {
  return {
    // Imported from ./canonical rather than ./sitemap-policy: sitemap-policy now
    // reads the generated-page store, and the store imports this module.
    url: canonicalUrl(page.canonicalUrl),
    lastModified: page.lastUpdated,
    changeFrequency: "weekly",
    priority: page.pageType === "city" ? 0.86 : 0.72,
  };
}
