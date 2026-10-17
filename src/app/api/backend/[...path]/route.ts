import type { NextRequest } from "next/server";
import { proxyToBackend } from "@/lib/backend-proxy";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ path?: string[] }> };

// Generic authenticated proxy: /api/backend/<x> -> BACKEND_URL/api/<x>.
async function proxy(request: NextRequest, context: RouteContext): Promise<Response> {
  const { path } = await context.params;
  return proxyToBackend(request, path?.join("/") ?? "");
}

export const GET = proxy;
export const POST = proxy;
export const PATCH = proxy;
export const PUT = proxy;
export const DELETE = proxy;
