/**
 * Fetches every compiled expansion page from a running server and asserts it actually
 * renders the written content — the gate in compile.ts only proves the JSON is good.
 *
 * Run: npx tsx scripts/gurgaon-500/verify-render.ts [baseUrl]   (default http://localhost:3100)
 */
import { gurgaonSeoPagesMeta } from "../../src/lib/gurgaon-seo/pages-data";
import { gurgaonSeoExpansionMeta } from "../../src/lib/gurgaon-seo/pages-data-expansion";

// Args: [baseUrl] [--set 400]. The default set is the 500-page expansion.
const BASE = process.argv.find((a) => a.startsWith("http")) ?? "http://localhost:3100";
const SET = process.argv.includes("--set") ? process.argv[process.argv.indexOf("--set") + 1] : "500";
const MIN_WORDS = 4000;
const CONCURRENCY = 4;

function decode(s: string): string {
  return s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
}

async function check(path: string, h1: string): Promise<string[]> {
  // A dev server recompiling a freshly rewritten JSON shard answers 404 for a few seconds;
  // retry before calling a page broken, or every compile produces false failures.
  let res = await fetch(BASE + path);
  for (let attempt = 1; res.status !== 200 && attempt <= 3; attempt += 1) {
    await new Promise((r) => setTimeout(r, 3000 * attempt));
    res = await fetch(BASE + path);
  }
  if (res.status !== 200) return [`HTTP ${res.status}`];
  const html = await res.text();
  const problems: string[] = [];

  const renderedH1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, "").trim();
  if (decode(renderedH1 ?? "") !== h1) problems.push(`h1 "${renderedH1}"`);

  const body = decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "));
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) problems.push(`${words} rendered words`);

  if (!html.includes('"FAQPage"')) problems.push("no FAQPage JSON-LD");
  if (!html.includes('"BreadcrumbList"')) problems.push("no BreadcrumbList JSON-LD");
  if (!new RegExp(`rel="canonical" href="[^"]*${path.replace(/\//g, "\\/")}"`).test(html)) problems.push("canonical missing or not self");
  if (!/not affiliated with/i.test(body)) problems.push("no independence disclaimer rendered");
  return problems;
}

async function main(): Promise<void> {
  const queue = [...(SET === "400" ? gurgaonSeoPagesMeta : gurgaonSeoExpansionMeta)];
  const failures: string[] = [];
  let done = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let m = queue.shift(); m; m = queue.shift()) {
        const problems = await check(m.path, m.h1).catch((e: Error) => [`fetch failed: ${e.message}`]);
        if (problems.length) failures.push(`${m.path}: ${problems.join("; ")}`);
        done += 1;
      }
    }),
  );
  console.log(`checked ${done} | failing ${failures.length}`);
  for (const f of failures) console.log(`  ${f}`);
  process.exitCode = failures.length ? 1 : 0;
}

main();
