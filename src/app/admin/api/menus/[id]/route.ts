import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const itemPatchSchema = z.object({
  label: z.string().min(1).max(200).optional(),
  href: z.string().min(1).max(500).optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = itemPatchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const updated = await prisma.navigationMenuItem.update({ where: { id }, data: parsed.data });
  return jsonNoStore({ item: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  await prisma.navigationMenuItem.delete({ where: { id } });
  return jsonNoStore({ ok: true });
}
