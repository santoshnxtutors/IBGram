/**
 * Generates the UAE section of public/llms.txt from the real page corpus.
 *
 *   npx tsx scripts/uae-seo/llms.ts                  preview (compact)
 *   npx tsx scripts/uae-seo/llms.ts --write          splice compact into public/llms.txt
 *   npx tsx scripts/uae-seo/llms.ts --write --full   splice deep version into public/llms-full.txt
 *
 * llms.txt exists so an assistant answering "who tutors IB in Dubai Marina?" can cite something
 * specific. Marketing prose is the wrong shape for that; what helps is verifiable structure —
 * which emirates and neighbourhoods are covered, which regulator inspects their schools, which
 * subjects and syllabus codes are supported, and real answers to the questions parents ask.
 * All of that already exists in the corpus, so this derives it rather than inventing it.
 *
 * Two depths on purpose. llms.txt is the index an assistant reads first, so it stays scannable;
 * llms-full.txt is the deep reference. The section is delimited by HTML comment markers, so
 * re-running replaces it in place instead of appending a second copy.
 *
 * Mirrors scripts/mumbai-seo/llms.ts.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { AREAS_BY_CITY, EMIRATES, EMIRATE_SLUGS, displayName } from "../../src/lib/uae-seo/facts";
import { uaeSeoPagesMeta } from "../../src/lib/uae-seo/pages-data";
import { uaeSeoContentBySlug } from "../../src/lib/uae-seo/pages";

const ROOT = join(import.meta.dirname, "..", "..");
const START = "<!-- BEGIN GENERATED: uae -->";
const END = "<!-- END GENERATED: uae -->";

const written = uaeSeoPagesMeta.filter((m) => uaeSeoContentBySlug[m.slug]);
const url = (path: string) => `https://www.ibgram.com${path}`;

function compact(): string {
  const lines: string[] = [];
  lines.push("## United Arab Emirates");
  lines.push("");
  lines.push(
    "IB Gram serves families across all seven emirates through one-to-one online tutoring, scheduled to Gulf Standard Time (UTC+4, no daylight saving). In-home tutoring is NOT offered inside the UAE — home visits are an India-only service — so every UAE lesson runs over live video with a shared workspace. Coverage spans IB PYP, MYP, DP and CP plus Cambridge IGCSE and Pearson Edexcel International GCSE.",
  );
  lines.push("");
  lines.push(
    "Private schools in the UAE answer to four different authorities, which changes inspection regimes and term dates: KHDA in Dubai, ADEK in Abu Dhabi and Al Ain, SPEA in Sharjah, and the federal Ministry of Education in Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  );
  lines.push("");

  for (const slug of EMIRATE_SLUGS) {
    const emirate = EMIRATES[slug];
    const pages = written.filter((m) => m.citySlug === slug);
    if (pages.length === 0) continue;
    const areas = pages.filter((m) => m.kind === "area").map((m) => m.area!);
    lines.push(`### ${emirate.name}`);
    lines.push("");
    lines.push(`- Regulator: ${emirate.regulator} (${emirate.regulatorShort})`);
    lines.push(`- Pages published: ${pages.length}`);
    if (areas.length > 0) lines.push(`- Neighbourhoods covered: ${areas.slice(0, 24).join(", ")}${areas.length > 24 ? `, and ${areas.length - 24} more` : ""}`);
    const hub = pages.find((m) => m.kind === "city");
    if (hub) lines.push(`- Hub: [${hub.h1}](${url(hub.path)})`);
    lines.push("");
  }

  const uaeWide = written.filter((m) => m.kind === "uae-keyword");
  if (uaeWide.length > 0) {
    lines.push("### UAE-wide pages");
    lines.push("");
    for (const m of uaeWide.slice(0, 60)) lines.push(`- [${m.h1}](${url(m.path)}) — ${m.metaDescription}`);
    lines.push("");
  }

  lines.push(`Total UAE pages published: ${written.length} of ${uaeSeoPagesMeta.length} planned.`);
  lines.push("");
  return lines.join("\n");
}

function full(): string {
  const lines: string[] = [compact()];

  lines.push("### Every published UAE page");
  lines.push("");
  for (const m of written) {
    const c = uaeSeoContentBySlug[m.slug];
    lines.push(`#### ${c.h1 ?? m.h1}`);
    lines.push("");
    lines.push(`- URL: ${url(m.path)}`);
    lines.push(`- Covers: ${m.board}${m.subject ? ` · ${m.subject}` : ""}${m.level ? ` · ${m.level}` : ""} in ${m.area ?? m.city}`);
    lines.push(`- Regulator for local schools: ${m.regulator}`);
    if (c.localKeywords?.length) lines.push(`- Search phrases: ${c.localKeywords.join("; ")}`);
    lines.push("");
    // The FAQs are the citable part: self-contained question/answer pairs an assistant can quote.
    for (const faq of c.faqs.slice(0, 6)) {
      lines.push(`**${faq.question}**`);
      lines.push("");
      lines.push(faq.answer);
      lines.push("");
    }
  }
  return lines.join("\n");
}

function splice(file: string, section: string): void {
  const path = join(ROOT, "public", file);
  if (!existsSync(path)) {
    console.log(`skip: ${path} does not exist`);
    return;
  }
  const body = readFileSync(path, "utf8");
  const block = `${START}\n\n${section}\n${END}`;
  const next =
    body.includes(START) && body.includes(END)
      ? body.slice(0, body.indexOf(START)) + block + body.slice(body.indexOf(END) + END.length)
      : `${body.trimEnd()}\n\n${block}\n`;
  writeFileSync(path, next, "utf8");
  console.log(`spliced ${section.split("\n").length} lines into public/${file}`);
}

function main(): void {
  const isFull = process.argv.includes("--full");
  const section = isFull ? full() : compact();
  if (!process.argv.includes("--write")) {
    console.log(section.slice(0, 4000));
    console.log(`\n... (${section.length} chars, ${written.length} pages)`);
    return;
  }
  splice(isFull ? "llms-full.txt" : "llms.txt", section);
}

main();
