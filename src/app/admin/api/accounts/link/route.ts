import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { openConversation, displayName } from "@/lib/chat/service";
import { sendMail } from "@/lib/mail";
import { chatUnlockedEmail } from "@/lib/emails";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const schema = z.object({
  studentId: z.string({ message: "Pick a student." }).trim().min(1, "Pick a student."),
  tutorId: z.string({ message: "Pick a tutor." }).trim().min(1, "Pick a tutor."),
  notify: z.boolean().optional().default(true),
});

/**
 * Permanently pairs a student with a tutor: opens the chat thread and marks it
 * `permanent`, the same state a paid booking produces. Both sides are emailed.
 */
export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = schema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid pairing." }, { status: 400 });
  const { studentId, tutorId, notify } = parsed.data;

  if (studentId === tutorId) return jsonNoStore({ error: "Pick two different people." }, { status: 400 });

  const [student, tutor] = await Promise.all([
    prisma.user.findFirst({ where: { id: studentId, deletedAt: null }, select: { id: true, email: true, firstName: true, lastName: true, accountType: true } }),
    prisma.user.findFirst({ where: { id: tutorId, deletedAt: null }, select: { id: true, email: true, firstName: true, lastName: true, accountType: true } }),
  ]);

  if (student?.accountType !== "student") return jsonNoStore({ error: "That student account was not found." }, { status: 404 });
  if (tutor?.accountType !== "tutor") return jsonNoStore({ error: "That tutor account was not found." }, { status: 404 });

  const conversation = await openConversation(student.id, tutor.id, true);

  if (notify) {
    await Promise.all([
      sendMail({
        to: student.email,
        ...chatUnlockedEmail({ recipientName: displayName(student), otherPartyName: displayName(tutor), viewerRole: "student", amount: "your booking" }),
      }),
      sendMail({
        to: tutor.email,
        ...chatUnlockedEmail({ recipientName: displayName(tutor), otherPartyName: displayName(student), viewerRole: "tutor", amount: "their booking" }),
      }),
    ]);
  }

  return jsonNoStore({ ok: true, conversationId: conversation.id });
}
