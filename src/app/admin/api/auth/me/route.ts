import type { NextRequest } from "next/server";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return Response.json({ username: session.username, role: session.role, permissions: session.permissions, expiresAt: session.expiresAt });
}
