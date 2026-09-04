/**
 * Quality gate for generated page content.
 *  - word count >= 2500
 *  - no banned AI-tell phrases
 *  - no unverifiable claims (tutor counts, score guarantees, school affiliation)
 *  - cross-page near-duplicate detection via 8-gram Jaccard on a MinHash sketch
 *  - keyword presence in title / H1 / intro
 * Run: npx tsx scripts/seo-content/check-quality.ts [--dir tmp/seo/out] [--fail-only]
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const ROOT = process.cwd();
const argv = process.argv.slice(2);
const DIR = path.join(ROOT, argv.includes("--dir") ? argv[argv.indexOf("--dir") + 1] : "tmp/seo/out");
const FAIL_ONLY = argv.includes("--fail-only");

/** Phrases that make copy read as machine-written, plus filler that adds no information. */
const BANNED = [
  "in today's fast-paced", "in today's digital", "delve into", "delving into", "unlock the",
  "unlock your", "navigate the complexities", "it is important to note", "it's important to note",
  "in conclusion", "in summary,", "moreover,", "furthermore,", "additionally,", "firstly,",
  "the landscape of", "educational landscape", "tapestry", "a testament to", "elevate your",
  "seamless", "robust solution", "leverage the", "game-changer", "game changer", "when it comes to",
  "look no further", "rest assured", "dive into", "embark on", "at the end of the day",
  "cutting-edge", "state-of-the-art", "world-class", "unparalleled", "plethora", "myriad of",
  "harness the power", "revolutionize", "paradigm shift", "holistic approach to learning",
  "in the realm of", "boasts a", "nestled in", "vibrant city of", "bustling city",
  "landscape", "ecosystem of", "in essence", "crucially,", "notably,", "that said,",
  "first and foremost", "the key takeaway", "one thing is clear",
];

/**
 * Claims the site cannot substantiate. Each is only a finding when it is NOT negated —
 * "no guaranteed grades" and "not officially affiliated with" are exactly what we asked for.
 */
