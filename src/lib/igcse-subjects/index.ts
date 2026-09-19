import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import type { Tutor } from "@/lib/tutor-data";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { getIgcseSubjectCatalogEntry, igcseSubjectCatalog, IGCSE_SUBJECT_GROUP_LABELS } from "./catalog";
import { igcseSubjectContents } from "./registry";
import { igcseSubjectPath, igcseSubjectToGeneratedPage } from "./to-generated-page";
import type { IgcseSubjectCatalogEntry, IgcseSubjectContent, IgcseSubjectGroupKey } from "./types";

export { igcseSubjectCatalog, getIgcseSubjectCatalogEntry, IGCSE_SUBJECT_GROUP_LABELS } from "./catalog";
export { igcseSubjectPath } from "./to-generated-page";
export type { IgcseSubjectCatalogEntry, IgcseSubjectContent, IgcseSubjectGroupKey } from "./types";

const contentBySlug = new Map<string, IgcseSubjectContent>(
  igcseSubjectContents.map((content) => [content.slug, content]),
);

/** Only subjects that have hand-authored content are routed and put in the sitemap. */
export const liveIgcseSubjectSlugs: string[] = igcseSubjectCatalog
  .filter((entry) => contentBySlug.has(entry.slug))
  .map((entry) => entry.slug);

export function getIgcseSubjectPage(slug: string): GeneratedSeoPage | null {
  const entry = getIgcseSubjectCatalogEntry(slug);
  const content = entry ? contentBySlug.get(entry.slug) : undefined;
  if (!entry || !content) return null;
  return igcseSubjectToGeneratedPage(content, entry);
}

export type IgcseSubjectGroup = {
  key: IgcseSubjectGroupKey;
  label: string;
  entries: IgcseSubjectCatalogEntry[];
};

/** Grouped directory used by the /igcse/ hub. Empty groups are dropped. */
export function getIgcseSubjectGroups(liveOnly = true): IgcseSubjectGroup[] {
  const keys = Object.keys(IGCSE_SUBJECT_GROUP_LABELS) as IgcseSubjectGroupKey[];
  return keys
    .map((key) => ({
      key,
      label: IGCSE_SUBJECT_GROUP_LABELS[key],
      entries: igcseSubjectCatalog.filter(
        (entry) => entry.group === key && (!liveOnly || contentBySlug.has(entry.slug)),
      ),
    }))
    .filter((group) => group.entries.length > 0);
}

export function getIgcseSubjectSitemapEntries(): MetadataRoute.Sitemap {
  return liveIgcseSubjectSlugs.map((slug) => {
    const content = contentBySlug.get(slug);
    return {
      url: absoluteUrl(igcseSubjectPath(slug)),
      lastModified: content?.lastUpdated ?? "2026-09-18",
      changeFrequency: "weekly" as const,
      priority: 0.76,
    };
  });
}

/**
 * Tutors shown on a subject page. A tutor qualifies when one of their IGCSE
 * subject tags matches this subject; tags are free text typed in the admin, so
 * matching is case- and punctuation-insensitive and also accepts a tag that
 * contains the subject name (e.g. "IGCSE Physics 0625").
 */
export function filterTutorsForIgcseSubject(
  tutors: Tutor[],
  entry: IgcseSubjectCatalogEntry,
): Tutor[] {
  const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const needles = entry.tutorTags.map(normalize).filter(Boolean);

  return tutors.filter((tutor) => {
    if (tutor.curriculum !== "IGCSE" && tutor.curriculum !== "Both") return false;
    const haystacks = [
      ...(tutor.igcseSubjects ?? []),
      tutor.subject ?? "",
      ...(tutor.tags ?? []),
    ].map(normalize);
    return needles.some((needle) => haystacks.some((hay) => hay === needle || hay.includes(needle)));
  });
}
