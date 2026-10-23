/**
 * Student <-> tutor messaging.
 *
 * A thread opens when a demo is confirmed and becomes `permanent` once the
 * student pays for that tutor. A tutor can also start one with any student they
 * teach, and can close a thread; a permanent one can be reopened by the tutor
 * but never silently disappears.
 *
 * A message is text, an attachment (image / file / voice note) or a Meet card.
 */
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { markSeen, presenceOf } from "@/lib/chat/presence";
import { normaliseImageUrl } from "@/lib/media-url";
import { sendMail } from "@/lib/mail";
import { newMessageEmail } from "@/lib/emails";
import { createDemoMeeting } from "@/lib/google-calendar";
import { storeUpload } from "@/lib/uploads";

export const MESSAGE_MAX = 4000;
export const ATTACHMENT_MAX_BYTES = 25 * 1024 * 1024; // 25 MB

export type MessageKind = "text" | "image" | "file" | "audio" | "meet" | "system";

const PARTY = { id: true, firstName: true, lastName: true, email: true, avatarUrl: true } as const;
const MESSAGE_FIELDS = {
  id: true,
  senderId: true,
  body: true,
  kind: true,
  attachmentUrl: true,
  attachmentName: true,
  attachmentMime: true,
  attachmentSize: true,
  meta: true,
  createdAt: true,
  readAt: true,
  deletedAt: true,
  replyToId: true,
  replyTo: { select: { id: true, body: true, kind: true, senderId: true, deletedAt: true } },
} as const;

export const displayName = (u: { firstName: string | null; lastName: string | null; email: string }) =>
  [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;

/**
 * The photo on a tutor's public profile, keyed by their login id.
 *
 * A tutor who signed up with Google has that account picture on `User`, while
 * the photo they (or admin) actually put on the profile sits on `Tutor` — the
 * chat must show the second one.
 */
async function tutorPhotos(userIds: string[]): Promise<Map<string, string>> {
  const ids = [...new Set(userIds)].filter(Boolean);
  if (ids.length === 0) return new Map();
  const rows = await prisma.tutor.findMany({
    where: { userId: { in: ids }, deletedAt: null, avatarUrl: { not: null } },
    select: { userId: true, avatarUrl: true },
  });
  const map = new Map<string, string>();
  for (const row of rows) {
    const url = normaliseImageUrl(row.avatarUrl);
    if (row.userId && url) map.set(row.userId, url);
  }
  return map;
}

/** What the bubble shows in the sidebar preview when there is no text. */
function previewOf(m: { kind: string; body: string; deletedAt?: Date | null } | undefined): string | null {
  if (!m) return null;
  if (m.deletedAt) return "This message was deleted";
  if (m.body.trim()) return m.body.slice(0, 120);
  if (m.kind === "image") return "📷 Photo";
  if (m.kind === "audio") return "🎤 Voice message";
  if (m.kind === "file") return "📎 Attachment";
  if (m.kind === "meet") return "📹 Google Meet";
  return null;
}

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
      messages: { orderBy: { createdAt: "desc" }, take: 1, select: { body: true, kind: true, createdAt: true, senderId: true, deletedAt: true } },
      _count: { select: { messages: { where: { readAt: null, NOT: { senderId: userId } } } } },
    },
  });

  // A closed thread stays visible to the tutor who closed it, not to the student.
  const visible = rows.filter((c) => c.status === "active" || c.tutorId === userId);
  const photos = await tutorPhotos(visible.map((c) => c.tutorId));

  return visible.map((c) => {
    const viewerRole = c.tutorId === userId ? "tutor" : "student";
    const other = viewerRole === "tutor" ? c.student : c.tutor;
    const last = c.messages[0];
    return {
      id: c.id,
      viewerRole,
      status: c.status,
      permanent: c.permanent,
      lastMessageAt: c.lastMessageAt,
      unread: c._count.messages,
      other: {
        id: other.id,
        name: displayName(other),
        email: other.email,
        avatarUrl: (viewerRole === "student" ? photos.get(c.tutorId) : null) ?? other.avatarUrl,
      },
      preview: previewOf(last),
      previewMine: last ? last.senderId === userId : false,
    };
  });
}

