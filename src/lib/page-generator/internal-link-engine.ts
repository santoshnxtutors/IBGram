import { getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { buildCityAreaPath, buildCityPath, buildCitySchoolPath, buildCitySubpagePath } from "@/lib/seo/slug-utils";
import type { GeneratedInternalLink, GeneratedPageType, GeneratedSeoPage, SeoGeneratorInput } from "./types";
import { buildGeneratedCanonicalPath, normalizeGeneratedSlug } from "./slug";

const GLOBAL_LINKS = [
  { targetPageId: "IBG_HOME", targetUrl: "/", anchorText: "IB Gram homepage", linkContext: "Platform links", linkType: "footer" },
  { targetPageId: "IBG_IB_TUTORS", targetUrl: "/ib-tutors/", anchorText: "IB tutor pages by city", linkContext: "City hub", linkType: "breadcrumb" },
  { targetPageId: "IBG_TUTORS", targetUrl: "/tutors/", anchorText: "verified IB tutors on IB Gram", linkContext: "Tutor discovery", linkType: "contextual" },
  { targetPageId: "IBG_PROGRAMMES", targetUrl: "/programmes/", anchorText: "IB programme tutoring support", linkContext: "Programmes", linkType: "contextual" },
  { targetPageId: "IBG_CONTACT", targetUrl: "/contact-us/", anchorText: "book an IB tutor consultation", linkContext: "CTA", linkType: "cta" },
] as const;

export function buildInternalLinksForInput(input: SeoGeneratorInput, sourcePageId: string): GeneratedInternalLink[] {
  const citySlug = normalizeGeneratedSlug(input.citySlug || input.cityName);
  const cityName = input.cityName;
  const candidates: Array<Omit<GeneratedInternalLink, "linkId" | "sourcePageId" | "followStatus" | "isCrawlable" | "linkStatus">> = [
    ...GLOBAL_LINKS.map((link) => ({
      ...link,
      anchorText: link.targetPageId === "IBG_CONTACT" ? `${link.anchorText} in ${cityName}` : link.anchorText,
      priority: link.targetPageId === "IBG_CONTACT" ? "high" as const : "medium" as const,
    })),
    {
      targetPageId: `IBG_CITY_${citySlug.toUpperCase()}`,
      targetUrl: buildCityPath(citySlug),
      anchorText: `IB tutors in ${cityName}`,
      linkContext: "Parent city",
      linkType: "breadcrumb",
      priority: "high",
    },
  ];

  input.programmes.forEach((program) => {
    candidates.push({
      targetPageId: `IBG_${citySlug.toUpperCase()}_${program}`,
      targetUrl: buildCitySubpagePath(citySlug, program.toLowerCase()),
      anchorText: `IB ${program} tutors in ${cityName}`,
      linkContext: "Programme pages",
      linkType: "card",
      priority: "high",
    });
  });

  input.subjects.slice(0, 7).forEach((subject, index) => {
    const subjectSlug = normalizeSubjectSlug(subject);
    candidates.push({
      targetPageId: `IBG_${citySlug.toUpperCase()}_${subjectSlug.toUpperCase()}`,
      targetUrl: buildCitySubpagePath(citySlug, subjectSlug),
      anchorText: `${subjectAnchor(subject)} in ${cityName}`,
      linkContext: "Subject pages",
      linkType: index < 3 ? "contextual" : "related",
      priority: index < 3 ? "high" : "medium",
    });
  });

  input.premiumAreas.slice(0, 4).forEach((area, index) => {
    candidates.push({
      targetPageId: `IBG_${citySlug.toUpperCase()}_AREA_${normalizeGeneratedSlug(area).toUpperCase()}`,
      targetUrl: buildCityAreaPath(citySlug, area),
      anchorText: `IB tutors near ${area}`,
      linkContext: "Local area pages",
      linkType: "related",
      priority: index < 2 ? "high" : "medium",
    });
  });

  input.schoolsMentioned.slice(0, 3).forEach((school) => {
    candidates.push({
      targetPageId: `IBG_${citySlug.toUpperCase()}_SCHOOL_${normalizeGeneratedSlug(school).toUpperCase()}`,
      targetUrl: buildCitySchoolPath(citySlug, school),
      anchorText: `IB tutor support for ${school} students`,
      linkContext: "School ecosystem",
      linkType: "related",
      priority: "medium",
    });
  });

  input.nearbyCities.slice(0, 3).forEach((city) => {
    candidates.push({
      targetPageId: `IBG_CITY_${normalizeGeneratedSlug(city).toUpperCase()}`,
      targetUrl: buildCityPath(city),
      anchorText: `IB tutors in ${city}`,
      linkContext: "Nearby city pages",
      linkType: "related",
      priority: "medium",
    });
  });

  return dedupeLinks(candidates).slice(0, 20).map((link, index) => hydrateLink(link, sourcePageId, index));
}

export function buildInternalLinksForGeneratedPage(page: GeneratedSeoPage, allPages: GeneratedSeoPage[] = []): GeneratedInternalLink[] {
  const inputLike: SeoGeneratorInput = {
    pageType: page.pageType,
    cityName: page.cityName,
    citySlug: page.citySlug,
    parentLocation: page.parentLocation,
    microLocationName: page.microLocationName,
    microLocationType: page.microLocationType,
    primaryKeyword: page.primaryKeyword,
    secondaryKeywords: page.secondaryKeywords,
    serviceFocus: page.serviceFocus,
    programmes: page.programmes,
    subjects: page.subjects,
    tutoringModes: page.tutoringModes,
    premiumAreas: page.premiumAreas,
    nearbyAreas: page.nearbyAreas,
    nearbyCities: page.nearbyCities,
    schoolsMentioned: page.schoolsMentioned,
    ctaFocus: page.finalCta,
    publishMode: "draft",
    indexPreference: "auto",
  };

  const generatedLinks = allPages
    .filter((candidate) => candidate.pageId !== page.pageId && candidate.status === "published" && candidate.indexFlag === "index")
    .slice(0, 8)
    .map((candidate, index) => ({
      targetPageId: candidate.pageId,
      targetUrl: canonicalToPath(candidate.canonicalUrl),
      anchorText: candidate.breadcrumbTitle || candidate.primaryKeyword,
      linkContext: candidate.citySlug === page.citySlug ? "Related generated pages" : "Nearby generated pages",
      linkType: "related" as const,
      priority: index < 3 ? "high" as const : "medium" as const,
    }));

  return dedupeLinks([...buildInternalLinksForInput(inputLike, page.pageId), ...generatedLinks]).slice(0, 20).map((link, index) =>
    hydrateLink(link, page.pageId, index),
  );
}

export function getRelatedGeneratedPageSuggestions(input: SeoGeneratorInput, sourcePageId: string): GeneratedInternalLink[] {
  const citySlug = normalizeGeneratedSlug(input.citySlug || input.cityName);
  const suggestions: Array<{ pageType: GeneratedPageType; slug: string; anchor: string }> = [
    { pageType: "city", slug: "", anchor: `IB tutors in ${input.cityName}` },
    { pageType: "programme", slug: "dp", anchor: `IB DP tutors in ${input.cityName}` },
    { pageType: "subject", slug: "math-aa-hl", anchor: `IB Math AA HL tutor in ${input.cityName}` },
    { pageType: "subject", slug: "physics", anchor: `IB Physics tutor in ${input.cityName}` },
  ];
  if (input.nearbyAreas[0]) {
    suggestions.push({ pageType: "area", slug: normalizeGeneratedSlug(input.nearbyAreas[0]), anchor: `IB tutors near ${input.nearbyAreas[0]}` });
  }

  return suggestions.map((suggestion, index) =>
    hydrateLink(
      {
        targetPageId: `SUGGESTED_${citySlug}_${suggestion.pageType}_${suggestion.slug || "city"}`.toUpperCase(),
        targetUrl: buildGeneratedCanonicalPath({ pageType: suggestion.pageType, citySlug, slug: suggestion.slug }),
        anchorText: suggestion.anchor,
        linkContext: "Related page suggestions",
        linkType: "related",
        priority: index < 2 ? "high" : "medium",
      },
      sourcePageId,
      index,
    ),
  );
}

function hydrateLink(
  link: Omit<GeneratedInternalLink, "linkId" | "sourcePageId" | "followStatus" | "isCrawlable" | "linkStatus">,
  sourcePageId: string,
  index: number,
): GeneratedInternalLink {
  return {
    ...link,
    linkId: `${sourcePageId}_LINK_${index + 1}`.replace(/[^A-Z0-9_]/gi, "_").toUpperCase(),
    sourcePageId,
    followStatus: "follow",
    isCrawlable: true,
    linkStatus: "active",
  };
}

function dedupeLinks<T extends { targetUrl: string; anchorText: string }>(links: T[]): T[] {
  const seenUrls = new Set<string>();
  const seenAnchors = new Set<string>();
  return links.filter((link) => {
    const urlKey = link.targetUrl.toLowerCase();
    const anchorKey = link.anchorText.toLowerCase();
    if (seenUrls.has(urlKey) || seenAnchors.has(anchorKey) || /click here/i.test(anchorKey)) return false;
    seenUrls.add(urlKey);
    seenAnchors.add(anchorKey);
    return true;
  });
}

function normalizeSubjectSlug(subject: string): string {
  const slug = normalizeGeneratedSlug(subject);
  if (slug === "math-aa") return "math-aa-hl";
  if (slug === "math-ai") return "math-ai-hl";
  return slug;
}

function subjectAnchor(subject: string): string {
  return /^ib /i.test(subject) ? `${subject} tutor` : `IB ${subject} tutor`;
}

function canonicalToPath(url: string): string {
  return new URL(url).pathname;
}

export function knownGeneratedTargetUrls(pages: GeneratedSeoPage[]): Set<string> {
  const staticUrls = new Set<string>(GLOBAL_LINKS.map((link) => link.targetUrl));
  getLiveCitySeoPages().forEach((page) => {
    staticUrls.add(buildCityPath(page.citySlug));
    page.ibProgramsAvailable.forEach((program) => staticUrls.add(buildCitySubpagePath(page.citySlug, program.slug)));
    page.ibSubjectsAvailable.forEach((subject) => staticUrls.add(buildCitySubpagePath(page.citySlug, subject.slug)));
    page.premiumAreas.filter((area) => area.pageEnabled).forEach((area) => staticUrls.add(buildCityAreaPath(page.citySlug, area.slug)));
    page.ibSchoolsCity.filter((school) => school.pageEnabled).forEach((school) => staticUrls.add(buildCitySchoolPath(page.citySlug, school.slug)));
  });
  pages.filter((page) => page.status === "published").forEach((page) => staticUrls.add(canonicalToPath(page.canonicalUrl)));
  return staticUrls;
}
