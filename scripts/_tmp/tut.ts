import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
(async () => {
  for (const slug of ["ck-gaurav-ib-igcse-maths-tutor", "neha-gupta"]) {
    const t = await p.tutor.findFirst({ where: { slug }, select: { id: true, slug: true, displayName: true, status: true, approved: true, deletedAt: true } });
    console.log(slug, "->", t ? JSON.stringify(t) : "NOT IN DB");
  }
  const live = await p.tutor.count({ where: { deletedAt: null, status: "active", approved: true } });
  console.log("\ntutors matching the sitemap filter:", live);
  // blog slugs
  const posts = await p.blogPost.findMany({ where: { status: "published" }, select: { id: true, slug: true, title: true } });
  const bad = posts.filter((b) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(b.slug));
  console.log(`\npublished posts: ${posts.length} | non-url-safe slugs: ${bad.length}`);
  bad.forEach((b) => console.log(`   id=${b.id}\n     slug : ${JSON.stringify(b.slug)}\n     title: ${b.title}`));
  await p.$disconnect();
})();
