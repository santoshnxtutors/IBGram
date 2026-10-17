/**
 * The IB and IGCSE school ecosystem Mumbai families actually sit inside, used for the
 * school strip and for local context in page copy.
 *
 * Naming a school is local context only. IB Gram is an independent platform and is not
 * affiliated with, endorsed by, or representing any school listed here, and anything
 * rendering this list must say so alongside it — SchoolStrip already does.
 */

/** The schools nearly every Mumbai page can honestly reference. */
export const MUMBAI_SCHOOL_ECOSYSTEM = [
  "Dhirubhai Ambani International School",
  "Oberoi International School",
  "Ecole Mondiale World School",
  "American School of Bombay",
  "Aditya Birla World Academy",
] as const;

/**
 * More Mumbai IB/IGCSE schools, used only to fill the strip when a locality maps to
 * fewer than the limit. Kept apart from the ecosystem list so a longer strip never
 * changes what a page's own data says.
 */
const MORE_MUMBAI_SCHOOLS = [
  "B.D. Somani International School",
  "Cathedral and John Connon School",
  "Bombay International School",
  "Jamnabai Narsee International School",
  "Hiranandani Foundation School",
  "JBCN International School",
  "Singapore International School",
  "NES International School",
  "Smt. Sulochanadevi Singhania School",
  "D.Y. Patil International School",
  "Billabong High International School",
  "Thakur International School",
  "Utpal Shanghvi Global School",
  "Ascend International School",
];

/**
 * Up to `limit` school names for a Mumbai page: the ones mapped to that specific place
 * first, topped up from the city list so every page shows a full row.
 */
export function getMumbaiNearbySchools(placeSchools: readonly string[] = [], limit = 5): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const name of [...placeSchools, ...MUMBAI_SCHOOL_ECOSYSTEM, ...MORE_MUMBAI_SCHOOLS]) {
    if (out.length >= limit) break;
    if (seen.has(name)) continue;
    seen.add(name);
    out.push(name);
  }
  return out;
}

/** Schools mapped to a locality slug, for pages whose meta carries no school list. */
export const SCHOOLS_BY_ZONE: Record<string, readonly string[]> = {
  "south-mumbai": ["Cathedral and John Connon School", "B.D. Somani International School", "Bombay International School", "Aditya Birla World Academy", "Activity High School"],
  "western-suburbs": ["Dhirubhai Ambani International School", "Ecole Mondiale World School", "Jamnabai Narsee International School", "Oberoi International School", "American School of Bombay"],
  "central-suburbs": ["Hiranandani Foundation School", "NES International School", "Podar International School", "Witty International School", "Oberoi International School"],
  "eastern-suburbs": ["JBCN International School", "Witty International School", "Hiranandani Foundation School", "NES International School", "Dhirubhai Ambani International School"],
  "navi-mumbai": ["D.Y. Patil International School", "Ryan Global School", "Dhirubhai Ambani International School", "Oberoi International School", "Ecole Mondiale World School"],
  thane: ["Smt. Sulochanadevi Singhania School", "NES International School", "Hiranandani Foundation School", "Billabong High International School", "Oberoi International School"],
};
