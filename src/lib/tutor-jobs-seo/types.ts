/**
 * Tutor-recruitment landing pages (ibgram.com/<job-slug>/).
 *
 * These are the supply side of the marketplace: every other SEO surface on this site is
 * written for parents, these are written for teachers deciding whether to tutor with us.
 *
 * Why a separate type and renderer instead of reusing CountrySeoPage/CountryLanding:
 * that layout hardcodes parent-facing copy ("Book a demo class", "how IB and IGCSE students
 * in X actually study", a per-country flag) and its demo CTA. A tutor landing on an "apply
 * to teach" page needs an apply CTA, pay splits and the safeguarding rules, not a demo
 * booking. The shared component serves ~1,250 live parent pages, so the strings cannot be
 * overridden without touching all of them.
 *
 * Deliberately NOT modelled here: an "open tuition requests" feed. Competitors run one and it
 * is the strongest anti-thin-content signal they have, but we have no open-enquiry table
 * (DemoRequest is already tutor-specific), and inventing rows would mean publishing
 * fabricated records. Per-page differentiation comes from real board/subject detail, real
 * pay arithmetic and the real tutor policy instead. Live vacancies come from the Job table.
 */

/** Which axis a page competes on. Drives the schema graph and the related-page block. */
export type JobFamily = "general" | "board" | "subject" | "persona" | "region";

export interface JobStat {
  value: string;
  label: string;
}

/** Long-form body section: heading + paragraphs, optionally bullets and one table. */
export interface JobSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: JobTable;
}

/** Data table rendered under a prose section. The first cell of each row is its row header. */
export interface JobTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

/** A step in "how you start teaching" — also emitted as HowTo schema. */
export interface JobStep {
  title: string;
  description: string;
}

/** An eligibility line. `required` false renders as "helps, not required". */
export interface JobRequirement {
  label: string;
  detail: string;
  required: boolean;
}

/**
 * A policy the tutor is agreeing to, summarised on-page with a link to the clause.
 * Every entry must restate /tutor-policy/ accurately — these are contractual terms.
 */
export interface JobPolicy {
  heading: string;
  summary: string;
  /** Anchor id on /tutor-policy/, so the page deep-links to the binding text. */
  anchor: string;
}

export interface JobWhyPoint {
  title: string;
  description: string;
}

export interface JobFaq {
  question: string;
  answer: string;
}

export interface JobInternalLink {
  label: string;
  href: string;
  description: string;
}

export interface TutorJobSeoPage {
  /** URL slug, e.g. "ib-tutor-jobs" → https://www.ibgram.com/ib-tutor-jobs/ */
  slug: string;
  jobFamily: JobFamily;
  /** Human label for the axis: "India", "UAE", "Worldwide", "IB", "IGCSE", "Maths". */
  scopeLabel: string;
  /** Where the work happens, for schema applicantLocationRequirements + body copy. */
  locationScope: "india" | "uae" | "worldwide";
  lastUpdated: string;

  // ---- SEO meta ----
  title: string;
  metaDescription: string;
  /** Bulk meta keywords for the <meta name="keywords"> tag and metadata.keywords. */
  metaKeywords: string[];
  h1: string;
  heroEyebrow: string;
  heroSubtitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  imageAltText: string;

  // ---- Hero ----
  heroTrustPoints: string[];
  heroStats: JobStat[];

  // ---- Body ----
  intro: JobSection;
  /** One-paragraph answer to the page's head query, lifted for AEO/GEO extraction. */
  directAnswer: string;
  earnings: JobSection;
  requirements: JobRequirement[];
  requirementsIntro: string;
  process: JobStep[];
  processIntro: string;
  /** The page's differentiating long-form: syllabus depth, region logistics, persona detail. */
  sections: JobSection[];
  policies: JobPolicy[];
  policiesIntro: string;
  whyPoints: JobWhyPoint[];
  faqs: JobFaq[];
  internalLinks: JobInternalLink[];
  closingHeading: string;
  closingBody: string;
}
