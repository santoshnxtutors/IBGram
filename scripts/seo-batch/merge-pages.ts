/**
 * SEO Batch 1 — merge/assembly.
 *
 * Reads tmp/batch1/manifest.json and the writer-agent content files in
 * tmp/batch1/content/<pageId>.json, assembles each into a complete, validated
 * GeneratedSeoPage using the SAME project generator helpers the real generator
 * uses (internal links, schema, quality scoring, normalization, validation),
 * then merges them (by pageId) into src/lib/generated-pages/generated-pages.local.json.
 *
 * Indexability gate: a page is published as index/follow only when it is
 * genuinely rich (>= MIN_INDEX_WORDS visible words, localDepth >= 70, dup risk
 * != high). Otherwise it is published as noindex and reported for manual review,
 * so we never advertise thin pages.
 *
 * Run: npx tsx scripts/seo-batch/merge-pages.ts            (writes the store)
 *      npx tsx scripts/seo-batch/merge-pages.ts --dry      (report only)
 *      npx tsx scripts/seo-batch/merge-pages.ts --only=ID1,ID2
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..", "..");
const TMP = path.join(ROOT, "tmp", "batch1");
const CONTENT_DIR = path.join(TMP, "content");
const STORE_PATH = path.join(ROOT, "src", "lib", "generated-pages", "generated-pages.local.json");

const MIN_INDEX_WORDS = 1500;

const DRY = process.argv.includes("--dry");
const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const ONLY = onlyArg ? new Set(onlyArg.replace("--only=", "").split(",").map((s) => s.trim()).filter(Boolean)) : null;

const CONTENT_BLOCK_TYPES = new Set([
  "intro", "programmes", "subjects", "local_areas", "schools", "matching_process", "verification", "tutoring_modes", "trust", "cta",
]);

async function main() {
  const validators = await import("../../src/lib/page-generator/validators");
  const normalizer = await import("../../src/lib/page-generator/content-normalizer");
  const linkEngine = await import("../../src/lib/page-generator/internal-link-engine");
  const schemaGen = await import("../../src/lib/page-generator/schema-generator");
  const quality = await import("../../src/lib/page-generator/quality-score");

  const manifest: any[] = JSON.parse(readFileSync(path.join(TMP, "manifest.json"), "utf8"));
  const manifestById = new Map(manifest.map((m) => [m.pageId, m]));

  const report: any[] = [];
  const assembled: any[] = [];
  const missing: string[] = [];
  const errors: { pageId: string; error: string }[] = [];

  const targetIds = (ONLY ? manifest.filter((m) => ONLY.has(m.pageId)) : manifest).map((m) => m.pageId);

  for (const pageId of targetIds) {
    const m = manifestById.get(pageId);
    const contentPath = path.join(CONTENT_DIR, `${pageId}.json`);
    if (!existsSync(contentPath)) {
      missing.push(pageId);
      continue;
    }
    let content: any;
    try {
      content = JSON.parse(readFileSync(contentPath, "utf8"));
    } catch (e: any) {
      errors.push({ pageId, error: `invalid JSON: ${e.message}` });
      continue;
    }

    try {
      const input = validators.validateGeneratorInput(m.input);
      const canonical: string = m.url;

      // Sanitize content blocks: keep only allowed types, require heading+body.
      const blocks = (Array.isArray(content.contentBlocks) ? content.contentBlocks : [])
        .filter((b: any) => b && CONTENT_BLOCK_TYPES.has(b.type) && typeof b.heading === "string" && typeof b.body === "string")
        .map((b: any) => ({ type: b.type, heading: b.heading, body: b.body, items: Array.isArray(b.items) ? b.items.filter((x: any) => typeof x === "string") : [] }));

      const faqs = (Array.isArray(content.faqs) ? content.faqs : [])
        .filter((f: any) => f && typeof f.question === "string" && typeof f.answer === "string")
        .map((f: any) => ({ question: f.question, answer: f.answer }));

      const base: any = {
        pageId,
        pageType: input.pageType,
        status: "published",
        indexFlag: "index",
        canonicalUrl: canonical,
        canonicalTarget: canonical,
        slug: m.slug ?? "",
        cityName: input.cityName,
        citySlug: input.citySlug,
        parentLocation: input.parentLocation,
        microLocationName: input.microLocationName,
        microLocationType: input.microLocationType,
        primaryKeyword: input.primaryKeyword,
        secondaryKeywords: input.secondaryKeywords,
        serviceFocus: input.serviceFocus,
        programmes: input.programmes,
        subjects: input.subjects,
        tutoringModes: input.tutoringModes,
        premiumAreas: input.premiumAreas,
        nearbyAreas: input.nearbyAreas,
        nearbyCities: input.nearbyCities,
        schoolsMentioned: input.schoolsMentioned,
        metaTitle: content.metaTitle,
        metaDescription: content.metaDescription,
        ogTitle: content.ogTitle ?? content.metaTitle,
        ogDescription: content.ogDescription ?? content.metaDescription,
        ogImage: "https://ibgram.com/images/ib-gram-city-og.svg",
        twitterTitle: content.twitterTitle ?? content.metaTitle,
        twitterDescription: content.twitterDescription ?? content.metaDescription,
        breadcrumbTitle: content.breadcrumbTitle ?? content.h1,
        h1: content.h1,
        heroTitle: content.heroTitle ?? content.h1,
        heroSubtitle: content.heroSubtitle,
        introSummary: content.introSummary,
        contentBlocks: blocks,
        faqs,
        internalLinks: linkEngine.buildInternalLinksForInput(input, pageId),
        relatedPageSuggestions: linkEngine.getRelatedGeneratedPageSuggestions(input, pageId),
        schema: {},
        quality: {
          wordCount: 0, uniquenessScore: 0, localDepthScore: 0, seoScore: 0,
          readabilityScore: 0, internalLinkScore: 0, duplicateRisk: "low",
          recommendedIndexFlag: "index", warnings: [],
        },
        finalCta: content.finalCta ?? "Book a free academic consultation.",
        schoolDisclaimer: content.schoolDisclaimer ?? m.writerBrief?.schoolDisclaimer,
        lastUpdated: "2026-06-09",
      };

      const normalized = normalizer.normalizeGeneratedPageContent(base);
      const q = quality.scoreGeneratedPage(normalized, input);
      normalized.quality = q;

      const indexable = q.wordCount >= MIN_INDEX_WORDS && q.localDepthScore >= 70 && q.duplicateRisk !== "high";
      normalized.indexFlag = indexable ? "index" : "noindex";
      normalized.canonicalTarget = canonical;
      normalized.schema = schemaGen.buildGeneratedPageSchema(normalized);

      const valid = validators.validateGeneratedSeoPage(normalized);
      assembled.push(valid);

      report.push({
        url: m.url,
        type: m.pageType,
        words: q.wordCount,
        titleLen: valid.metaTitle.length,
        descLen: valid.metaDescription.length,
        links: valid.internalLinks.length,
        faqs: valid.faqs.length,
        index: valid.indexFlag,
        localDepth: q.localDepthScore,
        dup: q.duplicateRisk,
        warnings: q.warnings,
      });
    } catch (e: any) {
      errors.push({ pageId, error: e.message });
    }
  }

  // Merge into store (override by pageId).
  if (!DRY && assembled.length) {
    let existing: any[] = [];
    if (existsSync(STORE_PATH)) {
      try { existing = JSON.parse(readFileSync(STORE_PATH, "utf8")); } catch { existing = []; }
      if (!Array.isArray(existing)) existing = [];
    }
    const byId = new Map<string, any>();
    for (const p of existing) byId.set(p.pageId, p);
    for (const p of assembled) byId.set(p.pageId, p);
    const merged = [...byId.values()];
    writeFileSync(STORE_PATH, `${JSON.stringify(merged, null, 2)}\n`, "utf8");
  }

  // Report
  const indexCount = report.filter((r) => r.index === "index").length;
  const noindexCount = report.filter((r) => r.index === "noindex").length;
  const avgWords = report.length ? Math.round(report.reduce((s, r) => s + r.words, 0) / report.length) : 0;
  console.log(`\n=== MERGE ${DRY ? "(dry run)" : ""} ===`);
  console.log(`Assembled: ${assembled.length} / target ${targetIds.length}`);
  console.log(`Index: ${indexCount}  Noindex (thin, needs review): ${noindexCount}`);
  console.log(`Avg words: ${avgWords}`);
  console.log(`Missing content files: ${missing.length}`, missing.slice(0, 20));
  console.log(`Errors: ${errors.length}`);
  for (const e of errors.slice(0, 30)) console.log(`  ! ${e.pageId}: ${e.error}`);
  // noindex/thin detail
  const thin = report.filter((r) => r.index === "noindex");
  if (thin.length) {
    console.log(`\nNoindex (needs review):`);
    for (const r of thin.slice(0, 40)) console.log(`  ~ ${r.url} words=${r.words} localDepth=${r.localDepth} dup=${r.dup}`);
  }
  writeFileSync(path.join(TMP, "merge-report.json"), JSON.stringify(report, null, 2));
  console.log(`\nFull per-page report: tmp/batch1/merge-report.json`);
}

main().catch((e) => {
  console.error("MERGE ERROR:", e);
  process.exit(1);
});
