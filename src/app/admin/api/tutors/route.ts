import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAffectedPathsForTutor } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { getTutors } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { slugifyAdmin } from "../../_lib/admin-url";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return jsonNoStore({ tutors: await getTutors() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createTutorSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return jsonNoStore(
      { error: parsed.error.issues[0]?.message ?? "Invalid tutor payload.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const slug = slugifyAdmin(data.slug || data.displayName);
  if (!slug) return jsonNoStore({ error: "Tutor slug is required." }, { status: 400 });

  try {
    const existing = await prisma.tutor.findUnique({ where: { slug }, select: { id: true } });
    if (existing) return jsonNoStore({ error: `Slug "${slug}" is already used by another tutor.` }, { status: 409 });

    const citySlug = slugifyAdmin(data.primaryCitySlug || "gurugram");
    const city = await prisma.city.findFirst({ where: { slug: citySlug } });
    const tutor = await prisma.$transaction(async (tx) => {
      const created = await tx.tutor.create({
        data: {
          slug,
          displayName: data.displayName,
          headline: data.headline ?? null,
          bio: data.bio ?? null,
          about: data.about ?? null,
          status: data.approved ? "active" : data.status ?? "draft",
          verified: data.verified ?? false,
          approved: data.approved ?? false,
          avatarUrl: data.avatarUrl ?? null,
          rating: data.rating ?? null,
          reviewCount: data.reviewCount ?? 0,
          experienceYears: data.experienceYears ?? null,
          hourlyRate: data.hourlyRate ?? null,
          currency: (data.currency || "INR").toUpperCase(),
          faqs: data.faqs ?? [],
        },
      });

      await tx.tutorProfile.create({
        data: {
          tutorId: created.id,
          education: data.education ?? null,
          methodology: data.methodology ?? null,
          successRate: data.successRate ?? null,
          responseTime: data.responseTime ?? null,
          availabilityText: data.availabilityText ?? null,
          languages: data.languages ?? [],
          tags: data.tags ?? [],
        },
      });

      const subjectRows = [
        ...(data.ibSubjects ?? []).map((subjectName, priority) => ({
          tutorId: created.id,
          subjectName,
          subjectSlug: slugifyAdmin(subjectName),
          curriculum: "IB" as const,
          priority,
        })),
        ...(data.igcseSubjects ?? []).map((subjectName, priority) => ({
          tutorId: created.id,
          subjectName,
          subjectSlug: slugifyAdmin(subjectName),
          curriculum: "IGCSE" as const,
          priority,
        })),
      ].filter((row) => row.subjectName && row.subjectSlug);
      if (subjectRows.length) await tx.tutorSubject.createMany({ data: subjectRows, skipDuplicates: true });

      const curriculumRows = buildCurriculumRows(created.id, data.curriculums, data.ibProgrammes);
      if (curriculumRows.length) await tx.tutorCurriculum.createMany({ data: curriculumRows, skipDuplicates: true });

      if (city) {
        await tx.tutorLocation.createMany({
          data: buildLocationRows(
            created.id,
            city,
            data.areas,
            data.sectors,
            data.societies,
            data.teachingModes,
            data.travelNotes,
          ),
        });
      }

      if (data.avatarAssetId) {
        const asset = await tx.asset.findUnique({ where: { id: data.avatarAssetId } });
        if (asset) {
          await tx.tutorAsset.create({
            data: { tutorId: created.id, assetId: data.avatarAssetId, role: "avatar", sortOrder: 0 },
          });
        }
      }

      return created;
    });

    const revalidated = applyRevalidationTargets(
      getAffectedPathsForTutor({
        ...data,
        id: tutor.id,
        slug: tutor.slug,
      }),
    );
    return jsonNoStore({ ok: true, id: tutor.id, slug: tutor.slug, tutor, revalidated }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return jsonNoStore({ error: `Create failed: ${message.slice(0, 500)}` }, { status: 500 });
  }
}

const createTutorSchema = z.object({
  slug: z.string().max(180).optional(),
  displayName: z.string().trim().min(1, "Name is required.").max(200),
  headline: z.string().max(300).optional().nullable(),
  bio: z.string().max(8000).optional().nullable(),
  about: z.string().max(20000).optional().nullable(),
  primaryCitySlug: z.string().max(120).optional().nullable(),
  curriculums: z.array(z.string()).optional(),
  ibProgrammes: z.array(z.string()).optional(),
  ibSubjects: z.array(z.string()).optional(),
  igcseSubjects: z.array(z.string()).optional(),
  teachingModes: z.array(z.string()).optional(),
  areas: z.array(z.string()).optional(),
  sectors: z.array(z.string()).optional(),
  societies: z.array(z.string()).optional(),
  travelNotes: z.string().max(2000).optional().nullable(),
  status: z.enum(["draft", "active", "paused", "archived"]).optional(),
  verified: z.boolean().optional(),
  approved: z.boolean().optional(),
  avatarUrl: z.string().max(1000).optional().nullable(),
  avatarAssetId: z.string().max(60).optional().nullable(),
  tags: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  rating: z.number().min(0).max(5).optional().nullable(),
  reviewCount: z.number().int().min(0).optional().nullable(),
  experienceYears: z.number().int().min(0).max(80).optional().nullable(),
  hourlyRate: z.number().min(0).max(100000).optional().nullable(),
  currency: z.string().max(8).optional().nullable(),
  education: z.string().max(500).optional().nullable(),
  successRate: z.string().max(40).optional().nullable(),
  responseTime: z.string().max(60).optional().nullable(),
  availabilityText: z.string().max(500).optional().nullable(),
  methodology: z.string().max(4000).optional().nullable(),
  faqs: z.array(z.object({ question: z.string().min(1), answer: z.string().min(1) })).optional(),
});

function buildCurriculumRows(tutorId: string, curriculums: string[] = ["IB"], ibProgrammes: string[] = []) {
  const rows: Array<{ tutorId: string; curriculum: "IB" | "IGCSE"; programme?: string; isPrimary: boolean }> = [];
  const seen = new Set<string>();
  for (const value of curriculums.length ? curriculums : ["IB"]) {
    const curriculum = value.trim().toUpperCase();
    if ((curriculum === "IB" || curriculum === "IGCSE") && !seen.has(curriculum)) {
      rows.push({ tutorId, curriculum, isPrimary: rows.length === 0 });
      seen.add(curriculum);
    }
  }
  for (const value of ibProgrammes) {
    const programme = value.trim().toUpperCase();
    const key = `IB:${programme}`;
    if (!programme || seen.has(key)) continue;
    rows.push({ tutorId, curriculum: "IB", programme, isPrimary: false });
    seen.add(key);
  }
  return rows;
}

function uniqueClean(values: string[] | undefined): string[] {
  return [...new Set((values ?? []).map((value) => value.trim()).filter(Boolean))];
}

function buildLocationRows(
  tutorId: string,
  city: { id: string; name: string; slug: string },
  areas: string[] | undefined,
  sectors: string[] | undefined,
  societies: string[] | undefined,
  modes: string[] | undefined,
  notes: string | null | undefined,
) {
  const modeSet = new Set((modes ?? []).map((mode) => mode.trim().toLowerCase()).filter(Boolean));
  const base = {
    tutorId,
    cityId: city.id,
    cityName: city.name,
    citySlug: city.slug,
    homeTutoringAvailable: modeSet.has("home"),
    onlineTutoringAvailable: modeSet.has("online") || modeSet.size === 0,
    hybridTutoringAvailable: modeSet.has("hybrid"),
    notes: notes ?? null,
    isActive: true,
  };
  let priority = 0;
  const rows = [
    ...uniqueClean(areas).map((areaName) => ({
      ...base,
      areaName,
      areaSlug: slugifyAdmin(areaName),
      priority: priority++,
    })),
    ...uniqueClean(sectors).map((sectorName) => ({
      ...base,
      sectorName,
      sectorSlug: slugifyAdmin(sectorName),
      priority: priority++,
    })),
    ...uniqueClean(societies).map((societyName) => ({
      ...base,
      societyName,
      societySlug: slugifyAdmin(societyName),
      priority: priority++,
    })),
  ];

  return rows.length ? rows : [{ ...base, priority: 0 }];
}
