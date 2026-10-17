import type { NextRequest } from "next/server";
import { proxyToBackend } from "@/lib/backend-proxy";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ path?: string[] }> };

// /api/auth/<x> -> BACKEND_URL/api/auth/<x> (login, register, Google OAuth, me, logout).
async function proxy(request: NextRequest, context: RouteContext): Promise<Response> {
  const { path } = await context.params;
  return proxyToBackend(request, `auth/${path?.join("/") ?? ""}`);
}

export const GET = proxy;
export const POST = proxy;
