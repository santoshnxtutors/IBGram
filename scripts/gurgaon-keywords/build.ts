/**
 * Gates the agent-written Gurgaon keyword pages and publishes the passing ones as
 * GeneratedSeoPage records, the shape the city-page renderer draws.
 *
 * Reads : scripts/gurgaon-keywords/plan.ts, tmp/gurgaon-keywords/agent-out/<slug>.json
 * Writes: src/lib/gurgaon-keywords/pages.json                        (--write only)
 *         tmp/gurgaon-keywords/quality-report.json, retry-keys.txt   (report mode)
 *
 * Run: npx tsx scripts/gurgaon-keywords/build.ts                  report on every written page
 *      npx tsx scripts/gurgaon-keywords/build.ts --check <slug>   gate one page (writers use this)
 *      npx tsx scripts/gurgaon-keywords/build.ts --write          publish every passing page
 */
import { existsSync, readdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { BANNED, findClaims, similarity, sketch } from "../gurgaon-500/compile";
import { gurgaonSeoContentBySlug } from "../../src/lib/gurgaon-seo/content";
import { gurgaonSeoExpansionContentBySlug } from "../../src/lib/gurgaon-seo/content/expansion";
import { validateGeneratedSeoPage } from "../../src/lib/page-generator/validators";
import type { GeneratedSeoPage } from "../../src/lib/page-generator/types";
import { buildTutorLandingPageSchema } from "../../src/lib/seo/schema";
import { gurgaonIbIgcseSchools } from "../../src/lib/country-seo/countries/gurgaon";
import { CORRIDORS, KEYWORD_PAGES, ROOT, TMP, schoolsFor, type BlockType, type KeywordPage } from "./plan";
import { HUB_PAGES } from "./plan-hub";
import { HUB2_PAGES } from "./plan-hub2";

const SITE = "https://www.ibgram.com";
const AGENT_OUT = path.join(TMP, "agent-out");
const OUT = path.join(ROOT, "src", "lib", "gurgaon-keywords", "pages.json");
// ponytail: one date for the set; switch to per-page dates if pages get rewritten individually.
const LAST_UPDATED = "2026-09-11";
const HUB_LAST_UPDATED = "2026-09-14";
const MIN_WORDS = 4000;
const MAX_SIBLING_SIMILARITY = 0.3;
const MAX_CORPUS_SIMILARITY = 0.4;
const BLOCK_TYPES: BlockType[] = ["matching_process", "programmes", "subjects", "local_areas", "schools", "tutoring_modes", "verification", "intro", "trust", "cta"];

const EXTRA_BANNED = [
  "whether you're", "academic journey", "learning journey", "empower", "unlock", "tailored to your",
  "we understand that", "top-notch", "second to none", "one-stop", "hassle-free", "peace of mind",
];

/** Scale claims findClaims() does not cover. Non-global so .test() carries no lastIndex state. */
const SUPERLATIVES: Array<[RegExp, string]> = [
  [/(number one|no\.\s?1\b|#1\b|top-ranked|top-rated|highest-rated)/i, "superlative claim (number one / top-rated)"],
  [/\b(IB Gram|we)\s+(has|have|offers?|provides?)\s+the\s+best\b/i, "superlative claim (IB Gram has the best)"],
];

interface Block {
  type: string;
  heading: string;
  body: string;
  items: string[];
}
interface Out {
  heroTitle: string;
  heroSubtitle: string;
  introSummary: string;
  contentBlocks: Block[];
  faqs: Array<{ question: string; answer: string }>;
  finalCta: string;
  /** Hub pages only. */
  comparison?: { heading: string; intro: string; columns: string[]; rows: Array<{ label: string; cells: string[] }> };
}

/** The 40 root-level pages (plan.ts) plus both waves of /gurgaon/ hub pages. */
const PAGES = [...KEYWORD_PAGES, ...HUB_PAGES, ...HUB2_PAGES];
const bySlug = new Map(PAGES.map((e) => [e.slug, e]));
const words = (text: string) => text.split(/\s+/).filter(Boolean).length;
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Text that counts toward length: headings and FAQ questions excluded. */
function bodyText(o: Out): string {
  return [o.heroSubtitle, o.introSummary, ...o.contentBlocks.flatMap((b) => [b.body, ...(b.items ?? [])]), ...o.faqs.map((f) => f.answer), o.finalCta].join("\n");
}

function allText(o: Out): string {
  const c = o.comparison;
  const table = c ? [c.heading, c.intro, ...(c.rows ?? []).flatMap((r) => [r.label, ...(r.cells ?? [])])] : [];
  return [o.heroTitle, bodyText(o), ...o.contentBlocks.map((b) => b.heading), ...o.faqs.map((f) => f.question), ...table].join("\n");
}

/** "ib tutor near me gurgaon" also matches "IB tutors near me in Gurgaon". */
function keywordRe(keyword: string, flags = "gi"): RegExp {
  const tokens = keyword.toLowerCase().split(/\s+/).map((t) => `${escapeRe(t)}s?`);
  // "and" included so an ib-igcse page's keyword matches its natural form, "IB and IGCSE tutor in Gurgaon".
  return new RegExp(`\\b${tokens.join("\\W+(?:(?:in|for|at|the|and)\\W+)?")}\\b`, flags);
}

function check(e: KeywordPage, o: Out): string[] {
  const problems: string[] = [];
  for (const key of ["heroTitle", "heroSubtitle", "introSummary", "finalCta"] as const) {
    if (typeof o[key] !== "string" || !o[key].trim()) problems.push(`missing ${key}`);
  }
  if (!Array.isArray(o.contentBlocks) || !Array.isArray(o.faqs) || problems.length) return [...problems, "contentBlocks and faqs must be arrays and all string fields present"];

  const got = o.contentBlocks.map((b) => b.type);
  if ([...got].sort().join() !== [...BLOCK_TYPES].sort().join()) problems.push(`contentBlocks must be exactly one of each type: ${BLOCK_TYPES.join(", ")} (got ${got.join(", ")})`);
  for (const b of o.contentBlocks) {
    if (!b.heading?.trim()) problems.push(`block ${b.type} has no heading`);
    const w = words(b.body ?? "");
    if (w < 240) problems.push(`block ${b.type} body is ${w} words, needs 240+`);
    if (!Array.isArray(b.items) || b.items.length < 4 || b.items.length > 6) problems.push(`block ${b.type} needs 4-6 items`);
  }
  if (o.faqs.length < 10 || o.faqs.length > 12) problems.push(`${o.faqs.length} faqs, needs 10-12`);
  for (const f of o.faqs) if (words(f.answer ?? "") < 60) problems.push(`faq answer under 60 words: "${f.question}"`);

  const body = bodyText(o);
  const all = allText(o);
  const lower = all.toLowerCase();
  const wc = words(body);
  if (wc < MIN_WORDS) problems.push(`${wc} words, needs ${MIN_WORDS}+ (headings and FAQ questions not counted)`);

  for (const phrase of [...BANNED, ...EXTRA_BANNED]) if (lower.includes(phrase)) problems.push(`banned phrase: "${phrase}"`);
  problems.push(...findClaims(all));
  for (const [re, label] of SUPERLATIVES) if (re.test(all)) problems.push(`${label}: "${all.match(re)?.[0]}"`);
  if (!/\bnot (officially )?affiliated with\b/i.test(all)) problems.push('missing the independence sentence containing "not affiliated with"');
  const dashes = (all.match(/—/g) ?? []).length;
  if (dashes > 8) problems.push(`${dashes} em dashes, max 8`);

  const introHead = o.introSummary.split(/\s+/).slice(0, 60).join(" ");
  if (!keywordRe(e.keyword, "i").test(introHead)) problems.push(`primary keyword "${e.keyword}" missing from the first 60 words of introSummary`);
  const kwCount = (body.match(keywordRe(e.keyword)) ?? []).length;
  if (kwCount < 4) problems.push(`primary keyword appears ${kwCount} times in body text, needs 4+`);
  if (kwCount > 14) problems.push(`primary keyword appears ${kwCount} times, max 14`);

  const headings = o.contentBlocks.map((b) => b.heading ?? "");
  const kwHeadings = headings.filter((h) => keywordRe(e.keyword, "i").test(h)).length;
  if (kwHeadings > 3) problems.push(`primary keyword in ${kwHeadings} H2s, max 3`);
  const placeHeadings = headings.filter((h) => /gurgaon|gurugram/i.test(h)).length;
  if (placeHeadings < 4) problems.push(`Gurgaon or Gurugram in ${placeHeadings} H2s, needs 4+`);
  const questionHeadings = headings.filter((h) => h.trim().endsWith("?")).length;
  if (questionHeadings < 3) problems.push(`${questionHeadings} question-phrased H2s, needs 3+`);

  // Every page leads with home tuition, whatever its keyword (user requirement, 2026-09-11).
  const homeRe = /\bhome[ -](tutors?|tutoring|tuitions?|classes|lessons|sessions)\b/gi;
  const homeHits = (body.match(homeRe) ?? []).length;
  if (homeHits < 8) problems.push(`home tuition intent: "home tutor/home tuition/home classes" appear ${homeHits} times in body text, needs 8+`);
  if (!new RegExp(homeRe.source, "i").test(introHead)) problems.push("home tuition intent: the first 60 words of introSummary must mention home tutoring or home tuition");
  const homeHeadings = headings.filter((h) => /\bhome\b/i.test(h)).length;
  if (homeHeadings < 2) problems.push(`home tuition intent: "home" appears in ${homeHeadings} H2s, needs 2+`);
  const homeFaqs = o.faqs.filter((f) => /\bhome\b/i.test(f.question ?? "")).length;
  if (homeFaqs < 2) problems.push(`home tuition intent: ${homeFaqs} FAQ questions about home tuition, needs 2+`);
  if (new Set(headings.map((h) => h.toLowerCase().trim())).size !== headings.length) problems.push("duplicate H2 headings");
  const gurgaon = (all.match(/\bgurgaon\b/gi) ?? []).length;
  if (gurgaon < 10) problems.push(`"Gurgaon" appears ${gurgaon} times, needs 10+`);
  if (!/\bGurugram\b/.test(all) || !/\bHaryana\b/.test(all)) problems.push("must name Gurugram and Haryana at least once each");

  const numbered = o.contentBlocks.some(
    (b) => (b.items ?? []).filter((i) => /^\s*(\d+[.)]|step \d+)/i.test(i)).length >= 3 || /(^|\n)\s*1[.)]\s[\s\S]*\n\s*2[.)]\s[\s\S]*\n\s*3[.)]\s/.test(b.body ?? ""),
  );
  if (!numbered) problems.push("needs one numbered process: 3+ items starting 1. 2. 3., or a 1./2./3. list on separate lines in a body");

  const named = (n: string) => new RegExp(`\\b${escapeRe(n)}\\b`, "i").test(all);
  const missing = e.corridors.filter((k) => ![CORRIDORS[k].name.replace(/\s*\(.*\)/, ""), ...CORRIDORS[k].areas].some(named));
  if (missing.length) problems.push(`corridors not covered: ${missing.map((k) => CORRIDORS[k].name).join("; ")}`);
  if (e.hub) problems.push(...checkComparison(e, o));
  return problems;
}

