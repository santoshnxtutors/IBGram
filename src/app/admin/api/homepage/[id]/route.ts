import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAffectedPathsForHomepage } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  displayName: z.string().min(1).max(200).optional(),
  sectionType: z.string().min(1).max(120).optional(),
  heading: z.string().max(500).optional().nullable(),
  subheading: z.string().max(1000).optional().nullable(),
  body: z.string().max(8000).optional().nullable(),
  sortOrder: z.number().int().optional(),
  isVisible: z.boolean().optional(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const updated = await prisma.homepageSection.update({ where: { id }, data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForHomepage());
  return jsonNoStore({ item: updated, revalidated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  await prisma.homepageSection.delete({ where: { id } });
  const revalidated = applyRevalidationTargets(getAffectedPathsForHomepage());
  return jsonNoStore({ ok: true, revalidated });
}
