/**
 * Indian city landing pages (ibgram.com/<slug>/), one per city in All_cities_name.pdf, in population
 * order. Source list: scripts/india-cities/cities.json (decoded from the PDF; names with
 * verified=false may still carry decoding damage and must be fixed there before their batch runs).
 * Gurgaon is excluded: /gurgaon/ already exists.
 */
import { readFileSync } from "node:fs";
import path from "node:path";

export interface CityPlan {
  rank: number;
  slug: string;
  exportName: string;
  name: string;
  state: string;
  stateCode: string;
  /** In-person home tuition is offered in parts of this city (Delhi NCR only). Everywhere else is online. */
  homeTuition: boolean;
  /** Existing city pages on the site for this city, to link to from the new page. */
  existingPaths: string[];
}

/** City pages may only link to other cities up to this rank: raise it as each batch publishes. */
export const MAX_LINK_RANK = 61;

const STATE_CODES: Record<string, string> = {
  "Andhra Pradesh": "IN-AP", "Arunachal Pradesh": "IN-AR", Assam: "IN-AS", Bihar: "IN-BR", Chhattisgarh: "IN-CT", Goa: "IN-GA",
  Gujarat: "IN-GJ", Haryana: "IN-HR", "Himachal Pradesh": "IN-HP", Jharkhand: "IN-JH", Karnataka: "IN-KA", Kerala: "IN-KL",
  "Madhya Pradesh": "IN-MP", Maharashtra: "IN-MH", Manipur: "IN-MN", Meghalaya: "IN-ML", Mizoram: "IN-MZ", Nagaland: "IN-NL",
  Odisha: "IN-OR", Punjab: "IN-PB", Rajasthan: "IN-RJ", Sikkim: "IN-SK", "Tamil Nadu": "IN-TN", Telangana: "IN-TG",
  Tripura: "IN-TR", "Uttar Pradesh": "IN-UP", Uttarakhand: "IN-UT", "West Bengal": "IN-WB", "Andaman and Nicobar Islands": "IN-AN",
  Chandigarh: "IN-CH", "Dadra and Nagar Haveli and Daman and Diu": "IN-DH", Delhi: "IN-DL", "Jammu and Kashmir": "IN-JK",
  Ladakh: "IN-LA", Lakshadweep: "IN-LD", Puducherry: "IN-PY",
};

const HOME_TUITION = new Set(["delhi", "noida", "faridabad", "ghaziabad", "greater-noida"]);
/** Slugs used by the older /ib-tutors/<city>/, /igcse-tutors/<city>/ and /igcse-pages/<city>/ pages. */
const LEGACY_SLUG: Record<string, string> = { bengaluru: "bangalore", mysuru: "mysuru" };
const LEGACY_CITIES = new Set("ahmedabad bangalore bhopal bhubaneswar chandigarh chennai coimbatore dehradun delhi faridabad ghaziabad greater-noida hyderabad indore jaipur kochi kolkata lucknow ludhiana mumbai mysuru nagpur navi-mumbai noida pune surat thane vadodara visakhapatnam".split(" "));

const slugify = (s: string) => s.replace(/\(.*?\)/g, "").trim().toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const camel = (s: string) => s.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());

interface Row { rank: number; name: string; state: string; verified: boolean }
const rows = JSON.parse(readFileSync(path.resolve("scripts/india-cities/cities.json"), "utf8")) as Row[];
const firstRank = new Map<string, number>();
for (const r of rows) if (!firstRank.has(slugify(r.name))) firstRank.set(slugify(r.name), r.rank);

export const CITY_PLAN: CityPlan[] = rows
  .filter((r) => slugify(r.name) !== "gurgaon")
  .map((r) => {
    const base = slugify(r.name);
    // Same-named cities in two states (Aurangabad, Srinagar...): the larger keeps the plain slug.
    const slug = firstRank.get(base) === r.rank ? base : `${base}-${slugify(r.state)}`;
    const legacy = LEGACY_SLUG[slug] ?? slug;
    return {
      rank: r.rank,
      slug,
      exportName: camel(/^\d/.test(slug) ? `city-${slug}` : slug),
      name: r.name.trim(),
      state: r.state,
      stateCode: STATE_CODES[r.state] ?? "IN",
      homeTuition: HOME_TUITION.has(slug),
      existingPaths: LEGACY_CITIES.has(legacy) ? [`/ib-tutors/${legacy}/`, `/igcse-tutors/${legacy}/`, `/igcse-pages/${legacy}/`] : [],
    };
  })
  // The PDF lists a few cities twice; keep the first (larger) entry.
  .filter((c, i, all) => all.findIndex((o) => o.slug === c.slug) === i);

if (process.argv[1]?.endsWith("plan.ts")) {
  const [from = "1", to = "61"] = process.argv.slice(2);
  for (const c of CITY_PLAN.filter((p) => p.rank >= +from && p.rank <= +to)) console.log(JSON.stringify(c));
}
