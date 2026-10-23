import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { postMeet } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

/** Tutor mints a Google Meet for this thread and posts it as a card. */
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const result = await postMeet(user.id, (await params).id, {
    startsAt: typeof body?.startsAt === "string" ? body.startsAt : null,
    minutes: Number(body?.minutes) || 60,
    note: typeof body?.note === "string" ? body.note : "",
  });

  if ("error" in result) {
    const notFound = result.error === "NOT_FOUND";
    return Response.json({ error: notFound ? "Conversation not found." : result.error }, { status: notFound ? 404 : 400 });
  }
  return Response.json(result);
}
