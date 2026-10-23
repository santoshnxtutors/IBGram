// Pulls Search Analytics from Google Search Console via the Iamuseragent.json
// service account (siteOwner on the property).
//
//   node scripts/gsc/analytics.mjs                 last 28d vs previous 28d, site totals + movers
//   node scripts/gsc/analytics.mjs --days 90       longer window
//   node scripts/gsc/analytics.mjs --queries       also break down by query
//   node scripts/gsc/analytics.mjs --json out.json dump raw rows for further analysis
//
// Why compare two windows rather than read one: "position is going down" is a
// claim about CHANGE, and a single snapshot cannot tell a page that slipped from
// 4 to 9 apart from one that has always sat at 9. The movers table below is the
// part that actually says where to spend effort.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const SITE = process.env.GSC_SITE ?? "sc-domain:ibgram.com";
const args = process.argv.slice(2);
const DAYS = Number(args[args.indexOf("--days") + 1]) || 28;
const WANT_QUERIES = args.includes("--queries");
const JSON_OUT = args.includes("--json") ? args[args.indexOf("--json") + 1] : null;

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(ROOT, "Iamuseragent.json"),
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const webmasters = google.webmasters({ version: "v3", auth });

/** GSC data lags ~2 days; starting "today" would read a half-empty window. */
const dayStr = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d;
};
const LAG = 3;
const curEnd = daysAgo(LAG);
const curStart = daysAgo(LAG + DAYS - 1);
const prevEnd = daysAgo(LAG + DAYS);
const prevStart = daysAgo(LAG + DAYS * 2 - 1);

async function query(startDate, endDate, dimensions, rowLimit = 25000) {
  const rows = [];
  let startRow = 0;
  for (;;) {
    const res = await webmasters.searchanalytics.query({
      siteUrl: SITE,
      requestBody: { startDate, endDate, dimensions, rowLimit: Math.min(rowLimit, 25000), startRow, dataState: "final" },
    });
    const got = res.data.rows ?? [];
    rows.push(...got);
    if (got.length < 25000 || rows.length >= rowLimit) break;
    startRow += got.length;
  }
  return rows;
}

const sum = (rows) => {
  const clicks = rows.reduce((a, r) => a + (r.clicks ?? 0), 0);
  const impressions = rows.reduce((a, r) => a + (r.impressions ?? 0), 0);
  // Position must be impression-weighted; a flat average lets a 1-impression
  // page at position 2 cancel out a 10,000-impression page at position 40.
  const posWeighted = rows.reduce((a, r) => a + (r.position ?? 0) * (r.impressions ?? 0), 0);
  return {
    clicks,
    impressions,
    ctr: impressions ? (100 * clicks) / impressions : 0,
    position: impressions ? posWeighted / impressions : 0,
    pages: rows.length,
  };
};

const fmt = (n, d = 2) => Number(n).toFixed(d);
const delta = (a, b) => {
  const diff = a - b;
  return `${diff >= 0 ? "+" : ""}${fmt(diff)}`;
};

