import type {
  GeneratedContentBlock,
  GeneratedFaq,
  GeneratedIndexFlag,
  GeneratedInternalLink,
  GeneratedPageStatus,
  GeneratedPageType,
  GeneratedSeoPage,
  GeneratedSeoResult,
  IndexPreference,
  Programme,
  PublishMode,
  SeoGeneratorInput,
  TutoringMode,
} from "./types";
import { canonicalUrl } from "@/lib/seo/canonical";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { normalizeGeneratedSlug } from "./slug";

const PAGE_TYPES = ["city", "area", "sector", "society", "school", "subject", "programme"] satisfies GeneratedPageType[];
const STATUSES = ["draft", "review", "published", "paused"] satisfies GeneratedPageStatus[];
const INDEX_FLAGS = ["index", "noindex"] satisfies GeneratedIndexFlag[];
const PUBLISH_MODES = ["draft", "review", "publish"] satisfies PublishMode[];
const INDEX_PREFERENCES = ["auto", "index", "noindex"] satisfies IndexPreference[];
const PROGRAMMES = ["PYP", "MYP", "DP"] satisfies Programme[];
const MODES = ["home", "online", "hybrid"] satisfies TutoringMode[];
const MICRO_LOCATION_TYPES = ["area", "sector", "society", "school"] as const;

export class ValidationError extends Error {
  constructor(public readonly issues: string[]) {
    super(issues.join("; "));
    this.name = "ValidationError";
  }
}

export function validateGeneratorInput(value: unknown): SeoGeneratorInput {
  const input = asRecord(value, "Input must be an object.");
  const pageType = enumValue(input.pageType, PAGE_TYPES, "pageType");
  const cityName = requiredString(input.cityName, "cityName");
  const primaryKeyword = requiredString(input.primaryKeyword, "primaryKeyword");

  const normalized: SeoGeneratorInput = {
    pageType,
    cityName,
    citySlug: optionalString(input.citySlug) || normalizeGeneratedSlug(cityName),
    parentLocation: optionalString(input.parentLocation),
    microLocationName: optionalString(input.microLocationName),
    microLocationType: input.microLocationType ? enumValue(input.microLocationType, MICRO_LOCATION_TYPES, "microLocationType") : undefined,
    primaryKeyword,
    secondaryKeywords: stringArray(input.secondaryKeywords),
    serviceFocus: optionalString(input.serviceFocus) || primaryKeyword,
    programmes: enumArray(input.programmes, PROGRAMMES),
    subjects: stringArray(input.subjects),
    tutoringModes: enumArray(input.tutoringModes, MODES),
    premiumAreas: stringArray(input.premiumAreas),
    nearbyAreas: stringArray(input.nearbyAreas),
    nearbyCities: stringArray(input.nearbyCities),
    schoolsMentioned: stringArray(input.schoolsMentioned),
    proofNotes: optionalString(input.proofNotes),
    tutorAvailabilityNotes: optionalString(input.tutorAvailabilityNotes),
    ctaFocus: optionalString(input.ctaFocus) || "Book a free academic consultation",
    publishMode: input.publishMode ? enumValue(input.publishMode, PUBLISH_MODES, "publishMode") : "draft",
    indexPreference: input.indexPreference ? enumValue(input.indexPreference, INDEX_PREFERENCES, "indexPreference") : "auto",
  };

  const issues: string[] = [];
  if (normalized.cityName.length < 2) issues.push("cityName is too short.");
  if (normalized.primaryKeyword.length < 5) issues.push("primaryKeyword is too short.");
  if (normalized.pageType !== "city" && normalized.pageType !== "subject" && normalized.pageType !== "programme" && !normalized.microLocationName) {
    issues.push("microLocationName is required for area, sector, society and school pages.");
  }
  if (normalized.pageType === "school" && normalized.microLocationType && normalized.microLocationType !== "school") {
    issues.push("School pages must use microLocationType school.");
  }

  if (issues.length) throw new ValidationError(issues);
  return normalized;
}

