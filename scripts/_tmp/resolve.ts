import { PrismaClient } from "@prisma/client";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { normalizePath } from "@/lib/seo/canonical";
import { writeFileSync } from "node:fs";

const p = new PrismaClient();
(async () => {
  const paths = [...new Set(getFullPublicSitemapEntries().map((e) => normalizePath(e.url)))];
  console.log("sitemap URLs to resolve:", paths.length);

  const rows = await p.generatedPage.findMany({
    where: { status: "published" },
    select: { fullPath: true, indexFlag: true, qualityScore: true, duplicateRisk: true, contentWordCount: true, _count: { select: { blocks: true } } },
  });
  const db = new Map(rows.map((r) => [normalizePath(r.fullPath), r]));

  const out: Record<string, string[]> = { storeIndex: [], dbIndex: [], fallbackDefaultIndex: [], NOINDEX: [] };
  for (const path of paths) {
    // 1. code store wins (getDbGeneratedSeoPageByPath defers to it)
    const s = getGeneratedPageByPath(path);
    if (s && s.status === "published") {
      (getGeneratedIndexingDecision(s).index ? out.storeIndex : out.NOINDEX).push(path);
      continue;
    }
    // 2. DB row, with the shell + thin gates applied
    const r = db.get(path);
    const usable = r && r._count.blocks > 0 && !(r.indexFlag === "index" && ((r.qualityScore ?? 70) < 70 || r.duplicateRisk === "high"));
    if (usable) {
      const idx = r.indexFlag === "index" && (r.qualityScore ?? 70) >= 70 && r.duplicateRisk !== "high";
      (idx ? out.dbIndex : out.NOINDEX).push(path);
      continue;
    }
    // 3. static fallback component: no `robots` key in generateMetadata -> indexable
    out.fallbackDefaultIndex.push(path);
  }
  for (const [k, v] of Object.entries(out)) console.log(`  ${k.padEnd(22)} ${v.length}`);
  console.log("\nNOINDEX URLs still advertised in the sitemap:", out.NOINDEX.length);
  console.log(out.NOINDEX.slice(0, 20).map((x) => "  " + x).join("\n"));
  writeFileSync("scripts/_tmp/resolved.json", JSON.stringify(out, null, 1));
  await p.$disconnect();
})();
