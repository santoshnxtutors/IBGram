/**
 * Gate for Indian city landing pages.
 *
 *   npx tsx scripts/india-cities/check.ts <slug> [<slug>...]   check pages, exit 1 on any failure
 *   npx tsx scripts/india-cities/check.ts --all                 check every planned page that exists
 *   npx tsx scripts/india-cities/check.ts --write-registry      rebuild cities/index.ts from passing pages
 */
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { CitySeoPage } from "../../src/lib/india-cities/types";
import { CITY_PLAN, MAX_LINK_RANK } from "./plan";

const DIR = path.resolve("src/lib/india-cities/cities");
/** Existing city-layout pages every new page must also differ from. */
const REFERENCES = ["src/lib/country-seo/countries/gurgaon.ts", "src/lib/country-seo/countries/india.ts"].map((f) => path.resolve(f));
const MIN_WORDS = 4500;
const MAX_OVERLAP = 0.08; // share of a page's 8-word shingles found in any single other page
const SKIP_KEYS = new Set(["slug", "flagCode", "countryCode", "stateCode", "href", "lastUpdated", "wikipedia"]);
const STATIC_HREFS = new Set(["/", "/india/", "/gurgaon/", "/ib-tutors/", "/igcse/", "/programmes/pyp/", "/programmes/myp/", "/programmes/dp/", "/programmes/cp/", "/courses/ib/mathematics/", "/tutors/", "/admissions/test-prep/", "/contact-us/", "/blog/"]);

function strings(value: unknown, key = ""): string[] {
  if (typeof value === "string") return SKIP_KEYS.has(key) ? [] : [value];
  if (Array.isArray(value)) return value.flatMap((v) => strings(v, key));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => strings(v, k));
  return [];
}

const text = (page: unknown) => strings(page).join("\n");
const wordCount = (s: string) => s.split(/\s+/).filter(Boolean).length;

function shingles(s: string): Set<string> {
  const words = s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").split(" ").filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 8 <= words.length; i++) out.add(words.slice(i, i + 8).join(" "));
  return out;
}

async function importPage(file: string): Promise<CitySeoPage | undefined> {
  const mod = (await import(pathToFileURL(file).href)) as Record<string, unknown>;
  return Object.values(mod).find((v) => typeof (v as CitySeoPage)?.slug === "string") as CitySeoPage | undefined;
}

type Corpus = Map<string, { mtime: number; shingles: Set<string> }>;

