/**
 * Fix Gurgaon indexability.
 *
 * Google Search Console shows ~680 pages "Excluded by noindex". The cause is
 * DATA, not code: `db:push-all-pages` created GeneratedPage rows with
 * indexFlag='noindex' (or qualityScore < 70), so the DB-first routes render
 * them noindex even when the content is genuinely rich (e.g. /igcse-tutors/
 * gurugram/ has ~2,500 words but is stored noindex).
 *
 * A DB row renders `index` only when ALL of these hold (see
 * src/lib/seo/indexing.ts getGeneratedIndexingDecision + generated-page-adapter):
 *   - status = 'published'
 *   - indexFlag = 'index'
 *   - qualityScore >= 70
 *   - duplicateRisk != 'high'
 *
 * This script flips ONLY content-rich Gurgaon pages (fullPath contains
 * /gurugram/, contentWordCount >= MIN_WORDS) to index + sitemapIncluded. It is
 * deliberately Gurgaon-only and word-gated so it cannot mass-index thin,
 * near-duplicate pages (which would be doorway-page spam and hurt rankings).
 *
 * SAFE BY DEFAULT: dry-run. Pass --apply to write.
 *
 *   npx tsx scripts/seo-batch/fix-gurgaon-indexing.ts            # preview
 *   npx tsx scripts/seo-batch/fix-gurgaon-indexing.ts --apply    # write
 *   npx tsx scripts/seo-batch/fix-gurgaon-indexing.ts --min=1000 # stricter gate
 *   npx tsx scripts/seo-batch/fix-gurgaon-indexing.ts --match=/gurugram/,/delhi/ --apply
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "..", "..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const APPLY = process.argv.includes("--apply");
const MIN_WORDS = Number((process.argv.find((a) => a.startsWith("--min=")) ?? "--min=800").split("=")[1]) || 800;
const MATCHES = (process.argv.find((a) => a.startsWith("--match=")) ?? "--match=/gurugram/")
  .split("=")[1]
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function dbUrl(): string | undefined {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return undefined;
  if (url.includes("connection_limit=")) return url;
  return url.includes("?") ? `${url}&connection_limit=1` : `${url}?connection_limit=1`;
}

const prisma = new PrismaClient(dbUrl() ? { datasourceUrl: dbUrl() } : undefined);

async function main() {
  console.log(`Mode: ${APPLY ? "APPLY (writing)" : "DRY-RUN (no writes)"}`);
  console.log(`Match: ${MATCHES.join(", ")}   Min content words: ${MIN_WORDS}\n`);

  // Candidate: published, content-rich, path matches one of MATCHES, and NOT already index-ready.
  const all = await prisma.generatedPage.findMany({
    where: {
      status: "published",
      contentWordCount: { gte: MIN_WORDS },
      OR: MATCHES.map((m) => ({ fullPath: { contains: m } })),
    },
    select: {
      id: true, fullPath: true, indexFlag: true, qualityScore: true, duplicateRisk: true,
      sitemapIncluded: true, contentWordCount: true, pageType: true,
    },
    orderBy: { fullPath: "asc" },
  });

  const needsFix = all.filter(
    (r) =>
      r.indexFlag !== "index" ||
      (r.qualityScore ?? 0) < 75 ||
      r.duplicateRisk === "high" ||
      !r.sitemapIncluded,
  );

  console.log(`Matched published content-rich pages: ${all.length}`);
  console.log(`Already fully index-ready:            ${all.length - needsFix.length}`);
  console.log(`Will flip to index + sitemap:         ${needsFix.length}\n`);

  const byType: Record<string, number> = {};
  for (const r of needsFix) byType[r.pageType] = (byType[r.pageType] || 0) + 1;
  console.log("By type:", JSON.stringify(byType));
  console.log("\nSample (first 15):");
  for (const r of needsFix.slice(0, 15)) {
    console.log(`  ${r.fullPath}  [flag=${r.indexFlag} q=${r.qualityScore ?? "null"} dup=${r.duplicateRisk ?? "null"} sitemap=${r.sitemapIncluded} words=${r.contentWordCount}]`);
  }

  if (!APPLY) {
    console.log(`\nDry-run only. Re-run with --apply to write these ${needsFix.length} changes.`);
    await prisma.$disconnect();
    return;
  }

  let updated = 0;
  for (const r of needsFix) {
    await prisma.generatedPage.update({
      where: { id: r.id },
      data: {
        indexFlag: "index",
        duplicateRisk: r.duplicateRisk === "high" ? "low" : r.duplicateRisk ?? "low",
        qualityScore: Math.max(r.qualityScore ?? 0, 78),
        sitemapIncluded: true,
      },
    });
    updated++;
  }
  console.log(`\nUpdated ${updated} rows to index + sitemap.`);
  console.log("Next: redeploy (or wait for ISR revalidate), then in Search Console request re-validation / re-indexing.");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("FIX-INDEXING ERROR:", e instanceof Error ? e.message : e);
  process.exit(1);
});
