/**
 * Turns sitemap-saudi-arabia.xml into routing + SEO metadata for every /saudi-arabia/ page.
 *
 *   npx tsx scripts/saudi-seo/plan.ts            write src/lib/saudi-seo/pages-data.{ts,json}
 *   npx tsx scripts/saudi-seo/plan.ts --report   print the taxonomy without writing
 *   npx tsx scripts/saudi-seo/plan.ts --briefs   write tmp/saudi-seo/briefs/<slug>.json
 *
 * The sitemap is the contract: every URL in it gets exactly one meta row, and no row is
 * invented that the sitemap does not list. /blog/saudi-arabia/* is skipped (blog posts are a
 * separate system) and /saudi-arabia/ itself is skipped (it is the hand-written country page in
 * src/lib/country-seo/countries/saudi-arabia.ts).
 *
 * Titles and descriptions are generated here rather than written by agents so that 2,492 pages
 * cannot collide on a title; a writer may still override either in their page JSON when they
 * find a sharper line, and the gate re-checks uniqueness after they do.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  AREAS_BY_CITY,
  CITIES,
  CITY_SLUGS,
  LEVELS,
  SUBJECTS,
  SYLLABUS_CODE,
  clusterFor,
  displayName,
} from "../../src/lib/saudi-seo/facts";
import type {
  SaudiBoard,
  SaudiCitySlug,
  SaudiSeoPageKind,
  SaudiSeoPageMeta,
} from "../../src/lib/saudi-seo/types";

const ROOT = join(import.meta.dirname, "..", "..");
const SITEMAP = join(ROOT, "Use Sitemap to create", "sitemap-saudi-arabia.xml");
const OUT = join(ROOT, "src", "lib", "saudi-seo", "pages-data.ts");
const BRIEFS = join(ROOT, "tmp", "saudi-seo", "briefs");
const LAST_UPDATED = "2026-11-10";
const HUB = "/saudi-arabia/";

/* ------------------------------------------------------------------ */
/* Sitemap                                                             */
/* ------------------------------------------------------------------ */

function sitemapPaths(): string[] {
  const xml = readFileSync(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);
  const paths = locs
    .map((loc) => loc.replace(/^https?:\/\/[^/]+/, ""))
    .map((p) => (p.endsWith("/") ? p : `${p}/`))
    // /blog/saudi-arabia/* is the blog system. /saudi-arabia/ is the hand-written country page.
    .filter((p) => p.startsWith(HUB) && p !== HUB);
  const seen = new Set<string>();
  return paths.filter((p) => (seen.has(p) ? false : (seen.add(p), true)));
}

/* ------------------------------------------------------------------ */
/* Slug reading                                                        */
/* ------------------------------------------------------------------ */

const isCity = (s: string): s is SaudiCitySlug => (CITY_SLUGS as string[]).includes(s);

/**
 * District slugs that name a district in more than one city - Al Hamra is in Riyadh, Jeddah AND
 * Al Khobar; Al Nuzha is in three. Left alone these produce 52 pages sharing a title and a meta
 * description with another page, which is a self-inflicted duplicate-content signal. Every
 * display string for an ambiguous district therefore carries its city.
 */
const AMBIGUOUS_AREAS: Set<string> = (() => {
  const seen = new Map<string, number>();
  for (const city of CITY_SLUGS) {
    for (const area of AREAS_BY_CITY[city]) seen.set(area, (seen.get(area) ?? 0) + 1);
  }
  return new Set([...seen].filter(([, n]) => n > 1).map(([area]) => area));
})();

function boardOf(slug: string): SaudiBoard {
  if (slug.includes("ib-igcse") || slug.includes("ib-and-igcse")) return "IB + IGCSE";
  if (/(^|-)(igcse|cambridge|edexcel)(-|$)/.test(slug)) return "IGCSE";
  return "IB";
}

function levelOf(slug: string): string {
  for (const [frag, name] of LEVELS) if (slug.includes(frag)) return name;
  return "";
}

function subjectOf(slug: string): string {
  for (const [frag, name] of SUBJECTS) if (slug.includes(frag)) return name;
  return "";
}

