// Fill blank tutor cities/areas (admin Tutor Management table) and Aafreen's missing subjects.
// Cities not in the City table (foreign + Kozhikode/Bhiwadi) are created first, since a
// TutorLocation must point at a City row.
//
//   npx tsx --env-file=.env scripts/new-tutors/fix-locations.ts          # dry run
//   npx tsx --env-file=.env scripts/new-tutors/fix-locations.ts --write
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const WRITE = process.argv.includes("--write");
const slugify = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

type Place = { country: [name: string, code: string]; state: string; city: string; timezone: string };
const PLACES: Record<string, Place> = {
  kozhikode: { country: ["India", "IN"], state: "Kerala", city: "Kozhikode", timezone: "Asia/Kolkata" },
  bhiwadi: { country: ["India", "IN"], state: "Rajasthan", city: "Bhiwadi", timezone: "Asia/Kolkata" },
  delhi: { country: ["India", "IN"], state: "Delhi", city: "Delhi", timezone: "Asia/Kolkata" },
  lyon: { country: ["France", "FR"], state: "Auvergne-Rhône-Alpes", city: "Lyon", timezone: "Europe/Paris" },
  amman: { country: ["Jordan", "JO"], state: "Amman Governorate", city: "Amman", timezone: "Asia/Amman" },
  porto: { country: ["Portugal", "PT"], state: "Porto District", city: "Porto", timezone: "Europe/Lisbon" },
  abuja: { country: ["Nigeria", "NG"], state: "Federal Capital Territory", city: "Abuja", timezone: "Africa/Lagos" },
  cava: { country: ["Italy", "IT"], state: "Campania", city: "Cava de' Tirreni", timezone: "Europe/Rome" },
};

// Tutors with no location row. Areas are the locality from their application where one was given.
const NEW_LOCATIONS: { slug: string; place: keyof typeof PLACES; area: string; hybrid?: boolean }[] = [
  { slug: "ayesha-nadeem-ib-pyp-tutor", place: "delhi", area: "New Delhi" },
  { slug: "zenia-shahin-online-ib-pyp-tutor", place: "kozhikode", area: "Palazhi" },
  { slug: "shagun-tyagi-online-ib-igcse-physics-maths-tutor", place: "bhiwadi", area: "All over Bhiwadi" },
  { slug: "monique-aouad-online-ib-biology-tutor", place: "lyon", area: "Lyon 3rd Arrondissement" },
  { slug: "naya-shehab-ib-dp-subject-tutor", place: "amman", area: "All over Amman", hybrid: true },
  { slug: "olga-santos-online-portuguese-english-tutor", place: "porto", area: "São Mamede de Infesta" },
  { slug: "precious-obiwu-online-ib-igcse-biology-tutor", place: "abuja", area: "Kabusa" },
  { slug: "richard-harrison-online-cambridge-a-level-english-history-tutor", place: "cava", area: "All over Cava de' Tirreni" },
];

// Tutors whose single location row has a city but no area.
const FILL_AREAS: { slug: string; area: string }[] = [
  ...["areeba-hussain", "meenakshi-english-tutor", "keerthi-biology-neet-tutor", "priya-vivek-ib-myp-dp-igcse-maths-tutor",
    "swati-thakur-maths-commerce-tutor", "aanchal-agrawal-ib-igcse-maths-tutor", "preeti-malhotra-myp-science-tutor",
    "savneet-kaur-online-ib-myp-individuals-and-societies-tutor"].map((slug) => ({ slug, area: "All over Gurgaon" })),
  { slug: "antonita-nishanth-online-igcse-english-tutor", area: "All over Kochi" },
];

// Aafreen's headline: "Primary Teacher for Nursery to Grade 8 | English, Maths, Science & Hindi".
const AAFREEN = { slug: "aafreen-hussain-primary-tutor", subjects: ["English", "Mathematics", "Science", "Hindi"] };

async function ensureCity(p: Place) {
  const [countryName, code] = p.country;
  let country = await prisma.country.findUnique({ where: { code } });
  if (!country) {
    console.log(`  + country ${countryName}`);
    if (!WRITE) return null;
    country = await prisma.country.create({ data: { name: countryName, code, slug: slugify(countryName) } });
  }
  let state = await prisma.state.findFirst({ where: { countryId: country.id, name: p.state } });
  if (!state) {
    console.log(`  + state ${p.state}, ${countryName}`);
    if (!WRITE) return null;
    state = await prisma.state.create({ data: { countryId: country.id, name: p.state, slug: slugify(p.state) } });
  }
  let city = await prisma.city.findFirst({ where: { stateId: state.id, slug: slugify(p.city) } });
  if (!city) {
    console.log(`  + city ${p.city}, ${p.state}`);
    if (!WRITE) return null;
    city = await prisma.city.create({
      data: { countryId: country.id, stateId: state.id, name: p.city, slug: slugify(p.city), timezone: p.timezone },
    });
  }
  return city;
}

async function tutorBySlug(slug: string) {
  const t = await prisma.tutor.findFirst({ where: { slug, deletedAt: null }, include: { locations: true, subjects: true } });
  if (!t) throw new Error(`tutor not found: ${slug}`);
  return t;
}

(async () => {
  console.log(WRITE ? "WRITING" : "DRY RUN");

  for (const n of NEW_LOCATIONS) {
    const t = await tutorBySlug(n.slug);
    if (t.locations.length) { console.log(`skip ${n.slug}: already has ${t.locations.length} location(s)`); continue; }
    const city = await ensureCity(PLACES[n.place]);
    console.log(`location ${t.displayName}: ${PLACES[n.place].city} / ${n.area}`);
    if (!city || !WRITE) continue;
    await prisma.tutorLocation.create({
      data: {
        tutorId: t.id, cityId: city.id, cityName: city.name, citySlug: city.slug,
        areaName: n.area, areaSlug: slugify(n.area),
        homeTutoringAvailable: false, onlineTutoringAvailable: true, hybridTutoringAvailable: n.hybrid ?? false,
        notes: n.hybrid ? "Online and in-person (hybrid) sessions." : "Online sessions only.",
      },
    });
  }

  for (const f of FILL_AREAS) {
    const t = await tutorBySlug(f.slug);
    const blank = t.locations.filter((l) => !l.areaName);
    if (t.locations.length !== 1 || blank.length !== 1) { console.log(`skip ${f.slug}: ${t.locations.length} locations, ${blank.length} blank`); continue; }
    console.log(`area ${t.displayName}: ${blank[0].cityName} / ${f.area}`);
    if (WRITE) await prisma.tutorLocation.update({ where: { id: blank[0].id }, data: { areaName: f.area, areaSlug: slugify(f.area) } });
  }

  const a = await tutorBySlug(AAFREEN.slug);
  if (a.subjects.length) console.log(`skip ${AAFREEN.slug}: already has subjects`);
  else {
    console.log(`subjects ${a.displayName}: ${AAFREEN.subjects.join(", ")}`);
    if (WRITE) {
      await prisma.tutorSubject.createMany({
        data: AAFREEN.subjects.map((name, i) => ({ tutorId: a.id, subjectName: name, subjectSlug: slugify(name), curriculum: "IB" as const, priority: i })),
      });
    }
  }

  await prisma.$disconnect();
})();
