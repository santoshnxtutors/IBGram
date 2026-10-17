// Mumbai SEO landing pages: every URL in sitemap-mumbai.xml under /mumbai/.
// Metadata is generated from the sitemap by scripts/mumbai-seo/plan.ts into ./pages-data.ts.
// Prose is written per page by agents and compiled into ./pages/<shard>.json.
// Same shape as the Gurgaon pages so one renderer pattern covers both cities.

export type MumbaiSeoBoard = "IB" | "IGCSE" | "IB + IGCSE";

export type MumbaiSeoPageKind =
  | "hub"
  | "zone"
  | "locality"
  | "society"
  | "brand"
  | "locality-subject"
  | "school"
  | "keyword";

export type MumbaiZoneSlug =
  | "south-mumbai"
  | "western-suburbs"
  | "central-suburbs"
  | "eastern-suburbs"
  | "navi-mumbai"
  | "thane";

/** SEO + routing metadata for one page, generated from the sitemap. */
export interface MumbaiSeoPageMeta {
  /** URL slug without slashes. Empty string is the /mumbai/ hub. */
  slug: string;
  /** Site-absolute path with leading + trailing slash. */
  path: string;
  kind: MumbaiSeoPageKind;
  board: MumbaiSeoBoard;
  subject: string;
  level: string;
  /** Locality display name, or "Mumbai" for city-wide pages. */
  locality: string;
  localitySlug?: string;
  zone?: MumbaiZoneSlug;
  /** Set only on /mumbai/ib-igcse-tutor-for-<school>-students/ pages. */
  school?: string;
  primaryKeyword: string;
  h1: string;
  title: string;
  metaDescription: string;
  /** Parent for breadcrumbs and internal linking. */
  parentPage: string;
  /** Editorial angle that keeps this page distinct from its siblings. */
  uniqueAngle: string;
  lastUpdated?: string;
}

/** A content section: a heading, paragraphs, and optional scannable points. */
export interface MumbaiSeoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface MumbaiSeoFaq {
  question: string;
  answer: string;
}

/** Unique, human-written body content for a single page. */
export interface MumbaiSeoContent {
  slug: string;
  /** Lead paragraph under the H1. */
  heroIntro: string;
  /** 4 short trust points for the hero rail. */
  trustPoints: string[];
  /** Body sections: 10, in the fixed order the writer guide sets out. */
  sections: MumbaiSeoSection[];
  faqs: MumbaiSeoFaq[];
  closingCta: string;
  /** Long-tail local keyword phrases woven through the page. */
  localKeywords: string[];
}

/** A page ready to render. */
export interface MumbaiSeoPage extends MumbaiSeoPageMeta {
  content: MumbaiSeoContent;
}
