/**
 * Quality gate and compiler for the /mumbai/ pages.
 *
 *   npx tsx scripts/mumbai-seo/build.ts --check <slug>   gate one page (what writers run)
 *   npx tsx scripts/mumbai-seo/build.ts --check-all      gate everything in agent-out/
 *   npx tsx scripts/mumbai-seo/build.ts --compile        shard to src/lib/mumbai-seo/pages/
 *
 * Writers put prose in tmp/mumbai-seo/agent-out/<slug>.json in exactly the renderer's shape,
 * so nothing is transformed on the way in — what passes the gate is what ships.
 *
 * The claim, banned-phrase and similarity checks are the ones already proven on the Gurgaon
 * corpus; reusing them keeps one standard across both cities rather than two drifting ones.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { BANNED, findClaims, similarity, sketch } from "../gurgaon-500/compile";
import { LOCALITY_BY_SLUG, MUMBAI_ZONES } from "./facts";

const ROOT = join(import.meta.dirname, "..", "..");
const TMP = join(ROOT, "tmp", "mumbai-seo");
const BRIEFS = join(TMP, "briefs");
const AGENT_OUT = join(TMP, "agent-out");
const OUT_PAGES = join(ROOT, "src", "lib", "mumbai-seo", "pages");

const MIN_WORDS = 4000;
const MAX_SIBLING_SIMILARITY = 0.3;
const MAX_CORPUS_SIMILARITY = 0.4;
const SHARD_SIZE = 120;

const SECTION_TYPES = [
  "matching_process",
  "programmes",
  "subjects",
  "local_areas",
  "schools",
  "tutoring_modes",
  "verification",
  "deep_dive",
  "trust",
  "cta",
] as const;
type SectionType = (typeof SECTION_TYPES)[number];

const EXTRA_BANNED = [
  "whether you're", "academic journey", "learning journey", "empower", "unlock", "tailored to your",
  "we understand that", "top-notch", "second to none", "one-stop", "hassle-free", "peace of mind",
  "bustling", "vibrant city", "city of dreams", "maximum city", "nestled",
];

/** Scale claims findClaims() does not cover. Non-global so .test() carries no lastIndex state. */
const SUPERLATIVES: Array<[RegExp, string]> = [
  // "Pokhran Road No. 1" and "Sector No. 2" are addresses, not ranking claims, so a preceding
  // address noun suppresses the match. Mumbai and Thane have plenty of them.
  [
    /(?<!\b(?:road|lane|plot|gate|street|marg|sector|phase|building|wing|floor|flat|house|room|no)\s)(number one|no\.?\s?1\b|#1\b|top-ranked|top-rated|highest-rated)/i,
    "superlative claim (number one / top-rated)",
  ],
  [/\b(IB Gram|we)\s+(has|have|offers?|provides?)\s+the\s+best\b/i, "superlative claim (IB Gram has the best)"],
];

interface Section {
  type: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
}
interface Out {
  heroIntro: string;
  trustPoints: string[];
  sections: Section[];
  faqs: Array<{ question: string; answer: string }>;
  closingCta: string;
  localKeywords: string[];
}
interface Brief {
  slug: string;
  kind: string;
  board: string;
  subject: string;
  level: string;
  keyword: string;
  h1: string;
  secondary: string[];
  mustCover: string[];
  siblings: Array<{ slug: string; owns: string }>;
  locality: null | {
    name: string;
    zone: string;
    corridor: string;
    station: string;
    nearby: string[];
    societies: string[];
    schools: string[];
    note: string;
    isSociety: boolean;
  };
}

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Service nouns that mean the same thing to a searcher and to Google. */
const SERVICE_NOUNS = ["tutor", "tutors", "tuition", "tuitions", "tutoring", "teacher", "teachers", "class", "classes",
  "coaching", "lesson", "lessons"];

/**
 * Matches a keyword as a loose token chain, so "IB maths tutor in Worli" also matches
 * "IB Maths home tutor in Worli".
 *
 * The service noun and the and/or connective are treated as interchangeable, because
 * "IB and IGCSE home tutor in Andheri West" and "IB & IGCSE home tuition in Andheri West" are
 * the same request and no writer uses one phrasing six times running. Requiring the literal
 * noun made writers who had used the keyword five times read as having used it twice, and
 * "primary keyword appears 2 times, needs 4+" was by far the most common gate failure.
 *
 * Still strict about the parts that carry the intent: board, subject and locality must all be
 * present, so a wrong-locality or missing-board phrase does not count.
 */
export function keywordRe(keyword: string, flags = "gi"): RegExp {
  const toks = keyword
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => {
      const bare = t.toLowerCase().replace(/[^a-z]/g, "");
      if (SERVICE_NOUNS.includes(bare)) return `(?:${SERVICE_NOUNS.join("|")})`;
      if (bare === "and" || bare === "or") return "(?:and|or|&)";
      return escapeRe(t);
    });
  return new RegExp(toks.join("[\\s\\w-]{0,24}"), flags);
}

