// Builds the internal link graph for the two page stores that shipped with
// internalLinks: [] - 377 Gurgaon keyword pages and 100 India keyword pages.
//
// A live URL Inspection sample showed 29% of sitemap URLs "Discovered - currently
// not indexed" with lastCrawlTime "never": Google has the URL from the sitemap and
// will not spend crawl budget reaching it. Pages with no inbound link stay that way
// however good the copy is, which is why these two stores never indexed well.
//
//   node scripts/seo/build-links.mjs           dry run
//   node scripts/seo/build-links.mjs --write
import fs from "node:fs";

const WRITE = process.argv.includes("--write");
const SITE = "https://www.ibgram.com";
const OUT_MIN = 8, OUT_MAX = 12, IN_MIN = 4;

const STORES = [
  { file: "src/lib/gurgaon-keywords/pages.json", money: {
      IB: [["/ib-tutors/gurugram/", "IB home tutors in Gurgaon"], ["/programmes/myp/", "IB MYP tutors, criteria A to D"], ["/tutors/", "Browse verified IB tutors"]],
      IGCSE: [["/igcse/", "IGCSE tutoring at IB Gram"], ["/ib-tutors/gurugram/", "IB and IGCSE tutors in Gurgaon"], ["/tutors/", "Browse verified IGCSE tutors"]],
      both: [["/ib-tutors/gurugram/", "IB and IGCSE tutors in Gurgaon"], ["/gurgaon/", "All Gurgaon tutoring pages"], ["/tutors/", "Browse verified tutors"]] } },
  { file: "src/lib/india-keywords/pages.json", money: {
      IB: [["/ib-tutors/", "IB tutors across India"], ["/programmes/myp/", "IB MYP tutors, criteria A to D"], ["/tutors/", "Browse verified IB tutors"]],
      IGCSE: [["/igcse/", "IGCSE tutoring at IB Gram"], ["/ib-tutors/", "IB and IGCSE tutors across India"], ["/tutors/", "Browse verified IGCSE tutors"]],
      both: [["/ib-tutors/", "IB and IGCSE tutors across India"], ["/tutors/", "Browse verified tutors"], ["/igcse/", "IGCSE tutoring at IB Gram"]] } },
];

const STOP = new Set(["in", "the", "for", "and", "a", "to", "gurgaon", "india"]);
const tokens = (slug) => new Set(slug.split("-").filter((t) => t && !STOP.has(t)));
const boardOf = (slug) => (/ib-igcse|international/.test(slug) ? "both" : /(^|-)igcse/.test(slug) ? "IGCSE" : "IB");
const jaccard = (a, b) => { let i = 0; for (const t of a) if (b.has(t)) i++; return i / (a.size + b.size - i); };

let grandLinks = 0, grandPages = 0;
for (const store of STORES) {
  if (!fs.existsSync(store.file)) { console.log(`${store.file}: missing, skipped`); continue; }
  const pages = JSON.parse(fs.readFileSync(store.file, "utf8"));
  const meta = pages.map((p) => ({ p, slug: p.slug, tok: tokens(p.slug), board: boardOf(p.slug), url: new URL(p.canonicalUrl).pathname }));
  const chosen = new Map(meta.map((m) => [m.slug, []]));
  const inbound = new Map(meta.map((m) => [m.slug, 0]));

  for (const m of meta) {
    const ranked = meta.filter((o) => o.slug !== m.slug)
      .map((o) => ({ o, s: jaccard(m.tok, o.tok) + (o.board === m.board ? 0.15 : 0) }))
      .sort((a, b) => b.s - a.s).slice(0, OUT_MIN - 2);
    for (const { o } of ranked) {
      chosen.get(m.slug).push({ url: o.url, anchor: o.p.breadcrumbTitle || o.p.h1 || o.p.primaryKeyword, targetPageId: o.p.pageId, sibling: o.slug });
      inbound.set(o.slug, inbound.get(o.slug) + 1);
    }
  }
  // Guarantee inbound coverage: "most similar" alone leaves odd pages orphaned,
  // which is the exact failure being fixed.
  for (const m of [...meta].sort((a, b) => inbound.get(a.slug) - inbound.get(b.slug))) {
    if (inbound.get(m.slug) >= IN_MIN) continue;
    const donors = meta.filter((o) => o.slug !== m.slug && chosen.get(o.slug).length < OUT_MAX && !chosen.get(o.slug).some((l) => l.sibling === m.slug))
      .map((o) => ({ o, s: jaccard(m.tok, o.tok) + (o.board === m.board ? 0.15 : 0) })).sort((a, b) => b.s - a.s);
    for (const { o } of donors) {
      if (inbound.get(m.slug) >= IN_MIN) break;
      chosen.get(o.slug).push({ url: m.url, anchor: m.p.breadcrumbTitle || m.p.h1 || m.p.primaryKeyword, targetPageId: m.p.pageId, sibling: m.slug });
      inbound.set(m.slug, inbound.get(m.slug) + 1);
    }
  }

  let total = 0;
  for (const m of meta) {
    const links = [...chosen.get(m.slug), ...store.money[m.board].map(([url, anchor]) => ({ url, anchor, targetPageId: null, sibling: null }))];
    m.p.internalLinks = links.map((l, i) => ({
      linkId: `${m.p.pageId}_L${i + 1}`,
      sourcePageId: m.p.pageId,
      ...(l.targetPageId ? { targetPageId: l.targetPageId } : {}),
      targetUrl: `${SITE}${l.url}`,
      anchorText: l.anchor,
      linkContext: l.sibling ? "Closest related tutoring page." : "Main tutoring page for this board.",
      linkType: "card", priority: l.sibling ? "medium" : "high",
      followStatus: "follow", isCrawlable: true, linkStatus: "active",
    }));
    total += m.p.internalLinks.length;
  }
  const ins = [...inbound.values()];
  const live = new Set(meta.map((m) => m.url));
  const hubs = new Set(Object.values(store.money).flat().map(([u]) => u));
  const broken = pages.flatMap((p) => p.internalLinks).map((l) => new URL(l.targetUrl).pathname).filter((u) => !live.has(u) && !hubs.has(u));
  console.log(`\n${store.file}`);
  console.log(`  pages ${pages.length}  links ${total} (avg ${(total / pages.length).toFixed(1)})`);
  console.log(`  inbound min/max/avg ${Math.min(...ins)}/${Math.max(...ins)}/${(ins.reduce((a, b) => a + b, 0) / ins.length).toFixed(1)}   orphans ${ins.filter((n) => n === 0).length}`);
  console.log(`  broken links ${broken.length}  self-links ${pages.filter((p) => p.internalLinks.some((l) => l.targetUrl === p.canonicalUrl)).length}`);
  grandLinks += total; grandPages += pages.length;
  if (WRITE) { fs.writeFileSync(store.file, JSON.stringify(pages, null, 1).replace(/\r\n/g, "\n") + "\n", "utf8"); console.log(`  wrote`); }
}
console.log(`\nTOTAL: ${grandLinks} links across ${grandPages} pages`);
if (!WRITE) console.log("dry run - pass --write to apply");
