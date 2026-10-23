/**
 * Finds and fixes <title> collisions across every page source in the repo.
 *
 *   npx tsx scripts/seo/dedupe-titles.ts [--gsc=<dump.json>] [--write]
 *
 * The live crawl found 21 groups of pages sharing a title. Nine were the Gurgaon twins
 * and ten were Mumbai facets, both fixed in their own data files; the rest span two
 * different stores, so neither file could see the clash on its own. This walks all of
 * them at once, which is also the only way to catch a collision the crawl missed
 * because one of the two pages had not been deployed yet.
 *
 * Where a collision exists the page keeps its URL and its content; only the title
 * changes, and the replacement comes from the page's own H1, which in every observed
 * case already stated the distinguishing facet the title had dropped.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const WRITE = process.argv.includes("--write");
const STORE = "src/lib/generated-pages/pages";

type Row = Record<string, unknown>;
type Source = { file: string; field: "metaTitle" | "title"; rows: Row[] };

const load = (file: string, field: "metaTitle" | "title"): Source => {
  const d = JSON.parse(readFileSync(file, "utf8"));
  return { file, field, rows: Array.isArray(d) ? d : Object.values(d) };
};

const sources: Source[] = [
  ...readdirSync(STORE).filter((f) => f.endsWith(".json")).map((f) => load(join(STORE, f), "metaTitle")),
  load("src/lib/mumbai-seo/pages-data.json", "title"),
  load("src/lib/gurgaon-keywords/pages.json", "metaTitle"),
];

const pathOf = (r: Row) => String(r.fullPath ?? r.canonicalUrl ?? r.path ?? r.slug ?? "");
const norm = (t: string) => t.toLowerCase().replace(/\s*\|\s*ib ?gram\s*$/i, "").replace(/\s+/g, " ").trim();
const stripBrand = (t: string) => t.replace(/\s*\|\s*IB ?Gram\s*$/i, "").trim();

/** Search Console impressions per URL, when a dump is passed with --gsc=<file>. */
const GSC = process.argv.find((a) => a.startsWith("--gsc="))?.slice(6);
const imprByUrl = new Map<string, number>();
if (GSC) {
  const g = JSON.parse(readFileSync(GSC, "utf8"));
  for (const r of g.cur ?? []) imprByUrl.set(String(r.keys[0]).replace(/\/$/, ""), r.impressions ?? 0);
}
const impressions = (p: string) => {
  const abs = p.startsWith("http") ? p : `https://www.ibgram.com${p}`;
  return imprByUrl.get(abs.replace(/\/$/, "")) ?? 0;
};

/** Pages deeper in the URL tree are the specific ones, so they yield the generic title. */
const depth = (p: string) => p.replace(/^https?:\/\/[^/]+/, "").split("/").filter(Boolean).length;

const STOP = new Set(["in", "for", "the", "a", "an", "and", "or", "of", "to", "at", "with", "ib", "igcse"]);
const words = (s: string) => s.toLowerCase().match(/[a-z]+/g)?.filter((w) => !STOP.has(w)) ?? [];
/** A clause that mostly repeats the title it is meant to distinguish adds nothing. */
function redundant(base: string, clause: string): boolean {
  const b = new Set(words(base));
  const c = words(clause);
  if (!c.length) return true;
  return c.filter((w) => b.has(w)).length / c.length > 0.34;
}

/**
 * Two hub pages state their subject and city in the H1 and nothing more, so there is no
 * clause to lift. These are the only hand-written titles here; both name coverage the
 * pages already document.
 */
const CURATED: Record<string, string> = {
  "/mumbai/ib-tutors/": "IB Tutors in Mumbai | Home or Online, All Zones",
  "/mumbai/igcse-tutors/": "IGCSE Tutors in Mumbai | Cambridge & Edexcel Boards",
};

/**
 * The H1 usually carries the facet the title dropped, after a colon or a "for"/"in"
 * clause. Lift that clause rather than inventing one.
 */
/**
 * Last resort before giving up: the store a row lives in names the page type, and each
 * type has a facet that is true of every page in it. Narrower than lifting the H1, but
 * it never repeats the title it is distinguishing.
 */
const BY_STORE: Record<string, string> = {
  "ib-subject.json": "HL, SL & IA Support",
  "igcse-subject.json": "Core & Extended Papers",
  "ib-city.json": "DP, MYP & PYP",
  "igcse-city.json": "Cambridge & Edexcel",
  "ib-area.json": "Home & Online Lessons",
  "igcse-area.json": "Home & Online Lessons",
  "ib-sector.json": "Sector Coverage",
  "igcse-sector.json": "Sector Coverage",
  "ib-society.json": "At-Home Lessons",
  "igcse-society.json": "At-Home Lessons",
  "ib-school.json": "School-Matched Tutors",
  "igcse-school.json": "School-Matched Tutors",
  "ib-programme.json": "Programme Tutoring",
};

