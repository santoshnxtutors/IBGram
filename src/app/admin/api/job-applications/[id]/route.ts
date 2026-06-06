import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  status: z.enum(["received", "reviewing", "shortlisted", "rejected", "hired", "withdrawn"]).optional(),
  adminNotes: z.string().max(4000).optional().nullable(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const item = await prisma.jobApplication.update({
    where: { id },
    data: parsed.data,
  });
  return Response.json({ item });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  await prisma.jobApplication.delete({ where: { id } });
  return Response.json({ ok: true });
}
