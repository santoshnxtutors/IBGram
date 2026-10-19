import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { sendMail } from "@/lib/mail";
import { demoScheduledEmail } from "@/lib/emails";
import { createDemoMeeting } from "@/lib/google-calendar";
import { openConversation } from "@/lib/chat/service";
import { ensureStudentAccount } from "@/lib/students";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const bodySchema = z
  .object({
    tutorId: z.string().min(1),
    subject: z.string().trim().min(1).max(160),
    scheduledAt: z.string().min(1),
    durationMinutes: z.coerce.number().int().min(15).max(180).default(45),
    // Either an existing student account…
    studentId: z.string().optional(),
    // …or a new one to create on the spot.
    newStudentName: z.string().trim().max(120).optional(),
    newStudentEmail: z.string().trim().email().max(240).optional(),
  })
  .refine((v) => v.studentId || (v.newStudentName && v.newStudentEmail), {
    message: "Pick an existing student, or give a name and email for a new one.",
  });

const fullName = (u: { firstName: string | null; lastName: string | null; email: string }) =>
  [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;

/** Admin-scheduled demo: books it, creates the Meet, and emails student + tutor. */
export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = bodySchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const input = parsed.data;

  const when = new Date(input.scheduledAt);
  if (Number.isNaN(when.getTime())) return jsonNoStore({ error: "Invalid date/time." }, { status: 400 });

  const tutor = await prisma.tutor.findFirst({
    where: { id: input.tutorId, deletedAt: null },
    select: { id: true, userId: true, displayName: true },
  });
  if (!tutor) return jsonNoStore({ error: "Tutor not found." }, { status: 404 });
  if (!tutor.userId) {
    return jsonNoStore({ error: "That tutor has no login yet. Create one from Tutor Applications first." }, { status: 409 });
  }

  // Resolve the student, creating the account when the admin typed a new one.
  let credentials: { email: string; password: string } | null = null;
  let studentId = input.studentId ?? "";

  if (!studentId) {
    const account = await ensureStudentAccount(input.newStudentEmail!, input.newStudentName);
    studentId = account.id;
    credentials = account.credentials;
  }

  const student = await prisma.user.findUnique({
    where: { id: studentId },
    select: { id: true, email: true, firstName: true, lastName: true },
  });
  if (!student) return jsonNoStore({ error: "Student not found." }, { status: 404 });
  if (student.id === tutor.userId) return jsonNoStore({ error: "Tutor and student cannot be the same person." }, { status: 400 });

  const tutorUser = await prisma.user.findUnique({
    where: { id: tutor.userId },
    select: { email: true, firstName: true, lastName: true },
  });
  if (!tutorUser) return jsonNoStore({ error: "Tutor account not found." }, { status: 404 });

  const booking = await prisma.demoBooking.create({
    data: {
      studentId: student.id,
      tutorId: tutor.userId,
      subject: input.subject,
      scheduledAt: when,
      status: "confirmed",
      notes: "Scheduled by IB Gram admin.",
    },
    select: { id: true },
  });
  await prisma.demoRequest.create({
    data: {
      studentId: student.id,
      tutorId: tutor.id,
      subject: input.subject,
      preferredAt: when,
      notes: "Scheduled by IB Gram admin.",
      status: "scheduled",
      demoBookingId: booking.id,
    },
  });

  const meeting = await createDemoMeeting({
    summary: `IB Gram demo: ${input.subject}`,
    description: `Demo class between ${tutor.displayName} (tutor) and ${fullName(student)} (student).`,
    startsAt: when,
    durationMinutes: input.durationMinutes,
    attendees: [student.email, tutorUser.email],
  });
  if (meeting) {
    await prisma.demoBooking.update({
      where: { id: booking.id },
      data: { meetLink: meeting.meetLink, meetEventId: meeting.eventId },
    });
  }
  const meetLink = meeting?.meetLink ?? null;

  // Scheduling the demo is what opens the student <-> tutor thread.
  const chatOpened = await openConversation(student.id, tutor.userId)
    .then(() => true)
    .catch((error) => {
      console.error("[admin/demos] could not open the chat:", error);
      return false;
    });

  const [studentEmailed, tutorEmailed] = await Promise.all([
    sendMail({
      to: student.email,
      ...demoScheduledEmail({
        recipientName: fullName(student), otherPartyName: tutor.displayName, viewerRole: "student",
        subject: input.subject, scheduledAt: when, meetLink, credentials,
      }),
    }),
    sendMail({
      to: tutorUser.email,
      ...demoScheduledEmail({
        recipientName: fullName(tutorUser), otherPartyName: fullName(student), viewerRole: "tutor",
        subject: input.subject, scheduledAt: when, meetLink, credentials: null,
      }),
    }),
  ]);

  return jsonNoStore({
    ok: true,
    bookingId: booking.id,
    meetLink,
    accountCreated: Boolean(credentials),
    chatOpened,
    studentEmailed,
    tutorEmailed,
  });
}
