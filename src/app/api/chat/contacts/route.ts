import { getServerUser } from "@/lib/auth/server";
import { listTutorContacts } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

/** Students a tutor can start a chat with (from their bookings). */
export async function GET() {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });
  if (user.accountType !== "tutor") return Response.json({ contacts: [] });
  return Response.json({ contacts: await listTutorContacts(user.id) });
}
