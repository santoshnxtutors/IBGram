// Applies the 223 differentiation patches written by the writer agents.
//
// Titles, descriptions and intros came back 100% unique, so they apply as-is.
// FAQ answers did not: agents padded short answers from a shared filler pool and
// 30% of answer sentences ended up in a group repeated on 5+ pages (one on 35).
// Boilerplate repeated across siblings is the duplication this whole exercise is
// meant to remove, so those sentences are stripped rather than shipped.
//
//   node scripts/gurgaon-keywords/apply-differentiation.mjs           dry run
//   node scripts/gurgaon-keywords/apply-differentiation.mjs --write
import fs from "node:fs";

const WRITE = process.argv.includes("--write");
const DIR = "tmp/differentiate/out/";
const PAGES = "src/lib/gurgaon-keywords/pages.json";
const pages = JSON.parse(fs.readFileSync(PAGES, "utf8"));
const bySlug = new Map(pages.map((p) => [p.slug, p]));

const patches = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(fs.readFileSync(DIR + f, "utf8")));
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const splitSentences = (s) => String(s).split(/(?<=[.!?])\s+/).filter(Boolean);

// Count every answer sentence across all patches to find the shared filler.
const freq = new Map();
for (const p of patches) for (const f of p.faqs) for (const s of splitSentences(f.answer)) {
  const n = norm(s);
  if (n.split(" ").length < 5) continue;
  freq.set(n, (freq.get(n) ?? 0) + 1);
}
const FILLER_AT = 5;
const filler = new Set([...freq.entries()].filter(([, n]) => n >= FILLER_AT).map(([k]) => k));

let applied = 0, stripped = 0, shortened = 0, missing = [];
const MAX_T = 60, MAX_D = 165;
const warn = [];
for (const p of patches) {
  const page = bySlug.get(p.slug);
  if (!page) { missing.push(p.slug); continue; }

  if (p.metaTitle.length > MAX_T) warn.push(`${p.slug} title ${p.metaTitle.length}`);
  if (p.metaDescription.length > MAX_D) warn.push(`${p.slug} desc ${p.metaDescription.length}`);

  page.metaTitle = p.metaTitle;
  page.ogTitle = p.metaTitle;
  page.twitterTitle = p.metaTitle;
  page.metaDescription = p.metaDescription;
  page.ogDescription = p.metaDescription;
  page.twitterDescription = p.metaDescription;
  if (p.h1) { page.h1 = p.h1; page.heroTitle = p.h1; }
  if (p.introSummary) page.introSummary = p.introSummary;

  page.faqs = p.faqs.map((f) => {
    const kept = splitSentences(f.answer).filter((s) => !filler.has(norm(s)));
    if (kept.length !== splitSentences(f.answer).length) stripped++;
    // A stripped answer that lost everything keeps its original first sentence.
    const answer = (kept.length ? kept.join(" ") : splitSentences(f.answer)[0] ?? f.answer).trim();
    if (answer.split(/\s+/).length < 25) shortened++;
    return { question: f.question, answer };
  });
  page.lastUpdated = new Date().toISOString().slice(0, 10);
  applied++;
}

console.log(`patches found        : ${patches.length}`);
console.log(`applied to pages     : ${applied}`);
console.log(`slug not in pages.json: ${missing.length} ${missing.slice(0, 5).join(", ")}`);
console.log(`filler sentences     : ${filler.size} distinct, repeated on ${FILLER_AT}+ pages`);
console.log(`answers stripped     : ${stripped}`);
console.log(`answers kept original (strip would have gone under 20 words): ${shortened}`);
console.log(`length warnings      : ${warn.length} ${warn.slice(0, 3).join("; ")}`);
console.log(`pages.json total     : ${pages.length}  (must stay 377)`);

if (!WRITE) { console.log("\ndry run - pass --write to apply"); process.exit(0); }
fs.writeFileSync(PAGES, JSON.stringify(pages, null, 1).replace(/\r\n/g, "\n") + "\n", "utf8");
console.log(`\nwrote ${PAGES}`);
