import type { NextRequest } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const applicationSchema = z.object({
  firstName: z.string().min(1).max(120),
  lastName: z.string().min(1).max(120),
  email: z.string().email().max(240),
  phone: z.string().optional().nullable(),
  currentLocation: z.string().optional().nullable(),
  currentRole: z.string().optional().nullable(),
  experienceYears: z.number().int().optional().nullable(),
  noticePeriod: z.string().optional().nullable(),
  expectedCompensation: z.string().optional().nullable(),
  linkedInUrl: z.string().optional().nullable(),
  portfolioUrl: z.string().optional().nullable(),
  availability: z.string().optional().nullable(),
  consentAccepted: z.boolean().refine(Boolean, "Consent is required"),
});

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(-160) || "upload";
}

async function saveUpload(file: File, folder: "resumes" | "photos") {
  if (!file.size) throw new Error("Resume is required");

  const uploadDir = path.join(process.cwd(), "public", "uploads", "job-applications", folder);
  await mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
  const absolutePath = path.join(uploadDir, filename);
  await writeFile(absolutePath, Buffer.from(await file.arrayBuffer()));

  return {
    url: `/uploads/job-applications/${folder}/${filename}`,
    filename: file.name,
    mimeType: file.type || null,
    sizeBytes: file.size,
  };
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await prisma.job.findFirst({
    where: {
      slug,
      status: "published",
      OR: [{ closesAt: null }, { closesAt: { gte: new Date() } }],
    },
    select: { id: true, title: true, slug: true },
  });

  if (!job) return Response.json({ error: "This job is not accepting applications" }, { status: 404 });

  const formData = await request.formData();
  const resume = formData.get("resume");
  if (!(resume instanceof File)) return Response.json({ error: "Resume is required" }, { status: 400 });
  const photo = formData.get("photo");

  const rawExperience = stringValue(formData, "experienceYears");
  const parsed = applicationSchema.safeParse({
    firstName: stringValue(formData, "firstName"),
    lastName: stringValue(formData, "lastName"),
    email: stringValue(formData, "email"),
    phone: stringValue(formData, "phone"),
    currentLocation: stringValue(formData, "currentLocation"),
    currentRole: stringValue(formData, "currentRole"),
    experienceYears: rawExperience ? Number(rawExperience) : null,
    noticePeriod: stringValue(formData, "noticePeriod"),
    expectedCompensation: stringValue(formData, "expectedCompensation"),
    linkedInUrl: stringValue(formData, "linkedInUrl"),
    portfolioUrl: stringValue(formData, "portfolioUrl"),
    availability: stringValue(formData, "availability"),
    consentAccepted: formData.get("consentAccepted") === "true",
  });

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid application" }, { status: 400 });
  }

  try {
    const resumeData = await saveUpload(resume, "resumes");
    const photoData = photo instanceof File && photo.size ? await saveUpload(photo, "photos") : null;
    const { availability, ...candidate } = parsed.data;
    const item = await prisma.jobApplication.create({
      data: {
        ...candidate,
        jobId: job.id,
        jobTitleSnapshot: job.title,
        resumeUrl: resumeData.url,
        resumeFilename: resumeData.filename,
        resumeMimeType: resumeData.mimeType,
        resumeSizeBytes: resumeData.sizeBytes,
        photoUrl: photoData?.url ?? null,
        photoFilename: photoData?.filename ?? null,
        photoMimeType: photoData?.mimeType ?? null,
        photoSizeBytes: photoData?.sizeBytes ?? null,
        answersJson: { availability },
      },
    });
    revalidatePath(`/jobs/${job.slug}/`);
    return Response.json({ item: { id: item.id } });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : "Could not save application" }, { status: 400 });
  }
}
