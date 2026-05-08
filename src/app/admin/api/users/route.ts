import type { NextRequest } from "next/server";
import { createAdminUser, deleteAdminUser, getAdminUsers, updateAdminUser, canManageUsers } from "../../_lib/admin-users";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { adminUserCreateSchema, adminUserUpdateSchema } from "../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return Response.json({ users: getAdminUsers() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  if (!canManageUsers(session)) return Response.json({ error: "You do not have permission to manage users." }, { status: 403 });

  const parsed = adminUserCreateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid user." }, { status: 400 });

  try {
    const user = createAdminUser(parsed.data);
    return Response.json({ user }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Could not create user." }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  if (!canManageUsers(session)) return Response.json({ error: "You do not have permission to manage users." }, { status: 403 });

  const parsed = adminUserUpdateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid user update." }, { status: 400 });

  try {
    const user = updateAdminUser(parsed.data);
    return Response.json({ user });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Could not update user." }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  if (!canManageUsers(session)) return Response.json({ error: "You do not have permission to manage users." }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return Response.json({ error: "User id is required." }, { status: 400 });

  try {
    deleteAdminUser(id);
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Could not delete user." }, { status: 400 });
  }
}
