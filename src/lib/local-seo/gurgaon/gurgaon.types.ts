import type { DuplicateRisk, GeneratedIndexFlag, GeneratedPageType } from "@/lib/page-generator/types";

export type GurgaonLocalPageType = Extract<GeneratedPageType, "area" | "sector" | "society">;

export type GurgaonIndexReason = "strong-local-depth" | "mapped-local-intent" | "thin-or-unverified";

export interface GurgaonLocalPlace {
  pageType: GurgaonLocalPageType;
  name: string;
  slug: string;
  parentAreaSlug?: string;
  parentSectorSlug?: string;
  locationCluster: string;
  localIntent: string;
  nearbyAreas: string[];
  nearbySectors: string[];
  nearbySocieties: string[];
  schoolEcosystem: string[];
  indexFlag: GeneratedIndexFlag;
  indexReason: GurgaonIndexReason;
  duplicateRisk: DuplicateRisk;
}

export interface GurgaonQualityInput {
  pageType: GurgaonLocalPageType;
  indexFlag: GeneratedIndexFlag;
  wordCount: number;
  internalLinkCount: number;
  duplicateRisk: DuplicateRisk;
}
