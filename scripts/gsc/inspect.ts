/**
 * Search Console status for ibgram.com, straight from the API.
 *
 *   npx tsx scripts/gsc/inspect.ts status              # sites + sitemap rows
 *   npx tsx scripts/gsc/inspect.ts resubmit            # re-submit sitemap.xml (nudges a re-crawl)
 *   npx tsx scripts/gsc/inspect.ts check [n]           # inspect n sitemap URLs, group by coverage state
 *
 * Auth is the Iamuseragent.json service account (siteOwner on both properties).
 * URL Inspection is quota-limited to 2000 calls/day, so `check` samples evenly
 * across the sitemap rather than walking it.
 *
 * IMPORTANT when reading `check` output: Google reports the state from its LAST
 * crawl, shown as `crawled=`. A URL can sit in "Excluded by 'noindex' tag" for
 * months after the page started serving `index, follow`. Always compare the
 * crawl date against the deploy that fixed the page before trusting a bucket.
 */
import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

const SITE = "sc-domain:ibgram.com";
const SITEMAP = "https://www.ibgram.com/sitemap.xml";
const KEY_FILE = path.join(process.cwd(), "Iamuseragent.json");

const b64 = (input: string | Buffer) =>
  Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

async function token(): Promise<string> {
  const key = JSON.parse(readFileSync(KEY_FILE, "utf8")) as { client_email: string; private_key: string };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${b64(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64(JSON.stringify(claim))}`;
  const signature = b64(createSign("RSA-SHA256").update(unsigned).sign(key.private_key));
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  const json = (await res.json()) as { access_token?: string };
  if (!json.access_token) throw new Error(`token failed: ${JSON.stringify(json)}`);
  return json.access_token;
}

async function sitemapUrls(): Promise<string[]> {
  const xml = await (await fetch(SITEMAP)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function status(auth: string) {
  const sites = await (await fetch("https://searchconsole.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${auth}` },
  })).json();
  console.log("Properties:", (sites.siteEntry ?? []).map((s: { siteUrl: string; permissionLevel: string }) => `${s.siteUrl} (${s.permissionLevel})`).join(", "));

  const maps = await (await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps`,
    { headers: { Authorization: `Bearer ${auth}` } },
  )).json();
  for (const m of maps.sitemap ?? []) {
    const web = (m.contents ?? []).find((c: { type: string }) => c.type === "web") ?? {};
    console.log(`${m.path}\n  submitted=${web.submitted ?? "?"} indexed=${web.indexed ?? "?"} errors=${m.errors} warnings=${m.warnings} lastDownloaded=${m.lastDownloaded}`);
  }
}

async function resubmit(auth: string) {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(SITEMAP)}`,
    { method: "PUT", headers: { Authorization: `Bearer ${auth}` } },
  );
  console.log(res.ok ? `Re-submitted ${SITEMAP}` : `Failed (${res.status}): ${await res.text()}`);
}

async function check(auth: string, sampleSize: number) {
  const all = await sitemapUrls();
  const step = Math.max(1, Math.floor(all.length / sampleSize));
  const urls = all.filter((_, i) => i % step === 0).slice(0, sampleSize);
  const buckets = new Map<string, Array<{ url: string; crawled: string }>>();

  let done = 0;
  let index = 0;
  const worker = async () => {
    for (let i = index++; i < urls.length; i = index++) {
      const url = urls[i];
      const res = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
        method: "POST",
        headers: { Authorization: `Bearer ${auth}`, "Content-Type": "application/json" },
        body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }),
      });
      const body = await res.json();
      const r = body?.inspectionResult?.indexStatusResult ?? {};
      const key = res.ok ? (r.coverageState ?? "unknown") : `HTTP ${res.status}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key)!.push({ url, crawled: r.lastCrawlTime ?? "never" });
      if (++done % 25 === 0) process.stderr.write(`${done}/${urls.length}\n`);
      await new Promise((r) => setTimeout(r, 200));
    }
  };
  await Promise.all([worker(), worker(), worker()]);

  console.log(`\nInspected ${urls.length} of ${all.length} sitemap URLs\n`);
  for (const [state, rows] of [...buckets].sort((a, b) => b[1].length - a[1].length)) {
    const pct = ((rows.length / urls.length) * 100).toFixed(1);
    console.log(`${state} — ${rows.length} (${pct}%)`);
    for (const row of rows.slice(0, 5)) {
      console.log(`    ${row.url.replace("https://www.ibgram.com", "")}  last crawled ${row.crawled}`);
    }
  }
}

async function main() {
  const [command = "status", arg] = process.argv.slice(2);
  const auth = await token();
  if (command === "status") await status(auth);
  else if (command === "resubmit") await resubmit(auth);
  else if (command === "check") await check(auth, Number(arg) || 100);
  else {
    console.error("usage: inspect.ts status | resubmit | check [sampleSize]");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
