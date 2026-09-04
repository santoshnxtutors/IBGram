import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
const paths = ["/igcse-tutors/gurugram/accounting/","/igcse-tutors/gurugram/sectors/sector-56/","/igcse-tutors/gurugram/societies/dlf-aralias/","/ib-tutors/gurugram/chemistry/","/igcse-tutors/gurugram/","/igcse-tutors/gurugram/areas/dlf-phase-1/","/ib-tutors/gurugram/schools/pathways-world-school/"];
(async () => {
  for (const fp of paths) {
    const r = await p.generatedPage.findFirst({ where: { fullPath: fp }, include: { _count: { select: { blocks: true, faqs: true } } } });
    console.log(fp, "->", r ? `status=${r.status} indexFlag=${r.indexFlag} wc=${r.contentWordCount} q=${r.qualityScore} blocks=${r._count.blocks} faqs=${r._count.faqs} sitemapIncluded=${r.sitemapIncluded}` : "NO DB ROW");
  }
  const g = await p.generatedPage.count({ where: { fullPath: { contains: "gurugram" } } });
  const gShell = await p.generatedPage.count({ where: { fullPath: { contains: "gurugram" }, blocks: { none: {} } } });
  console.log(`\nDB rows containing gurugram: ${g} (of which empty shells: ${gShell})`);
  await p.$disconnect();
})();
