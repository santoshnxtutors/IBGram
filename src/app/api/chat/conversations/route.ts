import { getServerUser } from "@/lib/auth/server";
import { listConversations } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });
  return Response.json({ conversations: await listConversations(user.id) });
}