const NEGATORS = /\b(no|not|never|without|nor|cannot|can't|won't|wont|shan't|shouldn't|isn't|aren't|doesn't|don't|wouldn't|couldn't|refuse|refuses|decline|declines|independent|avoid|rather than|instead of)\b/i;
const UNVERIFIABLE: Array<{ re: RegExp; label: string }> = [
  // "Sector 50 tutors reach Sector 49 quickest" is a place name, not a claim about
  // how many tutors exist. Gurugram sector and phase names collide with this rule on
  // ~150 pages, so exclude a number that is qualified by the place word before it.
  { re: /\b(?<!\b(?:sector|phase|block|pocket|sec\.?)\s)\d{2,}\+?\s+(verified\s+)?tutors\b/gi, label: "tutor count" },
  { re: /\bguarantee[ds]?\s+(a\s+)?(score|grade|7|result|improvement)/gi, label: "outcome guarantee" },
  { re: /\b(100%|guaranteed)\s+(success|results?|score)/gi, label: "success guarantee" },
  { re: /\b\d+%\s+of\s+(our\s+)?students\b/gi, label: "student statistic" },
  { re: /\bofficially\s+(affiliated|partnered)\s+with\b/gi, label: "affiliation claim" },
  { re: /\bnumber\s+one\b|\b#1\b|\bbest\s+in\s+india\b/gi, label: "superlative claim" },
  { re: /\brated\s+\d(\.\d)?\s*\/\s*5\b/gi, label: "rating claim" },
];

/**
 * True when the claim is being denied rather than made. The denial can sit on either side:
 * "No guaranteed grades" (before) and "a guaranteed 7 is not something anyone can promise" (after)
 * are both correct copy, so both windows are checked.
 */
const REPUDIATORS = /\b(is not|are not|cannot|can't|never|no one|nobody|anyone (offering|promising|claiming)|not being straight|irresponsible|red flag|walk away|be sceptical|be skeptical|impossible|claiming|claims to|promise than|smaller promise|treated with suspicion|suspicion|beware|distrust|myth|none of|none|be wary|wary of|worth doubting|doubting|doubt|promises a|offered as)\b/i;
function isNegated(text: string, index: number, matchLength: number): boolean {
  // 160 chars, not 80: the negator often opens a long clause whose subject runs on before
  // the claim, e.g. "No tutor working with a student connected to <long school name> can
  // guarantee a 7" — the "No" sits ~86 characters back and a short window misses it.
  const before = text.slice(Math.max(0, index - 160), index);
  const after = text.slice(index + matchLength, index + matchLength + 120);
  // Symmetric: the denial can precede the claim ("No guaranteed grades") or answer it
  // ("Do you guarantee a grade improvement? No, and any tutor claiming to...").
  return NEGATORS.test(before) || NEGATORS.test(after) || REPUDIATORS.test(before) || REPUDIATORS.test(after);
}

type Any = Record<string, any>;

function pageText(p: Any): string {
  return [
    p.heroSubtitle, p.introSummary,
    ...(p.contentBlocks ?? []).flatMap((b: Any) => [b.heading, b.body, ...(b.items ?? [])]),
    ...(p.faqs ?? []).flatMap((f: Any) => [f.question, f.answer]),
    p.finalCta,
  ].filter(Boolean).join(" ");
}

function normalize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}

/** 64-value MinHash sketch over 8-grams: cheap pairwise similarity across 1200+ pages. */
function sketch(tokens: string[]): number[] {
  const grams = new Set<string>();
  for (let i = 0; i + 8 <= tokens.length; i += 1) grams.add(tokens.slice(i, i + 8).join(" "));
  const mins = new Array(64).fill(Number.MAX_SAFE_INTEGER);
  for (const g of grams) {
    const h = createHash("md5").update(g).digest();
    for (let s = 0; s < 64; s += 1) {
      const v = h.readUInt32LE((s % 4) * 4) ^ (s * 2654435761);
      if (v < mins[s]) mins[s] = v;
    }
  }
  return mins;
}

function similarity(a: number[], b: number[]): number {
  let same = 0;
  for (let i = 0; i < a.length; i += 1) if (a[i] === b[i]) same += 1;
  return same / a.length;
}

const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => f.endsWith(".json")).sort() : [];
if (!files.length) {
  console.log(`No files in ${DIR}`);
  process.exit(0);
}

type Row = { key: string; url: string; words: number; issues: string[]; sketch: number[]; blocks: number; faqs: number; links: number };
const rows: Row[] = [];

