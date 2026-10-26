// What each high-impression zero-click page actually ranks for. A title rewrite
// without this is guesswork: the page's own topic is not necessarily the query
// Google is showing it for.
import path from "node:path";
import { google } from "googleapis";
const auth = new google.auth.GoogleAuth({ keyFile: path.join(process.cwd(), "Iamuseragent.json"), scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
const wm = google.webmasters({ version: "v3", auth });
const day = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10); };
const TARGETS = process.argv.slice(2);
for (const t of TARGETS) {
  const res = await wm.searchanalytics.query({ siteUrl: "sc-domain:ibgram.com", requestBody: {
    startDate: day(94), endDate: day(4), dimensions: ["query"], rowLimit: 25,
    dimensionFilterGroups: [{ filters: [{ dimension: "page", operator: "equals", expression: `https://www.ibgram.com${t}` }] }],
    dataState: "all" } });
  const rows = res.data.rows ?? [];
  const i = rows.reduce((a, b) => a + b.impressions, 0), c = rows.reduce((a, b) => a + b.clicks, 0);
  console.log(`\n### ${t}   (${i} impr / ${c} clicks across ${rows.length} queries)`);
  for (const r of rows.slice(0, 12))
    console.log(`   ${String(r.impressions).padStart(4)}i ${String(r.clicks).padStart(2)}c pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}`);
}
