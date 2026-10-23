/**
 * Rebuilds the Mumbai titles that collided in search.
 *
 *   npx tsx scripts/seo/fix-mumbai-dupe-titles.ts          report only
 *   npx tsx scripts/seo/fix-mumbai-dupe-titles.ts --write  apply
 *
 * 21 groups of live pages shipped identical <title>s. The cause is the same in every
 * case: the title was built from the page's board and subject and ignored the facet its
 * own primaryKeyword names. So /mumbai/ib-chemistry-ia-help/ was titled "IB Chemistry
 * Tutor in Mumbai" — the same as /mumbai/ib-chemistry-tutor/ — and never mentioned the
 * IA; and the Cambridge Lower Secondary Checkpoint page was titled "Cambridge IGCSE
 * Mathematics (0580)", a different qualification entirely.
 *
 * The primaryKeyword is the page's reason to exist, so it is the source of truth here.
 * Titles are rebuilt from it; no page is removed and no URL changes.
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/lib/mumbai-seo/pages-data.json";
const WRITE = process.argv.includes("--write");
type Page = { slug: string; title: string; h1: string; primaryKeyword: string; [k: string]: unknown };

const pages: Page[] = JSON.parse(readFileSync(FILE, "utf8"));

/** Words the data lower-cases that must read as acronyms or proper nouns in a title. */
const CASED: Record<string, string> = {
  ib: "IB", igcse: "IGCSE", ia: "IA", ee: "EE", tok: "TOK", hl: "HL", sl: "SL",
  aa: "AA", ai: "AI", myp: "MYP", dp: "DP", pyp: "PYP", cp: "CP", ict: "ICT",
  edexcel: "Edexcel", cambridge: "Cambridge", mumbai: "Mumbai", jbcn: "JBCN",
  gcse: "GCSE", esl: "ESL", efl: "EFL", ucas: "UCAS", "4it1": "4IT1", "0580": "0580",
  and: "and", or: "or", the: "the", in: "in", for: "for", of: "of", at: "at", to: "to",
  a: "a", an: "an", with: "with", vs: "vs", near: "near", me: "me",
};

const titleCase = (kw: string) =>
  kw
    .split(/\s+/)
    .map((w, i) => {
      const lower = w.toLowerCase();
      const mapped = CASED[lower];
      if (mapped) return i === 0 ? mapped[0].toUpperCase() + mapped.slice(1) : mapped;
      if (/^\d/.test(w)) return w;
      return w[0].toUpperCase() + w.slice(1);
    })
    .join(" ")
    // "ib chemistry ia help in Mumbai" reads better with the facet set off.
    .replace(/\bIa\b/g, "IA");

/**
 * A school page's keyword reads "IB IGCSE tutor for jbcn international school borivali
 * students in Mumbai" — accurate but unreadable as a title, and it buries the campus that
 * distinguishes it from its four siblings. The H1 already names school and campus with
 * the right casing ("JVLR", not "Jvlr"), so lead with that instead.
 */
function schoolTitle(p: Page): string | null {
  if (!/^ib-igcse-tutor-for-.*-students$/.test(p.slug)) return null;
  const name = p.h1
    .replace(/^IB\s*&?\s*IGCSE Tutors for\s*/i, "")
    .replace(/\s*Students\s*$/i, "")
    .trim();
  return name ? `${name} | IB & IGCSE Tutors` : null;
}

/**
 * The two brand pages share one keyword in two spellings ("IB Gram Mumbai" and "IB Gram
 * in Mumbai"), which title-casing alone cannot separate. They get the one hand-written
 * split in this file: the hub keeps the service summary, the other states what it does.
 */
const BRAND_TITLES: Record<string, string> = {
  "ibgram-mumbai": "IB Gram Mumbai: IB & IGCSE Home Tutors",
  ibgram: "IB Gram in Mumbai: How Tutor Matching Works",
};

/** Group by the title actually rendered, so cross-facet collisions surface. */
const byTitle = new Map<string, Page[]>();
for (const p of pages) {
  const k = p.title.toLowerCase().replace(/\s*\|\s*ib ?gram\s*$/i, "").trim();
  byTitle.set(k, [...(byTitle.get(k) ?? []), p]);
}
const groups = [...byTitle.entries()].filter(([, v]) => v.length > 1);

let fixed = 0;
const changes: string[] = [];
for (const [, twins] of groups) {
  // The page whose keyword the shared title already matches keeps it; the rest are
  // rebuilt from their own keyword, which is the facet the shared title omitted.
  const keeper = twins.find((p) => p.title.toLowerCase().includes(p.primaryKeyword.toLowerCase().replace(/\s+in\s+mumbai$/, "")));
  for (const p of twins) {
    if (p === keeper && !BRAND_TITLES[p.slug]) continue;
    const next = BRAND_TITLES[p.slug] ?? schoolTitle(p) ?? titleCase(p.primaryKeyword);
    if (next.toLowerCase() === p.title.toLowerCase()) continue;
    changes.push(`${p.slug}\n   was: ${p.title}\n   now: ${next}`);
    p.title = next;
    // The H1 is wrong in the same way wherever it simply mirrored the title.
    if (!p.h1.toLowerCase().includes(p.primaryKeyword.split(/\s+/)[1]?.toLowerCase() ?? "")) p.h1 = next;
    fixed++;
  }
}

const titles = pages.map((p) => p.title.toLowerCase().replace(/\s*\|\s*ib ?gram\s*$/i, "").trim());
const dup = [...new Set(titles.filter((t, i) => titles.indexOf(t) !== i))];

console.log(`colliding title groups   ${groups.length}`);
console.log(`titles rebuilt           ${fixed}`);
console.log(`collisions remaining     ${dup.length}`);
dup.forEach((d) => console.log(`   ${d}`));
console.log(`total pages              ${pages.length} (unchanged)`);
console.log("");
changes.slice(0, 30).forEach((c) => console.log(c));

if (WRITE) {
  writeFileSync(FILE, `${JSON.stringify(pages, null, 1)}\n`, "utf8");
  console.log(`\nwrote ${FILE}`);
} else {
  console.log("\ndry run — pass --write to apply");
}