/** The hub pages' comparison table: fixed columns from the plan, 7-10 rows of short cells. */
function checkComparison(e: KeywordPage, o: Out): string[] {
  const c = o.comparison;
  if (!c || !Array.isArray(c.columns) || !Array.isArray(c.rows)) return ["missing comparison {heading, intro, columns, rows}"];
  const problems: string[] = [];
  if (c.columns.join("|") !== (e.comparison ?? []).join("|")) problems.push(`comparison.columns must be exactly ${JSON.stringify(e.comparison)}`);
  if (!/gurgaon|gurugram/i.test(c.heading ?? "")) problems.push("comparison.heading must name Gurgaon");
  const introWords = words(c.intro ?? "");
  if (introWords < 40 || introWords > 100) problems.push(`comparison.intro is ${introWords} words, needs 40-100`);
  if (c.rows.length < 7 || c.rows.length > 10) problems.push(`comparison has ${c.rows.length} rows, needs 7-10`);
  for (const r of c.rows) {
    if (!r.label?.trim() || !Array.isArray(r.cells) || r.cells.length !== c.columns.length) {
      problems.push(`comparison row "${r.label}" needs a label and ${c.columns.length} cells`);
      continue;
    }
    for (const cell of r.cells) {
      const w = words(cell ?? "");
      if (w < 3 || w > 30) problems.push(`comparison cell in "${r.label}" is ${w} words, needs 3-30`);
    }
  }
  return problems;
}

