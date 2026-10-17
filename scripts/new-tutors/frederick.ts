// Create Frederick Yakubu's tutor profile from his CV (current employer left unnamed). Photo is added in the admin panel.
//   npx tsx --env-file=.env scripts/new-tutors/frederick.ts          # dry run
//   npx tsx --env-file=.env scripts/new-tutors/frederick.ts --write
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const WRITE = process.argv.includes("--write");
const SLUG = "frederick-yakubu-online-igcse-art-and-design-tutor";
const EMAIL = "frederickyakubu97@gmail.com";
const URL = `https://www.ibgram.com/tutor-profile/${SLUG}/`;

const about = [
  "Frederick Yakubu is an Art and Design tutor based in Lagos, Nigeria, offering online lessons in IGCSE Art and Design and art history. A professional visual artist, Frederick has taught art in secondary schools since 2012 and currently teaches Art and Design at a secondary college in Lekki, Lagos.",
  "Frederick's school experience includes Chrisland High School and Greensprings High School in Lekki, and Legacy Schools, a British Associate School, where he served as Head of the Creative Art Department. He knows the IGCSE and WAEC Art curricula well and has organised art exhibitions, gallery and museum visits, and field studies alongside classroom teaching.",
  "He holds a Master's degree in Art History from the University of Lagos and a B.A. (Hons) in Fine and Applied Art from the University of Benin, graduating with Second Class Upper. His practical strengths include drawing, painting, graphic design, draughtsmanship and sculpture, supported by a broad knowledge of art appreciation and art history, from prehistoric art to African and Western art.",
  "Lessons can cover observational drawing, painting technique, composition, developing ideas and sketchbook work, art history and critical appreciation, and preparing coursework and portfolios. Classes are online and fees are €40 per hour. Please share the student's syllabus, level and preferred times when you enquire.",
].join("\n\n");

const tutor = {
  displayName: "Frederick Yakubu",
  status: "active" as const,
  headline: "Online IGCSE Art and Design Tutor | Art History",
  bio: "Frederick Yakubu is an online IGCSE Art and Design tutor and professional visual artist from Lagos, with 14 years of art teaching and an MA in Art History from the University of Lagos.",
  about,
  experienceYears: 14,
  rating: 4.8,
  hourlyRate: 46, // €40/hr; the site only renders $ or ₹
  currency: "USD",
  avatarUrl: null,
  verified: true,
  approved: true,
  deletedAt: null,
  faqs: [
    { question: "What do you teach?", answer: "I teach IGCSE Art and Design and art history, including drawing, painting, graphic design, composition and art appreciation." },
    { question: "Which art curricula are you familiar with?", answer: "I have in-depth knowledge of the IGCSE and WAEC Art curricula." },
    { question: "What are your qualifications?", answer: "I hold a Master's degree in Art History from the University of Lagos and a B.A. (Hons) in Fine and Applied Art from the University of Benin (Second Class Upper)." },
    { question: "How much teaching experience do you have?", answer: "I have taught art in secondary schools since 2012, including as Head of the Creative Art Department at a British Associate School in Lagos." },
    { question: "Are lessons online?", answer: "Yes, all lessons are online." },
    { question: "What are your fees?", answer: "My fee is €40 per hour. Please confirm the schedule and final fee before booking." },
  ],
};

