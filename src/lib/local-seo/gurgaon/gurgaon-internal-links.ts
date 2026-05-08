import type { GeneratedInternalLink } from "@/lib/page-generator/types";
import { normalizeSlug } from "@/lib/seo/slug-utils";
import type { GurgaonLocalPlace } from "./gurgaon.types";

export function buildGurgaonInternalLinks(place: GurgaonLocalPlace, allPlaces: GurgaonLocalPlace[], sourcePageId: string): GeneratedInternalLink[] {
  const maxLinks = place.pageType === "area" ? 24 : place.pageType === "sector" ? 18 : 14;
  const candidates = [
    link("GURGAON_CITY", "/ib-tutors/gurugram/", "IB tutors in Gurugram", "Parent city", "breadcrumb", "high"),
    link("GURGAON_DP", "/ib-tutors/gurugram/dp/", "IB DP tutors in Gurugram", "Programme pages", "contextual", "high"),
    link("GURGAON_MATH", "/ib-tutors/gurugram/math-aa-hl/", "IB Math AA HL tutor in Gurugram", "Subject pages", "contextual", "high"),
    link("GURGAON_PHYSICS", "/ib-tutors/gurugram/physics/", "IB Physics tutor in Gurugram", "Subject pages", "contextual", "medium"),
    link("CONTACT", "/contact-us/", `book an IB tutor consultation for ${place.name}`, "CTA", "cta", "high"),
    ...parentLinks(place, allPlaces),
    ...namedPlaceLinks(place.nearbyAreas, "area", allPlaces, "Nearby area links"),
    ...namedPlaceLinks(place.nearbySectors, "sector", allPlaces, "Nearby sector links"),
    ...namedPlaceLinks(place.nearbySocieties, "society", allPlaces, "Nearby society links"),
    link("DELHI", "/ib-tutors/delhi/", "IB tutors in Delhi", "Nearby city links", "related", "medium"),
    link("NOIDA", "/ib-tutors/noida/", "IB tutors in Noida", "Nearby city links", "related", "medium"),
    link("FARIDABAD", "/ib-tutors/faridabad/", "IB tutors in Faridabad", "Nearby city links", "related", "low"),
  ];

  return dedupe(candidates)
    .slice(0, maxLinks)
    .map((item, index) => ({
      ...item,
      linkId: `${sourcePageId}_LINK_${index + 1}`,
      sourcePageId,
      followStatus: "follow",
      isCrawlable: true,
      linkStatus: "active",
    }));
}

function parentLinks(place: GurgaonLocalPlace, allPlaces: GurgaonLocalPlace[]) {
  const links: ReturnType<typeof link>[] = [];
  if (place.parentAreaSlug) {
    const parent = allPlaces.find((candidate) => candidate.pageType === "area" && candidate.slug === place.parentAreaSlug);
    if (parent) links.push(link(`PARENT_AREA_${parent.slug}`, pathFor(parent), `IB tutors near ${parent.name}`, "Parent locality", "breadcrumb", "high"));
  }
  if (place.parentSectorSlug) {
    const parent = allPlaces.find((candidate) => candidate.pageType === "sector" && candidate.slug === place.parentSectorSlug);
    if (parent) links.push(link(`PARENT_SECTOR_${parent.slug}`, pathFor(parent), `IB tutors in ${parent.name} Gurugram`, "Parent locality", "breadcrumb", "high"));
  }
  return links;
}

function namedPlaceLinks(names: string[], pageType: GurgaonLocalPlace["pageType"], allPlaces: GurgaonLocalPlace[], context: string) {
  return names
    .map((name) => allPlaces.find((place) => place.pageType === pageType && (place.name === name || place.slug === normalizeSlug(name))))
    .filter((place): place is GurgaonLocalPlace => Boolean(place))
    .map((place) => {
      const anchor =
        place.pageType === "sector" ? `IB tutors in ${place.name} Gurugram` : place.pageType === "society" ? `IB tutors near ${place.name}` : `IB tutors near ${place.name}`;
      return link(`${pageType}_${place.slug}`, pathFor(place), anchor, context, "related", place.indexFlag === "index" ? "medium" : "low");
    });
}

export function pathFor(place: Pick<GurgaonLocalPlace, "pageType" | "slug">): string {
  if (place.pageType === "area") return `/ib-tutors/gurugram/areas/${place.slug}/`;
  if (place.pageType === "sector") return `/ib-tutors/gurugram/sectors/${place.slug}/`;
  return `/ib-tutors/gurugram/societies/${place.slug}/`;
}

function link(
  targetPageId: string,
  targetUrl: string,
  anchorText: string,
  linkContext: string,
  linkType: GeneratedInternalLink["linkType"],
  priority: GeneratedInternalLink["priority"],
) {
  return {
    targetPageId,
    targetUrl,
    anchorText,
    linkContext,
    linkType,
    priority,
  };
}

function dedupe<T extends { targetUrl: string; anchorText: string }>(links: T[]): T[] {
  const seenUrl = new Set<string>();
  const seenAnchor = new Set<string>();
  return links.filter((link) => {
    const urlKey = link.targetUrl.toLowerCase();
    const anchorKey = link.anchorText.toLowerCase();
    if (seenUrl.has(urlKey) || seenAnchor.has(anchorKey) || /click here/i.test(anchorKey)) return false;
    seenUrl.add(urlKey);
    seenAnchor.add(anchorKey);
    return true;
  });
}
