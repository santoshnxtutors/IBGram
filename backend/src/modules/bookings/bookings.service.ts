import { prisma } from "../../lib/prisma";
import { AppError } from "../../middleware/error.middleware";

export type TutorCard = {
  id: string;
  name: string;
  headline: string | null;
  subjects: string[];
  avatarUrl: string | null;
};

function fullName(user: { firstName: string | null; lastName: string | null; email: string }): string {
  const name = [user.firstName, user.lastName].filter(Boolean).join(" ").trim();
  return name || user.email;
}

/**
 * Bookable tutors: admin-approved tutor profiles that are linked to a login
 * account. `id` is the tutor's USER id so demo bookings reach their dashboard.
 */
export async function listTutors(): Promise<TutorCard[]> {
  const tutors = await prisma.tutor.findMany({
    where: { deletedAt: null, status: "active", approved: true, userId: { not: null } },
    orderBy: [{ displayName: "asc" }],
    select: {
      userId: true,
      displayName: true,
      headline: true,
      avatarUrl: true,
      owner: { select: { subjects: true } },
    },
  });
  return tutors
    .filter((t) => t.userId)
    .map((t) => ({
      id: t.userId as string,
      name: t.displayName,
      headline: t.headline,
      subjects: t.owner?.subjects ?? [],
      avatarUrl: t.avatarUrl,
    }));
}

const PARTY_SELECT = { id: true, firstName: true, lastName: true, email: true, avatarUrl: true } as const;

function shapeBooking(
  booking: {
    id: string;
    subject: string;
    scheduledAt: Date;
    status: string;
    notes: string | null;
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
    createdAt: booking.createdAt,
    viewerRole: booking.tutorId === viewerId ? "tutor" : "student",
    student: { id: booking.student.id, name: fullName(booking.student), avatarUrl: booking.student.avatarUrl },
    tutor: { id: booking.tutor.id, name: fullName(booking.tutor), avatarUrl: booking.tutor.avatarUrl },
  };
}

/** Student books a demo with a tutor. */
export async function createBooking(
  studentId: string,
  input: { tutorId: string; subject: string; scheduledAt: string; notes?: string | null },
) {
  const subject = input.subject?.trim();
  if (!input.tutorId || !subject || !input.scheduledAt) {
    throw new AppError(400, "INVALID_BOOKING", "Tutor, subject and date/time are required.");
  }
  if (input.tutorId === studentId) {
    throw new AppError(400, "INVALID_BOOKING", "You cannot book a demo with yourself.");
  }
  const when = new Date(input.scheduledAt);
  if (Number.isNaN(when.getTime())) throw new AppError(400, "INVALID_BOOKING", "Invalid date/time.");

  const tutor = await prisma.user.findFirst({
    where: { id: input.tutorId, deletedAt: null, accountType: "tutor" },
    select: { id: true },
  });
  if (!tutor) throw new AppError(404, "TUTOR_NOT_FOUND", "That tutor is not available.");

  const booking = await prisma.demoBooking.create({
    data: {
      studentId,
      tutorId: input.tutorId,
      subject,
      scheduledAt: when,
      notes: input.notes?.trim() || null,
    },
    include: { student: { select: PARTY_SELECT }, tutor: { select: PARTY_SELECT } },
  });
  return shapeBooking(booking, studentId);
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
  return shapeBooking(updated, userId);
}