for (const file of files) {
  const key = file.replace(/\.json$/, "");
  let p: Any;
  try {
    p = JSON.parse(readFileSync(path.join(DIR, file), "utf8"));
  } catch (e) {
    rows.push({ key, url: "", words: 0, issues: [`unparseable: ${(e as Error).message}`], sketch: [], blocks: 0, faqs: 0, links: 0 });
    continue;
  }
  const text = pageText(p);
  const tokens = normalize(text);
  const issues: string[] = [];

  if (tokens.length < 2500) issues.push(`thin: ${tokens.length} words (<2500)`);
  const lower = text.toLowerCase();
  const hits = BANNED.filter((b) => lower.includes(b));
  if (hits.length) issues.push(`ai-tell: ${hits.slice(0, 4).join(" | ")}`);
  UNVERIFIABLE.forEach(({ re, label }) => {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      if (!isNegated(text, m.index, m[0].length)) {
        issues.push(`unverifiable claim (${label}): "${m[0].slice(0, 50)}"`);
        break;
      }
    }
  });

  if (!p.metaTitle || p.metaTitle.length > 65) issues.push(`metaTitle length ${p.metaTitle?.length ?? 0} (want <=65)`);
  if (!p.metaDescription || p.metaDescription.length < 120 || p.metaDescription.length > 168) {
    issues.push(`metaDescription length ${p.metaDescription?.length ?? 0} (want 120-168)`);
  }
  // Stem-aware: "IGCSE Tutor in Chandigarh" satisfies the keyword "IGCSE tutors in Chandigarh".
  const stem = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean).map((w) => w.replace(/s$/, "")).join(" ");
  const head = stem(p.primaryKeyword ?? "").split(" ").slice(0, 2).join(" ");
  if (head && !stem(p.h1 ?? "").includes(head)) issues.push("h1 missing primary keyword head");
  if ((p.contentBlocks ?? []).length < 8) issues.push(`only ${(p.contentBlocks ?? []).length} content blocks (<8)`);
  if ((p.faqs ?? []).length < 6) issues.push(`only ${(p.faqs ?? []).length} FAQs (<6)`);
  if ((p.internalLinks ?? []).length < 4) issues.push(`only ${(p.internalLinks ?? []).length} internal links (<4)`);

  // Repetition inside the page itself.
  const headings = (p.contentBlocks ?? []).map((b: Any) => String(b.heading).toLowerCase());
  if (new Set(headings).size !== headings.length) issues.push("duplicate headings within page");

  // Heading stuffing: the keyword-density rules allow the primary keyword in the h1 plus at
  // most 1-2 H2s. More than 3 reads as forced and is a named SEO mistake.
  const kwHeadHits = headings.filter((h) => stem(h).includes(head)).length;
  if (head && kwHeadHits > 3) issues.push(`heading stuffing: primary keyword in ${kwHeadHits} H2s (max 3)`);

  rows.push({
    key, url: p.canonicalUrl ?? "", words: tokens.length, issues, sketch: sketch(tokens),
    blocks: (p.contentBlocks ?? []).length, faqs: (p.faqs ?? []).length, links: (p.internalLinks ?? []).length,
  });
}

// Cross-page near-duplicate pass.
const DUP_THRESHOLD = 0.5;
const dupPairs: Array<[string, string, number]> = [];
for (let i = 0; i < rows.length; i += 1) {
  for (let j = i + 1; j < rows.length; j += 1) {
    if (!rows[i].sketch.length || !rows[j].sketch.length) continue;
    const s = similarity(rows[i].sketch, rows[j].sketch);
    if (s >= DUP_THRESHOLD) {
      dupPairs.push([rows[i].key, rows[j].key, s]);
      rows[i].issues.push(`near-duplicate of ${rows[j].key} (${(s * 100).toFixed(0)}%)`);
      rows[j].issues.push(`near-duplicate of ${rows[i].key} (${(s * 100).toFixed(0)}%)`);
    }
  }
}

const failing = rows.filter((r) => r.issues.length);
const avgWords = Math.round(rows.reduce((a, r) => a + r.words, 0) / rows.length);

console.log(`Checked ${rows.length} pages in ${DIR}`);
console.log(`  average words: ${avgWords}`);
console.log(`  >=2500 words:  ${rows.filter((r) => r.words >= 2500).length}/${rows.length}`);
console.log(`  clean:         ${rows.length - failing.length}/${rows.length}`);
console.log(`  dup pairs:     ${dupPairs.length}`);

if (failing.length) {
  console.log(`\nPages with issues (${failing.length}):`);
  failing.slice(0, FAIL_ONLY ? 500 : 40).forEach((r) => console.log(`  ${r.key}\n      ${r.issues.join("\n      ")}`));
}

writeFileSync(
  path.join(ROOT, "tmp", "seo", "quality-report.json"),
  JSON.stringify({ checked: rows.length, avgWords, failing: failing.map((r) => ({ key: r.key, words: r.words, issues: r.issues })) }, null, 1),
  "utf8",
);
writeFileSync(path.join(ROOT, "tmp", "seo", "retry-keys.txt"), failing.map((r) => r.key).join("\n"), "utf8");
console.log(`\nReport -> tmp/seo/quality-report.json | retry list -> tmp/seo/retry-keys.txt`);
if (failing.length) process.exitCode = 1;
