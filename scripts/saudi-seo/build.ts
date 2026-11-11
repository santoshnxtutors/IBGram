/**
 * Quality gate and compiler for the /saudi-arabia/ pages.
 *
 *   npx tsx scripts/saudi-seo/build.ts --check <slug>    gate one page (what writers run)
 *   npx tsx scripts/saudi-seo/build.ts --check-all       gate everything in agent-out/
 *   npx tsx scripts/saudi-seo/build.ts --compile         shard to src/lib/saudi-seo/pages/
 *
 * A slug with a slash is the path under /saudi-arabia/, e.g. "riyadh/ib-tutor". On disk the
 * slash becomes "__" so every page is one flat file.
 *
 * Writers put prose in tmp/saudi-seo/agent-out/<slug>.json in exactly the renderer's shape, so
 * nothing is transformed on the way in - what passes the gate is what ships.
 *
 * The banned-phrase, claim and similarity checks are the ones already proven on the Gurgaon,
 * Mumbai and UAE corpora. Reusing them keeps one standard across every market.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { BANNED, findClaims, similarity, sketch } from "../gurgaon-500/compile";
import { saudiSeoPagesMeta } from "../../src/lib/saudi-seo/pages-data";
import type { SaudiSeoContent, SaudiSeoPageMeta } from "../../src/lib/saudi-seo/types";

const ROOT = join(import.meta.dirname, "..", "..");
const TMP = join(ROOT, "tmp", "saudi-seo");
const AGENT_OUT = join(TMP, "agent-out");
const CACHE_FILE = join(TMP, ".sketch-cache.json");
const OUT_PAGES = join(ROOT, "src", "lib", "saudi-seo", "pages");

const MIN_WORDS = 4500;
/**
 * Upper bound added 10 Nov 2026 at the user's instruction: pages were landing at ~9,400 words,
 * roughly double the brief. Depth past this point costs writer time per page without buying
 * more coverage - the competitor ceiling in this market is ~2,300 words, so 5,200 already wins
 * comfortably.
 *
 * The 74 pages written before the cap keep their length rather than being retro-failed and
 * rewritten; `pre-cap-slugs.json` is that frozen list. Everything written from now on is capped.
 */
const MAX_WORDS = 5200;
const PRE_CAP: Set<string> = new Set(
  JSON.parse(readFileSync(join(import.meta.dirname, "pre-cap-slugs.json"), "utf8")) as string[],
);
const MIN_FAQS = 14;

/**
 * One data table is required where a comparison is the reason the page exists - the city hubs,
 * the district pages and the Kingdom-wide keyword pages. A parent lands on those to weigh
 * options, and the Saudi competitor set is almost entirely vendor marketing with no tables at
 * all, so even one is a differentiator.
 *
 * The long-tail city- and district-keyword pages answer one narrow question where a table is
 * often filler, so tables are welcome but not demanded there. This is a floor, not a cap.
 */
const MIN_TABLES_BY_KIND: Record<SaudiSeoPageMeta["kind"], number> = {
  city: 2,
  area: 1,
  "saudi-keyword": 1,
  "city-keyword": 0,
  "area-keyword": 0,
};
const MIN_SECTIONS = 7;
const MAX_SIBLING_SIMILARITY = 0.26;
const MAX_CORPUS_SIMILARITY = 0.36;
const SHARD_SIZE = 60;

