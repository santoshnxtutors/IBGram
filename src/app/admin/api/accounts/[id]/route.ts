import type { NextRequest } from "next/server";
import { deleteUserAccount } from "@/lib/account/delete-account";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

/** Admin permanently deletes a student or tutor account (and a tutor's public profile). */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const result = await deleteUserAccount(id, { deletedBy: "admin" });
  if (!result.ok) return jsonNoStore({ error: result.error }, { status: result.status });
  return jsonNoStore({ ok: true });
}
