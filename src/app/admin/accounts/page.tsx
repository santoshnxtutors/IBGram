import Link from "next/link";
import { prisma } from "@/lib/db";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { AccountsClient, type Person } from "./AccountsClient";

export const dynamic = "force-dynamic";

const nameOf = (u: { firstName: string | null; lastName: string | null; email: string }) =>
  [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email;

/** Everyone with a login, split by account type, plus the newest handful. */
async function load() {
  const users = await prisma.user.findMany({
    where: { accountType: { in: ["student", "tutor"] }, deletedAt: null },
    orderBy: { createdAt: "desc" },
    take: 1000,
    select: { id: true, email: true, firstName: true, lastName: true, accountType: true, createdAt: true, lastLoginAt: true },
  });
  const permanentChats = await prisma.conversation.count({ where: { permanent: true } });
  return { users, permanentChats };
}

export default async function AdminAccountsPage() {
  let users: Awaited<ReturnType<typeof load>>["users"] = [];
  let permanentChats = 0;
  let dbError: string | null = null;
  try {
    ({ users, permanentChats } = await load());
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const toPerson = (u: (typeof users)[number]): Person => ({ id: u.id, name: nameOf(u), email: u.email });
  const students = users.filter((u) => u.accountType === "student").map(toPerson);
  const tutors = users.filter((u) => u.accountType === "tutor").map(toPerson);
  const recent = users.slice(0, 8);

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Accounts"
        title="Add Students & Tutors"
        description="Create a permanent login for a student or a tutor, email them their details, and pair them into a chat they can use straight away."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <AdminMetricCard label="Student accounts" value={students.length} href="/admin/student-signups" />
        <AdminMetricCard label="Tutor accounts" value={tutors.length} href="/admin/tutor-signups" />
        <AdminMetricCard label="Permanent chats" value={permanentChats} tone="sky" />
      </div>

      {dbError ? (
        <AdminCard>
          <AdminEmptyState title="Could not load accounts" detail={dbError} />
        </AdminCard>
      ) : (
        <>
          <AccountsClient students={students} tutors={tutors} />

          <AdminCard className="mt-4">
            <h2 className="text-lg font-black text-white">Recently added</h2>
            {recent.length === 0 ? (
              <p className="mt-2 text-sm font-medium text-slate-400">No student or tutor accounts yet.</p>
            ) : (
              <ul className="mt-3 divide-y divide-white/10">
                {recent.map((u) => (
                  <li key={u.id} className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm">
                    <span className="min-w-0">
                      <span className="font-bold text-white">{nameOf(u)}</span>
                      <span className="ml-2 text-slate-400">{u.email}</span>
                    </span>
                    <span className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                      <span className={`rounded-full border px-2.5 py-1 font-black uppercase tracking-wide ${u.accountType === "tutor" ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200" : "border-sky-300/30 bg-sky-300/10 text-sky-200"}`}>
                        {u.accountType}
                      </span>
                      <span>{u.lastLoginAt ? "Has signed in" : "Not signed in yet"}</span>
                      <Link
                        href={u.accountType === "tutor" ? "/admin/tutor-signups" : "/admin/student-signups"}
                        className="text-emerald-300 hover:underline"
                      >
                        Open
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </AdminCard>
        </>
      )}
    </AdminShell>
  );
}
