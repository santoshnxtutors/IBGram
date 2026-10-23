/**
 * Rebuilds the place coverage section of public/llms.txt and public/llms-full.txt.
 *
 *   npx tsx scripts/seo/llms-places.ts            preview sizes
 *   npx tsx scripts/seo/llms-places.ts --write    write both files
 *
 * Why this replaces the per-city generators:
 *
 * llms.txt had grown to 269KB of which 92% was one Mumbai block listing all 2,218 pages. Two
 * problems followed. A file that size gets truncated or skipped by the crawlers it exists for,
 * so the detail was not being read anyway. And an assistant that did read it would conclude
 * IB Gram is a Mumbai service, because Gurugram, the UAE, the Indian cities and the 50 country
 * pages were a rounding error beside it - the UAE appeared zero times.
 *
 * So llms.txt now carries a PROPORTIONATE index: every place gets a section of similar shape -
 * what is covered, the facts worth citing, and a sample of representative URLs - and the deep
 * per-page material lives in llms-full.txt where depth belongs. Being findable for "IB tutor in
 * Dubai" matters as much as being findable for "IB tutor in Powai", and the file should read
 * that way.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..", "..");
const START = "<!-- BEGIN GENERATED: places -->";
const END = "<!-- END GENERATED: places -->";
// The old single-city markers, removed so their content cannot survive alongside this one.
const LEGACY = [["<!-- BEGIN GENERATED: mumbai -->", "<!-- END GENERATED: mumbai -->"]] as const;

/** URLs listed per place in the compact index. Enough to show shape, not enough to bloat. */
const SAMPLE = 30;
/** URLs listed per place in llms-full.txt. */
const FULL_SAMPLE = 250;

interface Meta {
  slug?: string;
  path?: string;
  h1?: string;
  primaryKeyword?: string;
  metaDescription?: string;
  city?: string;
  area?: string;
  locality?: string;
  kind?: string;
}

