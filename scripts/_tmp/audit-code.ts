import { getAllGeneratedPages, getSitemapGeneratedPages, getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { normalizePath } from "@/lib/seo/canonical";

const all = getAllGeneratedPages();
console.log("code-store pages:", all.length);
const st: Record<string, number> = {};
for (const p of all) st[`${p.status}/${p.indexFlag}`] = (st[`${p.status}/${p.indexFlag}`] ?? 0) + 1;
console.log("status/indexFlag:", JSON.stringify(st));

const reasons: Record<string, number> = {};
for (const p of all) {
  const d = getGeneratedIndexingDecision(p);
  reasons[d.reason] = (reasons[d.reason] ?? 0) + 1;
}
console.log("\n=== indexing decision reasons (all code-store pages) ===");
for (const [k, v] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) console.log(`  ${v}\t${k}`);

const sm = getFullPublicSitemapEntries();
console.log("\ncode sitemap entries:", sm.length);
console.log("getSitemapGeneratedPages():", getSitemapGeneratedPages().length);

// Which sitemap URLs map to a code-store page that renders noindex?
let noidx = 0, noPage = 0;
const noidxByPrefix: Record<string, number> = {};
const noPageSample: string[] = [];
for (const e of sm) {
  const path = normalizePath(e.url);
  const page = getGeneratedPageByPath(path);
  if (!page) { noPage++; if (noPageSample.length < 12) noPageSample.push(path); continue; }
  const d = getGeneratedIndexingDecision(page);
  if (!d.index) {
    noidx++;
    const k = path.split("/").filter(Boolean).slice(0, 1).join("/") + (path.split("/").filter(Boolean).length > 2 ? "/*/" + (path.split("/").filter(Boolean)[2] ?? "") : "");
    noidxByPrefix[k] = (noidxByPrefix[k] ?? 0) + 1;
  }
}
console.log(`\nsitemap URLs backed by a code-store page that is NOINDEX: ${noidx}`);
console.log(`sitemap URLs with NO code-store page (static routes): ${noPage}`);
console.log("sample no-page:", noPageSample.join("\n  "));

// quality field distribution for pages that fail
const fails = all.filter((p) => !getGeneratedIndexingDecision(p).index);
console.log("\n=== failing pages: quality fields ===");
const f = (n: number[]) => n.length ? `min=${Math.min(...n)} max=${Math.max(...n)} avg=${(n.reduce((a, b) => a + b, 0) / n.length).toFixed(1)}` : "-";
console.log(" seoScore      ", f(fails.map((p) => p.quality.seoScore)));
console.log(" localDepth    ", f(fails.map((p) => p.quality.localDepthScore)));
console.log(" wordCount     ", f(fails.map((p) => p.quality.wordCount)));
console.log(" dupRisk high  ", fails.filter((p) => p.quality.duplicateRisk === "high").length);
console.log(" recFlag=noindex", fails.filter((p) => p.quality.recommendedIndexFlag === "noindex").length);
console.log(" indexFlag=noindex", fails.filter((p) => p.indexFlag === "noindex").length);
console.log(" status!=published", fails.filter((p) => p.status !== "published").length);
