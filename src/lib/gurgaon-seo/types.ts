// Hyperlocal Gurgaon SEO landing pages (code-only, not stored in the database).
// Each URL has its own unique, hand-written content module under ./content/<slug>.ts.
// `pages-data.ts` holds the SEO metadata + resolved locality context extracted from the
// ibgram_gurgaon_all_400_seo_urls workbook (first 200 rows).

export type GurgaonSeoBoard = "IB" | "IGCSE" | "IB + IGCSE";

export type GurgaonSeoPageType =
  | "Hyperlocal money page"
  | "Class-location page"
  | "IB DP subject-level page"
  | "Programme-location page"
  | "Result-intent page";

/** Resolved local context for a locality, used to keep every page factually distinct. */
export interface GurgaonLocalContext {
  /** Human label for the corridor this locality sits on (e.g. "Golf Course Road corridor"). */
  corridor: string;
  /** Nearby named areas/colonies used for honest "local matching" copy. */
  nearbyAreas: string[];
  /** Nearby HUDA sectors. */
  nearbySectors: string[];
  /** Nearby premium residential societies. */
  nearbySocieties: string[];
  /** International / IB-IGCSE school ecosystem referenced for academic-calendar context only. */
  schools: string[];
}

/** SEO + routing metadata for one landing page (sourced from the workbook). */
export interface GurgaonSeoPageMeta {
  /** Workbook ID (1-based). */
  id: number;
  /** URL slug without leading/trailing slashes, e.g. "ib-igcse-home-tutor-in-golf-course-road-gurgaon". */
  slug: string;
  /** Site-absolute path with leading + trailing slash. */
  path: string;
  primaryKeyword: string;
  searchIntent: string;
  pageType: GurgaonSeoPageType;
  locality: string;
  sector: string;
  board: GurgaonSeoBoard;
  subject: string;
  level: string;
  h1: string;
  title: string;
  metaDescription: string;
  priority: string;
  /** Parent hub page for breadcrumbs + internal linking, e.g. "/ib-tutors/gurugram/". */
  parentPage: string;
  /** Editorial angle that keeps each page unique (from the workbook). */
  uniqueAngle: string;
  localContext: GurgaonLocalContext;
}

/** A content section: a heading, one or more paragraphs, and optional bullet points. */
export interface GurgaonSeoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GurgaonSeoFaq {
  question: string;
  answer: string;
}

/** Unique, human-written body content for a single page (one module per URL). */
export interface GurgaonSeoContent {
  slug: string;
  /** Short lead paragraph shown under the H1 in the hero. */
  heroIntro: string;
  /** 4 short trust/assurance points for the hero rail. */
  trustPoints: string[];
  /** Main body sections (target 7-9 to clear 1800+ words with FAQs). */
  sections: GurgaonSeoSection[];
  faqs: GurgaonSeoFaq[];
  /** Closing call-to-action paragraph. */
  closingCta: string;
  /** Long-tail local keyword phrases woven through the page. */
  localKeywords: string[];
}

/** A page ready to render: SEO meta + its unique content. */
export interface GurgaonSeoPage extends GurgaonSeoPageMeta {
  content: GurgaonSeoContent;
}
