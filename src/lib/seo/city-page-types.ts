export type CityPageType = "city_homepage" | "program" | "subject" | "area" | "school";

export type CityPageStatus = "live" | "draft" | "paused";

export type IndexFlag = "index" | "noindex";

export type DemandBand = "low" | "medium" | "high";

export type InventoryStrength = "strong" | "moderate" | "limited";

export interface CitySeoMeta {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introSummary: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  imageAltText: string;
  robotsTag: string;
  breadcrumbTitle: string;
}

export interface AreaPageSummary {
  name: string;
  slug: string;
  description: string;
  nearbyLandmarks?: string[];
  pageEnabled: boolean;
  indexFlag: IndexFlag;
}

export interface NearbyCityLink {
  cityName: string;
  citySlug: string;
  description: string;
}

export interface CityLocationData {
  cityOverview: string[];
  premiumAreas: AreaPageSummary[];
  nearbyAreas: string[];
  nearbyCities: NearbyCityLink[];
  serviceAreaText: string;
  latitude: number;
  longitude: number;
  mapEmbedUrl?: string;
  cityPhoneNumber?: string;
  cityWhatsappNumber?: string;
  timezone: string;
  localCtaText: string;
}

export interface ProgramSupport {
  slug: "pyp" | "myp" | "dp";
  name: string;
  ageRange: string;
  description: string;
  cityNote: string;
}

export interface SubjectSupport {
  slug:
    | "math-aa-hl"
    | "math-ai-hl"
    | "physics"
    | "chemistry"
    | "economics"
    | "biology"
    | "english";
  name: string;
  level: string;
  inventory: InventoryStrength;
  description: string;
  cityNote: string;
}

export interface CityAcademicData {
  ibProgramsAvailable: ProgramSupport[];
  ibSubjectsAvailable: SubjectSupport[];
  gradeRange: string;
  dpSubjectLevels: string;
  mathCoverage: string;
  scienceCoverage: string;
  humanitiesCoverage: string;
  languageCoverage: string;
  assessmentSupport: string;
  curriculumNotes: string;
  examSessionFocus: string;
}

export interface SchoolPageSummary {
  name: string;
  slug: string;
  area: string;
  description: string;
  typicalNeeds: string[];
  pageEnabled: boolean;
  indexFlag: IndexFlag;
}

export interface SchoolAreaMapping {
  area: string;
  schools: string[];
  note: string;
}

export interface CitySchoolEcosystem {
  ibSchoolsCity: SchoolPageSummary[];
  schoolDisclaimer: string;
  schoolSpecificNeeds: string[];
  schoolAreaMapping: SchoolAreaMapping[];
}

export interface CityTutorInventory {
  verifiedTutorCountCity: number;
  homeTutorAvailable: boolean;
  onlineTutorAvailable: boolean;
  hybridTutorAvailable: boolean;
  subjectsWithStrongInventory: string[];
  subjectsWithLimitedInventory: string[];
  averageMatchingTime: string;
  demoClassAvailable: boolean;
  tutorVerificationProcess: string[];
  teachingModeNotes: string;
}

export interface LocalProofItem {
  title: string;
  detail: string;
  sourceLabel: string;
}

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityContentBlocks {
  heroTitle: string;
  heroSubtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  trustPoints: string[];
  cityAcademicIntro: string[];
  programSectionTitle: string;
  subjectSectionTitle: string;
  areaSectionTitle: string;
  schoolSectionTitle: string;
  matchingProcessSteps: string[];
  localTestimonials: LocalProofItem[];
  cityFaqs: CityFaq[];
  bottomCtaText: string;
}

export interface InternalLink {
  linkId: string;
  sourcePageId: string;
  targetPageId: string;
  targetUrl: string;
  anchorText: string;
  linkContext: string;
  linkType: "breadcrumb" | "contextual" | "footer" | "card";
  priority: "high" | "medium" | "low";
  followStatus: "follow" | "nofollow";
  isCrawlable: boolean;
  linkStatus: "active" | "broken" | "redirect";
}

export interface SchemaConfig {
  schemaPageType: "WebPage";
  schemaName: string;
  schemaDescription: string;
  schemaUrl: string;
  schemaBreadcrumbs: string[];
  schemaOrganizationName: "IB Gram";
  schemaLogoUrl?: string;
  schemaContactPhone?: string;
  schemaContactEmail?: string;
  schemaServiceName: string;
  schemaAreaServed: string[];
  schemaSubjects: string[];
  schemaFaqJson: boolean;
}

export interface IndexingConfig {
  minimumDemandScore: number;
  minimumContentUniquenessScore: number;
  minimumInternalLinks: number;
  minimumFaqCount: number;
}

export interface CitySeoPage
  extends CitySeoMeta,
    CityLocationData,
    CityAcademicData,
    CitySchoolEcosystem,
    CityTutorInventory,
    CityContentBlocks {
  pageId: string;
  pageType: "city_homepage";
  cityId: string;
  cityName: string;
  citySlug: string;
  stateName: string;
  countryName: string;
  status: CityPageStatus;
  indexFlag: IndexFlag;
  canonicalUrl: string;
  canonicalTarget?: string;
  priorityScore: number;
  demandScore: number;
  demandBand: DemandBand;
  contentUniquenessScore: number;
  lastUpdated: string;
  reviewOwner: string;
  internalLinksOut: InternalLink[];
  internalLinksIn: InternalLink[];
  schema: SchemaConfig;
}

export type CitySeoPageBase = Omit<CitySeoPage, "internalLinksOut" | "internalLinksIn">;
