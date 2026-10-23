import type { NextRequest } from "next/server";
import { z } from "zod";
import { hashPassword, validatePasswordPolicy } from "@ibgram/authentication";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { sendMail } from "@/lib/mail";
import { tutorCredentialsEmail, studentCredentialsEmail } from "@/lib/emails";
import { openConversation } from "@/lib/chat/service";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const schema = z.object({
  role: z.enum(["student", "tutor"], { message: "Choose student or tutor." }),
  firstName: z.string({ message: "First name is required." }).trim().min(1, "First name is required.").max(80, "First name is too long."),
  lastName: z.string().trim().max(80, "Last name is too long.").optional().default(""),
  email: z.string({ message: "Email is required." }).trim().toLowerCase().email("Enter a valid email address.").max(240, "Email is too long."),
  password: z.string({ message: "Password is required." }).min(10, "Password must be at least 10 characters.").max(200, "Password is too long."),
  phone: z.string().trim().max(40, "Phone number is too long.").optional().default(""),
  sendEmail: z.boolean().optional().default(true),
  // Student extras — a StudentProfile is only created when a phone number is given.
  city: z.string().trim().max(120, "City is too long.").optional().default(""),
  curriculum: z.string().trim().max(40, "Curriculum is too long.").optional().default("IB"),
  grade: z.string().trim().max(60, "Grade is too long.").optional().default(""),
  school: z.string().trim().max(160, "School is too long.").optional().default(""),
  subjects: z.string().trim().max(400, "Subjects list is too long.").optional().default(""),
  // Tutor extras.
  headline: z.string().trim().max(200, "Headline is too long.").optional().default(""),
  /** Open a permanent chat with this counterpart straight away. */
  pairWithUserId: z.string().trim().max(40).optional().default(""),
});

/** email -> a free username, the same way the public signup does it. */
async function uniqueUsername(seed: string): Promise<string> {
  const base = seed.split("@")[0].toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "user";
  let username = base;
  let i = 1;
  while (await prisma.user.findUnique({ where: { username }, select: { id: true } })) {
    i += 1;
    username = `${base}${i}`;
  }
  return username;
}

async function uniqueSlug(name: string): Promise<string> {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "tutor";
  let slug = base;
  let i = 1;
  while (await prisma.tutor.findUnique({ where: { slug }, select: { id: true } })) {
    i += 1;
    slug = `${base}-${i}`;
  }
  return slug;
}

/** Admin creates a permanent student or tutor account (and the matching profile row). */
export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = schema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid details." }, { status: 400 });
  const input = parsed.data;

  const policy = validatePasswordPolicy(input.password);
  if (!policy.valid) return jsonNoStore({ error: policy.errors.join(" ") }, { status: 400 });

  const existing = await prisma.user.findFirst({ where: { email: input.email }, select: { id: true, deletedAt: true } });
  if (existing) return jsonNoStore({ error: "An account already exists for that email." }, { status: 409 });

  const fullName = [input.firstName, input.lastName].filter(Boolean).join(" ");
  const user = await prisma.user.create({
    data: {
      email: input.email,
      username: await uniqueUsername(input.email),
      passwordHash: await hashPassword(input.password),
      firstName: input.firstName,
      lastName: input.lastName || null,
      accountType: input.role,
      status: "active",
      headline: input.role === "tutor" ? input.headline || null : null,
    },
    select: { id: true, email: true, firstName: true, lastName: true },
  });

  // A tutor needs a Tutor row to be editable and publishable from the admin panel.
  if (input.role === "tutor") {
    await prisma.tutor.create({
      data: {
        slug: await uniqueSlug(fullName),
        userId: user.id,
        displayName: fullName,
        email: input.email,
        phone: input.phone || null,
        headline: input.headline || null,
        status: "draft",
        approved: false,
      },
    });
  } else if (input.phone) {
    // StudentProfile needs phone/curriculum/grade/city, so it is only created
    // when admin supplied a phone number — the rest falls back to a placeholder.
    await prisma.studentProfile.create({
      data: {
        userId: user.id,
        phone: input.phone,
        curriculum: input.curriculum || "IB",
        grade: input.grade || "Not set",
        school: input.school || null,
        city: input.city || "Not set",
        subjects: input.subjects ? input.subjects.split(",").map((s) => s.trim()).filter(Boolean) : [],
        status: "new",
      },
    });
  }

  // Optional: open the permanent chat with the counterpart in the same step.
  let pairedConversationId: string | null = null;
  if (input.pairWithUserId) {
    const other = await prisma.user.findFirst({
      where: { id: input.pairWithUserId, deletedAt: null },
      select: { id: true, accountType: true },
    });
    const wanted = input.role === "tutor" ? "student" : "tutor";
    if (other?.accountType === wanted) {
      const studentId = input.role === "student" ? user.id : other.id;
      const tutorId = input.role === "tutor" ? user.id : other.id;
      pairedConversationId = (await openConversation(studentId, tutorId, true)).id;
    }
  }

  let emailed = false;
  if (input.sendEmail) {
    const payload =
      input.role === "tutor"
        ? tutorCredentialsEmail({ name: fullName, email: input.email, password: input.password })
        : studentCredentialsEmail({ name: fullName, email: input.email, password: input.password });
    emailed = Boolean(await sendMail({ to: input.email, ...payload }));
  }

  return jsonNoStore({ ok: true, userId: user.id, emailed, pairedConversationId }, { status: 201 });
}
