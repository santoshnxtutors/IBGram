/**
 * Resolves the Gurgaon keyword cannibalisation that collapsed those pages in search.
 *
 *   npx tsx scripts/seo/split-gurgaon-twins.ts          report only
 *   npx tsx scripts/seo/split-gurgaon-twins.ts --write  apply
 *
 * 43 pairs of pages shared a byte-identical primaryKeyword — "/gurgaon/ib-home-tutors/"
 * and "/gurgaon/ib-home-tutors-gurgaon/" both targeted "ib home tutors gurgaon". When two
 * URLs compete for one query Google picks one and suppresses the other, and which one it
 * picks is unstable, which is what the 6.3 -> 40.2 average position actually recorded.
 *
 * The bodies are not duplicates (~3% trigram overlap) and the "-gurgaon" twin already
 * carries an area-coverage angle in its H1 ("Corridor by Corridor", "Sector by Sector").
 * So each twin keeps its URL, its content and its index status; only the query it claims
 * changes. The "-gurgaon" twin takes the Gurugram spelling — the city's official name, a
 * separately-searched variant that no page on the site targeted at all — and keeps the
 * Gurgaon spelling as a secondary. Nothing is removed from the sitemap.
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/lib/gurgaon-keywords/pages.json";
const WRITE = process.argv.includes("--write");
type Page = Record<string, unknown> & {
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  h1: string;
};

const pages: Page[] = JSON.parse(readFileSync(FILE, "utf8"));

const byKeyword = new Map<string, Page[]>();
for (const p of pages) {
  const k = p.primaryKeyword.toLowerCase().trim();
  byKeyword.set(k, [...(byKeyword.get(k) ?? []), p]);
}
const groups = [...byKeyword.entries()].filter(([, v]) => v.length > 1);

/** Only the title-bearing fields move to Gurugram; body copy keeps both spellings. */
const TITLE_FIELDS = ["metaTitle", "h1", "heroTitle", "ogTitle", "twitterTitle", "breadcrumbTitle", "serviceFocus"] as const;
const toGurugram = (s: string) => s.replace(/\bGurgaon\b/g, "Gurugram").replace(/\bgurgaon\b/g, "gurugram");

let moved = 0;
const unresolved: string[] = [];

for (const [kw, twins] of groups) {
  // The "-gurgaon" slug is the one whose angle is area coverage, so it takes the variant.
  const target = twins.find((p) => p.slug.endsWith("-gurgaon")) ?? twins[1];
  if (!target) {
    unresolved.push(kw);
    continue;
  }
  const original = target.primaryKeyword;
  target.primaryKeyword = toGurugram(original);
  if (target.primaryKeyword === original) {
    unresolved.push(`${kw} (no Gurgaon token in keyword)`);
    continue;
  }
  // Keep the old spelling reachable rather than trading one query for another.
  const secondary = Array.isArray(target.secondaryKeywords) ? target.secondaryKeywords : [];
  target.secondaryKeywords = [...new Set([original, ...secondary.map(toGurugram), ...secondary])].slice(0, 14);
  for (const f of TITLE_FIELDS) {
    if (typeof target[f] === "string") target[f] = toGurugram(target[f] as string);
  }
  moved++;
}

// --- checks ---------------------------------------------------------------
const kws = pages.map((p) => p.primaryKeyword.toLowerCase());
const dupKw = [...new Set(kws.filter((k, i) => kws.indexOf(k) !== i))];
const titles = pages.map((p) => p.metaTitle.toLowerCase());
const dupTitle = [...new Set(titles.filter((t, i) => titles.indexOf(t) !== i))];
const overLong = pages.filter((p) => p.metaTitle.length > 60).length;

console.log(`duplicate keyword groups found   ${groups.length}`);
console.log(`pages re-pointed to Gurugram     ${moved}`);
console.log(`unresolved                       ${unresolved.length}`);
unresolved.forEach((u) => console.log(`   ${u}`));
console.log(`duplicate keywords remaining     ${dupKw.length}`);
dupKw.slice(0, 10).forEach((k) => console.log(`   ${k}`));
console.log(`duplicate metaTitles remaining   ${dupTitle.length}`);
dupTitle.slice(0, 10).forEach((t) => console.log(`   ${t}`));
console.log(`metaTitle over 60 chars          ${overLong} (resolvePageTitle shortens these at render)`);
console.log(`total pages                      ${pages.length} (unchanged — no page removed)`);

if (dupKw.length || dupTitle.length) {
  console.error("\nFAIL: collisions remain");
  process.exit(1);
}
if (WRITE) {
  writeFileSync(FILE, `${JSON.stringify(pages, null, 1)}\n`, "utf8");
  console.log(`\nwrote ${FILE}`);
} else {
  console.log("\ndry run — pass --write to apply");
}
