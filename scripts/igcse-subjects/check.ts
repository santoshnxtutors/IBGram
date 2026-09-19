/**
 * Quality gate for IGCSE subject hub pages.
 *
 *   npx tsx scripts/igcse-subjects/check.ts              # every written subject
 *   npx tsx scripts/igcse-subjects/check.ts physics      # one subject
 *
 * Fails on anything that would ship a thin, duplicated or non-indexable page.
 * The cross-page phrase overlap check is the important one: 53 pages about one
 * curriculum are trivially easy to write as 53 rewordings of each other, and
 * that is exactly what gets them filtered out of the index.
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { igcseSubjectCatalog, getIgcseSubjectCatalogEntry } from "../../src/lib/igcse-subjects/catalog";
import { igcseSubjectToGeneratedPage } from "../../src/lib/igcse-subjects/to-generated-page";
import type { IgcseSubjectContent } from "../../src/lib/igcse-subjects/types";

const SUBJECTS_DIR = path.join(process.cwd(), "src", "lib", "igcse-subjects", "subjects");

const MIN_WORDS = 4000;
const MIN_BLOCKS = 10;
const MIN_FAQS = 14;
const MIN_KEYWORDS = 12;
const MIN_COMPARISON_ROWS = 4;
const MAX_TITLE = 65;
const MAX_OVERLAP_PCT = 8;

const UNIQUE_BLOCK_TYPES = [
  "programmes",
  "subjects",
  "local_areas",
  "schools",
  "verification",
  "matching_process",
  "tutoring_modes",
];

/** Claims this site must never make, checked as plain substrings. */
const BANNED = [
  "guaranteed grade",
  "guarantee a grade",
  "guaranteed results",
  "guaranteed admission",
  "we are the best",
  "best tutors in the world",
  "#1 ",
  "no. 1 ",
  "number one tutoring",
  "100% success",
  "official cambridge partner",
  "officially affiliated with cambridge",
  "in partnership with pearson",
  "endorsed by cambridge",
];

type Issue = { slug: string; message: string };

function words(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function pageText(content: IgcseSubjectContent): string {
  return [
    content.heroSubtitle,
    content.introSummary,
    ...content.blocks.flatMap((block) => [block.heading, block.body, ...block.items]),
    content.comparison.heading,
    content.comparison.intro,
    ...content.comparison.rows.flatMap((row) => [row.label, ...row.cells]),
    ...content.faqs.flatMap((faq) => [faq.question, faq.answer]),
    content.finalCta,
  ].join(" ");
}

/** Normalised 8-word shingles, used for the cross-page duplication check. */
function shingles(text: string): Set<string> {
  const tokens = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 8 <= tokens.length; i += 1) out.add(tokens.slice(i, i + 8).join(" "));
  return out;
}

async function loadContent(slug: string): Promise<IgcseSubjectContent> {
  const moduleUrl = new URL(`../../src/lib/igcse-subjects/subjects/${slug}.ts`, import.meta.url).href;
  const mod = (await import(moduleUrl)) as Record<string, unknown>;
  const exportName = slug.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
  const content = mod[exportName] as IgcseSubjectContent | undefined;
  if (!content) throw new Error(`${slug}.ts must export "${exportName}"`);
  return content;
}

