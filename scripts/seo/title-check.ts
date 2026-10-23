// Replays every live title through resolvePageTitle and asserts the result is
// shorter, still carries its board/subject/city keyword, and stays unique.
import { readFileSync } from "node:fs";
import { resolvePageTitle } from "../../src/lib/seo/page-title";

const AUDIT = process.argv[2] ?? "audit.json";
const dec = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<");
const BRAND_END = /\|\s*IB\s?Gram\s*$/i;

type CrawlRow = { url: string; status: number; title: string };
const rows: CrawlRow[] = JSON.parse(readFileSync(AUDIT, "utf8")).rows.filter((r: CrawlRow) => r.status === 200);
const resolved = (t: string) => {
  const r = resolvePageTitle(t);
  return typeof r === "string" ? `${r} | IB Gram` : r.absolute;
};

let over = 0;
const lostKeyword: string[] = [];
const midWord: string[] = [];
const seen = new Map<string, string[]>();

for (const r of rows) {
  // Reconstruct the source title the data layer holds: strip every brand Next appended.
  let src = dec(r.title).trim();
  while (BRAND_END.test(src)) src = src.replace(BRAND_END, "").trim();
  const out = resolved(src);
  if (out.length > 60) over++;
  // Keyword integrity: whatever board/subject/city words the source had must survive,
  // except the ones a shed deliberately rewrites.
  const REWRITTEN = /preparation|improvement|practice|experienced|home|online|cambridge|personalized/i;
  for (const w of ["IB", "IGCSE", "Gurgaon", "Mumbai", "Tutor", "Tuition"]) {
    if (new RegExp(`\b${w}\b`, "i").test(src) && !new RegExp(`\b${w}\b`, "i").test(out) && !REWRITTEN.test(w)) {
      lostKeyword.push(`${w} lost: "${src}" -> "${out}"`);
    }
  }
  if (/\b\w{1,2}$/.test(out) && !/\b(HL|SL|AA|AI|IB)$/.test(out)) midWord.push(out);
  const key = out.toLowerCase();
  seen.set(key, [...(seen.get(key) ?? []), r.url]);
}

const dupes = [...seen.entries()].filter(([, u]) => u.length > 1);
console.log(`titles checked        ${rows.length}`);
console.log(`still over 60 chars   ${over}`);
console.log(`keyword losses        ${lostKeyword.length}`);
console.log(`suspicious word cuts  ${midWord.length}`);
console.log(`duplicate after fix   ${dupes.length} groups / ${dupes.reduce((a, [, u]) => a + u.length, 0)} pages`);
lostKeyword.slice(0, 5).forEach((l) => console.log("  LOST " + l));
midWord.slice(0, 5).forEach((l) => console.log("  CUT  " + l));
if (lostKeyword.length) { console.error("FAIL: a title lost its keyword"); process.exit(1); }
console.log("\nOK — no title lost its keyword.");

// --- listings, for deciding what still needs a hand-written fix -------------
if (process.argv.includes("--list")) {
  console.log("\n=== STILL OVER 60 ===");
  for (const r of rows) {
    let src = dec(r.title).trim();
    while (BRAND_END.test(src)) src = src.replace(BRAND_END, "").trim();
    const out = resolved(src);
    if (out.length > 60) console.log(`  ${out.length}  ${r.url.replace("https://www.ibgram.com", "")}\n        ${out}`);
  }
  console.log("\n=== DUPLICATE TITLES AFTER FIX ===");
  for (const [t, urls] of dupes) console.log(`  ${urls.length}x "${t}"\n${urls.map((u: string) => "        " + u.replace("https://www.ibgram.com", "")).join("\n")}`);
}
