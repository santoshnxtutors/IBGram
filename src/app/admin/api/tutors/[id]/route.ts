import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  displayName: z.string().min(1).max(200).optional(),
  headline: z.string().max(300).optional().nullable(),
  bio: z.string().max(8000).optional().nullable(),
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
});

function pickFirstLocation(
  primaryCitySlug: string | null | undefined,
  areas: string[] | undefined,
  sectors: string[] | undefined,
  societies: string[] | undefined,
  modes: string[] | undefined,
) {
  const cleanArea = (areas?.[0] ?? "").trim();
  const cleanSector = (sectors?.[0] ?? "").trim();
  const cleanSociety = (societies?.[0] ?? "").trim();
  const m = new Set((modes ?? []).map((s) => s.trim().toLowerCase()));
  return {
    cityName: primaryCitySlug ?? "",
    citySlug: primaryCitySlug?.toLowerCase().replace(/\s+/g, "-") ?? "",
    areaName: cleanArea || null,
    areaSlug: cleanArea ? cleanArea.toLowerCase().replace(/\s+/g, "-") : null,
    sectorName: cleanSector || null,
    sectorSlug: cleanSector ? cleanSector.toLowerCase().replace(/\s+/g, "-") : null,
    societyName: cleanSociety || null,
    societySlug: cleanSociety ? cleanSociety.toLowerCase().replace(/\s+/g, "-") : null,
    homeTutoringAvailable: m.has("home"),
    onlineTutoringAvailable: m.has("online"),
    hybridTutoringAvailable: m.has("hybrid"),
  };
}

function isTransientDbError(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  const msg = err.message.toLowerCase();
  return (
    msg.includes("too many database connections") ||
    msg.includes("remaining connection slots") ||
    msg.includes("timed out fetching a new connection") ||
    msg.includes("connection terminated") ||
    msg.includes("can't reach database server") ||
    msg.includes("server has closed the connection") ||
    msg.includes("p1001") ||
    msg.includes("p1002") ||
    msg.includes("p2024") ||
    msg.includes("p2037")
  );
}

