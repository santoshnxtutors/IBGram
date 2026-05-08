import type { NextRequest } from "next/server";

import { getPageById, updatePage } from "../../../_lib/admin-data";
import { requireAdminRequest } from "../../../_lib/admin-auth";
import { adminPageEditorSchema } from "../../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await context.params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) return Response.json({ error: "Page not found." }, { status: 404 });
  return Response.json({ page });
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await context.params;
  const body = await request.json();
  const parsed = adminPageEditorSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Invalid page payload.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const saved = await updatePage(decodeURIComponent(id), body);
  if (!saved) return Response.json({ error: "Page not found." }, { status: 404 });
  return Response.json(saved);
}
