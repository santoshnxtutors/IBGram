/**
 * Country landing pages (ibgram.com/<country-slug>/).
 *
 * Each country is its own hand-written content module under ./countries/<slug>.ts,
 * rendered by the shared premium layout in @/components/country-seo. These behave
 * like a country-specific homepage: hero, tutors, reviews, long-form SEO body and
 * 12-15 FAQs — not a thin variant of the global homepage.
 */

export interface CountryStat {
  value: string;
  label: string;
}

export interface CountryProgramme {
  code: string;
  name: string;
  ageRange: string;
  description: string;
  countryNote: string;
}

export interface CountrySubject {
  name: string;
  levels: string;
  description: string;
}

export interface CountryRegion {
  name: string;
  note: string;
}

export interface CountrySchoolCluster {
  city: string;
  note: string;
  schools: string[];
}

export interface CountryMode {
  title: string;
  description: string;
  bullets: string[];
}

/** Data table rendered under a prose section. The first cell of each row is its row header. */
export interface CountryTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

/** Generic long-form body section: heading + paragraphs (+ optional bullets and table). */
export interface CountrySection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: CountryTable;
}

export interface CountryProcessStep {
  title: string;
  description: string;
}

export interface CountryWhyPoint {
  title: string;
  description: string;
}

export interface CountryFaq {
  question: string;
  answer: string;
}

export interface CountryInternalLink {
  label: string;
  href: string;
  description: string;
}

export interface CountrySeoPage {
  /** URL slug, e.g. "usa" → https://www.ibgram.com/usa/ */
  slug: string;
  countryName: string;
  /** Formal name used in schema + body copy, e.g. "the United States". */
  countryNameLong: string;
  demonym: string;
  /** ISO 3166-1 alpha-2 lowercase, matches /public/images/Countryflag/<code>.svg */
  flagCode: string;
  /** ISO country code for schema areaServed. */
  countryCode: string;
  region: string;
  timezoneLabel: string;
  /** Working-hours overlap sentence used in the hero + scheduling section. */
  schedulingNote: string;
  lastUpdated: string;

  // ---- SEO meta ----
  title: string;
  metaDescription: string;
  h1: string;
  heroEyebrow: string;
  heroSubtitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  imageAltText: string;

  // ---- Content blocks ----
  heroTrustPoints: string[];
  heroStats: CountryStat[];
  intro: CountrySection;
  programmes: CountryProgramme[];
  programmesIntro: string;
  subjects: CountrySubject[];
  subjectsIntro: string;
  regions: CountryRegion[];
  regionsIntro: string;
  schoolClusters: CountrySchoolCluster[];
  schoolDisclaimer: string;
  modes: CountryMode[];
  modesIntro: string;
  /** Long-form SEO sections rendered as a prose column (curriculum, exams, admissions…). */
  sections: CountrySection[];
  process: CountryProcessStep[];
  whyPoints: CountryWhyPoint[];
  faqs: CountryFaq[];
  internalLinks: CountryInternalLink[];
  closingHeading: string;
  closingBody: string;

  // ---- Optional overrides for city hubs rendered with this layout (e.g. /gurgaon/) ----
  /** Replaces the "States, metros and time zones" regions heading. */
  regionsTitle?: string;
  /** Replaces the time-zone based intro above the tutor cards. */
  tutorsIntro?: string;
  /** A second subject grid for IGCSE, so `subjects` can hold IB only. */
  igcseSubjects?: CountrySubject[];
  igcseSubjectsIntro?: string;
}