export function validateGeneratedSeoResult(value: unknown): GeneratedSeoResult {
  const wrapper = asRecord(value, "Generated response must be an object.");
  const page = validateGeneratedSeoPage(wrapper.page);
  return { page };
}

export function validateGeneratedSeoPage(value: unknown): GeneratedSeoPage {
  const page = asRecord(value, "page must be an object.");
  const quality = asRecord(page.quality, "page.quality is required.");

  const canonicalTarget = optionalString(page.canonicalTarget);
  const result: GeneratedSeoPage = {
    pageId: requiredString(page.pageId, "pageId"),
    pageType: enumValue(page.pageType, PAGE_TYPES, "pageType"),
    status: enumValue(page.status, STATUSES, "status"),
    indexFlag: enumValue(page.indexFlag, INDEX_FLAGS, "indexFlag"),
    canonicalUrl: canonicalUrl(requiredString(page.canonicalUrl, "canonicalUrl")),
    canonicalTarget: canonicalTarget ? canonicalUrl(canonicalTarget) : undefined,
    slug: optionalString(page.slug) ?? "",
    cityName: requiredString(page.cityName, "cityName"),
    citySlug: requiredString(page.citySlug, "citySlug"),
    parentLocation: optionalString(page.parentLocation),
    microLocationName: optionalString(page.microLocationName),
    microLocationType: optionalString(page.microLocationType) as GeneratedSeoPage["microLocationType"],
    primaryKeyword: requiredString(page.primaryKeyword, "primaryKeyword"),
    secondaryKeywords: stringArray(page.secondaryKeywords),
    serviceFocus: requiredString(page.serviceFocus, "serviceFocus"),
    programmes: enumArray(page.programmes, PROGRAMMES),
    subjects: stringArray(page.subjects),
    tutoringModes: enumArray(page.tutoringModes, MODES),
    premiumAreas: stringArray(page.premiumAreas),
    nearbyAreas: stringArray(page.nearbyAreas),
    nearbyCities: stringArray(page.nearbyCities),
    schoolsMentioned: stringArray(page.schoolsMentioned),
    metaTitle: requiredString(page.metaTitle, "metaTitle"),
    metaDescription: requiredString(page.metaDescription, "metaDescription"),
    ogTitle: optionalString(page.ogTitle) || requiredString(page.metaTitle, "metaTitle"),
    ogDescription: optionalString(page.ogDescription) || requiredString(page.metaDescription, "metaDescription"),
    ogImage: absoluteUrl(optionalString(page.ogImage) || "/images/ib-gram-city-og.svg"),
    twitterTitle: optionalString(page.twitterTitle) || requiredString(page.metaTitle, "metaTitle"),
    twitterDescription: optionalString(page.twitterDescription) || requiredString(page.metaDescription, "metaDescription"),
    breadcrumbTitle: optionalString(page.breadcrumbTitle) || requiredString(page.h1, "h1"),
    h1: requiredString(page.h1, "h1"),
    heroTitle: requiredString(page.heroTitle, "heroTitle"),
    heroSubtitle: requiredString(page.heroSubtitle, "heroSubtitle"),
    introSummary: requiredString(page.introSummary, "introSummary"),
    contentBlocks: contentBlocks(page.contentBlocks),
    faqs: faqs(page.faqs),
    internalLinks: internalLinks(page.internalLinks),
    relatedPageSuggestions: internalLinks(page.relatedPageSuggestions),
    schema: asRecord(page.schema ?? {}, "schema must be an object."),
    quality: {
      wordCount: numberValue(quality.wordCount, "quality.wordCount"),
      uniquenessScore: numberValue(quality.uniquenessScore, "quality.uniquenessScore"),
      localDepthScore: numberValue(quality.localDepthScore, "quality.localDepthScore"),
      seoScore: numberValue(quality.seoScore, "quality.seoScore"),
      readabilityScore: numberValue(quality.readabilityScore, "quality.readabilityScore"),
      internalLinkScore: numberValue(quality.internalLinkScore, "quality.internalLinkScore"),
      duplicateRisk: enumValue(quality.duplicateRisk, ["low", "medium", "high"], "quality.duplicateRisk"),
      recommendedIndexFlag: enumValue(quality.recommendedIndexFlag, INDEX_FLAGS, "quality.recommendedIndexFlag"),
      warnings: stringArray(quality.warnings),
    },
    finalCta: requiredString(page.finalCta, "finalCta"),
    schoolDisclaimer: optionalString(page.schoolDisclaimer),
    lastUpdated: optionalString(page.lastUpdated) || new Date().toISOString().slice(0, 10),
  };

  if (!/^https:\/\/www\.ibgram\.com\//.test(result.canonicalUrl)) {
    throw new ValidationError(["canonicalUrl must be an absolute www.ibgram.com URL."]);
  }
  if (result.pageType === "school" && !result.schoolDisclaimer?.includes("not officially affiliated")) {
    throw new ValidationError(["School pages must include the independent platform disclaimer."]);
  }

  return result;
}

