/**
 * Turns sitemap-uae.xml into routing + SEO metadata for every /uae/ page.
 *
 *   npx tsx scripts/uae-seo/plan.ts            write src/lib/uae-seo/pages-data.ts
 *   npx tsx scripts/uae-seo/plan.ts --report   print the taxonomy without writing
 *   npx tsx scripts/uae-seo/plan.ts --briefs   write tmp/uae-seo/briefs/<slug>.json
 *
 * The sitemap is the contract: every URL in it gets exactly one meta row, and no row is
 * invented that the sitemap does not list. /blog/uae/* is skipped (blog posts are a separate
 * system) and /uae/ itself is skipped (it is the hand-written country page in country-seo).
 *
 * Titles and descriptions are generated here rather than written by agents so that 2,654
 * pages cannot collide on a title; a writer may still override either in their page JSON when
 * they find a sharper line, and the gate re-checks uniqueness after they do.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  AREAS_BY_CITY,
  CITY_BY_AREA,
  EMIRATES,
  EMIRATE_SLUGS,
  LEVELS,
  SUBJECTS,
  SYLLABUS_CODE,
  clusterFor,
  displayName,
} from "../../src/lib/uae-seo/facts";
import type { UaeBoard, UaeEmirateSlug, UaeSeoPageKind, UaeSeoPageMeta } from "../../src/lib/uae-seo/types";

const ROOT = join(import.meta.dirname, "..", "..");
const SITEMAP = join(ROOT, "Use Sitemap to create", "sitemap-uae.xml");
const OUT = join(ROOT, "src", "lib", "uae-seo", "pages-data.ts");
const BRIEFS = join(ROOT, "tmp", "uae-seo", "briefs");
const LAST_UPDATED = "2026-10-22";

/* ------------------------------------------------------------------ */
/* Sitemap                                                             */
/* ------------------------------------------------------------------ */

function sitemapPaths(): string[] {
  const xml = readFileSync(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);
  const paths = locs
    .map((loc) => loc.replace(/^https?:\/\/[^/]+/, ""))
    .map((p) => (p.endsWith("/") ? p : `${p}/`))
    // /blog/uae/* is the blog system, not this page set. /uae/ is the hand-written country page.
    .filter((p) => p.startsWith("/uae/") && p !== "/uae/");
  const seen = new Set<string>();
  return paths.filter((p) => (seen.has(p) ? false : (seen.add(p), true)));
}

/* ------------------------------------------------------------------ */
/* Slug reading                                                        */
/* ------------------------------------------------------------------ */

const isEmirate = (s: string): s is UaeEmirateSlug => (EMIRATE_SLUGS as string[]).includes(s);

function boardOf(slug: string): UaeBoard {
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
  "ict", "khda", "adek", "spea", "moe", "uae", "jbr", "jlt", "difc", "a", "b",
]);

