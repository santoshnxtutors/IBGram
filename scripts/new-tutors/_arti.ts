import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
(async () => {
  const t = await prisma.tutor.findFirst({ where: { slug: "arti-goswami-ib-english-french-tutor" }, include: { profile: true, subjects: true, curriculums: true, locations: true } });
  console.log(JSON.stringify(t, null, 1));
  await prisma.$disconnect();
})();
