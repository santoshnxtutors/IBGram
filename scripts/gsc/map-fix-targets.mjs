// Maps each fixable low-ranking page to the source file that owns it, so the
// rewrite lands in the right store instead of being guessed at.
import fs from "node:fs";
import path from "node:path";

const fix = JSON.parse(fs.readFileSync("tmp/fixable-pages.json", "utf8"));
const loc = new Map();

const addJson = (f) => {
  try {
    const j = JSON.parse(fs.readFileSync(f, "utf8"));
    const a = Array.isArray(j) ? j : (j.pages ?? Object.values(j));
    for (const p of a) if (p && p.canonicalUrl) {
      loc.set(new URL(p.canonicalUrl).pathname, { file: f, kind: "json", slug: p.slug, title: p.metaTitle ?? null });
    }
  } catch {}
};
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith(".json")) addJson(f);
  }
};
walk("src/lib");

// Country landing pages and IGCSE subject pages are TS modules, not JSON rows.
const tsDirs = [
  ["src/lib/country-seo/countries", (slug) => `/${slug}/`],
  ["src/lib/igcse-subjects/subjects", (slug) => `/igcse/subject/${slug}/`],
];
for (const [dir, toPath] of tsDirs) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const slug = f.replace(/\.ts$/, "");
    const p = toPath(slug);
    if (!loc.has(p)) loc.set(p, { file: path.join(dir, f), kind: "ts", slug, title: null });
  }
}

const out = [], unmapped = [];
for (const p of fix) {
  const m = loc.get(p.url);
  if (!m) { unmapped.push(p.url); continue; }
  out.push({
    url: p.url, position: Math.round(p.position), impressions: p.impressions, clicks: p.clicks,
    targetQuery: p.top ? p.top.query : null,
    file: m.file.split(path.sep).join("/"), kind: m.kind, slug: m.slug, currentTitle: m.title,
  });
}

const byDir = {};
for (const p of out) { const k = p.file.split("/").slice(0, -1).join("/"); byDir[k] = (byDir[k] ?? 0) + 1; }
console.log(`mapped: ${out.length}   unmapped: ${unmapped.length}`);
console.log("\nby source dir:");
for (const [k, v] of Object.entries(byDir).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);
console.log("\nunmapped (DB-backed blog/tutor pages, not editable in code):");
for (const u of unmapped.slice(0, 12)) console.log(`  ${u}`);
fs.writeFileSync("tmp/fix-targets.json", JSON.stringify(out, null, 1).replace(/\r\n/g, "\n"), "utf8");
console.log(`\nwrote tmp/fix-targets.json: ${out.length}`);
