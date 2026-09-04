/**
 * Surgically replaces AI-tell phrases in agent output rather than re-running a whole agent
 * (a rewrite costs ~87k tokens; a substitution costs nothing). Each replacement is a natural
 * synonym in context, so prose stays human.
 *
 * Anything it cannot safely rewrite is reported so the page can be re-run deliberately.
 * Run: npx tsx scripts/seo-content/fix-tells.ts [--dry]
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "tmp", "seo", "agent-out");
const DRY = process.argv.includes("--dry");

/** Ordered: longer/more specific patterns first so they win over the generic fallbacks. */
const SUBS: Array<[RegExp, string]> = [
  [/\bThat said,\s*/g, "Even so, "],
  [/\bthat said,\s*/g, "even so, "],
  [/\bIn essence,\s*/g, "Put simply, "],
  [/\bin essence,\s*/g, "put simply, "],
  [/\bCrucially,\s*/g, "The important part: "],
  [/\bcrucially,\s*/g, "and this is the important part, "],
  [/\bNotably,\s*/g, "Worth noting: "],
  [/\bnotably,\s*/g, "worth noting, "],
  [/\bFirst and foremost,\s*/g, "Before anything else, "],
  [/\bfirst and foremost\b/g, "before anything else"],
  [/\bThe key takeaway is\b/g, "What matters here is"],
  [/\bthe key takeaway is\b/g, "what matters here is"],
  [/\bOne thing is clear:\s*/g, ""],
  [/\bone thing is clear,?\s*/g, ""],

  // "landscape" / "ecosystem" — replaced by what the sentence actually means.
  [/\bschool ecosystem\b/gi, "school cluster"],
  [/\becosystem of schools\b/gi, "cluster of schools"],
  [/\becosystem of\b/gi, "network of"],
  [/\bIB landscape\b/g, "IB tutoring market"],
  [/\bIGCSE landscape\b/g, "IGCSE tutoring market"],
  [/\btutoring landscape\b/gi, "tutoring market"],
  [/\beducational landscape\b/gi, "school system"],
  [/\bacademic landscape\b/gi, "academic picture"],
  [/\bthe landscape of\b/gi, "the shape of"],
  [/\blandscape\b/gi, "picture"],

  [/\bwhen it comes to\b/gi, "for"],
  [/\bAt the end of the day,\s*/g, "Ultimately, "],
  [/\bat the end of the day\b/gi, "ultimately"],
  [/\brest assured\b/gi, "you can expect"],
  [/\bseamlessly\b/gi, "without friction"],
  [/\bseamless\b/gi, "smooth"],
  [/\bcutting-edge\b/gi, "current"],
  [/\bworld-class\b/gi, "strong"],
  [/\bmyriad of\b/gi, "many"],
  [/\bplethora of\b/gi, "range of"],
  [/\bdive into\b/gi, "work through"],
  [/\bdelve into\b/gi, "work through"],
  [/\bembark on\b/gi, "start"],
];

/** Tells with no safe mechanical rewrite — these need a real re-run. */
const UNFIXABLE = [
  "in today's fast-paced", "in today's digital", "tapestry", "a testament to",
  "paradigm shift", "revolutionize", "harness the power", "holistic approach to learning",
  "look no further", "unlock the", "unlock your", "navigate the complexities",
];

const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => f.endsWith(".json")).sort() : [];
let changedFiles = 0;
let totalSubs = 0;
const needsRerun: string[] = [];

/**
 * Substitute inside parsed string values, never in the raw JSON text.
 *
 * Operating on raw text silently misses matches: in the file, a newline is the two
 * characters `\` and `n`, so a tell right after a paragraph break reads as `...\nThat
 * said,` — the `n` is a word character, so `\bThat said,` finds no word boundary and
 * never fires. Walking parsed values also makes it impossible to corrupt the JSON,
 * since re-serialisation re-escapes whatever we substitute in.
 */
function substituteDeep(value: unknown, count: { n: number }): unknown {
  if (typeof value === "string") {
    let out = value;
    for (const [re, to] of SUBS) {
      out = out.replace(re, () => {
        count.n += 1;
        return to;
      });
    }
    return out;
  }
  if (Array.isArray(value)) return value.map((v) => substituteDeep(v, count));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, substituteDeep(v, count)]));
  }
  return value;
}

for (const file of files) {
  const full = path.join(DIR, file);
  const before = readFileSync(full, "utf8");

  let parsed: unknown;
  try {
    parsed = JSON.parse(before);
  } catch (e) {
    console.error(`SKIPPED ${file}: not valid JSON (${(e as Error).message})`);
    needsRerun.push(`${file.replace(/\.json$/, "")}: invalid JSON, must be rewritten`);
    continue;
  }

  const count = { n: 0 };
  const fixed = substituteDeep(parsed, count);
  const after = `${JSON.stringify(fixed, null, 1)}\n`;

  const lower = JSON.stringify(fixed).toLowerCase();
  const stuck = UNFIXABLE.filter((u) => lower.includes(u));
  if (stuck.length) needsRerun.push(`${file.replace(/\.json$/, "")}: ${stuck.join(", ")}`);

  if (count.n > 0) {
    if (!DRY) writeFileSync(full, after, "utf8");
    changedFiles += 1;
    totalSubs += count.n;
    console.log(`${DRY ? "would fix" : "fixed"} ${file.replace(/\.json$/, "")} (${count.n} substitutions)`);
  }
}

console.log(`\n${DRY ? "Would change" : "Changed"} ${changedFiles}/${files.length} files, ${totalSubs} substitutions.`);
if (needsRerun.length) {
  console.log(`\n${needsRerun.length} page(s) need a real re-run (no safe substitution):`);
  needsRerun.forEach((n) => console.log(`  - ${n}`));
}