/**
 * Every other Gurugram page on the site, so a keyword page cannot echo one of them.
 *
 * Parsing the ~60MB of shards takes ~2GB per run, and up to ten writers run the gate at once,
 * which starved the dev server. The corpus does not change during a writing run, so it is
 * sketched once and cached.
 */
function corpusSketches(): Array<[string, number[]]> {
  // ponytail: never invalidated; delete tmp/gurgaon-keywords/corpus-sketches.json after other Gurgaon pages change.
  const cache = path.join(TMP, "corpus-sketches.json");
  if (existsSync(cache)) return JSON.parse(readFileSync(cache, "utf8"));
  const out: Array<[string, number[]]> = [];
  for (const [slug, c] of Object.entries({ ...gurgaonSeoContentBySlug, ...gurgaonSeoExpansionContentBySlug })) {
    const text = [c.heroIntro, ...c.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]), ...c.faqs.flatMap((f) => [f.question, f.answer]), c.closingCta].join("\n");
    out.push([`/${slug}/`, sketch(text)]);
  }
  const shards = path.join(ROOT, "src", "lib", "generated-pages", "pages");
  for (const file of readdirSync(shards).filter((f) => f.endsWith(".json"))) {
    for (const pg of JSON.parse(readFileSync(path.join(shards, file), "utf8")) as GeneratedSeoPage[]) {
      if (pg.citySlug !== "gurugram") continue;
      const text = [pg.heroSubtitle, pg.introSummary, ...pg.contentBlocks.flatMap((b) => [b.heading, b.body, ...b.items]), ...pg.faqs.flatMap((f) => [f.question, f.answer]), pg.finalCta].join("\n");
      out.push([pg.canonicalUrl.replace(SITE, ""), sketch(text)]);
    }
  }
  // Write-then-rename, so a writer whose gate runs concurrently never reads a half-written cache.
  const tmpFile = `${cache}.${process.pid}.tmp`;
  writeFileSync(tmpFile, JSON.stringify(out));
  renameSync(tmpFile, cache);
  return out;
}

