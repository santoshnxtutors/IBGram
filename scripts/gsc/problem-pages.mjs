// Every page dragging the site average down: ranked 20+ with real impressions,
// paired with the query Google actually shows it for.
//
// A page at position 35 is almost never "bad content". It is usually content
// that does not match the query it got matched to, so the fix is targeting, not
// more words. Pairing page -> top query is what makes that visible.
import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({ keyFile: path.join(process.cwd(), "Iamuseragent.json"), scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
const wm = google.webmasters({ version: "v3", auth });
const day = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10); };
const S = day(94), E = day(4);

async function q(dimensions) {
  const rows = []; let startRow = 0;
  for (;;) {
    const res = await wm.searchanalytics.query({ siteUrl: "sc-domain:ibgram.com", requestBody: { startDate: S, endDate: E, dimensions, rowLimit: 25000, startRow, dataState: "all" } });
    const got = res.data.rows ?? []; rows.push(...got);
    if (got.length < 25000) break; startRow += got.length;
  }
  return rows;
}

const pages = await q(["page"]);
const pairs = await q(["page", "query"]);

const topQuery = new Map();
for (const r of pairs) {
  const p = r.keys[0];
  const cur = topQuery.get(p);
  if (!cur || r.impressions > cur.impressions) topQuery.set(p, { query: r.keys[1], impressions: r.impressions, position: r.position });
}

const MIN_IMPR = 5, MIN_POS = 20;
const problems = pages
  .filter((r) => r.position >= MIN_POS && r.impressions >= MIN_IMPR)
  .map((r) => ({ url: new URL(r.keys[0]).pathname, impressions: r.impressions, clicks: r.clicks, position: r.position, top: topQuery.get(r.keys[0]) ?? null }))
  .sort((a, b) => b.impressions - a.impressions);

const totalI = pages.reduce((a, b) => a + b.impressions, 0);
const totalW = pages.reduce((a, b) => a + b.position * b.impressions, 0);
const probI = problems.reduce((a, b) => a + b.impressions, 0);
const probW = problems.reduce((a, b) => a + b.position * b.impressions, 0);

console.log(`site avg position (impression-weighted) : ${(totalW / totalI).toFixed(2)}`);
console.log(`pages ranked ${MIN_POS}+ with ${MIN_IMPR}+ impressions  : ${problems.length}`);
console.log(`their impressions                       : ${probI} of ${totalI} (${((probI / totalI) * 100).toFixed(1)}%)`);
console.log(`their weighted position                 : ${(probW / probI).toFixed(1)}`);
console.log(`site avg if these moved to position 8   : ${(((totalW - probW) + probI * 8) / totalI).toFixed(2)}`);
console.log(`site avg if these moved to position 12  : ${(((totalW - probW) + probI * 12) / totalI).toFixed(2)}`);

// group by section so the work can be parcelled out
const section = (u) => u.startsWith("/gurgaon/") ? "gurgaon-hub" : /-gurgaon\/$/.test(u) ? "gurgaon-root"
  : u.startsWith("/mumbai/") ? "mumbai" : u.startsWith("/uae/") ? "uae" : u.startsWith("/india/") ? "india"
  : u.startsWith("/blog/") ? "blog" : u.startsWith("/ib-tutors/") || u.startsWith("/igcse-tutors/") ? "tutor-dir"
  : u.startsWith("/courses/") ? "courses" : u.startsWith("/igcse/") ? "igcse" : "other";
const bySec = problems.reduce((m, p) => { (m[section(p.url)] ??= []).push(p); return m; }, {});
console.log(`\nsection       pages  impressions  clicks  wpos`);
for (const [s, list] of Object.entries(bySec).sort((a, b) => b[1].reduce((x, y) => x + y.impressions, 0) - a[1].reduce((x, y) => x + y.impressions, 0))) {
  const i = list.reduce((a, b) => a + b.impressions, 0), c = list.reduce((a, b) => a + b.clicks, 0);
  const w = list.reduce((a, b) => a + b.position * b.impressions, 0) / i;
  console.log(`${s.padEnd(13)} ${String(list.length).padStart(5)} ${String(i).padStart(12)} ${String(c).padStart(7)} ${w.toFixed(1).padStart(6)}`);
}

console.log(`\n=== TOP 30 BY IMPRESSIONS ===`);
for (const p of problems.slice(0, 30))
  console.log(`pos ${p.position.toFixed(0).padStart(3)}  ${String(p.impressions).padStart(4)}i ${String(p.clicks).padStart(2)}c  ${p.url}\n        ranks for: "${p.top?.query ?? "(anonymised)"}"`);

fs.mkdirSync("tmp", { recursive: true });
fs.writeFileSync("tmp/problem-pages.json", JSON.stringify(problems, null, 1).replace(/\r\n/g, "\n"), "utf8");
console.log(`\nwrote tmp/problem-pages.json (${problems.length} pages)`);
