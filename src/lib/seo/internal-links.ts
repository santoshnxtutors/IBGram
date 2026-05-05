import type { CitySeoPageBase, InternalLink, NearbyCityLink } from "./city-page-types";
import { buildCityAreaPath, buildCityPath, buildCitySchoolPath, buildCitySubpagePath } from "./slug-utils";

export const CITY_PROGRAM_LINKS = [
  { slug: "pyp", label: "IB PYP tutors" },
  { slug: "myp", label: "IB MYP tutors" },
  { slug: "dp", label: "IB DP tutors" },
] as const;

export const CITY_SUBJECT_LINKS = [
  { slug: "math-aa-hl", label: "IB Math AA HL tutor" },
  { slug: "math-ai-hl", label: "IB Math AI HL tutor" },
  { slug: "physics", label: "IB Physics tutor" },
  { slug: "chemistry", label: "IB Chemistry tutor" },
  { slug: "economics", label: "IB Economics tutor" },
] as const;

export const CITY_CONTENT_PAGE_SLUGS = [
  ...CITY_PROGRAM_LINKS.map((item) => item.slug),
  ...CITY_SUBJECT_LINKS.map((item) => item.slug),
] as const;

export type CityContentPageSlug = (typeof CITY_CONTENT_PAGE_SLUGS)[number];

export function isCityContentPageSlug(slug: string): slug is CityContentPageSlug {
  return CITY_CONTENT_PAGE_SLUGS.some((item) => item === slug);
}

function makeLink(
  linkId: string,
  sourcePageId: string,
  targetPageId: string,
  targetUrl: string,
  anchorText: string,
  linkContext: string,
  priority: InternalLink["priority"] = "medium",
): InternalLink {
  return {
    linkId,
    sourcePageId,
    targetPageId,
    targetUrl,
    anchorText,
    linkContext,
    linkType: "contextual",
    priority,
    followStatus: "follow",
    isCrawlable: true,
    linkStatus: "active",
  };
}

export function buildCityInternalLinks(page: CitySeoPageBase): InternalLink[] {
  const links: InternalLink[] = [];
  const prefix = `LINK_${page.cityId}`;

  CITY_PROGRAM_LINKS.forEach((item, index) => {
    links.push(
      makeLink(
        `${prefix}_PROGRAM_${index + 1}`,
        page.pageId,
        `${page.pageId}_${item.slug.toUpperCase()}`,
        buildCitySubpagePath(page.citySlug, item.slug),
        `${item.label} in ${page.cityName}`,
        "IB programmes",
        "high",
      ),
    );
  });

  CITY_SUBJECT_LINKS.forEach((item, index) => {
    links.push(
      makeLink(
        `${prefix}_SUBJECT_${index + 1}`,
        page.pageId,
        `${page.pageId}_${item.slug.toUpperCase()}`,
        buildCitySubpagePath(page.citySlug, item.slug),
        `${item.label} in ${page.cityName}`,
        "IB subjects",
        index < 3 ? "high" : "medium",
      ),
    );
  });

  page.premiumAreas
    .filter((area) => area.pageEnabled)
    .slice(0, 4)
    .forEach((area, index) => {
      links.push(
        makeLink(
          `${prefix}_AREA_${index + 1}`,
          page.pageId,
          `${page.pageId}_AREA_${area.slug.toUpperCase()}`,
          buildCityAreaPath(page.citySlug, area.slug),
          `IB tutors near ${area.name}`,
          "Areas covered",
          index < 2 ? "high" : "medium",
        ),
      );
    });

  page.ibSchoolsCity
    .filter((school) => school.pageEnabled)
    .slice(0, 3)
    .forEach((school, index) => {
      links.push(
        makeLink(
          `${prefix}_SCHOOL_${index + 1}`,
          page.pageId,
          `${page.pageId}_SCHOOL_${school.slug.toUpperCase()}`,
          buildCitySchoolPath(page.citySlug, school.slug),
          `IB tutor support for ${school.name} students`,
          "School ecosystem",
          "medium",
        ),
      );
    });

  page.nearbyCities.forEach((city, index) => {
    links.push(buildNearbyCityLink(page, city, index));
  });

  [
    { url: "/", anchor: "IB Gram homepage", target: "IBG_HOME", context: "Platform links" },
    { url: "/ib-tutors/", anchor: "IB tutor pages by city", target: "IBG_CITY_HUB", context: "Platform links" },
    { url: "/tutors/", anchor: "verified IB tutors on IB Gram", target: "IBG_TUTORS", context: "Tutor discovery" },
    { url: "/programmes/", anchor: "IB programme tutoring support", target: "IBG_PROGRAMMES", context: "Programmes" },
    { url: "/contact-us/", anchor: `book an IB tutor consultation in ${page.cityName}`, target: "IBG_CONTACT", context: "CTA" },
  ].forEach((item, index) => {
    links.push(
      makeLink(
        `${prefix}_PLATFORM_${index + 1}`,
        page.pageId,
        item.target,
        item.url,
        item.anchor,
        item.context,
        index === 3 ? "high" : "medium",
      ),
    );
  });

  return links;
}

export function buildNearbyCityLink(page: CitySeoPageBase, city: NearbyCityLink, index: number): InternalLink {
  return makeLink(
    `LINK_${page.cityId}_NEARBY_${index + 1}`,
    page.pageId,
    `IBG_CITY_${city.citySlug.toUpperCase()}`,
    buildCityPath(city.citySlug),
    `IB tutors in ${city.cityName}`,
    "Nearby city links",
    "medium",
  );
}

export function groupInternalLinksByContext(links: InternalLink[]): Record<string, InternalLink[]> {
  return links.reduce<Record<string, InternalLink[]>>((groups, link) => {
    groups[link.linkContext] = groups[link.linkContext] ?? [];
    groups[link.linkContext].push(link);
    return groups;
  }, {});
}