const bodyText = (o: Out) =>
  [
    o.heroIntro,
    ...o.trustPoints,
    ...o.sections.flatMap((s) => [...(s.paragraphs ?? []), ...(s.bullets ?? [])]),
    ...o.faqs.map((f) => f.answer),
    o.closingCta,
  ].join("\n\n");

const allText = (o: Out) =>
  [bodyText(o), ...o.sections.map((s) => s.heading), ...o.faqs.map((f) => f.question)].join("\n\n");

/**
 * A banned phrase matches in any inflected form. The old \b-anchored literal let "unlocks their
 * potential" straight through, which is the same slop in a different tense, so the first and last
 * word of a phrase each carry an optional suffix: "delves into", "seamlessly", "tapestries".
 * Interior words are left alone, and boundaries are still only added where the phrase actually
 * starts or ends with a word character, so "moreover," and "that said," match exactly as before.
 */
export function bannedRe(phrase: string): RegExp {
  const SUF = "(?:s|es|d|ed|ing|ly)?";
  const inflect = (t: string) =>
    !/\w$/.test(t)
      ? escapeRe(t)
      : t.endsWith("y")
        ? `${escapeRe(t.slice(0, -1))}(?:y|ies)`
        : t.endsWith("e")
          // "leverage" + "ing" is "leveraging", so the silent e is dropped and the suffix is
          // mandatory: an optional group would leave a bare "leverag" matching on its own.
          ? `${escapeRe(t.slice(0, -1))}(?:e|es|ed|ing|ely)`
          : escapeRe(t) + SUF;
  const toks = phrase.split(" ").map(escapeRe);
  if (/^\w/.test(phrase)) toks[0] = inflect(phrase.split(" ")[0]);
  const last = toks.length - 1;
  if (last > 0) toks[last] = inflect(phrase.split(" ")[last]);
  const lead = /^\w/.test(phrase) ? "\\b" : "";
  const tail = /\w$/.test(phrase) ? "\\b" : "";
  return new RegExp(`${lead}${toks.join(" ")}${tail}`, "i");
}

