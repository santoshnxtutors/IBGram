import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { getConversation, setConversationStatus } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Ctx) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });
  const convo = await getConversation(user.id, (await params).id);
  if (!convo) return Response.json({ error: "Conversation not found." }, { status: 404 });
  return Response.json({ conversation: convo });
}

/** Tutor closes or reopens the thread. */
export async function PATCH(request: NextRequest, { params }: Ctx) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const status = body?.status === "closed" ? "closed" : "active";
  const updated = await setConversationStatus(user.id, (await params).id, status);
  if (!updated) return Response.json({ error: "Only the tutor can change this." }, { status: 403 });
  return Response.json({ conversation: updated });
}