function checkOne(content: IgcseSubjectContent, raw: string): string[] {
  const issues: string[] = [];
  const entry = getIgcseSubjectCatalogEntry(content.slug);
  if (!entry) return [`slug "${content.slug}" is not in the catalog`];

  const text = pageText(content);
  const total = words(text);
  if (total < MIN_WORDS) issues.push(`only ${total} words, needs ${MIN_WORDS}+`);

  if (content.blocks.length < MIN_BLOCKS) issues.push(`only ${content.blocks.length} blocks, needs ${MIN_BLOCKS}+`);
  if (content.faqs.length < MIN_FAQS) issues.push(`only ${content.faqs.length} FAQs, needs ${MIN_FAQS}+`);
  if (content.secondaryKeywords.length < MIN_KEYWORDS) {
    issues.push(`only ${content.secondaryKeywords.length} secondary keywords, needs ${MIN_KEYWORDS}+`);
  }

  // Claimed block types render via .find(), so a duplicate silently vanishes.
  const seen = new Map<string, number>();
  content.blocks.forEach((block) => seen.set(block.type, (seen.get(block.type) ?? 0) + 1));
  UNIQUE_BLOCK_TYPES.forEach((type) => {
    const count = seen.get(type) ?? 0;
    if (count > 1) issues.push(`block type "${type}" appears ${count} times but only the first renders`);
  });
  UNIQUE_BLOCK_TYPES.forEach((type) => {
    if (!seen.has(type)) issues.push(`missing block type "${type}"`);
  });

  content.blocks.forEach((block) => {
    if (words(block.body) < 150) issues.push(`block "${block.heading}" body is ${words(block.body)} words, needs 150+`);
    if (block.items.length < 4) issues.push(`block "${block.heading}" has ${block.items.length} items, needs 4+`);
    if (!block.heading.trim()) issues.push("a block is missing its heading");
    // The renderer keys each item by its own text, so a repeated item inside one
    // block is a duplicate React key and breaks the whole page at render time
    // while passing every other check here.
    const dupItems = block.items.filter((item, i) => block.items.indexOf(item) !== i);
    if (dupItems.length) issues.push(`block "${block.heading}" repeats an item verbatim: "${dupItems[0].slice(0, 50)}..."`);
  });

  // GeneratedRemainingBlocks keys on `${type}-${heading}`, GeneratedFAQ on the
  // question, GeneratedComparison on the row label. Collisions render as a blank
  // or broken page, so they are failures, not warnings.
  const remaining = content.blocks.filter((block) => !UNIQUE_BLOCK_TYPES.includes(block.type));
  const blockKeys = remaining.map((block) => `${block.type}-${block.heading}`);
  const dupBlockKeys = blockKeys.filter((key, i) => blockKeys.indexOf(key) !== i);
  if (dupBlockKeys.length) issues.push(`two "${dupBlockKeys[0].split("-")[0]}" blocks share the heading "${dupBlockKeys[0].split("-").slice(1).join("-")}" — duplicate render key`);

  const questions = content.faqs.map((faq) => faq.question);
  const dupQuestions = questions.filter((q, i) => questions.indexOf(q) !== i);
  if (dupQuestions.length) issues.push(`duplicate FAQ question: "${dupQuestions[0].slice(0, 60)}"`);

  const rowLabels = content.comparison.rows.map((row) => row.label);
  const dupRows = rowLabels.filter((label, i) => rowLabels.indexOf(label) !== i);
  if (dupRows.length) issues.push(`duplicate comparison row label: "${dupRows[0]}"`);

  content.faqs.forEach((faq) => {
    const n = words(faq.answer);
    if (n < 55) issues.push(`FAQ "${faq.question.slice(0, 48)}..." answer is ${n} words, needs 55+`);
    if (!faq.question.trim().endsWith("?")) issues.push(`FAQ "${faq.question.slice(0, 48)}..." is not a question`);
  });

  if (content.comparison.rows.length < MIN_COMPARISON_ROWS) {
    issues.push(`comparison table has ${content.comparison.rows.length} rows, needs ${MIN_COMPARISON_ROWS}+`);
  }
  content.comparison.rows.forEach((row) => {
    if (row.cells.length !== content.comparison.columns.length) {
      issues.push(`comparison row "${row.label}" has ${row.cells.length} cells but ${content.comparison.columns.length} columns`);
    }
  });

  if (content.metaTitle.length > MAX_TITLE) issues.push(`metaTitle is ${content.metaTitle.length} chars, max ${MAX_TITLE}`);
  const descLen = content.metaDescription.length;
  if (descLen < 120 || descLen > 175) issues.push(`metaDescription is ${descLen} chars, needs 120-175`);

  // The subject name has to appear where search engines weight it.
  const needle = entry.shortLabel.toLowerCase();
  (["metaTitle", "metaDescription", "h1", "heroTitle"] as const).forEach((field) => {
    if (!content[field].toLowerCase().includes(needle)) issues.push(`${field} does not mention "${entry.shortLabel}"`);
  });
  if (!content.h1.toLowerCase().includes("igcse")) issues.push("h1 does not mention IGCSE");

  // At least one syllabus code on the page, so it is about a real qualification.
  if (entry.codes.length > 0 && !entry.codes.some((code) => text.includes(code))) {
    issues.push(`no syllabus code from the catalog (${entry.codes.slice(0, 4).join(", ")}) appears on the page`);
  }

  const questionHeadings = content.blocks.filter((block) => block.heading.includes("?")).length;
  const lower = text.toLowerCase();
  BANNED.forEach((phrase) => {
    // A negated occurrence is the correct wording, not a banned claim: pages are
    // required to say things like "nobody can guarantee a grade" and "not
    // affiliated with Cambridge". Look back far enough to catch the negator and
    // any modal between it and the phrase.
    let from = 0;
    for (;;) {
      const at = lower.indexOf(phrase, from);
      if (at === -1) break;
      const before = lower.slice(Math.max(0, at - 40), at);
      if (!/\b(not|never|no|nobody|no one|none|cannot|can't|won't|don't|doesn't|unable to)\b[^.;:!?]*$/.test(before)) {
        issues.push(`banned claim on page: "${phrase.trim()}"`);
        break;
      }
      from = at + phrase.length;
    }
  });

  if (!lower.includes("online")) issues.push("page never mentions online tutoring");
  if (content.lastUpdated !== "2026-09-18") issues.push(`lastUpdated must be "2026-09-18"`);
  if (raw.includes("\r\n")) issues.push("file has CRLF line endings, write it with LF");
  void questionHeadings;

  const generated = igcseSubjectToGeneratedPage(content, entry);
  if (generated.quality.seoScore < 70) issues.push("generated page would be noindex (seoScore < 70)");

  return issues;
}