/**
 * Thread detail. Marks the other party's messages read for this viewer, and
 * counts this call as the viewer being present in the thread.
 */
export async function getConversation(userId: string, id: string) {
  const convo = await prisma.conversation.findUnique({
    where: { id },
    include: { student: { select: PARTY }, tutor: { select: PARTY } },
  });
  if (!convo || (convo.studentId !== userId && convo.tutorId !== userId)) return null;

  markSeen(userId, id);

  // Which of the other side's messages were still unread when this load started
  // — the client draws its "new messages" line above the first of them.
  const firstUnread = await prisma.message.findFirst({
    where: { conversationId: id, readAt: null, NOT: { senderId: userId } },
    orderBy: { createdAt: "asc" },
    select: { id: true },
  });

  await prisma.message.updateMany({
    where: { conversationId: id, readAt: null, NOT: { senderId: userId } },
    data: { readAt: new Date() },
  });

  const messages = await prisma.message.findMany({
    where: { conversationId: id },
    orderBy: { createdAt: "asc" },
    take: 500,
    select: MESSAGE_FIELDS,
  });

  const viewerRole = convo.tutorId === userId ? "tutor" : "student";
  const other = viewerRole === "tutor" ? convo.student : convo.tutor;
  const photo = viewerRole === "student" ? (await tutorPhotos([convo.tutorId])).get(convo.tutorId) : null;
  return {
    id: convo.id,
    viewerRole,
    status: convo.status,
    permanent: convo.permanent,
    firstUnreadId: firstUnread?.id ?? null,
    other: {
      id: other.id,
      name: displayName(other),
      email: other.email,
      avatarUrl: photo ?? other.avatarUrl,
      ...presenceOf(other.id, id),
    },
    messages: messages.map((m) => ({
      ...m,
      mine: m.senderId === userId,
      // An unsent message keeps its place in the thread but nothing else.
      body: m.deletedAt ? "" : m.body,
      attachmentUrl: m.deletedAt ? null : m.attachmentUrl,
      meta: m.deletedAt ? null : m.meta,
      replyTo: m.replyTo ? { ...m.replyTo, body: m.replyTo.deletedAt ? "" : m.replyTo.body, mine: m.replyTo.senderId === userId } : null,
    })),
  };
}

/** Unsend: the sender blanks their own message. The row stays for thread order. */
export async function deleteMessage(userId: string, messageId: string) {
  const message = await prisma.message.findUnique({
    where: { id: messageId },
    select: { id: true, senderId: true, conversationId: true, deletedAt: true },
  });
  if (!message || message.senderId !== userId) return { error: "You can only delete your own messages." as const };
  if (message.deletedAt) return { ok: true as const };

  await prisma.message.update({
    where: { id: messageId },
    data: { deletedAt: new Date(), body: "", attachmentUrl: null, attachmentName: null, attachmentMime: null, attachmentSize: null, meta: Prisma.DbNull },
  });
  return { ok: true as const };
}

type Attachment = {
  kind: MessageKind;
  url: string;
  name: string;
  mime: string;
  size: number;
};

/** The participant row plus both parties, or an error for the caller to return. */
async function participantConversation(userId: string, conversationId: string) {
  const convo = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: { student: { select: PARTY }, tutor: { select: PARTY } },
  });
  if (!convo || (convo.studentId !== userId && convo.tutorId !== userId)) return { error: "NOT_FOUND" as const };
  if (convo.status !== "active") return { error: "This conversation is closed." as const };
  return { convo };
}

/**
 * Posts a message and emails the other party. `attachment` carries media;
 * `meta` carries a Meet card. Returns an error string if not allowed.
 */
