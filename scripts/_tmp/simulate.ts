import { readFileSync, writeFileSync } from "node:fs";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { normalizePath } from "@/lib/seo/canonical";

const CRAWL = "C:/Users/HP/AppData/Local/Temp/claude/e--NX-Tutor-Real-IBGram-IB-Gram/84d1dc42-671c-48ef-96fe-19fb3f34413a/scratchpad/gsc/crawl.json";
type Row = { url: string; status: number; robots: string };
const live: Row[] = JSON.parse(readFileSync(CRAWL, "utf8"));
const liveByPath = new Map(live.map((r) => [normalizePath(r.url), r]));

const newSm = getFullPublicSitemapEntries();
const newPaths = new Set(newSm.map((e) => normalizePath(e.url)));
console.log("live sitemap URLs:", live.length, "| new CODE sitemap URLs:", newSm.length);

const liveNoindex = live.filter((r) => (r.robots || "").includes("noindex")).map((r) => normalizePath(r.url));
const live404 = live.filter((r) => r.status !== 200).map((r) => normalizePath(r.url));
console.log("live noindex:", liveNoindex.length, "| live 404:", live404.length);

let fixedByStore = 0, stillNoStore = 0, droppedFromSitemap = 0;
const stillNoStoreSample: string[] = [];
for (const p of liveNoindex) {
  if (!newPaths.has(p)) { droppedFromSitemap++; continue; }
  const page = getGeneratedPageByPath(p);
  if (page && getGeneratedIndexingDecision(page).index) fixedByStore++;
  else { stillNoStore++; if (stillNoStoreSample.length < 25) stillNoStoreSample.push(p); }
}
console.log("\n--- of the live-noindex URLs ---");
console.log(" now INDEXABLE via code store:", fixedByStore);
console.log(" DROPPED from new sitemap    :", droppedFromSitemap);
console.log(" STILL AT RISK (in sitemap, no indexable store page):", stillNoStore);
console.log(" sample at-risk:\n  " + stillNoStoreSample.join("\n  "));

console.log("\n--- live 404s still in new sitemap ---");
for (const p of live404) console.log(" ", newPaths.has(p) ? "STILL PRESENT" : "removed", p);

// New URLs added to sitemap that we have never crawled
const added = [...newPaths].filter((p) => !liveByPath.has(p));
console.log("\nNEW urls in sitemap not previously live-crawled:", added.length);
console.log("  " + added.slice(0, 20).join("\n  "));
writeFileSync("scripts/_tmp/new-sitemap-paths.json", JSON.stringify([...newPaths], null, 0));
writeFileSync("scripts/_tmp/at-risk.json", JSON.stringify(stillNoStoreSample.length ? liveNoindex.filter((p) => newPaths.has(p) && !(getGeneratedPageByPath(p) && getGeneratedIndexingDecision(getGeneratedPageByPath(p)!).index)) : [], null, 0));
