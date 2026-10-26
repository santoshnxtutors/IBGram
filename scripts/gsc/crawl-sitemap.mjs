// Reconstructs the Search Console "why pages aren't indexed" buckets from the
// live site, because the API does not export them. Crawls every sitemap URL and
// records status, redirect target, robots directive and canonical.
//
//   node scripts/gsc/crawl-sitemap.mjs            full crawl
//   node scripts/gsc/crawl-sitemap.mjs --limit 300
import fs from "node:fs";

const SITE = "https://www.ibgram.com";
const LIMIT = process.argv.includes("--limit") ? Number(process.argv[process.argv.indexOf("--limit") + 1]) : Infinity;
const CONC = 12;
const OUT = "tmp/gsc-crawl.json";

const text = async (u) => (await fetch(u, { headers: { "user-agent": "Mozilla/5.0 (compatible; IBGramAudit/1.0)" } })).text();
const index = await text(`${SITE}/sitemap.xml`);
const children = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const urls = new Map(); // url -> sitemap it came from
for (const c of children) {
  const xml = await text(c);
  const name = c.split("/").pop();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) if (!urls.has(m[1])) urls.set(m[1], name);
  console.error(`${name}: ${[...xml.matchAll(/<loc>/g)].length}`);
}
const all = [...urls.entries()].slice(0, LIMIT);
console.error(`total sitemap URLs: ${urls.size}  crawling: ${all.length}`);

const results = [];
let done = 0;
/**
 * Reads only the head of each response and cancels the stream. Downloading full
 * bodies (some pages render 360KB) OOMed the crawl twice even at 4GB heap, and
 * every directive this audit needs lives in the head.
 */
async function headOf(res, maxBytes = 60000) {
  const reader = res.body?.getReader();
  if (!reader) return "";
  const dec = new TextDecoder();
  let out = "";
  try {
    while (out.length < maxBytes) {
      const { done, value } = await reader.read();
      if (done) break;
      out += dec.decode(value, { stream: true });
      if (out.includes("</head>")) break;
    }
  } finally {
    try { await reader.cancel(); } catch {}
  }
  return out;
}

async function one([url, sitemap]) {
  try {
    const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "Mozilla/5.0 (compatible; IBGramAudit/1.0)" } });
    const r = { url, sitemap, status: res.status, location: res.headers.get("location") ?? null, xRobots: res.headers.get("x-robots-tag") ?? null, robots: null, canonical: null };
    if (res.status === 200) {
      const head = await headOf(res);
      r.robots = head.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? null;
      r.canonical = head.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? null;
    } else {
      try { await res.body?.cancel(); } catch {}
    }
    results.push(r);
  } catch (e) {
    results.push({ url, sitemap, status: 0, error: String(e.message ?? e) });
  }
  if (++done % 500 === 0) console.error(`  ${done}/${all.length}`);
}

const queue = [...all];
await Promise.all(Array.from({ length: CONC }, async () => { while (queue.length) await one(queue.shift()); }));

fs.mkdirSync("tmp", { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(results, null, 1).replace(/\r\n/g, "\n"), "utf8");

const by = (f) => results.reduce((m, r) => { const k = f(r); m[k] = (m[k] ?? 0) + 1; return m; }, {});
console.log(`\n=== CRAWLED ${results.length} SITEMAP URLS ===`);
console.log("status:", JSON.stringify(by((r) => r.status)));
const noidx = results.filter((r) => /noindex/i.test(r.robots ?? "") || /noindex/i.test(r.xRobots ?? ""));
const redir = results.filter((r) => r.status >= 300 && r.status < 400);
const dead = results.filter((r) => r.status === 404 || r.status === 410);
const err = results.filter((r) => r.status >= 500 || r.status === 0);
const canonMismatch = results.filter((r) => r.status === 200 && r.canonical && r.canonical.replace(/\/$/, "") !== r.url.replace(/\/$/, ""));
console.log(`\nNOINDEX in sitemap   : ${noidx.length}   <- GSC "Excluded by 'noindex' tag"`);
console.log(`REDIRECTS in sitemap : ${redir.length}   <- GSC "Page with redirect"`);
console.log(`404/410 in sitemap   : ${dead.length}   <- GSC "Not found (404)"`);
console.log(`5xx / fetch errors   : ${err.length}`);
console.log(`CANONICAL != self    : ${canonMismatch.length}   <- GSC "Alternate page with canonical"`);
const dump = (name, list) => {
  if (!list.length) return;
  console.log(`\n--- ${name} (by sitemap) ---`);
  const g = list.reduce((m, r) => { (m[r.sitemap] ??= []).push(r); return m; }, {});
  for (const [s, rs] of Object.entries(g).sort((a, b) => b[1].length - a[1].length))
    console.log(`  ${String(rs.length).padStart(5)}  ${s}   e.g. ${rs.slice(0, 2).map((r) => r.url.replace(SITE, "")).join(" , ")}`);
};
dump("NOINDEX", noidx); dump("REDIRECTS", redir); dump("404", dead); dump("5xx/ERROR", err); dump("CANONICAL MISMATCH", canonMismatch);
console.log(`\nfull detail: ${OUT}`);
