/**
 * SEO content audit (post-rewrite).
 *
 * Reads `GeneratedPage` rows from the DB and validates each one against the
 * acceptance checklist in docs/IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md §13.
 *
 * Audit rules:
 *   - contentWordCount ≥ min-words (default 1,800)
 *   - PageFaq count ≥ min-faqs (default 8)
 *   - h1, metaTitle, metaDescription, canonicalUrl present
 *   - PageSchema includes a BreadcrumbList AND an FAQPage row
 *   - PageInternalLink count ≥ 4
 *   - If --noindex-failing, every failing page is marked indexFlag='noindex'
 *     and sitemapIncluded=false
 *
 * Usage:
 *   npx tsx scripts/audit-seo-content-batch.ts
 *   npx tsx scripts/audit-seo-content-batch.ts --start=1 --end=50
 *   npx tsx scripts/audit-seo-content-batch.ts --locations=gurugram,delhi
 *   npx tsx scripts/audit-seo-content-batch.ts --noindex-failing
 *
 * Flags:
 *   --start=N            (default: 1)        Filter to pages created on or after this row index
 *   --end=N              (default: ∞)        Filter to pages within this row index range
 *   --locations=csv      (default: all)      Filter to gurugram | delhi | noida
 *   --min-words=N        (default: 1800)     Word-count quality floor
 *   --min-faqs=N         (default: 8)        FAQ-count quality floor
 *   --noindex-failing    (default: false)    Mark failing pages noindex + sitemapIncluded=false
 *   --json               (default: false)    Emit machine-readable JSON instead of a table
 *
 * Exit codes:
 *   0  — all audited pages pass
 *   1  — at least one page fails the quality floor (does NOT mean the script
 *        itself crashed — use --noindex-failing if you want hands-off cleanup)
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient, IndexFlag } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();

type Args = {
  start: number;
  end: number;
  locations: Set<string> | null;
  minWords: number;
  minFaqs: number;
  noindexFailing: boolean;
  json: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {
    start: 1,
    end: Number.MAX_SAFE_INTEGER,
    locations: null,
    minWords: 1800,
    minFaqs: 8,
    noindexFailing: false,
    json: false,
  };
  for (const raw of argv.slice(2)) {
    if (raw === "--noindex-failing") args.noindexFailing = true;
    else if (raw === "--json") args.json = true;
    else if (raw.startsWith("--start=")) args.start = Math.max(1, Number(raw.slice("--start=".length)) || 1);
    else if (raw.startsWith("--end=")) args.end = Math.max(args.start, Number(raw.slice("--end=".length)) || Number.MAX_SAFE_INTEGER);
    else if (raw.startsWith("--locations=")) args.locations = new Set(raw.slice("--locations=".length).split(",").map((s) => s.trim().toLowerCase()).filter(Boolean));
    else if (raw.startsWith("--min-words=")) args.minWords = Math.max(0, Number(raw.slice("--min-words=".length)) || 0);
    else if (raw.startsWith("--min-faqs=")) args.minFaqs = Math.max(0, Number(raw.slice("--min-faqs=".length)) || 0);
  }
  return args;
}

type AuditRow = {
  index: number;
  fullPath: string;
  pageType: string;
  status: string;
  indexFlag: string;
  wordCount: number;
  faqCount: number;
  hasH1: boolean;
  hasMetaTitle: boolean;
  hasMetaDescription: boolean;
  hasCanonical: boolean;
  hasBreadcrumbSchema: boolean;
  hasFaqSchema: boolean;
  internalLinkCount: number;
  cityHint: string | null;
  passed: boolean;
  failures: string[];
};

function locationOf(fullPath: string): string | null {
  if (fullPath.includes("/gurugram/") || fullPath.includes("gurgaon")) return "gurugram";
  if (fullPath.includes("/delhi/")) return "delhi";
  if (fullPath.includes("/noida/")) return "noida";
  return null;
}

async function audit(args: Args): Promise<AuditRow[]> {
  const pages = await prisma.generatedPage.findMany({
    orderBy: { createdAt: "asc" },
    include: {
      faqs: { select: { id: true } },
      schemas: { select: { schemaType: true } },
      sourceLinks: { select: { id: true } },
    },
  });

  const rows: AuditRow[] = [];
  let idx = 0;
  for (const page of pages) {
    idx++;
    if (idx < args.start || idx > args.end) continue;
    const cityHint = locationOf(page.fullPath);
    if (args.locations && (!cityHint || !args.locations.has(cityHint))) continue;

    const faqCount = page.faqs.length;
    const schemaTypes = new Set(page.schemas.map((s) => s.schemaType));
    const internalLinkCount = page.sourceLinks.length;

    const failures: string[] = [];
    if (page.contentWordCount < args.minWords) failures.push(`words<${args.minWords} (${page.contentWordCount})`);
    if (faqCount < args.minFaqs) failures.push(`faqs<${args.minFaqs} (${faqCount})`);
    if (!page.h1) failures.push("missing h1");
    if (!page.metaTitle) failures.push("missing metaTitle");
    if (!page.metaDescription) failures.push("missing metaDescription");
    if (!page.canonicalUrl) failures.push("missing canonicalUrl");
    if (!schemaTypes.has("BreadcrumbList")) failures.push("missing BreadcrumbList schema");
    if (!schemaTypes.has("FAQPage")) failures.push("missing FAQPage schema");
    if (internalLinkCount < 4) failures.push(`internalLinks<4 (${internalLinkCount})`);

    rows.push({
      index: idx,
      fullPath: page.fullPath,
      pageType: page.pageType,
      status: page.status,
      indexFlag: page.indexFlag,
      wordCount: page.contentWordCount,
      faqCount,
      hasH1: Boolean(page.h1),
      hasMetaTitle: Boolean(page.metaTitle),
      hasMetaDescription: Boolean(page.metaDescription),
      hasCanonical: Boolean(page.canonicalUrl),
      hasBreadcrumbSchema: schemaTypes.has("BreadcrumbList"),
      hasFaqSchema: schemaTypes.has("FAQPage"),
      internalLinkCount,
      cityHint,
      passed: failures.length === 0,
      failures,
    });
  }
  return rows;
}

async function applyNoindex(rows: AuditRow[]) {
  let touched = 0;
  for (const row of rows) {
    if (row.passed) continue;
    await prisma.generatedPage.update({
      where: { fullPath: row.fullPath },
      data: { indexFlag: IndexFlag.noindex, sitemapIncluded: false, robotsTag: "noindex, follow" },
    });
    touched++;
  }
  if (touched > 0) console.log(`\nApplied indexFlag=noindex + sitemapIncluded=false to ${touched} failing page(s).`);
}

async function main() {
  const args = parseArgs(process.argv);
  let rows: AuditRow[] = [];
  try {
    rows = await audit(args);
  } catch (err) {
    console.error("Audit failed (DB unreachable?):", err instanceof Error ? err.message : err);
    await prisma.$disconnect();
    process.exit(1);
  }

  if (args.json) {
    console.log(JSON.stringify({ summary: summarise(rows), rows }, null, 2));
  } else {
    const sum = summarise(rows);
    console.log("");
    console.log(`Audited ${rows.length} page(s)`);
    console.log(`  pass: ${sum.passed}    fail: ${sum.failed}`);
    console.log(`  avg words: ${sum.avgWords}    avg FAQs: ${sum.avgFaqs}`);
    console.log(`  gurugram: ${sum.gurugram}    delhi: ${sum.delhi}    noida: ${sum.noida}    other: ${sum.other}`);
    console.log("");
    if (rows.length <= 60) {
      for (const r of rows) {
        const tag = r.passed ? "PASS" : "FAIL";
        console.log(`  [${tag}] ${r.fullPath}  ${r.wordCount}w · ${r.faqCount}fq · ${r.internalLinkCount}lnk${r.passed ? "" : "  — " + r.failures.join("; ")}`);
      }
    } else {
      console.log(`(${rows.length} rows — re-run with --json for the full list)`);
    }
  }

  if (args.noindexFailing) {
    await applyNoindex(rows);
  }

  await prisma.$disconnect();
  const failed = rows.filter((r) => !r.passed).length;
  process.exit(failed > 0 ? 1 : 0);
}

function summarise(rows: AuditRow[]) {
  const passed = rows.filter((r) => r.passed).length;
  const failed = rows.length - passed;
  const avgWords = rows.length ? Math.round(rows.reduce((a, r) => a + r.wordCount, 0) / rows.length) : 0;
  const avgFaqs = rows.length ? Math.round(rows.reduce((a, r) => a + r.faqCount, 0) / rows.length) : 0;
  const byCity = (city: string) => rows.filter((r) => r.cityHint === city).length;
  return {
    total: rows.length,
    passed,
    failed,
    avgWords,
    avgFaqs,
    gurugram: byCity("gurugram"),
    delhi: byCity("delhi"),
    noida: byCity("noida"),
    other: rows.filter((r) => r.cityHint === null).length,
  };
}

main().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
