import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../middleware/error.middleware";
import { slugify } from "../../utils/slug";

const MODES = ["online", "home", "hybrid"] as const;
const PROGRAMMES = ["PYP", "MYP", "DP"] as const;
// Photos uploaded through /api/tutor/photo (Next.js) are the only self-service avatar source.
const OWN_PHOTO = /^\/api\/media\/tutor-photos\/[A-Za-z0-9._-]+$/;

const names = (max = 20) => z.array(z.string().trim().min(1).max(80)).max(max).default([]);
const text = (max: number) => z.string().trim().max(max).default("");

const profileInput = z
  .object({
    displayName: z.string().trim().min(2, "Enter your full name.").max(120),
    // WhatsApp number as "+<country code> <digits>" (private: admin-only, never on public pages).
    phone: z.string().trim().regex(/^\+\d{1,4} \d{6,14}$/, "Enter your WhatsApp number with its country code."),
    // Private contact email for the IB Gram team (defaults to the login email); never shown publicly.
    email: z.email("Enter a valid contact email.").max(160),
    headline: text(200),
    // One qualification per line; each line becomes its own card on the public profile.
    education: text(2000),
    successRate: text(40),
    avatarUrl: z.string().regex(OWN_PHOTO, "Upload your photo with the photo button.").nullable().default(null),
    tags: names(12),
    languages: names(10),
    ibSubjects: names(),
    igcseSubjects: names(),
    ibProgrammes: z.array(z.enum(PROGRAMMES)).default([]),
    experienceYears: z.number().int().min(0).max(60).nullable().default(null),
    hourlyRate: z.number().min(0).max(100_000).nullable().default(null),
    currency: z.enum(["INR", "USD"]).default("INR"),
    responseTime: text(60),
    availabilityText: text(300),
    methodology: text(4000),
    // Public profile link: ibgram.com/tutor-profile/<slug>/. Empty keeps the current one (or derives it from the name).
    slug: z
      .string()
      .trim()
      .toLowerCase()
      .regex(/^([a-z0-9]+(-[a-z0-9]+)*)?$/, "Profile link can use letters, numbers and single hyphens only.")
      .max(80)
      .default(""),
    country: z.string().regex(/^[a-z]{2}$/, "Choose your country."),
    countryName: z.string().trim().min(2).max(60).regex(/^[\p{L} .'()&-]+$/u, "Choose your country."),
    state: z.string().trim().min(2, "Enter your state or region.").max(80),
    city: z.string().trim().min(2, "Enter your city.").max(80),
    areas: names(),
    sectors: names(),
    societies: names(),
    travelNotes: text(1000),
    teachingModes: z.array(z.enum(MODES)).min(1, "Pick at least one teaching mode."),
    countriesCovered: z.array(z.string().regex(/^([a-z]{2}|all)$/)).max(60).default([]),
    qualifications: z
      .array(z.object({ title: z.string().trim().min(1).max(120), description: z.string().trim().max(600).default("") }))
      .max(10)
      .default([]),
    faqs: z
      .array(z.object({ question: z.string().trim().min(1).max(300), answer: z.string().trim().min(1).max(2000) }))
      .max(12)
      .default([]),
    bio: text(600),
    about: text(5000),
  })
  .refine((v) => v.ibSubjects.length + v.igcseSubjects.length > 0, {
    message: "Add at least one IB or IGCSE subject.",
    path: ["ibSubjects"],
  });

type ProfileInput = z.infer<typeof profileInput>;

export type TutorProfileView = {
  status: "none" | "pending" | "approved" | "rejected";
  profile: (Omit<ProfileInput, "avatarUrl"> & { slug: string; avatarUrl: string | null }) | null;
};

const uniq = (values: Array<string | null | undefined>) => [...new Set(values.filter((v): v is string => Boolean(v)))];

function metadataOf(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

const stringList = (value: unknown) => (Array.isArray(value) ? value.map(String) : []);

function deriveStatus(tutor: { status: string; approved: boolean } | null): TutorProfileView["status"] {
  if (!tutor) return "none";
  if (tutor.status === "archived") return "rejected";
  return tutor.approved && tutor.status === "active" ? "approved" : "pending";
}

// The site's canonical city names; common alternatives map onto them so no duplicate city is created.
const CITY_ALIASES: Record<string, string> = { gurgaon: "gurugram" };

/**
 * Find the tutor's City row (by name or slug, within the country), creating the
 * Country / State / City when missing so every self-signup tutor gets a real
 * location. City rows only feed tutor matching and admin, never public pages.
 */
async function resolveCity(tx: Prisma.TransactionClient, input: { country: string; countryName: string; state: string; city: string }) {
  const code = input.country.toUpperCase();
  const countrySlug = slugify(input.countryName);
  const country =
    (await tx.country.findFirst({ where: { OR: [{ code }, { slug: countrySlug }] }, select: { id: true } })) ??
    (await tx.country.create({ data: { code, name: input.countryName, slug: countrySlug }, select: { id: true } }));

  const citySlug = CITY_ALIASES[slugify(input.city)] ?? slugify(input.city);
  if (!citySlug || !slugify(input.state)) {
    throw new AppError(400, "INVALID_LOCATION", "Write your city and state in English letters.");
  }
  const found = await tx.city.findFirst({
    where: { countryId: country.id, OR: [{ slug: citySlug }, { name: { equals: input.city, mode: "insensitive" } }] },
    select: { id: true, name: true, slug: true },
  });
  if (found) return found;

  const stateSlug = slugify(input.state);
  const state =
    (await tx.state.findFirst({
      where: { countryId: country.id, OR: [{ slug: stateSlug }, { name: { equals: input.state, mode: "insensitive" } }] },
      select: { id: true },
    })) ?? (await tx.state.create({ data: { countryId: country.id, name: input.state, slug: stateSlug }, select: { id: true } }));

  return tx.city.create({
    data: { countryId: country.id, stateId: state.id, name: input.city.replace(/\s+/g, " "), slug: citySlug },
    select: { id: true, name: true, slug: true },
  });
}

async function uniqueTutorSlug(tx: Prisma.TransactionClient, base: string): Promise<string> {
  const root = slugify(base) || "tutor";
  let slug = root;
  for (let i = 2; await tx.tutor.findUnique({ where: { slug }, select: { id: true } }); i++) slug = `${root}-${i}`;
  return slug;
}

export async function getMyTutorProfile(userId: string): Promise<TutorProfileView> {
  const tutor = await prisma.tutor.findFirst({
    where: { userId, deletedAt: null },
    include: {
      profile: true,
      subjects: { orderBy: { priority: "asc" } },
      curriculums: true,
      locations: { orderBy: { priority: "asc" }, include: { city: { include: { state: true, country: true } } } },
    },
  });
  if (!tutor) return { status: "none", profile: null };

  const metadata = metadataOf(tutor.profile?.metadata);
  const loc = tutor.locations[0];
  const savedModes = stringList(metadata.teachingModes).map((m) => m.toLowerCase());
  const modes = savedModes.length
    ? MODES.filter((m) => savedModes.some((s) => s.includes(m)))
    : loc
      ? MODES.filter((m) => loc[`${m}TutoringAvailable` as const])
      : [];
  const faqs = Array.isArray(tutor.faqs) ? (tutor.faqs as Array<{ question?: unknown; answer?: unknown }>) : [];
  const qualifications = Array.isArray(metadata.qualifications)
    ? (metadata.qualifications as Array<{ title?: unknown; description?: unknown }>)
    : [];

  return {
    status: deriveStatus(tutor),
    profile: {
      slug: tutor.slug,
      displayName: tutor.displayName,
      phone: tutor.phone ?? "",
      email: tutor.email ?? "",
      headline: tutor.headline ?? "",
      education: tutor.profile?.education ?? "",
      avatarUrl: tutor.avatarUrl,
      tags: tutor.profile?.tags ?? [],
      languages: tutor.profile?.languages ?? [],
      ibSubjects: tutor.subjects.filter((s) => s.curriculum === "IB").map((s) => s.subjectName),
      igcseSubjects: tutor.subjects.filter((s) => s.curriculum === "IGCSE").map((s) => s.subjectName),
      ibProgrammes: uniq(tutor.curriculums.filter((c) => c.curriculum === "IB").map((c) => c.programme)).filter(
        (p): p is (typeof PROGRAMMES)[number] => (PROGRAMMES as readonly string[]).includes(p),
      ),
      experienceYears: tutor.experienceYears,
      hourlyRate: tutor.hourlyRate === null ? null : Number(tutor.hourlyRate),
      currency: tutor.currency === "USD" ? "USD" : "INR",
      responseTime: tutor.profile?.responseTime ?? "",
      successRate: tutor.profile?.successRate ?? "",
      availabilityText: tutor.profile?.availabilityText ?? "",
      methodology: tutor.profile?.methodology ?? "",
      country: loc?.city.country.code.toLowerCase() ?? "in",
      countryName: loc?.city.country.name ?? "India",
      state: loc?.city.state.name ?? "",
      city: loc?.cityName ?? (typeof metadata.signupCity === "string" ? metadata.signupCity : ""),
      areas: uniq(tutor.locations.map((l) => l.areaName)),
      sectors: uniq(tutor.locations.map((l) => l.sectorName)),
      societies: uniq(tutor.locations.map((l) => l.societyName)),
      travelNotes: loc?.notes ?? "",
      teachingModes: modes,
      countriesCovered: stringList(metadata.countriesCovered),
      qualifications: qualifications.map((q) => ({ title: String(q.title ?? ""), description: String(q.description ?? "") })),
      faqs: faqs.map((f) => ({ question: String(f.question ?? ""), answer: String(f.answer ?? "") })),
      bio: tutor.bio ?? "",
      about: tutor.about ?? "",
    },
  };
}

export async function upsertMyTutorProfile(userId: string, body: unknown): Promise<TutorProfileView> {
  const parsed = profileInput.safeParse(body);
  if (!parsed.success) {
    throw new AppError(400, "INVALID_PROFILE", parsed.error.issues[0]?.message ?? "Please check the profile fields.");
  }
  const input = parsed.data;

  const user = await prisma.user.findFirst({
    where: { id: userId, deletedAt: null },
    select: { email: true, accountType: true, avatarUrl: true },
  });
  if (!user) throw new AppError(404, "USER_NOT_FOUND", "Account not found.");
  if (user.accountType !== "tutor") {
    throw new AppError(403, "NOT_A_TUTOR", "Only tutor accounts can create a tutor profile.");
  }

  const ibSubjects = uniq(input.ibSubjects);
  const igcseSubjects = uniq(input.igcseSubjects);
  const countriesCovered = input.countriesCovered.includes("all") ? ["all"] : uniq(input.countriesCovered);

  await prisma.$transaction(
    async (tx) => {
      const city = await resolveCity(tx, input);
      await tx.user.update({
        where: { id: userId },
        data: { subjects: [...ibSubjects, ...igcseSubjects], headline: input.headline || null, bio: input.bio || null },
      });

      const core = {
        displayName: input.displayName,
        phone: input.phone,
        email: input.email,
        headline: input.headline || null,
        bio: input.bio || null,
        about: input.about || null,
        experienceYears: input.experienceYears,
        hourlyRate: input.hourlyRate,
        currency: input.currency,
        faqs: input.faqs,
      };

      const existing = await tx.tutor.findUnique({ where: { userId }, include: { profile: { select: { metadata: true } } } });
      // An uploaded photo wins; otherwise keep the current one, or fall back to the Google picture.
      const avatarUrl = input.avatarUrl ?? existing?.avatarUrl ?? user.avatarUrl;

      const wantedSlug = input.slug && input.slug !== existing?.slug ? input.slug : null;
      if (wantedSlug) {
        if (wantedSlug.length < 3) throw new AppError(400, "INVALID_SLUG", "Profile link must be at least 3 characters.");
        const taken = await tx.tutor.findUnique({ where: { slug: wantedSlug }, select: { id: true } });
        if (taken) throw new AppError(409, "SLUG_TAKEN", `The profile link "${wantedSlug}" is already taken. Try another.`);
      }

      // Edits keep the current approval state; only brand-new profiles wait for an admin.
      const tutor = existing
        ? await tx.tutor.update({ where: { id: existing.id }, data: { ...core, avatarUrl, ...(wantedSlug ? { slug: wantedSlug } : {}) } })
        : await tx.tutor.create({
            data: {
              ...core,
              avatarUrl,
              slug: wantedSlug ?? (await uniqueTutorSlug(tx, input.displayName)),
              userId,
              status: "draft",
              approved: false,
              verified: false,
            },
          });

      // metadata is shared with admin-only keys (visibility placements), so merge.
      const metadata = {
        ...metadataOf(existing?.profile?.metadata),
        teachingModes: input.teachingModes,
        countriesCovered,
        qualifications: input.qualifications,
        signupCity: input.city,
      };
      const profileData = {
        education: input.education || null,
        methodology: input.methodology || null,
        responseTime: input.responseTime || null,
        successRate: input.successRate || null,
        availabilityText: input.availabilityText || null,
        languages: uniq(input.languages),
        tags: uniq(input.tags),
        metadata,
      };
      await tx.tutorProfile.upsert({
        where: { tutorId: tutor.id },
        create: { tutorId: tutor.id, ...profileData },
        update: profileData,
      });

      await tx.tutorSubject.deleteMany({ where: { tutorId: tutor.id } });
      await tx.tutorSubject.createMany({
        data: [
          ...ibSubjects.map((subjectName, priority) => ({ subjectName, curriculum: "IB" as const, priority })),
          ...igcseSubjects.map((subjectName, priority) => ({ subjectName, curriculum: "IGCSE" as const, priority })),
        ]
          .map((row) => ({ ...row, tutorId: tutor.id, subjectSlug: slugify(row.subjectName) }))
          .filter((row) => row.subjectSlug),
        skipDuplicates: true,
      });

      await tx.tutorCurriculum.deleteMany({ where: { tutorId: tutor.id } });
      await tx.tutorCurriculum.createMany({
        data: [
          ...(ibSubjects.length ? [{ curriculum: "IB" as const, programme: null, isPrimary: true }] : []),
          ...(igcseSubjects.length ? [{ curriculum: "IGCSE" as const, programme: null, isPrimary: !ibSubjects.length }] : []),
          ...(ibSubjects.length ? input.ibProgrammes.map((programme) => ({ curriculum: "IB" as const, programme, isPrimary: false })) : []),
        ].map((row) => ({ ...row, tutorId: tutor.id })),
      });

      // Same row shape the admin editor writes: one row per area / sector / society.
      await tx.tutorLocation.deleteMany({ where: { tutorId: tutor.id } });
      {
        const base = {
          tutorId: tutor.id,
          cityId: city.id,
          cityName: city.name,
          citySlug: city.slug,
          onlineTutoringAvailable: input.teachingModes.includes("online"),
          homeTutoringAvailable: input.teachingModes.includes("home"),
          hybridTutoringAvailable: input.teachingModes.includes("hybrid"),
          notes: input.travelNotes || null,
          isActive: true,
        };
        let priority = 0;
        const rows = [
          ...uniq(input.areas).map((areaName) => ({ ...base, areaName, areaSlug: slugify(areaName), priority: priority++ })),
          ...uniq(input.sectors).map((sectorName) => ({ ...base, sectorName, sectorSlug: slugify(sectorName), priority: priority++ })),
          ...uniq(input.societies).map((societyName) => ({ ...base, societyName, societySlug: slugify(societyName), priority: priority++ })),
        ];
        await tx.tutorLocation.createMany({ data: rows.length ? rows : [{ ...base, priority: 0 }] });
      }
    },
    { timeout: 20_000 },
  );

  return getMyTutorProfile(userId);
}
