/**
 * Quality gate and compiler for the /uae/ pages.
 *
 *   npx tsx scripts/uae-seo/build.ts --check <slug>    gate one page (what writers run)
 *   npx tsx scripts/uae-seo/build.ts --check-all       gate everything in agent-out/
 *   npx tsx scripts/uae-seo/build.ts --compile         shard to src/lib/uae-seo/pages/
 *
 * A slug with a slash is the path under /uae/, e.g. "dubai/ib-tutor". On disk the slash
 * becomes "__" so every page is one flat file.
 *
 * Writers put prose in tmp/uae-seo/agent-out/<slug>.json in exactly the renderer's shape, so
 * nothing is transformed on the way in - what passes the gate is what ships.
 *
 * The banned-phrase, claim and similarity checks are the ones already proven on the Gurgaon
 * and Mumbai corpora. Reusing them keeps one standard across every city rather than three
 * drifting ones.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { BANNED, findClaims, similarity, sketch } from "../gurgaon-500/compile";
import { uaeSeoPagesMeta } from "../../src/lib/uae-seo/pages-data";
import type { UaeSeoContent, UaeSeoPageMeta } from "../../src/lib/uae-seo/types";

const ROOT = join(import.meta.dirname, "..", "..");
const TMP = join(ROOT, "tmp", "uae-seo");
const BRIEFS = join(TMP, "briefs");
const AGENT_OUT = join(TMP, "agent-out");
const OUT_PAGES = join(ROOT, "src", "lib", "uae-seo", "pages");

const MIN_WORDS = 4500;
const MIN_FAQS = 14;
const MIN_TABLES = 3;
const MIN_SECTIONS = 8;
const MAX_SIBLING_SIMILARITY = 0.28;
const MAX_CORPUS_SIMILARITY = 0.38;
const SHARD_SIZE = 60;

const fileKey = (slug: string) => slug.replace(/\//g, "__");
const metaBySlug = new Map(uaeSeoPagesMeta.map((m) => [m.slug, m]));

/** Phrases that read as agency filler, on top of the shared BANNED list. */
const EXTRA_BANNED = [
  "whether you're", "academic journey", "learning journey", "empower", "unlock", "tailored to your",
  "we understand that", "top-notch", "second to none", "one-stop", "hassle-free", "peace of mind",
  "bustling", "vibrant city", "city of gold", "nestled", "sands of time", "desert oasis",
  "look no further", "dream destination", "jewel of the", "melting pot", "fast-paced world",
  "in this article", "this blog post", "as a parent, you",
];

/**
 * Scale and ranking claims findClaims() does not cover. Non-global so .test() carries no
 * lastIndex state between calls.
 */
