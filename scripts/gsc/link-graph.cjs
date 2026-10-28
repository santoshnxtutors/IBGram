/* eslint-disable @typescript-eslint/no-require-imports -- plain CommonJS maintenance script, run with bare node */
// Inbound internal-link counts per destination across every JSON page store.
// A page Google ranks on page 2 with no inbound links has a link problem, not a
// content problem, so this is the number that decides which fix applies.
const fs = require("node:fs"), path = require("node:path");
const dirs = ["src/lib/generated-pages/pages","src/lib/mumbai-seo/pages","src/lib/uae-seo/pages","src/lib/tutor-jobs-seo/pages"];
const files = [];
for (const d of dirs) if (fs.existsSync(d)) for (const f of fs.readdirSync(d)) if (f.endsWith(".json")) files.push(path.join(d, f));
for (const e of ["src/lib/gurgaon-keywords/pages.json"]) if (fs.existsSync(e)) files.push(e);

const norm = (u) => String(u || "").replace("https://www.ibgram.com", "") || "/";
const inbound = {}, outbound = {}, known = new Set();
let pages = 0, links = 0;
for (const f of files) {
  let j; try { j = JSON.parse(fs.readFileSync(f, "utf8")); } catch { continue; }
  for (const x of (Array.isArray(j) ? j : j.pages || [])) {
    pages++;
    const self = norm(x.canonicalUrl || x.fullPath);
    known.add(self);
    const ls = [...(x.internalLinks || []), ...(x.relatedPageSuggestions || [])];
    outbound[self] = ls.length;
    for (const l of ls) { const t = norm(l.targetUrl || l.href || l.url); inbound[t] = (inbound[t] || 0) + 1; links++; }
  }
}
module.exports = { inbound, outbound, known, pages, links };
if (require.main === module) {
  console.log(`${pages} pages, ${links} internal links, ${Object.keys(inbound).length} distinct destinations`);
  const targets = process.argv.slice(2);
  if (targets.length) {
    console.log("\ninbound links to requested targets:");
    for (const t of targets) console.log(`  ${String(inbound[t] ?? 0).padStart(5)} in / ${String(outbound[t] ?? "n-a").padStart(3)} out   ${t}`);
  }
  const orphans = [...known].filter((u) => !inbound[u]);
  console.log(`\npages in a store with ZERO inbound internal links: ${orphans.length}`);
  for (const o of orphans.slice(0, 20)) console.log("  " + o);
}
