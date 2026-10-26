// Read-only: what the two biggest CTR-failure pages actually contain right now.
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const slugs = ["ib-dp-core-planning-timeline", "ib-myp-maths-criteria-a-b-c-d-explained-for-parents"];
for (const slug of slugs) {
  const p = await db.blogPost.findFirst({ where: { slug }, select: { slug: true, title: true, metaTitle: true, metaDescription: true, excerpt: true, body: true, metaKeywords: true } });
  if (!p) { console.log(`\n### ${slug}: NOT FOUND in blogPost`); continue; }
  const h2s = [...p.body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
  console.log(`\n### ${slug}`);
  console.log(`  metaTitle   : ${p.metaTitle ?? "(null)"}`);
  console.log(`  title       : ${p.title}`);
  console.log(`  metaDesc(${(p.metaDescription ?? "").length}): ${p.metaDescription ?? "(null)"}`);
  console.log(`  words       : ${p.body.split(/\s+/).filter(Boolean).length}`);
  console.log(`  has FAQ H2  : ${/^##\s+(frequently asked questions|faqs?)/im.test(p.body)}`);
  console.log(`  keywords    : ${(p.metaKeywords ?? []).join(", ") || "(none)"}`);
  console.log(`  H2s         :`);
  for (const h of h2s) console.log(`     - ${h}`);
  console.log(`  opening     : ${p.body.replace(/^#.*$/m, "").trim().slice(0, 320)}`);
}
const myp = await db.generatedPage.findFirst({ where: { canonicalUrl: { contains: "/programmes/myp/" } }, select: { metaTitle: true, metaDescription: true, updatedAt: true, faqs: true } });
console.log(`\n### /programmes/myp/ (generatedPage row)`);
console.log(myp ? `  T: ${myp.metaTitle}\n  D: ${myp.metaDescription}\n  updated: ${myp.updatedAt}\n  faqs: ${Array.isArray(myp.faqs) ? myp.faqs.length : typeof myp.faqs}` : "  NOT FOUND");
await db.$disconnect();
