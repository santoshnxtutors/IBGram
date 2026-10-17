import type { NextRequest } from "next/server";
import { z } from "zod";
import { getServerUser } from "@/lib/auth/server";
import { deleteUserAccount } from "@/lib/account/delete-account";
import { jsonNoStore } from "@/lib/cache/revalidation";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  confirm: z.literal("DELETE", { message: "Type DELETE to confirm." }),
  reason: z.string().trim().max(120).default(""),
  feedback: z.string().trim().max(1000).default(""),
});

/** The signed-in student or tutor permanently deletes their own account. */
export async function POST(request: NextRequest) {
  const user = await getServerUser();
  if (!user) return jsonNoStore({ error: "Please sign in again." }, { status: 401 });

  const parsed = bodySchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid request." }, { status: 400 });

  const result = await deleteUserAccount(user.id, { deletedBy: "self", reason: parsed.data.reason, feedback: parsed.data.feedback });
  if (!result.ok) return jsonNoStore({ error: result.error }, { status: result.status });

  // The session rows went with the user; also drop the now-dead cookie.
  const response = jsonNoStore({ ok: true });
  const domain = process.env.COOKIE_DOMAIN?.trim();
  response.headers.append("set-cookie", `ibgram_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`);
  return response;
}
