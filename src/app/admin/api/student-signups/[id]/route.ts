import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({ status: z.enum(["new", "contacted", "matched", "closed"]) });

/** Move a student signup through the admin pipeline (new -> contacted -> matched -> closed). */
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: "Invalid status." }, { status: 400 });

  const { id } = await params;
  const updated = await prisma.studentProfile.updateMany({ where: { id }, data: { status: parsed.data.status } });
  if (updated.count === 0) return jsonNoStore({ error: "Student profile not found." }, { status: 404 });
  return jsonNoStore({ ok: true });
}
