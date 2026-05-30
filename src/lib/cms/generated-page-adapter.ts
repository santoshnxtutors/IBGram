import "server-only";
import type {
  GeneratedSeoPage,
  GeneratedContentBlock,
  GeneratedFaq,
  GeneratedInternalLink,
  GeneratedQualityScore,
  GeneratedPageType,
  GeneratedPageStatus,
  GeneratedIndexFlag,
  Programme,
  TutoringMode,
  DuplicateRisk,
} from "@/lib/page-generator/types";

type DbPageWithChildren = {
  id: string;
  pageType: string;
  curriculum: string;
  status: string;
  indexFlag: string;
  slug: string;
  fullPath: string;
  canonicalUrl: string | null;
  canonicalTarget: string | null;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  h1: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  introSummary: string | null;
  contentWordCount: number;
  qualityScore: number | null;
  duplicateRisk: string | null;
  localDepthScore: number | null;
  readabilityScore: number | null;
  internalLinkScore: number | null;
  sitemapIncluded: boolean;
  robotsTag: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  updatedAt: Date;
  publishedAt: Date | null;
  lastReviewedAt: Date | null;
  lastGeneratedAt: Date | null;
  blocks: Array<{
    id: string;
    blockType: string;
    heading: string | null;
    body: string | null;
    items: unknown;
    sortOrder: number;
  }>;
  faqs: Array<{ id: string; question: string; answer: string; sortOrder: number }>;
  metadata: {
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
    robotsTag: string | null;
    ogTitle: string | null;
    ogDescription: string | null;
    twitterTitle: string | null;
    twitterDescription: string | null;
  } | null;
  schemas: Array<{ id: string; schemaType: string; schemaJson: unknown }>;
  sourceLinks: Array<{
    id: string;
    targetPageId: string | null;
    targetUrl: string;
    anchorText: string;
    context: string | null;
  }>;
  city: { slug: string; name: string } | null;
};

const VALID_PAGE_TYPES: GeneratedPageType[] = ["city", "area", "sector", "society", "school", "subject", "programme"];

const SAFE_DEFAULT_DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.";

function pageType(value: string): GeneratedPageType {
  return (VALID_PAGE_TYPES.includes(value as GeneratedPageType) ? value : "city") as GeneratedPageType;
}

function pageStatus(value: string): GeneratedPageStatus {
  if (value === "published") return "published";
  if (value === "needs_review" || value === "approved") return "review";
  if (value === "paused" || value === "archived") return "paused";
  return "draft";
}

function indexFlagOf(value: string): GeneratedIndexFlag {
  return value === "index" ? "index" : "noindex";
}

function duplicateRiskOf(value: string | null | undefined): DuplicateRisk {
  if (value === "high") return "high";
  if (value === "medium") return "medium";
  return "low";
}

function safeArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string");
}

function blocksToContentBlocks(
  blocks: DbPageWithChildren["blocks"],
): GeneratedContentBlock[] {
  const allowedTypes = new Set<GeneratedContentBlock["type"]>([
    "intro",
    "programmes",
    "subjects",
    "local_areas",
    "schools",
    "matching_process",
    "verification",
    "tutoring_modes",
    "trust",
    "cta",
  ]);
  return blocks
    .filter((block) => allowedTypes.has(block.blockType as GeneratedContentBlock["type"]))
    .map((block) => {
      const items = Array.isArray(block.items)
        ? (block.items as unknown[]).map((item) => (typeof item === "string" ? item : ""))
        : [];
      return {
        type: block.blockType as GeneratedContentBlock["type"],
        heading: block.heading ?? "",
        body: block.body ?? "",
        items,
      };
    });
}

function blocksToFinalCta(blocks: DbPageWithChildren["blocks"]): string {
  const cta = blocks.find((b) => b.blockType === "cta");
  return cta?.body ?? cta?.heading ?? "Talk to an IB Gram advisor.";
}

function faqsToGenerated(faqs: DbPageWithChildren["faqs"]): GeneratedFaq[] {
  return faqs.map((f) => ({ question: f.question, answer: f.answer }));
}

function sourceLinksToInternalLinks(
  pageId: string,
  links: DbPageWithChildren["sourceLinks"],
): GeneratedInternalLink[] {
  return links.map((link, index) => ({
    linkId: link.id || `link-${index}`,
    sourcePageId: pageId,
    targetPageId: link.targetPageId ?? "",
    targetUrl: link.targetUrl,
    anchorText: link.anchorText,
    linkContext: link.context ?? "",
    linkType: "contextual",
    priority: "medium",
    followStatus: "follow",
    isCrawlable: true,
    linkStatus: "active",
  }));
}

