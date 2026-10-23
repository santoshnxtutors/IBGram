/**
 * Repairs meta descriptions that were cut off at generation and shipped with a literal
 * ellipsis, and restores the subject on pages whose subject lookup fell through.
 *
 *   npx tsx scripts/seo/fix-truncated-metas.ts [--write]
 *
 * 2,191 of the 2,219 Mumbai descriptions ended in "...", so almost every Mumbai result
 * showed a sentence stopping mid-clause — the snippet is the only copy a searcher reads
 * before deciding whether to click, and a dangling one reads as a broken page.
 *
 * A second fault surfaced alongside it: some pages whose slug and keyword name a subject
 * ("ib-dp-english-a-home-tutor-in-worli") carry the generic "all IB and IGCSE subjects"
 * in their subject field, so neither the H1 nor the description ever mentions English A.
 * That is the same subject-table fall-through that mislabelled the 0607 pages; here the
 * keyword still holds the answer, so it is recovered from there.
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/lib/mumbai-seo/pages-data.json";
const WRITE = process.argv.includes("--write");
const GENERIC = "all IB and IGCSE subjects";

type Page = {
  slug: string;
  title: string;
  h1: string;
  subject: string;
  primaryKeyword: string;
  metaDescription: string;
  kind: string;
  [k: string]: unknown;
};

const pages: Page[] = JSON.parse(readFileSync(FILE, "utf8"));

/**
 * Ends the text on a complete thought. A trailing clause that was severed mid-phrase
 * ("...HL/SL and Core/Extended") says less than dropping it, so cut back to the last
 * comma or full stop that still leaves a usable description.
 */
function untruncate(desc: string): string {
  let t = desc.replace(/\s*(?:\.\.\.|…)\s*$/, "").trim();
  if (t === desc.trim()) return desc.trim();
  const comma = t.lastIndexOf(",");
  const stop = Math.max(t.lastIndexOf(". "), t.lastIndexOf("? "), t.lastIndexOf("! "));
  if (comma > 100) t = t.slice(0, comma);
  else if (stop > 100) t = t.slice(0, stop);
  t = t.replace(/[\s,;:—–-]+$/, "").trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

/** Title-case the subject the keyword names, e.g. "english a" -> "English A". */
const SUBJECT_CASE: Record<string, string> = {
  a: "A", b: "B", hl: "HL", sl: "SL", aa: "AA", ai: "AI", ia: "IA", ict: "ICT",
  ee: "EE", tok: "TOK", esl: "ESL", efl: "EFL",
};
const caseSubject = (s: string) =>
  s
    .split(/\s+/)
    .map((w) => SUBJECT_CASE[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/**
 * The keyword reads "<board> <programme> <subject> <mode> tutor in <locality>". Modes
 * are stripped first, otherwise a page with no subject at all ("IB DP home tutor in
 * Worli") hands back "home" as its subject.
 */
const NOT_A_SUBJECT =
  /^(?:ib|igcse|dp|myp|pyp|cp|diploma|gram|examiner|retake|resit|hybrid|near|year|home|online|private|tutor|tuition|classes|coaching|fees|reviews|contact|jobs|summer|revision|score|crash|holiday|bootcamp|intensive)\b/i;

function subjectFromKeyword(p: Page): string | null {
  // Brand pages ("IB Gram home tutor in Mumbai") name no subject.
  if (/\bIB ?Gram\b/i.test(p.primaryKeyword)) return null;
  const kw = p.primaryKeyword.replace(/\b(?:home|online|private|hybrid)\b/gi, " ").replace(/\s+/g, " ").trim();
  const m = kw.match(
    /^(?:IB\s+and\s+IGCSE|IB\s+IGCSE|IB\s+(?:DP|MYP|PYP|CP)|Cambridge\s+IGCSE|Edexcel\s+IGCSE|IGCSE|IB)\s+(.+?)\s+(?:tutor|tuition|classes|coaching)\b/i,
  );
  const raw = m?.[1]?.trim();
  if (!raw || raw.length < 2 || NOT_A_SUBJECT.test(raw)) return null;
  return caseSubject(raw);
}

const seenSubjects = new Set<string>();
let untruncated = 0;
let resubjected = 0;
const log: string[] = [];

for (const p of pages) {
  const fixed = untruncate(p.metaDescription);
  if (fixed !== p.metaDescription.trim()) {
    if (untruncated < 3) log.push(`${p.slug}\n   was: ${p.metaDescription}\n   now: ${fixed}`);
    p.metaDescription = fixed;
    untruncated++;
  }
  // Only pages that name a subject in their keyword but carry the generic one.
  if (p.subject !== GENERIC || p.kind === "locality" || p.kind === "zone" || p.kind === "hub" || p.kind === "brand") continue;
  const subject = subjectFromKeyword(p);
  if (!subject) continue;
  const before = `${p.subject} | ${p.h1} | ${p.metaDescription.slice(0, 60)}`;
  p.subject = subject;
  // The generic phrase reads as a bug wherever it was spliced into prose.
  for (const f of ["h1", "title", "metaDescription"] as const) {
    if (typeof p[f] === "string" && p[f].includes(GENERIC)) p[f] = p[f].replace(GENERIC, subject);
  }
  // Pages whose H1 simply omitted the subject get it inserted after the programme.
  if (!p.h1.toLowerCase().includes(subject.toLowerCase())) {
    p.h1 = p.h1.replace(/^(IB\s+(?:DP|MYP|PYP)|IGCSE|IB)\b/i, `$1 ${subject}`);
  }
  if (!p.metaDescription.toLowerCase().includes(subject.toLowerCase())) {
    p.metaDescription = p.metaDescription.replace(/^(IB\s+(?:DP|MYP|PYP)|IGCSE|IB)\b/i, `$1 ${subject}`);
  }
  if (resubjected < 4) log.push(`${p.slug}\n   was: ${before}\n   now: ${p.subject} | ${p.h1} | ${p.metaDescription.slice(0, 60)}`);
  seenSubjects.add(p.slug);
  resubjected++;
}

const stillEllipsis = pages.filter((p) => /(\.\.\.|…)\s*$/.test(p.metaDescription)).length;
const stillGeneric = pages.filter((p) => p.metaDescription.includes(GENERIC)).length;
const tooShort = pages.filter((p) => p.metaDescription.length < 70).length;
const tooLong = pages.filter((p) => p.metaDescription.length > 165).length;

console.log(`descriptions repaired        ${untruncated}`);
console.log(`subjects recovered           ${resubjected}`);
console.log(`still ending in ellipsis     ${stillEllipsis}`);
console.log(`still naming the generic     ${stillGeneric}`);
console.log(`under 70 chars               ${tooShort}`);
console.log(`over 165 chars               ${tooLong}`);
console.log(`total pages                  ${pages.length} (unchanged)`);
const recovered = new Map<string, number>();
for (const p of pages) if (seenSubjects.has(p.slug)) recovered.set(p.subject, (recovered.get(p.subject) ?? 0) + 1);
console.log("");
console.log("recovered subjects:");
[...recovered.entries()].sort((a, b) => b[1] - a[1]).forEach(([s2, n]) => console.log(`   ${String(n).padStart(4)}  ${s2}`));
console.log("");
log.forEach((l) => console.log(l));

if (stillEllipsis) {
  console.error("FAIL: ellipsis remains");
  process.exit(1);
}
if (WRITE) {
  writeFileSync(FILE, `${JSON.stringify(pages, null, 1)}\n`, "utf8");
  console.log(`\nwrote ${FILE}`);
} else {
  console.log("dry run — pass --write to apply");
}
