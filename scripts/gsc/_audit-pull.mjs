import fs from "node:fs";
import { google } from "googleapis";

const SITE = "sc-domain:ibgram.com";
const KEY = process.argv[2];
const OUT = process.argv[3];

const auth = new google.auth.GoogleAuth({
  keyFile: KEY,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const sc = google.searchconsole({ version: "v1", auth: await auth.getClient() });

const iso = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return iso(d); };

async function q(startDate, endDate, dimensions = [], extra = {}) {
  const res = await sc.searchanalytics.query({
    siteUrl: SITE,
    requestBody: { startDate, endDate, dimensions, rowLimit: 25000, dataState: "final", ...extra },
  });
  return res.data.rows ?? [];
}
const totals = (rows) => rows.reduce(
  (a, r) => ({ clicks: a.clicks + r.clicks, impressions: a.impressions + r.impressions,
    posSum: a.posSum + r.position * r.impressions }),
  { clicks: 0, impressions: 0, posSum: 0 });
const summarise = (rows) => {
  const t = totals(rows);
  return { clicks: t.clicks, impressions: t.impressions,
    ctr: t.impressions ? +(100 * t.clicks / t.impressions).toFixed(2) : 0,
    position: t.impressions ? +(t.posSum / t.impressions).toFixed(2) : 0 };
};

const out = {};

// --- windows (GSC lags ~2-3 days; offset everything by 3) ---
const LAG = 3;
const windows = {
  "7d":      [daysAgo(LAG + 6),   daysAgo(LAG)],
  "prev7d":  [daysAgo(LAG + 13),  daysAgo(LAG + 7)],
  "28d":     [daysAgo(LAG + 27),  daysAgo(LAG)],
  "prev28d": [daysAgo(LAG + 55),  daysAgo(LAG + 28)],
  "3mo":     [daysAgo(LAG + 89),  daysAgo(LAG)],
  "prev3mo": [daysAgo(LAG + 179), daysAgo(LAG + 90)],
  "6mo":     [daysAgo(LAG + 179), daysAgo(LAG)],
  "yoy_now": [daysAgo(LAG + 89),  daysAgo(LAG)],
  "yoy_prev":[daysAgo(LAG + 454), daysAgo(LAG + 365)],
};
out.windows = windows;
out.totals = {};
for (const [name, [s, e]] of Object.entries(windows)) {
  out.totals[name] = summarise(await q(s, e, ["date"]));
}

// --- daily series, 180d, to locate the breakpoint ---
out.daily = (await q(daysAgo(LAG + 179), daysAgo(LAG), ["date"]))
  .map((r) => ({ date: r.keys[0], clicks: r.clicks, impressions: r.impressions,
                 ctr: +(100 * r.ctr).toFixed(2), position: +r.position.toFixed(2) }));

// --- dimension splits, 28d vs prev28d ---
for (const dim of ["query", "page", "device", "country", "searchAppearance"]) {
  const cur = await q(...windows["28d"], [dim]);
  const prv = await q(...windows["prev28d"], [dim]);
  const m = new Map();
  for (const r of cur) m.set(r.keys[0], { key: r.keys[0], c: r.clicks, i: r.impressions, p: r.position, pc: 0, pi: 0, pp: 0 });
  for (const r of prv) {
    const e = m.get(r.keys[0]) ?? { key: r.keys[0], c: 0, i: 0, p: 0, pc: 0, pi: 0, pp: 0 };
    e.pc = r.clicks; e.pi = r.impressions; e.pp = r.position;
    m.set(r.keys[0], e);
  }
  out[dim] = [...m.values()].map((e) => ({ ...e, dc: e.c - e.pc, di: e.i - e.pi, dp: +(e.p - e.pp).toFixed(2) }));
}
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));
console.log("windows:", JSON.stringify(windows, null, 1));
console.log("TOTALS");
for (const [k, v] of Object.entries(out.totals)) console.log(" ", k.padEnd(9), JSON.stringify(v));
console.log("rows:", Object.fromEntries(["query","page","device","country","searchAppearance"].map((d) => [d, out[d].length])));
