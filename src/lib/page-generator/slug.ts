import { ensureTrailingSlash, normalizeSlug } from "@/lib/seo/slug-utils";
import type { GeneratedPageType, GeneratedSeoPage, SeoGeneratorInput } from "./types";

const PROGRAMME_SLUGS: Record<string, string> = {
  pyp: "pyp",
  myp: "myp",
  dp: "dp",
};

const SUBJECT_ALIASES: Record<string, string> = {
  "math aa": "math-aa-hl",
  "math aa hl": "math-aa-hl",
  "math ai": "math-ai-hl",
  "math ai hl": "math-ai-hl",
  physics: "physics",
  chemistry: "chemistry",
  biology: "biology",
  economics: "economics",
  english: "english",
  "business management": "business-management",
  psychology: "psychology",
};

export { normalizeSlug };

export function normalizeGeneratedSlug(value: string): string {
  const cleaned = value.replace(/\bsec(?:tor)?\s*(\d+)\b/gi, "sector $1").replace(/\bphase\s*(\d+)\b/gi, "phase $1");
  return normalizeSlug(cleaned);
}

export function getPageSlug(input: Pick<SeoGeneratorInput, "pageType" | "microLocationName" | "primaryKeyword" | "serviceFocus">): string {
  if (input.pageType === "city") return "";
  if (input.pageType === "programme") {
    const source = input.serviceFocus || input.primaryKeyword;
    const key = normalizeSlug(source);
    return PROGRAMME_SLUGS[key] ?? normalizeGeneratedSlug(source);
  }
  if (input.pageType === "subject") {
    const source = input.serviceFocus || input.primaryKeyword;
    const key = normalizeSlug(source).replace(/-/g, " ");
    return SUBJECT_ALIASES[key] ?? normalizeGeneratedSlug(source);
  }
  return normalizeGeneratedSlug(input.microLocationName || input.primaryKeyword);
}

export function buildGeneratedCanonicalPath(args: {
  pageType: GeneratedPageType;
  citySlug: string;
  slug: string;
}): string {
  const citySlug = normalizeGeneratedSlug(args.citySlug);
  const pageSlug = normalizeGeneratedSlug(args.slug);

  if (args.pageType === "city") return `/ib-tutors/${citySlug}/`;
  if (args.pageType === "area") return `/ib-tutors/${citySlug}/areas/${pageSlug}/`;
  if (args.pageType === "sector") return `/ib-tutors/${citySlug}/sectors/${pageSlug}/`;
  if (args.pageType === "society") return `/ib-tutors/${citySlug}/societies/${pageSlug}/`;
  if (args.pageType === "school") return `/ib-tutors/${citySlug}/schools/${pageSlug}/`;
  return `/ib-tutors/${citySlug}/${pageSlug}/`;
}

export function getRouteKey(page: Pick<GeneratedSeoPage, "canonicalUrl">): string {
  return ensureTrailingSlash(page.canonicalUrl.replace(/^https?:\/\/[^/]+/i, ""));
}

export function pageIdFromInput(input: SeoGeneratorInput, slug: string): string {
  const parts = ["IBG", input.cityName, input.pageType, slug || "city", input.serviceFocus].map((part) => normalizeGeneratedSlug(part).replace(/-/g, "_"));
  return parts.join("_").toUpperCase().replace(/_+/g, "_");
}
