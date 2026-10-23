/**
 * End-to-end sitemap and indexability health check.
 *
 *   npx tsx scripts/seo/sitemap-health.ts                        against production
 *   npx tsx scripts/seo/sitemap-health.ts --base http://localhost:3000
 *   npx tsx scripts/seo/sitemap-health.ts --sample 8             pages fetched per child
 *   npx tsx scripts/seo/sitemap-health.ts --all                  fetch EVERY URL (slow)
 *
 * What it proves, in the order Search Console cares about:
 *
 *   1. robots.txt declares the sitemap and does not block anything the sitemap lists.
 *   2. /sitemap.xml is a valid <sitemapindex>.
 *   3. Every child sitemap returns 200, is a valid <urlset>, and is non-empty.
 *   4. No URL appears in two children (per-sitemap counts stay meaningful).
 *   5. Every URL is absolute, https, one host, and trailing-slashed.
 *   6. Sampled pages return 200 and are actually indexable: no noindex in the HTML or the
 *      X-Robots-Tag header, a self-referencing canonical, and a title, description and H1.
 *
 * Exits non-zero on any failure, so CI can gate a deploy on it.
 */

const args = process.argv.slice(2);
const flag = (name: string, fallback?: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : fallback;
};

const BASE = (flag("base", "https://www.ibgram.com") as string).replace(/\/+$/, "");
const SAMPLE = Number(flag("sample", "6"));
const ALL = args.includes("--all");

const problems: string[] = [];
const warnings: string[] = [];
const fail = (msg: string) => problems.push(msg);
const warn = (msg: string) => warnings.push(msg);

