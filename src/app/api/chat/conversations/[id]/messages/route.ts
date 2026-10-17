import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { postMessage } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  if (typeof body?.body !== "string") return Response.json({ error: "Message body is required." }, { status: 400 });

  const result = await postMessage(user.id, (await params).id, body.body);
  if ("error" in result) {
    const status = result.error === "NOT_FOUND" ? 404 : 400;
    return Response.json({ error: result.error === "NOT_FOUND" ? "Conversation not found." : result.error }, { status });
  }
  return Response.json(result);
}
