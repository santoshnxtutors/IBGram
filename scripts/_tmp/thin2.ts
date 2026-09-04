import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
(async () => {
  // DB render path: seoScore = qualityScore ?? 70 ; noindex when < 70 (or dupRisk high / indexFlag noindex)
  const withBlocks = await p.generatedPage.findMany({
    where: { status: "published", blocks: { some: {} } },
    select: { fullPath: true, qualityScore: true, duplicateRisk: true, indexFlag: true, contentWordCount: true },
  });
  const noindex = withBlocks.filter((r) => (r.qualityScore ?? 70) < 70 || r.duplicateRisk === "high" || r.indexFlag !== "index");
  console.log(`published DB rows WITH blocks: ${withBlocks.length}`);
  console.log(`  -> would render NOINDEX     : ${noindex.length}`);
  console.log(`  -> would render index       : ${withBlocks.length - noindex.length}`);
  const wc = noindex.map((r) => r.contentWordCount);
  console.log(`  noindex rows wordcount: min=${Math.min(...wc)} max=${Math.max(...wc)} avg=${(wc.reduce((a, b) => a + b, 0) / wc.length).toFixed(0)}`);
  const q = noindex.map((r) => r.qualityScore ?? 70);
  console.log(`  noindex rows qualityScore: min=${Math.min(...q)} max=${Math.max(...q)}`);
  console.log("  sample:", noindex.slice(0, 8).map((r) => `${r.fullPath} q=${r.qualityScore} wc=${r.contentWordCount}`).join("\n          "));
  await p.$disconnect();
})();
