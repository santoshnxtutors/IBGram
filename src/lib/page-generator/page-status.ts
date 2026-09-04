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
  // An explicit "index" preference is an operator override and wins. It used to
  // fall through to the quality score in every branch, which made the admin's
  // index/auto choice identical and left no way to publish a reviewed page the
  // scorer under-rates. "auto" still defers to the scorer.
  if (args.preference === "index") return "index";
  return args.quality.recommendedIndexFlag;
}
