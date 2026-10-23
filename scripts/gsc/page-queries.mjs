// Pulls Search Analytics broken down by PAGE + QUERY together, which is the pairing that
// actually tells you what to write.
//
//   node scripts/gsc/page-queries.mjs --days 90 --out out.json
//
// Site totals say CTR fell; a page's own losing queries say why. A page sitting at position 8
// for "myp tutor" with no clicks needs a title that says "MYP tutor" - you cannot know that
// from page-level data alone.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const KEY_FILE = path.join(ROOT, "Iamuseragent.json");

const args = process.argv.slice(2);
const flag = (n, d) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};
const DAYS = Number(flag("days", "90"));
const OUT = flag("out", path.join(ROOT, "gsc-page-queries.json"));

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const sc = google.webmasters({ version: "v3", auth });

const { data: siteList } = await sc.sites.list({});
const site =
  (siteList.siteEntry ?? []).find((s) => s.siteUrl === "sc-domain:ibgram.com") ??
  (siteList.siteEntry ?? []).find((s) => /ibgram/i.test(s.siteUrl ?? ""));
if (!site) throw new Error("No ibgram property visible to this service account.");

const end = new Date(Date.now() - 3 * 86400000).toISOString().slice(0, 10);
const start = new Date(Date.now() - (DAYS + 3) * 86400000).toISOString().slice(0, 10);

const rows = [];
for (let startRow = 0; startRow < 100000; startRow += 25000) {
  const { data } = await sc.searchanalytics.query({
    siteUrl: site.siteUrl,
    requestBody: {
      startDate: start,
      endDate: end,
      dimensions: ["page", "query"],
      rowLimit: 25000,
      startRow,
      dataState: "final",
    },
  });
  const batch = data.rows ?? [];
  rows.push(...batch);
  if (batch.length < 25000) break;
}

const byPage = new Map();
for (const r of rows) {
  const [page, query] = r.keys;
  if (!byPage.has(page)) byPage.set(page, { page, impressions: 0, clicks: 0, queries: [] });
  const p = byPage.get(page);
  p.impressions += r.impressions;
  p.clicks += r.clicks;
  p.queries.push({ query, impressions: r.impressions, clicks: r.clicks, ctr: r.ctr, position: r.position });
}
for (const p of byPage.values()) {
  p.queries.sort((a, b) => b.impressions - a.impressions);
  p.queries = p.queries.slice(0, 25);
  p.ctr = p.impressions ? p.clicks / p.impressions : 0;
}

const out = [...byPage.values()].sort((a, b) => b.impressions - a.impressions);
fs.writeFileSync(OUT, JSON.stringify({ site: site.siteUrl, window: { start, end }, pages: out }, null, 1));
console.log(`${site.siteUrl}  ${start} -> ${end}`);
console.log(`${rows.length} page+query rows across ${out.length} pages -> ${OUT}`);
