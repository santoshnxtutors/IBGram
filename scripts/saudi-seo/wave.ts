/**
 * Picks which pages a writing wave covers, and splits them across writers.
 *
 *   npx tsx scripts/saudi-seo/wave.ts 1              print wave 1's slugs as a JSON array
 *   npx tsx scripts/saudi-seo/wave.ts 1 --lanes 15   split wave 1 into 15 writer lanes
 *   npx tsx scripts/saudi-seo/wave.ts 1 --todo       only the wave's slugs not yet written
 *
 * Wave 1 is the complete hub layer, deliberately: all 23 city hubs plus all 478 Kingdom-wide
 * keyword pages. Those are the pages the other 1,991 link UP to. Writing the long tail first
 * would create 1,991 orphans with nothing pointing at them, which is exactly how this site's
 * earlier batches ended up "Discovered - currently not indexed".
 *
 * Within the wave, city hubs come first (Riyadh and Jeddah before the small cities), then the
 * Kingdom keyword pages ordered head-term-first so the highest-intent queries are written while
 * the corpus is still small and the similarity gate is easiest to clear.
 */
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { saudiSeoPagesMeta } from "../../src/lib/saudi-seo/pages-data";

const AGENT_OUT = join(import.meta.dirname, "..", "..", "tmp", "saudi-seo", "agent-out");

/** Biggest international-school markets first; the rest follow in sitemap order. */
const CITY_ORDER = [
  "riyadh", "jeddah", "al-khobar", "dammam", "dhahran", "jubail", "thuwal-kaust", "makkah",
  "madinah", "taif", "tabuk", "abha", "khamis-mushait", "yanbu", "al-ahsa", "qatif",
  "ras-tanura", "buraidah", "hail", "najran", "jazan", "alula", "neom",
];

/** Head terms, highest commercial intent first. Anything unlisted keeps sitemap order. */
const HEAD_TERMS = [
  "ib-tutor", "ib-tutors", "igcse-tutor", "igcse-tutors", "ib-home-tutor", "igcse-home-tutor",
  "ib-online-tutor", "igcse-online-tutor", "ib-tuition", "igcse-tuition", "ib-home-tuition",
  "igcse-home-tuition", "ib-tutor-near-me", "igcse-tutor-near-me", "ib-private-tutor",
  "igcse-private-tutor", "best-ib-tutor", "best-igcse-tutor", "ib-tutor-fees", "igcse-tutor-fees",
  "ib-diploma-tutor", "ib-dp-tutor", "ib-myp-tutor", "ib-pyp-tutor", "cambridge-igcse-tutor",
  "edexcel-igcse-tutor", "ib-igcse-tutor", "ib-igcse-home-tutor", "ib-coaching", "igcse-coaching",
];

function wave1(): string[] {
  const by = (kind: string) => saudiSeoPagesMeta.filter((m) => m.kind === kind);

  const cityHubs = by("city")
    .slice()
    .sort((a, b) => CITY_ORDER.indexOf(a.slug) - CITY_ORDER.indexOf(b.slug))
    .map((m) => m.slug);

  const keywords = by("saudi-keyword").map((m) => m.slug);
  const headFirst = [
    ...HEAD_TERMS.filter((t) => keywords.includes(t)),
    ...keywords.filter((k) => !HEAD_TERMS.includes(k)),
  ];

  return [...cityHubs, ...headFirst];
}

/** Wave 2: the city x head-term pages for the five biggest markets. */
function wave2(): string[] {
  const out: string[] = [];
  for (const city of ["riyadh", "jeddah", "al-khobar", "dammam", "dhahran"]) {
    for (const term of HEAD_TERMS) {
      const slug = `${city}/${term}`;
      if (saudiSeoPagesMeta.some((m) => m.slug === slug)) out.push(slug);
    }
  }
  return out;
}

/** Wave 3: the 81 district hubs, so every district-keyword page has a written parent. */
function wave3(): string[] {
  return saudiSeoPagesMeta
    .filter((m) => m.kind === "area")
    .slice()
    .sort((a, b) => CITY_ORDER.indexOf(a.citySlug ?? "") - CITY_ORDER.indexOf(b.citySlug ?? ""))
    .map((m) => m.slug);
}

const WAVES: Record<string, () => string[]> = { "1": wave1, "2": wave2, "3": wave3 };

function written(): Set<string> {
  if (!existsSync(AGENT_OUT)) return new Set();
  return new Set(
    readdirSync(AGENT_OUT)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.slice(0, -5).replace(/__/g, "/")),
  );
}

function main(): void {
  const args = process.argv.slice(2);
  const n = args.find((a) => !a.startsWith("--")) ?? "1";
  const pick = WAVES[n];
  if (!pick) {
    console.log(`no wave "${n}" defined`);
    process.exitCode = 1;
    return;
  }

  let slugs = pick();

  if (args.includes("--todo")) {
    const have = written();
    slugs = slugs.filter((s) => !have.has(s));
  }

  const limitArg = args.indexOf("--limit");
  if (limitArg >= 0 && args[limitArg + 1]) slugs = slugs.slice(0, Number(args[limitArg + 1]));

  const laneArg = args.indexOf("--lanes");
  if (laneArg >= 0 && args[laneArg + 1]) {
    const lanes = Number(args[laneArg + 1]);
    // Deal round-robin, not in contiguous blocks. Contiguous blocks hand one writer all the
    // "best-*" variants of the same phrase, which is the set hardest to keep 26% apart.
    const buckets: string[][] = Array.from({ length: lanes }, () => []);
    slugs.forEach((slug, i) => buckets[i % lanes].push(slug));
    console.log(JSON.stringify(buckets));
    return;
  }

  console.log(JSON.stringify(slugs));
}

main();
