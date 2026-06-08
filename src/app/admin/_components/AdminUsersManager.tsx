"use client";

import { useMemo, useState } from "react";
import { ShieldCheck, Trash2, UserPlus } from "lucide-react";

import type { AdminPermission, AdminUserRecord, AdminUserRole } from "../_types/admin";
import { AdminCard, AdminEmptyState, AdminStatusBadge } from "./AdminPrimitives";

const PERMISSIONS: Array<{ id: AdminPermission; label: string }> = [
  { id: "dashboard:read", label: "Dashboard" },
  { id: "pages:read", label: "View pages" },
  { id: "pages:write", label: "Edit pages" },
  { id: "pages:publish", label: "Publish pages" },
  { id: "generator:use", label: "AI generator" },
  { id: "tutors:write", label: "Tutors" },
  { id: "locations:write", label: "Locations" },
  { id: "seo:write", label: "SEO" },
  { id: "assets:write", label: "Assets" },
  { id: "imports:write", label: "Imports" },
  { id: "settings:write", label: "Settings" },
  { id: "users:manage", label: "Users" },
];

const ROLE_DEFAULTS: Record<Exclude<AdminUserRole, "owner">, AdminPermission[]> = {
  admin: PERMISSIONS.filter((permission) => permission.id !== "settings:write").map((permission) => permission.id),
  editor: ["dashboard:read", "pages:read", "pages:write", "generator:use", "tutors:write", "locations:write", "seo:write", "assets:write"],
  viewer: ["dashboard:read", "pages:read"],
};

type NewUserForm = {
  name: string;
  email: string;
  username: string;
  password: string;
  role: Exclude<AdminUserRole, "owner">;
  permissions: AdminPermission[];
  status: "active" | "disabled";
};

const blankUser: NewUserForm = {
  name: "",
  email: "",
  username: "",
  password: "",
  role: "viewer",
  permissions: ROLE_DEFAULTS.viewer,
  status: "active",
};

export function AdminUsersManager({ initialUsers }: { initialUsers: AdminUserRecord[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState<NewUserForm>(blankUser);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const localUsers = useMemo(() => users.filter((user) => user.source === "local"), [users]);

  async function createUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    const response = await fetch("/admin/api/users/", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = (await response.json().catch(() => ({}))) as { user?: AdminUserRecord; error?: string };
    setSaving(false);

    if (!response.ok || !data.user) {
      setError(data.error ?? "Could not create user.");
      return;
    }

    setUsers((current) => [...current, data.user!]);
    setForm(blankUser);
    setMessage(`${data.user.name} can now sign in with the assigned permissions.`);
  }

  async function updateUser(user: AdminUserRecord, patch: Partial<Pick<AdminUserRecord, "role" | "permissions" | "status" | "name">>) {
    if (user.source === "environment") return;
    setError("");
    setMessage("");

    const response = await fetch("/admin/api/users/", {
      method: "PATCH",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: user.id, ...patch }),
    });
    const data = (await response.json().catch(() => ({}))) as { user?: AdminUserRecord; error?: string };
    if (!response.ok || !data.user) {
      setError(data.error ?? "Could not update user.");
      return;
    }
    setUsers((current) => current.map((item) => (item.id === data.user!.id ? data.user! : item)));
    setMessage("User permissions updated.");
  }

  async function deleteUser(user: AdminUserRecord) {
    if (user.source === "environment") return;
    const response = await fetch(`/admin/api/users/?id=${encodeURIComponent(user.id)}`, { method: "DELETE", cache: "no-store" });
    const data = (await response.json().catch(() => ({}))) as { error?: string };
    if (!response.ok) {
      setError(data.error ?? "Could not delete user.");
      return;
    }
    setUsers((current) => current.filter((item) => item.id !== user.id));
    setMessage("User removed.");
  }

  function setRole(role: Exclude<AdminUserRole, "owner">) {
    setForm({ ...form, role, permissions: ROLE_DEFAULTS[role] });
  }

  function toggleFormPermission(permission: AdminPermission) {
    const permissions = form.permissions.includes(permission)
      ? form.permissions.filter((item) => item !== permission)
      : [...form.permissions, permission];
    setForm({ ...form, permissions });
  }

  return (
    <div className="grid gap-5">
      <AdminCard className="border-emerald-300/20 bg-emerald-300/[0.04]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Access Control</p>
            <h2 className="mt-2 text-2xl font-black text-white">Add admin users and assign permissions</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-400">
              Users are saved server-side in the admin data folder. Passwords are hashed before storage. The environment admin remains the owner account.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm font-bold text-slate-300">
            <ShieldCheck className="mr-2 inline size-4 text-emerald-300" />
            {users.length} active access records
          </div>
        </div>
      </AdminCard>

      <form onSubmit={createUser} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 md:grid-cols-2">
        <h2 className="flex items-center gap-2 text-xl font-black text-white md:col-span-2">
          <UserPlus className="size-5 text-emerald-300" />
          New admin user
        </h2>
        <Field label="Name" value={form.name} onChange={(name) => setForm({ ...form, name })} />
        <Field label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email, username: form.username || email })} />
        <Field label="Username" value={form.username} onChange={(username) => setForm({ ...form, username })} />
        <Field label="Temporary password" type="password" value={form.password} onChange={(password) => setForm({ ...form, password })} />
        <label className="block">
          <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">Role</span>
          <select value={form.role} onChange={(event) => setRole(event.target.value as Exclude<AdminUserRole, "owner">)} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30">
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">Status</span>
          <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as "active" | "disabled" })} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30">
            <option value="active">Active</option>
            <option value="disabled">Disabled</option>
          </select>
        </label>
        <div className="md:col-span-2">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">Permissions</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {PERMISSIONS.map((permission) => (
              <label key={permission.id} className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm font-bold text-slate-300">
                <input type="checkbox" checked={form.permissions.includes(permission.id)} onChange={() => toggleFormPermission(permission.id)} className="size-4 accent-emerald-300" />
                {permission.label}
              </label>
            ))}
          </div>
        </div>
        {error && <p className="rounded-lg border border-rose-300/20 bg-rose-300/10 p-3 text-sm font-bold text-rose-100 md:col-span-2">{error}</p>}
        {message && <p className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm font-bold text-emerald-100 md:col-span-2">{message}</p>}
        <div className="md:col-span-2">
          <button disabled={saving} className="h-10 rounded-lg bg-emerald-300 px-4 text-sm font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-60">
            {saving ? "Creating..." : "Create user"}
          </button>
        </div>
      </form>

      <AdminCard>
        <h2 className="mb-4 text-xl font-black text-white">Current users</h2>
        {!users.length ? (
          <AdminEmptyState title="No admin users found" />
        ) : (
          <div className="grid gap-3">
            {users.map((user) => (
              <UserRow key={user.id} user={user} onUpdate={updateUser} onDelete={deleteUser} />
            ))}
          </div>
        )}
        {!localUsers.length && (
          <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm font-semibold text-slate-400">
            Add your first extra user above. They will appear here and can sign in from `/admin/login`.
          </p>
        )}
      </AdminCard>
    </div>
  );
}