async function main() {
  const only = process.argv[2];
  const written = readdirSync(SUBJECTS_DIR)
    .filter((file) => file.endsWith(".ts"))
    .map((file) => file.replace(/\.ts$/, ""));
  const targets = only ? written.filter((slug) => slug === only) : written;

  if (only && targets.length === 0) {
    console.error(`No subject file for "${only}" in src/lib/igcse-subjects/subjects/`);
    process.exit(1);
  }

  const issues: Issue[] = [];
  const texts = new Map<string, Set<string>>();

  for (const slug of targets) {
    try {
      const content = await loadContent(slug);
      const raw = readFileSync(path.join(SUBJECTS_DIR, `${slug}.ts`), "utf8");
      checkOne(content, raw).forEach((message) => issues.push({ slug, message }));
      texts.set(slug, shingles(pageText(content)));
    } catch (error) {
      issues.push({ slug, message: (error as Error).message });
    }
  }

  // Compare each checked page against every written page, not just the batch,
  // so a late page cannot quietly duplicate an early one.
  const allWritten = new Map<string, Set<string>>(texts);
  for (const slug of written) {
    if (allWritten.has(slug)) continue;
    try {
      allWritten.set(slug, shingles(pageText(await loadContent(slug))));
    } catch {
      /* already reported if it was a target */
    }
  }

  for (const [slug, own] of texts) {
    if (own.size === 0) continue;
    for (const [otherSlug, other] of allWritten) {
      if (otherSlug === slug) continue;
      let shared = 0;
      own.forEach((phrase) => {
        if (other.has(phrase)) shared += 1;
      });
      const pct = (shared / own.size) * 100;
      if (pct > MAX_OVERLAP_PCT) {
        issues.push({ slug, message: `${pct.toFixed(1)}% of 8-word phrases also appear in ${otherSlug}.ts (max ${MAX_OVERLAP_PCT}%)` });
      }
    }
  }

  const checked = targets.length;
  if (issues.length === 0) {
    for (const slug of targets) {
      const content = await loadContent(slug);
      console.log(`  ${slug.padEnd(30)} ${words(pageText(content))} words, ${content.blocks.length} blocks, ${content.faqs.length} FAQs`);
    }
    console.log(`PASS — ${checked} subject page${checked === 1 ? "" : "s"} checked, ${igcseSubjectCatalog.length - written.length} still unwritten`);
    return;
  }

  const bySlug = new Map<string, string[]>();
  issues.forEach(({ slug, message }) => {
    bySlug.set(slug, [...(bySlug.get(slug) ?? []), message]);
  });
  for (const [slug, messages] of [...bySlug].sort()) {
    console.error(`\nFAIL ${slug}`);
    messages.forEach((message) => console.error(`  - ${message}`));
  }
  console.error(`\n${issues.length} issue(s) across ${bySlug.size} page(s)`);
  process.exit(1);
}

void main();
