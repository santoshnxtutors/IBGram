import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({ action: z.enum(["approve", "reject"]) });

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: "Invalid action" }, { status: 400 });

  const data =
    parsed.data.action === "approve"
      ? { approved: true, status: "active" as const }
      : { approved: false, status: "archived" as const };

  const tutor = await prisma.tutor.update({ where: { id }, data });
  return jsonNoStore({ tutor: { id: tutor.id, approved: tutor.approved, status: tutor.status } });
}
