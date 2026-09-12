import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
(async () => {
  // same filters the sitemap helpers use, without unstable_cache (which no-ops under tsx)
  const tutors = await p.tutor.count({ where: { deletedAt: null, status: "active", approved: true } });
  const dbPages = await p.generatedPage.count({
    where: { status: "published", indexFlag: "index", sitemapIncluded: true, contentWordCount: { gte: 800 }, canonicalTarget: null },
  });
  console.log(`tutor profiles eligible : ${tutors}`);
  console.log(`DB generated pages      : ${dbPages}`);
  console.log(`\nTRUE SITEMAP ≈ 2109 + ${tutors} + ${dbPages} (minus any overlap) = ~${2109 + tutors + dbPages}`);
  await p.$disconnect();
})();
