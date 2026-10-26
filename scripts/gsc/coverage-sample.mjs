// Real Google coverage verdict for a stratified sample of sitemap URLs.
// scripts/gsc/inspect.ts check only reads the sitemap INDEX (9 child sitemaps),
// so it reports on the sitemaps themselves, never on pages.
//
// URL Inspection is capped at 2000 calls/day, so this samples evenly per sitemap.
import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";

const N = Number(process.argv[2] ?? 90);
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "Iamuseragent.json"),
  scopes: ["https://www.googleapis.com/auth/webmasters"],
});
const si = google.searchconsole({ version: "v1", auth });

const crawl = JSON.parse(fs.readFileSync("tmp/gsc-crawl.json", "utf8"));
const bySitemap = crawl.reduce((m, r) => { (m[r.sitemap] ??= []).push(r.url); return m; }, {});
const names = Object.keys(bySitemap);
const per = Math.max(1, Math.floor(N / names.length));
const sample = [];
for (const n of names) {
  const list = bySitemap[n];
  const step = Math.max(1, Math.floor(list.length / per));
  for (let i = 0; i < list.length && sample.length < N; i += step) sample.push([n, list[i]]);
}
console.log(`inspecting ${sample.length} URLs across ${names.length} sitemaps\n`);

const groups = {};
for (const [sm, url] of sample) {
  try {
    const res = await si.urlInspection.index.inspect({ requestBody: { inspectionUrl: url, siteUrl: "sc-domain:ibgram.com", languageCode: "en-US" } });
    const r = res.data.inspectionResult?.indexStatusResult ?? {};
    const verdict = `${r.coverageState ?? "?"}`;
    (groups[verdict] ??= []).push({ url, sm, crawled: r.lastCrawlTime ?? "never", robots: r.robotsTxtState, indexing: r.indexingState, canonical: r.googleCanonical, user: r.userCanonical });
  } catch (e) {
    (groups[`API ERROR: ${String(e.message ?? e).slice(0, 60)}`] ??= []).push({ url, sm });
  }
}
const total = Object.values(groups).reduce((a, b) => a + b.length, 0);
for (const [v, list] of Object.entries(groups).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n${v} — ${list.length} (${((list.length / total) * 100).toFixed(0)}%)`);
  const bySm = list.reduce((m, r) => { (m[r.sm] ??= []).push(r); return m; }, {});
  for (const [sm, rs] of Object.entries(bySm).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`   ${String(rs.length).padStart(3)}  ${sm}`);
    for (const r of rs.slice(0, 2)) {
      console.log(`        ${r.url.replace("https://www.ibgram.com", "")}`);
      console.log(`           crawled ${String(r.crawled).slice(0, 10)}  indexing=${r.indexing}  googleCanonical=${(r.canonical ?? "").replace("https://www.ibgram.com", "") || "-"}`);
    }
  }
}