const pageIdFor = (slug: string) => `IBG_GURGAON_KEYWORD_${slug.toUpperCase().replace(/-/g, "_")}`;
const labelFor = (e: KeywordPage) => e.title.split(" | ")[0];

function toPage(e: KeywordPage, o: Out, uniquenessScore: number): GeneratedSeoPage {
  const canonicalUrl = e.hub ? `${SITE}/gurgaon/${e.slug}/` : `${SITE}/${e.slug}/`;
  const lastUpdated = e.hub ? HUB_LAST_UPDATED : LAST_UPDATED;
  const label = labelFor(e);
  const corridorNames = e.corridors.map((k) => CORRIDORS[k].name);
  const nearbyAreas = e.corridors.flatMap((k) => CORRIDORS[k].areas.slice(0, 3));
  const faqs = o.faqs.map((f) => ({ question: f.question.trim(), answer: f.answer.trim() }));

  return validateGeneratedSeoPage({
    pageId: pageIdFor(e.slug),
    pageType: e.pageType,
    status: "published",
    indexFlag: "index",
    canonicalUrl,
    slug: e.slug,
    cityName: "Gurgaon",
    citySlug: "gurugram",
    primaryKeyword: e.keyword,
    secondaryKeywords: e.secondary,
    serviceFocus: e.focus,
    programmes: e.programmes,
    subjects: e.subjects,
    tutoringModes: ["home", "online", "hybrid"],
    premiumAreas: corridorNames,
    nearbyAreas,
    nearbyCities: ["Delhi", "Faridabad", "Noida"],
    schoolsMentioned: e.hub ? [...gurgaonIbIgcseSchools] : schoolsFor(e.board),
    metaTitle: e.title,
    metaDescription: e.description,
    ogTitle: e.title,
    ogDescription: e.description,
    ogImage: "/images/ib-gram-city-og.svg",
    twitterTitle: e.title,
    twitterDescription: e.description,
    breadcrumbTitle: label,
    h1: e.h1,
    heroTitle: o.heroTitle,
    heroSubtitle: o.heroSubtitle,
    introSummary: o.introSummary,
    contentBlocks: o.contentBlocks.map((b) => ({ type: b.type, heading: b.heading.trim(), body: b.body.trim(), items: b.items.map((item) => item.trim()) })),
    faqs,
    // No "Related IB Gram pages" section on these pages, at the user's request.
    internalLinks: [],
    relatedPageSuggestions: [],
    comparison: e.hub ? o.comparison : undefined,
    // Root pages: Home > page. Hub pages: Home > Gurgaon > page.
    schema: buildTutorLandingPageSchema({
      canonicalUrl,
      title: e.title,
      description: e.description,
      breadcrumbItems: [{ name: "Home", url: `${SITE}/` }, ...(e.hub ? [{ name: "Gurgaon", url: `${SITE}/gurgaon/` }] : []), { name: label, url: canonicalUrl }],
      serviceName: label,
      serviceType: `${e.board} tutoring`,
      areaServed: ["Gurugram", ...corridorNames, ...nearbyAreas],
      subjects: e.subjects,
      educationalLevel: e.level,
      faqs,
      dateModified: lastUpdated,
    }) as unknown as Record<string, unknown>,
    quality: {
      wordCount: words(bodyText(o)),
      uniquenessScore,
      localDepthScore: Math.min(96, 60 + e.corridors.length * 4),
      seoScore: 92,
      readabilityScore: 84,
      internalLinkScore: 55,
      duplicateRisk: "low",
      recommendedIndexFlag: "index",
      warnings: [],
    },
    finalCta: o.finalCta,
    schoolDisclaimer: "IB Gram is an independent tutoring platform and is not officially affiliated with any school named on this page, the International Baccalaureate, Cambridge International Education or Pearson Edexcel.",
    lastUpdated,
  });
}

