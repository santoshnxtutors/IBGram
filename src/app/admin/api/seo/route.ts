import type { NextRequest } from "next/server";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { getSeoHealth } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return jsonNoStore({ seo: await getSeoHealth() });
}
