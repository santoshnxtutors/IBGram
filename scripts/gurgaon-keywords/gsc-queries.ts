/**
 * Real Search Console queries for ibgram.com, used to choose the meta keywords on the Gurgaon
 * pages instead of guessing them. Service-account JWT signed with node:crypto, so no dependency.
 *
 * Run: npx tsx scripts/gurgaon-keywords/gsc-queries.ts [days]
 * Writes: tmp/gurgaon-hub-keywords/gsc-queries.json (every row), prints the Gurgaon-related ones.
 */
import { createSign } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const KEY_FILE = path.join(ROOT, "Iamuseragent.json");
const OUT_DIR = path.join(ROOT, "tmp", "gurgaon-hub-keywords");
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
// Both forms are tried: a domain property and a URL-prefix property are different siteUrls.
const SITES = ["sc-domain:ibgram.com", "https://www.ibgram.com/"];

interface Row {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

const b64 = (input: string | Buffer) =>
  Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

async function accessToken(): Promise<string> {
  const key = JSON.parse(readFileSync(KEY_FILE, "utf8")) as { client_email: string; private_key: string };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: key.client_email, scope: SCOPE, aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 };
  const unsigned = `${b64(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64(JSON.stringify(claim))}`;
  const signature = b64(createSign("RSA-SHA256").update(unsigned).sign(key.private_key));

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${signature}` }),
  });
  const json = (await res.json()) as { access_token?: string; error_description?: string };
  if (!json.access_token) throw new Error(`token request failed: ${json.error_description ?? JSON.stringify(json)}`);
  return json.access_token;
}

async function queries(token: string, site: string, startDate: string, endDate: string): Promise<Row[]> {
  const res = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ startDate, endDate, dimensions: ["query"], rowLimit: 25000, dataState: "all" }),
  });
  if (!res.ok) throw new Error(`${site}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  return ((await res.json()) as { rows?: Row[] }).rows ?? [];
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

async function main(): Promise<void> {
  const days = Number(process.argv[2] ?? 90);
  const end = new Date(Date.now() - 3 * 86400000); // Search Console lags a few days.
  const start = new Date(end.getTime() - days * 86400000);
  const token = await accessToken();

  let rows: Row[] = [];
  let used = "";
  for (const site of SITES) {
    try {
      rows = await queries(token, site, iso(start), iso(end));
      used = site;
      break;
    } catch (error) {
      console.log(`  ${(error as Error).message}`);
    }
  }
  if (!used) throw new Error("no Search Console property readable by this service account");

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(path.join(OUT_DIR, "gsc-queries.json"), JSON.stringify({ site: used, startDate: iso(start), endDate: iso(end), rows }, null, 1));

  const local = rows.filter((r) => /gurgaon|gurugram|dlf|sohna|sushant|palam|manesar|golf course/i.test(r.keys[0]));
  const totals = (list: Row[]) => list.reduce((sum, r) => sum + r.impressions, 0);
  console.log(`${used} ${iso(start)}..${iso(end)}: ${rows.length} queries, ${totals(rows)} impressions`);
  console.log(`Gurgaon-related: ${local.length} queries, ${totals(local)} impressions\n`);
  console.log("query | clicks | impressions | avg position");
  for (const r of local.sort((a, b) => b.impressions - a.impressions).slice(0, 80)) {
    console.log(`${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${r.position.toFixed(1)}`);
  }
}

main().catch((error: Error) => {
  console.error(error.message);
  process.exitCode = 1;
});
