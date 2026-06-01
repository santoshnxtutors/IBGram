import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

function backendUrl(): string {
  const value = (process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || "4000"}`).replace(
    /\/$/,
    "",
  );
  return value;
}

async function proxyAuth(request: NextRequest, context: RouteContext): Promise<Response> {
  const params = await context.params;
  const path = params.path?.join("/") ?? "";
  const target = new URL(`${backendUrl()}/api/auth/${path}`);
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
      {
        error: "Auth backend is not reachable.",
        message: `Start the backend server and make sure BACKEND_URL points to ${backendUrl()}.`,
      },
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
  for (const cookie of setCookies) {
    responseHeaders.append("set-cookie", cookie);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}

export async function GET(request: NextRequest, context: RouteContext) {
  return proxyAuth(request, context);
}

export async function POST(request: NextRequest, context: RouteContext) {
  return proxyAuth(request, context);
}
