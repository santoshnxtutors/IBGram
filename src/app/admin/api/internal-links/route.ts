import type { NextRequest } from "next/server";
import { getInternalLinks } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { adminInternalLinkSchema } from "../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return Response.json({ links: await getInternalLinks() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = adminInternalLinkSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: "Invalid internal link.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  return Response.json({ link: parsed.data, message: "Internal link validated. Connect DB adapter for persistence." });
}
