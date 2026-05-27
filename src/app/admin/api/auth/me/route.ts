import { getAdminSession } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return Response.json({ error: "Admin session required." }, { status: 401 });
  return Response.json({ username: session.username, role: session.role, permissions: session.permissions, expiresAt: session.expiresAt });
}