const SUPERLATIVES: Array<[RegExp, string]> = [
  [/(number one|no\.?\s?1\b|#1\b|top-ranked|top-rated|highest-rated|best in (?:dubai|the uae|abu dhabi))/i, "superlative ranking claim"],
  [/\b(IB Gram|we)\s+(has|have|offers?|provides?|are)\s+the\s+(best|leading|largest|top)\b/i, "superlative claim about IB Gram"],
  [/\b(guarantee[sd]?|guaranteed)\s+(a\s+)?(grade|score|7|a\*|improvement|results?)/i, "grade guarantee"],
  [/\b100%\s+(success|pass|satisfaction)\b/i, "100% success claim"],
  // findClaims catches "500+ tutors" and "90% of our students" but not the vaguer scale
  // claims, which are just as unverifiable and read as filler.
  [
    /\b(thousands|hundreds|dozens)\s+of\s+(families|students|parents|tutors|schools)\b(?!\s+(?:in the UAE study|sit|take|enrol))/i,
    "unverifiable scale claim",
  ],
  [/\b(trusted|chosen|used)\s+by\s+(thousands|hundreds|\d[\d,]*\+?)\b/i, "unverifiable social-proof claim"],
];

/**
 * UAE delivery is online. Every other country page on the site states this, so a UAE page that
 * promises a tutor at the door contradicts 48 live pages and promises something we do not sell.
 * The keyword itself is fine in a title or an H1 - it is what parents search - but a sentence
 * that commits to sending someone to a UAE address is not.
 */
const IN_PERSON_PROMISES: Array<[RegExp, string]> = [
  [/\b(our|we|ib gram'?s?)\s+tutors?\s+(will\s+)?(come|travel|visit|arrive|drive)\b/i, "promises a tutor travels to the student"],
  [/\b(we|ib gram)\s+(send|place|dispatch|arrange)s?\s+(a\s+)?tutors?\s+(to|into|at)\s+your\b/i, "promises a tutor is sent to the home"],
  [/\bat\s+your\s+(home|door|villa|apartment|residence)\b(?![^.]*\bonline\b)/i, "promises attendance at the home without naming the online format"],
  [/\b(face[- ]to[- ]face|in[- ]person)\s+(lessons?|tuition|sessions?|tutoring)\s+(in|across|throughout)\s+(dubai|abu dhabi|sharjah|ajman|the uae|fujairah|al ain)/i, "promises in-person lessons inside the UAE"],
  [/\bhome\s+visits?\s+(in|across|throughout)\s+(dubai|abu dhabi|sharjah|the uae)/i, "promises home visits inside the UAE"],
];

/** The page must say somewhere, plainly, how lessons are actually delivered. */
const DELIVERY_DISCLOSURE = /\b(online|live video|over video|remote(ly)?|video lesson|screen[- ]shar)/i;

/**
 * Claims that are legally or academically dangerous rather than merely overcooked.
 *
 * Each comes from a real exposure found in the competitor corpus or from a rule a UAE
 * regulator enforces - accreditation we do not hold, a school presented as a partner, or an
 * offer to produce work that must be the student's own. Documenting these in the writer guide
 * was not enough: at 2,654 pages, anything not gated eventually ships.
 */
const DANGEROUS_CLAIMS: Array<[RegExp, string]> = [
  [
    /\b(?:KHDA|ADEK|SPEA|MoHRE|Ministry of Education|IB|IBO|Cambridge|Pearson|Edexcel)[- ]?(approved|accredited|certified|licensed|authorised|authorized|registered|partner(ed|ship)?|endorsed)\b/i,
    "claims a regulator or board accreditation IB Gram does not hold",
  ],
  [
    /\b(we|our tutors?|IB Gram)\s+(are|is|am)\s+(an?\s+)?(official|approved|accredited|authorised|authorized|licensed)\b/i,
    "claims official status",
  ],
  [
    /\b(write|writing|complete|completing|do|doing|produce|producing|draft(ing)?|ghost[- ]?writ)\s+(your|the|their|a|his|her)\s+(IA|Internal Assessment|EE|Extended Essay|TOK essay|coursework|assignment|exploration|Personal Project)/i,
    "offers to produce assessed work - academic malpractice under IB rules",
  ],
  [
    /\b(IA|Internal Assessment|Extended Essay|TOK essay|coursework)\s+(writing|completion|ghostwriting)\s+(service|help)\b/i,
    "offers an assessed-work writing service",
  ],
  [
    /\b(?:partner(?:ed)?|affiliated|in partnership|work(?:ing)? (?:with|alongside))\s+(?:with\s+)?(?:GEMS|Taaleem|Aldar|Nord Anglia|Repton|Dubai College|Jumeirah College)/i,
    "presents a named school or group as a partner",
  ],
  [
    /\b(our|we have an?|visit our)\s+(office|centre|center|campus|branch)\s+(in|at)\s+(dubai|abu dhabi|sharjah|the uae)/i,
    "states a UAE office IB Gram does not occupy",
  ],
  [
    /\b(money[- ]back|refund)\s+(guarantee|if)\b/i,
    "guarantees a refund tied to an outcome",
  ],
];

/** Lowercased, punctuation-stripped question text - the form two pages would collide on. */
const normaliseQuestion = (q: string) => q.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

interface Issue {
  where: string;
  problem: string;
}

/* ------------------------------------------------------------------ */
/* Reading a written page                                              */
/* ------------------------------------------------------------------ */

function prose(c: UaeSeoContent): string {
  const parts: string[] = [
    c.heroSubtitle,
    c.tutorsIntro,
    ...c.heroTrustPoints,
    ...c.heroStats.map((s) => `${s.value} ${s.label}`),
    c.intro.heading,
    ...c.intro.paragraphs,
    ...(c.intro.bullets ?? []),
    c.programmesIntro,
    ...c.programmes.flatMap((p) => [p.name, p.ageRange, p.description, p.countryNote]),
    c.subjectsIntro,
    ...c.subjects.flatMap((s) => [s.name, s.levels, s.description]),
    c.igcseSubjectsIntro ?? "",
    ...(c.igcseSubjects ?? []).flatMap((s) => [s.name, s.levels, s.description]),
    c.regionsIntro,
    ...c.regions.flatMap((r) => [r.name, r.note]),
    ...c.schoolClusters.flatMap((s) => [s.city, s.note, ...s.schools]),
    c.schoolDisclaimer,
    c.modesIntro,
    ...c.modes.flatMap((m) => [m.title, m.description, ...m.bullets]),
    ...c.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.bullets ?? []),
      ...(s.table ? [s.table.caption, ...s.table.columns, ...s.table.rows.flat()] : []),
    ]),
    ...c.process.flatMap((p) => [p.title, p.description]),
    ...c.whyPoints.flatMap((w) => [w.title, w.description]),
    ...c.faqs.flatMap((f) => [f.question, f.answer]),
    c.closingHeading,
    c.closingBody,
  ];
  return parts.filter(Boolean).join("\n\n");
}

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

export function keywordRe(keyword: string, flags = "gi"): RegExp {
  return new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+"), flags);
}

function bannedRe(phrase: string): RegExp {
  return new RegExp(`(^|[^a-z])${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
}

/* ------------------------------------------------------------------ */
/* Checks                                                              */
/* ------------------------------------------------------------------ */

function check(meta: UaeSeoPageMeta, c: UaeSeoContent): Issue[] {
  const issues: Issue[] = [];
  const add = (where: string, problem: string) => issues.push({ where, problem });
  const body = prose(c);
  const wordCount = words(body);

  // ---- shape ----
  if (c.slug !== meta.slug) add("slug", `is "${c.slug}", must be "${meta.slug}"`);
  if (wordCount < MIN_WORDS) add("length", `${wordCount} words, needs ${MIN_WORDS}+ (short by ${MIN_WORDS - wordCount})`);
  if (c.heroTrustPoints.length !== 4) add("heroTrustPoints", `${c.heroTrustPoints.length} points, needs exactly 4`);
  if (c.heroStats.length !== 4) add("heroStats", `${c.heroStats.length} stats, needs exactly 4`);
  if (c.intro.paragraphs.length < 4) add("intro.paragraphs", `${c.intro.paragraphs.length}, needs 4-6`);
  if (words(c.intro.paragraphs.join(" ")) < 450) add("intro", `${words(c.intro.paragraphs.join(" "))} words, needs 450+`);
  if (c.programmes.length < 3) add("programmes", `${c.programmes.length}, needs 3-5`);
  if (c.subjects.length < 8) add("subjects", `${c.subjects.length}, needs 8+`);
  if (c.regions.length < 6) add("regions", `${c.regions.length}, needs 6+`);
  if (c.schoolClusters.length < 2) add("schoolClusters", `${c.schoolClusters.length}, needs 2+`);
  if (c.modes.length < 3) add("modes", `${c.modes.length}, needs 3-4`);
  if (c.process.length < 4) add("process", `${c.process.length}, needs 4-6`);
  if (c.whyPoints.length < 5) add("whyPoints", `${c.whyPoints.length}, needs 5-6`);
  if (c.sections.length < MIN_SECTIONS) add("sections", `${c.sections.length}, needs ${MIN_SECTIONS}+`);
  if (c.faqs.length < MIN_FAQS) add("faqs", `${c.faqs.length}, needs ${MIN_FAQS}+`);
  if (c.localKeywords.length < 8) add("localKeywords", `${c.localKeywords.length}, needs 8-14`);

  const tables = c.sections.filter((s) => s.table).length;
  if (tables < MIN_TABLES) add("sections[].table", `${tables} tables, needs ${MIN_TABLES}+`);

  // ---- per-block depth ----
  c.sections.forEach((s, i) => {
    const n = words(s.paragraphs.join(" "));
    if (n < 240) add(`sections[${i}] "${s.heading}"`, `${n} words, needs 240+`);
    if (s.paragraphs.length < 3) add(`sections[${i}] "${s.heading}"`, `${s.paragraphs.length} paragraphs, needs 3+`);
    if (s.table) {
      if (s.table.columns.length < 3) add(`sections[${i}].table`, `${s.table.columns.length} columns, needs 3+`);
      if (s.table.rows.length < 4) add(`sections[${i}].table`, `${s.table.rows.length} rows, needs 4+`);
      for (const [r, row] of s.table.rows.entries()) {
        if (row.length !== s.table.columns.length) add(`sections[${i}].table row ${r}`, `${row.length} cells, header has ${s.table.columns.length}`);
      }
    }
  });

  c.faqs.forEach((f, i) => {
    const n = words(f.answer);
    if (n < 60) add(`faqs[${i}] "${f.question.slice(0, 48)}"`, `answer is ${n} words, needs 60-140`);
    if (n > 170) add(`faqs[${i}] "${f.question.slice(0, 48)}"`, `answer is ${n} words, trim to 140`);
    if (!f.question.trim().endsWith("?")) add(`faqs[${i}]`, "question does not end with a question mark");
  });

  const heroWords = words(c.heroSubtitle);
  if (heroWords < 45 || heroWords > 110) add("heroSubtitle", `${heroWords} words, needs 45-110`);

  // ---- keyword placement ----
  const primary = meta.primaryKeyword;
  const h1 = c.h1 ?? meta.h1;
  const head = primary.split(" in ")[0];
  if (!keywordRe(head, "i").test(h1)) add("h1", `does not contain "${head}"`);
  const firstChunk = c.heroSubtitle.split(/\s+/).slice(0, 70).join(" ");
  if (!keywordRe(head, "i").test(firstChunk)) add("heroSubtitle", `"${head}" must appear in the first 70 words`);
  const place = meta.area ?? meta.city;
  if (place !== "the UAE" && !keywordRe(place, "i").test(c.heroSubtitle)) add("heroSubtitle", `does not name ${place}`);

  const title = c.title ?? meta.title;
  if (title.length > 72) add("title", `${title.length} chars, keep under 72`);
  const desc = c.metaDescription ?? meta.metaDescription;
  if (desc.length < 120 || desc.length > 165) add("metaDescription", `${desc.length} chars, needs 120-165`);

  // Over-stuffing reads as spam and is the one on-page signal that can actively hurt.
  const density = (body.match(keywordRe(head)) ?? []).length / Math.max(1, wordCount / 1000);
  if (density > 9) add("keyword density", `"${head}" appears ${Math.round(density)}x per 1,000 words; keep under 9`);

  // ---- delivery honesty ----
  if (!DELIVERY_DISCLOSURE.test(body)) add("delivery", "the page never says lessons are delivered online");
  for (const [re, label] of IN_PERSON_PROMISES) {
    const m = body.match(re);
    if (m) add("delivery", `${label}: "${m[0].trim()}"`);
  }

  // ---- tone and claims ----
  for (const phrase of [...BANNED, ...EXTRA_BANNED]) {
    if (bannedRe(phrase).test(body)) add("banned phrase", `"${phrase}"`);
  }
  for (const [re, label] of SUPERLATIVES) {
    const m = body.match(re);
    if (m) add("claim", `${label}: "${m[0].trim()}"`);
  }
  for (const [re, label] of DANGEROUS_CLAIMS) {
    const m = body.match(re);
    if (m) add("legal", `${label}: "${m[0].trim()}"`);
  }
  for (const claim of findClaims(body)) add("claim", claim);

  // ---- internal repetition ----
  const headings = [c.intro.heading, ...c.sections.map((s) => s.heading)];
  const dupeHeading = headings.find((h, i) => headings.indexOf(h) !== i);
  if (dupeHeading) add("sections", `duplicate heading "${dupeHeading}"`);
  // Digits are significant here: "What is Paper 1 worth?" and "What is Paper 2 worth?" are
  // different questions, and stripping digits collapsed them into a false duplicate.
  const questions = c.faqs.map((f) => normaliseQuestion(f.question));
  const dupeQ = questions.find((q, i) => questions.indexOf(q) !== i);
  if (dupeQ) add("faqs", `duplicate question "${dupeQ}"`);

  // A paragraph repeated verbatim inside one page is the cheapest way to fake a word count.
  const paras = [
    ...c.intro.paragraphs,
    ...c.sections.flatMap((s) => s.paragraphs),
  ].map((p) => p.trim().toLowerCase());
  const dupePara = paras.find((p, i) => p.length > 120 && paras.indexOf(p) !== i);
  if (dupePara) add("sections", `a paragraph is repeated verbatim: "${dupePara.slice(0, 70)}..."`);

  return issues;
}

/* ------------------------------------------------------------------ */
/* Similarity                                                          */
/* ------------------------------------------------------------------ */

function writtenSlugs(): string[] {
  if (!existsSync(AGENT_OUT)) return [];
  return readdirSync(AGENT_OUT)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.slice(0, -5).replace(/__/g, "/"));
}

const sketchCache = new Map<string, number[] | null>();
const questionCache = new Map<string, string[]>();


function loadWritten(slug: string): UaeSeoContent | null {
  const file = join(AGENT_OUT, `${fileKey(slug)}.json`);
  if (!existsSync(file)) return null;
  try {
    return JSON.parse(readFileSync(file, "utf8")) as UaeSeoContent;
  } catch {
    return null;
  }
}

function sketchOf(slug: string): number[] | null {
  if (sketchCache.has(slug)) return sketchCache.get(slug)!;
  const content = loadWritten(slug);
  const result = content ? sketch(prose(content)) : null;
  sketchCache.set(slug, result);
  questionCache.set(slug, content ? content.faqs.map((f) => normaliseQuestion(f.question)) : []);
  return result;
}

function questionsOf(slug: string): string[] {
  if (!questionCache.has(slug)) sketchOf(slug);
  return questionCache.get(slug) ?? [];
}

/**
 * Siblings get a tighter threshold than the corpus at large, because two pages for the same
 * neighbourhood are the ones a reader - and a duplicate-content classifier - would compare.
 */
function similarityIssues(meta: UaeSeoPageMeta, c: UaeSeoContent): Issue[] {
  const mine = sketch(prose(c));
  const myQuestions = c.faqs.map((f) => normaliseQuestion(f.question));
  const issues: Issue[] = [];
  // An FAQ reused verbatim across pages is the most visible kind of duplication there is:
  // it lands in the FAQPage markup of both, so Google sees the same rich result twice.
  const reused = new Map<string, string>();
  for (const slug of writtenSlugs()) {
    if (slug === meta.slug) continue;
    for (const q of questionsOf(slug)) {
      if (myQuestions.includes(q) && !reused.has(q)) reused.set(q, slug);
    }
  }
  for (const [q, slug] of [...reused].slice(0, 4)) {
    issues.push({ where: "faqs", problem: `question already used on /uae/${slug}/: "${q.slice(0, 64)}" - ask a different one` });
  }

  for (const slug of writtenSlugs()) {
    if (slug === meta.slug) continue;
    const other = sketchOf(slug);
    if (!other) continue;
    const score = similarity(mine, other);
    const otherMeta = metaBySlug.get(slug);
    const isSibling =
      otherMeta !== undefined &&
      otherMeta.kind === meta.kind &&
      (otherMeta.areaSlug === meta.areaSlug || otherMeta.citySlug === meta.citySlug);
    const limit = isSibling ? MAX_SIBLING_SIMILARITY : MAX_CORPUS_SIMILARITY;
    if (score > limit) {
      issues.push({
        where: "similarity",
        problem: `${Math.round(score * 100)}% similar to /uae/${slug}/ (limit ${Math.round(limit * 100)}%) - rewrite, do not reword`,
      });
    }
  }
  return issues.slice(0, 8);
}

/* ------------------------------------------------------------------ */
/* Entry points                                                        */
/* ------------------------------------------------------------------ */

/**
 * Every exit goes through one report block. An early `return` that skipped the printing meant
 * a writer with a missing or unparseable file saw nothing at all and had to guess.
 */
function checkOne(slug: string, quiet = false): Issue[] {
  let issues: Issue[];
  let summary = "";

  const meta = metaBySlug.get(slug);
  const file = join(AGENT_OUT, `${fileKey(slug)}.json`);

  if (!meta) {
    issues = [{ where: "slug", problem: `"${slug}" is not in the plan. Use the slug from your brief, e.g. "dubai/ib-tutor".` }];
  } else if (!existsSync(file)) {
    issues = [{ where: "file", problem: `missing ${file} - write your page there first` }];
  } else {
    let content: UaeSeoContent | null = null;
    try {
      content = JSON.parse(readFileSync(file, "utf8")) as UaeSeoContent;
    } catch (error) {
      issues = [{ where: "json", problem: `will not parse: ${(error as Error).message}` }];
    }
    if (content) {
      issues = [...check(meta, content), ...similarityIssues(meta, content)];
      summary = `${words(prose(content))} words, ${content.faqs.length} FAQs, ${content.sections.filter((s) => s.table).length} tables`;
    } else {
      issues ??= [{ where: "json", problem: "will not parse" }];
    }
  }

  if (!quiet) {
    if (issues.length === 0) {
      console.log(`PASS  ${slug}  (${summary})`);
    } else {
      console.log(`FAIL  ${slug}  (${issues.length} problem${issues.length === 1 ? "" : "s"}${summary ? `; ${summary}` : ""})\n`);
      for (const issue of issues) console.log(`  ${issue.where}: ${issue.problem}`);
      console.log("");
    }
  }
  return issues;
}

function checkAll(): void {
  const slugs = writtenSlugs().sort();
  let failed = 0;
  for (const slug of slugs) {
    const issues = checkOne(slug, true);
    if (issues.length > 0) {
      failed += 1;
      console.log(`FAIL  ${slug}`);
      for (const issue of issues.slice(0, 6)) console.log(`        ${issue.where}: ${issue.problem}`);
    }
  }
  console.log(`\n${slugs.length - failed}/${slugs.length} pass`);
  if (failed > 0) process.exitCode = 1;
}

function compile(): void {
  const slugs = writtenSlugs().sort();
  const passing: Array<[string, UaeSeoContent]> = [];
  for (const slug of slugs) {
    if (checkOne(slug, true).length > 0) {
      console.log(`skip (not passing): ${slug}`);
      continue;
    }
    passing.push([slug, JSON.parse(readFileSync(join(AGENT_OUT, `${fileKey(slug)}.json`), "utf8")) as UaeSeoContent]);
  }

  mkdirSync(OUT_PAGES, { recursive: true });
  for (const existing of readdirSync(OUT_PAGES).filter((f) => f.startsWith("shard-"))) {
    writeFileSync(join(OUT_PAGES, existing), "{}\n", "utf8");
  }

  const shards: Array<Array<[string, UaeSeoContent]>> = [];
  for (let i = 0; i < passing.length; i += SHARD_SIZE) shards.push(passing.slice(i, i + SHARD_SIZE));

  shards.forEach((shard, i) => {
    writeFileSync(
      join(OUT_PAGES, `shard-${String(i).padStart(3, "0")}.json`),
      `${JSON.stringify(Object.fromEntries(shard), null, 1)}\n`,
      "utf8",
    );
  });

  const imports = shards.map((_, i) => `import shard${i} from "./shard-${String(i).padStart(3, "0")}.json";`).join("\n");
  const spreads = shards.map((_, i) => `  ...(shard${i} as unknown as Record<string, UaeSeoContent>),`).join("\n");
  writeFileSync(
    join(OUT_PAGES, "index.ts"),
    `// GENERATED by scripts/uae-seo/build.ts --compile. Do not edit by hand.
// Statically imports the written-content shards so Next can bundle them. Content lands
// wave by wave; a slug absent here is planned but unwritten and its route 404s rather
// than serving a thin page.
import type { UaeSeoContent } from "../types";
${imports}

export const uaeSeoContentBySlug: Record<string, UaeSeoContent> = {
${spreads}
};
`,
    "utf8",
  );

  console.log(`compiled ${passing.length} pages into ${shards.length} shard(s)`);
}

function main(): void {
  if (!existsSync(TMP)) mkdirSync(TMP, { recursive: true });
  if (!existsSync(AGENT_OUT)) mkdirSync(AGENT_OUT, { recursive: true });

  const args = process.argv.slice(2);
  if (args.includes("--compile")) return compile();
  if (args.includes("--check-all")) return checkAll();

  const i = args.indexOf("--check");
  if (i >= 0 && args[i + 1]) {
    const issues = checkOne(args[i + 1]);
    if (issues.length > 0) process.exitCode = 1;
    return;
  }

  console.log("usage: build.ts --check <slug> | --check-all | --compile");
  process.exitCode = 1;
}

main();
