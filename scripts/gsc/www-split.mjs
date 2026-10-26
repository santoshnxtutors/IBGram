import path from "node:path";
import { google } from "googleapis";
const auth = new google.auth.GoogleAuth({ keyFile: path.join(process.cwd(), "Iamuseragent.json"), scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
const wm = google.webmasters({ version: "v3", auth });
const day = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate()-n); return d.toISOString().slice(0,10); };
async function q(s,e,dims){const rows=[];let sr=0;for(;;){const r=await wm.searchanalytics.query({siteUrl:"sc-domain:ibgram.com",requestBody:{startDate:s,endDate:e,dimensions:dims,rowLimit:25000,startRow:sr,dataState:"all"}});const g=r.data.rows??[];rows.push(...g);if(g.length<25000)break;sr+=g.length;}return rows;}

// www vs non-www per week
console.log("=== www vs non-www impressions by week ===");
console.log("week-start    www-impr www-clk www-pos | bare-impr bare-clk bare-pos");
for (let w = 8; w >= 0; w--) {
  const rows = await q(day(7*w+8), day(7*w+2), ["page"]);
  const split = (pred)=>{const s=rows.filter(r=>pred(r.keys[0]));const i=s.reduce((a,b)=>a+b.impressions,0);return {i,c:s.reduce((a,b)=>a+b.clicks,0),p:i?s.reduce((a,b)=>a+b.position*b.impressions,0)/i:0,n:s.length};};
  const www = split(u=>u.startsWith("https://www."));
  const bare = split(u=>!u.startsWith("https://www."));
  console.log(`${day(7*w+8)}  ${String(www.i).padStart(8)} ${String(www.c).padStart(7)} ${www.p.toFixed(1).padStart(7)} | ${String(bare.i).padStart(9)} ${String(bare.c).padStart(8)} ${bare.p.toFixed(1).padStart(8)}  (urls ${www.n}/${bare.n})`);
}
