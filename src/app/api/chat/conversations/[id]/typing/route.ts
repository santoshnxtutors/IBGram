import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { markTyping } from "@/lib/chat/presence";

export const dynamic = "force-dynamic";

/** The composer pings this while someone types; it expires on its own. */
export async function POST(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });
  markTyping(user.id, (await params).id);
  return Response.json({ ok: true });
}
