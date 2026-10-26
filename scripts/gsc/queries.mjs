// Query-level diagnosis: CTR leaks, cannibalisation, brand vs non-brand.
import path from "node:path";
import { google } from "googleapis";
const ROOT = process.cwd();
const SITE = "sc-domain:ibgram.com";
const auth = new google.auth.GoogleAuth({ keyFile: path.join(ROOT, "Iamuseragent.json"), scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
const wm = google.webmasters({ version: "v3", auth });
const day = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0,10); };
async function q(startDate, endDate, dimensions) {
  const rows = []; let startRow = 0;
  for (;;) {
    const res = await wm.searchanalytics.query({ siteUrl: SITE, requestBody: { startDate, endDate, dimensions, rowLimit: 25000, startRow, dataState: "all" } });
    const got = res.data.rows ?? []; rows.push(...got);
    if (got.length < 25000) break; startRow += got.length;
  }
  return rows;
}
const S = day(31), E = day(4);
const queries = await q(S, E, ["query"]);
const pairs  = await q(S, E, ["query","page"]);

const brand = /ib\s*gram|ibgram|ib-gram/i;
const bq = queries.filter(r=>brand.test(r.keys[0])), nbq = queries.filter(r=>!brand.test(r.keys[0]));
const agg = (rows)=>{const i=rows.reduce((a,b)=>a+b.impressions,0);const c=rows.reduce((a,b)=>a+b.clicks,0);const p=rows.reduce((a,b)=>a+b.position*b.impressions,0)/(i||1);return {i,c,ctr:(c/(i||1))*100,p};};
const fmt=(n,o)=>`${n.padEnd(12)} impr ${String(o.i).padStart(6)}  clicks ${String(o.c).padStart(4)}  ctr ${o.ctr.toFixed(2).padStart(5)}%  wpos ${o.p.toFixed(1)}`;
console.log("=== BRAND vs NON-BRAND (28d) ===");
console.log(fmt("brand", agg(bq))); console.log(fmt("non-brand", agg(nbq)));
console.log(`distinct queries: ${queries.length}`);

console.log("\n=== TOP 30 NON-BRAND QUERIES BY IMPRESSIONS ===");
console.log("impr  clk   ctr%   pos  query");
for (const r of nbq.sort((a,b)=>b.impressions-a.impressions).slice(0,30))
  console.log(`${String(r.impressions).padStart(4)} ${String(r.clicks).padStart(4)} ${((r.ctr*100).toFixed(1)).padStart(6)} ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}`);

console.log("\n=== ZERO-CLICK QUERIES IN TOP 10 (biggest CTR leak) ===");
console.log("impr  pos  query");
for (const r of nbq.filter(r=>r.clicks===0 && r.position<=10 && r.impressions>=15).sort((a,b)=>b.impressions-a.impressions).slice(0,35))
  console.log(`${String(r.impressions).padStart(4)} ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}`);

console.log("\n=== CANNIBALISATION (same query, >=2 URLs with impressions) ===");
const byQ = new Map();
for (const r of pairs) { const k=r.keys[0]; (byQ.get(k) ?? byQ.set(k,[]).get(k)).push(r); }
const cann = [...byQ.entries()].filter(([,v])=>v.length>=2)
  .map(([k,v])=>({q:k, urls:v.length, impr:v.reduce((a,b)=>a+b.impressions,0), clicks:v.reduce((a,b)=>a+b.clicks,0), best:Math.min(...v.map(x=>x.position)), v}))
  .sort((a,b)=>b.impr-a.impr);
console.log(`${cann.length} queries split across multiple URLs`);
for (const c of cann.slice(0,18)) {
  console.log(`\n"${c.q}"  ${c.urls} URLs, ${c.impr} impr, ${c.clicks} clicks, best pos ${c.best.toFixed(1)}`);
  for (const r of c.v.sort((a,b)=>b.impressions-a.impressions).slice(0,6))
    console.log(`     pos ${r.position.toFixed(1).padStart(5)}  impr ${String(r.impressions).padStart(4)}  clk ${r.clicks}  ${r.keys[1].replace("https://ibgram.com","")}`);
}

console.log("\n=== STRIKING DISTANCE QUERIES (pos 4-12, impr>=20) -> fastest wins ===");
console.log("impr  clk   pos  query");
for (const r of nbq.filter(r=>r.position>=4&&r.position<=12&&r.impressions>=20).sort((a,b)=>b.impressions-a.impressions).slice(0,40))
  console.log(`${String(r.impressions).padStart(4)} ${String(r.clicks).padStart(4)} ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}`);
