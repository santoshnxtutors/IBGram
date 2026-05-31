/**
 * Batch SEO rewrite runner.
 *
 * This is the thin batch-aware wrapper around the existing long-form seed
 * (`database/prisma/seed-longform-content.ts`) per the brief in
 * `docs/IBGRAM_LONGFORM_SEO_REWRITE_PLAN.md`.
 *
 * The wrapper exists so admin staff can run small, scoped batches without
 * having to remember the seed file path. The seed itself remains idempotent
 * (upsert by `fullPath`) and child rows (PageBlock / PageFaq / PageMetadata /
 * PageSchema / PageInternalLink) are wiped and recreated per page on each run.
 *
 * Usage:
 *   npx tsx scripts/rewrite-seo-pages-batch.ts --start=1 --end=15
 *   npx tsx scripts/rewrite-seo-pages-batch.ts --start=16 --end=26
 *   npx tsx scripts/rewrite-seo-pages-batch.ts --start=1 --end=200 --dry-run
 *   npx tsx scripts/rewrite-seo-pages-batch.ts --locations=gurugram,delhi --start=1 --end=999
 *
 * Flags:
 *   --start=N            (default: 1)         1-indexed inclusive lower bound on the seed array
 *   --end=N              (default: 999)       1-indexed inclusive upper bound on the seed array
 *   --locations=csv      (default: all)       Filter to gurugram | delhi | noida (comma-separated)
 *   --dry-run            (default: false)     Report what would change; no DB writes
 *   --force              (default: false)     Reserved; current seed always upserts
 *   --min-words=N        (default: 1800)      Quality floor recorded in the summary (no effect on upsert)
 *   --min-faqs=N         (default: 8)         Quality floor recorded in the summary (no effect on upsert)
 *   --publish-passing    (default: true)      Reserved; seed publishes by default
 *   --noindex-failing    (default: false)     If true, pages below min-words/min-faqs are flagged noindex
 *
 * Exit codes:
 *   0  — all pages in batch upserted successfully (or dry-run completed)
 *   1  — at least one page failed (DB error, schema issue, etc.)
 */
import { spawn } from "node:child_process";
import path from "node:path";

type Args = {
  start: number;
  end: number;
  locations: Set<string> | null;
  dryRun: boolean;
  force: boolean;
  minWords: number;
  minFaqs: number;
  publishPassing: boolean;
  noindexFailing: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {
    start: 1,
    end: 999,
    locations: null,
    dryRun: false,
    force: false,
    minWords: 1800,
    minFaqs: 8,
    publishPassing: true,
    noindexFailing: false,
  };
  for (const raw of argv.slice(2)) {
    if (raw === "--dry-run") args.dryRun = true;
    else if (raw === "--force") args.force = true;
    else if (raw === "--publish-passing") args.publishPassing = true;
    else if (raw === "--noindex-failing") args.noindexFailing = true;
    else if (raw.startsWith("--start=")) args.start = Math.max(1, Number(raw.slice("--start=".length)) || 1);
    else if (raw.startsWith("--end=")) args.end = Math.max(args.start, Number(raw.slice("--end=".length)) || 999);
    else if (raw.startsWith("--locations=")) args.locations = new Set(raw.slice("--locations=".length).split(",").map((s) => s.trim().toLowerCase()).filter(Boolean));
    else if (raw.startsWith("--min-words=")) args.minWords = Math.max(0, Number(raw.slice("--min-words=".length)) || 0);
    else if (raw.startsWith("--min-faqs=")) args.minFaqs = Math.max(0, Number(raw.slice("--min-faqs=".length)) || 0);
  }
  return args;
}

const args = parseArgs(process.argv);

const seedPath = path.resolve(__dirname, "..", "database", "prisma", "seed-longform-content.ts");

const env = {
  ...process.env,
  BATCH_START: String(args.start),
  BATCH_END: String(args.end),
  BATCH_LOCATIONS: args.locations ? Array.from(args.locations).join(",") : "",
  BATCH_MIN_WORDS: String(args.minWords),
  BATCH_MIN_FAQS: String(args.minFaqs),
  BATCH_NOINDEX_FAILING: args.noindexFailing ? "1" : "",
};

const seedArgs = ["tsx", seedPath];
if (args.dryRun) seedArgs.push("--dry-run");

console.log("Batch SEO rewrite");
console.log(`  start=${args.start} end=${args.end} locations=${args.locations ? Array.from(args.locations).join(",") : "all"} dryRun=${args.dryRun}`);
console.log(`  minWords=${args.minWords} minFaqs=${args.minFaqs} noindexFailing=${args.noindexFailing}`);
console.log("");

const child = spawn("npx", seedArgs, { env, stdio: "inherit", shell: process.platform === "win32" });

child.on("exit", (code) => {
  if (code === 0) {
    console.log("");
    console.log("✓ Batch rewrite complete.");
    console.log(`  Audit next: npx tsx scripts/audit-seo-content-batch.ts --start=${args.start} --end=${args.end}`);
  } else {
    console.error("");
    console.error(`✗ Batch rewrite exited with code ${code}.`);
  }
  process.exit(code ?? 1);
});
