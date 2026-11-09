/**
 * Inbound internal-link count for every sitemap URL, bucketed by content set.
 *
 * Why this exists next to link-graph.cjs: that script reads `internalLinks` out of the JSON
 * page stores, which covers only the sets whose links are *stored*. Half the site's links are
 * *computed* at render time (getUaeSeoRelated, getMumbaiChildLinks, getGurgaonSeoRelated...), so
 * reading JSON alone reported 1,960 pages and missed ~7,500. This one calls the same helpers the
 * routes call, plus a literal-href scan of src/, which is the only way to see what actually ships.
 *
 *   npx tsx scripts/gsc/orphans.ts            # counts per set
 *   npx tsx scripts/gsc/orphans.ts --list uae # first 40 orphan paths in one bucket
 */
import fs from "node:fs";
import path from "node:path";

import { getAllGeneratedPages } from "@/lib/generated-pages/store";
import { citySeoSlugs, getCitySeoRelated } from "@/lib/india-cities";
import { getIndiaKeywordDirectory, getIndiaKeywordPage, indiaKeywordSlugs } from "@/lib/india-keywords";
import { countrySeoSlugs, getCountryFooterLinks } from "@/lib/country-seo";
import {
  getGurgaonHubKeywordDirectory,
  getGurgaonHubKeywordPage,
  getGurgaonKeywordPage,
  gurgaonHubKeywordSlugs,
  gurgaonKeywordSlugs,
} from "@/lib/gurgaon-keywords";
import { getAllGurgaonSeoPages, getGurgaonSeoDirectory, getGurgaonSeoRelated } from "@/lib/gurgaon-seo";
import { getIgcseSubjectPage, liveIgcseSubjectSlugs } from "@/lib/igcse-subjects";
import {
  cityWideSeedFor,
  getMumbaiChildLinks,
  getMumbaiSeoRelated,
  mumbaiSeoSlugs,
} from "@/lib/mumbai-seo";
import { getTutorJobDirectoryLinks, getTutorJobSeoPage, tutorJobSeoSlugs } from "@/lib/tutor-jobs-seo";
import { getUaeChildLinks, getUaeParentLink, getUaeSeoMeta, getUaeSeoRelated, uaeSeoSlugs } from "@/lib/uae-seo";
import { getAllCitySeoPages } from "@/lib/seo/city-pages";

const ROOT = process.cwd();

/** "/Foo/Bar" and "https://www.ibgram.com/foo/bar?x#y" both collapse to "/foo/bar/". */
function norm(href: string | undefined | null): string | null {
  if (!href) return null;
  let p = String(href).trim();
  p = p.replace(/^https?:\/\/(www\.)?ibgram\.com/i, "");
  if (!p.startsWith("/")) return null;
  p = p.split("#")[0].split("?")[0].toLowerCase();
  if (p === "") p = "/";
  if (!p.endsWith("/")) p += "/";
  return p;
}

const inbound = new Map<string, number>();
function add(href: string | undefined | null) {
  const p = norm(href);
  if (!p) return;
  inbound.set(p, (inbound.get(p) ?? 0) + 1);
}

