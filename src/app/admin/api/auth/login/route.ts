import type { NextRequest } from "next/server";
import { handleAdminLogin } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  return handleAdminLogin(request);
}
