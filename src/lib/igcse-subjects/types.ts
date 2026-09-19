import type {
  GeneratedComparison,
  GeneratedContentBlock,
  GeneratedFaq,
} from "@/lib/page-generator/types";

export type IgcseSubjectGroupKey =
  | "english-and-languages"
  | "mathematics"
  | "sciences"
  | "business-and-economics"
  | "humanities"
  | "computer-and-technology"
  | "arts-and-creative"
  | "physical-and-other";

export interface IgcseSubjectCatalogEntry {
  slug: string;
  /** Full display name, used in headings and the on-page directory. */
  label: string;
  /** Compact name for chips, breadcrumbs and anchor text. */
  shortLabel: string;
  group: IgcseSubjectGroupKey;
  /** Cambridge syllabus codes, mirrored from the IGCSE subject directory. */
  codes: string[];
  /** Matched case-insensitively against a tutor's `igcseSubjects` tags. */
  tutorTags: string[];
  /** Sibling subject slugs used for contextual internal links. */
  siblings: string[];
}

/**
 * The writer surface for one subject hub page. Everything else on the rendered
 * page (schema graph, quality block, breadcrumbs, internal links, OG/Twitter
 * fields) is derived in `to-generated-page.ts`, so a writer only ever authors
 * words.
 */
export interface IgcseSubjectContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  /** 12 or more, mixing board, city, level and intent modifiers. */
  secondaryKeywords: string[];
  h1: string;
  heroTitle: string;
  heroSubtitle: string;
  introSummary: string;
  /**
   * 10 or more long-form sections. `programmes`, `subjects`, `local_areas`,
   * `schools`, `verification`, `matching_process` and `tutoring_modes` each get
   * a dedicated section in the renderer and must appear at most once; `intro`,
   * `trust` and `cta` may repeat and render in document order.
   */
  blocks: GeneratedContentBlock[];
  /** Rendered as a real <table>, so a row can be lifted into an AI answer. */
  comparison: GeneratedComparison;
  /** 14 or more, each answering in its first sentence. */
  faqs: GeneratedFaq[];
  finalCta: string;
  lastUpdated: string;
}
