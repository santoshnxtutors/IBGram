import "server-only";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import type { Tutor } from "@/lib/tutor-data";

/**
 * Which tutors a /mumbai/ page shows.
 *
 * Mumbai-based tutors win when any exist and match the page's board. When none do, the page
 * falls back to the board homepage's curated tutors — "/" for IB pages, "/igcse/" for IGCSE
 * ones — so a page never renders an empty tutor rail while the Mumbai roster is still filling.
 *
 * `isIgcse` is decided by the caller from the slug, not from the board field, because
 * "ib-igcse-..." pages legitimately span both and should show the homepage's mixed set.
 */
export async function getMumbaiPageTutors(isIgcse: boolean): Promise<{ tutors: Tutor[] | undefined; isLocal: boolean }> {
  const matchesBoard = (tutor: Tutor) =>
    isIgcse ? tutor.curriculum === "IGCSE" || tutor.curriculum === "Both" : true;

  const all = await getPublicTutorsFromDb();
  const mumbai = (all ?? []).filter(
    (tutor) =>
      // `citySlug` lives on TutorLocation, not Tutor — primaryCitySlug and
      // availableCitySlugs are the resolved fields and already cover it.
      (tutor.primaryCitySlug === "mumbai" ||
        tutor.availableCitySlugs?.includes("mumbai")) &&
      matchesBoard(tutor),
  );
  if (mumbai.length > 0) return { tutors: mumbai, isLocal: true };

  const fallback = (await getVisibleTutorsForPage(isIgcse ? "/igcse/" : "/")) ?? undefined;
  return { tutors: fallback?.filter(matchesBoard), isLocal: false };
}

/**
 * IGCSE-only pages show IGCSE tutors. Pages covering both boards ("ib-igcse-...",
 * "international-...") show the mixed homepage set. Mirrors the Gurgaon hub route.
 */
export const showsIgcseTutors = (slug: string) =>
  /(^|-)(igcse|cambridge|edexcel)/.test(slug) && !slug.includes("ib-igcse") && !slug.includes("international");