async function withRetry<T>(operation: () => Promise<T>, attempts = 4, baseMs = 400): Promise<T> {
  let lastErr: unknown = null;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      return await operation();
    } catch (err) {
      lastErr = err;
      if (!isTransientDbError(err) || attempt === attempts - 1) {
        throw err;
      }
      const backoff = baseMs * Math.pow(2, attempt) + Math.floor(Math.random() * 200);
      await new Promise((resolve) => setTimeout(resolve, backoff));
    }
  }
  throw lastErr;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }
  const data = parsed.data;

  try {
    // Single $transaction = single connection for ALL queries (lookup +
    // update + profile upsert + subject replace + curriculum replace +
    // location replace + final read). withRetry handles transient
    // "too many connections" rejections with exponential backoff.
    const result = await withRetry(() =>
      prisma.$transaction(async (tx) => {
        // 1. Lookup by cuid or slug
        const existing = await tx.tutor.findFirst({
          where: { OR: [{ id }, { slug: id }] },
        });
        if (!existing) {
          return { notFound: true as const };
        }

        // 2. Update core Tutor row
        await tx.tutor.update({
          where: { id: existing.id },
          data: {
            ...(data.displayName !== undefined ? { displayName: data.displayName } : {}),
            ...(data.headline !== undefined ? { headline: data.headline } : {}),
            ...(data.bio !== undefined ? { bio: data.bio } : {}),
            ...(data.status !== undefined ? { status: data.status } : {}),
            ...(data.verified !== undefined ? { verified: data.verified } : {}),
            ...(data.approved !== undefined ? { approved: data.approved } : {}),
          },
        });

        // 3. Mirror bio to TutorProfile
        if (data.bio !== undefined) {
          await tx.tutorProfile.upsert({
            where: { tutorId: existing.id },
            create: { tutorId: existing.id, bio: data.bio },
            update: { bio: data.bio },
          });
        }

        // 4. Replace TutorSubject rows
        if (data.ibSubjects || data.igcseSubjects) {
          await tx.tutorSubject.deleteMany({ where: { tutorId: existing.id } });
          const subjectRows: Array<{
            tutorId: string;
            subjectName: string;
            subjectSlug: string;
            curriculum: "IB" | "IGCSE";
            priority: number;
          }> = [];
          (data.ibSubjects ?? []).forEach((name, index) => {
            const trimmed = name.trim();
            if (!trimmed) return;
            subjectRows.push({
              tutorId: existing.id,
              subjectName: trimmed,
              subjectSlug: trimmed.toLowerCase().replace(/\s+/g, "-"),
              curriculum: "IB",
              priority: index,
            });
          });
          (data.igcseSubjects ?? []).forEach((name, index) => {
            const trimmed = name.trim();
            if (!trimmed) return;
            subjectRows.push({
              tutorId: existing.id,
              subjectName: trimmed,
              subjectSlug: trimmed.toLowerCase().replace(/\s+/g, "-"),
              curriculum: "IGCSE",
              priority: index,
            });
          });
          if (subjectRows.length > 0) {
            await tx.tutorSubject.createMany({ data: subjectRows, skipDuplicates: true });
          }
        }

        // 5. Replace TutorCurriculum rows
        if (data.curriculums || data.ibProgrammes) {
          await tx.tutorCurriculum.deleteMany({ where: { tutorId: existing.id } });
          const curriculumRows: Array<{
            tutorId: string;
            curriculum: "IB" | "IGCSE";
            programme?: string;
            isPrimary: boolean;
          }> = [];
          const seen = new Set<string>();
          for (const curriculumName of data.curriculums ?? []) {
            const c = curriculumName.trim().toUpperCase();
            if ((c === "IB" || c === "IGCSE") && !seen.has(c)) {
              curriculumRows.push({
                tutorId: existing.id,
                curriculum: c as "IB" | "IGCSE",
                isPrimary: seen.size === 0,
              });
              seen.add(c);
            }
          }
          for (const programme of data.ibProgrammes ?? []) {
            const trimmed = programme.trim().toUpperCase();
            const key = `IB:${trimmed}`;
            if (!trimmed || seen.has(key)) continue;
            curriculumRows.push({
              tutorId: existing.id,
              curriculum: "IB",
              programme: trimmed,
              isPrimary: false,
            });
            seen.add(key);
          }
          if (curriculumRows.length > 0) {
            await tx.tutorCurriculum.createMany({ data: curriculumRows, skipDuplicates: true });
          }
        }

        // 6. Replace TutorLocation primary row (if any location field changed)
        if (
          data.primaryCitySlug !== undefined ||
          data.areas !== undefined ||
          data.sectors !== undefined ||
          data.societies !== undefined ||
          data.teachingModes !== undefined ||
          data.travelNotes !== undefined
        ) {
          const citySlug = (data.primaryCitySlug ?? "gurugram").toLowerCase();
          const city = await tx.city.findFirst({ where: { slug: citySlug } });
          if (city) {
            await tx.tutorLocation.deleteMany({ where: { tutorId: existing.id } });
            const loc = pickFirstLocation(
              data.primaryCitySlug ?? citySlug,
              data.areas,
              data.sectors,
              data.societies,
              data.teachingModes,
            );
            await tx.tutorLocation.create({
              data: {
                tutorId: existing.id,
                cityId: city.id,
                cityName: loc.cityName || "Gurugram",
                citySlug: loc.citySlug || "gurugram",
                areaName: loc.areaName,
                areaSlug: loc.areaSlug,
                sectorName: loc.sectorName,
                sectorSlug: loc.sectorSlug,
                societyName: loc.societyName,
                societySlug: loc.societySlug,
                homeTutoringAvailable: loc.homeTutoringAvailable,
                onlineTutoringAvailable: loc.onlineTutoringAvailable,
                hybridTutoringAvailable: loc.hybridTutoringAvailable,
                notes: data.travelNotes ?? null,
                priority: 0,
                isActive: true,
              },
            });
          }
        }

        return { notFound: false as const, id: existing.id };
      }, { timeout: 15_000, maxWait: 8_000 }),
    );

    if (result.notFound) {
      return Response.json({ error: `Tutor not found for id or slug "${id}"` }, { status: 404 });
    }

    revalidateTag("cms:tutors");
    return Response.json({ ok: true, id: result.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const transient = isTransientDbError(err);
    return Response.json(
      {
        error: transient
          ? "Database is out of connection slots (after retry). Try again in a few seconds or switch to a local/pooled Postgres."
          : `Save failed: ${message.slice(0, 500)}`,
        transient,
      },
      { status: transient ? 503 : 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  try {
    const result = await withRetry(() =>
      prisma.$transaction(async (tx) => {
        const existing = await tx.tutor.findFirst({
          where: { OR: [{ id }, { slug: id }] },
        });
        if (!existing) return { notFound: true as const };
        await tx.tutor.update({
          where: { id: existing.id },
          data: { deletedAt: new Date(), status: "archived" },
        });
        return { notFound: false as const };
      }),
    );
    if (result.notFound) {
      return Response.json({ error: `Tutor not found for id or slug "${id}"` }, { status: 404 });
    }
    revalidateTag("cms:tutors");
    return Response.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: `Delete failed: ${message.slice(0, 500)}` }, { status: 503 });
  }
}