async function check(slug: string, corpus: Corpus): Promise<string[]> {
  const plan = CITY_PLAN.find((p) => p.slug === slug);
  if (!plan) return [`${slug} is not in scripts/india-cities/plan.ts`];
  const file = path.join(DIR, `${slug}.ts`);
  if (!existsSync(file)) return [`missing cities/${slug}.ts`];
  const page = await importPage(file);
  if (!page || page.slug !== slug) return [`no export with slug "${slug}" in cities/${slug}.ts`];

  const fail: string[] = [];
  const need = (ok: boolean, msg: string) => ok || fail.push(msg);
  const body = text(page);
  const words = wordCount(body);
  const city = page.countryName;

  need(page.flagCode === "in" && page.countryCode === "IN", 'flagCode must be "in" and countryCode "IN"');
  need(page.state === plan.state && page.stateCode === plan.stateCode, `state/stateCode must be ${plan.state} / ${plan.stateCode}`);
  need(Math.abs(page.geo?.latitude - 22) < 16 && Math.abs(page.geo?.longitude - 82) < 16, "geo must be the city's real coordinates");
  need(words >= MIN_WORDS, `${words} words, need ${MIN_WORDS}+`);
  need(page.title.length <= 65 && page.title.includes(city), `title must include "${city}" and be <= 65 chars (is ${page.title.length})`);
  need(page.metaDescription.length >= 120 && page.metaDescription.length <= 160, `metaDescription is ${page.metaDescription.length} chars, need 120-160`);
  need(page.h1.includes(city) && /IB/.test(page.h1) && /IGCSE/.test(page.h1), `h1 must name IB, IGCSE and ${city}`);
  need(page.primaryKeyword.includes(city), `primaryKeyword must include ${city}`);
  need(page.secondaryKeywords.length >= 15, "need 15+ secondaryKeywords (local keywords)");
  need(page.heroStats.length === 4, "need exactly 4 heroStats");
  need(page.heroTrustPoints.length >= 4, "need 4+ heroTrustPoints");
  need(page.programmes.length === 4, "need 4 programmes (PYP, MYP, DP, CP)");
  need(page.subjects.length >= 12, "need 12+ IB subjects");
  need((page.igcseSubjects?.length ?? 0) >= 8 && Boolean(page.igcseSubjectsIntro), "need 8+ igcseSubjects and igcseSubjectsIntro");
  need(page.regions.length >= 8, "need 8+ regions (localities)");
  need(page.schoolClusters.length >= 3, "need 3+ schoolClusters");
  need(page.modes.length === 3, "need 3 modes");
  need(page.sections.length >= 7, "need 7+ sections");
  need(page.process.length === 5, "need 5 process steps");
  need(page.whyPoints.length === 6, "need 6 whyPoints");
  need(page.faqs.length >= 15, "need 15+ faqs");
  need(page.internalLinks.length >= 8, "need 8+ internalLinks");
  need(Array.isArray(page.stripSchools), "stripSchools must be an array (may be empty)");
  need(Boolean(page.regionsTitle && page.tutorsIntro), "regionsTitle and tutorsIntro are required");
  need(!/\.\s*$/.test(page.schedulingNote), "schedulingNote must not end with a period");
  const questions = page.sections.filter((s) => s.heading.trim().endsWith("?")).length;
  need(questions >= 3, `need 3+ question headings, found ${questions}`);

  const tables = page.sections.filter((s) => s.table);
  need(tables.length >= 3, `need 3+ sections with a table, found ${tables.length}`);
  for (const s of tables) {
    const t = s.table!;
    need(t.rows.length >= 3 && t.rows.every((r) => r.length === t.columns.length), `table in "${s.heading}" needs 3+ rows, each with ${t.columns.length} cells`);
  }
  need(new Set(page.faqs.map((f) => f.question)).size === page.faqs.length, "duplicate FAQ question");
  need(new Set(page.sections.map((s) => s.heading)).size === page.sections.length, "duplicate section heading");

  const emails = body.match(/[\w.+-]+@[\w-]+\.\w+/g) ?? [];
  need(emails.every((e) => e === "ibgram24@gmail.com"), `wrong email: ${emails.join(", ")}`);
  const phones = body.match(/\+\d[\d ]{8,}\d/g) ?? [];
  need(phones.every((p) => p === "+91 7439 368 115"), `wrong phone: ${phones.join(", ")}`);
  const banned = body.match(/#1\b|number[- ]one|rank(?:s|ed)? (?:first|top)|100% (?:pass|success|guarantee)|guaranteed (?:grades?|results?|admission|scores?)|\bbest\b[^.]{0,20}\btutors?\b/gi);
  need(!banned, `ranking/guarantee claim: ${banned?.join(" | ")}`);
  need(!/—/.test(body), "no em dashes");

  const allowed = new Set([...STATIC_HREFS, ...plan.existingPaths]);
  for (const link of page.internalLinks) {
    const target = CITY_PLAN.find((p) => `/${p.slug}/` === link.href);
    need(allowed.has(link.href) || (target !== undefined && target.slug !== slug && target.rank <= MAX_LINK_RANK), `internal href not allowed: ${link.href}`);
  }
  for (const p of plan.existingPaths) need(page.internalLinks.some((l) => l.href === p), `must link existing page ${p}`);

  // Overlap is the newer page's fault: an older page never fails because a later one copied it.
  const mine = shingles(body);
  const myTime = corpus.get(slug)?.mtime ?? Infinity;
  for (const [other, { mtime, shingles: theirs }] of corpus) {
    if (other === slug || mtime > myTime) continue;
    let shared = 0;
    for (const s of mine) if (theirs.has(s)) shared++;
    const ratio = shared / Math.max(mine.size, 1);
    need(ratio <= MAX_OVERLAP, `${(ratio * 100).toFixed(1)}% of 8-word phrases also appear in ${other} (max ${MAX_OVERLAP * 100}%)`);
  }

  // In-person wording outside Delhi NCR must be a negation or an online/NCR-only note.
  if (!plan.homeTuition) {
    for (const sentence of body.split(/(?<=[.!?])\s+/)) {
      if (/\b(in-person|in person|at your home|visits? your home|travel to your)\b/i.test(sentence) && !/\b(not|no|never|only|online|Gurgaon|Gurugram|Delhi NCR)\b/i.test(sentence)) {
        fail.push(`in-person claim outside Delhi NCR: "${sentence.slice(0, 140)}"`);
      }
    }
  }
  if (!fail.length) console.log(`  ok   ${slug}: ${words} words, ${page.sections.length} sections, ${page.faqs.length} faqs, ${tables.length} tables`);
  return fail;
}

async function buildCorpus(): Promise<Corpus> {
  const map: Corpus = new Map();
  const files = [...REFERENCES, ...readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => path.join(DIR, f))];
  for (const file of files) {
    try {
      const page = await importPage(file);
      // References count as oldest so they are never blamed.
      const ref = REFERENCES.includes(file);
      if (page) map.set(ref ? `ref:${page.slug}` : page.slug, { mtime: ref ? 0 : statSync(file).mtimeMs, shingles: shingles(text(page)) });
    } catch (error) {
      console.warn(`  warn: could not import ${path.basename(file)}: ${(error as Error).message}`);
    }
  }
  return map;
}

async function main() {
  const args = process.argv.slice(2);
  const writeRegistry = args.includes("--write-registry");
  const slugs = args.includes("--all") || writeRegistry
    ? CITY_PLAN.map((p) => p.slug).filter((s) => existsSync(path.join(DIR, `${s}.ts`)))
    : args.filter((a) => !a.startsWith("--"));
  if (!slugs.length) throw new Error("usage: check.ts <slug>... | --all | --write-registry");

  const corpus = await buildCorpus();
  const passing: string[] = [];
  let failed = 0;
  for (const slug of slugs) {
    const fail = await check(slug, corpus).catch((error: Error) => [`crashed: ${error.message}`]);
    if (fail.length) {
      failed++;
      console.log(`  FAIL ${slug}\n${fail.map((f) => `       - ${f}`).join("\n")}`);
    } else passing.push(slug);
  }
  console.log(`${passing.length}/${slugs.length} passing`);

  if (writeRegistry) {
    const rows = CITY_PLAN.filter((p) => passing.includes(p.slug));
    const source = [
      'import type { CitySeoPage } from "../types";',
      ...rows.map((p) => `import { ${p.exportName} } from "./${p.slug}";`),
      "",
      "/** Registry of every published city page, in population order. Generated by scripts/india-cities/check.ts --write-registry. */",
      `export const citySeoPages: CitySeoPage[] = [${rows.map((p) => p.exportName).join(", ")}];`,
      "",
    ].join("\n");
    writeFileSync(path.join(DIR, "index.ts"), source);
    console.log(`registry: ${rows.length} cities`);
  } else if (failed) process.exit(1);
}

main();
