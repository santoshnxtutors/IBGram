import { PrismaClient } from "@prisma/client";
import { dbBundleToGeneratedSeoPage, type DbPageWithChildren } from "@/lib/cms/generated-page-adapter";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
const p = new PrismaClient();
(async () => {
  const rows = await p.generatedPage.findMany({
    where: { status: "published" },
    include: { blocks: { orderBy: { sortOrder: "asc" } }, faqs: { orderBy: { sortOrder: "asc" } }, metadata: true, schemas: { where: { status: "published" } }, sourceLinks: true },
  });
  let shells = 0, withBlocksNoindex = 0, withBlocksIndex = 0;
  const reasons: Record<string, number> = {};
  const sample: string[] = [];
  for (const r of rows) {
    if (r.blocks.length === 0) { shells++; continue; }
    const page = dbBundleToGeneratedSeoPage(r as unknown as DbPageWithChildren);
    const d = getGeneratedIndexingDecision(page);
    if (d.index) withBlocksIndex++;
    else {
      withBlocksNoindex++;
      reasons[d.reason] = (reasons[d.reason] ?? 0) + 1;
      if (sample.length < 10) sample.push(`${r.fullPath} wc=${r.contentWordCount} q=${r.qualityScore} blocks=${r.blocks.length}`);
    }
  }
  console.log(`published rows: ${rows.length}\n  empty shells (already skipped): ${shells}\n  with blocks -> INDEX  : ${withBlocksIndex}\n  with blocks -> NOINDEX: ${withBlocksNoindex}  <-- these shadow the static fallback with a noindex page`);
  console.log("  reasons:", JSON.stringify(reasons, null, 1));
  console.log("  sample:\n   " + sample.join("\n   "));
  await p.$disconnect();
})();
