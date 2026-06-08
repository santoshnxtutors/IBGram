import type { NextRequest } from "next/server";

import { getAffectedPathsForPage } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { getPageById, updatePage } from "../../../_lib/admin-data";
import { requireAdminRequest } from "../../../_lib/admin-auth";
import { adminPageEditorSchema } from "../../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await context.params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) return jsonNoStore({ error: "Page not found." }, { status: 404 });
  return jsonNoStore({ page });
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await context.params;
  const body = await request.json();
  const parsed = adminPageEditorSchema.safeParse(body);
  if (!parsed.success) {
    return jsonNoStore({ error: "Invalid page payload.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const before = await getPageById(decodeURIComponent(id));
  const saved = await updatePage(decodeURIComponent(id), body);
  if (!saved) return jsonNoStore({ error: "Page not found." }, { status: 404 });
  const revalidated = applyRevalidationTargets(getAffectedPathsForPage(before, saved.page));
  return jsonNoStore({ ...saved, revalidated });
}