function check(brief: Brief, o: Out): string[] {
  const p: string[] = [];

  /* ---- shape ---- */
  for (const key of ["heroIntro", "closingCta"] as const) {
    if (typeof o[key] !== "string" || !o[key].trim()) p.push(`missing ${key}`);
  }
  if (!Array.isArray(o.trustPoints) || o.trustPoints.length !== 4) p.push(`trustPoints needs exactly 4 (got ${o.trustPoints?.length ?? 0})`);
  if (!Array.isArray(o.localKeywords) || o.localKeywords.length < 8) p.push(`localKeywords needs 8+ (got ${o.localKeywords?.length ?? 0})`);
  if (!Array.isArray(o.sections)) return [...p, "sections must be an array"];

  const got = o.sections.map((s) => s.type);
  if ([...got].sort().join() !== [...SECTION_TYPES].sort().join()) {
    p.push(`sections must be exactly one of each type: ${SECTION_TYPES.join(", ")} (got ${got.join(", ")})`);
  }
  for (const s of o.sections) {
    if (!s.heading?.trim()) p.push(`section ${s.type} has no heading`);
    const w = words((s.paragraphs ?? []).join(" "));
    if (w < 240) p.push(`section ${s.type} is ${w} words, needs 240+`);
    if ((s.paragraphs?.length ?? 0) < 3) p.push(`section ${s.type} needs 3-4 paragraphs`);
    if (!Array.isArray(s.bullets) || s.bullets.length < 4 || s.bullets.length > 6) p.push(`section ${s.type} needs 4-6 bullets`);
  }

  const heroWords = words(o.heroIntro ?? "");
  if (heroWords < 35 || heroWords > 70) p.push(`heroIntro is ${heroWords} words, needs 35-70`);
  const ctaWords = words(o.closingCta ?? "");
  if (ctaWords < 45 || ctaWords > 90) p.push(`closingCta is ${ctaWords} words, needs 45-90`);

  if (!Array.isArray(o.faqs) || o.faqs.length < 10 || o.faqs.length > 12) p.push(`${o.faqs?.length ?? 0} faqs, needs 10-12`);
  for (const f of o.faqs ?? []) if (words(f.answer ?? "") < 60) p.push(`faq answer under 60 words: "${f.question}"`);

  /* ---- length ---- */
  const body = bodyText(o);
  const wc = words(body);
  if (wc < MIN_WORDS) p.push(`${wc} words, needs ${MIN_WORDS}+ (headings and FAQ questions are not counted)`);

  /* ---- voice ---- */
  const all = allText(o);
  const lower = all.toLowerCase();
  // Word-boundary matched, not a plain substring: "the leverage they had" contains the literal
  // "leverage the" and was being rejected as the banned phrase. Boundaries are only added where
  // the phrase actually starts or ends with a word character, so "moreover," still matches.
  for (const phrase of [...BANNED, ...EXTRA_BANNED]) {
    if (bannedRe(phrase).test(all)) p.push(`banned phrase: "${phrase}"`);
  }
  for (const [re, label] of SUPERLATIVES) if (re.test(all)) p.push(`${label}: "${all.match(re)?.[0]}"`);
  for (const claim of findClaims(all)) p.push(claim);
  const dashes = (all.match(/—/g) ?? []).length;
  if (dashes > 8) p.push(`${dashes} em dashes, max 8`);

  /* ---- keyword placement ---- */
  const headings = o.sections.map((s) => s.heading ?? "");
  const heroHead = (o.heroIntro ?? "").split(/\s+/).slice(0, 60).join(" ");
  if (!keywordRe(brief.keyword, "i").test(heroHead)) {
    p.push(`primary keyword "${brief.keyword}" missing from the first 60 words of heroIntro`);
  }
  const kwCount = (body.match(keywordRe(brief.keyword)) ?? []).length;
  if (kwCount < 4) p.push(`primary keyword appears ${kwCount} times in body text, needs 4+`);
  if (kwCount > 14) p.push(`primary keyword appears ${kwCount} times, max 14`);
  const kwHeadings = headings.filter((h) => keywordRe(brief.keyword, "i").test(h)).length;
  if (kwHeadings > 3) p.push(`primary keyword in ${kwHeadings} H2s, max 3`);

  const secondaryHits = brief.secondary.filter((s) => keywordRe(s, "i").test(all)).length;
  if (secondaryHits < 9) p.push(`${secondaryHits} of ${brief.secondary.length} secondary phrases used, needs 9+`);

  const questionHeadings = headings.filter((h) => /\?$/.test(h.trim())).length;
  if (questionHeadings < 3) p.push(`${questionHeadings} question-phrased H2s, needs 3+`);

  /* ---- Mumbai local signals ---- */
  const mumbaiCount = (all.match(/\bmumbai\b/gi) ?? []).length;
  if (mumbaiCount < 10) p.push(`"Mumbai" appears ${mumbaiCount} times, needs 10+`);
  const mumbaiHeadings = headings.filter((h) => /\bmumbai\b/i.test(h)).length;
  const place = brief.locality?.name;
  const placeHeadings = headings.filter((h) => /\bmumbai\b/i.test(h) || (place ? h.includes(place) : false)).length;
  if (placeHeadings < 4) p.push(`Mumbai${place ? ` or ${place}` : ""} in ${placeHeadings} H2s, needs 4+ (currently ${mumbaiHeadings} mention Mumbai)`);

  if (brief.locality) {
    const l = brief.locality;
    const placeCount = (all.match(new RegExp(escapeRe(l.name), "gi")) ?? []).length;
    if (placeCount < 8) p.push(`"${l.name}" appears ${placeCount} times, needs 8+`);
    const missingNearby = l.nearby.filter((n) => !all.includes(n));
    if (missingNearby.length > 1) p.push(`nearby areas not named: ${missingNearby.join(", ")} (name at least all but one)`);
    const schoolHits = l.schools.filter((s) => all.includes(s) || all.includes(s.replace(/,.*$/, ""))).length;
    if (schoolHits < 2) p.push(`names ${schoolHits} of its ${l.schools.length} local schools, needs 2+`);
    // Accept any real way of naming the station or corridor. The data stores
    // qualifiers like "Kanjurmarg (road) / Powai"; demanding that literal forced
    // writers to put "(road)" in prose, which nobody writes.
    const named = (field: string) =>
      field
        .split(/ ?[/–] ?/)
        .flatMap((part) => [part, part.replace(/\s*\([^)]*\)/g, "")])
        .map((v) => v.trim())
        .filter((v) => v.length > 2)
        .some((v) => all.includes(v));
    if (!named(l.station) && !named(l.corridor)) {
      p.push(`neither the station ("${l.station}") nor the corridor ("${l.corridor}") is named`);
    }
  } else {
    const zonesNamed = Object.values(MUMBAI_ZONES).filter((z) => all.includes(z.name)).length;
    if (zonesNamed < 4) p.push(`city-wide page names ${zonesNamed} of 6 Mumbai zones, needs 4+`);
  }

  /* ---- home tuition intent ---- */
  const homeHits = (body.match(/home (tutor|tuition|classes|tutoring)/gi) ?? []).length;
  if (homeHits < 8) p.push(`home tuition intent: "home tutor/tuition/classes" appear ${homeHits} times in body, needs 8+`);
  const homeHeadings = headings.filter((h) => /home (tutor|tuition|classes|tutoring)/i.test(h)).length;
  if (homeHeadings < 2) p.push(`home tuition intent: ${homeHeadings} H2s mention home tutoring, needs 2+`);
  const homeFaqs = (o.faqs ?? []).filter((f) => /home|travel|society|building|evening|gate|parking|commut/i.test(f.question)).length;
  if (homeFaqs < 2) p.push(`home tuition intent: ${homeFaqs} FAQs about home-tuition logistics, needs 2+`);

  /* ---- required disclosures ---- */
  if (!/not affiliated|independent platform|no affiliation/i.test(all)) {
    p.push("missing the independence line: must state IB Gram is an independent platform, not affiliated with any school named");
  }
  // Accepts every natural way of saying it. The first version only matched "does not
  // guarantee", so "we do not guarantee grades" — correct English, and what writers actually
  // write — was rejected, costing a round-trip per page.
  if (!/\b(?:does not|do not|doesn't|don't|cannot|can't|never)\s+guarantee|\bno guarantees?\b/i.test(all)) {
    p.push("missing the honesty line: must state grades are not guaranteed (e.g. \"IB Gram does not guarantee grades\")");
  }

  return p;
}