// Generous by default: a cold sitemap route builds every section, including database reads,
// and in dev it also compiles the route first. Pages are checked with a shorter budget below.
async function get(url: string, timeoutMs = 240_000): Promise<{ status: number; body: string; headers: Headers } | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal, redirect: "follow" });
    return { status: res.status, body: await res.text(), headers: res.headers };
  } catch (error) {
    fail(`${url} -> request failed: ${(error as Error).message}`);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

const locs = (xml: string): string[] =>
  [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);

/**
 * Sitemaps must contain absolute canonical URLs, so against a non-production base the index
 * points at www.ibgram.com. Rewrite onto the base under test, otherwise checking localhost
 * silently grades production instead.
 */
const onBase = (url: string): string => (BASE.startsWith("https://www.ibgram.com") ? url : url.replace(/^https?:\/\/[^/]+/, BASE));

/** Pseudo-random but deterministic pick, so two runs sample the same pages. */
function pick<T>(items: T[], n: number): T[] {
  if (items.length <= n) return items;
  const step = Math.floor(items.length / n);
  return Array.from({ length: n }, (_, i) => items[i * step]);
}

async function main(): Promise<void> {
  console.log(`\nSitemap health: ${BASE}\n`);

  /* 1. robots.txt --------------------------------------------------- */
  const robots = await get(`${BASE}/robots.txt`);
  let disallows: string[] = [];
  if (!robots || robots.status !== 200) {
    fail(`/robots.txt returned ${robots?.status ?? "no response"}`);
  } else {
    if (!/Sitemap:\s*\S*\/sitemap\.xml/i.test(robots.body)) {
      fail("/robots.txt does not declare Sitemap: .../sitemap.xml");
    }
    // Only the wildcard group matters for "is this blocked for everyone".
    const wildcard = robots.body.split(/user-agent:/i).find((block) => block.trimStart().startsWith("*"));
    disallows = [...(wildcard ?? "").matchAll(/^\s*Disallow:\s*(\S+)\s*$/gim)].map((m) => m[1]).filter((p) => p !== "/");
    console.log(`  robots.txt            OK  (${disallows.length} wildcard Disallow rules)`);
  }

  /* 2. the index ---------------------------------------------------- */
  const index = await get(`${BASE}/sitemap.xml`);
  if (!index || index.status !== 200) {
    fail(`/sitemap.xml returned ${index?.status ?? "no response"}`);
    return report();
  }
  if (!index.body.includes("<sitemapindex")) {
    fail("/sitemap.xml is not a <sitemapindex> — the children will never be discovered");
    return report();
  }
  const children = locs(index.body);
  if (children.length === 0) {
    fail("/sitemap.xml lists no child sitemaps");
    return report();
  }
  console.log(`  sitemap.xml           OK  (${children.length} child sitemaps)\n`);

  /* 3-5. the children ----------------------------------------------- */
  const owner = new Map<string, string>();
  const byChild = new Map<string, string[]>();
  let totalUrls = 0;

  for (const childLoc of children) {
    const child = onBase(childLoc);
    const res = await get(child);
    if (!res || res.status !== 200) {
      fail(`child sitemap ${child} returned ${res?.status ?? "no response"}`);
      continue;
    }
    if (!res.body.includes("<urlset")) {
      fail(`child sitemap ${child} is not a <urlset>`);
      continue;
    }
    const urls = locs(res.body);
    if (urls.length === 0) {
      // An empty sitemap is reported as an error in Search Console.
      fail(`child sitemap ${child} is empty`);
      continue;
    }
    byChild.set(child, urls);
    totalUrls += urls.length;

    for (const url of urls) {
      const previous = owner.get(url);
      if (previous && previous !== child) {
        fail(`duplicate URL across sitemaps: ${url}\n      in ${previous}\n      and ${child}`);
      } else {
        owner.set(url, child);
      }
      if (!url.startsWith("https://")) fail(`non-https URL in ${child}: ${url}`);
      const last = url.split("/").pop() ?? "";
      if (!url.endsWith("/") && !last.includes(".")) fail(`URL missing trailing slash in ${child}: ${url}`);
      for (const rule of disallows) {
        const path = url.replace(/^https?:\/\/[^/]+/, "");
        const pattern = rule.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
        if (new RegExp(`^${pattern}`).test(path)) {
          fail(`robots.txt Disallow "${rule}" blocks sitemap URL ${url}`);
        }
      }
    }

    const hosts = new Set(urls.map((u) => u.replace(/^https?:\/\//, "").split("/")[0]));
    if (hosts.size > 1) fail(`${child} mixes hosts: ${[...hosts].join(", ")}`);

    console.log(`  ${child.replace(BASE, "").padEnd(26)} ${String(urls.length).padStart(5)} URLs`);
  }

  console.log(`\n  total URLs across the index: ${totalUrls}`);
  console.log(`  unique URLs                : ${owner.size}\n`);

  /* 6. the pages themselves ----------------------------------------- */
  const targets: string[] = [];
  for (const [, urls] of byChild) targets.push(...(ALL ? urls : pick(urls, SAMPLE)).map(onBase));
  console.log(`  checking ${targets.length} pages for render + indexability...\n`);

  let checked = 0;
  for (const url of targets) {
    const res = await get(url, 60_000);
    checked += 1;
    if (!res) continue;
    if (res.status !== 200) {
      fail(`${res.status} ${url}`);
      continue;
    }
    const html = res.body;

    const xRobots = res.headers.get("x-robots-tag") ?? "";
    if (/noindex/i.test(xRobots)) fail(`X-Robots-Tag: noindex on ${url}`);

    const robotsMeta = html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i)?.[1] ?? "";
    if (/noindex/i.test(robotsMeta)) fail(`<meta robots> noindex on ${url}`);

    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1];
    if (!canonical) {
      fail(`no canonical on ${url}`);
    } else if (canonical.replace(/\/+$/, "") !== url.replace(/\/+$/, "")) {
      // A canonical pointing elsewhere means this URL will never be the indexed one.
      fail(`canonical mismatch on ${url}\n      canonical -> ${canonical}`);
    }

    if (!/<title>[^<]{5,}<\/title>/i.test(html)) fail(`missing or empty <title> on ${url}`);
    if (!/<meta[^>]+name=["']description["'][^>]*content=["'][^"']{20,}["']/i.test(html)) {
      fail(`missing meta description on ${url}`);
    }
    const h1s = html.match(/<h1[\s>]/gi)?.length ?? 0;
    if (h1s === 0) fail(`no <h1> on ${url}`);
    else if (h1s > 1) warn(`${h1s} <h1> elements on ${url}`);

    if (checked % 20 === 0) console.log(`    ...${checked}/${targets.length}`);
  }

  report();
}

function report(): void {
  console.log("");
  if (warnings.length > 0) {
    console.log(`  ${warnings.length} warning(s):`);
    for (const w of warnings.slice(0, 20)) console.log(`    - ${w}`);
    console.log("");
  }
  if (problems.length === 0) {
    console.log("  PASS — sitemap index healthy, sampled pages render and are indexable.\n");
    return;
  }
  console.log(`  FAIL — ${problems.length} problem(s):`);
  for (const p of problems.slice(0, 50)) console.log(`    - ${p}`);
  if (problems.length > 50) console.log(`    ... and ${problems.length - 50} more`);
  console.log("");
  process.exitCode = 1;
}

main();