export async function postMessage(
  userId: string,
  conversationId: string,
  rawBody: string,
  extra?: { attachment?: Attachment; kind?: MessageKind; meta?: Record<string, unknown>; replyToId?: string | null },
) {
  const body = rawBody.trim().slice(0, MESSAGE_MAX);
  if (!body && !extra?.attachment && !extra?.meta) return { error: "Message cannot be empty." as const };

  const found = await participantConversation(userId, conversationId);
  if ("error" in found) return found;
  const { convo } = found;

  // Only quote a message from this same thread.
  const replyToId = extra?.replyToId
    ? (await prisma.message.findFirst({ where: { id: extra.replyToId, conversationId }, select: { id: true } }))?.id ?? null
    : null;

  const message = await prisma.message.create({
    data: {
      conversationId,
      senderId: userId,
      body,
      kind: extra?.attachment?.kind ?? extra?.kind ?? "text",
      attachmentUrl: extra?.attachment?.url ?? null,
      attachmentName: extra?.attachment?.name ?? null,
      attachmentMime: extra?.attachment?.mime ?? null,
      attachmentSize: extra?.attachment?.size ?? null,
      // Prisma's Json input type does not accept Record<string, unknown> directly, and
      // omitting the key leaves the column untouched rather than writing JSON null.
      ...(extra?.meta ? { meta: extra.meta as Prisma.InputJsonValue } : {}),
      replyToId,
    },
    select: MESSAGE_FIELDS,
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
      preview: previewOf(message) ?? "",
      threadUrl: `${base}${senderIsTutor ? "/student" : "/tutor"}/messages/?c=${conversationId}`,
    }),
  });

  return { message: { ...message, mine: true } };
}

const IMAGE_MIME = /^image\/(jpeg|png|gif|webp|avif|svg\+xml|heic|heif)$/i;
const AUDIO_MIME = /^audio\//i;
const BLOCKED_EXT = /\.(exe|bat|cmd|com|scr|msi|jar|sh|ps1|dll|vbs|js|mjs|cjs|html?|svg)$/i;

/** Uploads a chat attachment and posts it as a message in one call. */
export async function postAttachment(userId: string, conversationId: string, file: File, caption: string, replyToId?: string | null) {
  if (!(file instanceof File) || file.size <= 0) return { error: "No file was uploaded." as const };
  if (file.size > ATTACHMENT_MAX_BYTES) {
    return { error: `Files must be under ${Math.round(ATTACHMENT_MAX_BYTES / (1024 * 1024))} MB.` as const };
  }
  // An attachment is downloaded and opened by the other party — keep executables
  // and anything the browser would run in its own origin out of the thread.
  if (BLOCKED_EXT.test(file.name)) return { error: "That file type cannot be sent here." as const };

  const found = await participantConversation(userId, conversationId);
  if ("error" in found) return found;

  const stored = await storeUpload(file, `chat/${conversationId}`).catch(() => null);
  if (!stored) return { error: "Upload failed. Please try again." as const };

  const kind: MessageKind = IMAGE_MIME.test(file.type) ? "image" : AUDIO_MIME.test(file.type) ? "audio" : "file";
  return postMessage(userId, conversationId, caption, {
    attachment: { kind, url: stored.url, name: file.name || "attachment", mime: file.type || "application/octet-stream", size: file.size },
    replyToId,
  });
}

/**
 * Tutor only: mints a Google Meet for this thread and posts it as a card.
 * Falls back to an error when Google is not connected — nothing is posted then.
 */
