// Apply Monique Aouad's requested profile changes (her email, 2026-09-29). About text is hers, verbatim.
//   npx tsx --env-file=.env scripts/new-tutors/monique.ts          # dry run
//   npx tsx --env-file=.env scripts/new-tutors/monique.ts --write
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const WRITE = process.argv.includes("--write");
const SLUG = "monique-aouad-online-ib-biology-tutor";

const about = [
  "Monique Aouad is a PhD-qualified Biology and Bioinformatics educator with over 12 years of teaching and academic experience in France and internationally. She offers 100% online Biology tuition to students worldwide and can teach fully in both English and French.",
  "Holding a PhD in Bioinformatics from Université Claude Bernard Lyon 1, Monique combines a strong academic background in Biology, Molecular Biology, Genetics, Genomics and Bioinformatics with extensive teaching experience. Throughout her career, she has worked with diverse student populations and academic levels, including university students, international learners and students in online learning environments.",
  "Her teaching style focuses on making complex scientific concepts clear, structured and accessible, adapting the content, pace and methods to each student's level and objectives. Lessons can include concept explanations, guided exercises, scientific reasoning, revision and exam preparation.",
  "Her academic expertise covers areas including Biology, Molecular and Cellular Biology, Genetics, Genomics, Bioinformatics and related Life Sciences subjects. Her scientific research background also allows her to help more advanced students develop skills in data interpretation, scientific reasoning and critical analysis.",
  "Monique is also available to support students following international curricula, including IB Biology, with lessons adapted to their specific programme and academic needs.",
  "Based in France and teaching entirely online, she welcomes students from anywhere in the world, with flexible scheduling across different countries and time zones.",
  "Online worldwide • English & French • PhD-qualified • 12+ years of teaching experience • International students • Biology • Genetics • Molecular Biology • Genomics • Bioinformatics",
].join("\n\n");

const tutor = {
  headline: "Online Biology and Bioinformatics Tutor | IB Biology | English & French",
  bio: "Monique Aouad is a PhD-qualified Biology and Bioinformatics educator with 12+ years of teaching experience, offering 100% online Biology tuition worldwide in English and French.",
  about,
  experienceYears: 12,
  faqs: [
    { question: "Which subjects do you teach?", answer: "I teach Biology, including Molecular and Cellular Biology, Genetics, Genomics, Bioinformatics and related Life Sciences subjects." },
    { question: "Do you teach IB Biology?", answer: "Yes. I support students following international curricula, including IB Biology, with lessons adapted to their specific programme and academic needs." },
    { question: "What is your academic qualification?", answer: "I hold a PhD in Bioinformatics from Université Claude Bernard Lyon 1 (2018)." },
    { question: "How much teaching experience do you have?", answer: "I have over 12 years of teaching and academic experience in France and internationally, with university students, international learners and online students." },
    { question: "Which languages do you teach in?", answer: "I can teach fully in both English and French." },
    { question: "Do you teach online?", answer: "Yes, 100% online. I welcome students from anywhere in the world, with flexible scheduling across different countries and time zones." },
  ],
};

const profile = {
  education: "PhD in Bioinformatics, Université Claude Bernard Lyon 1 (2018)",
  methodology:
    "Clear, structured online lessons adapted to each student's level and objectives: concept explanations, guided exercises, scientific reasoning, data interpretation, revision and exam preparation.",
  availabilityText: "Flexible scheduling across time zones",
  languages: ["English", "French"],
  tags: [
    "IB Biology tutor",
    "Online Biology tutor",
    "Bioinformatics tutor",
    "Genetics tutor",
    "Molecular Biology tutor",
    "Genomics tutor",
    "French-speaking Biology tutor",
    "PhD Biology tutor",
  ],
};

(async () => {
  const t = await prisma.tutor.findUnique({ where: { slug: SLUG }, include: { profile: true, locations: true } });
  if (!t || !t.profile) throw new Error("Monique's tutor/profile row not found");
  const lyon = await prisma.city.findFirst({ where: { slug: "lyon" } });
  const italy = await prisma.country.findUnique({ where: { code: "IT" } });
  if (!lyon || !italy) throw new Error("Lyon city or Italy country missing (run fix-locations.ts first)");
  console.log(`${WRITE ? "WRITING" : "DRY RUN"}: ${t.displayName}, ${t.locations.length} existing location(s) -> Lyon/France, Rome/Italy, Lyon/Worldwide`);
  if (!WRITE) return prisma.$disconnect();

  let lazio = await prisma.state.findFirst({ where: { countryId: italy.id, slug: "lazio" } });
  lazio ??= await prisma.state.create({ data: { countryId: italy.id, name: "Lazio", slug: "lazio" } });
  let rome = await prisma.city.findFirst({ where: { stateId: lazio.id, slug: "rome" } });
  rome ??= await prisma.city.create({ data: { countryId: italy.id, stateId: lazio.id, name: "Rome", slug: "rome", timezone: "Europe/Rome" } });

  const loc = (city: { id: string; name: string; slug: string }, area: string, priority: number) => ({
    tutorId: t.id, cityId: city.id, cityName: city.name, citySlug: city.slug,
    areaName: area, areaSlug: area.toLowerCase(), priority,
    homeTutoringAvailable: false, onlineTutoringAvailable: true, notes: "Online sessions only.",
  });

  await prisma.$transaction([
    prisma.tutor.update({ where: { id: t.id }, data: tutor }),
    prisma.tutorProfile.update({
      where: { id: t.profile.id },
      data: {
        ...profile,
        metadata: {
          ...((t.profile.metadata as object) ?? {}),
          // Rendered as the "Qualifications & Background" cards; the page has no other place that shows service locations.
          qualifications: [
            { title: "PhD in Bioinformatics", description: "Lyon 1 University (Université Claude Bernard Lyon 1), 2018." },
            { title: "12+ Years of Teaching Experience", description: "Teaching and academic experience in France and internationally, with university students, international learners and students in online learning environments." },
            { title: "Academic Background", description: "Biology, Molecular and Cellular Biology, Genetics, Genomics, Bioinformatics and related Life Sciences subjects." },
            { title: "Scientific Research Background", description: "Helps advanced students develop data interpretation, scientific reasoning and critical analysis skills." },
            { title: "Teaching Languages", description: "Teaches fully in both English and French." },
            { title: "Service Locations", description: "Primary cities: Lyon and Rome. Areas served: France, Italy and worldwide, 100% online." },
          ],
          countriesCovered: ["all"],
        },
      },
    }),
    prisma.tutorLocation.deleteMany({ where: { tutorId: t.id } }),
    prisma.tutorLocation.createMany({
      data: [loc(lyon, "France", 0), loc(rome, "Italy", 1), loc(lyon, "Worldwide", 2)],
    }),
  ]);
  console.log("done");
  await prisma.$disconnect();
})();
