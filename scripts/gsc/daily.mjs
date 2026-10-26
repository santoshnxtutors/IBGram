// Day-by-day site totals + segment dilution analysis.
import path from "node:path";
import { google } from "googleapis";
const ROOT = "E:/NX Tutor/Real IBGram/IB Gram";
const SITE = "sc-domain:ibgram.com";
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(ROOT, "Iamuseragent.json"),
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const wm = google.webmasters({ version: "v3", auth });
const day = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0,10); };

async function q(startDate, endDate, dimensions, rowLimit = 25000, extra = {}) {
  const rows = []; let startRow = 0;
  for (;;) {
    const res = await wm.searchanalytics.query({ siteUrl: SITE, requestBody: { startDate, endDate, dimensions, rowLimit: 25000, startRow, dataState: "all", ...extra } });
    const got = res.data.rows ?? [];
    rows.push(...got);
    if (got.length < 25000 || rows.length >= rowLimit) break;
    startRow += got.length;
  }
  return rows;
}

const daily = await q(day(60), day(1), ["date"]);
console.log("=== DAILY SITE TOTALS (clicks / impr / ctr% / avg pos) ===");
for (const r of daily) {
  console.log(`${r.keys[0]}  clicks ${String(r.clicks).padStart(4)}  impr ${String(r.impressions).padStart(6)}  ctr ${(r.ctr*100).toFixed(2).padStart(5)}  pos ${r.position.toFixed(1).padStart(5)}`);
}

// Segment dilution: which URL families supply impressions at what position
const pages = await q(day(31), day(4), ["page"]);
const SEGS = [
  ["mumbai",       /\/mumbai\//],
  ["uae",          /\/(uae|dubai|abu-dhabi|sharjah)\//],
  ["gurgaon-hub",  /\/gurgaon\//],
  ["gurgaon-flat", /-gurgaon\/?$/],
  ["india-city",   /^https:\/\/ibgram\.com\/[a-z-]+\/$/],
  ["blog",         /\/blog\//],
  ["igcse-subj",   /\/igcse\/subject\//],
  ["courses",      /\/courses\//],
  ["ib-tutors",    /\/ib-tutors\//],
  ["country",      /\/(usa|uk|canada|qatar|oman|kuwait|bahrain|singapore|netherlands|switzerland|brazil|czech-republic|jordan|ireland|australia|hong-kong|sri-lanka|japan|germany|france|spain|italy|malaysia|thailand|vietnam|indonesia|philippines|china|korea|turkey|egypt|kenya|nigeria|ghana|south-africa|saudi-arabia|new-zealand|mexico|argentina|chile|colombia|peru|poland|portugal|sweden|norway|denmark|finland|austria|belgium|greece|hungary|romania|russia|ukraine)\/?$/],
];
const buckets = new Map();
for (const r of pages) {
  const url = r.keys[0];
  let name = "other";
  for (const [n, re] of SEGS) if (re.test(url)) { name = n; break; }
  const b = buckets.get(name) ?? { clicks:0, impressions:0, posSum:0, pages:0 };
  b.clicks += r.clicks; b.impressions += r.impressions; b.posSum += r.position * r.impressions; b.pages++;
  buckets.set(name, b);
}
const totI = [...buckets.values()].reduce((a,b)=>a+b.impressions,0);
console.log("\n=== IMPRESSION MIX BY SEGMENT (last 28d, impression-weighted position) ===");
console.log("segment        pages   impr   %impr  clicks   ctr%   wpos");
for (const [n,b] of [...buckets].sort((a,b)=>b[1].impressions-a[1].impressions)) {
  console.log(`${n.padEnd(14)} ${String(b.pages).padStart(5)} ${String(b.impressions).padStart(6)} ${((b.impressions/totI)*100).toFixed(1).padStart(6)} ${String(b.clicks).padStart(7)} ${((b.clicks/b.impressions)*100).toFixed(2).padStart(6)} ${(b.posSum/b.impressions).toFixed(1).padStart(6)}`);
}

// Position histogram
console.log("\n=== PAGE POSITION HISTOGRAM (last 28d) ===");
const bins = [[1,3],[3,5],[5,10],[10,20],[20,50],[50,200]];
for (const [lo,hi] of bins) {
  const sel = pages.filter(r=>r.position>=lo && r.position<hi);
  const i = sel.reduce((a,b)=>a+b.impressions,0), c = sel.reduce((a,b)=>a+b.clicks,0);
  console.log(`pos ${String(lo).padStart(3)}-${String(hi).padStart(3)}: ${String(sel.length).padStart(5)} pages  ${String(i).padStart(6)} impr  ${String(c).padStart(4)} clicks  ctr ${i?((c/i)*100).toFixed(2):"0"}%`);
}
