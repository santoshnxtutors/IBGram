import type { GeneratedIndexFlag, GeneratedPageStatus, GeneratedQualityScore, IndexPreference, PublishMode } from "./types";

export function resolveGeneratedPageStatus(args: {
  publishMode: PublishMode;
  quality: GeneratedQualityScore;
  validationPassed: boolean;
}): GeneratedPageStatus {
  if (!args.validationPassed) return "draft";
  if (args.publishMode === "draft") return "draft";
  if (args.publishMode === "review") return "review";
  if (args.quality.seoScore < 72 || args.quality.duplicateRisk === "high") return "review";
  return "published";
}

export function resolveIndexFlag(args: {
  preference: IndexPreference;
  quality: GeneratedQualityScore;
  status: GeneratedPageStatus;
}): GeneratedIndexFlag {
  if (args.status !== "published") return "noindex";
  if (args.preference === "noindex") return "noindex";
  if (args.preference === "index" && args.quality.recommendedIndexFlag === "index") return "index";
  if (args.preference === "index") return "noindex";
  return args.quality.recommendedIndexFlag;
}