async function main() {
  console.log(`site: ${SITE}`);
  console.log(`current : ${dayStr(curStart)} -> ${dayStr(curEnd)}  (${DAYS}d)`);
  console.log(`previous: ${dayStr(prevStart)} -> ${dayStr(prevEnd)}  (${DAYS}d)\n`);

  const [cur, prev] = await Promise.all([
    query(dayStr(curStart), dayStr(curEnd), ["page"]),
    query(dayStr(prevStart), dayStr(prevEnd), ["page"]),
  ]);

  const c = sum(cur);
  const p = sum(prev);
  console.log("=== SITE TOTALS ===");
  console.log(`                 current      previous     change`);
  console.log(`clicks        ${String(c.clicks).padStart(10)}  ${String(p.clicks).padStart(11)}  ${delta(c.clicks, p.clicks, 0)}`);
  console.log(`impressions   ${String(c.impressions).padStart(10)}  ${String(p.impressions).padStart(11)}  ${delta(c.impressions, p.impressions, 0)}`);
  console.log(`ctr %         ${fmt(c.ctr).padStart(10)}  ${fmt(p.ctr).padStart(11)}  ${delta(c.ctr, p.ctr)}`);
  console.log(`avg position  ${fmt(c.position).padStart(10)}  ${fmt(p.position).padStart(11)}  ${delta(c.position, p.position)}  (lower is better)`);
  console.log(`pages w/ data ${String(c.pages).padStart(10)}  ${String(p.pages).padStart(11)}\n`);

  const prevByPage = new Map(prev.map((r) => [r.keys[0], r]));
  const curByPage = new Map(cur.map((r) => [r.keys[0], r]));

  // Biggest position losses, weighted by impressions so the list is ordered by
  // traffic actually at risk rather than by raw rank movement on dead pages.
  const movers = cur
    .map((r) => {
      const was = prevByPage.get(r.keys[0]);
      if (!was || (r.impressions ?? 0) < 20) return null;
      const posDelta = (r.position ?? 0) - (was.position ?? 0);
      return { url: r.keys[0], posNow: r.position, posWas: was.position, posDelta, impr: r.impressions, imprWas: was.impressions, clicks: r.clicks, ctr: r.impressions ? (100 * r.clicks) / r.impressions : 0, risk: posDelta * r.impressions };
    })
    .filter(Boolean);

  console.log("=== BIGGEST POSITION LOSSES (impressions >= 20) ===");
  movers.sort((a, b) => b.risk - a.risk).slice(0, 25).forEach((m) => {
    console.log(`  ${fmt(m.posWas, 1).padStart(5)} -> ${fmt(m.posNow, 1).padStart(5)}  (${delta(m.posNow, m.posWas)})  impr ${String(m.impr).padStart(6)}  clicks ${String(m.clicks).padStart(4)}  ${m.url.replace("https://www.ibgram.com", "")}`);
  });

  console.log("\n=== HIGH IMPRESSIONS, ZERO CLICKS (CTR fix candidates) ===");
  cur.filter((r) => (r.impressions ?? 0) >= 50 && (r.clicks ?? 0) === 0)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 25)
    .forEach((r) => console.log(`  impr ${String(r.impressions).padStart(6)}  pos ${fmt(r.position, 1).padStart(5)}  ${r.keys[0].replace("https://www.ibgram.com", "")}`));

  console.log("\n=== STRIKING DISTANCE (position 5-20, real impressions) ===");
  cur.filter((r) => (r.position ?? 99) >= 5 && (r.position ?? 99) <= 20 && (r.impressions ?? 0) >= 30)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 30)
    .forEach((r) => console.log(`  pos ${fmt(r.position, 1).padStart(5)}  impr ${String(r.impressions).padStart(6)}  clicks ${String(r.clicks).padStart(4)}  ${r.keys[0].replace("https://www.ibgram.com", "")}`));

  console.log("\n=== PAGES THAT LOST ALL IMPRESSIONS ===");
  const lost = prev.filter((r) => (r.impressions ?? 0) >= 30 && !curByPage.has(r.keys[0]));
  console.log(`  ${lost.length} page(s) had >=30 impressions last period and none now`);
  lost.sort((a, b) => b.impressions - a.impressions).slice(0, 15)
    .forEach((r) => console.log(`  was impr ${String(r.impressions).padStart(6)} pos ${fmt(r.position, 1)}  ${r.keys[0].replace("https://www.ibgram.com", "")}`));

  let queries = [];
  if (WANT_QUERIES) {
    queries = await query(dayStr(curStart), dayStr(curEnd), ["query"]);
    const prevQ = await query(dayStr(prevStart), dayStr(prevEnd), ["query"]);
    const prevQMap = new Map(prevQ.map((r) => [r.keys[0], r]));
    console.log("\n=== QUERIES IN STRIKING DISTANCE (pos 5-20) ===");
    queries.filter((r) => (r.position ?? 99) >= 5 && (r.position ?? 99) <= 20 && (r.impressions ?? 0) >= 20)
      .sort((a, b) => b.impressions - a.impressions).slice(0, 30)
      .forEach((r) => {
        const was = prevQMap.get(r.keys[0]);
        console.log(`  pos ${fmt(r.position, 1).padStart(5)}${was ? ` (was ${fmt(was.position, 1)})` : ""}  impr ${String(r.impressions).padStart(6)}  clicks ${String(r.clicks).padStart(4)}  "${r.keys[0]}"`);
      });
  }

  if (JSON_OUT) {
    fs.writeFileSync(JSON_OUT, JSON.stringify({ site: SITE, window: { curStart: dayStr(curStart), curEnd: dayStr(curEnd), prevStart: dayStr(prevStart), prevEnd: dayStr(prevEnd) }, totals: { cur: c, prev: p }, cur, prev, queries }, null, 1));
    console.log(`\nraw rows -> ${JSON_OUT}`);
  }
}

main().catch((e) => {
  console.error("FAILED:", e?.message ?? e);
  if (String(e?.message ?? "").includes("does not have sufficient permission")) {
    console.error("The service account must be added as a user on the Search Console property.");
  }
  process.exit(1);
});