function codeOf(slug: string): string | undefined {
  const m = slug.match(SYLLABUS_CODE);
  return m ? m[1].toUpperCase() : undefined;
}

/** "ib-home-tutor" -> "IB home tutor". Acronyms stay uppercase, everything else stays lower. */
const ACRONYMS = new Set([
  "ib", "igcse", "dp", "myp", "pyp", "cp", "hl", "sl", "aa", "ai", "tok", "cas", "ee", "ia",
  "ict", "moe", "etec", "ksa", "kaust", "kfupm", "kafd", "sat", "ap", "a", "b", "us", "uk",
]);

function humanise(slug: string): string {
  return slug
    .split("-")
    .map((w) => (ACRONYMS.has(w) ? w.toUpperCase() : w))
    .join(" ")
    .replace(/\b1 to 1\b/, "1-to-1")
    .replace(/\bab initio\b/i, "ab initio")
    .replace(/\bnear me\b/, "near me")
    .replace(/\bibgram\b/i, "IB Gram")
    .replace(/\ba level\b/i, "A Level");
}

/** Keyword-page slugs are phrases; capitalise for an H1 without shouting. */
function titleCasePhrase(phrase: string): string {
  const small = new Set(["in", "for", "to", "of", "and", "the", "a", "an", "near", "me", "with", "vs"]);
  return phrase
    .split(" ")
    .map((w, i) => {
      if (w === w.toUpperCase() && w.length > 1) return w;
      if (i > 0 && small.has(w.toLowerCase())) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

/* ------------------------------------------------------------------ */
/* Editorial angles                                                    */
/* ------------------------------------------------------------------ */

/**
 * Every page gets one angle it must be built around. Siblings that would otherwise be
 * near-identical ("ib-maths-tutor-in-al-olaya" vs "...-in-al-malqa") land on different angles,
 * which is what stops the corpus collapsing into one page written 2,492 times. The rotation is
 * keyed by a stable hash of the slug, so re-running plan.ts never reshuffles written pages.
 *
 * Deliberately more angles per kind than the UAE set carried: Saudi has 1,248 city-keyword
 * pages against the UAE's 400-odd, and a six-way rotation at that volume puts 200 pages on each
 * angle. Twelve halves that.
 */
const ANGLES: Record<SaudiSeoPageKind, string[]> = {
  city: [
    "Lead on how this city's international-school market is actually shaped - who teaches what, which subjects have no local specialist, and what that means for a parent choosing support.",
    "Lead on the geography of the school run in this city and what it does to the hours a lesson can realistically occupy.",
    "Lead on the route from an international qualification into a Saudi or overseas university from this city, and work backwards to what has to happen now.",
  ],
  area: [
    "Open on the specific school run and commute reality of this district and how it dictates when a lesson can start.",
    "Open on who actually lives here - compound families, villa families, which schools they feed into - and what their academic pressure points are.",
    "Open on the gap between what this district's schools cover in class and what a Diploma or IGCSE student still has to do alone.",
    "Open on how this district compares with the one families most often weigh it against, and why the tutoring answer is the same either way.",
  ],
  "saudi-keyword": [
    "Answer the search query literally in the first 60 words, then spend the page on what the query does not say but the parent needs.",
    "Build the page around cost and value: what this costs in the Kingdom, what drives the number, what a family gets for it.",
    "Build the page around the decision: when this is the right call, when it is not, and what the alternative is.",
    "Build the page around the academic year counted backwards from the examination series, with no calendar year named anywhere.",
    "Build the page around what goes wrong: the common failure modes in this exact situation and how to avoid each.",
    "Build the page around the regulatory and school-system context a Saudi family has to work inside - MoE licensing, ETEC evaluation, equivalency.",
    "Build the page around the university endgame: equivalency, Qudurat, Tahsili, and overseas applications from a Saudi school.",
    "Build the page around the Sunday-to-Thursday week and the time zone, and why a tutor's own working week decides whether this works at all.",
    "Build the page around evidence: marked papers, draft feedback, grade movement, and what progress looks like week by week.",
    "Build the page around who the tutor actually is - what subject qualification matters for this query, and how a family checks it.",
  ],
  "city-keyword": [
    "Anchor every claim to this city's school system and academic year rather than generic Kingdom-wide copy.",
    "Anchor the page on the subject or level in the URL: what it actually assesses, where students lose marks, what a session fixes.",
    "Anchor the page on the parent's timeline: where the student is now, where they need to be, what the weeks in between look like.",
    "Anchor the page on cost in SAR and what changes the number in this city specifically.",
    "Anchor the page on the difference between this and the three nearest alternatives a parent is also considering.",
    "Anchor the page on the evidence: marked papers, Internal Assessment drafts, grade movement, and what progress looks like week by week.",
    "Anchor the page on the Sunday-to-Thursday school week in this city and what a workable weekly slot actually looks like.",
    "Anchor the page on the specific thing this city's schools do not staff, and what a family does about it.",
    "Anchor the page on university admission from this city - equivalency, Qudurat and Tahsili, or overseas applications.",
    "Anchor the page on the first eight weeks: diagnostic, plan, the first measurable movement, and what it costs to get there.",
    "Anchor the page on command terms and mark schemes - the difference between knowing the content and being paid for it.",
    "Anchor the page on what a parent should ask a prospective tutor, and what a good answer sounds like.",
  ],
  "area-keyword": [
    "Write it from the school run: which schools this district feeds, what time the day ends, when a session realistically fits.",
    "Write it from the subject: the exact syllabus content, the mark-scheme traps, the past-paper work a student here needs.",
    "Write it from the parent's question - 'is there anyone near me who actually knows this syllabus' - and answer it honestly.",
    "Write it from the academic year: this term, this examination series, what the next eight weeks have to achieve.",
    "Write it from cost: what families in this district pay, what they get, and where the money is wasted.",
    "Write it from the comparison: this district against the next one over, and why the answer is the same either way.",
    "Write it from the student's own week: five school days, two weekend days, and where the work actually goes.",
    "Write it from the diagnostic: what a first session with a student from this district usually uncovers.",
  ],
};

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const angleFor = (kind: SaudiSeoPageKind, slug: string) => ANGLES[kind][hash(slug) % ANGLES[kind].length];

/**
 * A second, independent rotation: the structural spine the writer must use. Two pages can share
 * an angle and still read differently if their sections arrive in a different order answering
 * different questions. Keyed off a different hash seed so angle and spine do not correlate.
 */
const SPINES = [
  "cost-led: open on the money, then quality, then logistics, then outcomes.",
  "calendar-led: open on where the student is in the academic year and work forward.",
  "failure-led: open on the specific ways students lose marks here, then fix each.",
  "decision-led: open on the choice the parent is making, lay out the options, then recommend.",
  "syllabus-led: open on the assessment structure itself and build everything from it.",
  "logistics-led: open on the week, the time zone and the school run, then quality.",
  "evidence-led: open on what measurable progress looks like and work backwards to the plan.",
  "comparison-led: open by setting this option against the alternatives a family is weighing.",
];

const spineFor = (slug: string) => SPINES[hash(`spine|${slug}`) % SPINES.length];

/**
 * The FAQ lane a page must draw its questions from. 2,492 pages asking "how much does an IB
 * tutor cost in Saudi Arabia?" is 2,492 duplicate FAQ rich results, which is the single most
 * visible kind of duplication at this scale. Each page gets a different theme set, so the
 * questions differ before the answers do.
 */
const FAQ_LANES = [
  "cost, payment, trial lessons, what changes the hourly rate, and value against group options",
  "scheduling: the Sunday-to-Thursday week, Arabia Standard Time, evening slots, Ramadan and holiday patterns",
  "tutor selection: qualifications, examiner experience, subject specialism, how to verify a claim, changing tutor",
  "assessment mechanics: papers, weightings, command terms, mark schemes, grade boundaries, predicted grades",
  "Internal Assessment, Extended Essay, Personal Project and academic honesty - what a tutor may and may not do",
  "university admission: Ministry of Education equivalency, Qudurat, Tahsili, and overseas applications",
  "switching curriculum: moving between national curriculum, British, American and IB mid-course",
  "online delivery mechanics: platform, whiteboard, recordings, connectivity, what a parent sees",
  "starting out: the diagnostic, the first month, how progress is reported, what happens if it is not working",
  "subject-specific trouble spots: the topics in this subject that most often need outside teaching",
  "year-group specifics: what matters at MYP, at IGCSE, in DP1 and in DP2, and when to start",
  "the local school picture: what schools here do and do not staff, and how families work around it",
];

/**
 * Three lanes per page, not one. Fourteen questions is more than one theme comfortably holds -
 * a city hub locked to "switching curriculum" would have to strain for the last six - but three
 * lanes out of twelve still leaves 220 possible combinations, which is what keeps the questions
 * apart across a corpus this size. The offsets are co-prime with the lane count so the three are
 * always distinct.
 */
function faqLanesFor(slug: string): string[] {
  const n = FAQ_LANES.length;
  const first = hash(`faq|${slug}`) % n;
  return [first, (first + 5) % n, (first + 7) % n].map((i) => FAQ_LANES[i]);
}

/* ------------------------------------------------------------------ */
/* Meta                                                                */
/* ------------------------------------------------------------------ */

function metaFor(path: string): SaudiSeoPageMeta {
  const segments = path.split("/").filter(Boolean).slice(1); // drop "saudi-arabia"
  const slug = segments.join("/");

  let kind: SaudiSeoPageKind;
  let citySlug: SaudiCitySlug | undefined;
  let areaSlug: string | undefined;
  let keyword = "";

  if (segments.length === 1) {
    if (isCity(segments[0])) {
      kind = "city";
      citySlug = segments[0];
    } else {
      kind = "saudi-keyword";
      keyword = segments[0];
    }
  } else {
    const [first, second] = segments;
    if (!isCity(first)) throw new Error(`Unknown city in ${path}`);
    citySlug = first;
    if (AREAS_BY_CITY[first].includes(second)) {
      kind = "area";
      areaSlug = second;
    } else {
      // Only a KNOWN district counts. "ib-7-in-maths-coaching" ends with "-in-<something>" but
      // "maths-coaching" is not a district, so it stays a city-keyword page.
      const inArea = AREAS_BY_CITY[first].find((a) => second.endsWith(`-in-${a}`));
      if (inArea) {
        kind = "area-keyword";
        areaSlug = inArea;
        keyword = second.slice(0, second.length - `-in-${inArea}`.length);
      } else {
        kind = "city-keyword";
        keyword = second;
      }
    }
  }

  const city = citySlug ? CITIES[citySlug].name : "Saudi Arabia";
  const area = areaSlug ? displayName(areaSlug) : undefined;
  // "Al Hamra" alone is three different districts. Qualify it so no two pages share a title.
  const place =
    area !== undefined && areaSlug !== undefined && AMBIGUOUS_AREAS.has(areaSlug)
      ? `${area}, ${city}`
      : (area ?? city);
  const province = citySlug ? CITIES[citySlug].province : "the Kingdom of Saudi Arabia";
  const regulator =
    "the Ministry of Education (MoE), with school evaluation through the Education and Training Evaluation Commission (ETEC)";

  const vocabSlug = keyword || areaSlug || citySlug || "";
  // A city or area hub is the entry point for both boards; only keyword pages pick a side.
  const board: SaudiBoard = keyword ? boardOf(keyword) : "IB + IGCSE";
  const level = levelOf(keyword || slug);
  const subject = subjectOf(keyword);
  const syllabusCode = codeOf(keyword);

  const phrase = keyword ? humanise(keyword) : "";
  const primaryKeyword =
    kind === "city"
      ? `IB and IGCSE tutors in ${city}`
      : kind === "area"
        ? `IB and IGCSE tutors in ${place}`
        : `${phrase} in ${place}`;

  const h1 =
    kind === "city"
      ? `IB and IGCSE tutors for families in ${city}`
      : kind === "area"
        ? `IB and IGCSE tutors for families in ${place}`
        : `${titleCasePhrase(phrase)} in ${place}`;

  const title = buildTitle(kind, phrase, place);
  const metaDescription = buildDescription(kind, phrase, place, board, subject, level);

  const parentPath =
    kind === "saudi-keyword" || kind === "city"
      ? HUB
      : kind === "area" || kind === "city-keyword"
        ? `${HUB}${citySlug}/`
        : `${HUB}${citySlug}/${areaSlug}/`;

  return {
    segments,
    slug,
    path,
    kind,
    board,
    subject,
    level,
    ...(syllabusCode ? { syllabusCode } : {}),
    city,
    ...(citySlug ? { citySlug } : {}),
    ...(area ? { area } : {}),
    ...(areaSlug ? { areaSlug } : {}),
    province,
    regulator,
    primaryKeyword,
    h1,
    title,
    metaDescription,
    parentPath,
    uniqueAngle: angleFor(kind, `${vocabSlug}|${slug}`),
    lastUpdated: LAST_UPDATED,
  };
}

function buildTitle(kind: SaudiSeoPageKind, phrase: string, place: string): string {
  if (kind === "city" || kind === "area") return `IB & IGCSE Tutors in ${place} | IB Gram`;
  const base = `${titleCasePhrase(phrase)} in ${place}`;
  // resolvePageTitle clips at 60 and re-adds the brand, so a long one degrades safely.
  return `${base} | IB Gram`;
}

function buildDescription(
  kind: SaudiSeoPageKind,
  phrase: string,
  place: string,
  board: SaudiBoard,
  subject: string,
  level: string,
): string {
  const boardWords = board === "IB + IGCSE" ? "IB and IGCSE" : board === "IGCSE" ? "IGCSE" : "IB";
  if (kind === "city") {
    return `One-to-one ${boardWords} tuition for families in ${place}, delivered live online and timed to the Sunday-to-Thursday school week. Matched by syllabus, not by postcode.`;
  }
  if (kind === "area") {
    return `${boardWords} tutoring for ${place} families: one-to-one online lessons after the school run, matched to the exact syllabus your child sits.`;
  }
  const what = subject ? `${subject} ` : "";
  const lvl = level ? `${level.replace(/^the /, "")} ` : "";
  const head = titleCasePhrase(phrase);
  const d = `${head} in ${place}: one-to-one ${lvl}${what}support delivered live online on Arabia Standard Time, with a free trial lesson first.`;
  return d.replace(/\s{2,}/g, " ");
}

/* ------------------------------------------------------------------ */
/* Briefs                                                              */
/* ------------------------------------------------------------------ */

function briefFor(meta: SaudiSeoPageMeta, all: SaudiSeoPageMeta[]): Record<string, unknown> {
  const city = meta.citySlug ? CITIES[meta.citySlug] : undefined;
  const cluster = meta.areaSlug ? clusterFor(meta.areaSlug, meta.citySlug) : undefined;

  // Siblings a writer must not read like: same kind, same place, different keyword.
  const siblings = all
    .filter(
      (p) =>
        p.slug !== meta.slug &&
        p.kind === meta.kind &&
        p.citySlug === meta.citySlug &&
        p.areaSlug === meta.areaSlug,
    )
    .slice(0, 14)
    .map((p) => ({ path: p.path, h1: p.h1, angle: p.uniqueAngle }));

  // Pages this one should link to: its parent, its children, and the same keyword elsewhere.
  const children = all
    .filter((p) => p.parentPath === meta.path)
    .slice(0, 14)
    .map((p) => ({ path: p.path, label: p.h1 }));
  const head = meta.primaryKeyword.split(" in ")[0];
  const sameKeywordElsewhere = all
    .filter((p) => p.slug !== meta.slug && p.primaryKeyword.split(" in ")[0] === head)
    .slice(0, 8)
    .map((p) => ({ path: p.path, label: p.h1 }));

  return {
    ...meta,
    spine: spineFor(meta.slug),
    faqLanes: faqLanesFor(meta.slug),
    cityFacts: city
      ? { name: city.name, province: city.province, note: city.note, geo: city.geo }
      : null,
    areaCluster: cluster
      ? { label: cluster.label, nearbyAreas: cluster.siblings.slice(0, 10).map(displayName) }
      : null,
    siblings,
    internalLinks: { parent: meta.parentPath, children, sameKeywordElsewhere },
  };
}

/* ------------------------------------------------------------------ */
/* Emit                                                                */
/* ------------------------------------------------------------------ */

/**
 * The rows ship as JSON with a one-line TS wrapper, not as a TS array literal.
 *
 * A literal array of 2,492 objects makes tsc widen every string field into a union of 2,492
 * literal types and it gives up with TS2590 ("union type that is too complex to represent").
 * A JSON import is typed once, at the assertion, and costs tsc nothing.
 */
function emit(count: number): string {
  return `// GENERATED by scripts/saudi-seo/plan.ts from "Use Sitemap to create/sitemap-saudi-arabia.xml".
// Do not edit by hand - re-run the script instead.
//
// ${count} pages: every URL in the Saudi sitemap under /saudi-arabia/ except the
// /blog/saudi-arabia/ posts and /saudi-arabia/ itself, which is the hand-written country page
// in src/lib/country-seo.
//
// The rows live in ./pages-data.json. Inlining them as a TS array literal makes tsc build a
// ${count}-member union per string field and fail with TS2590.
import type { SaudiSeoPageMeta } from "./types";
import rows from "./pages-data.json";

export const saudiSeoPagesMeta = rows as unknown as SaudiSeoPageMeta[];
`;
}

function report(metas: SaudiSeoPageMeta[]): void {
  const byKind = new Map<string, number>();
  for (const m of metas) byKind.set(m.kind, (byKind.get(m.kind) ?? 0) + 1);
  console.log(`${metas.length} pages planned\n`);
  for (const [kind, n] of [...byKind].sort((a, b) => b[1] - a[1])) console.log(`  ${kind.padEnd(15)} ${n}`);

  const byCity = new Map<string, number>();
  for (const m of metas) byCity.set(m.city, (byCity.get(m.city) ?? 0) + 1);
  console.log("");
  for (const [city, n] of [...byCity].sort((a, b) => b[1] - a[1])) console.log(`  ${city.padEnd(17)} ${n}`);

  const titles = new Map<string, string[]>();
  for (const m of metas) titles.set(m.title, [...(titles.get(m.title) ?? []), m.path]);
  const dupes = [...titles].filter(([, paths]) => paths.length > 1);
  console.log(`\n  duplicate titles: ${dupes.length}`);
  for (const [t, paths] of dupes.slice(0, 10)) console.log(`    ${t}  ->  ${paths.join(", ")}`);

  const descs = new Map<string, number>();
  for (const m of metas) descs.set(m.metaDescription, (descs.get(m.metaDescription) ?? 0) + 1);
  console.log(`  duplicate descriptions: ${[...descs.values()].filter((n) => n > 1).length}`);
}

function main(): void {
  const paths = sitemapPaths();
  const metas = paths.map(metaFor);

  if (process.argv.includes("--report")) {
    report(metas);
    return;
  }

  if (process.argv.includes("--briefs")) {
    mkdirSync(BRIEFS, { recursive: true });
    // --only takes a comma-separated list of slugs, or a kind or city slug.
    const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
    const picks = only ? new Set(only.split(",").map((s) => s.trim()).filter(Boolean)) : null;
    const wanted = picks
      ? metas.filter(
          (m) => picks.has(m.slug) || picks.has(m.kind) || (m.citySlug !== undefined && picks.has(m.citySlug)),
        )
      : metas;
    for (const m of wanted) {
      writeFileSync(
        join(BRIEFS, `${m.slug.replace(/\//g, "__")}.json`),
        JSON.stringify(briefFor(m, metas), null, 1),
        "utf8",
      );
    }
    console.log(`wrote ${wanted.length} briefs to ${BRIEFS}`);
    return;
  }

  writeFileSync(OUT.replace(/\.ts$/, ".json"), `${JSON.stringify(metas)}\n`, "utf8");
  writeFileSync(OUT, emit(metas.length), "utf8");
  console.log(`wrote ${metas.length} rows to ${OUT.replace(/\.ts$/, ".json")}`);
  report(metas);
}

main();
