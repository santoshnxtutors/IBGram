/**
 * Quality-gates the agent-written Gurugram pages and compiles the passing ones into
 * the gurgaon-seo rendering path.
 *
 * Reads : tmp/gurgaon-500/plan.json + tmp/gurgaon-500/content/<slug>.json
 * Writes: src/lib/gurgaon-seo/pages-data-expansion.ts   (SEO meta for the new pages)
 *         src/lib/gurgaon-seo/content/expansion/ib.json
 *         src/lib/gurgaon-seo/content/expansion/igcse.json
 *         src/lib/gurgaon-seo/content/expansion/index.ts
 *         tmp/gurgaon-500/quality-report.json
 *         tmp/gurgaon-500/retry-keys.txt
 *
 * The existing 400 pages are never touched: they keep their own pages-data.ts and their
 * per-slug modules under content/. This adds a second source that index.ts merges.
 *
 * Content ships as JSON shards rather than 500 more TypeScript modules — same rendered
 * output, one import instead of five hundred, and a far cheaper Next build.
 *
 * Run: npx tsx scripts/gurgaon-500/compile.ts [--write]
 *   without --write it only reports, so a partial agent-out is safe to inspect.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { gurgaonSeoContentBySlug } from "../../src/lib/gurgaon-seo/content";
import { gurgaonSeoExpansionContentBySlug } from "../../src/lib/gurgaon-seo/content/expansion";
import type { PlanEntry } from "./build-plan";

const ROOT = process.cwd();
// `--set 400` gates the original workbook pages from tmp/gurgaon-400 and, with --write, rewrites
// their per-slug modules. The default is the 500-page expansion.
const SET = process.argv.includes("--set") ? process.argv[process.argv.indexOf("--set") + 1] : "500";
const TMP = path.join(ROOT, "tmp", `gurgaon-${SET}`);
const CONTENT_IN = path.join(TMP, "content");
const LIB = path.join(ROOT, "src", "lib", "gurgaon-seo");
const OUT_CONTENT = path.join(LIB, "content", "expansion");

const MIN_WORDS = 4000;
const MAX_JACCARD = 0.4;
// ponytail: one date for the whole expansion; switch to per-file mtime if pages get rewritten later.
const LAST_UPDATED = "2026-09-10";

interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}
interface Faq {
  question: string;
  answer: string;
}
interface Content {
  slug: string;
  heroIntro: string;
  trustPoints: string[];
  sections: Section[];
  faqs: Faq[];
  closingCta: string;
  localKeywords: string[];
}

export const BANNED = [
  "in today's fast-paced", "delve into", "unlock the", "navigate the complexities",
  "it is important to note", "in conclusion", "in summary,", "moreover,", "furthermore,",
  "additionally,", "firstly,", "the landscape of", "educational landscape", "tapestry",
  "a testament to", "elevate your", "seamless", "robust solution", "leverage the",
  "game-changer", "when it comes to", "look no further", "rest assured", "dive into",
  "embark on", "at the end of the day", "cutting-edge", "state-of-the-art", "world-class",
  "unparalleled", "plethora", "myriad of", "harness the power", "revolutionize",
  "paradigm shift", "holistic approach to learning", "in the realm of", "boasts a",
  "nestled in", "vibrant city of", "bustling city", "ecosystem of", "in essence",
  "crucially,", "notably,", "that said,", "first and foremost", "the key takeaway",
  "one thing is clear", "when it comes down to", "in the heart of", "stands as a",
  "plays a vital role", "it's worth noting",
];

/** Words that flip an unverifiable claim into the honest copy we require, or frame it as a warning. */
// 120 characters, not 60: "No tutor, however experienced with 0620 past papers, can guarantee a grade."
const NEGATORS = /\b(no|not|never|neither|nor|nobody|no one|without|cannot|can't|don't|does not|doesn't|isn't|is not|aren't|are not|rather than|instead of|whether|cautious of|wary of|beware|promises? about|different (?:\w+ )?from)\b[^.]{0,120}$/i;

const CLAIM_PATTERNS: Array<[RegExp, string]> = [
  // [ \t] not \s: prose is joined with newlines, so "Sector 28\nTutor pool..." must not match.
  // Lookbehind skips grade labels: "a Year 5 or 6 tutor", "a Class 10 tutor".
  // A count starts 1-9 and only takes a comma before three digits, so syllabus codes ("0580, tutors")
  // and list fragments ("Sushant Lok 1, tutors") never match; "1,200 verified tutors" still does.
  [/(?<!\b(?:year|years|class|grade|group|sector|phase|lok|city|level|paper|myp|dp|or|and|to)[ \t])(?<!\d[-–:])\b[1-9]\d{0,2}(?:,\d{3})*\+?[ \t]+(verified[ \t]+)?tutors?\b/gi, "tutor count"],
  [/\b(guarantee[sd]?|guaranteed)\s+(a\s+)?(grade|score|result|7|a\*|improvement)/gi, "outcome guarantee"],
  [/\bguaranteed\s+(results?|success|grades?)/gi, "outcome guarantee"],
  [/\b\d{1,3}%\s+(of\s+)?(our\s+)?(students?|success|pass|improvement)/gi, "fabricated statistic"],
  [/\b(rated|rating)\s+\d(\.\d)?\s*(\/|out of)\s*5/gi, "fabricated rating"],
  // "Tutors affiliated with IB Gram" describes the platform's own tutors, not a board tie-up.
  [/\b(affiliated|partnered|in partnership|tie-?up)\s+with\s+(the\s+)?(IB(?!\s*Gram)|Cambridge|Pearson|Edexcel)/gi, "affiliation claim"],
  [/\b(official|authorised|authorized|accredited)\s+(partner|centre|center|provider)\b/gi, "affiliation claim"],
  [/\bRs\.?\s?\d|₹\s?\d|\bINR\s?\d/gi, "specific fee amount"],
];

function words(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function allProse(c: Content): string {
  return [
    c.heroIntro,
    ...c.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...c.faqs.flatMap((f) => [f.question, f.answer]),
    c.closingCta,
  ].join("\n");
}

/** 64-value MinHash sketch over 8-grams — cheap pairwise similarity across a big corpus. */
export function sketch(text: string): number[] {
  const toks = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const grams = new Set<string>();
  for (let i = 0; i + 8 <= toks.length; i += 1) grams.add(toks.slice(i, i + 8).join(" "));
  const sig = new Array(64).fill(Number.MAX_SAFE_INTEGER);
  for (const g of grams) {
    let h = 2166136261;
    for (let i = 0; i < g.length; i += 1) {
      h ^= g.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    for (let k = 0; k < 64; k += 1) {
      const hk = (h ^ Math.imul(k + 1, 0x9e3779b1)) >>> 0;
      if (hk < sig[k]) sig[k] = hk;
    }
  }
  return sig;
}

export function similarity(a: number[], b: number[]): number {
  let same = 0;
  for (let i = 0; i < 64; i += 1) if (a[i] === b[i]) same += 1;
  return same / 64;
}

interface Issue {
  key: string;
  problems: string[];
}

/** Banned phrases present as whole phrases: "in conclusion" must not match inside "a thin conclusion". */
export function findBanned(prose: string): string[] {
  const lower = prose.toLowerCase();
  return BANNED.filter((b) => new RegExp(`(?<![a-z])${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(lower));
}

/**
 * Unverifiable claims (tutor counts, guarantees, fake stats, board affiliation, rupee prices)
 * that are actually asserted — negated, questioned or warned-against wording is the honest copy
 * the guide requires and is skipped. Pinned by claims.check.ts; run it after touching this.
 */
export function findClaims(prose: string): string[] {
  const problems: string[] = [];
  for (const [re, label] of CLAIM_PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(prose)) !== null) {
      const before = prose.slice(Math.max(0, m.index - 140), m.index);
      if (NEGATORS.test(before)) continue;
      // A parent's FAQ question ("Is IB Gram affiliated with the IB?") asserts nothing.
      const after = prose.slice(m.index, m.index + 200);
      if (/^[^.!\n]*\?/.test(after)) continue;
      // Negation after the phrase: "A guaranteed grade jump isn't something any tutor can promise."
      if (/^[^.!?;\n]{0,80}\b(isn't|is not|aren't|are not|cannot|can't|won't|will not|never|nobody|no one|no tutor)\b/i.test(after)) continue;
      // "schools affiliated with the Cambridge ... systems" describes the schools, not IB Gram.
      if (label === "affiliation claim" && /\bschools?\b[^.]{0,25}$/i.test(before)) continue;
      // Warned against later in the sentence: "...buys a guaranteed grade should be treated with real scepticism."
      if (/^[^.!?;\n]{0,140}\b(scepticism|skepticism|sceptical|skeptical|caution|cautious|wary|suspicion|suspicious|red flag|warning sign|misleading|questioned|question (?:any|such|that|this) (?:such )?claim|dishonest|worth scrutinis|worth scrutiniz)/i.test(after)) continue;
      problems.push(`${label}: "${m[0].trim()}"`);
      break;
    }
  }
  return problems;
}

function checkOne(entry: PlanEntry, c: Content): string[] {
  const problems: string[] = [];

  if (c.slug !== entry.slug) problems.push(`slug mismatch: ${c.slug}`);
  if (!Array.isArray(c.sections) || c.sections.length !== 9) problems.push(`expected 9 sections, got ${c.sections?.length ?? 0}`);
  if (!Array.isArray(c.faqs) || c.faqs.length < 8 || c.faqs.length > 12) problems.push(`expected 8-12 faqs, got ${c.faqs?.length ?? 0}`);
  if (!Array.isArray(c.trustPoints) || c.trustPoints.length !== 4) problems.push(`expected 4 trustPoints, got ${c.trustPoints?.length ?? 0}`);
  if (!Array.isArray(c.localKeywords) || c.localKeywords.length < 10) problems.push(`expected 10+ localKeywords, got ${c.localKeywords?.length ?? 0}`);

  for (const s of c.sections ?? []) {
    if (!s.heading?.trim()) problems.push("section with empty heading");
    if (!Array.isArray(s.paragraphs) || s.paragraphs.length < 3) problems.push(`section "${s.heading}" has ${s.paragraphs?.length ?? 0} paragraphs, needs 3+`);
  }

  const prose = allProse(c);
  const wc = words(prose);
  if (wc < MIN_WORDS) problems.push(`${wc} words, needs ${MIN_WORDS}+`);

  for (const b of findBanned(prose)) problems.push(`banned phrase: "${b}"`);

  problems.push(...findClaims(prose));

  // Independence disclaimer must be present, since the pages name real schools.
  const INDEPENDENCE = [
    /\bnot\s+(officially\s+|formally\s+)?(affiliated|associated|endorsed|connected|linked)/i,
    /\bno\s+(formal\s+)?(affiliation|contract|partnership|endorsement|tie-?up|connection)\b/i,
    /\bindependent\s+(tutoring\s+|tutor-matching\s+)?(platform|of)\b/i,
  ];
  if (!INDEPENDENCE.some((re) => re.test(prose))) {
    problems.push("missing independence / non-affiliation statement");
  }

  // Primary keyword must actually land in the hero, early.
  const head = c.heroIntro?.split(/\s+/).slice(0, 60).join(" ").toLowerCase() ?? "";
  // "Sector Road / HUDA sectors cluster" reads as "Sector Road" in real prose.
  const locNames = [entry.locality, entry.locality.split(" / ")[0]].map((s) => s.toLowerCase());
  // Three-plus-word roads go by their initials locally: "Southern Peripheral Road" -> "SPR".
  const locWords = entry.locality.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w));
  // Whole-word only: as a substring "def" (DLF Exclusive Floors) would match "defend".
  const acronym = locWords.length >= 3 ? new RegExp(`\\b${locWords.map((w) => w[0]).join("")}\\b`, "i") : null;
  const hasLocality = (text: string) => locNames.some((n) => text.includes(n)) || Boolean(acronym?.test(text));
  // Subject minus board/programme tokens ("IB DP History" -> "history"); PYP pages say "PYP".
  const subjectWords = entry.subject
    .replace(/\b(IB|DP|MYP|IGCSE|Cambridge|Edexcel)\b/gi, " ")
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length >= 4);
  if (/primary years/i.test(entry.subject)) subjectWords.push("pyp");
  // "Mathematics" pages say "Maths"; board-wide "Multiple Subjects" pages name the board instead.
  if (/mathematics/i.test(entry.subject)) subjectWords.push("math");
  const subjectHit = /multiple subjects/i.test(entry.subject)
    ? /\b(ib|igcse)\b/.test(head)
    : subjectWords.some((w) => head.includes(w)) || (/theory of knowledge/i.test(entry.subject) && /\btok\b/.test(head)) || (/revision/i.test(entry.subject) && /crash course/.test(head));
  if (!hasLocality(head)) problems.push("locality missing from first 60 words of heroIntro");
  if (!subjectHit) problems.push("subject missing from first 60 words of heroIntro");

  const headings = (c.sections ?? []).map((s) => s.heading.toLowerCase());
  const locHits = headings.filter(hasLocality).length;
  if (locHits < 3) problems.push(`locality in only ${locHits} H2 headings, needs 3+`);

  return problems;
}

function tsString(v: string): string {
  return JSON.stringify(v);
}

function emitMeta(entries: PlanEntry[]): string {
  const rows = entries
    .map(
      (e) => `  {
    id: ${e.id},
    slug: ${tsString(e.slug)},
    path: ${tsString(e.path)},
    primaryKeyword: ${tsString(e.primaryKeyword)},
    searchIntent: ${tsString(e.searchIntent)},
    pageType: ${tsString(e.pageType)} as GurgaonSeoPageMeta["pageType"],
    locality: ${tsString(e.locality)},
    sector: ${tsString(e.localContext.nearbySectors[0] ?? e.locality)},
    board: ${tsString(e.board)} as GurgaonSeoPageMeta["board"],
    subject: ${tsString(e.subject)},
    level: ${tsString(e.level)},
    h1: ${tsString(e.h1)},
    title: ${tsString(e.title)},
    metaDescription: ${tsString(e.metaDescription)},
    priority: ${tsString(e.priority)},
    parentPage: ${tsString(e.parentPage)},
    uniqueAngle: ${tsString(e.uniqueAngle)},
    lastUpdated: ${tsString(LAST_UPDATED)},
    localContext: {
      corridor: ${tsString(e.localContext.corridor)},
      nearbyAreas: ${JSON.stringify(e.localContext.nearbyAreas)},
      nearbySectors: ${JSON.stringify(e.localContext.nearbySectors)},
      nearbySocieties: ${JSON.stringify(e.localContext.nearbySocieties)},
      schools: ${JSON.stringify(e.localContext.schools)},
    },
  },`,
    )
    .join("\n");

  return `// AUTO-GENERATED by scripts/gurgaon-500/compile.ts — do not edit by hand.
// IB/IGCSE subject x area expansion for Gurugram. The original 400 workbook pages live
// in ./pages-data.ts and are untouched; index.ts concatenates both lists.
import type { GurgaonSeoPageMeta } from "./types";

export const gurgaonSeoExpansionMeta: GurgaonSeoPageMeta[] = [
${rows}
];
`;
}

function main(): void {
  const write = process.argv.includes("--write");
  const plan: PlanEntry[] = JSON.parse(readFileSync(path.join(TMP, "plan.json"), "utf8"));
  const byKey = new Map(plan.map((e) => [e.key, e]));

  if (!existsSync(CONTENT_IN)) {
    console.log(`no agent output yet at ${path.relative(ROOT, CONTENT_IN)}`);
    return;
  }

  const files = readdirSync(CONTENT_IN).filter((f) => f.endsWith(".json"));
  const loaded: Array<{ entry: PlanEntry; content: Content }> = [];
  const issues: Issue[] = [];

  for (const f of files) {
    const key = f.replace(/\.json$/, "");
    const entry = byKey.get(key);
    if (!entry) {
      issues.push({ key, problems: ["not in plan.json"] });
      continue;
    }
    let content: Content;
    try {
      content = JSON.parse(readFileSync(path.join(CONTENT_IN, f), "utf8"));
    } catch (err) {
      issues.push({ key, problems: [`unparseable JSON: ${(err as Error).message}`] });
      continue;
    }
    const problems = checkOne(entry, content);
    if (problems.length) issues.push({ key, problems });
    else loaded.push({ entry, content });
  }

  // Duplication: new pages against each other, and against all 400 existing pages.
  // Every compiled Gurgaon page outside this set. The other set's pages count as duplicates,
  // but a page must never be compared with its own previous version.
  const existingSketches: Array<[string, number[]]> = Object.entries({ ...gurgaonSeoContentBySlug, ...gurgaonSeoExpansionContentBySlug })
    .filter(([slug]) => !byKey.has(slug))
    .map(([slug, c]) => [slug, sketch(allProse(c as unknown as Content))]);
  const newSketches: Array<[string, number[]]> = loaded.map(({ entry, content }) => [entry.key, sketch(allProse(content))]);

  const dupes: Array<{ a: string; b: string; score: number }> = [];
  const flagged = new Set<string>();
  for (let i = 0; i < newSketches.length; i += 1) {
    for (let j = i + 1; j < newSketches.length; j += 1) {
      const s = similarity(newSketches[i][1], newSketches[j][1]);
      if (s > MAX_JACCARD) {
        dupes.push({ a: newSketches[i][0], b: newSketches[j][0], score: Number(s.toFixed(3)) });
        flagged.add(newSketches[j][0]);
      }
    }
    for (const [slug, sk] of existingSketches) {
      const s = similarity(newSketches[i][1], sk);
      if (s > MAX_JACCARD) {
        dupes.push({ a: newSketches[i][0], b: `existing:${slug}`, score: Number(s.toFixed(3)) });
        flagged.add(newSketches[i][0]);
      }
    }
  }
  for (const key of flagged) issues.push({ key, problems: ["too similar to another page"] });

  const passing = loaded.filter(({ entry }) => !flagged.has(entry.key));
  const written = new Set(files.map((f) => f.replace(/\.json$/, "")));
  const pending = plan.filter((e) => !written.has(e.key)).map((e) => e.key);
  const retry = [...new Set([...issues.map((i) => i.key), ...pending])];

  mkdirSync(TMP, { recursive: true });
  writeFileSync(
    path.join(TMP, "quality-report.json"),
    JSON.stringify({ total: plan.length, written: files.length, passing: passing.length, failing: issues.length, pending: pending.length, issues, dupes }, null, 1),
  );
  writeFileSync(path.join(TMP, "retry-keys.txt"), retry.join("\n"));

  const wordCounts = passing.map(({ content }) => words(allProse(content)));
  console.log(`plan ${plan.length} | written ${files.length} | passing ${passing.length} | failing ${issues.length} | pending ${pending.length}`);
  if (wordCounts.length) {
    const total = wordCounts.reduce((a, b) => a + b, 0);
    console.log(`words: min ${Math.min(...wordCounts)} avg ${Math.round(total / wordCounts.length)} max ${Math.max(...wordCounts)} total ${total.toLocaleString()}`);
  }
  if (dupes.length) console.log(`duplicate pairs over ${MAX_JACCARD}: ${dupes.length}`);
  if (issues.length) {
    console.log("first failures:");
    for (const i of issues.slice(0, 8)) console.log(`  ${i.key}: ${i.problems.slice(0, 3).join("; ")}`);
  }

  if (!write) {
    console.log("(report only — pass --write to emit into src/)");
    return;
  }

  if (SET === "400") {
    // Original workbook pages: rewrite each passing per-slug module in place. Slugs and the
    // default export are unchanged, so pages-data.ts and content/index.ts need no regeneration,
    // and a page that has not passed yet keeps serving its current text.
    for (const { entry, content } of passing) {
      writeFileSync(
        path.join(LIB, "content", `${entry.slug}.ts`),
        `import type { GurgaonSeoContent } from "../types";\n\nconst content: GurgaonSeoContent = ${JSON.stringify(content, null, 2)};\n\nexport default content;\n`,
      );
    }
    console.log(`rewrote ${passing.length} original Gurgaon page modules in src/lib/gurgaon-seo/content/`);
    return;
  }

  // A page that is live from an earlier compile but fails today's gate keeps its live version
  // instead of disappearing from the site; it is replaced once its rewrite passes.
  const passingKeys = new Set(passing.map(({ entry }) => entry.key));
  const carried = Object.entries(gurgaonSeoExpansionContentBySlug)
    .filter(([slug]) => !passingKeys.has(slug) && byKey.has(slug))
    .map(([slug, content]) => ({ entry: byKey.get(slug) as PlanEntry, content: content as unknown as Content }));
  if (carried.length) console.log(`kept ${carried.length} live page(s) that fail today's gate: ${carried.map((c) => c.entry.key).join(", ")}`);
  const published = [...passing, ...carried];

  mkdirSync(OUT_CONTENT, { recursive: true });
  const ib = published.filter(({ entry }) => entry.board === "IB");
  const igcse = published.filter(({ entry }) => entry.board === "IGCSE");

  writeFileSync(path.join(OUT_CONTENT, "ib.json"), JSON.stringify(ib.map((p) => p.content), null, 1));
  writeFileSync(path.join(OUT_CONTENT, "igcse.json"), JSON.stringify(igcse.map((p) => p.content), null, 1));
  writeFileSync(
    path.join(OUT_CONTENT, "index.ts"),
    `// AUTO-GENERATED by scripts/gurgaon-500/compile.ts — do not edit by hand.
// Content for the Gurugram subject x area expansion. Shipped as two JSON shards rather
// than one module per slug: identical rendered output, one import instead of hundreds.
import type { GurgaonSeoContent } from "../../types";
import ibShard from "./ib.json";
import igcseShard from "./igcse.json";

const all = [...(ibShard as GurgaonSeoContent[]), ...(igcseShard as GurgaonSeoContent[])];

export const gurgaonSeoExpansionContentBySlug: Record<string, GurgaonSeoContent> = Object.fromEntries(
  all.map((c) => [c.slug, c]),
);
`,
  );
  writeFileSync(path.join(LIB, "pages-data-expansion.ts"), emitMeta(published.map((p) => p.entry)));

  console.log(`wrote ${ib.length} IB + ${igcse.length} IGCSE pages into src/lib/gurgaon-seo/`);
}

// Only when run directly, so claims.check.ts can import findClaims without running the gate.
if (/compile\.ts$/.test(process.argv[1] ?? "")) main();
