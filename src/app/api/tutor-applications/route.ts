import type { NextRequest } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { TUTOR_APPLICATION_TITLE } from "@/lib/tutor-applications";

export const dynamic = "force-dynamic";

/**
 * Tutor applications from the "Join as tutor" CTA.
 *
 * These reuse the JobApplication table rather than adding a model: it already has
 * every field a tutor application needs (name, contact, experience, resume + photo
 * upload with mime/size, consent, free-form answersJson) and an admin screen that
 * lists and filters them. Rows are written with jobId null and a fixed
 * jobTitleSnapshot so they are distinguishable from real job postings.
 *
 * The tutor-specific answers (subjects, curricula, boards, qualification, teaching
 * mode, city) go into answersJson, which the admin view already renders.
 */

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const tutorSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(120),
  lastName: z.string().min(1, "Last name is required").max(120),
  email: z.string().email("A valid email is required").max(240),
  phone: z.string().min(6, "Mobile number is required").max(40),
  currentLocation: z.string().min(1, "City is required").max(160),
  country: z.string().min(1, "Country is required").max(120),
  state: z.string().min(1, "State or province is required").max(160),
  addressLine: z.string().max(400).optional().nullable(),
  postalCode: z.string().max(24).optional().nullable(),
  feesRange: z.string().max(120).optional().nullable(),
  experienceYears: z.number().int().min(0).max(60).nullable(),
  linkedInUrl: z.string().max(300).optional().nullable(),
  portfolioUrl: z.string().max(300).optional().nullable(),
  consentAccepted: z.boolean().refine(Boolean, "Please accept the consent statement"),
  curricula: z.array(z.string()).min(1, "Select at least one curriculum"),
  subjects: z.string().min(1, "List at least one subject").max(600),
  highestQualification: z.string().min(1, "Highest qualification is required").max(240),
  university: z.string().max(240).optional().nullable(),
  teachingModes: z.array(z.string()).min(1, "Select at least one teaching mode"),
  availability: z.string().max(400).optional().nullable(),
  about: z.string().max(2000).optional().nullable(),
});

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(-160) || "upload";
}

async function saveUpload(file: File, folder: "resumes" | "photos") {
  if (file.size > MAX_UPLOAD_BYTES) throw new Error("File is larger than 5MB");
  if (folder === "resumes" && file.type && !ALLOWED_RESUME_TYPES.has(file.type)) {
    throw new Error("Resume must be a PDF or Word document");
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads", "tutor-applications", folder);
  await mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
  await writeFile(path.join(uploadDir, filename), Buffer.from(await file.arrayBuffer()));

  return {
    url: `/uploads/tutor-applications/${folder}/${filename}`,
    filename: file.name,
    mimeType: file.type || null,
    sizeBytes: file.size,
  };
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success so they do not retry.
  if (stringValue(formData, "company")) return Response.json({ ok: true });

  const rawExperience = stringValue(formData, "experienceYears");
  const parsed = tutorSchema.safeParse({
    firstName: stringValue(formData, "firstName"),
    lastName: stringValue(formData, "lastName"),
    email: stringValue(formData, "email"),
    phone: stringValue(formData, "phone"),
    currentLocation: stringValue(formData, "currentLocation"),
    country: stringValue(formData, "country"),
    state: stringValue(formData, "state"),
    addressLine: stringValue(formData, "addressLine"),
    postalCode: stringValue(formData, "postalCode"),
    feesRange: stringValue(formData, "feesRange"),
    experienceYears: rawExperience ? Number(rawExperience) : null,
    linkedInUrl: stringValue(formData, "linkedInUrl"),
    portfolioUrl: stringValue(formData, "portfolioUrl"),
    consentAccepted: formData.get("consentAccepted") === "true",
    curricula: formData.getAll("curricula").filter((v): v is string => typeof v === "string"),
    subjects: stringValue(formData, "subjects"),
    highestQualification: stringValue(formData, "highestQualification"),
    university: stringValue(formData, "university"),
    teachingModes: formData.getAll("teachingModes").filter((v): v is string => typeof v === "string"),
    availability: stringValue(formData, "availability"),
    about: stringValue(formData, "about"),
  });

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid application" }, { status: 400 });
  }

  const resume = formData.get("resume");
  const photo = formData.get("photo");

  try {
    // Resume is optional here — a strong applicant should not be blocked by not
    // having a CV to hand, and the team can request one on follow-up.
    const resumeData = resume instanceof File && resume.size ? await saveUpload(resume, "resumes") : null;
    const photoData = photo instanceof File && photo.size ? await saveUpload(photo, "photos") : null;

    const {
      feesRange,
      country,
      state,
      addressLine,
      postalCode,
      curricula,
      subjects,
      highestQualification,
      university,
      teachingModes,
      availability,
      about,
      ...candidate
    } = parsed.data;

    const item = await prisma.jobApplication.create({
      data: {
        ...candidate,
        jobId: null,
        jobTitleSnapshot: TUTOR_APPLICATION_TITLE,
        resumeUrl: resumeData?.url ?? null,
        resumeFilename: resumeData?.filename ?? null,
        resumeMimeType: resumeData?.mimeType ?? null,
        resumeSizeBytes: resumeData?.sizeBytes ?? null,
        photoUrl: photoData?.url ?? null,
        photoFilename: photoData?.filename ?? null,
        photoMimeType: photoData?.mimeType ?? null,
        photoSizeBytes: photoData?.sizeBytes ?? null,
        coverLetter: about ?? null,
        answersJson: {
          feesRange,
          country,
          state,
          city: parsed.data.currentLocation,
          addressLine,
          postalCode,
          curricula,
          subjects,
          highestQualification,
          university,
          teachingModes,
          availability,
        },
      },
    });

    return Response.json({ item: { id: item.id } });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Could not save application" },
      { status: 400 },
    );
  }
}
