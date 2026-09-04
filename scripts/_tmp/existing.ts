import { PrismaClient } from "@prisma/client";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { normalizePath } from "@/lib/seo/canonical";
import { readFileSync, writeFileSync } from "node:fs";

const p = new PrismaClient();
const keys = readFileSync("tmp/seo/pending-gurugram.txt", "utf8").split("\n").map((l) => l.trim()).filter(Boolean);
const pathOf = (k: string) => `/${k.replace(/__/g, "/")}/`;

(async () => {
  const rows = await p.generatedPage.findMany({ where: { status: "published" }, select: { fullPath: true, contentWordCount: true, _count: { select: { blocks: true, faqs: true } } } });
  const db = new Map(rows.map((r) => [normalizePath(r.fullPath), r]));

  const out: Record<string, number> = { none: 0, storeOnly: 0, dbOnly: 0, both: 0 };
  const detail: Array<{ key: string; storeWords: number; storeBlocks: number; dbWords: number; dbBlocks: number }> = [];
  for (const k of keys) {
    const path = pathOf(k);
    const s = getGeneratedPageByPath(path);
    const d = db.get(path);
    const storeWords = s?.quality.wordCount ?? 0;
    const storeBlocks = s?.contentBlocks?.length ?? 0;
    const dbWords = d && d._count.blocks > 0 ? d.contentWordCount : 0;
    detail.push({ key: k, storeWords, storeBlocks, dbWords, dbBlocks: d?._count.blocks ?? 0 });
    const hasS = storeWords > 0, hasD = dbWords > 0;
    out[hasS && hasD ? "both" : hasS ? "storeOnly" : hasD ? "dbOnly" : "none"]++;
  }
  console.log("pending keys:", keys.length, JSON.stringify(out));
  const withContent = detail.filter((d) => Math.max(d.storeWords, d.dbWords) > 0);
  const w = withContent.map((d) => Math.max(d.storeWords, d.dbWords));
  if (w.length) console.log(`existing content wordcount: min=${Math.min(...w)} max=${Math.max(...w)} avg=${(w.reduce((a, b) => a + b, 0) / w.length).toFixed(0)}`);
  console.log("\nsamples WITH content:");
  withContent.slice(0, 6).forEach((d) => console.log(`  ${d.key}  store=${d.storeWords}w/${d.storeBlocks}b  db=${d.dbWords}w/${d.dbBlocks}b`));
  console.log("\nsamples WITHOUT content:");
  detail.filter((d) => Math.max(d.storeWords, d.dbWords) === 0).slice(0, 6).forEach((d) => console.log(`  ${d.key}`));
  writeFileSync("tmp/seo/existing-content.json", JSON.stringify(detail, null, 1));
  await p.$disconnect();
})();
