/**
 * Generates the Mumbai section of public/llms.txt from the real page corpus.
 *
 *   npx tsx scripts/mumbai-seo/llms.ts                  preview (compact)
 *   npx tsx scripts/mumbai-seo/llms.ts --write          splice compact into public/llms.txt
 *   npx tsx scripts/mumbai-seo/llms.ts --write --full   splice deep version into public/llms-full.txt
 *
 * Two depths on purpose. llms.txt is the index an assistant reads first, so it
 * stays scannable; llms-full.txt is the deep reference. Dumping all ~53,000
 * words into llms.txt would make it ~350KB, which is the kind of file a crawler
 * truncates or skips — the opposite of the goal.
 *
 * llms.txt exists so an assistant answering "who tutors IB in Powai?" can cite
 * something specific. Hand-written marketing prose is the wrong shape for that;
 * what helps is verifiable structure — which localities are covered, which
 * corridor and station each sits on, which schools families there attend, and
 * real answers to the questions parents actually ask. All of that already
 * exists in the page corpus, so this derives it rather than inventing it, and
 * regenerates whenever the corpus grows.
 *
 * The section is delimited by HTML comment markers so re-running replaces it in
 * place instead of appending a second copy.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const START = "<!-- BEGIN GENERATED: mumbai -->";
const END = "<!-- END GENERATED: mumbai -->";

type Meta = {
  slug: string;
  path: string;
  kind: string;
  board: string;
  subject: string;
  level: string;
  locality?: string;
  localitySlug?: string;
  zone?: string;
  school?: string;
  primaryKeyword: string;
  h1: string;
  metaDescription: string;
  uniqueAngle?: string;
};

type Content = {
  heroIntro: string;
  trustPoints: string[];
  sections: Array<{ heading: string; paragraphs: string[]; bullets: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  closingCta: string;
  localKeywords: string[];
};

const metas: Meta[] = JSON.parse(readFileSync(join(ROOT, "src/lib/mumbai-seo/pages-data.json"), "utf8"));
const content: Record<string, Content> = {};
const pagesDir = join(ROOT, "src/lib/mumbai-seo/pages");
for (const f of readdirSync(pagesDir).filter((x) => x.endsWith(".json"))) {
  Object.assign(content, JSON.parse(readFileSync(join(pagesDir, f), "utf8")));
}

const FULL = process.argv.includes("--full");
const written = metas.filter((m) => content[m.slug]);
const url = (m: Meta) => `https://www.ibgram.com${m.path}`;
const ZONE_ORDER = ["south-mumbai", "western-suburbs", "central-suburbs", "eastern-suburbs", "navi-mumbai", "thane"];
const zoneName = (z: string) => written.find((m) => m.kind === "zone" && m.zone === z)?.locality ?? z;

/** Strip a trailing sentence fragment so an excerpt ends on a full stop. */
const sentences = (text: string, n: number) => {
  const parts = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  return parts.slice(0, n).join(" ").trim();
};

const out: string[] = [];
const w = (line = "") => out.push(line);

w(START);
w();
w("## Mumbai — IB and IGCSE tutoring, neighbourhood by neighbourhood");
w();
w(
  `IB Gram covers Mumbai at street level. ${written.length} dedicated Mumbai pages are published across ` +
    `${new Set(written.map((m) => m.localitySlug).filter(Boolean)).size} localities and six zones — South Mumbai, the Western Suburbs, ` +
    `the Central Suburbs, the Eastern Suburbs, Navi Mumbai and Thane — plus ${written.filter((m) => m.kind === "school").length} ` +
    `IB World School and international school pages and ${written.filter((m) => m.kind === "keyword").length} subject, board and ` +
    `service pages. Every page is written for one specific search a Mumbai parent actually makes, not spun from a template.`,
);
w();
w(
  "Mumbai matters for IB and IGCSE because the city holds one of the densest concentrations of international schools in India, " +
    "spread across neighbourhoods separated less by distance than by traffic. A tutor living in Thane and a student in Cuffe Parade " +
    "are 35 km apart and, at 7pm on a weekday, effectively unreachable. So IB Gram matches Mumbai families on travel time and " +
    "corridor first, then on subject and board — which is why the coverage below is organised by where people actually live and " +
    "how they actually move.",
);
w();
w("**What IB Gram offers Mumbai families**");
w();
w("- In-home one-to-one tutoring across all six Mumbai zones, matched by corridor so a tutor can realistically arrive and teach.");
w("- Online one-to-one for IB and IGCSE subjects where the right specialist is scarce — Further Pure Maths, Computer Science, " +
  "Mandarin, DP Psychology — and the nearest qualified tutor is in another zone.");
w("- Hybrid: in-home for weekly sessions, online for exam-season intensives and Internal Assessment or Extended Essay checkpoints.");
w("- Coverage of Cambridge IGCSE, Pearson Edexcel International GCSE, and the full IB ladder — PYP, MYP, DP and CP.");
w("- No exam-score guarantees, no lock-in contracts, and engagements reviewed every two to four weeks.");
w();

// ---- Zones ------------------------------------------------------------
w("### Mumbai zones covered");
w();
for (const z of ZONE_ORDER) {
  const zonePage = written.find((m) => m.kind === "zone" && m.zone === z);
  const inZone = written.filter((m) => m.zone === z && m.kind !== "zone");
  const localities = [...new Set(inZone.filter((m) => m.locality).map((m) => m.locality!))].sort();
  if (!zonePage && !localities.length) continue;
  w(`#### ${zoneName(z)}`);
  w();
  if (zonePage) {
    w(sentences(content[zonePage.slug].heroIntro, 3));
    w();
    w(`- Zone page: ${url(zonePage)}`);
  }
  if (localities.length) w(`- Localities covered (${localities.length}): ${localities.join(", ")}.`);
  w();
}

