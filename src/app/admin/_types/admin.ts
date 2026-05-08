import type { GeneratedContentBlock, GeneratedFaq, GeneratedInternalLink } from "@/lib/page-generator/types";

export type AdminStatus = "published" | "draft" | "review" | "paused" | "archived";
export type AdminIndexFlag = "index" | "noindex";
export type AdminCurriculum = "IB" | "IGCSE" | "Both";
export type AdminPageType =
  | "homepage"
  | "static"
  | "programme"
  | "subject"
  | "ib_city"
  | "igcse_city"
  | "area"
  | "sector"
  | "society"
  | "school"
  | "blog"
  | "tutor_profile"
  | "generated";

export interface AdminSeoFields {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  canonicalUrl: string;
  robotsTag: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
}

export interface AdminPageRecord extends AdminSeoFields {
  id: string;
  title: string;
  slug: string;
  url: string;
  pageType: AdminPageType;
  curriculum: AdminCurriculum;
  city?: string;
  locality?: string;
  localityType?: "city" | "area" | "sector" | "society" | "school";
  status: AdminStatus;
  indexFlag: AdminIndexFlag;
  seoScore: number;
  qualityScore: number;
  localDepthScore: number;
  duplicateRisk: "low" | "medium" | "high";
  wordCount: number;
  internalLinksCount: number;
  incomingLinksCount: number;
  hasSchema: boolean;
  hasFaqs: boolean;
  missingMetadata: boolean;
  lastUpdated: string;
  heroTitle: string;
  heroSubtitle: string;
  introSummary: string;
  contentBlocks: GeneratedContentBlock[];
  faqs: GeneratedFaq[];
  internalLinks: GeneratedInternalLink[];
  schema: Record<string, unknown>;
  sitemapIncluded: boolean;
  safeDisclaimer?: string;
  source: "app-route" | "city-seo" | "igcse-city" | "generated" | "tutor" | "static";
}

export interface AdminTutorRecord {
  id: string;
  name: string;
  slug: string;
  image?: string;
  headline: string;
  bio: string;
  curriculums: AdminCurriculum;
  ibProgrammes: string[];
  ibSubjects: string[];
  igcseSubjects: string[];
  subjectLevels: string[];
  teachingModes: string[];
  primaryCity: string;
  availableCities: string[];
  availableAreas: string[];
  availableSectors: string[];
  availableSocieties: string[];
  nearbySchools: string[];
  travelNotes: string;
  availabilityNotes: string;
  verificationStatus: "verified" | "pending" | "rejected";
  profileStatus: "active" | "draft" | "paused";
  rating: number;
  reviews: number;
  lastUpdated: string;
}

export interface AdminLocationRecord {
  id: string;
  name: string;
  slug: string;
  type: "city" | "area" | "sector" | "society" | "school";
  parentCity?: string;
  parentArea?: string;
  parentSector?: string;
  state?: string;
  country?: string;
  localDescription: string;
  premiumScore: number;
  demandScore: number;
  active: boolean;
  seoNotes: string;
  relatedPages: string[];
}

export type AdminInternalLinkRecord = GeneratedInternalLink & {
  sourceTitle: string;
  targetTitle: string;
  status: "approved" | "suggested" | "rejected";
};

export interface AdminSeoHealth {
  missingTitle: AdminPageRecord[];
  missingMetaDescription: AdminPageRecord[];
  duplicateMetaTitles: Array<{ value: string; pages: AdminPageRecord[] }>;
  duplicateMetaDescriptions: Array<{ value: string; pages: AdminPageRecord[] }>;
  missingH1: AdminPageRecord[];
  missingCanonical: AdminPageRecord[];
  noindexPages: AdminPageRecord[];
  indexablePages: AdminPageRecord[];
  sitemapIncludedPages: AdminPageRecord[];
  sitemapExcludedPages: Array<{ page: AdminPageRecord; reason: string }>;
  missingSchema: AdminPageRecord[];
  missingFaqSchema: AdminPageRecord[];
  thinContentPages: AdminPageRecord[];
  weakInternalLinks: AdminPageRecord[];
  brokenInternalLinks: AdminInternalLinkRecord[];
}

export interface AdminAuditLog {
  id: string;
  actor: string;
  action: string;
  target: string;
  detail: string;
  createdAt: string;
}

export type AdminUserRole = "owner" | "admin" | "editor" | "viewer";
export type AdminPermission =
  | "dashboard:read"
  | "pages:read"
  | "pages:write"
  | "pages:publish"
  | "generator:use"
  | "tutors:write"
  | "locations:write"
  | "seo:write"
  | "assets:write"
  | "imports:write"
  | "settings:write"
  | "users:manage";

export interface AdminUserRecord {
  id: string;
  username: string;
  name: string;
  email: string;
  role: AdminUserRole;
  permissions: AdminPermission[];
  status: "active" | "disabled";
  source: "environment" | "local";
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface PublishCheckResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}
