import bcrypt from "bcryptjs";
import { Prisma, PrismaClient, RecordStatus, UserRole } from "@prisma/client";
import { readFile } from "node:fs/promises";
import path from "node:path";

const prisma = new PrismaClient();

type TutorSeedRecord = {
  id: string;
  slug: string;
  name: string;
  subject: string;
  grade: string;
  rating: number;
  reviews: number;
  experience: string;
  bio: string;
  rate: string;
  image: string;
  tags: string[];
  accent: string;
  education: string;
  successRate: string;
  availability: string;
  responseTime: string;
  methodology: string;
  curriculum: string;
  headline?: string;
  isFeatured: boolean;
  status: RecordStatus;
};

async function seedTutors() {
  const seedPath = path.join(process.cwd(), "prisma", "seed-data", "tutors.seed.json");
  const raw = await readFile(seedPath, "utf8");
  const tutors = JSON.parse(raw) as TutorSeedRecord[];

  for (const tutor of tutors) {
    await prisma.tutor.upsert({
      where: { slug: tutor.slug },
      create: {
        id: tutor.id,
        slug: tutor.slug,
        name: tutor.name,
        subject: tutor.subject,
        grade: tutor.grade,
        rating: new Prisma.Decimal(tutor.rating),
        reviews: tutor.reviews,
        experience: tutor.experience,
        bio: tutor.bio,
        rate: tutor.rate,
        image: tutor.image || null,
        accent: tutor.accent,
        education: tutor.education,
        successRate: tutor.successRate,
        availability: tutor.availability,
        responseTime: tutor.responseTime,
        methodology: tutor.methodology,
        curriculum: tutor.curriculum,
        headline: tutor.headline ?? null,
        isFeatured: tutor.isFeatured,
        status: tutor.status,
        tutorSubjects: { create: [{ subject: tutor.subject }] },
        tutorTags: { create: tutor.tags.map((tag) => ({ tag })) }
      },
      update: {
        name: tutor.name,
        subject: tutor.subject,
        grade: tutor.grade,
        rating: new Prisma.Decimal(tutor.rating),
        reviews: tutor.reviews,
        experience: tutor.experience,
        bio: tutor.bio,
        rate: tutor.rate,
        image: tutor.image || null,
        accent: tutor.accent,
        education: tutor.education,
        successRate: tutor.successRate,
        availability: tutor.availability,
        responseTime: tutor.responseTime,
        methodology: tutor.methodology,
        curriculum: tutor.curriculum,
        headline: tutor.headline ?? null,
        isFeatured: tutor.isFeatured,
        status: tutor.status,
        tutorSubjects: {
          deleteMany: {},
          create: [{ subject: tutor.subject }]
        },
        tutorTags: {
          deleteMany: {},
          create: tutor.tags.map((tag) => ({ tag }))
        }
      }
    });
  }
}

async function seedAdminUser() {
  const name = process.env.SEED_ADMIN_NAME;
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!name || !email || !password) {
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    create: {
      name,
      email,
      passwordHash,
      role: UserRole.SUPER_ADMIN,
      status: RecordStatus.ACTIVE
    },
    update: {
      name,
      passwordHash,
      role: UserRole.SUPER_ADMIN,
      status: RecordStatus.ACTIVE
    }
  });
}

async function main() {
  await seedTutors();
  await seedAdminUser();
}

main()
  .catch((error) => {
    console.error("Seed failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
