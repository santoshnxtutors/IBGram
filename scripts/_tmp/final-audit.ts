import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { normalizePath } from "@/lib/seo/canonical";
import { isPrivateOrUtilityPath } from "@/lib/seo/indexing-policy";

const entries = getFullPublicSitemapEntries();
const paths = entries.map((e) => normalizePath(e.url));
const uniq = new Set(paths);

console.log(`sitemap entries: ${entries.length} | unique paths: ${uniq.size} | duplicates: ${entries.length - uniq.size}`);

// 1. nothing private/disallowed in the sitemap
const priv = [...uniq].filter(isPrivateOrUtilityPath);
console.log(`robots-disallowed paths in sitemap: ${priv.length}`, priv.slice(0, 5));

// 2. every store-backed page indexable
let noindex = 0, thin = 0;
const wc: number[] = [];
for (const p of uniq) {
  const g = getGeneratedPageByPath(p);
  if (!g) continue;
  if (!getGeneratedIndexingDecision(g).index) noindex++;
  wc.push(g.quality.wordCount);
  if (g.quality.wordCount < 1400) thin++;
}
console.log(`store-backed pages in sitemap: ${wc.length} | noindex: ${noindex} | under 1400 words: ${thin}`);
console.log(`  words min=${Math.min(...wc)} max=${Math.max(...wc)} avg=${(wc.reduce((a, b) => a + b, 0) / wc.length).toFixed(0)}`);

// 3. duplicate titles / h1 across the whole compiled corpus
const titles = new Map<string, string[]>(); const h1s = new Map<string, string[]>();
for (const p of uniq) {
  const g = getGeneratedPageByPath(p);
  if (!g) continue;
  (titles.get(g.metaTitle) ?? titles.set(g.metaTitle, []).get(g.metaTitle)!).push(p);
  (h1s.get(g.h1) ?? h1s.set(g.h1, []).get(g.h1)!).push(p);
}
const dupT = [...titles.entries()].filter(([, v]) => v.length > 1);
const dupH = [...h1s.entries()].filter(([, v]) => v.length > 1);
console.log(`duplicate metaTitles: ${dupT.length} | duplicate h1s: ${dupH.length}`);
dupT.slice(0, 5).forEach(([t, v]) => console.log(`   "${t.slice(0, 60)}" -> ${v.length}`));

// 4. titles that would double the brand or run long
const longT = [...titles.keys()].filter((t) => t.length > 63);
const brandDup = [...titles.keys()].filter((t) => (t.match(/IB Gram/g) ?? []).length > 1);
console.log(`metaTitles over 63 chars: ${longT.length} | with doubled brand: ${brandDup.length}`);
