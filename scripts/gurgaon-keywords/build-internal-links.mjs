// Fills internalLinks on the Gurgaon keyword pages.
//
// All 154 survivors shipped with internalLinks: [], so GeneratedInternalLinks
// rendered nothing and every one of them was reachable only from the /gurgaon/
// directory. Pages with no inbound links sit deep however good the copy is, which
// is why this set averaged position 23.
//
// Outbound: nearest topical siblings by slug overlap, plus the money pages the
// board implies. Then a coverage pass guarantees every page RECEIVES links too -
// picking only "most similar" leaves the odd pages with zero inbound, which is
// the problem being fixed.
//
//   node scripts/gurgaon-keywords/build-internal-links.mjs           dry run
//   node scripts/gurgaon-keywords/build-internal-links.mjs --write   apply
import fs from "node:fs";
import path from "node:path";

const WRITE = process.argv.includes("--write");
const pagesPath = path.join(process.cwd(), "src/lib/gurgaon-keywords/pages.json");
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));
const pathOf = (p) => new URL(p.canonicalUrl).pathname;

const OUT_MIN = 8, OUT_MAX = 12, IN_MIN = 4;
const STOP = new Set(["in", "gurgaon", "the", "for", "and", "a", "to"]);
const tokens = (slug) => new Set(slug.split("-").filter((t) => t && !STOP.has(t)));
const boardOf = (slug) => (/ib-igcse|international/.test(slug) ? "both" : /(^|-)igcse/.test(slug) ? "IGCSE" : "IB");

const meta = pages.map((p) => ({ p, slug: p.slug, tok: tokens(p.slug), board: boardOf(p.slug), url: pathOf(p) }));
const jaccard = (a, b) => {
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
};

/** Hand-picked destinations that earn money or need the equity, by board. */
const MONEY = {
  IB: [["/ib-tutors/gurugram/", "IB home tutors in Gurgaon"], ["/programmes/myp/", "IB MYP tutors, criteria A to D"], ["/tutors/", "Browse verified IB tutors"]],
  IGCSE: [["/igcse/", "IGCSE tutoring at IB Gram"], ["/ib-tutors/gurugram/", "IB and IGCSE tutors in Gurgaon"], ["/tutors/", "Browse verified IGCSE tutors"]],
  both: [["/ib-tutors/gurugram/", "IB and IGCSE tutors in Gurgaon"], ["/gurgaon/", "All Gurgaon tutoring pages"], ["/tutors/", "Browse verified tutors"]],
};

const chosen = new Map(meta.map((m) => [m.slug, []]));
const inbound = new Map(meta.map((m) => [m.slug, 0]));

for (const m of meta) {
  const ranked = meta
    .filter((o) => o.slug !== m.slug)
    .map((o) => ({ o, s: jaccard(m.tok, o.tok) + (o.board === m.board ? 0.15 : 0) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, OUT_MIN - 2);
  for (const { o } of ranked) {
    chosen.get(m.slug).push({ url: o.url, anchor: o.p.breadcrumbTitle || o.p.h1 || o.p.primaryKeyword, targetPageId: o.p.pageId, sibling: o.slug });
    inbound.set(o.slug, inbound.get(o.slug) + 1);
  }
}

// Coverage pass: every page must be linked to from at least IN_MIN others.
for (const m of [...meta].sort((a, b) => inbound.get(a.slug) - inbound.get(b.slug))) {
  if (inbound.get(m.slug) >= IN_MIN) continue;
  const donors = meta
    .filter((o) => o.slug !== m.slug && chosen.get(o.slug).length < OUT_MAX && !chosen.get(o.slug).some((l) => l.sibling === m.slug))
    .map((o) => ({ o, s: jaccard(m.tok, o.tok) + (o.board === m.board ? 0.15 : 0) }))
    .sort((a, b) => b.s - a.s);
  for (const { o } of donors) {
    if (inbound.get(m.slug) >= IN_MIN) break;
    chosen.get(o.slug).push({ url: m.url, anchor: m.p.breadcrumbTitle || m.p.h1 || m.p.primaryKeyword, targetPageId: m.p.pageId, sibling: m.slug });
    inbound.set(m.slug, inbound.get(m.slug) + 1);
  }
}

const SITE = "https://www.ibgram.com";
let total = 0;
for (const m of meta) {
  const links = [...chosen.get(m.slug), ...MONEY[m.board].map(([url, anchor]) => ({ url, anchor, targetPageId: null, sibling: null }))];
  m.p.internalLinks = links.map((l, i) => ({
    linkId: `${m.p.pageId}_L${i + 1}`,
    sourcePageId: m.p.pageId,
    ...(l.targetPageId ? { targetPageId: l.targetPageId } : {}),
    targetUrl: `${SITE}${l.url}`,
    anchorText: l.anchor,
    linkContext: l.sibling ? "Closest related Gurgaon tutoring page." : "Main tutoring page for this board.",
    linkType: "card",
    priority: l.sibling ? "medium" : "high",
    followStatus: "follow",
    isCrawlable: true,
    linkStatus: "active",
  }));
  total += m.p.internalLinks.length;
}

const ins = [...inbound.values()];
console.log(`pages                 : ${pages.length}`);
console.log(`links created         : ${total}  (avg ${(total / pages.length).toFixed(1)} per page)`);
console.log(`inbound min / max / avg: ${Math.min(...ins)} / ${Math.max(...ins)} / ${(ins.reduce((a, b) => a + b, 0) / ins.length).toFixed(1)}`);
console.log(`pages with 0 inbound  : ${ins.filter((n) => n === 0).length}`);
const live = new Set(meta.map((m) => m.url));
const broken = pages.flatMap((p) => p.internalLinks).filter((l) => { const u = new URL(l.targetUrl).pathname; return u.startsWith("/gurgaon/") || /^\/[a-z-]+-gurgaon\/$/.test(u) ? !live.has(u) : false; });
console.log(`links to retired pages: ${broken.length}`);
console.log(`\nsample (${meta[0].slug}):`);
for (const l of meta[0].p.internalLinks.slice(0, 5)) console.log(`   ${l.anchorText}  ->  ${new URL(l.targetUrl).pathname}`);

if (!WRITE) { console.log("\ndry run - pass --write to apply"); process.exit(0); }
fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 1).replace(/\r\n/g, "\n") + "\n", "utf8");
console.log(`\nwrote ${pagesPath}`);
