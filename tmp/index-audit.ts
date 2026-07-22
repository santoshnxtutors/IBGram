import { getAllGeneratedPages } from "../src/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "../src/lib/seo/indexing";
const all = getAllGeneratedPages();
const gur = all.filter(p => p.citySlug === "gurugram" || /gurugram|gurgaon/i.test(p.canonicalUrl));
function tally(pages:any[]) {
  const t:any = { total: pages.length, index: 0, noindex: 0, byType: {}, reasons: {} };
  for (const p of pages) {
    const d = getGeneratedIndexingDecision(p);
    t[d.index ? "index" : "noindex"]++;
    t.byType[p.pageType] = t.byType[p.pageType] || { index:0, noindex:0 };
    t.byType[p.pageType][d.index?"index":"noindex"]++;
    if (!d.index) t.reasons[d.reason] = (t.reasons[d.reason]||0)+1;
  }
  return t;
}
console.log("=== ALL generated pages ===");
console.log(JSON.stringify(tally(all), null, 1));
console.log("=== GURGAON generated pages ===");
console.log(JSON.stringify(tally(gur), null, 1));
