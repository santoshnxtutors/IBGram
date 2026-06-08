import { jsonNoStore } from "@/lib/cache/revalidation";
import { getAdminSession } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return jsonNoStore({ error: "Admin session required." }, { status: 401 });
  return jsonNoStore({ username: session.username, role: session.role, permissions: session.permissions, expiresAt: session.expiresAt });
}
