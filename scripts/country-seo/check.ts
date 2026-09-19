/**
 * Gate for country landing page modules.
 *
 *   npx tsx scripts/country-seo/check.ts <slug> [<slug>...]   check pages, exit 1 on any failure
 *   npx tsx scripts/country-seo/check.ts --all                 check every planned page that exists
 *   npx tsx scripts/country-seo/check.ts --write-registry      rebuild countries/index.ts from passing pages
 */
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { CountrySeoPage } from "../../src/lib/country-seo/types";
import { COUNTRY_PLAN } from "./plan";

const DIR = path.resolve("src/lib/country-seo/countries");
const MIN_WORDS = 4000;
const MAX_OVERLAP = 0.08; // share of a page's 8-word shingles found in any single other page
const SKIP_KEYS = new Set(["slug", "flagCode", "countryCode", "href", "lastUpdated"]);

function strings(value: unknown, key = ""): string[] {
  if (typeof value === "string") return SKIP_KEYS.has(key) ? [] : [value];
  if (Array.isArray(value)) return value.flatMap((v) => strings(v, key));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => strings(v, k));
  return [];
}

const text = (page: CountrySeoPage) => strings(page).join("\n");
const wordCount = (s: string) => s.split(/\s+/).filter(Boolean).length;

function shingles(s: string): Set<string> {
  const words = s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").split(" ").filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 8 <= words.length; i++) out.add(words.slice(i, i + 8).join(" "));
  return out;
}

async function load(slug: string): Promise<CountrySeoPage | undefined> {
  const file = path.join(DIR, `${slug}.ts`);
  if (!existsSync(file)) return undefined;
  const mod = (await import(pathToFileURL(file).href)) as Record<string, unknown>;
  return Object.values(mod).find((v): v is CountrySeoPage => (v as CountrySeoPage)?.slug === slug);
}