/* ------------------------------------------------------------------ */

const readBrief = (slug: string): Brief => JSON.parse(readFileSync(join(BRIEFS, `${slug || "index"}.json`), "utf8"));
const readOut = (slug: string): Out => JSON.parse(readFileSync(join(AGENT_OUT, `${slug || "index"}.json`), "utf8"));

function writtenSlugs(): string[] {
  if (!existsSync(AGENT_OUT)) return [];
  return readdirSync(AGENT_OUT)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""))
    .map((s) => (s === "index" ? "" : s));
}

/**
 * Sketches of every already-written page, for the similarity check.
 *
 * Memoized per process. This used to re-read and re-sketch every page from disk
 * on EVERY call, so `--compile` over 900 pages did ~810,000 file reads and
 * sketch computations instead of 900 and effectively never finished. The sketch
 * of a given file cannot change inside one run (writers are not running during
 * a compile), so it is computed once and reused; only the cheap numeric
 * comparison stays O(n^2).
 */
const SKETCH_CACHE = new Map<string, number[] | null>();

function sketchOf(slug: string): number[] | null {
  let cached = SKETCH_CACHE.get(slug);
  if (cached === undefined) {
    try {
      cached = sketch(bodyText(readOut(slug)));
    } catch {
      cached = null;
    }
    SKETCH_CACHE.set(slug, cached);
  }
  return cached;
}

function corpusSketches(exclude: string): Array<[string, number[]]> {
  const out: Array<[string, number[]]> = [];
  for (const s of writtenSlugs()) {
    if (s === exclude) continue;
    const sk = sketchOf(s);
    if (sk) out.push([s || "index", sk]);
  }
  return out;
}

function checkOne(slug: string, quiet = false): string[] {
  const brief = readBrief(slug);
  const out = readOut(slug);
  const problems = check(brief, out);

  const own = sketch(bodyText(out));
  const siblings = new Set(brief.siblings.map((s) => s.slug));
  for (const [other, sk] of corpusSketches(slug)) {
    const s = similarity(own, sk);
    const limit = siblings.has(other) ? MAX_SIBLING_SIMILARITY : MAX_CORPUS_SIMILARITY;
    if (s > limit) problems.push(`too similar to /mumbai/${other}/ (${Math.round(s * 100)}%, max ${Math.round(limit * 100)}%): rewrite with different framing, examples and section order`);
  }

  if (!quiet) {
    if (problems.length === 0) {
      console.log(`PASS  ${slug || "index"}  (${words(bodyText(out))} words)`);
    } else {
      console.log(`FAIL  ${slug || "index"}`);
      for (const problem of problems) console.log(`  - ${problem}`);
    }
  }
  return problems;
}

