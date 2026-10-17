import { prisma } from "../../lib/prisma";
import { AppError } from "../../middleware/error.middleware";
import { getEnv } from "../../config/env";
import { sendMail } from "../../lib/mail";
import { demoConfirmedEmail, demoRequestedStudentEmail, demoRequestedTutorEmail } from "../../lib/emails";
import { cancelDemoMeeting, createDemoMeeting } from "../../lib/google-calendar";

export type TutorCard = {
  id: string; // Tutor id
  slug: string;
  name: string;
  headline: string | null;
  subjects: string[];
  avatarUrl: string | null;
  rating: number | null;
  experienceYears: number | null;
  city: string | null;
  areas: string[];
  modes: Array<"online" | "home" | "hybrid">;
};

/** Same rewrite the public tutor pages use: legacy /uploads/<key> is served by /api/media/<key>. */
function avatarSrc(value: string | null): string | null {
  const v = value?.trim();
  if (!v) return null;
  if (/^https?:\/\//.test(v)) return v;
  const path = v.startsWith("/") ? v : `/${v}`;
  return path.startsWith("/uploads/") ? `/api/media/${path.slice("/uploads/".length)}` : path;
}

function fullName(user: { firstName: string | null; lastName: string | null; email: string }): string {
  const name = [user.firstName, user.lastName].filter(Boolean).join(" ").trim();
  return name || user.email;
}

/** Every published tutor (the same set as the public /tutors page). */
export async function listTutors(): Promise<TutorCard[]> {
  const tutors = await prisma.tutor.findMany({
    where: { deletedAt: null, status: "active", approved: true },
    orderBy: [{ rating: { sort: "desc", nulls: "last" } }, { displayName: "asc" }],
    select: {
      id: true,
      slug: true,
      displayName: true,
      headline: true,
      avatarUrl: true,
      rating: true,
      experienceYears: true,
      subjects: { select: { subjectName: true }, orderBy: { priority: "asc" } },
      profile: { select: { metadata: true } },
      locations: {
        where: { isActive: true },
        orderBy: { priority: "asc" },
        select: { cityName: true, areaName: true, onlineTutoringAvailable: true, homeTutoringAvailable: true, hybridTutoringAvailable: true },
      },
    },
  });
  return tutors.map((t) => ({
    id: t.id,
    slug: t.slug,
    name: t.displayName,
    headline: t.headline,
    subjects: [...new Set(t.subjects.map((s) => s.subjectName))],
    avatarUrl: avatarSrc(t.avatarUrl),
    rating: t.rating,
    experienceYears: t.experienceYears,
    city: t.locations[0]?.cityName ?? null,
    areas: [...new Set(t.locations.map((l) => l.areaName).filter((a): a is string => Boolean(a)))],
    modes: teachingModes(t.profile?.metadata, t.locations),
  }));
}

/**
 * Admin stores modes verbatim in TutorProfile.metadata.teachingModes (free text such as
 * "online(usa/canada)"), so match by substring; fall back to the location flags.
 */
function teachingModes(
  metadata: unknown,
  locations: Array<{ onlineTutoringAvailable: boolean; homeTutoringAvailable: boolean; hybridTutoringAvailable: boolean }>,
): TutorCard["modes"] {
  const raw = (metadata as { teachingModes?: unknown } | null)?.teachingModes;
  const text = Array.isArray(raw) ? raw.join(" ").toLowerCase() : "";
  const has = (mode: "online" | "home" | "hybrid", flag: keyof (typeof locations)[number]) =>
    text ? text.includes(mode) : locations.some((l) => l[flag]);
  return (
    [
      ["online", "onlineTutoringAvailable"],
      ["home", "homeTutoringAvailable"],
      ["hybrid", "hybridTutoringAvailable"],
    ] as const
  )
    .filter(([mode, flag]) => has(mode, flag))
    .map(([mode]) => mode);
}

const PARTY_SELECT = { id: true, firstName: true, lastName: true, email: true, avatarUrl: true } as const;

function shapeBooking(
  booking: {
    id: string;
    subject: string;
    scheduledAt: Date;
    status: string;
    notes: string | null;
    meetLink?: string | null;
    studentId: string;
    tutorId: string;
    createdAt: Date;
    student: { id: string; firstName: string | null; lastName: string | null; email: string; avatarUrl: string | null };
    tutor: { id: string; firstName: string | null; lastName: string | null; email: string; avatarUrl: string | null };
  },
  viewerId: string,
) {
  return {
    id: booking.id,
    subject: booking.subject,
    scheduledAt: booking.scheduledAt,
    status: booking.status,
    notes: booking.notes,
    meetLink: booking.meetLink ?? null,
    createdAt: booking.createdAt,
    viewerRole: booking.tutorId === viewerId ? "tutor" : "student",
    student: { id: booking.student.id, name: fullName(booking.student), avatarUrl: booking.student.avatarUrl },
    tutor: { id: booking.tutor.id, name: fullName(booking.tutor), avatarUrl: booking.tutor.avatarUrl },
  };
}

/**
 * Student requests a demo with a tutor (`tutorId` is the Tutor id). Tutors with
 * a login account get a DemoBooking on their dashboard; for the rest the request
 * becomes a ContactLead so the admin team can arrange it (booking is then null).
 */
export async function createBooking(
  studentId: string,
  input: { tutorId: string; subject: string; scheduledAt: string; notes?: string | null },
) {
  const subject = input.subject?.trim();
  if (!input.tutorId || !subject || !input.scheduledAt) {
    throw new AppError(400, "INVALID_BOOKING", "Tutor, subject and date/time are required.");
  }
  const when = new Date(input.scheduledAt);
  if (Number.isNaN(when.getTime())) throw new AppError(400, "INVALID_BOOKING", "Invalid date/time.");
  const notes = input.notes?.trim().slice(0, 2000) || null;

  const tutor = await prisma.tutor.findFirst({
    where: { id: input.tutorId, deletedAt: null, status: "active", approved: true },
    select: { userId: true, displayName: true, slug: true },
  });
  if (!tutor) throw new AppError(404, "TUTOR_NOT_FOUND", "That tutor is not available.");
  if (tutor.userId === studentId) throw new AppError(400, "INVALID_BOOKING", "You cannot book a demo with yourself.");

  const tutorUserId = tutor.userId;
  const result = await prisma.$transaction(async (tx) => {
    const booking = tutorUserId
      ? await tx.demoBooking.create({
          data: { studentId, tutorId: tutorUserId, subject, scheduledAt: when, notes },
          include: { student: { select: PARTY_SELECT }, tutor: { select: PARTY_SELECT } },
        })
      : null;
    await tx.demoRequest.create({
      data: { studentId, tutorId: input.tutorId, subject, preferredAt: when, notes, demoBookingId: booking?.id ?? null },
    });
    return { booking, shaped: booking ? shapeBooking(booking, studentId) : null };
  });

  // Notify outside the transaction: a mail outage must not roll back the booking.
  if (result.booking) {
    const base = getEnv().NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
    const { student, tutor: tutorUser } = result.booking;
    const nameOf = (u: { firstName: string | null; lastName: string | null; email: string }) =>
      [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;

    await Promise.all([
      sendMail({
        to: tutorUser.email,
        ...demoRequestedTutorEmail({
          tutorName: nameOf(tutorUser),
          studentName: nameOf(student),
          subject,
          scheduledAt: when,
          notes,
          dashboardUrl: `${base}/tutor/`,
        }),
      }),
      sendMail({
        to: student.email,
        ...demoRequestedStudentEmail({
          studentName: nameOf(student),
          tutorName: tutor.displayName,
          subject,
          scheduledAt: when,
          dashboardUrl: `${base}/student/`,
        }),
      }),
    ]);
  }

  return { booking: result.shaped };
}

/** The student's own demo requests with the tutor's card details, newest first. */
export async function listMyDemoRequests(studentId: string) {
  const requests = await prisma.demoRequest.findMany({
    where: { studentId },
    orderBy: { createdAt: "desc" },
    include: { tutor: { select: { id: true, slug: true, displayName: true, headline: true, avatarUrl: true } } },
  });
  const bookingIds = requests.map((r) => r.demoBookingId).filter((id): id is string => Boolean(id));
  const bookings = bookingIds.length
    ? await prisma.demoBooking.findMany({ where: { id: { in: bookingIds } }, select: { id: true, status: true } })
    : [];
  const bookingStatus = new Map(bookings.map((b) => [b.id, b.status]));
  return requests.map((r) => ({
    id: r.id,
    subject: r.subject,
    preferredAt: r.preferredAt,
    notes: r.notes,
    status: r.status,
    createdAt: r.createdAt,
    demoBookingId: r.demoBookingId,
    demoBookingStatus: r.demoBookingId ? bookingStatus.get(r.demoBookingId) ?? null : null,
    tutor: { ...r.tutor, avatarUrl: avatarSrc(r.tutor.avatarUrl) },
  }));
}

/** All bookings the user is part of (as student or tutor), newest first. */
export async function listMyBookings(userId: string) {
  const bookings = await prisma.demoBooking.findMany({
    where: { OR: [{ studentId: userId }, { tutorId: userId }] },
    orderBy: [{ scheduledAt: "desc" }],
    include: { student: { select: PARTY_SELECT }, tutor: { select: PARTY_SELECT } },
  });
  return bookings.map((b) => shapeBooking(b, userId));
}

/** A single booking the user is part of — used to gate the demo room. */
export async function getBookingForUser(userId: string, id: string) {
  const booking = await prisma.demoBooking.findFirst({
    where: { id, OR: [{ studentId: userId }, { tutorId: userId }] },
    include: { student: { select: PARTY_SELECT }, tutor: { select: PARTY_SELECT } },
  });
  if (!booking) throw new AppError(404, "BOOKING_NOT_FOUND", "Demo not found.");
  return shapeBooking(booking, userId);
}

const ALLOWED: Record<string, string[]> = {
  tutor: ["confirmed", "completed", "cancelled"],
  // Students can cancel, and mark completed when they leave a live class.
  student: ["completed", "cancelled"],
};

/** Update a booking's status. Tutors confirm/complete/cancel; students may cancel. */
export async function updateBookingStatus(userId: string, id: string, status: string) {
  const booking = await prisma.demoBooking.findUnique({ where: { id }, select: { studentId: true, tutorId: true } });
  if (!booking || (booking.studentId !== userId && booking.tutorId !== userId)) {
    throw new AppError(404, "BOOKING_NOT_FOUND", "Demo not found.");
  }
  const role = booking.tutorId === userId ? "tutor" : "student";
  if (!ALLOWED[role].includes(status)) {
    throw new AppError(403, "FORBIDDEN_STATUS", "You cannot set the demo to that status.");
  }
  const updated = await prisma.demoBooking.update({
    where: { id },
    data: { status: status as never },
    include: { student: { select: PARTY_SELECT }, tutor: { select: PARTY_SELECT } },
  });

  const nameOf = (u: { firstName: string | null; lastName: string | null; email: string }) =>
    [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;
  const base = getEnv().NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

  // Tutor accepted: mint the Meet link, store it, then tell both sides.
  if (status === "confirmed") {
    let meetLink = updated.meetLink;
    if (!meetLink) {
      const meeting = await createDemoMeeting({
        summary: `IB Gram demo: ${updated.subject}`,
        description: `Demo class between ${nameOf(updated.tutor)} (tutor) and ${nameOf(updated.student)} (student).`,
        startsAt: updated.scheduledAt,
        durationMinutes: 45,
        attendees: [updated.student.email, updated.tutor.email],
      });
      if (meeting) {
        meetLink = meeting.meetLink;
        await prisma.demoBooking.update({
          where: { id },
          data: { meetLink: meeting.meetLink, meetEventId: meeting.eventId },
        });
      }
    }

    await Promise.all([
      sendMail({
        to: updated.student.email,
        ...demoConfirmedEmail({
          recipientName: nameOf(updated.student), otherPartyName: nameOf(updated.tutor), viewerRole: "student",
          subject: updated.subject, scheduledAt: updated.scheduledAt, meetLink, dashboardUrl: `${base}/student/`,
        }),
      }),
      sendMail({
        to: updated.tutor.email,
        ...demoConfirmedEmail({
          recipientName: nameOf(updated.tutor), otherPartyName: nameOf(updated.student), viewerRole: "tutor",
          subject: updated.subject, scheduledAt: updated.scheduledAt, meetLink, dashboardUrl: `${base}/tutor/`,
        }),
      }),
    ]);
  }

  // Cancelling a confirmed demo should take the calendar invite down with it.
  if (status === "cancelled" && updated.meetEventId) {
    await cancelDemoMeeting(updated.meetEventId);
    await prisma.demoBooking.update({ where: { id }, data: { meetLink: null, meetEventId: null } });
  }

  return shapeBooking(updated, userId);
}
