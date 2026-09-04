import { readFileSync } from "node:fs";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath, getAllGeneratedPages } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { normalizePath } from "@/lib/seo/canonical";

const CRAWL = "C:/Users/HP/AppData/Local/Temp/claude/e--NX-Tutor-Real-IBGram-IB-Gram/84d1dc42-671c-48ef-96fe-19fb3f34413a/scratchpad/gsc/crawl.json";
const live = JSON.parse(readFileSync(CRAWL, "utf8")) as { url: string; robots: string }[];
const newPaths = new Set(getFullPublicSitemapEntries().map((e) => normalizePath(e.url)));
const risk = live.filter((r) => (r.robots || "").includes("noindex")).map((r) => normalizePath(r.url))
  .filter((p) => newPaths.has(p))
  .filter((p) => { const g = getGeneratedPageByPath(p); return !(g && getGeneratedIndexingDecision(g).index); });

console.log("at-risk total:", risk.length);
let noStore = 0, storeNoindex = 0;
const byGroup: Record<string, number> = {};
for (const p of risk) {
  const g = getGeneratedPageByPath(p);
  if (!g) noStore++; else storeNoindex++;
  const seg = p.split("/").filter(Boolean);
  const k = `/${seg[0]}/${seg[1] ?? ""}/${seg.length > 2 ? (["areas","sectors","societies","schools"].includes(seg[2]!) ? seg[2] : "<slug>") : ""}`;
  byGroup[k] = (byGroup[k] ?? 0) + 1;
}
console.log("no code-store page at all:", noStore, "| store page but noindex:", storeNoindex);
console.log("\nby group:");
for (const [k, v] of Object.entries(byGroup).sort((a, b) => b[1] - a[1])) console.log(`  ${v}\t${k}`);

// Do non-gurugram equivalents have store pages?
console.log("\n--- probe: same route shape, other cities ---");
for (const p of ["/igcse-tutors/gurugram/accounting/", "/igcse-tutors/mumbai/accounting/", "/igcse-tutors/gurugram/areas/dlf-phase-1/", "/igcse-tutors/mumbai/areas/andheri/", "/ib-tutors/gurugram/chemistry/", "/ib-tutors/mumbai/chemistry/"]) {
  const g = getGeneratedPageByPath(p);
  console.log(` ${p} -> ${g ? `store hit (status=${g.status}, indexFlag=${g.indexFlag}, seo=${g.quality.seoScore}, wc=${g.quality.wordCount}, rec=${g.quality.recommendedIndexFlag}) index=${getGeneratedIndexingDecision(g).index}` : "NO STORE PAGE"}`);
}
const paths = new Set(getAllGeneratedPages().map((p) => normalizePath(p.canonicalUrl)));
console.log("\nstore pages whose path contains gurugram:", [...paths].filter((p) => p.includes("gurugram")).length);
console.log("store pages containing igcse-tutors:", [...paths].filter((p) => p.includes("igcse-tutors")).length);
