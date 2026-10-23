import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { listConversations, startConversationAsTutor } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });
  return Response.json({ conversations: await listConversations(user.id) });
}

/** Tutor starts a thread with one of their students (by id, or by signup email). */
export async function POST(request: NextRequest) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const result = await startConversationAsTutor(user.id, {
    studentId: typeof body?.studentId === "string" ? body.studentId : undefined,
    email: typeof body?.email === "string" ? body.email : undefined,
  });
  if ("error" in result) return Response.json({ error: result.error }, { status: 400 });
  return Response.json(result);
}
