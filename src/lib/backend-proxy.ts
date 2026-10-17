import type { NextRequest } from "next/server";

export function backendUrl(): string {
  return (process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || "4000"}`).replace(/\/$/, "");
}

// Hop-by-hop headers must not be forwarded. nginx sends `Connection: upgrade`,
// which makes Node's fetch throw before the request leaves, so every proxied
// call failed in production with "backend is not reachable".
const HOP_BY_HOP = ["connection", "keep-alive", "upgrade", "proxy-connection", "transfer-encoding", "te", "trailer", "expect", "content-length"];

/** Forward a request to the Express backend at `/api/<apiPath>`, passing cookies both ways. */
export async function proxyToBackend(request: NextRequest, apiPath: string): Promise<Response> {
  const target = new URL(`${backendUrl()}/api/${apiPath}`);
  target.search = request.nextUrl.search;

  const headers = new Headers(request.headers);
  for (const name of HOP_BY_HOP) headers.delete(name);
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
  } catch (error) {
    return Response.json(
      {
        error: "Backend is not reachable.",
        message: `Start the backend and point BACKEND_URL at ${backendUrl()}. (${error instanceof Error ? error.message : String(error)})`,
      },
      { status: 503 },
    );
  }

  const responseHeaders = new Headers(response.headers);
  responseHeaders.delete("content-encoding");
  responseHeaders.delete("content-length");
  responseHeaders.delete("set-cookie");
  for (const cookie of response.headers.getSetCookie()) responseHeaders.append("set-cookie", cookie);

  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: responseHeaders });
}