async function check(slug: string, others: Map<string, { mtime: number; shingles: Set<string> }>): Promise<string[]> {
  const plan = COUNTRY_PLAN.find((p) => p.slug === slug);
  if (!plan) return [`${slug} is not in scripts/country-seo/plan.ts`];
  const page = await load(slug);
  if (!page) return [`no export with slug "${slug}" in countries/${slug}.ts`];

  const fail: string[] = [];
  const need = (ok: boolean, msg: string) => ok || fail.push(msg);
  const body = text(page);
  const words = wordCount(body);

  need(page.flagCode === plan.flagCode && page.countryCode === plan.countryCode, "flagCode/countryCode must match plan.ts");
  need(existsSync(path.resolve(`public/images/Countryflag/${page.flagCode}.svg`)), "flag svg missing");
  need(words >= MIN_WORDS, `${words} words, need ${MIN_WORDS}+`);
  need(page.title.length <= 65, `title is ${page.title.length} chars, max 65`);
  need(page.metaDescription.length >= 120 && page.metaDescription.length <= 160, `metaDescription is ${page.metaDescription.length} chars, need 120-160`);
  need(page.secondaryKeywords.length >= 10, "need 10+ secondaryKeywords (local keywords)");
  need(page.heroStats.length === 4, "need exactly 4 heroStats");
  need(page.heroTrustPoints.length >= 4, "need 4+ heroTrustPoints");
  need(page.programmes.length === 4, "need 4 programmes (PYP, MYP, DP, CP)");
  need(page.subjects.length >= 12, "need 12+ subjects");
  need(page.regions.length >= 8, "need 8+ regions");
  need(page.schoolClusters.length >= 4, "need 4+ schoolClusters");
  need(page.modes.length === 3, "need 3 modes");
  need(page.sections.length >= 6, "need 6+ sections");
  need(page.process.length === 5, "need 5 process steps");
  need(page.whyPoints.length === 6, "need 6 whyPoints");
  need(page.faqs.length >= 14, "need 14+ faqs");
  need(page.internalLinks.length >= 8, "need 8+ internalLinks");
  need(Boolean(page.regionsTitle && page.tutorsIntro), "regionsTitle and tutorsIntro are required outside the USA");
  need(!/\.\s*$/.test(page.schedulingNote), "schedulingNote must not end with a period");

  const tables = page.sections.filter((s) => s.table);
  need(tables.length >= 2, `need 2+ sections with a table, found ${tables.length}`);
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
  const banned = body.match(/#1\b|number[- ]one|rank(?:s|ed)? (?:first|top)|100% (?:pass|success|guarantee)|guaranteed (?:grades?|results?|admission|scores?)/gi);
  need(!banned, `ranking/guarantee claim: ${banned?.join(" | ")}`);
  for (const link of page.internalLinks) need(/^\/[\w\-/]*\/$/.test(link.href), `bad internal href ${link.href}`);

  // Overlap is the newer page's fault: an older page never fails because a later one copied it.
  const mine = shingles(body);
  const myTime = others.get(slug)?.mtime ?? Infinity;
  for (const [other, { mtime, shingles: theirs }] of others) {
    if (other === slug || mtime > myTime) continue;
    let shared = 0;
    for (const s of mine) if (theirs.has(s)) shared++;
    const ratio = shared / Math.max(mine.size, 1);
    need(ratio <= MAX_OVERLAP, `${(ratio * 100).toFixed(1)}% of 8-word phrases also appear in ${other}.ts (max ${MAX_OVERLAP * 100}%)`);
  }

  // Warnings: in-person wording is allowed only as a negation or an India-only note.
  for (const sentence of body.split(/(?<=[.!?])\s+/)) {
    if (/\b(home tuition|home tutor|in-person|in person|at your home)\b/i.test(sentence) && !/\b(not|no|never|only|India)\b/i.test(sentence)) {
      console.warn(`  warn ${slug}: check in-person wording: "${sentence.slice(0, 140)}"`);
    }
  }
  if (!fail.length) console.log(`  ok   ${slug}: ${words} words, ${page.sections.length} sections, ${page.faqs.length} faqs, ${tables.length} tables`);
  return fail;
}

async function allShingles(): Promise<Map<string, { mtime: number; shingles: Set<string> }>> {
  const map = new Map<string, { mtime: number; shingles: Set<string> }>();
  for (const file of readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
    const slug = file.replace(/\.ts$/, "");
    try {
      const mod = (await import(pathToFileURL(path.join(DIR, file)).href)) as Record<string, unknown>;
      const page = Object.values(mod).find((v) => (v as CountrySeoPage)?.slug) as CountrySeoPage | undefined;
      if (page) map.set(slug, { mtime: statSync(path.join(DIR, file)).mtimeMs, shingles: shingles(text(page)) });
    } catch (error) {
      console.warn(`  warn: could not import ${file}: ${(error as Error).message}`);
    }
  }
  return map;
}

async function main() {
  const args = process.argv.slice(2);
  const writeRegistry = args.includes("--write-registry");
  const slugs = args.includes("--all") || writeRegistry
    ? COUNTRY_PLAN.map((p) => p.slug).filter((s) => existsSync(path.join(DIR, `${s}.ts`)))
    : args.filter((a) => !a.startsWith("--"));
  if (!slugs.length) throw new Error("usage: check.ts <slug>... | --all | --write-registry");

  const others = await allShingles();
  const passing: string[] = [];
  let failed = 0;
  for (const slug of slugs) {
    const fail = await check(slug, others).catch((error: Error) => [`crashed: ${error.message}`]);
    if (fail.length) {
      failed++;
      console.log(`  FAIL ${slug}\n${fail.map((f) => `       - ${f}`).join("\n")}`);
    } else passing.push(slug);
  }
  console.log(`${passing.length}/${slugs.length} passing`);

  if (writeRegistry) {
    const rows = COUNTRY_PLAN.filter((p) => p.slug !== "usa" && passing.includes(p.slug));
    const source = [
      'import type { CountrySeoPage } from "../types";',
      'import { usa } from "./usa";',
      ...rows.map((p) => `import { ${p.exportName} } from "./${p.slug}";`),
      "",
      "/** Registry of every published country landing page, in rollout order. Generated by scripts/country-seo/check.ts --write-registry. */",
      `export const countrySeoPages: CountrySeoPage[] = [${["usa", ...rows.map((p) => p.exportName)].join(", ")}];`,
      "",
    ].join("\n");
    writeFileSync(path.join(DIR, "index.ts"), source);
    console.log(`registry: usa + ${rows.length} countries`);
  } else if (failed) process.exit(1);
}

main();
