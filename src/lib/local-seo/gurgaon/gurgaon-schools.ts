/**
 * The international-school ecosystem Gurugram families actually sit inside.
 *
 * These names were duplicated as a hardcoded array in gurgaon-areas.ts,
 * gurgaon-sectors.ts and gurgaon-societies.ts, so adding or correcting a school
 * meant editing three files and they had already drifted in ordering. One list.
 *
 * Naming a school is local context only. IB Gram is an independent platform and is
 * not affiliated with, endorsed by, or representing any school listed here, and
 * anything rendering this list must say so alongside it.
 */
export const GURGAON_SCHOOL_ECOSYSTEM = [
  "Lancers International School",
  "Scottish High International School",
  "Pathways World School",
  "GD Goenka World School",
  "The Shri Ram School, Aravali",
] as const;

/**
 * More Gurugram schools, used only to fill the scrolling school strip. Kept apart from
 * GURGAON_SCHOOL_ECOSYSTEM because every area, sector and society copies that list into its
 * own data, and a longer strip should not change those pages' content.
 */
const MORE_GURGAON_SCHOOLS = [
  "Heritage Xperiential Learning School",
  "DPS International Edge",
  "Excelsior American School",
  "Pathways School Gurgaon",
  "Amity Global School",
  "Matrikiran High School",
  "Shalom Hills International School",
  "Kunskapsskolan International School",
  "Shiv Nadar School",
  "Suncity School",
];

/**
 * Up to `limit` school names for a Gurugram page, starting from the ones mapped to
 * that specific place and topping up from the city list so every page shows a full
 * row. Order is preserved so a place's own nearest schools appear first.
 */
export function getGurgaonNearbySchools(placeSchools: readonly string[] = [], limit = 5): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const name of [...placeSchools, ...GURGAON_SCHOOL_ECOSYSTEM, ...MORE_GURGAON_SCHOOLS]) {
    if (out.length >= limit) break;
    if (seen.has(name)) continue;
    seen.add(name);
    out.push(name);
  }
  return out;
}