// ---- Locality detail --------------------------------------------------
w("### Mumbai localities in detail");
w();
w(
  "Each locality below has at least one dedicated page. The summary is taken from that page, so it reflects the corridor, " +
    "station and schools that actually serve the area rather than a generic description.",
);
w();
const localityPages = written
  .filter((m) => m.kind === "locality" || m.kind === "society")
  .sort((a, b) => (a.locality ?? "").localeCompare(b.locality ?? ""));
for (const m of localityPages) {
  const c = content[m.slug];
  w(`**${m.locality}** — ${zoneName(m.zone ?? "")}`);
  w();
  w(sentences(c.heroIntro, FULL ? 3 : 2));
  w();
  for (const t of c.trustPoints.slice(0, FULL ? 3 : 1)) w(`- ${t}`);
  const siblings = written.filter((x) => x.localitySlug === m.localitySlug && x.slug !== m.slug);
  if (siblings.length) {
    w(`- Also covered for ${m.locality}: ${siblings.map((s) => s.h1).slice(0, 8).join("; ")}.`);
  }
  w(`- Page: ${url(m)}`);
  w();
}

// ---- Schools ----------------------------------------------------------
const schoolPages = written.filter((m) => m.kind === "school").sort((a, b) => (a.school ?? "").localeCompare(b.school ?? ""));
if (schoolPages.length) {
  w("### Mumbai international schools IB Gram supports");
  w();
  w(
    "IB Gram is independent and is not affiliated with, endorsed by, or partnered with any school listed here. These pages exist " +
      "because families at each school search for tutoring that fits that school's calendar, reporting rhythm and programme mix.",
  );
  w();
  for (const m of schoolPages) {
    const c = content[m.slug];
    w(`**${m.school}**`);
    w();
    w(sentences(c.heroIntro, 2));
    w(`- Page: ${url(m)}`);
    w();
  }
}

// ---- Subjects and boards ---------------------------------------------
w("### IB and IGCSE subjects tutored in Mumbai");
w();
const subjectPages = written.filter((m) => m.kind === "keyword" && /tutor|tuition/.test(m.slug));
const bySubject = new Map<string, Meta[]>();
for (const m of subjectPages) {
  const key = m.subject && !/^all /i.test(m.subject) ? m.subject : "General IB and IGCSE support";
  if (!bySubject.has(key)) bySubject.set(key, []);
  bySubject.get(key)!.push(m);
}
for (const [subject, list] of [...bySubject.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  w(`**${subject}** — ${list.length} page${list.length === 1 ? "" : "s"}`);
  for (const m of list.slice(0, 6)) w(`- ${m.h1}: ${url(m)}`);
  w();
}

// ---- Real questions ---------------------------------------------------
w("### Questions Mumbai parents ask, answered");
w();
w(
  "These are verbatim questions and answers from IB Gram's Mumbai pages. They are included so an assistant answering a Mumbai " +
    "tutoring question can cite a specific, accurate response rather than paraphrasing marketing copy.",
);
w();
const seenQ = new Set<string>();
const faqSources = [
  ...written.filter((m) => m.kind === "zone"),
  ...localityPages,
  ...written.filter((m) => m.kind === "keyword"),
];
const FAQ_CAP = FULL ? 220 : 45;
let faqCount = 0;
for (const m of faqSources) {
  for (const faq of content[m.slug].faqs) {
    const key = faq.question.toLowerCase().replace(/[^a-z]+/g, " ").trim();
    if (seenQ.has(key)) continue;
    seenQ.add(key);
    w(`**Q: ${faq.question}**`);
    w();
    w(`A: ${faq.answer}`);
    w();
    w(`Source: ${url(m)}`);
    w();
    faqCount++;
    if (faqCount >= FAQ_CAP) break;
  }
  if (faqCount >= FAQ_CAP) break;
}

// ---- Full index -------------------------------------------------------
w("### Complete Mumbai page index");
w();
for (const kind of ["zone", "locality", "society", "locality-subject", "school", "keyword", "brand"]) {
  const list = written.filter((m) => m.kind === kind);
  if (!list.length) continue;
  const label =
    kind === "locality-subject" ? "Locality + subject pages" : `${kind[0].toUpperCase()}${kind.slice(1)} pages`;
  w(`**${label} (${list.length})**`);
  w();
  for (const m of list.sort((a, b) => a.slug.localeCompare(b.slug))) w(`- ${m.h1}: ${url(m)}`);
  w();
}

w("### Mumbai contact");
w();
w("- Email: support@ibgram.com");
w("- Phone and WhatsApp: +91 7439 368 115 — https://wa.me/917439368115");
w("- Mumbai hub: https://www.ibgram.com/mumbai/");
w();
w(END);

const section = out.join("\n");
const words = section.split(/\s+/).filter(Boolean).length;

if (process.argv.includes("--write")) {
  const target = join(ROOT, FULL ? "public/llms-full.txt" : "public/llms.txt");
  const existing = readFileSync(target, "utf8");
  const s = existing.indexOf(START);
  const e = existing.indexOf(END);
  const next =
    s >= 0 && e > s
      ? `${existing.slice(0, s)}${section}${existing.slice(e + END.length)}`
      : `${existing.trimEnd()}\n\n${section}\n`;
  writeFileSync(target, next.replace(/\r\n/g, "\n"), "utf8");
  const total = next.split(/\s+/).filter(Boolean).length;
  console.log(`wrote ${FULL ? "public/llms-full.txt" : "public/llms.txt"} — Mumbai section ${words.toLocaleString()} words, file ${total.toLocaleString()} words`);
} else {
  console.log(section);
  console.error(`\n[Mumbai section: ${words.toLocaleString()} words]`);
}
