// Compares every rewritten post on disk against the row the site actually serves.
// The rewrite is only live to the extent write-db.ts has been run; this reports
// the gap rather than assuming it was deployed.
const fs = require("node:fs");
const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();
const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;
(async () => {
  const files = fs.readdirSync("scripts/blog-rewrite/posts").filter((f) => f.endsWith(".md"));
  const rows = await p.blogPost.findMany({ select: { slug: true, body: true, metaTitle: true, metaDescription: true } });
  const db = new Map(rows.map((r) => [r.slug, r]));
  let behind = 0, missing = 0, ahead = 0, same = 0, linksLost = 0;
  const worst = [];
  for (const f of files) {
    const raw = fs.readFileSync(`scripts/blog-rewrite/posts/${f}`, "utf8");
    const parts = raw.split(/^---$/m);
    let fm = {}; try { fm = JSON.parse(parts[1]); } catch {}
    const slug = fm.slug ?? f.replace(/\.md$/, "");
    const mdBody = parts.slice(2).join("---").trim();
    const row = db.get(slug);
    if (!row) { missing++; worst.push([-1, slug, 0, words(mdBody), 0]); continue; }
    const dw = words(row.body ?? ""), mw = words(mdBody);
    const mdLinks = (mdBody.match(/\]\(\//g) ?? []).length;
    const dbLinks = ((row.body ?? "").match(/\]\(\//g) ?? []).length;
    if (dbLinks < mdLinks) linksLost += mdLinks - dbLinks;
    if (dw === mw) same++; else if (dw < mw) { behind++; worst.push([mw - dw, slug, dw, mw, mdLinks - dbLinks]); } else ahead++;
  }
  console.log(`posts on disk            : ${files.length}`);
  console.log(`DB row shorter than disk : ${behind}`);
  console.log(`DB row longer than disk  : ${ahead}`);
  console.log(`identical                : ${same}`);
  console.log(`no DB row at all         : ${missing}`);
  console.log(`internal links on disk but NOT live : ${linksLost}`);
  console.log(`\nbiggest content gaps (words missing from the live page):`);
  console.log(`  gap   live   disk  links-lost  slug`);
  for (const [g, s, dw, mw, ll] of worst.sort((a, b) => b[0] - a[0]).slice(0, 20))
    console.log(`  ${String(g).padStart(5)} ${String(dw).padStart(6)} ${String(mw).padStart(6)} ${String(ll).padStart(11)}  ${s}`);
  await p.$disconnect();
})();
