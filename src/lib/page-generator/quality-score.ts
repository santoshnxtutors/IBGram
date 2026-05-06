import type { GeneratedInternalLink, GeneratedQualityScore, GeneratedSeoPage, SeoGeneratorInput } from "./types";
import { getVisibleGeneratedContentText } from "./content-normalizer";

const LOCAL_TERMS = ["near", "area", "sector", "school", "road", "phase", "community", "home tutoring", "online", "hybrid"];

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function scoreGeneratedPage(page: GeneratedSeoPage, input?: SeoGeneratorInput): GeneratedQualityScore {
  const text = getVisibleGeneratedContentText(page);
  const wordCount = countWords(text);
  const localDepthScore = scoreLocalDepth(page, text);
  const internalLinkScore = scoreInternalLinks(page.internalLinks);
  const metadataScore = scoreMetadata(page);
  const faqScore = Math.min(100, page.faqs.length * 14);
  const readabilityScore = scoreReadability(text);
  const stuffingRisk = keywordStuffingRisk(text, page.primaryKeyword);
  const duplicateRisk = getDuplicateRisk(page, localDepthScore, stuffingRisk);
  const uniquenessScore = duplicateRisk === "low" ? 88 : duplicateRisk === "medium" ? 66 : 42;
  const wordScore = wordCount >= 1600 && wordCount <= 2200 ? 100 : wordCount >= 1200 ? 78 : wordCount >= 800 ? 56 : 28;
  const seoScore = Math.round((wordScore * 0.22) + (localDepthScore * 0.2) + (metadataScore * 0.16) + (internalLinkScore * 0.16) + (faqScore * 0.12) + (readabilityScore * 0.14));
  const warnings: string[] = [];

  if (wordCount < 1600 && page.indexFlag === "index") warnings.push("Indexable pages should have about 1600-2000 visible words.");
  if (localDepthScore < 70) warnings.push("Add more useful local context before indexing.");
  if (internalLinkScore < 70) warnings.push("Add stronger crawlable internal links.");
  if (metadataScore < 80) warnings.push("Metadata is incomplete or too weak.");
  if (faqScore < 70) warnings.push("Add at least six useful local FAQs.");
  if (stuffingRisk > 0.035) warnings.push("Primary keyword appears too often; reduce repetition.");
  if (duplicateRisk === "high") warnings.push("Duplicate-content risk is high; keep as draft or noindex.");
  if (input?.pageType === "school" && !page.schoolDisclaimer?.includes("not officially affiliated")) {
    warnings.push("School pages require the independent platform disclaimer.");
  }

  return {
    wordCount,
    uniquenessScore,
    localDepthScore,
    seoScore,
    readabilityScore,
    internalLinkScore,
    duplicateRisk,
    recommendedIndexFlag: seoScore >= 72 && localDepthScore >= 70 && duplicateRisk !== "high" && wordCount >= 1400 ? "index" : "noindex",
    warnings,
  };
}

function scoreLocalDepth(page: GeneratedSeoPage, text: string): number {
  const lowered = text.toLowerCase();
  const locations = [page.cityName, page.microLocationName, page.parentLocation, ...page.premiumAreas, ...page.nearbyAreas, ...page.nearbyCities, ...page.schoolsMentioned]
    .filter(Boolean)
    .map((item) => item!.toLowerCase());
  const locationHits = new Set(locations.filter((item) => lowered.includes(item))).size;
  const localTermHits = LOCAL_TERMS.filter((term) => lowered.includes(term)).length;
  return Math.min(100, 32 + locationHits * 8 + localTermHits * 5);
}

function scoreInternalLinks(links: GeneratedInternalLink[]): number {
  const active = links.filter((link) => link.isCrawlable && link.followStatus === "follow" && link.linkStatus === "active");
  const uniqueAnchors = new Set(active.map((link) => link.anchorText.toLowerCase()));
  const countScore = active.length >= 8 && active.length <= 20 ? 70 : active.length >= 5 ? 52 : 28;
  const diversityScore = Math.min(30, uniqueAnchors.size * 4);
  return Math.min(100, countScore + diversityScore);
}

function scoreMetadata(page: GeneratedSeoPage): number {
  let score = 0;
  if (page.metaTitle.length >= 35 && page.metaTitle.length <= 68) score += 24;
  if (page.metaDescription.length >= 130 && page.metaDescription.length <= 170) score += 24;
  if (page.canonicalUrl) score += 18;
  if (page.ogTitle && page.ogDescription && page.ogImage) score += 18;
  if (page.breadcrumbTitle) score += 16;
  return score;
}

function scoreReadability(text: string): number {
  const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0);
  const words = countWords(text);
  const averageSentenceWords = sentences.length ? words / sentences.length : 40;
  if (averageSentenceWords <= 24) return 92;
  if (averageSentenceWords <= 30) return 78;
  if (averageSentenceWords <= 36) return 64;
  return 48;
}

function keywordStuffingRisk(text: string, keyword: string): number {
  const words = countWords(text);
  if (!words) return 0;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = text.match(new RegExp(escaped, "gi"))?.length ?? 0;
  return matches / words;
}

function getDuplicateRisk(page: GeneratedSeoPage, localDepthScore: number, stuffingRisk: number): "low" | "medium" | "high" {
  if (page.pageType === "society" || page.pageType === "school") {
    if (localDepthScore < 68) return "high";
  }
  if (stuffingRisk > 0.045) return "high";
  if (localDepthScore < 62 || stuffingRisk > 0.032) return "medium";
  return "low";
}