export async function postMeet(
  userId: string,
  conversationId: string,
  input: { startsAt?: string | null; minutes?: number; note?: string },
) {
  const found = await participantConversation(userId, conversationId);
  if ("error" in found) return found;
  const { convo } = found;
  if (convo.tutorId !== userId) return { error: "Only the tutor can start a class link." as const };

  const startsAt = input.startsAt ? new Date(input.startsAt) : new Date(Date.now() + 60_000);
  if (Number.isNaN(startsAt.getTime())) return { error: "That date and time is not valid." as const };
  const minutes = Math.min(240, Math.max(15, Number(input.minutes) || 60));

  const meeting = await createDemoMeeting({
    summary: `IB Gram class: ${displayName(convo.tutor)} & ${displayName(convo.student)}`,
    description: input.note?.trim() || `Class between ${displayName(convo.tutor)} (tutor) and ${displayName(convo.student)} (student).`,
    startsAt,
    durationMinutes: minutes,
    attendees: [convo.student.email, convo.tutor.email],
  });

  if (!meeting?.meetLink) {
    return { error: "Google Meet is not connected, so a link could not be created." as const };
  }

  return postMessage(userId, conversationId, input.note?.trim() ?? "", {
    kind: "meet",
    meta: { link: meeting.meetLink, startsAt: startsAt.toISOString(), minutes, eventId: meeting.eventId },
  });
}

/** Tutors only: close or reopen a thread. */
export async function setConversationStatus(userId: string, id: string, status: "active" | "closed") {
  const convo = await prisma.conversation.findUnique({ where: { id }, select: { tutorId: true } });
  if (!convo || convo.tutorId !== userId) return null;
  return prisma.conversation.update({ where: { id }, data: { status }, select: { id: true, status: true } });
}

/**
 * Students a tutor can start a chat with: everyone who has booked a demo with
 * them, plus everyone they already have a (possibly closed) thread with.
 */
export async function listTutorContacts(tutorUserId: string) {
  const [bookings, threads] = await Promise.all([
    prisma.demoBooking.findMany({
      where: { tutorId: tutorUserId },
      orderBy: { scheduledAt: "desc" },
      select: { subject: true, scheduledAt: true, student: { select: PARTY } },
    }),
    prisma.conversation.findMany({ where: { tutorId: tutorUserId }, select: { id: true, studentId: true } }),
  ]);

  const threadByStudent = new Map(threads.map((t) => [t.studentId, t.id]));
  const seen = new Map<string, { id: string; name: string; email: string; avatarUrl: string | null; subject: string | null; conversationId: string | null }>();
  for (const b of bookings) {
    if (seen.has(b.student.id)) continue;
    seen.set(b.student.id, {
      id: b.student.id,
      name: displayName(b.student),
      email: b.student.email,
      avatarUrl: b.student.avatarUrl,
      subject: b.subject,
      conversationId: threadByStudent.get(b.student.id) ?? null,
    });
  }
  return [...seen.values()];
}

/**
 * Tutor starts a thread with a student, by user id or by the email they signed
 * up with. Only works against a real student account.
 */
export async function startConversationAsTutor(tutorUserId: string, input: { studentId?: string; email?: string }) {
  const tutor = await prisma.user.findUnique({ where: { id: tutorUserId }, select: { accountType: true } });
  if (tutor?.accountType !== "tutor") return { error: "Only tutors can start a new chat." as const };

  const email = input.email?.trim().toLowerCase();
  const student = input.studentId
    ? await prisma.user.findFirst({ where: { id: input.studentId, deletedAt: null }, select: { id: true, accountType: true } })
    : email
      ? await prisma.user.findFirst({ where: { email, deletedAt: null }, select: { id: true, accountType: true } })
      : null;

  if (!student) return { error: "No student account found for that email." as const };
  if (student.accountType !== "student") return { error: "That account is not a student." as const };
  if (student.id === tutorUserId) return { error: "You cannot chat with yourself." as const };

  const convo = await openConversation(student.id, tutorUserId);
  // A tutor reopening a thread they closed should find it open again.
  if (convo.status !== "active") {
    await prisma.conversation.update({ where: { id: convo.id }, data: { status: "active" } });
  }
  return { conversationId: convo.id };
}

/**
 * The other person's details for the chat's contact panel: who they are, what
 * they study or teach, and the classes the two have shared.
 */