/* ---------------------------------------------------------------- */
/* 1. Literal hrefs anywhere in shipped source (header, footer,     */
/*    hand-written hubs, hard-coded strips).                        */
/* ---------------------------------------------------------------- */
const SKIP = ["src/app/admin", "src/lib/admin", "src/components/admin"];
function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    const rel = path.relative(ROOT, full).replace(/\\/g, "/");
    if (SKIP.some((s) => rel.startsWith(s))) continue;
    if (e.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(e.name)) out.push(full);
  }
  return out;
}
let literalFiles = 0;
for (const f of walk(path.join(ROOT, "src"))) {
  literalFiles += 1;
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/(?:href|targetUrl|url|path)\s*[=:]\s*\{?["'`](\/[^"'`{}\s]*)["'`]/g)) add(m[1]);
}

/* ---------------------------------------------------------------- */
/* 2. Links the routes compute at render time.                      */
/* ---------------------------------------------------------------- */

// /uae/[...path] — parent + children + related (directoryFor in the route).
for (const slug of uaeSeoSlugs) {
  const meta = getUaeSeoMeta(slug);
  add(getUaeParentLink(slug)?.href);
  for (const l of getUaeChildLinks(slug, meta?.kind === "city" ? 240 : 18)) add(l.href);
  for (const l of getUaeSeoRelated(slug, 12)) add(l.href);
}
// The /uae/ hub itself is served by the root route, which passes no directory today.

// /mumbai/[slug]
for (const slug of mumbaiSeoSlugs) {
  for (const l of getMumbaiSeoRelated(slug, 6)) add(l.href);
  for (const g of [...getMumbaiChildLinks(slug), ...cityWideSeedFor(slug)]) for (const l of g.links) add(l.href);
}

// Gurgaon workbook pages (root level + /gurgaon/ expansion)
for (const page of getAllGurgaonSeoPages()) {
  for (const l of getGurgaonSeoRelated(page.slug, page.locality, 4)) add(l.href);
}
// /gurgaon/ hub directory
for (const g of [...getGurgaonHubKeywordDirectory(), ...getGurgaonSeoDirectory()]) for (const l of g.links) add(l.href);
// /india/ hub directory
for (const g of getIndiaKeywordDirectory()) for (const l of g.links) add(l.href);
// Indian city pages: the nearby-city ring the root route passes as CountryLanding's directory.
for (const slug of citySeoSlugs) for (const l of getCitySeoRelated(slug, 12)) add(l.href);
// /courses/<curriculum>/<subject>/ — SIBLING_LINKS + the IB programme pages, emitted by
// subject-content-page.ts as template strings the literal scan cannot see.
for (const c of ["ib", "igcse"]) {
  for (const s of ["mathematics", "sciences", "individuals", "english", "language", "arts"]) add(`/courses/${c}/${s}/`);
  if (c === "ib") for (const s of ["pyp", "myp", "dp", "cp"]) add(`/courses/${c}/${s}/`);
}
// footer country rail + /join-as-tutor/ job rail
for (const l of getCountryFooterLinks()) add(`/${l.slug}/`);
for (const l of getTutorJobDirectoryLinks()) add(l.href);

// Stored internalLinks, for the sets whose renderer emits them (GeneratedPageRenderer,
// CityInternalLinks).
function addStored(p: { internalLinks?: Array<{ targetUrl?: string }>; relatedPageSuggestions?: unknown } | undefined) {
  if (!p) return;
  for (const l of p.internalLinks ?? []) add(l.targetUrl);
}
for (const slug of gurgaonKeywordSlugs) addStored(getGurgaonKeywordPage(slug));
for (const slug of gurgaonHubKeywordSlugs) addStored(getGurgaonHubKeywordPage(slug));
for (const slug of indiaKeywordSlugs) addStored(getIndiaKeywordPage(slug));
for (const slug of liveIgcseSubjectSlugs) addStored(getIgcseSubjectPage(slug) ?? undefined);
for (const p of getAllGeneratedPages()) addStored(p);
for (const p of getAllCitySeoPages()) addStored(p);
// NOTE: igcse-city-pages carry internalLinks but IgcseTutorAvailabilityPage never renders them,
// so they are deliberately NOT added here. india-cities and country-seo pages render through
// CountryLanding with no `directory`, so they emit nothing either.
for (const slug of tutorJobSeoSlugs) void getTutorJobSeoPage(slug); // landing links are literal hrefs

/* ---------------------------------------------------------------- */
/* 3. Bucket the sitemap and report.                                */
/* ---------------------------------------------------------------- */
const sitemap: string[] = JSON.parse(fs.readFileSync(path.join(ROOT, "tmp/sitemap-urls.json"), "utf8"));
const citySet = new Set(citySeoSlugs.map((s) => s.toLowerCase()));
const countrySet = new Set(countrySeoSlugs.map((s) => s.toLowerCase()));
const jobSet = new Set(tutorJobSeoSlugs.map((s) => s.toLowerCase()));
const gurKwSet = new Set(gurgaonKeywordSlugs.map((s) => s.toLowerCase()));

function bucket(p: string): string {
  const segs = p.split("/").filter(Boolean);
  const head = segs[0] ?? "";
  if (head === "uae") return "uae";
  if (head === "mumbai") return segs.length === 1 ? "india-cities" : "mumbai";
  if (head === "gurgaon") return "gurgaon-hub";
  if (head === "ib-tutors") return "ib-tutors";
  if (head === "igcse-tutors") return "igcse-tutors";
  if (head === "igcse-pages") return "igcse-pages";
  if (head === "igcse") return "igcse-subjects";
  if (head === "india") return "india-keywords";
  if (head === "blog") return "blog";
  if (head === "tutor" || head === "tutor-profile" || head === "tutor-pages") return "tutor";
  if (head === "jobs") return "jobs";
  if (head === "courses" || head === "programmes") return "courses";
  if (segs.length === 1) {
    if (citySet.has(head)) return "india-cities";
    if (countrySet.has(head)) return "country";
    if (jobSet.has(head)) return "tutor-jobs";
    if (gurKwSet.has(head)) return "gurgaon-keywords";
    if (head === "") return "static";
    return "root-level";
  }
  return "other";
}

const rows = new Map<string, { total: number; orphans: string[] }>();
for (const u of sitemap) {
  const p = norm(u);
  if (!p) continue;
  const b = bucket(p);
  const row = rows.get(b) ?? { total: 0, orphans: [] };
  row.total += 1;
  if (!inbound.has(p)) row.orphans.push(p);
  rows.set(b, row);
}

const listOnly = process.argv.includes("--list") ? process.argv[process.argv.indexOf("--list") + 1] : null;
if (listOnly) {
  for (const o of (rows.get(listOnly)?.orphans ?? []).slice(0, 40)) console.log(o);
  process.exit(0);
}

console.log(`${literalFiles} source files scanned, ${inbound.size} distinct link targets found\n`);
console.log("set              sitemap  orphans   %");
let total = 0;
let orphans = 0;
for (const [b, r] of [...rows].sort((a, b2) => b2[1].orphans.length - a[1].orphans.length)) {
  total += r.total;
  orphans += r.orphans.length;
  console.log(
    `${b.padEnd(16)} ${String(r.total).padStart(7)} ${String(r.orphans.length).padStart(8)} ${String(Math.round((r.orphans.length / r.total) * 100)).padStart(3)}%`,
  );
}
console.log(`${"TOTAL".padEnd(16)} ${String(total).padStart(7)} ${String(orphans).padStart(8)}`);
console.log(
  "",
  "Blind spot: blog, jobs and tutor pages come from the database, so their links cannot be",
  "seen statically. All three hubs emit a crawlable anchor per row (the /blog/ All articles nav,",
  "JobsClient /jobs/<slug>/ links, the /tutors/ profile + subject-page nav), so those rows are",
  "listed as orphans above and are not.",
);