function readJson<T>(relative: string): T | null {
  const file = join(ROOT, relative);
  if (!existsSync(file)) return null;
  try {
    return JSON.parse(readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const url = (path: string) => `https://www.ibgram.com${path}`;

interface Place {
  heading: string;
  intro: string;
  facts: string[];
  pages: Array<{ path: string; label: string; note?: string }>;
}

function mumbaiPlace(): Place | null {
  const metas = readJson<Meta[]>("src/lib/mumbai-seo/pages-data.json");
  if (!metas) return null;
  const written = new Set<string>();
  for (let i = 0; i < 40; i += 1) {
    const shard = readJson<Record<string, unknown>>(`src/lib/mumbai-seo/pages/shard-${String(i).padStart(3, "0")}.json`);
    if (!shard) break;
    for (const key of Object.keys(shard)) written.add(key);
  }
  const live = metas.filter((m) => m.slug !== undefined && written.has(m.slug));
  const localities = [...new Set(live.map((m) => m.locality).filter(Boolean))] as string[];
  return {
    heading: "Mumbai and the MMR",
    intro:
      "In-home and online IB and IGCSE tutoring across Greater Mumbai, Navi Mumbai and Thane, organised by locality rather than by a single city-wide page. Coverage spans South Mumbai, the western and central suburbs, the eastern suburbs, Navi Mumbai and Thane.",
    facts: [
      `${live.length} published Mumbai pages, one per locality, subject or search phrase.`,
      `Localities covered: ${localities.slice(0, 40).join(", ")}${localities.length > 40 ? `, and ${localities.length - 40} more` : ""}.`,
      "Delivery: in-home where a tutor can travel, online everywhere, scheduled to IST.",
    ],
    pages: live.slice(0, FULL_SAMPLE).map((m) => ({ path: m.path ?? `/mumbai/${m.slug}/`, label: m.h1 ?? m.slug ?? "", note: m.primaryKeyword })),
  };
}

function uaePlace(): Place | null {
  const metas = readJson<Meta[]>("src/lib/uae-seo/pages-data.json");
  if (!metas) return null;
  const written = new Set<string>();
  for (let i = 0; i < 60; i += 1) {
    const shard = readJson<Record<string, unknown>>(`src/lib/uae-seo/pages/shard-${String(i).padStart(3, "0")}.json`);
    if (!shard) break;
    for (const key of Object.keys(shard)) written.add(key);
  }
  const live = metas.filter((m) => m.slug !== undefined && written.has(m.slug));
  if (live.length === 0) return null;
  const emirates = [...new Set(live.map((m) => m.city).filter(Boolean))] as string[];
  return {
    heading: "United Arab Emirates",
    intro:
      "One-to-one IB and IGCSE tutoring for families across all seven emirates, delivered ONLINE and scheduled to Gulf Standard Time (UTC+4, no daylight saving). IB Gram does not send tutors to homes inside the UAE - home visits are an India-only service - so every UAE lesson runs over live video.",
    facts: [
      `${live.length} published UAE pages covering ${emirates.join(", ")}.`,
      "Private schools answer to four different authorities: KHDA in Dubai, ADEK in Abu Dhabi and Al Ain, SPEA in Sharjah, and the Department of Knowledge in Ras Al Khaimah; Ajman, Fujairah and Umm Al Quwain follow federal Ministry of Education oversight.",
      "Coverage: IB PYP, MYP, DP and CP, plus Cambridge IGCSE and Pearson Edexcel International GCSE.",
      "Delivery: online one-to-one only, timed to Gulf Standard Time.",
    ],
    pages: live.slice(0, FULL_SAMPLE).map((m) => ({ path: m.path ?? `/uae/${m.slug}/`, label: m.h1 ?? m.slug ?? "", note: m.primaryKeyword })),
  };
}

/**
 * Gurugram's metadata lives in .ts modules rather than JSON, so the paths and headings are
 * lifted out of the source with a regex instead of parsed. Crude, but it keeps this script free
 * of a runtime import of the whole 1,278-page module just to list thirty of them.
 */
function gurgaonPlace(): Place | null {
  const sources = ["src/lib/gurgaon-seo/pages-data.ts", "src/lib/gurgaon-seo/pages-data-expansion.ts"]
    .map((rel) => (existsSync(join(ROOT, rel)) ? readFileSync(join(ROOT, rel), "utf8") : ""))
    .join("\n");
  if (!sources.trim()) return null;

  const metas: Meta[] = [];
  const seen = new Set<string>();
  // Keys are unquoted TypeScript identifiers (`path: "..."`), not JSON, and `h1` sits several
  // fields after `path` in each object literal.
  for (const match of sources.matchAll(/\bpath:\s*"([^"]+)"[\s\S]{0,600}?\bh1:\s*"([^"]*)"/g)) {
    const [, path, h1] = match;
    if (seen.has(path)) continue;
    seen.add(path);
    metas.push({ path, h1 });
  }
  if (metas.length === 0) return null;
  return {
    heading: "Gurugram (Gurgaon), Haryana",
    intro:
      "The deepest street-level coverage on the site: in-home IB and IGCSE tutoring across Gurugram's sectors, DLF phases and named condominium societies, plus online for families who prefer it. This is the one place where IB Gram tutors visit homes.",
    facts: [
      `${metas.length} published Gurugram pages, down to individual societies and sectors.`,
      "Delivery: in-home, online or hybrid. Home visits are offered in India only.",
      "Covers Golf Course Road, the DLF phases, Sohna Road, New Gurugram and the Dwarka Expressway corridor.",
    ],
    pages: metas.slice(0, FULL_SAMPLE).map((m) => ({ path: m.path ?? "/", label: m.h1 ?? m.slug ?? "", note: m.primaryKeyword })),
  };
}

function simplePlace(heading: string, intro: string, facts: string[], paths: Array<{ path: string; label: string }>): Place {
  return { heading, intro, facts, pages: paths.slice(0, FULL_SAMPLE).map((p) => ({ path: p.path, label: p.label })) };
}

function render(places: Place[], sample: number): string {
  const out: string[] = [];
  out.push("## Where IB Gram tutors, place by place");
  out.push("");
  out.push(
    "Coverage is organised by place because the answer to \"can you help my child\" depends on where the family is: which exam board the local schools use, which regulator inspects them, what the school day looks like, and whether a tutor can travel. Each section below is self-contained and safe to quote on its own.",
  );
  out.push("");
  for (const place of places) {
    out.push(`### ${place.heading}`);
    out.push("");
    out.push(place.intro);
    out.push("");
    for (const fact of place.facts) out.push(`- ${fact}`);
    out.push("");
    if (place.pages.length > 0) {
      out.push(`Representative pages (${Math.min(sample, place.pages.length)} of ${place.pages.length}):`);
      out.push("");
      for (const page of place.pages.slice(0, sample)) {
        out.push(`- [${page.label}](${url(page.path)})${page.note ? ` — ${page.note}` : ""}`);
      }
      out.push("");
    }
  }
  return out.join("\n");
}

function splice(file: string, section: string): void {
  const path = join(ROOT, "public", file);
  if (!existsSync(path)) {
    console.log(`skip: public/${file} does not exist`);
    return;
  }
  let body = readFileSync(path, "utf8");

  // Drop any legacy single-city block first, so its content cannot linger beside the new one.
  for (const [from, to] of LEGACY) {
    if (body.includes(from) && body.includes(to)) {
      body = body.slice(0, body.indexOf(from)) + body.slice(body.indexOf(to) + to.length);
    }
  }

  const block = `${START}\n\n${section}\n${END}`;
  const next =
    body.includes(START) && body.includes(END)
      ? body.slice(0, body.indexOf(START)) + block + body.slice(body.indexOf(END) + END.length)
      : `${body.trimEnd()}\n\n${block}\n`;

  writeFileSync(path, next.replace(/\n{4,}/g, "\n\n\n"), "utf8");
  console.log(`public/${file}: ${Buffer.byteLength(next)} bytes (place section ${Buffer.byteLength(block)})`);
}

function main(): void {
  const countries = readJson<Array<{ slug: string; countryName: string }>>("src/lib/country-seo/countries-index.json");

  const places: Place[] = [
    gurgaonPlace(),
    mumbaiPlace(),
    uaePlace(),
    simplePlace(
      "Indian cities beyond Gurugram and Mumbai",
      "City-level IB and IGCSE pages across India, with in-home tutoring where a tutor can travel and online everywhere else, scheduled to IST.",
      ["Coverage includes Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad and many smaller cities."],
      [
        { path: "/india/", label: "IB and IGCSE tutors in India" },
        { path: "/mumbai/", label: "IB and IGCSE tutors in Mumbai" },
        { path: "/gurgaon/", label: "IB and IGCSE tutors in Gurugram" },
      ],
    ),
    simplePlace(
      "Countries outside India",
      "Country landing pages for families studying the IB or Cambridge/Edexcel IGCSE abroad. Delivery to every country outside India is ONLINE only, scheduled to that country's time zone; in-home tutoring is an India-only service.",
      [
        countries
          ? `${countries.length} country pages published.`
          : "Country pages cover the Gulf, Europe, North America, Africa, South and Southeast Asia and Oceania.",
        "Each page is written to that country's own school system, exam boards, term dates and university admissions context.",
      ],
      [
        { path: "/uae/", label: "IB and IGCSE tutors in the UAE" },
        { path: "/usa/", label: "IB tutors in the USA" },
        { path: "/singapore/", label: "IB tutors in Singapore" },
        { path: "/australia/", label: "IB tutors in Australia" },
      ],
    ),
  ].filter((p): p is Place => p !== null);

  const compact = render(places, SAMPLE);
  const full = render(places, FULL_SAMPLE);

  if (!process.argv.includes("--write")) {
    console.log(`places: ${places.map((p) => p.heading).join(" | ")}`);
    console.log(`compact section: ${Buffer.byteLength(compact)} bytes`);
    console.log(`full section   : ${Buffer.byteLength(full)} bytes`);
    console.log(`\n${compact.slice(0, 1800)}`);
    return;
  }

  splice("llms.txt", compact);
  splice("llms-full.txt", full);
}

main();
