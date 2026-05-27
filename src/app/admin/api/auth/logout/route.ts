import type { NextRequest } from "next/server";
import { handleAdminLogout, requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return handleAdminLogout(request);
}
