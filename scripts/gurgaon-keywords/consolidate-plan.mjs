// Builds the cannibalisation consolidation map for the Gurgaon keyword pages.
//
// 295 of the 377 pages sit in 92 near-duplicate clusters (21 pages compete for
// "ib tutor gurgaon" alone), so Google picks none and ranks them all 40-90.
// The survivor per cluster is chosen from real GSC performance, not by guess:
// clicks, then impressions, then best position, then the most natural slug.
import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";

const ROOT = process.cwd();
const pagesPath = path.join(ROOT, "src/lib/gurgaon-keywords/pages.json");
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));
const pathOf = (p) => new URL(p.canonicalUrl).pathname;

const auth = new google.auth.GoogleAuth({ keyFile: path.join(ROOT, "Iamuseragent.json"), scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
const wm = google.webmasters({ version: "v3", auth });
const day = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10); };
const rows = [];
for (let startRow = 0; ; ) {
  const res = await wm.searchanalytics.query({ siteUrl: "sc-domain:ibgram.com", requestBody: { startDate: day(94), endDate: day(4), dimensions: ["page"], rowLimit: 25000, startRow, dataState: "all" } });
  const got = res.data.rows ?? []; rows.push(...got);
  if (got.length < 25000) break; startRow += got.length;
}
const perf = new Map();
for (const r of rows) {
  const p = new URL(r.keys[0]).pathname;
  const cur = perf.get(p) ?? { clicks: 0, impressions: 0, posSum: 0 };
  cur.clicks += r.clicks; cur.impressions += r.impressions; cur.posSum += r.position * r.impressions;
  perf.set(p, cur);
}
const statOf = (p) => { const s = perf.get(pathOf(p)); return s ? { ...s, pos: s.posSum / s.impressions } : { clicks: 0, impressions: 0, pos: 999 }; };

/** Strips the modifier words Google treats as the same intent. */
const intentKey = (slug) => slug
  .replace(/-in-gurgaon$|-gurgaon$/g, "")
  .replace(/^(best|top|experienced|expert|qualified|professional|affordable|certified|trusted|leading|good|cheap)-/g, "")
  .replace(/\b(tuitions|tuition|tutoring|tutors|tutor|teachers|teacher|classes|class|coaching|courses|course|lessons|academy|institute|centre|center|provider|providers|services|service)\b/g, "T")
  .replace(/-?T(-T)+/g, "-T").replace(/-+/g, "-").replace(/^-|-$/g, "");

const clusters = new Map();
for (const p of pages) {
  const k = intentKey(p.slug);
  clusters.set(k, [...(clusters.get(k) ?? []), p]);
}

/**
 * Which slug should survive. Clicks at 1-4 per quarter are noise, and ranking by
 * them kept pos-35 and pos-51 pages while killing pos-6 ones. The survivor is the
 * slug that exactly matches the head term people actually search ("ib tutor in
 * gurgaon"), because that page's title, H1 and copy get rewritten to target it and
 * the 301s hand it every dropped page's signal. Performance only breaks ties.
 */
const MODIFIER = /^(best|top|experienced|expert|qualified|professional|affordable|certified|trusted|leading|good|cheap)-/;
const slugRank = (slug) => {
  let r = 0;
  // Head form first: "x-in-gurgaon" > "x-gurgaon" > bare "x".
  r += /-in-gurgaon$/.test(slug) ? 0 : /-gurgaon$/.test(slug) ? 10 : 20;
  // Modifier-prefixed slugs are keyword spam, never the canonical.
  if (MODIFIER.test(slug)) r += 100;
  // "tutor" is the head noun; tuition/coaching/classes are the long tail of it.
  r += /tutor/.test(slug) ? 0 : /tutors/.test(slug) ? 1 : /tuition/.test(slug) ? 2 : 3;
  r += slug.length / 1000;
  return r;
};

const plan = [];
for (const [key, group] of clusters) {
  if (group.length < 2) continue;
  const ranked = [...group].sort((a, b) => {
    const sa = statOf(a), sb = statOf(b);
    // impressions/position = how much Google already shows this URL, discounted by how deep.
    const pull = (s) => s.impressions / Math.max(s.pos, 1);
    return slugRank(a.slug) - slugRank(b.slug) || pull(sb) - pull(sa) || sb.impressions - sa.impressions;
  });
  const [winner, ...losers] = ranked;
  plan.push({ key, keep: pathOf(winner), keepSlug: winner.slug, keepStats: statOf(winner),
    drop: losers.map((l) => ({ from: pathOf(l), slug: l.slug, ...statOf(l) })) });
}
plan.sort((a, b) => b.drop.length - a.drop.length);

const dropped = plan.reduce((a, b) => a + b.drop.length, 0);
const droppedImpr = plan.reduce((a, c) => a + c.drop.reduce((x, d) => x + d.impressions, 0), 0);
const droppedClicks = plan.reduce((a, c) => a + c.drop.reduce((x, d) => x + d.clicks, 0), 0);
const wpos = (list) => { const i = list.reduce((a, b) => a + b.impressions, 0); return i ? list.reduce((a, b) => a + b.pos * b.impressions, 0) / i : 0; };
const allDrops = plan.flatMap((c) => c.drop);

console.log(`clusters with duplicates : ${plan.length}`);
console.log(`pages kept               : ${plan.length}`);
console.log(`pages redirected away    : ${dropped}  (of ${pages.length} total)`);
console.log(`90d impressions on drops : ${droppedImpr}  clicks ${droppedClicks}  weighted pos ${wpos(allDrops).toFixed(1)}`);
console.log(`90d impressions on keeps : ${plan.reduce((a,c)=>a+c.keepStats.impressions,0)}  clicks ${plan.reduce((a,c)=>a+c.keepStats.clicks,0)}`);
console.log(`\n=== TOP 20 CLUSTERS ===`);
for (const c of plan.slice(0, 20)) {
  console.log(`\nKEEP  ${c.keep}  (clicks ${c.keepStats.clicks}, impr ${c.keepStats.impressions}, pos ${c.keepStats.pos === 999 ? "-" : c.keepStats.pos.toFixed(1)})`);
  console.log(`  301 ${c.drop.length} ->  ${c.drop.map((d) => `${d.slug}[${d.impressions}i/${d.pos === 999 ? "-" : d.pos.toFixed(0)}p]`).join("  ")}`);
}
fs.writeFileSync(path.join(ROOT, "scripts/gurgaon-keywords/consolidation-plan.json"), JSON.stringify(plan, null, 1).replace(/\r\n/g, "\n"), "utf8");
console.log(`\nwrote scripts/gurgaon-keywords/consolidation-plan.json`);

// Safety check: a 301 is slow to undo in Google, so never retire a page that is
// already ranking on page one without it being named here first.
const risky = allDrops.filter((d) => d.pos < 10 && d.impressions >= 15).sort((a, b) => b.impressions - a.impressions);
console.log(`\n=== DROPS ALREADY ON PAGE ONE (pos<10, impr>=15) - review these ===`);
for (const d of risky) console.log(`  ${d.from}  impr ${d.impressions}  clicks ${d.clicks}  pos ${d.pos.toFixed(1)}`);
if (!risky.length) console.log("  none");