function humanise(slug: string): string {
  return slug
    .split("-")
    .map((w) => (ACRONYMS.has(w) ? w.toUpperCase() : w))
    .join(" ")
    .replace(/\b1 to 1\b/, "1-to-1")
    .replace(/\bab initio\b/i, "ab initio")
    .replace(/\bnear me\b/, "near me");
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
 * near-identical ("ib-maths-tutor-in-jlt" vs "...-in-jbr") land on different angles, which is
 * what stops the corpus collapsing into one page written 2,654 times. The rotation is keyed by
 * a stable hash of the slug, so re-running plan.ts never reshuffles already-written pages.
 */
const ANGLES: Record<UaeSeoPageKind, string[]> = {
  city: [
    "Lead with how this emirate's regulator inspects schools and what that means for a parent choosing support.",
  ],
  area: [
    "Open on the specific school-run and commute reality of this neighbourhood and how it dictates when a lesson can start.",
    "Open on who actually lives here - villa families, apartment families, which schools they feed into - and what their academic pressure points are.",
    "Open on the gap between what this area's schools cover in class and what a DP or IGCSE student still has to do alone.",
  ],
  "uae-keyword": [
    "Answer the search query literally in the first 60 words, then spend the page on what the query does not say but the parent needs.",
    "Build the page around cost and value: what this costs in the UAE, what drives the number, what you get for it.",
    "Build the page around the decision: when this is the right call, when it is not, and what the alternative is.",
    "Build the page around the exam calendar: what to do when, counted backwards from the session.",
    "Build the page around what goes wrong: the common failure modes in this exact situation and how to avoid each.",
    "Build the page around the regulatory and school-system context a UAE parent has to work inside.",
  ],
  "city-keyword": [
    "Anchor every claim to this emirate's school system, calendar and regulator rather than generic UAE copy.",
    "Anchor the page on the subject or level in the URL: what it actually assesses, where students lose marks, what a session fixes.",
    "Anchor the page on the parent's timeline: where the student is now, where they need to be, what the weeks in between look like.",
    "Anchor the page on cost in AED and what changes the number in this emirate specifically.",
    "Anchor the page on the difference between this and the three nearest alternatives a parent is also considering.",
    "Anchor the page on the evidence: marked papers, IA drafts, grade movement, and what progress looks like week by week.",
  ],
  "area-keyword": [
    "Write it from the school run: which schools this neighbourhood feeds, what time the day ends, when a session realistically fits.",
    "Write it from the subject: the exact syllabus content, the mark-scheme traps, the past-paper work a student here needs.",
    "Write it from the parent's question - 'is there anyone near me who actually knows this syllabus' - and answer it honestly.",
    "Write it from the calendar: this term, this exam session, what the next eight weeks have to achieve.",
    "Write it from cost: what families in this area pay, what they get, and where the money is wasted.",
    "Write it from the comparison: this neighbourhood against the next one over, and why the answer is the same either way.",
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

const angleFor = (kind: UaeSeoPageKind, slug: string) => ANGLES[kind][hash(slug) % ANGLES[kind].length];

/* ------------------------------------------------------------------ */
/* Meta                                                                */
/* ------------------------------------------------------------------ */

function metaFor(path: string): UaeSeoPageMeta {
  const segments = path.split("/").filter(Boolean).slice(1); // drop "uae"
  const slug = segments.join("/");

  let kind: UaeSeoPageKind;
  let citySlug: UaeEmirateSlug | undefined;
  let areaSlug: string | undefined;
  let keyword = "";

  if (segments.length === 1) {
    if (isEmirate(segments[0])) {
      kind = "city";
      citySlug = segments[0];
    } else {
      kind = "uae-keyword";
      keyword = segments[0];
    }
  } else {
    const [first, second] = segments;
    if (!isEmirate(first)) throw new Error(`Unknown emirate in ${path}`);
    citySlug = first;
    if (AREAS_BY_CITY[first].includes(second)) {
      kind = "area";
      areaSlug = second;
    } else {
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

  const city = citySlug ? EMIRATES[citySlug].name : "the UAE";
  const area = areaSlug ? displayName(areaSlug) : undefined;
  const place = area ?? city;
  const regulator = citySlug ? `${EMIRATES[citySlug].regulatorShort} (${EMIRATES[citySlug].regulator})` : "KHDA, ADEK, SPEA and the federal Ministry of Education";

  const vocabSlug = keyword || areaSlug || citySlug || "";
  // A city or area hub is the entry point for both boards; only keyword pages pick a side.
  const board: UaeBoard = keyword ? boardOf(keyword) : "IB + IGCSE";
  const level = levelOf(keyword || slug);
  const subject = subjectOf(keyword);
  const syllabusCode = codeOf(keyword);

  const phrase = keyword ? humanise(keyword) : "";
  const primaryKeyword =
    kind === "city"
      ? `IB and IGCSE tutors in ${city}`
      : kind === "area"
        ? `IB and IGCSE tutors in ${area}`
        : `${phrase} in ${place}`;

  const h1 =
    kind === "city"
      ? `IB and IGCSE tutors for families in ${city}`
      : kind === "area"
        ? `IB and IGCSE tutors for ${area} families`
        : `${titleCasePhrase(phrase)} in ${place}`;

  const title = buildTitle(kind, phrase, place, board);
  const metaDescription = buildDescription(kind, phrase, place, city, board, subject, level);

  const parentPath =
    kind === "uae-keyword" || kind === "city"
      ? "/uae/"
      : kind === "area" || kind === "city-keyword"
        ? `/uae/${citySlug}/`
        : `/uae/${citySlug}/${areaSlug}/`;

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
    regulator,
    primaryKeyword,
    h1,
    title,
    metaDescription,
    parentPath,
    uniqueAngle: angleFor(kind, vocabSlug + "|" + slug),
    lastUpdated: LAST_UPDATED,
  };
}

function buildTitle(kind: UaeSeoPageKind, phrase: string, place: string, board: UaeBoard): string {
  if (kind === "city" || kind === "area") return `IB & IGCSE Tutors in ${place} | IB Gram`;
  const head = titleCasePhrase(phrase);
  const base = `${head} in ${place}`;
  // resolvePageTitle clips at 60 and re-adds the brand, so a long one degrades safely.
  return `${base} | IB Gram`;
}

function buildDescription(
  kind: UaeSeoPageKind,
  phrase: string,
  place: string,
  city: string,
  board: UaeBoard,
  subject: string,
  level: string,
): string {
  const boardWords = board === "IB + IGCSE" ? "IB and IGCSE" : board === "IGCSE" ? "IGCSE" : "IB";
  if (kind === "city") {
    return `One-to-one ${boardWords} tuition for families in ${place}, delivered live online and timed to Gulf Standard Time. Matched by syllabus, not by postcode.`;
  }
  if (kind === "area") {
    return `${boardWords} tutoring for ${place} families: one-to-one online lessons after the school run, matched to the exact syllabus your child sits.`;
  }
  const what = subject ? `${subject} ` : "";
  const lvl = level ? `${level.replace(/^the /, "")} ` : "";
  const head = titleCasePhrase(phrase);
  const d = `${head} in ${place}: one-to-one ${lvl}${what}support delivered live online, timed to Gulf Standard Time, with a free trial lesson first.`;
  return d.replace(/\s{2,}/g, " ");
}

/* ------------------------------------------------------------------ */
/* Briefs                                                              */
/* ------------------------------------------------------------------ */

function briefFor(meta: UaeSeoPageMeta, all: UaeSeoPageMeta[]): Record<string, unknown> {
  const emirate = meta.citySlug ? EMIRATES[meta.citySlug] : undefined;
  const cluster = meta.areaSlug ? clusterFor(meta.areaSlug) : undefined;

  // Siblings a writer must not read like: same kind, same place, different keyword.
  const siblings = all
    .filter((p) => p.slug !== meta.slug && p.kind === meta.kind && p.citySlug === meta.citySlug && p.areaSlug === meta.areaSlug)
    .slice(0, 12)
    .map((p) => ({ path: p.path, h1: p.h1, angle: p.uniqueAngle }));

  // Pages this one should link to: its parent, its children, and the same keyword elsewhere.
  const children = all.filter((p) => p.parentPath === meta.path).slice(0, 14).map((p) => ({ path: p.path, label: p.h1 }));
  const sameKeywordElsewhere = all
    .filter((p) => p.slug !== meta.slug && p.kind === meta.kind && p.primaryKeyword.split(" in ")[0] === meta.primaryKeyword.split(" in ")[0])
    .slice(0, 8)
    .map((p) => ({ path: p.path, label: p.h1 }));

  return {
    ...meta,
    emirate: emirate
      ? {
          name: emirate.name,
          regulator: emirate.regulator,
          regulatorShort: emirate.regulatorShort,
          note: emirate.note,
          geo: emirate.geo,
        }
      : null,
    areaCluster: cluster ? { label: cluster.label, nearbyAreas: cluster.siblings.slice(0, 10).map(displayName) } : null,
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
 * A literal array of 2,654 objects makes tsc widen every string field into a union of 2,654
 * literal types and it gives up with TS2590 ("union type that is too complex to represent").
 * A JSON import is typed once, at the assertion, and costs tsc nothing. Same module shape to
 * every consumer; same approach the Mumbai set uses.
 */
function emit(metas: UaeSeoPageMeta[]): string {
  return `// GENERATED by scripts/uae-seo/plan.ts from "Use Sitemap to create/sitemap-uae.xml".
// Do not edit by hand - re-run the script instead.
//
// ${metas.length} pages: every URL in the UAE sitemap under /uae/ except the /blog/uae/ posts
// and /uae/ itself, which is the hand-written country page in src/lib/country-seo.
//
// The rows live in ./pages-data.json. Inlining them as a TS array literal makes tsc build a
// 2,654-member union per string field and fail with TS2590.
import type { UaeSeoPageMeta } from "./types";
import rows from "./pages-data.json";

export const uaeSeoPagesMeta = rows as unknown as UaeSeoPageMeta[];
`;
}

function report(metas: UaeSeoPageMeta[]): void {
  const byKind = new Map<string, number>();
  for (const m of metas) byKind.set(m.kind, (byKind.get(m.kind) ?? 0) + 1);
  console.log(`${metas.length} pages planned\n`);
  for (const [kind, n] of [...byKind].sort((a, b) => b[1] - a[1])) console.log(`  ${kind.padEnd(14)} ${n}`);

  const byCity = new Map<string, number>();
  for (const m of metas) byCity.set(m.city, (byCity.get(m.city) ?? 0) + 1);
  console.log("");
  for (const [city, n] of [...byCity].sort((a, b) => b[1] - a[1])) console.log(`  ${city.padEnd(16)} ${n}`);

  const titles = new Map<string, string[]>();
  for (const m of metas) titles.set(m.title, [...(titles.get(m.title) ?? []), m.path]);
  const dupes = [...titles].filter(([, paths]) => paths.length > 1);
  console.log(`\n  duplicate titles: ${dupes.length}`);
  for (const [t, paths] of dupes.slice(0, 10)) console.log(`    ${t}  ->  ${paths.join(", ")}`);
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
    // --only takes a comma-separated list of slugs, or a single kind or city slug.
    const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
    const picks = only ? new Set(only.split(",").map((s) => s.trim()).filter(Boolean)) : null;
    const wanted = picks
      ? metas.filter((m) => picks.has(m.slug) || picks.has(m.kind) || (m.citySlug !== undefined && picks.has(m.citySlug)))
      : metas;
    for (const m of wanted) {
      writeFileSync(join(BRIEFS, `${m.slug.replace(/\//g, "__")}.json`), JSON.stringify(briefFor(m, metas), null, 1), "utf8");
    }
    console.log(`wrote ${wanted.length} briefs to ${BRIEFS}`);
    return;
  }

  writeFileSync(OUT.replace(/\.ts$/, ".json"), `${JSON.stringify(metas, null, 1)}\n`, "utf8");
  writeFileSync(OUT, emit(metas), "utf8");
  console.log(`wrote ${metas.length} rows to ${OUT.replace(/\.ts$/, ".json")}`);
  report(metas);
}

main();
