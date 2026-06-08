import type { NextRequest } from "next/server";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { createAdminUser, deleteAdminUser, getAdminUsers, updateAdminUser, canManageUsers } from "../../_lib/admin-users";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { adminUserCreateSchema, adminUserUpdateSchema } from "../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return jsonNoStore({ users: getAdminUsers() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  if (!canManageUsers(session)) return jsonNoStore({ error: "You do not have permission to manage users." }, { status: 403 });

  const parsed = adminUserCreateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid user." }, { status: 400 });

  try {
    const user = createAdminUser(parsed.data);
    return jsonNoStore({ user }, { status: 201 });
  } catch (error) {
    return jsonNoStore({ error: error instanceof Error ? error.message : "Could not create user." }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  if (!canManageUsers(session)) return jsonNoStore({ error: "You do not have permission to manage users." }, { status: 403 });

  const parsed = adminUserUpdateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid user update." }, { status: 400 });

  try {
    const user = updateAdminUser(parsed.data);
    return jsonNoStore({ user });
  } catch (error) {
    return jsonNoStore({ error: error instanceof Error ? error.message : "Could not update user." }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  if (!canManageUsers(session)) return jsonNoStore({ error: "You do not have permission to manage users." }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return jsonNoStore({ error: "User id is required." }, { status: 400 });

  try {
    deleteAdminUser(id);
    return jsonNoStore({ ok: true });
  } catch (error) {
    return jsonNoStore({ error: error instanceof Error ? error.message : "Could not delete user." }, { status: 400 });
  }
}
