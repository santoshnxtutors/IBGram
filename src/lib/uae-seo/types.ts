// UAE SEO landing pages: every URL in sitemap-uae.xml under /uae/ except the /blog/uae/ posts.
//
// Routing metadata is generated from the sitemap by scripts/uae-seo/plan.ts into ./pages-data.ts.
// Prose is written per page by agents and compiled into ./pages/<shard>.json.
//
// These render through the same <CountryLanding> component the live /uae/ page uses, so the
// content shape deliberately reuses the country-seo block types rather than inventing parallel
// ones - what a writer produces drops straight into the renderer with no transformation.

import type {
  CountryFaq,
  CountryMode,
  CountryProcessStep,
  CountryProgramme,
  CountryRegion,
  CountrySchoolCluster,
  CountrySection,
  CountryStat,
  CountrySubject,
  CountryWhyPoint,
} from "@/lib/country-seo/types";

export type UaeBoard = "IB" | "IGCSE" | "IB + IGCSE";

export type UaeSeoPageKind =
  | "city" //          /uae/dubai/
  | "area" //          /uae/dubai/dubai-marina/
  | "uae-keyword" //   /uae/ib-home-tutor/
  | "city-keyword" //  /uae/dubai/ib-dp-physics-hl-tutor/
  | "area-keyword"; // /uae/dubai/ib-maths-tutor-in-dubai-marina/

export type UaeEmirateSlug =
  | "dubai"
  | "abu-dhabi"
  | "sharjah"
  | "ajman"
  | "ras-al-khaimah"
  | "fujairah"
  | "umm-al-quwain"
  | "al-ain";

/** Delivery format a page is allowed to promise. UAE is online-only; see WRITER-GUIDE.md. */
export type UaeDelivery = "online";

/** SEO + routing metadata for one page, generated from the sitemap by plan.ts. */
export interface UaeSeoPageMeta {
  /** Path segments after /uae/, e.g. ["dubai","ib-tutor"]. One or two entries. */
  segments: string[];
  /** Join of `segments` with "/" - the content key and the map key. */
  slug: string;
  /** Site-absolute path with leading + trailing slash, e.g. "/uae/dubai/ib-tutor/". */
  path: string;
  kind: UaeSeoPageKind;
  board: UaeBoard;
  /** "Mathematics: Analysis and Approaches HL", or "" when the page is not subject-specific. */
  subject: string;
  /** "IB Diploma Programme", "Cambridge IGCSE", "MYP"... or "" for generic pages. */
  level: string;
  /** Syllabus code when the slug carries one, e.g. "0580". */
  syllabusCode?: string;
  /** Display name of the emirate or city, e.g. "Dubai". "the UAE" on /uae/<keyword>/ pages. */
  city: string;
  citySlug?: UaeEmirateSlug;
  /** Display name of the neighbourhood, e.g. "Dubai Marina". Absent on city-level pages. */
  area?: string;
  areaSlug?: string;
  /** Which regulator inspects the schools this page talks about. */
  regulator: string;
  primaryKeyword: string;
  h1: string;
  title: string;
  metaDescription: string;
  /** Parent path for breadcrumbs and the "up" internal link. */
  parentPath: string;
  /** Editorial angle plan.ts assigns to keep this page distinct from its siblings. */
  uniqueAngle: string;
  lastUpdated: string;
}

/**
 * Unique body content for one page. Everything here is written per page - nothing is
 * shared boilerplate, because 2,654 pages sharing a programmes block is 2,654 duplicate
 * pages as far as Google is concerned.
 */
export interface UaeSeoContent {
  slug: string;

  /** Optional overrides for the generated meta, when the writer finds a sharper line. */
  title?: string;
  metaDescription?: string;
  h1?: string;

  heroEyebrow: string;
  heroSubtitle: string;
  heroTrustPoints: string[];
  heroStats: CountryStat[];
  tutorsIntro: string;

  intro: CountrySection;

  programmesIntro: string;
  programmes: CountryProgramme[];

  subjectsIntro: string;
  subjects: CountrySubject[];
  igcseSubjectsIntro?: string;
  igcseSubjects?: CountrySubject[];

  regionsTitle?: string;
  regionsIntro: string;
  regions: CountryRegion[];

  schoolClusters: CountrySchoolCluster[];
  schoolDisclaimer: string;

  modesIntro: string;
  modes: CountryMode[];

  /** The long-form body. At least three of these carry a data or comparison table. */
  sections: CountrySection[];

  process: CountryProcessStep[];
  whyPoints: CountryWhyPoint[];
  faqs: CountryFaq[];

  closingHeading: string;
  closingBody: string;

  /** Long-tail phrases woven through the page; published in <meta keywords> and schema. */
  localKeywords: string[];
}

/** A page ready to render. */
export interface UaeSeoPage extends UaeSeoPageMeta {
  content: UaeSeoContent;
}

export type {
  CountryFaq,
  CountryMode,
  CountryProcessStep,
  CountryProgramme,
  CountryRegion,
  CountrySchoolCluster,
  CountrySection,
  CountryStat,
  CountrySubject,
  CountryWhyPoint,
};
