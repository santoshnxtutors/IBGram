/**
 * Fetches every published Gurgaon keyword page from a running server and asserts it renders
 * as an indexable, complete page: the gate in build.ts only proves the JSON is good.
 *
 * Run: npx tsx scripts/gurgaon-keywords/verify-render.ts [baseUrl]   (default http://localhost:3100)
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import type { GeneratedSeoPage } from "../../src/lib/page-generator/types";

const BASE = process.argv.find((a) => a.startsWith("http")) ?? "http://localhost:3100";
const MIN_WORDS = 4000;
const CONCURRENCY = 4;

const pages: GeneratedSeoPage[] = JSON.parse(readFileSync(path.join(process.cwd(), "src", "lib", "gurgaon-keywords", "pages.json"), "utf8"));

function decode(s: string): string {
  return s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
}

async function check(page: GeneratedSeoPage): Promise<{ problems: string[]; tutors: boolean }> {
  const route = new URL(page.canonicalUrl).pathname;
  // A dev server compiling the route for the first time can answer slowly or 404 briefly.
  let res = await fetch(BASE + route);
  for (let attempt = 1; res.status !== 200 && attempt <= 3; attempt += 1) {
    await new Promise((r) => setTimeout(r, 3000 * attempt));
    res = await fetch(BASE + route);
  }
  if (res.status !== 200) return { problems: [`HTTP ${res.status}`], tutors: false };
  const html = await res.text();
  const problems: string[] = [];

  const h1 = decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "");
  if (h1 !== page.h1) problems.push(`h1 "${h1}"`);

  const body = decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "));
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) problems.push(`${words} rendered words`);
  for (const block of page.contentBlocks) if (!body.includes(decode(block.heading))) problems.push(`block "${block.heading}" not rendered`);

  if (!html.includes('"FAQPage"')) problems.push("no FAQPage JSON-LD");
  if (!html.includes('"BreadcrumbList"')) problems.push("no BreadcrumbList JSON-LD");
  if (!new RegExp(`rel="canonical" href="[^"]*${route.replace(/\//g, "\\/")}"`).test(html)) problems.push("canonical missing or not self");
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) problems.push("robots noindex");
  // \s+: React server-renders "near {place}" with a comment node between the two text parts.
  if (!/International schools near\s+Gurgaon/i.test(body)) problems.push("school strip missing");
  if (!/not affiliated with/i.test(body)) problems.push("no independence disclaimer rendered");

  const tutors = route.includes("igcse") ? /Subject-aware\s+IGCSE\s+Tutors/i.test(body) : /tutors matched by/i.test(body);
  return { problems, tutors };
}

async function main(): Promise<void> {
  const queue = [...pages];
  const failures: string[] = [];
  const noTutors: string[] = [];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let page = queue.shift(); page; page = queue.shift()) {
        const route = new URL(page.canonicalUrl).pathname;
        const { problems, tutors } = await check(page).catch((e: Error) => ({ problems: [`fetch failed: ${e.message}`], tutors: false }));
        if (problems.length) failures.push(`${route}: ${problems.join("; ")}`);
        if (!tutors) noTutors.push(route);
      }
    }),
  );
  console.log(`checked ${pages.length} | failing ${failures.length}`);
  for (const f of failures) console.log(`  ${f}`);
  // Tutor cards come from the database; a local server without DB access renders none.
  if (noTutors.length) console.log(`tutor section not rendered on ${noTutors.length} page(s) (needs DB tutors): ${noTutors.slice(0, 5).join(", ")}${noTutors.length > 5 ? " ..." : ""}`);
  process.exitCode = failures.length ? 1 : 0;
}

main();
