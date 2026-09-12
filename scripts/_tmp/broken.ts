import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
(async () => {
  const posts = await p.blogPost.findMany({
    where: { status: "published" },
    select: { id: true, slug: true, title: true, indexFlag: true },
  });
  const badSlug = posts.filter((b) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(b.slug));
  console.log(`published blog posts: ${posts.length} | slugs that are NOT url-safe: ${badSlug.length}`);
  badSlug.forEach((b) => console.log(`   id=${b.id}\n     slug : ${JSON.stringify(b.slug)}\n     title: ${b.title}`));

  const tutors = await p.tutor.findMany({ select: { id: true, slug: true, name: true, status: true, isPublished: true } as never }).catch(async () => {
    return await p.tutor.findMany({ select: { id: true, slug: true, name: true } });
  });
  const want = ["ck-gaurav-ib-igcse-maths-tutor", "neha-gupta"];
  console.log(`\ntutors in DB: ${tutors.length}`);
  for (const w of want) {
    const t = (tutors as Array<Record<string, unknown>>).find((x) => x.slug === w);
    console.log(`   ${w} -> ${t ? JSON.stringify(t) : "NOT FOUND in tutor table"}`);
  }
  await p.$disconnect();
})();
