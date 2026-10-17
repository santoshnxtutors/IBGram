/**
 * Canonical country list for tutor coverage and country landing pages.
 *
 * `code` is ISO 3166-1 alpha-2 (lowercase) and matches the flag assets in
 * /public/images/Countryflag/<code>.svg, so anything referencing a country here
 * can render its flag without a second lookup table.
 */

export interface CountryOption {
  code: string;
  name: string;
}

/** Sentinel stored in place of individual codes when a tutor covers everywhere. */
export const ALL_COUNTRIES = "all";

/** Countries with meaningful IB / Cambridge presence, grouped roughly by region. */
export const COUNTRIES: CountryOption[] = [
  // South & East Asia
  { code: "in", name: "India" },
  { code: "sg", name: "Singapore" },
  { code: "my", name: "Malaysia" },
  { code: "hk", name: "Hong Kong" },
  { code: "cn", name: "China" },
  { code: "jp", name: "Japan" },
  { code: "kr", name: "South Korea" },
  { code: "th", name: "Thailand" },
  { code: "id", name: "Indonesia" },
  { code: "ph", name: "Philippines" },
  { code: "vn", name: "Vietnam" },
  { code: "lk", name: "Sri Lanka" },
  { code: "bd", name: "Bangladesh" },
  { code: "np", name: "Nepal" },
  { code: "pk", name: "Pakistan" },
  { code: "tw", name: "Taiwan" },

  // Middle East
  { code: "ae", name: "United Arab Emirates" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "qa", name: "Qatar" },
  { code: "kw", name: "Kuwait" },
  { code: "om", name: "Oman" },
  { code: "bh", name: "Bahrain" },
  { code: "jo", name: "Jordan" },
  { code: "lb", name: "Lebanon" },
  { code: "tr", name: "Turkey" },
  { code: "il", name: "Israel" },
  { code: "eg", name: "Egypt" },

  // Europe
  { code: "gb", name: "United Kingdom" },
  { code: "ie", name: "Ireland" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "nl", name: "Netherlands" },
  { code: "be", name: "Belgium" },
  { code: "ch", name: "Switzerland" },
  { code: "at", name: "Austria" },
  { code: "es", name: "Spain" },
  { code: "it", name: "Italy" },
  { code: "pt", name: "Portugal" },
  { code: "se", name: "Sweden" },
  { code: "no", name: "Norway" },
  { code: "dk", name: "Denmark" },
  { code: "fi", name: "Finland" },
  { code: "pl", name: "Poland" },
  { code: "cz", name: "Czechia" },
  { code: "gr", name: "Greece" },
  { code: "ro", name: "Romania" },
  { code: "hu", name: "Hungary" },
  { code: "lu", name: "Luxembourg" },

  // Americas
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "mx", name: "Mexico" },
  { code: "br", name: "Brazil" },
  { code: "ar", name: "Argentina" },
  { code: "cl", name: "Chile" },
  { code: "co", name: "Colombia" },
  { code: "pe", name: "Peru" },
  { code: "cr", name: "Costa Rica" },

  // Africa
  { code: "za", name: "South Africa" },
  { code: "ng", name: "Nigeria" },
  { code: "ke", name: "Kenya" },
  { code: "gh", name: "Ghana" },
  { code: "tz", name: "Tanzania" },
  { code: "ug", name: "Uganda" },
  { code: "ma", name: "Morocco" },
  { code: "mu", name: "Mauritius" },

  // Oceania
  { code: "au", name: "Australia" },
  { code: "nz", name: "New Zealand" },
  { code: "fj", name: "Fiji" },
];

const byCode = new Map(COUNTRIES.map((country) => [country.code, country]));
const byName = new Map(COUNTRIES.map((country) => [country.name.toLowerCase(), country]));

export function getCountryByCode(code: string): CountryOption | undefined {
  return byCode.get(code.trim().toLowerCase());
}

/** Resolves a stored value that may be a code ("us") or a name ("United States"). */
export function resolveCountry(value: string): CountryOption | undefined {
  const trimmed = value.trim().toLowerCase();
  return byCode.get(trimmed) ?? byName.get(trimmed);
}

export function countryFlagSrc(code: string): string {
  return `/images/Countryflag/${code.trim().toLowerCase()}.svg`;
}

/** True when the stored coverage list means "everywhere". */
export function coversAllCountries(codes: string[] | undefined): boolean {
  return Boolean(codes?.some((code) => code.trim().toLowerCase() === ALL_COUNTRIES));
}

/**
 * Normalises a saved coverage list: lowercases, drops unknown entries, dedupes.
 * `ALL_COUNTRIES` short-circuits to `["all"]` so the two states never mix.
 */
export function normaliseCountryCodes(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  const cleaned = values
    .map((value) => String(value ?? "").trim().toLowerCase())
    .filter(Boolean);
  if (cleaned.includes(ALL_COUNTRIES)) return [ALL_COUNTRIES];
  const out: string[] = [];
  for (const value of cleaned) {
    const country = resolveCountry(value);
    if (country && !out.includes(country.code)) out.push(country.code);
  }
  return out;
}

/** International dialling codes (without "+") for every country in COUNTRIES. */
export const DIAL_CODES: Record<string, string> = {
  in: "91", sg: "65", my: "60", hk: "852", cn: "86", jp: "81", kr: "82", th: "66", id: "62", ph: "63", vn: "84",
  lk: "94", bd: "880", np: "977", pk: "92", tw: "886", ae: "971", sa: "966", qa: "974", kw: "965", om: "968",
  bh: "973", jo: "962", lb: "961", tr: "90", il: "972", eg: "20", gb: "44", ie: "353", de: "49", fr: "33",
  nl: "31", be: "32", ch: "41", at: "43", es: "34", it: "39", pt: "351", se: "46", no: "47", dk: "45", fi: "358",
  pl: "48", cz: "420", gr: "30", ro: "40", hu: "36", lu: "352", us: "1", ca: "1", mx: "52", br: "55", ar: "54",
  cl: "56", co: "57", pe: "51", cr: "506", za: "27", ng: "234", ke: "254", gh: "233", tz: "255", ug: "256",
  ma: "212", mu: "230", au: "61", nz: "64", fj: "679",
};

/**
 * Split a stored "+<code> <number>" phone into its country and local digits.
 * Shared codes (+1) resolve to the first listed country; unknown input defaults to India.
 */
export function splitPhone(value: string): { country: string; local: string } {
  const digits = value.replace(/[^\d+ ]/g, "").trim();
  const [, code = "", rest = ""] = digits.match(/^\+(\d{1,4})\s*(.*)$/) ?? [];
  const country = code ? COUNTRIES.find((c) => DIAL_CODES[c.code] === code)?.code : undefined;
  return country ? { country, local: rest.replace(/\D/g, "") } : { country: "in", local: digits.replace(/\D/g, "") };
}
