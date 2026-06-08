import { promises as fs } from "node:fs";
import path from "node:path";
import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAffectedPathsForAsset } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  altText: z.string().max(500).optional().nullable(),
  filename: z.string().max(200).optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const asset = await prisma.asset.update({ where: { id }, data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForAsset());
  return jsonNoStore({ asset, revalidated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const asset = await prisma.asset.findUnique({ where: { id } });
  if (!asset) return jsonNoStore({ error: "Not found" }, { status: 404 });

  if (asset.provider === "local") {
    const uploadDir = process.env.UPLOAD_DIR?.trim() || path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
    const filePath = path.join(/* turbopackIgnore: true */ uploadDir, asset.key);
    await fs.unlink(filePath).catch(() => {
      // ignore — file may have been removed manually
    });
  }

  await prisma.asset.delete({ where: { id } });
  const revalidated = applyRevalidationTargets(getAffectedPathsForAsset());
  return jsonNoStore({ ok: true, revalidated });
}
