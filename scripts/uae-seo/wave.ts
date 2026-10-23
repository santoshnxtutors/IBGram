/**
 * Picks which pages a writing wave covers and writes their briefs.
 *
 *   npx tsx scripts/uae-seo/wave.ts 1    print wave 1's slugs as a JSON array
 *
 * Briefs are written for all 2,654 pages in one pass by `plan.ts --briefs`; this only picks
 * which of them a wave covers.
 *
 * Wave 1 is the hub layer, deliberately: 8 emirate hubs, the 129 UAE-wide keyword pages, and
 * the highest-intent Dubai and Abu Dhabi head terms. Those are the pages the other 2,454 link
 * UP to. Writing the long tail first would create 2,454 orphans with nothing pointing at them,
 * which is exactly how this site's earlier batches ended up "Discovered - currently not
 * indexed".
 */
import { uaeSeoPagesMeta } from "../../src/lib/uae-seo/pages-data";

const WAVE_SIZE = 200;

/** Head terms worth a city page before any long-tail page gets written. */
const HEAD_TERMS = [
  "ib-tutor", "ib-tutors", "ib-home-tutor", "ib-home-tuition", "ib-online-tutor", "ib-tuition",
  "ib-tutor-near-me", "best-ib-tutor", "ib-private-tutor", "ib-diploma-tutor", "ib-dp-tutor",
  "ib-myp-tutor", "ib-home-tutor-fees", "ib-tutor-cost",
  "igcse-tutor", "igcse-tutors", "igcse-home-tutor", "igcse-home-tuition", "igcse-online-tutor",
  "igcse-tuition", "igcse-tutor-near-me", "best-igcse-tutor", "igcse-private-tutor",
  "igcse-home-tutor-fees", "igcse-tutor-cost", "cambridge-igcse-tutor", "edexcel-igcse-tutor",
  "ib-igcse-tutor", "ib-igcse-home-tutor", "ib-igcse-tutor-near-me",
];

function wave1(): string[] {
  const by = (kind: string) => uaeSeoPagesMeta.filter((m) => m.kind === kind);
  const cityHubs = by("city").map((m) => m.slug);
  const uaeKeywords = by("uae-keyword").map((m) => m.slug);

  // Head terms, Dubai first then Abu Dhabi, in the order HEAD_TERMS lists them so the set is
  // stable across runs rather than depending on sitemap order.
  const cityHead: string[] = [];
  for (const city of ["dubai", "abu-dhabi"]) {
    for (const term of HEAD_TERMS) {
      const slug = `${city}/${term}`;
      if (uaeSeoPagesMeta.some((m) => m.slug === slug)) cityHead.push(slug);
    }
  }

  // Top up to exactly WAVE_SIZE from the remaining emirates' head terms, biggest market first.
  const topUp: string[] = [];
  for (const city of ["sharjah", "al-ain", "ajman", "ras-al-khaimah", "fujairah", "umm-al-quwain"]) {
    for (const term of HEAD_TERMS) {
      const slug = `${city}/${term}`;
      if (uaeSeoPagesMeta.some((m) => m.slug === slug)) topUp.push(slug);
    }
  }

  return [...cityHubs, ...uaeKeywords, ...cityHead, ...topUp].slice(0, WAVE_SIZE);
}

const WAVES: Record<string, () => string[]> = { "1": wave1 };

function main(): void {
  const n = process.argv[2] ?? "1";
  const pick = WAVES[n];
  if (!pick) {
    console.log(`no wave "${n}" defined`);
    process.exitCode = 1;
    return;
  }
  const slugs = pick();
  console.log(JSON.stringify(slugs));
}

main();
