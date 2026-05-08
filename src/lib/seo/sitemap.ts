import type { MetadataRoute } from "next";
import { getIndexingDecision } from "./indexing";
import { getLiveCitySeoPages } from "./city-pages";
import { getLiveIgcseCityPages } from "./igcse-city-pages";
import { IGCSE_PAGES_HUB } from "./igcse-pages";
import { CITY_CONTENT_PAGE_SLUGS } from "./internal-links";
import { absoluteUrl, buildCityAreaPath, buildCitySchoolPath, buildCitySubpagePath } from "./slug-utils";
import { getSitemapGeneratedPages } from "@/lib/generated-pages/store";
import { generatedPageToSitemapEntry } from "./sitemap-utils";
import {
  getIgcseTutorAreaStaticParams,
  getIgcseTutorCityStaticParams,
  getIgcseTutorSchoolStaticParams,
  getIgcseTutorSectorStaticParams,
  getIgcseTutorSocietyStaticParams,
} from "@/lib/tutors/igcse-route-helpers";
import { cambridgeSubjects, edexcelSubjects } from "@/app/(marketing)/igcse/data";
import { allTutors } from "@/lib/tutor-data";

const LAST_MODIFIED = "2026-05-08";
const COURSE_SUBJECT_SLUGS = ["pyp", "myp", "dp", "cp", "mathematics", "sciences", "individuals", "individuals-and-societies", "english", "language"];

export function getSeoSitemapEntries(): MetadataRoute.Sitemap {
  return dedupeSitemapEntries([
    getIbTutorsHubSitemapEntry(),
    getIgcsePagesHubSitemapEntry(),
    ...getIndexableCitySitemapEntries(),
    ...getIndexableIbCityFocusSitemapEntries(),
    ...getIndexableIbAreaSitemapEntries(),
    ...getIndexableIbSchoolSitemapEntries(),
    ...getIndexableIgcseCitySitemapEntries(),
    ...getIndexableIgcseTutorSitemapEntries(),
    ...getIndexableCourseSitemapEntries(),
    ...getIndexableTutorProfileSitemapEntries(),
    ...getIndexableGeneratedSitemapEntries(),
  ]);
}

export function getFullPublicSitemapEntries(): MetadataRoute.Sitemap {
  return dedupeSitemapEntries([...getCorePublicSitemapEntries(), ...getSeoSitemapEntries()]);
}

export function getIbTutorsHubSitemapEntry(): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl("/ib-tutors/"),
    lastModified: "2026-05-04",
    changeFrequency: "weekly",
    priority: 0.88,
  };
}

