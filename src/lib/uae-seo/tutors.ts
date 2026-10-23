import "server-only";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import type { Tutor } from "@/lib/tutor-data";

/** City slugs that count as "based in the UAE" on a tutor's location fields. */
const UAE_CITY_SLUGS = new Set([
  "uae", "dubai", "abu-dhabi", "sharjah", "ajman", "ras-al-khaimah", "fujairah",
  "umm-al-quwain", "al-ain",
]);

/**
 * Which tutors a /uae/ page shows.
 *
 * UAE-based tutors win when the roster has any that match the page's board. When it does not,
 * the page falls back to the board homepage's curated set - "/" for IB pages, "/igcse/" for
 * IGCSE ones - so a page never renders an empty tutor rail while the UAE roster fills up.
 *
 * `isIgcse` is decided by the caller from the slug rather than the board field, because
 * "ib-igcse-..." pages legitimately span both and should show the homepage's mixed set.
 * Same contract as the Mumbai hub; see src/lib/mumbai-seo/tutors.ts.
 */
export async function getUaePageTutors(isIgcse: boolean): Promise<{ tutors: Tutor[] | undefined; isLocal: boolean }> {
  const matchesBoard = (tutor: Tutor) => (isIgcse ? tutor.curriculum === "IGCSE" || tutor.curriculum === "Both" : true);

  const all = await getPublicTutorsFromDb();
  const uae = (all ?? []).filter(
    (tutor) =>
      (UAE_CITY_SLUGS.has(tutor.primaryCitySlug ?? "") ||
        (tutor.availableCitySlugs ?? []).some((slug) => UAE_CITY_SLUGS.has(slug))) &&
      matchesBoard(tutor),
  );
  if (uae.length > 0) return { tutors: uae, isLocal: true };

  const fallback = (await getVisibleTutorsForPage(isIgcse ? "/igcse/" : "/")) ?? undefined;
  return { tutors: fallback?.filter(matchesBoard), isLocal: false };
}

/**
 * IGCSE-only pages show IGCSE tutors. Pages covering both boards ("ib-igcse-...") show the
 * mixed homepage set. The slug here is the full "<city>/<keyword>" key, which is fine: the
 * board tokens only ever appear in the keyword half.
 */
export const showsIgcseTutors = (slug: string) =>
  /(^|[-/])(igcse|cambridge|edexcel)/.test(slug) && !slug.includes("ib-igcse");
