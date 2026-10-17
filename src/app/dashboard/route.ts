import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { dashboardPathForUser } from "@/lib/auth/types";

export const dynamic = "force-dynamic";

/**
 * /dashboard/ -> the signed-in user's own dashboard. The proxy sends signed-in
 * visitors of the homepage here. A stale session cookie is cleared and the visitor
 * goes back to the homepage, so a dead cookie can never cause a redirect loop.
 */
export async function GET(request: NextRequest) {
  const user = await getServerUser();
  if (user) return Response.redirect(new URL(`${dashboardPathForUser(user)}/`, request.url), 302);

  const domain = process.env.COOKIE_DOMAIN?.trim();
  return new Response(null, {
    status: 302,
    headers: {
      location: new URL("/", request.url).toString(),
      "set-cookie": `ibgram_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`,
    },
  });
}
