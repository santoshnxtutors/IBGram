import { PrismaClient } from "@prisma/client";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { normalizePath } from "@/lib/seo/canonical";
import { writeFileSync } from "node:fs";
const p = new PrismaClient();
(async () => {
  const code = getFullPublicSitemapEntries().map((e) => normalizePath(e.url));
  const dbSm = await p.generatedPage.findMany({ where: { status: "published", indexFlag: "index", sitemapIncluded: true, contentWordCount: { gte: 800 }, canonicalTarget: null }, select: { fullPath: true } });
  const blog = await p.blogPost.count({ where: { status: "published" } }).catch(() => 0);
  const all = new Set([...code, ...dbSm.map((r) => normalizePath(r.fullPath))]);
  console.log(`code sitemap: ${code.length} | DB sitemap: ${dbSm.length} | union: ${all.size}`);
  console.log(`+ blog/tutor/tutor-profile entries added in app/sitemap.ts (blog published rows: ${blog})`);

  const dbRows = await p.generatedPage.findMany({ where: { status: "published" }, select: { fullPath: true, contentWordCount: true, _count: { select: { blocks: true } } } });
  const dbWc = new Map(dbRows.map((r) => [normalizePath(r.fullPath), r._count.blocks > 0 ? r.contentWordCount : 0]));

  const thin: { path: string; wc: number; src: string }[] = [];
  for (const path of all) {
    const s = getGeneratedPageByPath(path);
    if (s && s.status === "published") { if (s.quality.wordCount < 1400) thin.push({ path, wc: s.quality.wordCount, src: "store" }); continue; }
    const wc = dbWc.get(path) ?? 0;
    thin.push({ path, wc, src: wc > 0 ? "db-thin" : "static-fallback" });
  }
  thin.sort((a, b) => a.wc - b.wc);
  console.log(`\nURLs in sitemap WITHOUT a rich (1400+ word) store page: ${thin.length}`);
  const bySrc: Record<string, number> = {};
  for (const t of thin) bySrc[t.src] = (bySrc[t.src] ?? 0) + 1;
  console.log(" by source:", JSON.stringify(bySrc));
  const byPrefix: Record<string, number> = {};
  for (const t of thin) { const s = t.path.split("/").filter(Boolean); byPrefix[`/${s[0] ?? ""}/${s[1] ?? ""}`] = (byPrefix[`/${s[0] ?? ""}/${s[1] ?? ""}`] ?? 0) + 1; }
  console.log("\n top prefixes needing content:");
  for (const [k, v] of Object.entries(byPrefix).sort((a, b) => b[1] - a[1]).slice(0, 18)) console.log(`  ${String(v).padStart(4)}  ${k}`);
  writeFileSync("scripts/_tmp/thin-pages.json", JSON.stringify(thin, null, 1));
  await p.$disconnect();
})();
