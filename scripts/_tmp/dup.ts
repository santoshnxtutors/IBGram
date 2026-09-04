import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
const text = (p: string) => {
  const g = getGeneratedPageByPath(p);
  if (!g) return "";
  return [g.introSummary, ...g.contentBlocks.map((b) => `${b.heading} ${b.body}`), ...g.faqs.map((f) => `${f.question} ${f.answer}`)].join(" ");
};
const shingles = (s: string) => {
  const t = s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  return new Set(Array.from({ length: Math.max(0, t.length - 7) }, (_, i) => t.slice(i, i + 8).join(" ")));
};
const jac = (a: Set<string>, b: Set<string>) => {
  let n = 0; for (const x of a) if (b.has(x)) n++;
  return n / (a.size + b.size - n);
};
const pairs: [string, string][] = [
  ["/ib-tutors/gurugram/areas/dlf-phase-1/", "/ib-tutors/gurugram/areas/dlf-phase-2/"],
  ["/ib-tutors/gurugram/areas/dlf-phase-1/", "/ib-tutors/gurugram/areas/sohna-road/"],
  ["/ib-tutors/gurugram/sectors/sector-42/", "/ib-tutors/gurugram/sectors/sector-43/"],
  ["/ib-tutors/gurugram/societies/the-aralias/", "/ib-tutors/gurugram/societies/dlf-crest/"],
  ["/ib-tutors/mumbai/chemistry/", "/ib-tutors/pune/chemistry/"],
];
for (const [a, b] of pairs) {
  const ta = text(a), tb = text(b);
  if (!ta || !tb) { console.log(`  MISSING  ${a} (${ta.length}) vs ${b} (${tb.length})`); continue; }
  console.log(`  8-gram Jaccard ${(jac(shingles(ta), shingles(tb)) * 100).toFixed(1)}%   ${a}  vs  ${b}`);
}
