/**
 * Fixes duplicate meta descriptions across every page source in the repo.
 *
 *   npx tsx scripts/seo/dedupe-metas.ts [--write]
 *
 * The live crawl found 58 groups covering 148 pages. They come from one template that
 * described the board and grade range but not the facet separating the siblings, so
 * /gurgaon/ib-tutor/, /gurgaon/ib-online-tutor/, /gurgaon/ib-academic-tutor/ and
 * /gurgaon/ib-exam-tutor/ all shipped the same sentence. A duplicate description does
 * not stop a page indexing, but it removes the one piece of the result a reader uses to
 * tell the four pages apart, which is why their CTR sat at zero.
 *
 * The H1 already names each page's facet, so the lead sentence is rebuilt from it and
 * the trust clause the template provided is kept. No page or URL changes.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const WRITE = process.argv.includes("--write");
const STORE = "src/lib/generated-pages/pages";
const LIMIT = 160;

type Row = Record<string, unknown>;
type Source = { file: string; field: string; rows: Row[] };

const load = (file: string, field: string): Source => {
  const d = JSON.parse(readFileSync(file, "utf8"));
  return { file, field, rows: Array.isArray(d) ? d : Object.values(d) };
};

const sources: Source[] = [
  ...readdirSync(STORE).filter((f) => f.endsWith(".json")).map((f) => load(join(STORE, f), "metaDescription")),
  load("src/lib/mumbai-seo/pages-data.json", "metaDescription"),
  load("src/lib/gurgaon-keywords/pages.json", "metaDescription"),
];

const pathOf = (r: Row) => String(r.fullPath ?? r.canonicalUrl ?? r.path ?? r.slug ?? "");
const norm = (t: string) => t.toLowerCase().replace(/\s+/g, " ").trim();

/** Trim to the last whole sentence, else the last whole word, inside the budget. */
function clip(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= LIMIT) return t;
  const cut = t.slice(0, LIMIT + 1);
  const dot = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  if (dot > 100) return t.slice(0, dot + 1).trim();
  const at = cut.lastIndexOf(" ");
  return (at > 90 ? cut.slice(0, at) : t.slice(0, LIMIT)).replace(/[\s,;:—–-]+$/, "").trim();
}

/** Rejects a rebuild that says the same four words twice, e.g. a lead the tail repeats. */
function repeatsItself(text: string): boolean {
  const w = norm(text).split(" ");
  const seen = new Set<string>();
  for (let i = 0; i + 4 <= w.length; i++) {
    const g = w.slice(i, i + 4).join(" ");
    if (seen.has(g)) return true;
    seen.add(g);
  }
  return false;
}

/**
 * The template's second half ("verified tutors, a free trial class, ...") is the part
 * worth keeping; only the opening sentence, which was identical across the group, is
 * replaced — with the page's own H1, which already names the facet that separates it.
 */
function rebuild(row: Row, base: string): string | null {
  // The template put its useful half after either a full stop or a colon.
  const tailAt = base.search(/[.:]\s/);
  const raw = tailAt > 0 ? base.slice(tailAt + 1).trim() : "";
  const tail = raw ? `${raw.charAt(0).toUpperCase()}${raw.slice(1)}` : "";
  const leads = [row.h1, row.title, row.metaTitle].filter((x): x is string => typeof x === "string" && x.length > 7);
  for (const raw of leads) {
    const lead = raw.trim().replace(/\s*\|\s*IB ?Gram\s*$/i, "").replace(/\.$/, "").trim();
    // A lead the tail already opens with would just say the same thing twice.
    if (!lead || tail.toLowerCase().startsWith(lead.toLowerCase().slice(0, 24))) continue;
    const next = clip(tail ? `${lead}. ${tail}` : lead);
    // A description shorter than this says less than the duplicate it replaces.
    if (next.length < 110 || norm(next) === norm(base) || repeatsItself(next)) continue;
    return next;
  }
  return null;
}

const byDesc = new Map<string, Array<{ src: Source; row: Row }>>();
for (const src of sources) {
  for (const row of src.rows) {
    const d = row[src.field];
    if (typeof d !== "string" || !d) continue;
    byDesc.set(norm(d), [...(byDesc.get(norm(d)) ?? []), { src, row }]);
  }
}

const groups = [...byDesc.entries()].filter(([, v]) => v.length > 1);
const touched = new Set<string>();
const failed: string[] = [];
const log: string[] = [];
let fixed = 0;

for (const [, members] of groups) {
  // Keep the wording on a page that cannot be rebuilt — its H1 and title are already
  // the description, so there is nothing distinct left to lead with. Only if every
  // member can be rebuilt does the first one keep the original.
  const planned = members.map((m) => ({ m, next: rebuild(m.row, String(m.row[m.src.field])) }));
  const keeper = planned.find((p) => !p.next) ?? planned[0];
  for (const { m, next } of planned) {
    if (m === keeper.m) continue;
    const base = String(m.row[m.src.field]);
    if (!next) {
      failed.push(pathOf(m.row));
      continue;
    }
    log.push(`${pathOf(m.row)}\n   was: ${base}\n   now: ${next}`);
    m.row[m.src.field] = next;
    for (const f of ["ogDescription", "twitterDescription"]) if (typeof m.row[f] === "string") m.row[f] = next;
    touched.add(m.src.file);
    fixed++;
  }
}

const after = new Map<string, number>();
let over = 0;
for (const src of sources) {
  for (const row of src.rows) {
    const d = row[src.field];
    if (typeof d !== "string" || !d) continue;
    after.set(norm(d), (after.get(norm(d)) ?? 0) + 1);
    if (d.length > 165) over++;
  }
}
const remaining = [...after.entries()].filter(([, n]) => n > 1);

console.log(`pages scanned            ${sources.reduce((a, s) => a + s.rows.length, 0)}`);
console.log(`duplicate groups         ${groups.length}`);
console.log(`descriptions rebuilt     ${fixed}`);
console.log(`could not rebuild        ${failed.length}`);
failed.slice(0, 8).forEach((f) => console.log(`   ${f}`));
console.log(`duplicates remaining     ${remaining.length}`);
remaining.slice(0, 8).forEach(([d, n]) => console.log(`   ${n}x ${d.slice(0, 90)}`));
console.log(`over 165 chars in data   ${over} (resolveMetaDescription clips these at render)`);
console.log("");
log.slice(0, 12).forEach((l) => console.log(l));

if (WRITE) {
  for (const src of sources) {
    if (!touched.has(src.file)) continue;
    const orig = JSON.parse(readFileSync(src.file, "utf8"));
    const out = Array.isArray(orig) ? src.rows : Object.fromEntries(Object.keys(orig).map((k, i) => [k, src.rows[i]]));
    writeFileSync(src.file, `${JSON.stringify(out, null, 1)}\n`, "utf8");
    console.log(`wrote ${basename(src.file)}`);
  }
} else {
  console.log("dry run — pass --write to apply");
}