function main(): void {
  const args = process.argv.slice(2);
  const write = args.includes("--write");
  const checkSlugs = args.includes("--check") ? args.slice(args.indexOf("--check") + 1).filter((a) => !a.startsWith("--")) : null;

  const written = new Map<string, Out>();
  const issues = new Map<string, string[]>();
  const add = (slug: string, problem: string) => issues.set(slug, [...(issues.get(slug) ?? []), problem]);

  for (const e of PAGES) {
    const file = path.join(AGENT_OUT, `${e.slug}.json`);
    if (!existsSync(file)) continue;
    try {
      written.set(e.slug, JSON.parse(readFileSync(file, "utf8")));
    } catch (err) {
      add(e.slug, `unparseable JSON: ${(err as Error).message}`);
    }
  }

  const targets = checkSlugs ?? PAGES.map((e) => e.slug).filter((s) => written.has(s) || issues.has(s));
  for (const slug of targets) {
    const e = bySlug.get(slug);
    if (!e) {
      add(slug, "not in plan.ts");
      continue;
    }
    const o = written.get(slug);
    if (!o) {
      if (!issues.has(slug)) add(slug, `no file at tmp/gurgaon-keywords/agent-out/${slug}.json`);
      continue;
    }
    for (const problem of check(e, o)) add(slug, problem);
  }

  // Duplication: against the other keyword pages and every other Gurugram page on the site.
  const corpus = corpusSketches();
  const sketches = new Map([...written].map(([slug, o]) => [slug, sketch(allText(o))]));
  const headingOwners = new Map<string, string>();
  for (const [slug, o] of written) for (const b of o.contentBlocks ?? []) headingOwners.set(`${slug}|${(b.heading ?? "").toLowerCase().trim()}`, slug);
  const worst = new Map<string, number>();
  for (const slug of targets) {
    const own = sketches.get(slug);
    const o = written.get(slug);
    if (!own || !o) continue;
    let max = 0;
    for (const [other, sk] of sketches) {
      if (other === slug) continue;
      const s = similarity(own, sk);
      max = Math.max(max, s);
      if (s > MAX_SIBLING_SIMILARITY) add(slug, `too similar to /${other}/ (${Math.round(s * 100)}%): rewrite with different framing and examples`);
    }
    for (const [name, sk] of corpus) {
      const s = similarity(own, sk);
      max = Math.max(max, s);
      if (s > MAX_CORPUS_SIMILARITY) add(slug, `too similar to ${name} (${Math.round(s * 100)}%)`);
    }
    worst.set(slug, max);
    for (const b of o.contentBlocks ?? []) {
      const h = (b.heading ?? "").toLowerCase().trim();
      for (const other of written.keys()) {
        if (other !== slug && headingOwners.has(`${other}|${h}`)) add(slug, `H2 "${b.heading}" is identical to one on /${other}/`);
      }
    }
  }

  if (checkSlugs) {
    for (const slug of checkSlugs) {
      const problems = issues.get(slug) ?? [];
      const o = written.get(slug);
      if (!problems.length) console.log(`PASS ${slug} (${o ? words(bodyText(o)) : 0} words)`);
      else console.log(`FAIL ${slug}\n${problems.map((p) => `  - ${p}`).join("\n")}`);
    }
    process.exitCode = checkSlugs.some((s) => issues.get(s)?.length) ? 1 : 0;
    return;
  }

  const passing = targets.filter((s) => written.has(s) && !issues.get(s)?.length);
  const pending = PAGES.map((e) => e.slug).filter((s) => !passing.includes(s));
  const counts = passing.map((s) => words(bodyText(written.get(s) as Out)));
  writeFileSync(
    path.join(TMP, "quality-report.json"),
    JSON.stringify({ total: PAGES.length, written: written.size, passing: passing.length, issues: Object.fromEntries(issues) }, null, 1),
  );
  writeFileSync(path.join(TMP, "retry-keys.txt"), `${pending.join("\n")}\n`);
  console.log(`plan ${PAGES.length} | written ${written.size} | passing ${passing.length} | not passing ${pending.length}`);
  if (counts.length) console.log(`words: min ${Math.min(...counts)} avg ${Math.round(counts.reduce((a, b) => a + b, 0) / counts.length)} max ${Math.max(...counts)}`);
  for (const [slug, problems] of issues) console.log(`  ${slug}: ${problems.slice(0, 4).join("; ")}`);

  if (!write) {
    console.log("(report only; pass --write to publish passing pages)");
    return;
  }

  // A page already live that fails today keeps its live version until its rewrite passes.
  const existing: GeneratedSeoPage[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
  const pages = PAGES.flatMap((e) =>
    passing.includes(e.slug)
      ? [toPage(e, written.get(e.slug) as Out, Math.round((1 - (worst.get(e.slug) ?? 0)) * 100))]
      : existing.filter((pg) => pg.slug === e.slug),
  );
  writeFileSync(OUT, `${JSON.stringify(pages, null, 1)}\n`);
  console.log(`published ${pages.length} pages -> ${path.relative(ROOT, OUT)}`);
}

main();
