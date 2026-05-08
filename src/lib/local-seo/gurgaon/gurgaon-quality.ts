import type { GeneratedQualityScore } from "@/lib/page-generator/types";
import type { GurgaonQualityInput } from "./gurgaon.types";

export function buildGurgaonQualityScore(input: GurgaonQualityInput): GeneratedQualityScore {
  const wordTargetMet =
    input.pageType === "area" ? input.wordCount >= 1600 : input.pageType === "sector" ? input.wordCount >= 1200 : input.wordCount >= 1000;
  const linkTargetMet =
    input.pageType === "area" ? input.internalLinkCount >= 12 : input.pageType === "sector" ? input.internalLinkCount >= 8 : input.internalLinkCount >= 6;
  const canIndex = input.indexFlag === "index" && wordTargetMet && linkTargetMet && input.duplicateRisk !== "high";

  return {
    wordCount: input.wordCount,
    uniquenessScore: input.duplicateRisk === "low" ? 88 : 68,
    localDepthScore: canIndex ? 86 : 64,
    seoScore: canIndex ? 84 : 62,
    readabilityScore: 88,
    internalLinkScore: linkTargetMet ? 86 : 58,
    duplicateRisk: input.duplicateRisk,
    recommendedIndexFlag: canIndex ? "index" : "noindex",
    warnings: canIndex
      ? []
      : ["Prepared as published/noindex until there is stronger verified local depth, internal link value or tutor inventory."],
  };
}
