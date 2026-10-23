import type { Prisma, PrismaClient } from "@prisma/client";

/**
 * Resolves the City row a tutor's locations hang off, creating it when the place is one we
 * knowingly serve.
 *
 * Why this exists: both admin tutor routes used to do
 *
 *     const city = await tx.city.findFirst({ where: { slug } });
 *     if (city) { ...write TutorLocation rows... }
 *
 * so a slug with no City row meant the whole location block was skipped - areas, sectors,
 * societies, teaching modes and travel notes were all discarded - while the API still returned
 * `{ ok: true }` and the admin UI showed "Saved to database." The City table has no `dubai`,
 * `abu-dhabi`, `sharjah` or even `gurgaon` row, so editing a tutor into any of those silently
 * lost every location field.
 *
 * The fix is twofold: never return quietly (callers now surface an error), and know about the
 * places the business actually serves so the common case just works.
 */

type Tx = Prisma.TransactionClient | PrismaClient;

export interface ResolvedCity {
  id: string;
  name: string;
  slug: string;
}

export function citySlugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

/**
 * Spellings that mean an existing city. Without these an admin typing the everyday name
 * ("Gurgaon", "Bangalore") creates a second row for a city that is already in the table, and
 * the tutor stops matching the pages built around the canonical slug.
 */
const ALIASES: Record<string, string> = {
  gurgaon: "gurugram",
  gurgram: "gurugram",
  bangalore: "bangalore",
  bengaluru: "bangalore",
  bombay: "mumbai",
  calcutta: "kolkata",
  madras: "chennai",
  mysore: "mysuru",
  trivandrum: "thiruvananthapuram",
  "ras-al-khaimah": "rak",
  rak: "rak",
};

/** Places we serve that may not have a City row yet, with the geography a City row needs. */
const KNOWN_PLACES: Record<string, { city: string; state: string; country: [name: string, code: string]; timezone: string }> = {
  dubai: { city: "Dubai", state: "Dubai", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
  "abu-dhabi": { city: "Abu Dhabi", state: "Abu Dhabi", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
  sharjah: { city: "Sharjah", state: "Sharjah", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
  ajman: { city: "Ajman", state: "Ajman", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
  fujairah: { city: "Fujairah", state: "Fujairah", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
  "umm-al-quwain": { city: "Umm Al Quwain", state: "Umm Al Quwain", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
  "al-ain": { city: "Al Ain", state: "Abu Dhabi", country: ["United Arab Emirates", "AE"], timezone: "Asia/Dubai" },
};

/**
 * Finds the City row for `input`, creating it (with its Country and State) when the place is
 * in KNOWN_PLACES. Returns null when the place is unknown — callers must treat that as an
 * error, not as "skip the location work".
 */
export async function resolveCityForTutor(tx: Tx, input: string | null | undefined): Promise<ResolvedCity | null> {
  const requested = citySlugify(input || "gurugram");
  if (!requested) return null;
  const slug = ALIASES[requested] ?? requested;

  const existing = await tx.city.findFirst({
    where: { slug },
    select: { id: true, name: true, slug: true },
    // Two `gurugram` rows exist in production. Oldest-first makes the choice deterministic
    // instead of whatever the planner happens to return, so a tutor does not hop between
    // duplicate cities on consecutive saves.
    orderBy: { createdAt: "asc" },
  });
  if (existing) return existing;

  const place = KNOWN_PLACES[slug];
  if (!place) return null;

  const [countryName, countryCode] = place.country;
  const country =
    (await tx.country.findUnique({ where: { code: countryCode }, select: { id: true } })) ??
    (await tx.country.create({
      data: { name: countryName, code: countryCode, slug: citySlugify(countryName) },
      select: { id: true },
    }));

  const state =
    (await tx.state.findFirst({
      where: { countryId: country.id, slug: citySlugify(place.state) },
      select: { id: true },
    })) ??
    (await tx.state.create({
      data: { countryId: country.id, name: place.state, slug: citySlugify(place.state) },
      select: { id: true },
    }));

  return tx.city.create({
    data: {
      countryId: country.id,
      stateId: state.id,
      name: place.city,
      slug,
      timezone: place.timezone,
    },
    select: { id: true, name: true, slug: true },
  });
}

/** The message shown when a place cannot be resolved. Lists what the admin can pick. */
export async function unknownCityMessage(tx: Tx, input: string | null | undefined): Promise<string> {
  const requested = citySlugify(input || "");
  const cities = await tx.city.findMany({ select: { slug: true }, orderBy: { slug: "asc" }, take: 200 });
  const known = [...new Set([...cities.map((c) => c.slug), ...Object.keys(KNOWN_PLACES)])].sort();
  return (
    `Primary city "${input ?? ""}" (slug "${requested}") does not exist, so the areas, sectors, ` +
    `societies, teaching modes and travel notes were NOT saved. Pick one of: ${known.join(", ")}`
  );
}
