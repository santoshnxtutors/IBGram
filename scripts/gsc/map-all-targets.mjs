// Maps EVERY low-ranking page to its source file and the query it should own.
//
// Pages split two ways. A page whose top query is on-topic just needs stronger
// targeting. A page matched to a generic query it cannot win (/australia/ for
// "ib tutoring online") needs re-anchoring to its own intrinsic query
// ("ib tutor australia"), which also stops it being pulled into generic SERPs.
import fs from "node:fs";
import path from "node:path";

const probs = JSON.parse(fs.readFileSync("tmp/problem-pages.json", "utf8"));
const loc = new Map();
const addJson = (f) => {
  try {
    const j = JSON.parse(fs.readFileSync(f, "utf8"));
    const a = Array.isArray(j) ? j : (j.pages ?? Object.values(j));
    for (const p of a) if (p && p.canonicalUrl) loc.set(new URL(p.canonicalUrl).pathname, {
      file: f, kind: "json", slug: p.slug, title: p.metaTitle ?? null, description: p.metaDescription ?? null,
      h1: p.h1 ?? null, primaryKeyword: p.primaryKeyword ?? null, faqs: (p.faqs ?? []).map((x) => x.question).slice(0, 8),
    });
  } catch {}
};
const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  const f = path.join(d, e.name);
  if (e.isDirectory()) walk(f); else if (e.name.endsWith(".json")) addJson(f);
} };
walk("src/lib");

const TITLE = (s) => s.split("-").map((w) => w.toUpperCase() === w ? w : w[0].toUpperCase() + w.slice(1)).join(" ");
/** The query a page intrinsically deserves, read from its own URL. */
function intrinsicQuery(url) {
  const seg = url.replace(/^\/|\/$/g, "").split("/");
  const last = seg[seg.length - 1];
  if (seg.length === 1) return `IB tutor ${TITLE(last)}`;                       // /australia/
  if (seg[0] === "courses") return `IB ${TITLE(last)} tutor`;                   // /courses/ib/mathematics/
  if (seg[0] === "programmes") return `IB ${last.toUpperCase()} tutor`;         // /programmes/pyp/
  if (seg[0] === "igcse" && seg[1] === "subject") return `IGCSE ${TITLE(last)} tutor`;
  if (seg[0] === "ib-tutors") return `IB tutor in ${TITLE(seg[1] ?? last)}`;
  if (seg[0] === "igcse-tutors") return `IGCSE tutor in ${TITLE(seg[1] ?? last)}`;
  if (seg[0] === "india" || seg[0] === "mumbai" || seg[0] === "uae" || seg[0] === "gurgaon") return TITLE(last).replace(/\bIb\b/g, "IB").replace(/\bIgcse\b/g, "IGCSE");
  return TITLE(last).replace(/\bIb\b/g, "IB").replace(/\bIgcse\b/g, "IGCSE");
}

const GEO = /australia|singapore|hong-kong|qatar|oman|kuwait|bahrain|netherlands|switzerland|brazil|czech|jordan|ireland|kenya|uae|dubai|india|mumbai|gurgaon|noida|delhi|pune|bangalore|chennai|hyderabad/;
const tok = (s) => new Set(String(s ?? "").toLowerCase().split(/[^a-z0-9]+/).filter((t) => t && !["the","a","in","for","of","and","to","best","top"].includes(t)));

const out = [], unmapped = [];
for (const p of probs) {
  const m = loc.get(p.url);
  if (!m) { unmapped.push(p.url); continue; }
  const qt = tok(p.top?.query), ut = tok(p.url);
  const qGeo = [...qt].filter((t) => GEO.test(t)), uGeo = [...ut].filter((t) => GEO.test(t));
  const geoClash = (uGeo.length > 0 && qGeo.length === 0) || (qGeo.length > 0 && uGeo.length > 0 && !qGeo.some((g) => uGeo.includes(g)));
  let overlap = 0; for (const t of qt) if (ut.has(t)) overlap++;
  const relevant = !(geoClash || overlap / Math.max(qt.size, 1) < 0.34);
  out.push({
    url: p.url, position: Math.round(p.position), impressions: p.impressions, clicks: p.clicks,
    rankingFor: p.top?.query ?? null,
    targetQuery: relevant && p.top?.query ? p.top.query : intrinsicQuery(p.url),
    mode: relevant ? "strengthen" : "re-anchor",
    file: m.file.split(path.sep).join("/"), kind: m.kind, slug: m.slug,
    currentTitle: m.title, currentDescription: m.description, currentH1: m.h1,
    primaryKeyword: m.primaryKeyword, existingFaqQuestions: m.faqs,
  });
}
out.sort((a, b) => b.impressions - a.impressions);
console.log(`problem pages: ${probs.length}   mapped: ${out.length}   unmapped: ${unmapped.length}`);
console.log(`  strengthen: ${out.filter((p) => p.mode === "strengthen").length}   re-anchor: ${out.filter((p) => p.mode === "re-anchor").length}`);
console.log("\nre-anchor examples:");
for (const p of out.filter((p) => p.mode === "re-anchor").slice(0, 6)) console.log(`  ${p.url}\n     was matched to "${p.rankingFor}" -> now targets "${p.targetQuery}"`);
fs.writeFileSync("tmp/all-fix-targets.json", JSON.stringify(out, null, 1).replace(/\r\n/g, "\n"), "utf8");
console.log(`\nwrote tmp/all-fix-targets.json: ${out.length}`);
console.log(`unmapped (DB/other stores): ${unmapped.slice(0, 6).join(", ")}`);
