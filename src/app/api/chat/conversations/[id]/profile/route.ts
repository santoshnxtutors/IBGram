import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { getConversationProfile } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

/** The other person's details, for the chat contact panel. */
export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });

  const profile = await getConversationProfile(user.id, (await params).id);
  if (!profile) return Response.json({ error: "Conversation not found." }, { status: 404 });
  return Response.json({ profile });
}
