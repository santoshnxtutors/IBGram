import type { MetadataRoute } from "next";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function isGeneratedPageSitemapEligible(page: GeneratedSeoPage): boolean {
  return (
    page.status === "published" &&
    page.indexFlag === "index" &&
    page.quality.recommendedIndexFlag === "index" &&
    page.quality.seoScore >= 70 &&
    page.quality.duplicateRisk !== "high"
  );
}

export function generatedPageToSitemapEntry(page: GeneratedSeoPage): MetadataRoute.Sitemap[number] {
  return {
    url: page.canonicalUrl,
    lastModified: page.lastUpdated,
    changeFrequency: "weekly",
    priority: page.pageType === "city" ? 0.86 : 0.72,
  };
}
