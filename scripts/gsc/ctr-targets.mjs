// Builds the Tier-1 CTR fix list: pages that already rank well but earn no clicks,
// each with the queries Google actually shows them for, so a rewritten title can be
// matched to real demand instead of guessed.
import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";
const SITE="sc-domain:ibgram.com";
const auth=new google.auth.GoogleAuth({keyFile:path.join(process.cwd(),"Iamuseragent.json"),scopes:["https://www.googleapis.com/auth/webmasters.readonly"]});
const wm=google.webmasters({version:"v3",auth});
const day=(n)=>{const d=new Date();d.setUTCDate(d.getUTCDate()-n);return d.toISOString().slice(0,10);};
async function q(dims,extra={}){const rows=[];let sr=0;for(;;){const r=await wm.searchanalytics.query({siteUrl:SITE,requestBody:{startDate:day(90),endDate:day(3),dimensions:dims,rowLimit:25000,startRow:sr,dataState:"all",...extra}});const g=r.data.rows??[];rows.push(...g);if(g.length<25000)break;sr+=g.length;}return rows;}

const pq = await q(["page","query"]);
const byPage = new Map();
for (const r of pq) {
  const u = r.keys[0];
  if (!byPage.has(u)) byPage.set(u, { url:u, impr:0, clicks:0, wp:0, queries:[] });
  const p = byPage.get(u);
  p.impr += r.impressions; p.clicks += r.clicks; p.wp += r.position*r.impressions;
  p.queries.push({ q:r.keys[1], i:r.impressions, c:r.clicks, pos:r.position });
}
// page totals (page dim alone is authoritative; query dim misses anonymized)
const pages = await q(["page"]);
const tot = new Map(pages.map(r=>[r.keys[0],{impr:r.impressions,clicks:r.clicks,pos:r.position,ctr:r.ctr}]));

const targets = [];
for (const [u,t] of tot) {
  if (t.pos > 15 || t.impr < 25) continue;        // already ranks, enough data
  if (t.ctr > 0.02) continue;                      // CTR already healthy
  const q = byPage.get(u);
  targets.push({ url:u.replace("https://www.ibgram.com",""), impr:t.impr, clicks:t.clicks,
    ctr:+(t.ctr*100).toFixed(2), pos:+t.pos.toFixed(1),
    queries:(q?.queries??[]).sort((a,b)=>b.i-a.i).slice(0,8).map(x=>`${x.q} (${x.i}i p${x.pos.toFixed(0)})`) });
}
targets.sort((a,b)=>b.impr-a.impr);
fs.writeFileSync("scripts/gsc/ctr-targets.json", JSON.stringify(targets,null,1).replace(/\r\n/g,"\n"), {encoding:"utf8"});
console.log(`${targets.length} pages rank <=15 with CTR <2% and >=25 impressions (90d)`);
console.log(`they hold ${targets.reduce((s,t)=>s+t.impr,0)} impressions and ${targets.reduce((s,t)=>s+t.clicks,0)} clicks\n`);
for (const t of targets.slice(0,40)) console.log(`${String(t.impr).padStart(5)}i ${String(t.clicks).padStart(3)}c ${String(t.ctr).padStart(5)}% p${String(t.pos).padStart(5)}  ${t.url}\n      ${t.queries.slice(0,3).join(" | ")||"(all queries anonymized)"}`);
