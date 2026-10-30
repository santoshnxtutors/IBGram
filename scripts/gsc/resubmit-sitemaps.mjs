// Re-submits every sitemap to Search Console after a deploy, which nudges Google
// to re-crawl rather than waiting for its own schedule.
//
// Submitting the index alone is not enough here: each child is registered
// separately in this property, and a child that is not resubmitted keeps its old
// lastDownloaded. Both the index and every child go in.
import path from "node:path";
import { google } from "googleapis";

const SITE = "sc-domain:ibgram.com";
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "Iamuseragent.json"),
  scopes: ["https://www.googleapis.com/auth/webmasters"],
});
const wm = google.webmasters({ version: "v3", auth });

const existing = await wm.sitemaps.list({ siteUrl: SITE });
const known = (existing.data.sitemap ?? []).map((s) => s.path);
const children = ["pages", "services", "gurgaon", "indian-cities", "mumbai", "country", "uae", "blogs", "teacher"]
  .map((s) => `https://www.ibgram.com/sitemap-${s}.xml`);
const targets = [...new Set(["https://www.ibgram.com/sitemap.xml", ...children, ...known])];

console.log(`submitting ${targets.length} sitemaps to ${SITE}\n`);
let ok = 0, failed = 0;
for (const feedpath of targets) {
  try {
    await wm.sitemaps.submit({ siteUrl: SITE, feedpath });
    console.log(`  OK    ${feedpath}`);
    ok++;
  } catch (e) {
    console.log(`  FAIL  ${feedpath}  ${String(e.message ?? e).slice(0, 90)}`);
    failed++;
  }
}
console.log(`\nsubmitted ${ok}, failed ${failed}`);

// Read back so the result is Google's own record, not just our request count.
const after = await wm.sitemaps.list({ siteUrl: SITE });
console.log(`\n=== SEARCH CONSOLE STATE ===`);
let total = 0;
for (const s of (after.data.sitemap ?? []).sort((a, b) => (b.contents?.[0]?.submitted ?? 0) - (a.contents?.[0]?.submitted ?? 0))) {
  const n = Number(s.contents?.[0]?.submitted ?? 0);
  if (!s.path.endsWith("sitemap.xml") || s.path.endsWith("-sitemap.xml")) total += n;
  console.log(`  ${String(n).padStart(5)} urls  errors ${s.errors ?? 0}  warnings ${s.warnings ?? 0}  lastSubmitted ${String(s.lastSubmitted ?? "-").slice(0, 10)}  ${s.path}`);
}