export function getCorePublicSitemapEntries(): MetadataRoute.Sitemap {
  const entries: Array<[string, MetadataRoute.Sitemap[number]["changeFrequency"], number]> = [
    ["/", "weekly", 1],
    ["/about-us/", "monthly", 0.72],
    ["/admissions/", "monthly", 0.78],
    ["/admissions/success-stories/", "monthly", 0.66],
    ["/admissions/test-prep/", "monthly", 0.72],
    ["/blog/", "weekly", 0.7],
    ["/contact-us/", "monthly", 0.7],
    ["/igcse/", "weekly", 0.9],
    ["/igcse-pages/", "weekly", 0.86],
    ["/ib-tutors/", "weekly", 0.88],
    ["/jobs/", "monthly", 0.58],
    ["/programmes/", "monthly", 0.78],
    ["/programmes/pyp/", "monthly", 0.74],
    ["/programmes/myp/", "monthly", 0.74],
    ["/programmes/dp/", "monthly", 0.76],
    ["/programmes/cp/", "monthly", 0.7],
    ["/subscription/", "monthly", 0.56],
    ["/tutor-compare/", "weekly", 0.72],
    ["/tutors/", "weekly", 0.82],
  ];

  return entries.map(([path, changeFrequency, priority]) => ({
    url: absoluteUrl(path),
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}

export function getIgcsePagesHubSitemapEntry(): MetadataRoute.Sitemap[number] {
  return {
    url: IGCSE_PAGES_HUB.canonicalUrl,
    lastModified: IGCSE_PAGES_HUB.lastUpdated,
    changeFrequency: "weekly",
    priority: 0.86,
  };
}

export function getIndexableCitySitemapEntries(): MetadataRoute.Sitemap {
  return getLiveCitySeoPages()
    .filter((page) => getIndexingDecision(page).index)
    .map((page) => ({
      url: page.canonicalUrl,
      lastModified: page.lastUpdated,
      changeFrequency: "weekly",
      priority: Number((page.priorityScore / 10).toFixed(2)),
    }));
}

export function getIndexableIbCityFocusSitemapEntries(): MetadataRoute.Sitemap {
  return getLiveCitySeoPages().flatMap((page) =>
    CITY_CONTENT_PAGE_SLUGS.map((slug) => ({
      url: absoluteUrl(buildCitySubpagePath(page.citySlug, slug)),
      lastModified: page.lastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.74,
    })),
  );
}

export function getIndexableIbAreaSitemapEntries(): MetadataRoute.Sitemap {
  return getLiveCitySeoPages().flatMap((page) =>
    page.premiumAreas
      .filter((area) => area.pageEnabled)
      .map((area) => ({
        url: absoluteUrl(buildCityAreaPath(page.citySlug, area.slug)),
        lastModified: page.lastUpdated,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })),
  );
}

export function getIndexableIbSchoolSitemapEntries(): MetadataRoute.Sitemap {
  return getLiveCitySeoPages().flatMap((page) =>
    page.ibSchoolsCity
      .filter((school) => school.pageEnabled)
      .map((school) => ({
        url: absoluteUrl(buildCitySchoolPath(page.citySlug, school.slug)),
        lastModified: page.lastUpdated,
        changeFrequency: "weekly" as const,
        priority: 0.66,
      })),
  );
}

export function getIndexableIgcseCitySitemapEntries(): MetadataRoute.Sitemap {
  return getLiveIgcseCityPages()
    .filter((page) => page.indexFlag === "index")
    .map((page) => ({
      url: page.canonicalUrl,
      lastModified: page.lastUpdated,
      changeFrequency: "weekly",
      priority: page.priorityScore,
    }));
}

export function getIndexableGeneratedSitemapEntries(): MetadataRoute.Sitemap {
  return getSitemapGeneratedPages().map(generatedPageToSitemapEntry);
}

export function getIndexableIgcseTutorSitemapEntries(): MetadataRoute.Sitemap {
  const subjectSlugs = getIgcseSubjectSlugs();
  const cityEntries = getIgcseTutorCityStaticParams().map(({ citySlug }) => sitemapEntry(`/igcse-tutors/${citySlug}/`, 0.78));
  const areaEntries = getIgcseTutorAreaStaticParams().map(({ citySlug, areaSlug }) => sitemapEntry(`/igcse-tutors/${citySlug}/areas/${areaSlug}/`, 0.68));
  const sectorEntries = getIgcseTutorSectorStaticParams().map(({ citySlug, sectorSlug }) => sitemapEntry(`/igcse-tutors/${citySlug}/sectors/${sectorSlug}/`, 0.66));
  const societyEntries = getIgcseTutorSocietyStaticParams().map(({ citySlug, societySlug }) => sitemapEntry(`/igcse-tutors/${citySlug}/societies/${societySlug}/`, 0.66));
  const schoolEntries = getIgcseTutorSchoolStaticParams().map(({ citySlug, schoolSlug }) => sitemapEntry(`/igcse-tutors/${citySlug}/schools/${schoolSlug}/`, 0.62));
  const subjectEntries = getIgcseTutorCityStaticParams().flatMap(({ citySlug }) => subjectSlugs.map((subjectSlug) => sitemapEntry(`/igcse-tutors/${citySlug}/${subjectSlug}/`, 0.7)));

  return dedupeSitemapEntries([...cityEntries, ...areaEntries, ...sectorEntries, ...societyEntries, ...schoolEntries, ...subjectEntries]);
}

export function getIndexableCourseSitemapEntries(): MetadataRoute.Sitemap {
  return ["ib", "igcse"].flatMap((curriculum) =>
    COURSE_SUBJECT_SLUGS.map((subjectSlug) => sitemapEntry(`/courses/${curriculum}/${subjectSlug}/`, 0.64, "monthly")),
  );
}

export function getIndexableTutorProfileSitemapEntries(): MetadataRoute.Sitemap {
  return allTutors
    .filter((tutor) => tutor.isActive && tutor.verified && tutor.approved)
    .map((tutor) => sitemapEntry(`/tutor-profile/${tutor.id}/`, 0.58, "monthly"));
}

function sitemapEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly"): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  };
}

function getIgcseSubjectSlugs(): string[] {
  return [...new Set([...cambridgeSubjects, ...edexcelSubjects].map((subject) => slugifySitemap(subject.subject_title)))];
}

function dedupeSitemapEntries(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()].sort((a, b) => a.url.localeCompare(b.url));
}

function slugifySitemap(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
