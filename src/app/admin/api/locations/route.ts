import type { NextRequest } from "next/server";
import { getLocations } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return Response.json({ locations: await getLocations() });
}