function distinguish(row: Row, base: string, store = ""): string | null {
  const curated = CURATED[pathOf(row)];
  if (curated) return curated;
  const h1 = typeof row.h1 === "string" ? row.h1 : "";
  const clause = h1.includes(":") ? h1.split(":").slice(1).join(":").trim() : "";
  for (const c of [clause, h1.replace(/^(Find|IB|IGCSE)\s+/i, "").trim()]) {
    if (!c || c.length < 8) continue;
    const short = c.length > 34 ? c.split(/,|\band\b/)[0].trim() : c;
    if (!short || short.length < 8 || redundant(base, short)) continue;
    const next = `${stripBrand(base)} | ${short}`;
    if (norm(next) !== norm(base)) return next;
  }
  // Fall back to the facet the URL itself names (".../mumbai/dp/" -> "DP").
  const seg = pathOf(row).replace(/\/$/, "").split("/").pop() ?? "";
  const label = seg.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  if (seg && !redundant(base, label)) return `${stripBrand(base)} | ${label}`;
  const byStore = BY_STORE[store];
  if (byStore && !redundant(base, byStore)) return `${stripBrand(base)} | ${byStore}`;
  return null;
}

const byTitle = new Map<string, Array<{ src: Source; row: Row }>>();
for (const src of sources) {
  for (const row of src.rows) {
    const t = row[src.field];
    if (typeof t !== "string" || !t) continue;
    byTitle.set(norm(t), [...(byTitle.get(norm(t)) ?? []), { src, row }]);
  }
}

const groups = [...byTitle.entries()].filter(([, v]) => v.length > 1);
const touched = new Set<string>();
const failed: string[] = [];
const log: string[] = [];
let fixed = 0;

for (const [, members] of groups) {
  // Keep the title on whichever page Search Console already shows earning for it;
  // moving an established page's title is the one change here that can lose traffic.
  const sorted = [...members].sort(
    (a, b) => impressions(pathOf(b.row)) - impressions(pathOf(a.row)) || depth(pathOf(a.row)) - depth(pathOf(b.row)),
  );
  for (const m of sorted.slice(1)) {
    const base = String(m.row[m.src.field]);
    const next = distinguish(m.row, base, basename(m.src.file));
    if (!next) {
      failed.push(pathOf(m.row));
      continue;
    }
    log.push(`${pathOf(m.row)}\n   was: ${base}\n   now: ${next}`);
    m.row[m.src.field] = next;
    // Keep the social titles in step so previews do not contradict the tab.
    for (const f of ["ogTitle", "twitterTitle"]) if (typeof m.row[f] === "string") m.row[f] = next;
    touched.add(m.src.file);
    fixed++;
  }
}

const after = new Map<string, number>();
for (const src of sources) {
  for (const row of src.rows) {
    const t = row[src.field];
    if (typeof t === "string" && t) after.set(norm(t), (after.get(norm(t)) ?? 0) + 1);
  }
}
const remaining = [...after.entries()].filter(([, n]) => n > 1);

console.log(`sources scanned          ${sources.length}`);
console.log(`pages scanned            ${sources.reduce((a, s) => a + s.rows.length, 0)}`);
console.log(`collision groups         ${groups.length}`);
console.log(`titles rewritten         ${fixed}`);
console.log(`could not distinguish    ${failed.length}`);
failed.slice(0, 10).forEach((f) => console.log(`   ${f}`));
console.log(`collisions remaining     ${remaining.length}`);
remaining.slice(0, 10).forEach(([t, n]) => console.log(`   ${n}x ${t}`));
console.log("");
log.slice(0, 25).forEach((l) => console.log(l));

if (remaining.length) {
  console.error("FAIL: collisions remain");
  process.exit(1);
}
if (WRITE) {
  for (const src of sources) {
    if (!touched.has(src.file)) continue;
    const orig = JSON.parse(readFileSync(src.file, "utf8"));
    const out = Array.isArray(orig) ? src.rows : Object.fromEntries(Object.keys(orig).map((k, i) => [k, src.rows[i]]));
    writeFileSync(src.file, `${JSON.stringify(out, null, 1)}\n`, "utf8");
    console.log(`wrote ${src.file}`);
  }
} else {
  console.log("dry run — pass --write to apply");
}