function UserRow({
  user,
  onUpdate,
  onDelete,
}: {
  user: AdminUserRecord;
  onUpdate: (user: AdminUserRecord, patch: Partial<Pick<AdminUserRecord, "role" | "permissions" | "status" | "name">>) => void;
  onDelete: (user: AdminUserRecord) => void;
}) {
  const editable = user.source === "local";
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-4">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_160px_160px_auto] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-black text-white">{user.name}</h3>
            <AdminStatusBadge status={user.status === "active" ? "published" : "paused"} />
            <span className="rounded-md border border-white/10 px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-400">{user.source}</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-400">{user.email || user.username}</p>
        </div>
        <select disabled={!editable} value={user.role} onChange={(event) => onUpdate(user, { role: event.target.value as Exclude<AdminUserRole, "owner">, permissions: ROLE_DEFAULTS[event.target.value as Exclude<AdminUserRole, "owner">] })} className="h-10 rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none disabled:opacity-60">
          <option value="owner" disabled>Owner</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
        <select disabled={!editable} value={user.status} onChange={(event) => onUpdate(user, { status: event.target.value as "active" | "disabled" })} className="h-10 rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none disabled:opacity-60">
          <option value="active">Active</option>
          <option value="disabled">Disabled</option>
        </select>
        <button disabled={!editable} onClick={() => onDelete(user)} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-rose-300/20 bg-rose-300/10 px-3 text-sm font-black text-rose-100 disabled:cursor-not-allowed disabled:opacity-40">
          <Trash2 className="size-4" />
          Remove
        </button>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {PERMISSIONS.map((permission) => (
          <label key={permission.id} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-sm font-bold text-slate-300">
            <input
              disabled={!editable}
              type="checkbox"
              checked={user.permissions.includes(permission.id)}
              onChange={() => {
                const permissions = user.permissions.includes(permission.id)
                  ? user.permissions.filter((item) => item !== permission.id)
                  : [...user.permissions, permission.id];
                onUpdate(user, { permissions });
              }}
              className="size-4 accent-emerald-300 disabled:opacity-40"
            />
            {permission.label}
          </label>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}
