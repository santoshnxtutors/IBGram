import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { deleteMessage } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

/** Unsend your own message. */
export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ messageId: string }> }) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });

  const result = await deleteMessage(user.id, (await params).messageId);
  if ("error" in result) return Response.json({ error: result.error }, { status: 403 });
  return Response.json(result);
}