const fileKey = (slug: string) => slug.replace(/\//g, "__");
const metaBySlug = new Map(saudiSeoPagesMeta.map((m) => [m.slug, m]));

/** Phrases that read as agency filler, on top of the shared BANNED list. */
const EXTRA_BANNED = [
  "whether you're", "academic journey", "learning journey", "empower", "unlock", "tailored to your",
  "we understand that", "top-notch", "second to none", "one-stop", "hassle-free", "peace of mind",
  "bustling", "vibrant city", "nestled", "sands of time", "desert oasis", "jewel of the",
  "look no further", "dream destination", "melting pot", "fast-paced world", "land of opportunity",
  "in this article", "this blog post", "as a parent, you", "in today's world", "needless to say",
  "the sky is the limit", "game-changer", "cutting-edge", "world-class", "state-of-the-art",
];

/**
 * Scale and ranking claims findClaims() does not cover. Non-global so .test() carries no
 * lastIndex state between calls.
 */
const SUPERLATIVES: Array<[RegExp, string]> = [
  [
    /(number one|no\.?\s?1\b|#1\b|top-ranked|top-rated|highest-rated|best in (?:riyadh|jeddah|saudi arabia|the kingdom|dammam|khobar))/i,
    "superlative ranking claim",
  ],
  [/\b(IB Gram|we)\s+(has|have|offers?|provides?|are)\s+the\s+(best|leading|largest|top)\b/i, "superlative claim about IB Gram"],
  [/\b(guarantee[sd]?|guaranteed)\s+(a\s+)?(grade|score|7|a\*|improvement|results?)/i, "grade guarantee"],
  [/\b100%\s+(success|pass|satisfaction)\b/i, "100% success claim"],
  [
    // The adjective run matters: without it "dozens of IB World Schools" slipped straight past a
    // rule that caught "dozens of schools", and two writers resolved the same RESEARCH.md
    // instruction in opposite ways. Any count of IB World Schools in the Kingdom is unverified
    // here - the two directories found disagree 43 vs 28 and neither is dated.
    /\b(thousands|hundreds|dozens)\s+of\s+(?:[A-Za-z]+\s+){0,3}(families|students|parents|tutors|teachers|schools)\b(?!\s+(?:in saudi arabia study|in the kingdom study|sit|take|enrol))/i,
    "unverifiable scale claim",
  ],
  [/\b(trusted|chosen|used)\s+by\s+(thousands|hundreds|\d[\d,]*\+?)\b/i, "unverifiable social-proof claim"],
];

/**
 * Tutoring for Saudi families is delivered online. Every other country page on the site states
 * this, so a Saudi page that promises a tutor at the door contradicts 48 live pages and
 * promises something we do not sell.
 *
 * The keyword itself is fine in a title or an H1 - it is what parents search - but a sentence
 * that commits to sending someone to a Saudi address is not.
 */
const IN_PERSON_PROMISES: Array<[RegExp, string]> = [
  [/\b(our|we|ib gram'?s?)\s+tutors?\s+(will\s+)?(come|travel|visit|arrive|drive)\b/i, "promises a tutor travels to the student"],
  [/\b(we|ib gram)\s+(send|place|dispatch|arrange)s?\s+(a\s+)?tutors?\s+(to|into|at)\s+your\b/i, "promises a tutor is sent to the home"],
  [/\bat\s+your\s+(home|door|villa|apartment|compound|residence)\b(?![^.]*\bonline\b)/i, "promises attendance at the home without naming the online format"],
  [
    /\b(face[- ]to[- ]face|in[- ]person)\s+(lessons?|tuition|sessions?|tutoring)\s+(in|across|throughout)\s+(riyadh|jeddah|dammam|khobar|dhahran|saudi arabia|the kingdom)/i,
    "promises in-person lessons inside Saudi Arabia",
  ],
  [/\bhome\s+visits?\s+(in|across|throughout)\s+(riyadh|jeddah|dammam|khobar|saudi arabia|the kingdom)/i, "promises home visits inside Saudi Arabia"],
];

/** The page must say somewhere, plainly, how lessons are actually delivered. */
const DELIVERY_DISCLOSURE = /\b(online|live video|over video|remote(ly)?|video lesson|screen[- ]shar)/i;

/**
 * True when the sentence containing `index` negates what it says.
 *
 * The in-person checks look for phrases like "home visits in Riyadh", but the sentence every
 * page SHOULD contain - "IB Gram does not sell in-home visits in Saudi Arabia; home visits are
 * a service we offer only in India" - contains that phrase too. Without this, writing the rule
 * correctly fails the gate, which teaches writers to avoid saying it at all. That is the
 * opposite of what the rule is for.
 */
function isNegated(body: string, index: number): boolean {
  const boundary = (from: number, dir: "back" | "fwd") => {
    const candidates =
      dir === "back"
        ? [body.lastIndexOf(".", from), body.lastIndexOf("\n", from), body.lastIndexOf("?", from), body.lastIndexOf("!", from)]
        : [body.indexOf(".", from), body.indexOf("\n", from), body.indexOf("?", from), body.indexOf("!", from)].filter((i) => i !== -1);
    if (dir === "back") return Math.max(0, Math.max(...candidates) + 1);
    return candidates.length === 0 ? body.length : Math.min(...candidates) + 1;
  };
  const sentence = body.slice(boundary(index, "back"), boundary(index, "fwd"));
  // "nobody", "none" and "nothing" are negators that `\bno\b` cannot see - there is no word
  // boundary inside "nobody". A writer who put "Nobody can promise an admission outcome" on the
  // page - which is exactly the sentence the admission-promise rule WANTS - was failed by it and
  // had to reword. A gate that invents work is worse than no gate.
  return /\b(nobody|no\s?one|none|nothing|not|n'?t|never|no|nor|neither|cannot|without|rather than|instead of|only in (?:our )?India|india-only|unlike|declines?|decline)\b/i.test(
    sentence,
  );
}

/** The sentence containing `index`, bounded by full stops and paragraph breaks. */
function sentenceAround(body: string, index: number): string {
  const starts = [body.lastIndexOf(".", index), body.lastIndexOf("\n", index)];
  const from = Math.max(0, Math.max(...starts) + 1);
  const ends = [body.indexOf(".", index), body.indexOf("\n", index)].filter((i) => i !== -1);
  return body.slice(from, ends.length ? Math.min(...ends) : body.length);
}

/**
 * True when the sentence at `index` is reporting what the in-home market charges rather than
 * offering it. "In-home visits in Riyadh are quoted at SAR 180 to 400 an hour" is a competitor
 * rate, and quoting it is the whole argument for buying online instead; it is not a promise to
 * send anybody anywhere.
 */
function describesTheMarket(body: string, index: number): boolean {
  const from = Math.max(0, body.lastIndexOf("\n", index) + 1);
  const dot = body.indexOf(".", index);
  const sentence = body.slice(from, dot === -1 ? body.length : dot);
  return /\b(SAR|riyals?|market rate|published rate|quoted at|agencies|charges?|premium|price[sd]?|pricing|costs?)\b/i.test(
    sentence,
  );
}

/**
 * Claims that are legally or academically dangerous rather than merely overcooked.
 *
 * Each comes from a real exposure found in the competitor corpus or from a rule a Saudi
 * regulator actually enforces - accreditation we do not hold, a school presented as a partner,
 * or an offer to produce work that must be the student's own. Documenting these in the writer
 * guide is not enough: at 2,492 pages, anything not gated eventually ships.
 */
const DANGEROUS_CLAIMS: Array<[RegExp, string]> = [
  [
    /\b(?:MoE|Ministry of Education|ETEC|Qiyas|TVTC|Tatweer|IB|IBO|Cambridge|Pearson|Edexcel)[- ]?(approved|accredited|certified|licensed|authorised|authorized|registered|partner(ed|ship)?|endorsed)\b/i,
    "claims a regulator or board accreditation IB Gram does not hold",
  ],
  [
    /\b(we|our tutors?|IB Gram)\s+(are|is|am)\s+(an?\s+)?(official|approved|accredited|authorised|authorized|licensed)\b/i,
    "claims official status",
  ],
  [
    /\b(write|writing|complete|completing|do|doing|produce|producing|draft(ing)?|ghost[- ]?writ)[ \t]+(your|the|their|a|his|her)[ \t]+(IA|Internal Assessment|EE|Extended Essay|TOK essay|coursework|assignment|exploration|Personal Project)/i,
    "offers to produce assessed work - academic malpractice under IB rules",
  ],
  [
    /\b(IA|Internal Assessment|Extended Essay|TOK essay|coursework)\s+(writing|completion|ghostwriting)\s+(service|help)\b/i,
    "offers an assessed-work writing service",
  ],
  [
    /\b(?:partner(?:ed)?|affiliated|in partnership|work(?:ing)? (?:with|alongside))\s+(?:with\s+)?(?:Saudi Aramco|Aramco|ISG|International Schools Group|KAUST|KFUPM|GEMS|Nord Anglia|British International School|American International School)/i,
    "presents a named school, group or employer as a partner",
  ],
  [
    /\b(our|we have an?|visit our)\s+(office|centre|center|campus|branch)\s+(in|at)\s+(riyadh|jeddah|dammam|khobar|dhahran|saudi arabia|the kingdom)/i,
    "states a Saudi office IB Gram does not occupy",
  ],
  [/\b(money[- ]back|refund)\s+(guarantee|if)\b/i, "guarantees a refund tied to an outcome"],
  [
    /\b(qudurat|tahsili|gat|general aptitude test)\b[^.]{0,80}\b(minimum|cut[- ]?off|at least|above|score of)\s+\d{2,3}\b/i,
    "publishes a Qudurat or Tahsili threshold - these differ by university, programme and year",
  ],
  [
    /\b(guarantee|assure|promise)[sd]?\b[^.]{0,60}\b(admission|place|seat|acceptance)\b/i,
    "promises a university admission outcome",
  ],
];

/** Lowercased, punctuation-stripped question text - the form two pages would collide on. */
const normaliseQuestion = (q: string) =>
  q.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

interface Issue {
  where: string;
  problem: string;
}

/* ------------------------------------------------------------------ */
/* Reading a written page                                              */
/* ------------------------------------------------------------------ */

function prose(c: SaudiSeoContent): string {
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

const MONTHS = "january|february|march|april|may|june|july|august|september|october|november|december";

/* ------------------------------------------------------------------ */
/* Checks                                                              */
/* ------------------------------------------------------------------ */

function check(meta: SaudiSeoPageMeta, c: SaudiSeoContent): Issue[] {
  const issues: Issue[] = [];
  const add = (where: string, problem: string) => issues.push({ where, problem });
  const body = prose(c);
  const wordCount = words(body);

  // ---- shape ----
  if (c.slug !== meta.slug) add("slug", `is "${c.slug}", must be "${meta.slug}"`);
  if (wordCount < MIN_WORDS) add("length", `${wordCount} words, needs ${MIN_WORDS}+ (short by ${MIN_WORDS - wordCount})`);
  if (wordCount > MAX_WORDS && !PRE_CAP.has(meta.slug)) {
    add("length", `${wordCount} words, cap is ${MAX_WORDS} (over by ${wordCount - MAX_WORDS}) - cut sections, do not thin every paragraph`);
  }
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
  const minTables = MIN_TABLES_BY_KIND[meta.kind] ?? 0;
  if (tables < minTables) add("sections[].table", `${tables} tables, needs ${minTables}+ on a ${meta.kind} page`);

  // ---- per-block depth ----
  c.sections.forEach((s, i) => {
    const n = words(s.paragraphs.join(" "));
    if (n < 240) add(`sections[${i}] "${s.heading}"`, `${n} words, needs 240+`);
    if (s.paragraphs.length < 3) add(`sections[${i}] "${s.heading}"`, `${s.paragraphs.length} paragraphs, needs 3+`);
    if (s.table) {
      if (s.table.columns.length < 3) add(`sections[${i}].table`, `${s.table.columns.length} columns, needs 3+`);
      if (s.table.rows.length < 4) add(`sections[${i}].table`, `${s.table.rows.length} rows, needs 4+`);
      for (const [r, row] of s.table.rows.entries()) {
        if (row.length !== s.table.columns.length) {
          add(`sections[${i}].table row ${r}`, `${row.length} cells, header has ${s.table.columns.length}`);
        }
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
  // An ambiguous district carries its city in `area` ("Al Hamra, Jeddah"); the hero only has to
  // name the district itself.
  const place = (meta.area ?? meta.city).split(",")[0].trim();
  if (place !== "Saudi Arabia" && !keywordRe(place, "i").test(c.heroSubtitle)) {
    add("heroSubtitle", `does not name ${place}`);
  }

  const title = c.title ?? meta.title;
  if (title.length > 72) add("title", `${title.length} chars, keep under 72`);
  const desc = c.metaDescription ?? meta.metaDescription;
  if (desc.length < 120 || desc.length > 165) add("metaDescription", `${desc.length} chars, needs 120-165`);

  // localKeywords are published in <meta keywords> and in the schema's keywords field, so a
  // phrase listed there but absent from the body is a mismatch between what the page claims to
  // be about and what it says. Nothing checked this before, and writers who verified it by hand
  // found their own pages failing it - which means the ones who did not check shipped it.
  // The test is topic coverage, not verbatim recurrence. Demanding the exact contiguous phrase
  // fails "Mathematics AA HL tutor" against a page that correctly writes "Mathematics: Analysis
  // and Approaches HL", and the only way to satisfy it is to paste the phrase in - which is
  // keyword stuffing, the one on-page signal that actively hurts. So every CONTENT WORD of the
  // keyword must appear somewhere in the body; a keyword about something the page never
  // discusses still fails, which is the case worth catching.
  // ponytail: prefix-5 stemming, not a real stemmer - upgrade only if false positives appear.
  // "slots"/"slot", "switching"/"switch", "relocating"/"relocate", "moderation"/"moderated" are
  // the same topic, and failing a page for the inflection would just push writers to paste the
  // exact form in. Connectives are ignored outright: whether a page writes "versus" or "against"
  // says nothing about what it covers.
  // Strip a plural before truncating, or a 5-letter plural ("slots") never reaches its 4-letter
  // singular ("slot") and the prefix comparison misses an obvious match.
  const stem = (w: string) => w.replace(/ies$/, "y").replace(/(es|s)$/, "").slice(0, 5);
  const bodyWords = new Set(body.toLowerCase().replace(/[^a-z0-9]+/g, " ").split(" ").filter(Boolean));
  const bodyStems = new Set([...bodyWords].map(stem));
  const STOP = new Set([
    "the", "and", "for", "with", "in", "on", "at", "to", "of", "a", "an", "or", "my", "our",
    "your", "versus", "vs", "within", "across", "during", "after", "before", "under", "over",
    "into", "from", "that", "this", "when", "what", "how", "why", "you",
  ]);
  for (const k of c.localKeywords) {
    const missing = k
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 2 && !STOP.has(w))
      .filter((w) => !bodyWords.has(w) && !bodyStems.has(stem(w)));
    if (missing.length > 0) {
      add(
        "localKeywords",
        `"${k}" covers something the page never discusses (missing: ${missing.join(", ")}) - drop it or write about it`,
      );
    }
  }

  // Over-stuffing reads as spam and is the one on-page signal that can actively hurt.
  const density = (body.match(keywordRe(head)) ?? []).length / Math.max(1, wordCount / 1000);
  if (density > 9) add("keyword density", `"${head}" appears ${Math.round(density)}x per 1,000 words; keep under 9`);

  // ---- calendar honesty ----
  // NO YEARS. A page naming a year is wrong twelve months later and nobody goes back to fix
  // 2,492 of them. "The June series" is true every year; "the June 2027 series" is true for one.
  // This is stricter than the UAE gate, which only blocked FUTURE years: here any month-plus-year
  // pair fails, because a Saudi page citing a past year reads as stale to a parent and to a
  // crawler alike. Cite a source by name, not by date.
  const monthYear = body.match(new RegExp(`\\b(?:${MONTHS})\\s+(?:to\\s+\\d+\\s+\\w+\\s+)?20\\d\\d\\b`, "i"));
  if (monthYear) {
    add(
      "calendar",
      `"${monthYear[0]}" dates the page to one year and goes stale; name the series by month only ("the June series")`,
    );
  }
  const academicYear = body.match(/\b20\d\d\s*[/–-]\s*(?:20)?\d\d\b/);
  if (academicYear) {
    add("calendar", `"${academicYear[0]}" names an academic year; describe the term instead ("the autumn term")`);
  }

  // Cambridge's February/March series is INDIA ONLY. Saudi candidates sit June and November.
  // Telling a Saudi parent their entry deadline is for a February exam is a wrong fact a family
  // acts on, which is worse than a thin page - and FAQ answers are exactly what an AI Overview
  // quotes back.
  const marchSeries =
    body.match(/\b(?:february|feb|march)(?:\s*[/–-]\s*march)?\s+(?:series|session|sitting)/i) ??
    body.match(/\b(?:cambridge|igcse)[^.]{0,80}\b(?:february|march)[^.]{0,60}\b(?:series|final entries|entry deadline|exam(?:ination)? period|exam window)/i);
  if (marchSeries && !/\bindia\b/i.test(sentenceAround(body, marchSeries.index ?? 0))) {
    add("calendar", `Cambridge runs June and November in Saudi Arabia; the Feb/March series is India-only: "${marchSeries[0].trim()}"`);
  }

  // Ramadan and Eid dates move by moon sighting and differ by a day between countries.
  const ramadanDate = body.match(/\b(ramadan|eid(?:\s+al[- ](?:fitr|adha))?)\b[^.]{0,40}\b(?:\d{1,2}\s+(?:\w+)|20\d\d)\b/i);
  if (ramadanDate) {
    add("calendar", `do not date Ramadan or Eid - it is confirmed by moon sighting: "${ramadanDate[0].trim()}"`);
  }

  // ---- delivery honesty ----
  if (!DELIVERY_DISCLOSURE.test(body)) add("delivery", "the page never says lessons are delivered online");
  for (const [re, label] of IN_PERSON_PROMISES) {
    const m = body.match(re);
    if (m && describesTheMarket(body, m.index ?? 0)) continue;
    // A page that correctly DENIES in-home service says the same words as one that promises it.
    // Only flag the phrase when its own sentence does not negate it.
    if (m && !isNegated(body, m.index ?? 0)) add("delivery", `${label}: "${m[0].trim()}"`);
  }

  // ---- tone and claims ----
  for (const phrase of [...BANNED, ...EXTRA_BANNED]) {
    if (bannedRe(phrase).test(body)) add("banned phrase", `"${phrase}"`);
  }
  for (const [re, label] of SUPERLATIVES) {
    const m = body.match(re);
    if (m && !isNegated(body, m.index ?? 0)) add("claim", `${label}: "${m[0].trim()}"`);
  }
  for (const [re, label] of DANGEROUS_CLAIMS) {
    const m = body.match(re);
    if (m && !isNegated(body, m.index ?? 0)) add("legal", `${label}: "${m[0].trim()}"`);
  }
  for (const claim of findClaims(body)) add("claim", claim);

  // ---- internal repetition ----
  const headings = [c.intro.heading, ...c.sections.map((s) => s.heading)];
  const dupeHeading = headings.find((h, i) => headings.indexOf(h) !== i);
  if (dupeHeading) add("sections", `duplicate heading "${dupeHeading}"`);
  // Digits are significant: "What is Paper 1 worth?" and "What is Paper 2 worth?" are different
  // questions, and stripping digits collapses them into a false duplicate.
  const questions = c.faqs.map((f) => normaliseQuestion(f.question));
  const dupeQ = questions.find((q, i) => questions.indexOf(q) !== i);
  if (dupeQ) add("faqs", `duplicate question "${dupeQ}"`);

  // A paragraph repeated verbatim inside one page is the cheapest way to fake a word count.
  const paras = [...c.intro.paragraphs, ...c.sections.flatMap((s) => s.paragraphs)].map((p) =>
    p.trim().toLowerCase(),
  );
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

interface CacheRow {
  mtimeMs: number;
  sketch: number[];
  questions: string[];
}

/**
 * Sketches cached on disk, keyed by slug and file mtime.
 *
 * Every writer runs --check many times while fixing their page, and each run compares against
 * every other written page. At 500 pages that is 500 file reads and 500 sketch computations per
 * invocation, thousands of times over a wave - the single slowest thing in the loop. The cache
 * turns it into one small JSON read plus a re-sketch of whatever actually changed.
 */
function loadCache(): Map<string, CacheRow> {
  if (!existsSync(CACHE_FILE)) return new Map();
  try {
    return new Map(Object.entries(JSON.parse(readFileSync(CACHE_FILE, "utf8")) as Record<string, CacheRow>));
  } catch {
    return new Map();
  }
}

const cache = loadCache();
let cacheDirty = false;

function saveCache(): void {
  if (!cacheDirty) return;
  try {
    // Written to a unique temp file and renamed, because a wave runs fifteen writers at once and
    // each one saves this on exit. A half-written cache read by another process just parses as
    // garbage and gets discarded, but the rename makes even that impossible.
    const tmp = `${CACHE_FILE}.${process.pid}.tmp`;
    writeFileSync(tmp, JSON.stringify(Object.fromEntries(cache)), "utf8");
    renameSync(tmp, CACHE_FILE);
  } catch {
    /* a cache that will not write is a slow gate, not a broken one */
  }
}

function loadWritten(slug: string): SaudiSeoContent | null {
  const file = join(AGENT_OUT, `${fileKey(slug)}.json`);
  if (!existsSync(file)) return null;
  try {
    return JSON.parse(readFileSync(file, "utf8")) as SaudiSeoContent;
  } catch {
    return null;
  }
}

function rowFor(slug: string): CacheRow | null {
  const file = join(AGENT_OUT, `${fileKey(slug)}.json`);
  if (!existsSync(file)) return null;
  const mtimeMs = statSync(file).mtimeMs;
  const hit = cache.get(slug);
  if (hit && hit.mtimeMs === mtimeMs) return hit;

  const content = loadWritten(slug);
  if (!content) return null;
  const row: CacheRow = {
    mtimeMs,
    sketch: sketch(prose(content)),
    questions: content.faqs.map((f) => normaliseQuestion(f.question)),
  };
  cache.set(slug, row);
  cacheDirty = true;
  return row;
}

/**
 * Siblings get a tighter threshold than the corpus at large, because two pages for the same
 * district are the ones a reader - and a duplicate-content classifier - would compare.
 */
function similarityIssues(meta: SaudiSeoPageMeta, c: SaudiSeoContent): Issue[] {
  const mine = sketch(prose(c));
  const myQuestions = c.faqs.map((f) => normaliseQuestion(f.question));
  const issues: Issue[] = [];

  // EVERY FAQ must be unique across the whole corpus. A question reused verbatim is the most
  // visible kind of duplication there is: it lands in the FAQPage markup of both pages, so
  // Google sees the same rich result twice and picks one. The UAE gate reported the first four
  // reuses; this one reports them and fails on any.
  const reused = new Map<string, string>();
  for (const slug of writtenSlugs()) {
    if (slug === meta.slug) continue;
    const row = rowFor(slug);
    if (!row) continue;
    for (const q of row.questions) {
      if (myQuestions.includes(q) && !reused.has(q)) reused.set(q, slug);
    }
  }
  for (const [q, slug] of [...reused].slice(0, 6)) {
    issues.push({
      where: "faqs",
      problem: `question already used on /saudi-arabia/${slug}/: "${q.slice(0, 64)}" - ask a different one`,
    });
  }

  for (const slug of writtenSlugs()) {
    if (slug === meta.slug) continue;
    const row = rowFor(slug);
    if (!row) continue;
    const score = similarity(mine, row.sketch);
    const otherMeta = metaBySlug.get(slug);
    const isSibling =
      otherMeta !== undefined &&
      otherMeta.kind === meta.kind &&
      (otherMeta.areaSlug === meta.areaSlug || otherMeta.citySlug === meta.citySlug);
    const limit = isSibling ? MAX_SIBLING_SIMILARITY : MAX_CORPUS_SIMILARITY;
    if (score > limit) {
      issues.push({
        where: "similarity",
        problem: `${Math.round(score * 100)}% similar to /saudi-arabia/${slug}/ (limit ${Math.round(limit * 100)}%) - rewrite, do not reword`,
      });
    }
  }
  return issues.slice(0, 8);
}

/* ------------------------------------------------------------------ */
/* Entry points                                                        */
/* ------------------------------------------------------------------ */

/**
 * Every exit goes through one report block. An early `return` that skips the printing means a
 * writer with a missing or unparseable file sees nothing at all and has to guess.
 */
function checkOne(slug: string, quiet = false): Issue[] {
  let issues: Issue[];
  let summary = "";

  const meta = metaBySlug.get(slug);
  const file = join(AGENT_OUT, `${fileKey(slug)}.json`);

  if (!meta) {
    issues = [{ where: "slug", problem: `"${slug}" is not in the plan. Use the slug from your brief, e.g. "riyadh/ib-tutor".` }];
  } else if (!existsSync(file)) {
    issues = [{ where: "file", problem: `missing ${file} - write your page there first` }];
  } else {
    let content: SaudiSeoContent | null = null;
    try {
      content = JSON.parse(readFileSync(file, "utf8")) as SaudiSeoContent;
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
  const passing: Array<[string, SaudiSeoContent]> = [];
  for (const slug of slugs) {
    if (checkOne(slug, true).length > 0) {
      console.log(`skip (not passing): ${slug}`);
      continue;
    }
    passing.push([slug, JSON.parse(readFileSync(join(AGENT_OUT, `${fileKey(slug)}.json`), "utf8")) as SaudiSeoContent]);
  }

  mkdirSync(OUT_PAGES, { recursive: true });
  for (const existing of readdirSync(OUT_PAGES).filter((f) => f.startsWith("shard-"))) {
    writeFileSync(join(OUT_PAGES, existing), "{}\n", "utf8");
  }

  const shards: Array<Array<[string, SaudiSeoContent]>> = [];
  for (let i = 0; i < passing.length; i += SHARD_SIZE) shards.push(passing.slice(i, i + SHARD_SIZE));

  // Minified, not pretty-printed. 1-space indent costs roughly a tenth of the file size across
  // a corpus this big, and nothing reads these by hand.
  shards.forEach((shard, i) => {
    writeFileSync(
      join(OUT_PAGES, `shard-${String(i).padStart(3, "0")}.json`),
      `${JSON.stringify(Object.fromEntries(shard))}\n`,
      "utf8",
    );
  });

  // slug -> shard index. This is the only thing the server loads eagerly.
  const slugShards: Record<string, number> = {};
  shards.forEach((shard, i) => {
    for (const [slug] of shard) slugShards[slug] = i;
  });
  writeFileSync(join(OUT_PAGES, "slug-shards.json"), `${JSON.stringify(slugShards)}\n`, "utf8");

  // Real per-page dates, taken from when the page was actually written. plan.ts stamps one
  // constant onto all rows, so without this every sitemap <lastmod> and every schema
  // dateModified would be identical - a signal Google learns to ignore.
  writeFileSync(
    join(OUT_PAGES, "written-dates.json"),
    `${JSON.stringify(
      Object.fromEntries(
        passing.map(([slug]) => [
          slug,
          statSync(join(AGENT_OUT, `${fileKey(slug)}.json`)).mtime.toISOString().slice(0, 10),
        ]),
      ),
    )}\n`,
    "utf8",
  );

  const loaders = shards
    .map(
      (_, i) =>
        `  ${i}: () => import("./shard-${String(i).padStart(3, "0")}.json").then((m) => m.default as unknown as Record<string, SaudiSeoContent>),`,
    )
    .join("\n");

  writeFileSync(
    join(OUT_PAGES, "index.ts"),
    `// GENERATED by scripts/saudi-seo/build.ts --compile. Do not edit by hand.
//
// Content is loaded ONE SHARD AT A TIME, not all at once.
//
// The UAE set statically imports all of its shards into a single spread object
// ({...shard0, ...shard1, ...}). That parses ~150MB of JSON at module load and then copies
// every entry into a second object, so the whole corpus is resident in the server process for
// the life of it. Saudi Arabia adds a comparable volume, and two sets built that way is what
// takes \`next build\` out on heap.
//
// Here the slug -> shard index is the only thing loaded eagerly - a few hundred KB of strings
// and integers - and a shard's prose is pulled in on demand by the one request that needs it,
// then cached. Routing, internal linking, sitemap generation and generateStaticParams all
// answer from the index alone and never touch a shard.
import type { SaudiSeoContent } from "../types";
import slugShards from "./slug-shards.json";

const SHARD_OF = slugShards as unknown as Record<string, number>;

/** One dynamic import per shard, written out explicitly so bundlers need no context module. */
const LOADERS: Record<number, () => Promise<Record<string, SaudiSeoContent>>> = {
${loaders}
};

const cache = new Map<number, Record<string, SaudiSeoContent>>();

/** Every slug with written, gate-passing content. Cheap: no prose is loaded. */
export const saudiWrittenSlugs: string[] = Object.keys(SHARD_OF);

const writtenSet = new Set(saudiWrittenSlugs);

/** Whether this slug routes. Synchronous and free - used by every link and sitemap helper. */
export const hasSaudiContent = (slug: string): boolean => writtenSet.has(slug);

/** The prose for one page, loading (and caching) just the shard it lives in. */
export async function getSaudiContent(slug: string): Promise<SaudiSeoContent | undefined> {
  const shardIndex = SHARD_OF[slug];
  if (shardIndex === undefined) return undefined;
  let shard = cache.get(shardIndex);
  if (!shard) {
    const load = LOADERS[shardIndex];
    if (!load) return undefined;
    shard = await load();
    cache.set(shardIndex, shard);
  }
  return shard[slug];
}
`,
    "utf8",
  );

  console.log(`compiled ${passing.length} pages into ${shards.length} shard(s)`);
}

function main(): void {
  if (!existsSync(TMP)) mkdirSync(TMP, { recursive: true });
  if (!existsSync(AGENT_OUT)) mkdirSync(AGENT_OUT, { recursive: true });

  const args = process.argv.slice(2);
  try {
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
  } finally {
    saveCache();
  }
}

main();
