// Create Ali Hasan's tutor profile from his CV ($15/hr, 10+ yrs, rating 4). Government day job left out.
//   npx tsx --env-file=.env scripts/new-tutors/ali-hasan.ts          # dry run
//   npx tsx --env-file=.env scripts/new-tutors/ali-hasan.ts --write
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const WRITE = process.argv.includes("--write");
const SLUG = "ali-hasan-online-igcse-a-level-maths-tutor";
const EMAIL = "ranaalimath1@gmail.com";
const URL = `https://www.ibgram.com/tutor-profile/${SLUG}/`;

const about = [
  "Ali Hasan is an online Mathematics tutor based in Sargodha, Punjab, Pakistan, with more than 10 years of teaching and learner-support experience. Ali teaches Cambridge IGCSE, O Level, AS and A Level Mathematics, along with undergraduate mathematics, through one-to-one online lessons and small-group support.",
  "Ali holds an MPhil in Mathematics from the University of Lahore and a Bachelor of Education (B.Ed) from Allama Iqbal Open University, and has taught mathematics at college and university level. Ali is also co-founder and academic author of The Math Hub, a mathematics education platform, writing course notes, worked examples and assessment resources across calculus, linear algebra, numerical analysis, differential equations and quantitative reasoning.",
  "Lessons follow the student's board and paper combination and cover algebra, quadratics, functions, coordinate geometry, trigonometry, calculus, mechanics, probability and statistics. Each lesson builds concepts first, works through step-by-step examples and diagrams, then moves to topic tests, timed practice and exam technique, with marking and feedback on the student's errors.",
  "Classes are online, mainly in the evenings Pakistan Standard Time, and fees are $15 per hour.",
].join("\n\n");

const tutor = {
  displayName: "Ali Hasan",
  status: "active" as const,
  headline: "Online Cambridge IGCSE, O Level and A Level Maths Tutor",
  bio: "Ali Hasan is an online Cambridge IGCSE, O Level and A Level Maths tutor with 10+ years of teaching experience, an MPhil in Mathematics and college and university lecturing experience.",
  about,
  experienceYears: 10,
  rating: 4,
  hourlyRate: 15,
  currency: "USD",
  avatarUrl: null,
  verified: true,
  approved: true,
  deletedAt: null,
  faqs: [
    { question: "Which courses do you teach?", answer: "Cambridge IGCSE, O Level, AS and A Level Mathematics, plus undergraduate mathematics such as calculus, linear algebra and differential equations." },
    { question: "What are your qualifications?", answer: "An MPhil in Mathematics from the University of Lahore and a B.Ed from Allama Iqbal Open University." },
    { question: "How much experience do you have?", answer: "More than 10 years, including college and university-level mathematics teaching, private tutoring and online instruction." },
    { question: "How are lessons structured?", answer: "Concepts first, then step-by-step worked examples, topic tests, timed practice and feedback on errors, matched to the student's exam board and papers." },
    { question: "When are you available?", answer: "Mainly in the evenings, Pakistan Standard Time, online." },
    { question: "What are your fees?", answer: "$15 per hour." },
  ],
};

const profile = {
  education: "MPhil Mathematics, University of Lahore\nB.Ed, Allama Iqbal Open University",
  methodology: "Concept-first online Maths lessons matched to the student's board and papers: worked examples, diagrams, topic tests, timed practice and error analysis.",
  responseTime: "< 30 mins",
  availabilityText: "Evenings, Pakistan Standard Time",
  languages: ["English", "Urdu"],
  tags: ["IGCSE Maths tutor", "O Level Maths tutor", "A Level Maths tutor", "AS Level Maths tutor", "Online Maths tutor Pakistan"],
  metadata: {
    teachingModes: ["Online"],
    qualifications: [
      { title: "MPhil Mathematics", description: "University of Lahore, Pakistan." },
      { title: "Bachelor of Education (B.Ed)", description: "Allama Iqbal Open University, Islamabad." },
      { title: "10+ Years Teaching Mathematics", description: "College and university lecturing, private and online tutoring." },
      { title: "Co-founder, The Math Hub", description: "Author of mathematics course notes, worked examples and assessment resources." },
    ],
    countriesCovered: ["pk"],
    visibilityPlacements: [],
  },
};

(async () => {
  const existing = await prisma.tutor.findUnique({ where: { slug: SLUG }, select: { id: true } });
  const apps = await prisma.jobApplication.findMany({ where: { email: { equals: EMAIL, mode: "insensitive" } }, select: { id: true } });
  console.log(`${WRITE ? "WRITING" : "DRY RUN"}: ${existing ? "update" : "create"} ${SLUG} bio=${tutor.bio.length}c applications=${apps.length}`);
  if (tutor.bio.length > 200) throw new Error("bio over 200 chars");
  if (!WRITE) return prisma.$disconnect();

  let pk = await prisma.country.findUnique({ where: { code: "PK" } });
  pk ??= await prisma.country.create({ data: { name: "Pakistan", code: "PK", slug: "pakistan" } });
  let punjab = await prisma.state.findFirst({ where: { countryId: pk.id, slug: "punjab" } });
  punjab ??= await prisma.state.create({ data: { countryId: pk.id, name: "Punjab", slug: "punjab" } });
  let city = await prisma.city.findFirst({ where: { stateId: punjab.id, slug: "sargodha" } });
  city ??= await prisma.city.create({ data: { countryId: pk.id, stateId: punjab.id, name: "Sargodha", slug: "sargodha", timezone: "Asia/Karachi" } });

  await prisma.$transaction(async (tx) => {
    const t = await tx.tutor.upsert({ where: { slug: SLUG }, create: { slug: SLUG, ...tutor }, update: tutor });
    await tx.tutorProfile.upsert({ where: { tutorId: t.id }, create: { tutorId: t.id, ...profile }, update: profile });
    await tx.tutorSubject.deleteMany({ where: { tutorId: t.id } });
    await tx.tutorCurriculum.deleteMany({ where: { tutorId: t.id } });
    await tx.tutorLocation.deleteMany({ where: { tutorId: t.id } });
    await tx.tutorSubject.createMany({
      data: [
        { tutorId: t.id, subjectName: "Mathematics", subjectSlug: "mathematics", curriculum: "IGCSE", priority: 0 },
        { tutorId: t.id, subjectName: "Mathematics", subjectSlug: "mathematics", curriculum: "IGCSE", level: "AS/A Level", priority: 1 },
      ],
    });
    await tx.tutorCurriculum.create({ data: { tutorId: t.id, curriculum: "IGCSE", programme: null, isPrimary: true } });
    await tx.tutorLocation.create({
      data: { tutorId: t.id, cityId: city.id, cityName: city.name, citySlug: city.slug, areaName: "All over Sargodha", areaSlug: "all-over-sargodha",
        homeTutoringAvailable: false, onlineTutoringAvailable: true, notes: "Online sessions only." },
    });
    if (apps.length) await tx.jobApplication.updateMany({ where: { id: { in: apps.map((a) => a.id) } }, data: { status: "shortlisted", adminNotes: URL } });
  });
  console.log("done", URL);
  await prisma.$disconnect();
})();
