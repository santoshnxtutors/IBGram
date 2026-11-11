import "server-only";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import type { Tutor } from "@/lib/tutor-data";

/** City slugs that count as "based in Saudi Arabia" on a tutor's location fields. */
const SAUDI_CITY_SLUGS = new Set([
  "saudi-arabia", "ksa", "riyadh", "jeddah", "al-khobar", "khobar", "dammam", "dhahran",
  "jubail", "makkah", "mecca", "madinah", "medina", "taif", "tabuk", "abha", "khamis-mushait",
  "yanbu", "thuwal-kaust", "thuwal", "buraidah", "hail", "najran", "jazan", "al-ahsa", "qatif",
  "ras-tanura", "alula", "neom",
]);

/**
 * Which tutors a /saudi-arabia/ page shows.
 *
 * Saudi-based tutors win when the roster has any that match the page's board. When it does not,
 * the page falls back to the board homepage's curated set - "/" for IB pages, "/igcse/" for
 * IGCSE ones - so a page never renders an empty tutor rail while the Saudi roster fills up.
 *
 * `isIgcse` is decided by the caller from the slug rather than the board field, because
 * "ib-igcse-..." pages legitimately span both and should show the homepage's mixed set.
 * Same contract as the UAE and Mumbai hubs.
 */
export async function getSaudiPageTutors(isIgcse: boolean): Promise<{ tutors: Tutor[] | undefined; isLocal: boolean }> {
  const matchesBoard = (tutor: Tutor) =>
    isIgcse ? tutor.curriculum === "IGCSE" || tutor.curriculum === "Both" : true;

  const all = await getPublicTutorsFromDb();
  const saudi = (all ?? []).filter(
    (tutor) =>
      (SAUDI_CITY_SLUGS.has(tutor.primaryCitySlug ?? "") ||
        (tutor.availableCitySlugs ?? []).some((slug) => SAUDI_CITY_SLUGS.has(slug))) &&
      matchesBoard(tutor),
  );
  if (saudi.length > 0) return { tutors: saudi, isLocal: true };

  const fallback = (await getVisibleTutorsForPage(isIgcse ? "/igcse/" : "/")) ?? undefined;
  return { tutors: fallback?.filter(matchesBoard), isLocal: false };
}

/**
 * IGCSE-only pages show IGCSE tutors. Pages covering both boards ("ib-igcse-...") show the mixed
 * homepage set. The slug here is the full "<city>/<keyword>" key, which is fine: the board
 * tokens only ever appear in the keyword half.
 */
export const showsIgcseTutors = (slug: string) =>
  /(^|[-/])(igcse|cambridge|edexcel)/.test(slug) && !slug.includes("ib-igcse");