function buildQuality(row: DbPageWithChildren): GeneratedQualityScore {
  return {
    wordCount: row.contentWordCount,
    uniquenessScore: 80,
    localDepthScore: row.localDepthScore ?? 70,
    seoScore: row.qualityScore ?? 70,
    readabilityScore: row.readabilityScore ?? 70,
    internalLinkScore: row.internalLinkScore ?? 60,
    duplicateRisk: duplicateRiskOf(row.duplicateRisk),
    recommendedIndexFlag: indexFlagOf(row.indexFlag),
    warnings: [],
  };
}

function combineSchemas(schemas: DbPageWithChildren["schemas"]) {
  if (schemas.length === 0) return {} as Record<string, unknown>;
  if (schemas.length === 1) return (schemas[0].schemaJson as Record<string, unknown>) ?? {};
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((s) => s.schemaJson),
  } as Record<string, unknown>;
}

export function dbBundleToGeneratedSeoPage(row: DbPageWithChildren): GeneratedSeoPage {
  const meta = row.metadata;
  const metaTitle = row.metaTitle ?? meta?.metaTitle ?? row.title ?? row.h1 ?? "";
  const metaDescription = row.metaDescription ?? meta?.metaDescription ?? "";
  const canonical = row.canonicalUrl ?? meta?.canonicalUrl ?? `https://ibgram.com${row.fullPath}`;
  const ogTitle = row.ogTitle ?? meta?.ogTitle ?? metaTitle;
  const ogDescription = row.ogDescription ?? meta?.ogDescription ?? metaDescription;
  const twitterTitle = row.twitterTitle ?? meta?.twitterTitle ?? metaTitle;
  const twitterDescription = row.twitterDescription ?? meta?.twitterDescription ?? metaDescription;
  const status = pageStatus(row.status);

  const cityName = row.city?.name ?? deriveCityNameFromPath(row.fullPath);
  const citySlug = row.city?.slug ?? deriveCitySlugFromPath(row.fullPath);

  return {
    pageId: row.id,
    pageType: pageType(row.pageType),
    status,
    indexFlag: indexFlagOf(row.indexFlag),
    canonicalUrl: canonical,
    canonicalTarget: row.canonicalTarget ?? undefined,
    slug: row.slug,
    cityName,
    citySlug,
    primaryKeyword: row.primaryKeyword,
    secondaryKeywords: safeArray(row.secondaryKeywords),
    serviceFocus: row.primaryKeyword,
    programmes: ["PYP", "MYP", "DP"] as Programme[],
    subjects: [],
    tutoringModes: ["home", "online", "hybrid"] as TutoringMode[],
    premiumAreas: [],
    nearbyAreas: [],
    nearbyCities: [],
    schoolsMentioned: [],
    h1: row.h1 ?? row.heroTitle ?? row.title ?? "",
    heroTitle: row.heroTitle ?? row.h1 ?? "",
    heroSubtitle: row.heroSubtitle ?? "",
    introSummary: row.introSummary ?? "",
    contentBlocks: blocksToContentBlocks(row.blocks),
    faqs: faqsToGenerated(row.faqs),
    internalLinks: sourceLinksToInternalLinks(row.id, row.sourceLinks),
    relatedPageSuggestions: [],
    schema: combineSchemas(row.schemas),
    quality: buildQuality(row),
    finalCta: blocksToFinalCta(row.blocks),
    schoolDisclaimer: SAFE_DEFAULT_DISCLAIMER,
    lastUpdated: (row.publishedAt ?? row.updatedAt).toISOString().slice(0, 10),
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogImage: "https://ibgram.com/images/ib-gram-city-og.svg",
    twitterTitle,
    twitterDescription,
    breadcrumbTitle: row.h1 ?? row.title ?? row.heroTitle ?? cityName,
  };
}

function deriveCityNameFromPath(path: string): string {
  // /ib-tutors/gurugram/... → "Gurugram"
  const match = path.match(/\/(?:ib|igcse)-tutors\/([^/]+)\//i);
  if (!match) return "";
  return match[1]
    .split("-")
    .map((part) => (part.length > 0 ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}

function deriveCitySlugFromPath(path: string): string {
  const match = path.match(/\/(?:ib|igcse)-tutors\/([^/]+)\//i);
  return match ? match[1].toLowerCase() : "";
}

export type { DbPageWithChildren };
