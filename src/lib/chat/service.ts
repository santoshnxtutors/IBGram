/**
 * Student <-> tutor messaging.
 *
 * A thread opens when a demo is confirmed and becomes `permanent` once the
 * student pays for that tutor. A tutor can close a thread; a permanent one can
 * be reopened by the tutor but never silently disappears.
 */
import { prisma } from "@/lib/db";
import { sendMail } from "@/lib/mail";
import { newMessageEmail } from "@/lib/emails";

export const MESSAGE_MAX = 4000;

const PARTY = { id: true, firstName: true, lastName: true, email: true, avatarUrl: true } as const;
export const displayName = (u: { firstName: string | null; lastName: string | null; email: string }) =>
  [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;

/** Opens the thread if it doesn't exist. `permanent` only ever flips on. */
export async function openConversation(studentId: string, tutorId: string, permanent = false) {
  return prisma.conversation.upsert({
    where: { studentId_tutorId: { studentId, tutorId } },
    create: { studentId, tutorId, permanent, status: "active" },
    update: permanent ? { permanent: true, status: "active" } : {},
  });
}

/** Threads the viewer is part of, newest activity first, with unread counts. */
export async function listConversations(userId: string) {
  const rows = await prisma.conversation.findMany({
    where: { OR: [{ studentId: userId }, { tutorId: userId }] },
    orderBy: [{ lastMessageAt: "desc" }, { createdAt: "desc" }],
    include: {
      student: { select: PARTY },
      tutor: { select: PARTY },
      messages: { orderBy: { createdAt: "desc" }, take: 1, select: { body: true, createdAt: true, senderId: true } },
      _count: { select: { messages: { where: { readAt: null, NOT: { senderId: userId } } } } },
    },
  });

  return rows
    // A closed thread stays visible to the tutor who closed it, not to the student.
    .filter((c) => c.status === "active" || c.tutorId === userId)
    .map((c) => {
      const viewerRole = c.tutorId === userId ? "tutor" : "student";
      const other = viewerRole === "tutor" ? c.student : c.tutor;
      return {
        id: c.id,
        viewerRole,
        status: c.status,
        permanent: c.permanent,
        lastMessageAt: c.lastMessageAt,
        unread: c._count.messages,
        other: { id: other.id, name: displayName(other), avatarUrl: other.avatarUrl },
        preview: c.messages[0]?.body.slice(0, 120) ?? null,
      };
    });
}

/** Thread detail. Marks the other party's messages read for this viewer. */
export async function getConversation(userId: string, id: string) {
  const convo = await prisma.conversation.findUnique({
    where: { id },
    include: { student: { select: PARTY }, tutor: { select: PARTY } },
  });
  if (!convo || (convo.studentId !== userId && convo.tutorId !== userId)) return null;

  await prisma.message.updateMany({
    where: { conversationId: id, readAt: null, NOT: { senderId: userId } },
    data: { readAt: new Date() },
  });

  const messages = await prisma.message.findMany({
    where: { conversationId: id },
    orderBy: { createdAt: "asc" },
    take: 500,
    select: { id: true, senderId: true, body: true, createdAt: true, readAt: true },
  });

  const viewerRole = convo.tutorId === userId ? "tutor" : "student";
  const other = viewerRole === "tutor" ? convo.student : convo.tutor;
  return {
    id: convo.id,
    viewerRole,
    status: convo.status,
    permanent: convo.permanent,
    other: { id: other.id, name: displayName(other), avatarUrl: other.avatarUrl },
    messages: messages.map((m) => ({ ...m, mine: m.senderId === userId })),
  };
}

/** Posts a message and emails the other party. Returns null if not a participant. */
export async function postMessage(userId: string, conversationId: string, rawBody: string) {
  const body = rawBody.trim().slice(0, MESSAGE_MAX);
  if (!body) return { error: "Message cannot be empty." as const };

  const convo = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: { student: { select: PARTY }, tutor: { select: PARTY } },
  });
  if (!convo || (convo.studentId !== userId && convo.tutorId !== userId)) return { error: "NOT_FOUND" as const };
  if (convo.status !== "active") return { error: "This conversation is closed." as const };

  const message = await prisma.message.create({
    data: { conversationId, senderId: userId, body },
    select: { id: true, senderId: true, body: true, createdAt: true, readAt: true },
  });
  await prisma.conversation.update({ where: { id: conversationId }, data: { lastMessageAt: message.createdAt } });

  // Notify the other side by email — outside any transaction, failures are logged not thrown.
  const senderIsTutor = convo.tutorId === userId;
  const sender = senderIsTutor ? convo.tutor : convo.student;
  const recipient = senderIsTutor ? convo.student : convo.tutor;
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ibgram.com").replace(/\/$/, "");
  await sendMail({
    to: recipient.email,
    ...newMessageEmail({
      recipientName: displayName(recipient),
      senderName: displayName(sender),
      senderRole: senderIsTutor ? "tutor" : "student",
      preview: body.slice(0, 300),
      threadUrl: `${base}${senderIsTutor ? "/student" : "/tutor"}/messages/?c=${conversationId}`,
    }),
  });

  return { message: { ...message, mine: true } };
}

/** Tutors only: close or reopen a thread. */
export async function setConversationStatus(userId: string, id: string, status: "active" | "closed") {
  const convo = await prisma.conversation.findUnique({ where: { id }, select: { tutorId: true } });
  if (!convo || convo.tutorId !== userId) return null;
  return prisma.conversation.update({ where: { id }, data: { status }, select: { id: true, status: true } });
}
