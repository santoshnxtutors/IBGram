/**
 * Seeds the new CMS marketing tables so that the homepage continues to render
 * the same content, but now sourced from the database.
 *
 * Run with:  npx tsx database/prisma/seed-cms.ts
 *
 * Idempotent — every insert is upsert-by-unique-key.
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "../..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();

// ── Testimonials (current ReviewsSection content) ─────────────────────────────
const TESTIMONIALS = [
  {
    authorName: "Priya R.",
    authorRole: "Parent of DP Math AA HL student",
    location: "Gurugram",
    rating: 5,
    quote:
      "We were stuck on Math AA HL paper 3 sample questions. The matched tutor walked through the syllabus depth and IA strategy, and our daughter's confidence shifted in three weeks.",
    curriculum: "IB" as const,
    sortOrder: 0,
    useOnHomepage: true,
    featured: true,
  },
  {
    authorName: "Aarav K.",
    authorRole: "DP Year 2 student",
    location: "DLF Phase 5",
    rating: 5,
    quote:
      "Physics HL felt scary before mocks. The tutor mapped my weak topics and gave a realistic command-term plan. Mocks went up by two grade boundaries.",
    curriculum: "IB" as const,
    sortOrder: 1,
    useOnHomepage: true,
  },
  {
    authorName: "Sneha M.",
    authorRole: "Parent of DP Economics student",
    location: "Sector 57",
    rating: 5,
    quote:
      "We wanted Economics HL support that matched the actual paper command terms. IB Gram matched us within a day with a specialist who understood our school's IA timeline.",
    curriculum: "IB" as const,
    sortOrder: 2,
    useOnHomepage: true,
  },
  {
    authorName: "Reema S.",
    authorRole: "Parent of IGCSE Chemistry student",
    location: "Sushant Lok",
    rating: 5,
    quote:
      "Cambridge IGCSE Chemistry past-paper practice made the difference. The tutor was honest about pace and progress, and the lesson notes were structured.",
    curriculum: "IGCSE" as const,
    sortOrder: 3,
    useOnHomepage: true,
  },
];

// ── Success stories (current SuccessStories content) ──────────────────────────
const SUCCESS_STORIES = [
  {
    studentName: "Mira",
    subject: "IB DP Math AA HL",
    focus: "Boost confidence",
    outcome: "5 → 7 in Math AA HL",
    nextStep: "Currently preparing for university application essays.",
    accentClass: "emerald",
    sortOrder: 0,
  },
  {
    studentName: "Rohan",
    subject: "IB DP Physics HL",
    focus: "IA scaffolding",
    outcome: "Internal Assessment scored top band",
    nextStep: "Continuing to mocks-to-finals revision support.",
    accentClass: "amber",
    sortOrder: 1,
  },
  {
    studentName: "Aanya",
    subject: "IB DP Economics HL",
    focus: "Command-term mastery",
    outcome: "Predicted grade revised up to 7",
    nextStep: "Targeted paper 1 essay practice.",
    accentClass: "sky",
    sortOrder: 2,
  },
  {
    studentName: "Karan",
    subject: "IGCSE Chemistry",
    focus: "Past paper rigour",
    outcome: "B → A* by trial exam",
    nextStep: "Maintaining momentum into final session.",
    accentClass: "violet",
    sortOrder: 3,
  },
];

// ── Blog categories + posts (current BlogInsights mocks) ──────────────────────
const BLOG_CATEGORIES = [
  { name: "DP Planning", slug: "dp-planning", description: "Programme planning and timeline guides for IB Diploma students.", sortOrder: 0 },
  { name: "IGCSE Revision", slug: "igcse-revision", description: "Cambridge and Edexcel IGCSE revision and past-paper strategy.", sortOrder: 1 },
  { name: "Subject Choice", slug: "subject-choice", description: "Subject selection for IB and IGCSE families.", sortOrder: 2 },
  { name: "Exam Strategy", slug: "exam-strategy", description: "Command terms, exam technique, mocks and finals.", sortOrder: 3 },
  { name: "Local Guides", slug: "local-guides", description: "City-specific tutoring guides for India.", sortOrder: 4 },
  { name: "Parent Resources", slug: "parent-resources", description: "Resources for IB and IGCSE parents.", sortOrder: 5 },
];

const BLOG_POSTS = [
  {
    slug: "ib-dp-core-planning-timeline",
    title: "Planning the IB DP Core: CAS, EE and TOK without the panic",
    excerpt: "A working timeline for DP families to keep CAS, the Extended Essay and Theory of Knowledge on track from Year 1 to mocks.",
    body:
      "The DP Core often gets pushed to the side when subject teaching ramps up. This guide breaks down what to do month-by-month from DP Year 1 through to the start of Year 2 so the EE and ToK essay do not collide with mock prep.\n\nCAS: build steady evidence weekly.\nEE: pick the supervisor early, lock the research question by Term 2.\nToK: write the title prescription draft as soon as the official prompts release.\n\nDoing this calmly is the whole point.",
    authorName: "IB Gram Editorial",
    categorySlug: "dp-planning",
    status: "published" as const,
    publishedAt: new Date("2026-04-08"),
    readingTimeMinutes: 6,
    tags: ["DP", "CAS", "EE", "ToK", "timeline"],
  },
  {
    slug: "igcse-revision-six-week-plan",
    title: "A six-week IGCSE revision plan that actually works",
    excerpt: "How to structure the final IGCSE revision window for Cambridge or Edexcel papers without burning out.",
    body:
      "Six weeks before IGCSE finals is the right time to switch from learning new content to deliberate exam practice. This guide gives a week-by-week schedule for sciences, mathematics, and English IGCSE papers.\n\nWeek 6: topic-by-topic audit.\nWeeks 5–4: focused past papers with command-term reflection.\nWeeks 3–2: full timed papers under exam conditions.\nWeek 1: skim, sleep, review feedback only.",
    authorName: "IB Gram Editorial",
    categorySlug: "igcse-revision",
    status: "published" as const,
    publishedAt: new Date("2026-04-15"),
    readingTimeMinutes: 7,
    tags: ["IGCSE", "revision", "Cambridge", "Edexcel"],
  },
  {
    slug: "stem-subject-choice-ib-dp",
    title: "Choosing STEM subjects in IB DP without regret",
    excerpt: "Real questions DP families should ask before committing to HL Maths AA or AI, and HL Physics or Chemistry.",
    body:
      "STEM combinations at HL are demanding. This guide walks through the practical questions families should ask before choosing Math AA HL, Math AI HL, Physics HL or Chemistry HL — and how each combination interacts with university applications.",
    authorName: "IB Gram Editorial",
    categorySlug: "subject-choice",
    status: "published" as const,
    publishedAt: new Date("2026-04-22"),
    readingTimeMinutes: 8,
    tags: ["DP", "Maths AA", "Maths AI", "Physics", "Chemistry"],
  },
];

// ── Global FAQs (mirroring FAQSection) ────────────────────────────────────────
const FAQS = [
  { question: "How does IB Gram match tutors to my child?", answer: "We start with the student's programme stage, subject and HL/SL choice, school timeline and lesson-mode preference, then filter for realistic geographic availability. Subject specialist fit is the priority — not the nearest postcode.", category: "Matching", sortOrder: 0 },
  { question: "Can I get an IB tutor near Golf Course Road or DLF Phase 5?", answer: "Yes. Both areas have active home, online and hybrid availability. The matching review verifies travel windows and tutor cadence before recommending.", category: "Local", sortOrder: 1, citySlug: "gurugram" },
  { question: "Do you support Math AA, Math AI, Physics, Chemistry, Economics?", answer: "Yes — these are the most-requested DP subjects in Gurugram. HL specialists are available; SL pathways are matched by paper depth and Internal Assessment scaffolding.", category: "Subjects", sortOrder: 2 },
  { question: "How fast is the match?", answer: "Common subjects are matched within one working day. HL-only specialist requests may take two to three working days.", category: "Process", sortOrder: 3 },
  { question: "Are lessons home, online or hybrid?", answer: "All three. Home suits steady content cadence; online suits hard-to-find HL specialists; hybrid suits DP Year 2 students between mocks and finals.", category: "Modes", sortOrder: 4 },
  { question: "Is IB Gram affiliated with any school?", answer: "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.", category: "Trust", sortOrder: 5 },
  { question: "Do you support IGCSE Cambridge and Edexcel?", answer: "Yes. The board is confirmed at matching time, and the tutor is aligned to the live syllabus for the student's board.", category: "Curriculum", sortOrder: 6 },
  { question: "How are tutor profiles verified?", answer: "Tutor profiles are checked for IB or IGCSE subject experience, qualifications, references and lesson methodology. Examiner experience is surfaced only when documented.", category: "Trust", sortOrder: 7 },
  { question: "How does pricing work?", answer: "Indicative hourly rates are shown on shortlisted tutor profiles. Final rates depend on subject level, tutor experience and lesson cadence.", category: "Pricing", sortOrder: 8 },
  { question: "What if the first tutor isn't the right fit?", answer: "Trial sessions confirm fit before any longer commitment. If the fit isn't right, we re-match.", category: "Process", sortOrder: 9 },
];

// ── Navigation (mirroring Header) ─────────────────────────────────────────────
const HEADER_MENU_ITEMS = [
  { label: "Programmes", href: "/programmes/", sortOrder: 0 },
  { label: "IB DP", href: "/programmes/dp/", sortOrder: 1 },
  { label: "IB MYP", href: "/programmes/myp/", sortOrder: 2 },
  { label: "IB PYP", href: "/programmes/pyp/", sortOrder: 3 },
  { label: "IGCSE", href: "/igcse/", sortOrder: 4 },
  { label: "Find a tutor", href: "/tutors/", sortOrder: 5 },
  { label: "IB tutors in Gurugram", href: "/ib-tutors/gurugram/", sortOrder: 6 },
];

const FOOTER_MENU_ITEMS = [
  { label: "About IB Gram", href: "/about-us/", sortOrder: 0 },
  { label: "Contact", href: "/contact-us/", sortOrder: 1 },
  { label: "Blog", href: "/blog/", sortOrder: 2 },
  { label: "Admissions", href: "/admissions/", sortOrder: 3 },
  { label: "Jobs", href: "/jobs/", sortOrder: 4 },
];

// ── Footer blocks ─────────────────────────────────────────────────────────────
const FOOTER_BLOCKS = [
  { blockKey: "company", columnTitle: "Company", itemsJson: { links: [{ label: "About", href: "/about-us/" }, { label: "Contact", href: "/contact-us/" }, { label: "Jobs", href: "/jobs/" }] }, sortOrder: 0 },
  { blockKey: "programmes", columnTitle: "Programmes", itemsJson: { links: [{ label: "IB DP", href: "/programmes/dp/" }, { label: "IB MYP", href: "/programmes/myp/" }, { label: "IB PYP", href: "/programmes/pyp/" }, { label: "IGCSE", href: "/igcse/" }] }, sortOrder: 1 },
  { blockKey: "support", columnTitle: "Support", itemsJson: { links: [{ label: "Tutor matching", href: "/tutors/" }, { label: "Blog", href: "/blog/" }, { label: "Admissions", href: "/admissions/" }] }, sortOrder: 2 },
  { blockKey: "trust", columnTitle: "Trust", body: "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.", sortOrder: 3 },
];

// ── CTA blocks ────────────────────────────────────────────────────────────────
const CTA_BLOCKS = [
  { ctaKey: "find-tutor", heading: "Find a tutor", description: "Get matched in one working day.", buttonText: "Find a tutor", buttonUrl: "/tutors/", variant: "primary", sortOrder: 0 },
  { ctaKey: "explore-gurugram", heading: "Explore Gurugram tutors", description: "Verified tutor availability across Gurugram.", buttonText: "Explore Gurugram", buttonUrl: "/ib-tutors/gurugram/", variant: "secondary", sortOrder: 1 },
  { ctaKey: "book-demo", heading: "Book a demo", description: "Trial session before any longer commitment.", buttonText: "Book demo", buttonUrl: "/contact-us/", variant: "outline", sortOrder: 2 },
  { ctaKey: "talk-advisor", heading: "Talk to an advisor", description: "Speak to an academic advisor about your child's IB or IGCSE plan.", buttonText: "Talk to advisor", buttonUrl: "/contact-us/", variant: "primary", sortOrder: 3 },
  { ctaKey: "explore-igcse", heading: "Explore IGCSE tutors", description: "Cambridge and Edexcel IGCSE specialists.", buttonText: "Explore IGCSE", buttonUrl: "/igcse-tutors/gurugram/", variant: "secondary", sortOrder: 4 },
];

// ── Homepage sections (current home composition) ──────────────────────────────
const HOMEPAGE_SECTIONS = [
  { sectionKey: "hero", displayName: "Hero", sectionType: "hero", heading: "Find IB and IGCSE tutors for home, online and hybrid learning", subheading: "Matched by subject specialist fit, lesson cadence and your child's school timeline — not by postcode alone.", sortOrder: 0 },
  { sectionKey: "trust-indicators", displayName: "Trust Indicators", sectionType: "stats", heading: "Trusted by families across India", sortOrder: 1 },
  { sectionKey: "programmes", displayName: "Programme Cards", sectionType: "programmes", heading: "Programmes we support", sortOrder: 2 },
  { sectionKey: "subjects", displayName: "Subject Sections", sectionType: "subjects", heading: "DP subjects with active availability", sortOrder: 3 },
  { sectionKey: "gurugram-cta", displayName: "Gurugram local SEO block", sectionType: "city_cta", heading: "IB and IGCSE tutoring across Gurugram", subheading: "Golf Course Road, DLF Phase 5, Sector 57, Sushant Lok, Sohna Road and more.", sortOrder: 4 },
  { sectionKey: "tutor-matching", displayName: "Tutor matching process", sectionType: "process", heading: "How tutor matching works", sortOrder: 5 },
  { sectionKey: "tutor-cards", displayName: "Featured tutors", sectionType: "tutors", heading: "Verified tutor profiles", sortOrder: 6 },
  { sectionKey: "testimonials", displayName: "Testimonials", sectionType: "testimonials", heading: "Families on IB Gram", sortOrder: 7 },
  { sectionKey: "blog-resources", displayName: "Blog & resources", sectionType: "blog", heading: "From the IB Gram blog", sortOrder: 8 },
  { sectionKey: "faqs", displayName: "FAQs", sectionType: "faqs", heading: "Common questions", sortOrder: 9 },
  { sectionKey: "final-cta", displayName: "Final CTA", sectionType: "cta", heading: "Talk to an IB Gram advisor", sortOrder: 10 },
];

async function seedTestimonials() {
  let created = 0;
  for (const t of TESTIMONIALS) {
    const existing = await prisma.testimonial.findFirst({ where: { authorName: t.authorName, quote: t.quote.slice(0, 200) } });
    if (existing) continue;
    await prisma.testimonial.create({ data: t });
    created++;
  }
  console.log(`✓ Testimonials: ${created} new (${TESTIMONIALS.length} total)`);
}

async function seedSuccessStories() {
  let created = 0;
  for (const s of SUCCESS_STORIES) {
    const existing = await prisma.successStory.findFirst({ where: { studentName: s.studentName, subject: s.subject } });
    if (existing) continue;
    await prisma.successStory.create({ data: s });
    created++;
  }
  console.log(`✓ Success stories: ${created} new (${SUCCESS_STORIES.length} total)`);
}

async function seedBlog() {
  const categoryMap = new Map<string, string>();
  for (const cat of BLOG_CATEGORIES) {
    const row = await prisma.blogCategory.upsert({
      where: { slug: cat.slug },
      create: cat,
      update: { name: cat.name, description: cat.description, sortOrder: cat.sortOrder },
    });
    categoryMap.set(cat.slug, row.id);
  }
  for (const post of BLOG_POSTS) {
    const { categorySlug, ...data } = post;
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      create: { ...data, categoryId: categoryMap.get(categorySlug) ?? null },
      update: { ...data, categoryId: categoryMap.get(categorySlug) ?? null },
    });
  }
  console.log(`✓ Blog: ${BLOG_CATEGORIES.length} categories, ${BLOG_POSTS.length} posts seeded`);
}

async function seedFaqs() {
  let created = 0;
  for (const faq of FAQS) {
    const existing = await prisma.faqItem.findFirst({ where: { question: faq.question } });
    if (existing) continue;
    await prisma.faqItem.create({ data: faq });
    created++;
  }
  console.log(`✓ FAQs: ${created} new (${FAQS.length} total)`);
}

async function seedNavigation() {
  const header = await prisma.navigationMenu.upsert({
    where: { menuKey: "header-main" },
    create: { menuKey: "header-main", label: "Header main", position: "header", isActive: true },
    update: { label: "Header main", position: "header", isActive: true },
  });
  const footer = await prisma.navigationMenu.upsert({
    where: { menuKey: "footer-main" },
    create: { menuKey: "footer-main", label: "Footer main", position: "footer", isActive: true },
    update: { label: "Footer main", position: "footer", isActive: true },
  });
  await prisma.navigationMenuItem.deleteMany({ where: { menuId: { in: [header.id, footer.id] } } });
  for (const item of HEADER_MENU_ITEMS) {
    await prisma.navigationMenuItem.create({ data: { ...item, menuId: header.id } });
  }
  for (const item of FOOTER_MENU_ITEMS) {
    await prisma.navigationMenuItem.create({ data: { ...item, menuId: footer.id } });
  }
  console.log(`✓ Navigation: header + footer seeded (${HEADER_MENU_ITEMS.length + FOOTER_MENU_ITEMS.length} items)`);
}

async function seedFooterBlocks() {
  for (const block of FOOTER_BLOCKS) {
    await prisma.footerBlock.upsert({
      where: { blockKey: block.blockKey },
      create: block,
      update: block,
    });
  }
  console.log(`✓ Footer blocks: ${FOOTER_BLOCKS.length} seeded`);
}

async function seedCtaBlocks() {
  for (const cta of CTA_BLOCKS) {
    await prisma.ctaBlock.upsert({
      where: { ctaKey: cta.ctaKey },
      create: cta,
      update: cta,
    });
  }
  console.log(`✓ CTA blocks: ${CTA_BLOCKS.length} seeded`);
}

async function seedHomepageSections() {
  for (const section of HOMEPAGE_SECTIONS) {
    await prisma.homepageSection.upsert({
      where: { sectionKey: section.sectionKey },
      create: section,
      update: { displayName: section.displayName, sectionType: section.sectionType, heading: section.heading, subheading: section.subheading ?? null, sortOrder: section.sortOrder },
    });
  }
  console.log(`✓ Homepage sections: ${HOMEPAGE_SECTIONS.length} seeded`);
}

async function main() {
  console.log("Seeding Phase 2 CMS marketing content...");
  await seedTestimonials();
  await seedSuccessStories();
  await seedBlog();
  await seedFaqs();
  await seedNavigation();
  await seedFooterBlocks();
  await seedCtaBlocks();
  await seedHomepageSections();
  console.log("\nDone.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
