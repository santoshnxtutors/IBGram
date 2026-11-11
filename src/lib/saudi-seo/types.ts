// Saudi Arabia SEO landing pages: every URL in sitemap-saudi-arabia.xml under /saudi-arabia/
// except the /blog/saudi-arabia/ posts.
//
// Routing metadata is generated from the sitemap by scripts/saudi-seo/plan.ts into
// ./pages-data.ts. Prose is written per page by agents and compiled into ./pages/<shard>.json.
//
// These render through the same <CountryLanding> component the live /saudi-arabia/ page uses,
// so the content shape deliberately reuses the country-seo block types rather than inventing
// parallel ones - what a writer produces drops straight into the renderer untransformed.

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

export type SaudiBoard = "IB" | "IGCSE" | "IB + IGCSE";

export type SaudiSeoPageKind =
  | "city" //            /saudi-arabia/riyadh/
  | "area" //            /saudi-arabia/riyadh/al-olaya/
  | "saudi-keyword" //   /saudi-arabia/ib-home-tutor/
  | "city-keyword" //    /saudi-arabia/riyadh/ib-dp-physics-hl-tutor/
  | "area-keyword"; //   /saudi-arabia/riyadh/ib-maths-tutor-in-al-olaya/

export type SaudiCitySlug =
  | "riyadh"
  | "jeddah"
  | "al-khobar"
  | "dammam"
  | "dhahran"
  | "jubail"
  | "makkah"
  | "madinah"
  | "taif"
  | "tabuk"
  | "abha"
  | "khamis-mushait"
  | "yanbu"
  | "thuwal-kaust"
  | "buraidah"
  | "hail"
  | "najran"
  | "jazan"
  | "al-ahsa"
  | "qatif"
  | "ras-tanura"
  | "alula"
  | "neom";

/** Delivery format a page is allowed to promise. Saudi Arabia is online-only; see WRITER-GUIDE.md. */
export type SaudiDelivery = "online";

/** SEO + routing metadata for one page, generated from the sitemap by plan.ts. */
export interface SaudiSeoPageMeta {
  /** Path segments after /saudi-arabia/, e.g. ["riyadh","ib-tutor"]. One or two entries. */
  segments: string[];
  /** Join of `segments` with "/" - the content key and the map key. */
  slug: string;
  /** Site-absolute path with leading + trailing slash, e.g. "/saudi-arabia/riyadh/ib-tutor/". */
  path: string;
  kind: SaudiSeoPageKind;
  board: SaudiBoard;
  /** "Mathematics: Analysis and Approaches HL", or "" when the page is not subject-specific. */
  subject: string;
  /** "IB Diploma Programme", "Cambridge IGCSE", "MYP"... or "" for generic pages. */
  level: string;
  /** Syllabus code when the slug carries one, e.g. "0580". */
  syllabusCode?: string;
  /** Display name of the city, e.g. "Riyadh". "Saudi Arabia" on /saudi-arabia/<keyword>/ pages. */
  city: string;
  citySlug?: SaudiCitySlug;
  /** Display name of the district, e.g. "Al Olaya". Absent on city-level pages. */
  area?: string;
  areaSlug?: string;
  /** The province the city sits in, e.g. "Riyadh Province". */
  province: string;
  /** Who licenses and evaluates the schools this page talks about. */
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
 * Unique body content for one page. Everything here is written per page - nothing is shared
 * boilerplate, because 2,492 pages sharing a programmes block is 2,492 duplicate pages as far
 * as Google is concerned.
 */
export interface SaudiSeoContent {
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

  /** The long-form body. At least one carries a data or comparison table on hub pages. */
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
export interface SaudiSeoPage extends SaudiSeoPageMeta {
  content: SaudiSeoContent;
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
