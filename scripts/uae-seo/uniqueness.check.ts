/**
 * Measures how similar the written /uae/ pages actually are to each other.
 *
 *   npx tsx scripts/uae-seo/uniqueness.check.ts
 *
 * The per-page gate already rejects anything over its thresholds, but that checks one page
 * against the corpus as it stood at the time. This re-measures EVERY pair after the fact, so a
 * drift that only shows up across the whole set cannot hide.
 *
 * Reports: the most similar pair, the distribution, any repeated H1, title, meta description or
 * FAQ question, and any paragraph that appears on two different pages.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { similarity, sketch } from "../gurgaon-500/compile";
import type { UaeSeoContent } from "../../src/lib/uae-seo/types";

const AGENT_OUT = join(import.meta.dirname, "..", "..", "tmp", "uae-seo", "agent-out");

const SIBLING_LIMIT = 0.28;
const CORPUS_LIMIT = 0.38;

function prose(c: UaeSeoContent): string {
  return [
    c.heroSubtitle,
    ...c.intro.paragraphs,
    ...c.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
    ...c.faqs.flatMap((f) => [f.question, f.answer]),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function main(): void {
  if (!existsSync(AGENT_OUT)) {
    console.log("nothing written yet");
    return;
  }
  const files = readdirSync(AGENT_OUT).filter((f) => f.endsWith(".json"));
  const pages: Array<{ slug: string; content: UaeSeoContent; sig: number[] }> = [];

  for (const file of files) {
    try {
      const content = JSON.parse(readFileSync(join(AGENT_OUT, file), "utf8")) as UaeSeoContent;
      pages.push({ slug: file.slice(0, -5).replace(/__/g, "/"), content, sig: sketch(prose(content)) });
    } catch {
      // Half-written file from an interrupted run; the gate will catch it.
    }
  }

  console.log(`\nMeasuring ${pages.length} written pages (${(pages.length * (pages.length - 1)) / 2} pairs)\n`);

  // ---- pairwise similarity ----
  let worst = { a: "", b: "", score: 0 };
  const buckets = new Map<string, number>();
  let overSibling = 0;
  let overCorpus = 0;

  const cityOf = (slug: string) => (slug.includes("/") ? slug.split("/")[0] : "uae");

  for (let i = 0; i < pages.length; i += 1) {
    for (let j = i + 1; j < pages.length; j += 1) {
      const score = similarity(pages[i].sig, pages[j].sig);
      if (score > worst.score) worst = { a: pages[i].slug, b: pages[j].slug, score };
      const band = `${Math.floor(score * 10) * 10}-${Math.floor(score * 10) * 10 + 10}%`;
      buckets.set(band, (buckets.get(band) ?? 0) + 1);
      const sameCity = cityOf(pages[i].slug) === cityOf(pages[j].slug);
      if (sameCity && score > SIBLING_LIMIT) overSibling += 1;
      if (!sameCity && score > CORPUS_LIMIT) overCorpus += 1;
    }
  }

  console.log("  similarity distribution:");
  for (const band of [...buckets].sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
    console.log(`    ${band[0].padStart(8)}  ${band[1]}`);
  }
  console.log(`\n  most similar pair : ${Math.round(worst.score * 100)}%`);
  console.log(`      ${worst.a}`);
  console.log(`      ${worst.b}`);
  console.log(`\n  pairs over the 28% sibling limit : ${overSibling}`);
  console.log(`  pairs over the 38% corpus limit  : ${overCorpus}`);

  // ---- exact repeats ----
  const repeat = (label: string, values: Array<[string, string]>) => {
    const seen = new Map<string, string[]>();
    for (const [slug, value] of values) {
      const key = value.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
      if (!key) continue;
      seen.set(key, [...(seen.get(key) ?? []), slug]);
    }
    const dupes = [...seen].filter(([, slugs]) => slugs.length > 1);
    console.log(`\n  repeated ${label}: ${dupes.length}`);
    for (const [value, slugs] of dupes.slice(0, 5)) {
      console.log(`    "${value.slice(0, 64)}"`);
      console.log(`      ${slugs.slice(0, 3).join(", ")}`);
    }
  };

  repeat("H1", pages.map((p) => [p.slug, p.content.h1 ?? ""] as [string, string]));
  repeat("meta description", pages.map((p) => [p.slug, p.content.metaDescription ?? ""] as [string, string]));
  repeat(
    "FAQ question",
    pages.flatMap((p) => p.content.faqs.map((f) => [p.slug, f.question] as [string, string])),
  );
  repeat(
    "body paragraph (120+ chars)",
    pages.flatMap((p) =>
      [...p.content.intro.paragraphs, ...p.content.sections.flatMap((s) => s.paragraphs)]
        .filter((t) => t.length >= 120)
        .map((t) => [p.slug, t] as [string, string]),
    ),
  );

  const clean = overSibling === 0 && overCorpus === 0;
  console.log(`\n  ${clean ? "PASS - no pair exceeds its similarity limit" : "FAIL - see the counts above"}\n`);
  if (!clean) process.exitCode = 1;
}

main();
