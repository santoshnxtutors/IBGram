export type GeneratedPageType = "city" | "area" | "sector" | "society" | "school" | "subject" | "programme";
export type GeneratedPageStatus = "draft" | "review" | "published" | "paused";
export type GeneratedIndexFlag = "index" | "noindex";
export type DuplicateRisk = "low" | "medium" | "high";
export type PublishMode = "draft" | "review" | "publish";
export type IndexPreference = "auto" | "index" | "noindex";
export type TutoringMode = "home" | "online" | "hybrid";
export type Programme = "PYP" | "MYP" | "DP";

export interface SeoGeneratorInput {
  pageType: GeneratedPageType;
  cityName: string;
  citySlug?: string;
  parentLocation?: string;
  microLocationName?: string;
  microLocationType?: "area" | "sector" | "society" | "school";
  primaryKeyword: string;
  secondaryKeywords: string[];
  serviceFocus: string;
  programmes: Programme[];
  subjects: string[];
  tutoringModes: TutoringMode[];
  premiumAreas: string[];
  nearbyAreas: string[];
  nearbyCities: string[];
  schoolsMentioned: string[];
  proofNotes?: string;
  tutorAvailabilityNotes?: string;
  ctaFocus: string;
  publishMode: PublishMode;
  indexPreference: IndexPreference;
}

export interface GeneratedContentBlock {
  type:
    | "intro"
    | "programmes"
    | "subjects"
    | "local_areas"
    | "schools"
    | "matching_process"
    | "verification"
    | "tutoring_modes"
    | "trust"
    | "cta";
  heading: string;
  body: string;
  items: string[];
}

export interface GeneratedFaq {
  question: string;
  answer: string;
}

export interface GeneratedInternalLink {
  linkId: string;
  sourcePageId: string;
  targetPageId: string;
  targetUrl: string;
  anchorText: string;
  linkContext: string;
  linkType: "breadcrumb" | "contextual" | "card" | "footer" | "related" | "cta";
  priority: "high" | "medium" | "low";
  followStatus: "follow" | "nofollow";
  isCrawlable: boolean;
  linkStatus: "active" | "broken" | "redirect";
}

export interface GeneratedQualityScore {
  wordCount: number;
  uniquenessScore: number;
  localDepthScore: number;
  seoScore: number;
  readabilityScore: number;
  internalLinkScore: number;
  duplicateRisk: DuplicateRisk;
  recommendedIndexFlag: GeneratedIndexFlag;
  warnings: string[];
}

export interface GeneratedMetadataFields {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  breadcrumbTitle: string;
}

export type JsonLdGraph = Record<string, unknown>;

export interface GeneratedSeoPage extends GeneratedMetadataFields {
  pageId: string;
  pageType: GeneratedPageType;
  status: GeneratedPageStatus;
  indexFlag: GeneratedIndexFlag;
  canonicalUrl: string;
  canonicalTarget?: string;
  slug: string;
  cityName: string;
  citySlug: string;
  parentLocation?: string;
  microLocationName?: string;
  microLocationType?: SeoGeneratorInput["microLocationType"];
  primaryKeyword: string;
  secondaryKeywords: string[];
  serviceFocus: string;
  programmes: Programme[];
  subjects: string[];
  tutoringModes: TutoringMode[];
  premiumAreas: string[];
  nearbyAreas: string[];
  nearbyCities: string[];
  schoolsMentioned: string[];
  h1: string;
  heroTitle: string;
  heroSubtitle: string;
  introSummary: string;
  contentBlocks: GeneratedContentBlock[];
  faqs: GeneratedFaq[];
  internalLinks: GeneratedInternalLink[];
  relatedPageSuggestions: GeneratedInternalLink[];
  schema: JsonLdGraph;
  quality: GeneratedQualityScore;
  finalCta: string;
  schoolDisclaimer?: string;
  lastUpdated: string;
}

export interface GeneratedSeoResult {
  page: GeneratedSeoPage;
}
