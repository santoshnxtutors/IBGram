// Search Console sitemap management via the Iamuseragent.json service account
// (siteOwner on the property).
//
//   node scripts/gsc-sitemaps.mjs            # read-only: properties + current sitemaps
//   node scripts/gsc-sitemaps.mjs --submit   # submit the sitemaps below
//   node scripts/gsc-sitemaps.mjs --prune    # also remove stale /sitemap/<section>.xml entries
//
// The split /sitemap/<section>.xml files served empty urlsets and 404 since the
// single-sitemap fix, so --prune clears them out of Search Console.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const KEY_FILE = path.join(ROOT, "Iamuseragent.json");

const SUBMIT = process.argv.includes("--submit");
const PRUNE = process.argv.includes("--prune");

const SITEMAPS = ["https://www.ibgram.com/sitemap.xml", "https://www.ibgram.com/prioritysitemap.xml"];
const STALE = /\/sitemap\/[a-z-]+\.xml$/i;

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ["https://www.googleapis.com/auth/webmasters"],
});
const webmasters = google.webmasters({ version: "v3", auth });

const { data: siteList } = await webmasters.sites.list({});
const sites = (siteList.siteEntry ?? []).filter((s) => /ibgram/i.test(s.siteUrl ?? ""));

console.log("Properties this service account can manage:");
for (const s of siteList.siteEntry ?? []) console.log(`  ${s.permissionLevel.padEnd(14)} ${s.siteUrl}`);
if (sites.length === 0) throw new Error("No ibgram property is visible to this service account.");

for (const site of sites) {
  const siteUrl = site.siteUrl;
  console.log(`\n=== ${siteUrl} (${site.permissionLevel}) ===`);

  if (SUBMIT) {
    for (const feed of SITEMAPS) {
      try {
        await webmasters.sitemaps.submit({ siteUrl, feedpath: feed });
        console.log(`  submitted ${feed}`);
      } catch (e) {
        console.log(`  FAILED   ${feed}: ${e.message}`);
      }
    }
  }

  const { data } = await webmasters.sitemaps.list({ siteUrl });
  const entries = data.sitemap ?? [];

  if (PRUNE) {
    for (const s of entries.filter((s) => STALE.test(s.path ?? ""))) {
      try {
        await webmasters.sitemaps.delete({ siteUrl, feedpath: s.path });
        console.log(`  removed stale ${s.path}`);
      } catch (e) {
        console.log(`  FAILED remove ${s.path}: ${e.message}`);
      }
    }
  }

  const final = (await webmasters.sitemaps.list({ siteUrl })).data.sitemap ?? [];
  if (final.length === 0) console.log("  (no sitemaps registered)");
  for (const s of final) {
    const submitted = (s.contents ?? []).reduce((n, c) => n + Number(c.submitted ?? 0), 0);
    const indexed = (s.contents ?? []).reduce((n, c) => n + Number(c.indexed ?? 0), 0);
    console.log(
      `  ${s.path}\n     submitted=${submitted} indexed=${indexed} errors=${s.errors ?? 0} warnings=${s.warnings ?? 0} lastDownloaded=${s.lastDownloaded ?? "never"}`
    );
  }
}