const profile = {
  education: "MA Art History, University of Lagos (2016)\nB.A. (Hons) Fine and Applied Art, University of Benin (2010)",
  methodology:
    "Structured, motivating online art lessons: drawing and painting technique, composition, idea development and sketchbook work, art history and appreciation, and coursework and portfolio preparation for IGCSE Art and Design.",
  responseTime: "< 30 mins",
  availabilityText: "Availability to be confirmed on enquiry.",
  languages: ["English"],
  tags: [
    "IGCSE Art and Design tutor",
    "Online Art tutor",
    "Art History tutor",
    "Drawing and Painting tutor",
    "IGCSE Art coursework tutor",
    "Art tutor Lagos",
  ],
  metadata: {
    teachingModes: ["Online"],
    qualifications: [
      { title: "MA Art History", description: "University of Lagos (2015/2016)." },
      { title: "B.A. (Hons) Fine and Applied Art", description: "University of Benin, Second Class Upper (2006–2010)." },
      { title: "Head of Creative Art Department", description: "Legacy Schools, a British Associate School in Lagos (2013–2015)." },
      { title: "14 Years of Art Teaching", description: "Secondary schools in Lagos and Aba since 2012, including Chrisland High School and Greensprings High School." },
      { title: "IGCSE and WAEC Art Curricula", description: "In-depth knowledge of both art syllabuses." },
      { title: "Professional Visual Artist", description: "Drawing, painting, graphic design, draughtsmanship and sculpture." },
    ],
    countriesCovered: ["ng"],
    visibilityPlacements: [],
  },
};

(async () => {
  const existing = await prisma.tutor.findUnique({ where: { slug: SLUG }, select: { id: true } });
  const apps = await prisma.jobApplication.findMany({ where: { email: { equals: EMAIL, mode: "insensitive" } }, select: { id: true, status: true } });
  console.log(`${WRITE ? "WRITING" : "DRY RUN"}: ${existing ? "update" : "create"} ${SLUG} bio=${tutor.bio.length}c about=${about.split(/\s+/).length}w applications=${apps.length}`);
  if (tutor.bio.length > 200) throw new Error("bio over 200 chars");
  if (!WRITE) return prisma.$disconnect();

  const nigeria = await prisma.country.findUnique({ where: { code: "NG" } });
  if (!nigeria) throw new Error("Nigeria country row missing");
  let lagosState = await prisma.state.findFirst({ where: { countryId: nigeria.id, slug: "lagos" } });
  lagosState ??= await prisma.state.create({ data: { countryId: nigeria.id, name: "Lagos", slug: "lagos" } });
  let lagos = await prisma.city.findFirst({ where: { stateId: lagosState.id, slug: "lagos" } });
  lagos ??= await prisma.city.create({ data: { countryId: nigeria.id, stateId: lagosState.id, name: "Lagos", slug: "lagos", timezone: "Africa/Lagos" } });

  await prisma.$transaction(async (tx) => {
    const t = await tx.tutor.upsert({ where: { slug: SLUG }, create: { slug: SLUG, ...tutor }, update: tutor });
    await tx.tutorProfile.upsert({ where: { tutorId: t.id }, create: { tutorId: t.id, ...profile }, update: profile });
    await tx.tutorSubject.deleteMany({ where: { tutorId: t.id } });
    await tx.tutorCurriculum.deleteMany({ where: { tutorId: t.id } });
    await tx.tutorLocation.deleteMany({ where: { tutorId: t.id } });
    await tx.tutorSubject.createMany({
      data: [
        { tutorId: t.id, subjectName: "Art and Design", subjectSlug: "art-and-design", curriculum: "IGCSE", priority: 0 },
        { tutorId: t.id, subjectName: "Art History", subjectSlug: "art-history", curriculum: "IGCSE", priority: 1 },
      ],
    });
    await tx.tutorCurriculum.create({ data: { tutorId: t.id, curriculum: "IGCSE", programme: null, isPrimary: true } });
    await tx.tutorLocation.create({
      data: {
        tutorId: t.id, cityId: lagos.id, cityName: lagos.name, citySlug: lagos.slug, areaName: "Egbeda", areaSlug: "egbeda",
        homeTutoringAvailable: false, onlineTutoringAvailable: true, notes: "Online sessions only.",
      },
    });
    if (apps.length) {
      await tx.jobApplication.updateMany({ where: { id: { in: apps.map((a) => a.id) } }, data: { status: "shortlisted", adminNotes: URL } });
    }
  });
  console.log("done", URL);
  await prisma.$disconnect();
})();
