import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ path?: string[] }> };

function backendUrl(): string {
  return (process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || "4000"}`).replace(/\/$/, "");
}

// Generic authenticated proxy: /api/backend/<x> -> BACKEND_URL/api/<x>.
// Forwards the session cookie so the Express backend can authenticate the user.
async function proxy(request: NextRequest, context: RouteContext): Promise<Response> {
  const { path } = await context.params;
  const target = new URL(`${backendUrl()}/api/${path?.join("/") ?? ""}`);
  target.search = request.nextUrl.search;

  const headers = new Headers(request.headers);
  headers.set("host", target.host);

  let response: Response;
  try {
    response = await fetch(target, {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : await request.text(),
      redirect: "manual",
      cache: "no-store",
    });
  } catch {
    return Response.json(
      { error: "Backend is not reachable.", message: `Start the backend and point BACKEND_URL at ${backendUrl()}.` },
      { status: 503 },
    );
  }

  const responseHeaders = new Headers(response.headers);
  responseHeaders.delete("content-encoding");
  responseHeaders.delete("content-length");
  responseHeaders.delete("set-cookie");
  const setCookies =
    (response.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie?.() ??
    (response.headers.get("set-cookie") ? [response.headers.get("set-cookie") as string] : []);
  for (const cookie of setCookies) responseHeaders.append("set-cookie", cookie);

  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: responseHeaders });
}

export const GET = proxy;
export const POST = proxy;
export const PATCH = proxy;
export const PUT = proxy;
export const DELETE = proxy;
