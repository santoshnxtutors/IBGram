// Applies the rank-fix patches onto whichever JSON store owns each page.
//
// Pages ranked 20+ live across several stores (gurgaon-keywords, india-keywords
// and the generated-pages shards), so patches are keyed by canonical path and
// routed to the file that actually holds that row. Page counts are asserted
// before and after: this must never add or drop a sitemap URL.
//
//   node scripts/gsc/apply-rank-fix.mjs           dry run
//   node scripts/gsc/apply-rank-fix.mjs --write
import fs from "node:fs";
import path from "node:path";

const WRITE = process.argv.includes("--write");
const ROOT = "tmp/rank-fix";

const patches = [];
for (const d of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, d);
  if (!d.startsWith("out-") || !fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".json")) continue;
    try { patches.push({ ...JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")), _from: `${d}/${f}` }); }
    catch (e) { console.error(`BAD JSON ${d}/${f}: ${e.message}`); }
  }
}
console.log(`patches read: ${patches.length}`);

// Index every store row by canonical path.
const stores = new Map();           // file -> parsed array
const rowAt = new Map();            // path -> { file, row }
const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  const f = path.join(d, e.name);
  if (e.isDirectory()) { walk(f); continue; }
  if (!e.name.endsWith(".json")) continue;
  try {
    const parsed = JSON.parse(fs.readFileSync(f, "utf8"));
    const arr = Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.pages) ? parsed.pages : null);
    // continue, not return: a return here abandoned the rest of the directory
    // the moment it met a JSON file that was not a page store, which is why 39
    // pages under generated-pages/ were reported missing.
    if (!arr || !arr.length || !arr[0]?.canonicalUrl) continue;
    stores.set(f, arr);
    for (const row of arr) if (row?.canonicalUrl) rowAt.set(new URL(row.canonicalUrl).pathname, { file: f, row });
  } catch {}
} };
walk("src/lib");
const before = new Map([...stores].map(([f, a]) => [f, a.length]));

// Cross-page filler: agents pad short answers from a shared pool, and a sentence
// repeated across siblings is the duplication this work exists to remove.
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const sentences = (s) => String(s).split(/(?<=[.!?])\s+/).filter(Boolean);
const freq = new Map();
for (const p of patches) for (const f of p.faqs ?? []) for (const s of sentences(f.answer)) {
  const n = norm(s); if (n.split(" ").length < 5) continue;
  freq.set(n, (freq.get(n) ?? 0) + 1);
}
const filler = new Set([...freq.entries()].filter(([, n]) => n >= 5).map(([k]) => k));

let applied = 0, strippedAnswers = 0, keptOriginal = 0;
const missing = [], tooLong = [];
for (const p of patches) {
  const hit = rowAt.get(p.url);
  if (!hit) { missing.push(p.url); continue; }
  const row = hit.row;
  if ((p.metaTitle ?? "").length > 60) tooLong.push(`${p.url} title ${p.metaTitle.length}`);
  if ((p.metaDescription ?? "").length > 165) tooLong.push(`${p.url} desc ${p.metaDescription.length}`);

  if (p.metaTitle) { row.metaTitle = p.metaTitle; row.ogTitle = p.metaTitle; row.twitterTitle = p.metaTitle; }
  if (p.metaDescription) { row.metaDescription = p.metaDescription; row.ogDescription = p.metaDescription; row.twitterDescription = p.metaDescription; }
  if (p.h1) { row.h1 = p.h1; row.heroTitle = p.h1; }
  if (p.introSummary) row.introSummary = p.introSummary;
  if (Array.isArray(p.secondaryKeywords) && p.secondaryKeywords.length) {
    const seen = new Set(), merged = [];
    for (const k of [...p.secondaryKeywords, ...(row.secondaryKeywords ?? [])]) {
      if (!k || seen.has(norm(k))) continue; seen.add(norm(k)); merged.push(k);
    }
    row.secondaryKeywords = merged.slice(0, 40);
  }
  if (Array.isArray(p.faqs) && p.faqs.length) {
    row.faqs = p.faqs.map((f) => {
      const original = String(f.answer ?? "").trim();
      const kept = sentences(original).filter((s) => !filler.has(norm(s)));
      const cleaned = kept.join(" ").trim();
      const useCleaned = cleaned.split(/\s+/).filter(Boolean).length >= 20;
      if (useCleaned && kept.length !== sentences(original).length) strippedAnswers++;
      if (!useCleaned) keptOriginal++;
      return { question: f.question, answer: useCleaned ? cleaned : original };
    });
  }
  row.lastUpdated = new Date().toISOString().slice(0, 10);
  applied++;
}

console.log(`applied            : ${applied}`);
console.log(`url not found      : ${missing.length} ${missing.slice(0, 4).join(", ")}`);
console.log(`filler sentences   : ${filler.size} distinct (on 5+ pages)`);
console.log(`answers stripped   : ${strippedAnswers}   kept original (would go <20 words): ${keptOriginal}`);
console.log(`length violations  : ${tooLong.length} ${tooLong.slice(0, 3).join("; ")}`);

const touched = [...new Set(patches.map((p) => rowAt.get(p.url)?.file).filter(Boolean))];
console.log(`\nstores touched:`);
for (const f of touched) console.log(`  ${before.get(f)} rows  ${f.split(path.sep).join("/")}`);

if (!WRITE) { console.log("\ndry run - pass --write to apply"); process.exit(0); }
for (const f of touched) {
  const arr = stores.get(f);
  if (arr.length !== before.get(f)) throw new Error(`row count changed in ${f}: ${before.get(f)} -> ${arr.length}`);
  fs.writeFileSync(f, JSON.stringify(arr, null, 1).replace(/\r\n/g, "\n") + "\n", "utf8");
}
console.log(`\nwrote ${touched.length} store files, all row counts unchanged`);
