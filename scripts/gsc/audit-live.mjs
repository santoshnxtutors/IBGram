// Crawls every URL in the live sitemap and reports the on-page SEO problems that
// actually suppress rankings at scale: duplicate titles, truncated titles,
// missing or duplicate meta descriptions, missing/multiple H1s, and noindex.
//
//   node scripts/gsc/audit-live.mjs            full sitemap
//   node scripts/gsc/audit-live.mjs --limit 400
//   node scripts/gsc/audit-live.mjs --json out.json
//
// Duplicates matter more than length here: when two pages share a title Google
// picks one and suppresses the other, so a duplicate is a page that cannot rank
// no matter how good its content is.
import fs from "node:fs";

const args = process.argv.slice(2);
const LIMIT = Number(args[args.indexOf("--limit") + 1]) || Infinity;
const JSON_OUT = args.includes("--json") ? args[args.indexOf("--json") + 1] : null;
const CONCURRENCY = 12;
const SITE = "https://www.ibgram.com";

const pick = (html, re) => (html.match(re)?.[1] ?? "").replace(/\s+/g, " ").trim();

async function fetchPage(url) {
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "IBGram-SEO-Audit/1.0" } });
    const html = await res.text();
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
    return {
      url,
      status: res.status,
      title: pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
      desc: pick(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || pick(html, /<meta[^>]+content="([^"]*)"[^>]+name="description"/i),
      canonical: pick(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i),
      noindex: /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
      h1Count: h1s.length,
      h1: h1s[0] ?? "",
      words: (html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ").match(/\S+/g) || []).length,
    };
  } catch (e) {
    return { url, status: 0, error: String(e?.message ?? e) };
  }
}

async function pool(items, fn, n) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      for (;;) {
        const idx = i++;
        if (idx >= items.length) return;
        out[idx] = await fn(items[idx]);
        if (out.filter(Boolean).length % 200 === 0) process.stderr.write(`  ${out.filter(Boolean).length}/${items.length}\n`);
      }
    }),
  );
  return out;
}

const main = async () => {
  process.stderr.write("fetching sitemap...\n");
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  let urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  process.stderr.write(`${urls.length} URLs in sitemap\n`);
  if (urls.length > LIMIT) urls = urls.slice(0, LIMIT);

  const rows = (await pool(urls, fetchPage, CONCURRENCY)).filter(Boolean);
  const ok = rows.filter((r) => r.status === 200);

  const byTitle = new Map();
  const byDesc = new Map();
  for (const r of ok) {
    if (r.title) byTitle.set(r.title, [...(byTitle.get(r.title) ?? []), r.url]);
    if (r.desc) byDesc.set(r.desc, [...(byDesc.get(r.desc) ?? []), r.url]);
  }
  const dupTitles = [...byTitle.entries()].filter(([, u]) => u.length > 1).sort((a, b) => b[1].length - a[1].length);
  const dupDescs = [...byDesc.entries()].filter(([, u]) => u.length > 1).sort((a, b) => b[1].length - a[1].length);

  const bad = {
    nonOk: rows.filter((r) => r.status !== 200),
    noindex: ok.filter((r) => r.noindex),
    missingTitle: ok.filter((r) => !r.title),
    longTitle: ok.filter((r) => r.title.length > 60),
    shortTitle: ok.filter((r) => r.title && r.title.length < 25),
    missingDesc: ok.filter((r) => !r.desc),
    longDesc: ok.filter((r) => r.desc.length > 165),
    shortDesc: ok.filter((r) => r.desc && r.desc.length < 70),
    noH1: ok.filter((r) => r.h1Count === 0),
    multiH1: ok.filter((r) => r.h1Count > 1),
    thin: ok.filter((r) => r.words < 350),
    canonMismatch: ok.filter((r) => r.canonical && !r.canonical.replace(/\/$/, "").endsWith(r.url.replace(SITE, "").replace(/\/$/, "")) && r.canonical !== r.url),
  };

  console.log(`\n=== CRAWLED ${rows.length} URLs (${ok.length} returned 200) ===\n`);
  const line = (label, arr, extra = "") => console.log(`${label.padEnd(34)} ${String(arr.length).padStart(5)}  ${extra}`);
  line("non-200 responses", bad.nonOk);
  line("noindex (should be 0)", bad.noindex);
  line("missing <title>", bad.missingTitle);
  line("title > 60 chars (truncated)", bad.longTitle);
  line("title < 25 chars (thin)", bad.shortTitle);
  line("missing meta description", bad.missingDesc);
  line("meta desc > 165 chars", bad.longDesc);
  line("meta desc < 70 chars", bad.shortDesc);
  line("no H1", bad.noH1);
  line("multiple H1", bad.multiH1);
  line("thin content (<350 words)", bad.thin);
  line("canonical mismatch", bad.canonMismatch);
  console.log(`\nDUPLICATE TITLES   ${dupTitles.length} groups covering ${dupTitles.reduce((a, [, u]) => a + u.length, 0)} pages`);
  console.log(`DUPLICATE META     ${dupDescs.length} groups covering ${dupDescs.reduce((a, [, u]) => a + u.length, 0)} pages`);

  console.log(`\n=== WORST DUPLICATE TITLE GROUPS ===`);
  dupTitles.slice(0, 12).forEach(([t, u]) => {
    console.log(`  ${String(u.length).padStart(4)} pages  "${t.slice(0, 80)}"`);
    u.slice(0, 2).forEach((x) => console.log(`            ${x.replace(SITE, "")}`));
  });

  if (bad.nonOk.length) {
    console.log(`\n=== NON-200 IN SITEMAP ===`);
    bad.nonOk.slice(0, 20).forEach((r) => console.log(`  ${r.status || r.error}  ${r.url.replace(SITE, "")}`));
  }

  if (JSON_OUT) {
    fs.writeFileSync(JSON_OUT, JSON.stringify({ rows, dupTitles, dupDescs, summary: Object.fromEntries(Object.entries(bad).map(([k, v]) => [k, v.length])) }, null, 1));
    console.log(`\nraw -> ${JSON_OUT}`);
  }
};

main().catch((e) => { console.error(e); process.exit(1); });
