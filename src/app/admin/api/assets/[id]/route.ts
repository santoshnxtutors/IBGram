import { promises as fs } from "node:fs";
import path from "node:path";
import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
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
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const asset = await prisma.asset.update({ where: { id }, data: parsed.data });
  return Response.json({ asset });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const asset = await prisma.asset.findUnique({ where: { id } });
  if (!asset) return Response.json({ error: "Not found" }, { status: 404 });

  if (asset.provider === "local") {
    const uploadDir = process.env.UPLOAD_DIR?.trim() || path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
    const filePath = path.join(/* turbopackIgnore: true */ uploadDir, asset.key);
    await fs.unlink(filePath).catch(() => {
      // ignore — file may have been removed manually
    });
  }

  await prisma.asset.delete({ where: { id } });
  return Response.json({ ok: true });
}