function contentBlocks(value: unknown): GeneratedContentBlock[] {
  if (!Array.isArray(value)) return [];
  return value.map((block, index) => {
    const item = asRecord(block, `contentBlocks.${index}`);
    return {
      type: enumValue(
        item.type,
        ["intro", "programmes", "subjects", "local_areas", "schools", "matching_process", "verification", "tutoring_modes", "trust", "cta"],
        `contentBlocks.${index}.type`,
      ),
      heading: requiredString(item.heading, `contentBlocks.${index}.heading`),
      body: requiredString(item.body, `contentBlocks.${index}.body`),
      items: stringArray(item.items),
    };
  });
}

function faqs(value: unknown): GeneratedFaq[] {
  if (!Array.isArray(value)) return [];
  return value.map((faq, index) => {
    const item = asRecord(faq, `faqs.${index}`);
    return {
      question: requiredString(item.question, `faqs.${index}.question`),
      answer: requiredString(item.answer, `faqs.${index}.answer`),
    };
  });
}

function internalLinks(value: unknown): GeneratedInternalLink[] {
  if (!Array.isArray(value)) return [];
  return value.map((link, index) => {
    const item = asRecord(link, `internalLinks.${index}`);
    return {
      linkId: requiredString(item.linkId, `internalLinks.${index}.linkId`),
      sourcePageId: requiredString(item.sourcePageId, `internalLinks.${index}.sourcePageId`),
      targetPageId: requiredString(item.targetPageId, `internalLinks.${index}.targetPageId`),
      targetUrl: requiredString(item.targetUrl, `internalLinks.${index}.targetUrl`),
      anchorText: requiredString(item.anchorText, `internalLinks.${index}.anchorText`),
      linkContext: requiredString(item.linkContext, `internalLinks.${index}.linkContext`),
      linkType: enumValue(item.linkType, ["breadcrumb", "contextual", "card", "footer", "related", "cta"], `internalLinks.${index}.linkType`),
      priority: enumValue(item.priority, ["high", "medium", "low"], `internalLinks.${index}.priority`),
      followStatus: enumValue(item.followStatus, ["follow", "nofollow"], `internalLinks.${index}.followStatus`),
      isCrawlable: Boolean(item.isCrawlable),
      linkStatus: enumValue(item.linkStatus, ["active", "broken", "redirect"], `internalLinks.${index}.linkStatus`),
    };
  });
}

function asRecord(value: unknown, message: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new ValidationError([message]);
  return value as Record<string, unknown>;
}

function requiredString(value: unknown, field: string): string {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) throw new ValidationError([`${field} is required.`]);
  return text;
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function stringArray(value: unknown): string[] {
  if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean);
}

function enumArray<T extends string>(value: unknown, allowed: readonly T[]): T[] {
  return stringArray(value).filter((item): item is T => (allowed as readonly string[]).includes(item));
}

function enumValue<T extends string>(value: unknown, allowed: readonly T[], field: string): T {
  if (typeof value === "string" && (allowed as readonly string[]).includes(value)) return value as T;
  throw new ValidationError([`${field} must be one of ${allowed.join(", ")}.`]);
}

function numberValue(value: unknown, field: string): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  throw new ValidationError([`${field} must be a number.`]);
}