export async function getConversationProfile(userId: string, conversationId: string) {
  const convo = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: { student: { select: PARTY }, tutor: { select: PARTY } },
  });
  if (!convo || (convo.studentId !== userId && convo.tutorId !== userId)) return null;

  const viewerRole = convo.tutorId === userId ? "tutor" : "student";
  const other = viewerRole === "tutor" ? convo.student : convo.tutor;

  const [bookings, extra] = await Promise.all([
    prisma.demoBooking.findMany({
      where: { studentId: convo.studentId, tutorId: convo.tutorId },
      orderBy: { scheduledAt: "desc" },
      select: { id: true, subject: true, scheduledAt: true, status: true, meetLink: true },
    }),
    viewerRole === "tutor"
      ? prisma.studentProfile.findUnique({ where: { userId: other.id } })
      : prisma.tutor.findFirst({
          where: { userId: other.id, deletedAt: null },
          select: {
            slug: true, headline: true, bio: true, experienceYears: true, rating: true, reviewCount: true,
            hourlyRate: true, currency: true, approved: true, status: true, phone: true, avatarUrl: true,
            subjects: { select: { subjectName: true, curriculum: true }, orderBy: { priority: "asc" }, take: 12 },
            profile: { select: { languages: true, tags: true, responseTime: true, availabilityText: true } },
          },
        }),
  ]);

  const now = Date.now();
  const upcoming = bookings
    .filter((b) => +b.scheduledAt > now && (b.status === "confirmed" || b.status === "requested"))
    .sort((a, b) => +a.scheduledAt - +b.scheduledAt)[0] ?? null;

  const facts: Array<{ label: string; value: string }> = [];
  let subjects: string[] = [];
  let publicUrl: string | null = null;
  let phone: string | null = null;

  if (viewerRole === "tutor" && extra && "curriculum" in extra) {
    phone = extra.phone;
    subjects = extra.subjects;
    if (extra.curriculum) facts.push({ label: "Curriculum", value: extra.curriculum });
    if (extra.grade) facts.push({ label: "Grade", value: extra.grade });
    if (extra.school) facts.push({ label: "School", value: extra.school });
    if (extra.city) facts.push({ label: "City", value: extra.city });
    if (extra.parentName) facts.push({ label: "Parent", value: extra.parentName });
    if (extra.learningModes.length) facts.push({ label: "Learns", value: extra.learningModes.join(", ") });
  } else if (extra && "slug" in extra) {
    phone = extra.phone;
    subjects = extra.subjects.map((s) => s.subjectName);
    if (extra.approved && extra.status === "active") publicUrl = `/tutor-profile/${extra.slug}/`;
    if (extra.experienceYears != null) facts.push({ label: "Experience", value: `${extra.experienceYears} years` });
    if (extra.rating != null) facts.push({ label: "Rating", value: `${extra.rating.toFixed(1)} (${extra.reviewCount} reviews)` });
    if (extra.hourlyRate != null) facts.push({ label: "Rate", value: `${extra.currency === "USD" ? "$" : "₹"}${Number(extra.hourlyRate)}/hr` });
    if (extra.profile?.responseTime) facts.push({ label: "Replies", value: extra.profile.responseTime });
    if (extra.profile?.availabilityText) facts.push({ label: "Available", value: extra.profile.availabilityText });
    if (extra.profile?.languages.length) facts.push({ label: "Languages", value: extra.profile.languages.join(", ") });
  }

  return {
    role: viewerRole === "tutor" ? ("student" as const) : ("tutor" as const),
    id: other.id,
    name: displayName(other),
    email: other.email,
    // A tutor's profile photo wins over the Google picture on their login.
    avatarUrl: (extra && "avatarUrl" in extra ? normaliseImageUrl(extra.avatarUrl) : "") || other.avatarUrl,
    headline: extra && "headline" in extra ? extra.headline : null,
    bio: extra && "bio" in extra ? extra.bio : null,
    goals: extra && "goals" in extra ? extra.goals : null,
    phone,
    subjects,
    facts,
    publicUrl,
    permanent: convo.permanent,
    classes: { total: bookings.length, completed: bookings.filter((b) => b.status === "completed").length },
    upcoming,
  };
}