function compile(): void {
  const slugs = writtenSlugs();
  const failed: string[] = [];
  const contents: Array<[string, unknown]> = [];

  for (const slug of slugs) {
    const problems = checkOne(slug, true);
    if (problems.length > 0) {
      failed.push(`${slug || "index"} (${problems.length} problems)`);
      continue;
    }
    const out = readOut(slug);
    contents.push([
      slug,
      {
        slug,
        heroIntro: out.heroIntro,
        trustPoints: out.trustPoints,
        // Render in the fixed order, whatever order the writer used.
        sections: SECTION_TYPES.map((t) => {
          const s = out.sections.find((x) => x.type === t)!;
          return { heading: s.heading, paragraphs: s.paragraphs, bullets: s.bullets };
        }),
        faqs: out.faqs,
        closingCta: out.closingCta,
        localKeywords: out.localKeywords,
      },
    ]);
  }

  // Skip non-passing pages rather than refusing the whole run. Waves overlap — an agent may be
  // mid-write while this runs — and refusing wholesale meant one half-written file blocked every
  // finished page from shipping. A skipped page simply has no content, so its route 404s instead
  // of serving something thin.
  if (failed.length > 0) {
    console.warn(`skipping ${failed.length} page(s) that do not pass the gate (still being written, or need fixes):`);
    for (const f of failed) console.warn(`  - ${f}`);
  }
  if (contents.length === 0) {
    console.error("nothing to compile: no page passes the gate");
    process.exitCode = 1;
    return;
  }

  mkdirSync(OUT_PAGES, { recursive: true });
  const shards: Array<Array<[string, unknown]>> = [];
  for (let i = 0; i < contents.length; i += SHARD_SIZE) shards.push(contents.slice(i, i + SHARD_SIZE));

  const names: string[] = [];
  shards.forEach((shard, i) => {
    const name = `shard-${String(i).padStart(3, "0")}`;
    names.push(name);
    writeFileSync(join(OUT_PAGES, `${name}.json`), `${JSON.stringify(Object.fromEntries(shard), null, 1)}\n`.replace(/\r\n/g, "\n"), "utf8");
  });

  // The registry must be regenerated or new pages 404 even though their JSON is on disk.
  const index = `// GENERATED by scripts/mumbai-seo/build.ts --compile. Do not edit by hand.
// Statically imports the written-content shards so Next can bundle them. Content lands
// wave by wave; a slug absent here is planned but unwritten and its route 404s rather
// than serving a thin page.
import type { MumbaiSeoContent } from "../types";
${names.map((n, i) => `import shard${i} from "./${n}.json";`).join("\n")}

export const mumbaiSeoContentBySlug: Record<string, MumbaiSeoContent> = {
${names.map((_, i) => `  ...(shard${i} as unknown as Record<string, MumbaiSeoContent>),`).join("\n")}
};
`;
  writeFileSync(join(OUT_PAGES, "index.ts"), index.replace(/\r\n/g, "\n"), "utf8");
  console.log(`compiled ${contents.length} pages into ${shards.length} shard(s)`);
}

function main(): void {
  const args = process.argv.slice(2);
  const checkIdx = args.indexOf("--check");
  if (checkIdx !== -1) {
    const slug = args[checkIdx + 1] ?? "";
    const problems = checkOne(slug === "index" ? "" : slug);
    process.exitCode = problems.length > 0 ? 1 : 0;
    return;
  }
  if (args.includes("--check-all")) {
    let bad = 0;
    const counts: number[] = [];
    for (const slug of writtenSlugs()) {
      const problems = checkOne(slug, true);
      if (problems.length > 0) {
        bad += 1;
        console.log(`FAIL  ${slug || "index"}`);
        for (const problem of problems) console.log(`  - ${problem}`);
      } else {
        counts.push(words(bodyText(readOut(slug))));
      }
    }
    const total = writtenSlugs().length;
    console.log(`\n${total - bad}/${total} pass`);
    if (counts.length) {
      console.log(`words: min ${Math.min(...counts)}, avg ${Math.round(counts.reduce((a, b) => a + b, 0) / counts.length)}, max ${Math.max(...counts)}`);
    }
    process.exitCode = bad > 0 ? 1 : 0;
    return;
  }
  if (args.includes("--compile")) {
    compile();
    return;
  }
  console.log("usage: build.ts --check <slug> | --check-all | --compile");
}

main();
