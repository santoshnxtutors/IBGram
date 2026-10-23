"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export type Person = { id: string; name: string; email: string };

const field = "h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold text-white outline-none ring-emerald-300/30 placeholder:text-slate-500 focus:ring-2";

/**
 * A native <select> draws its dropdown with the OS popup background - white on Windows -
 * but the options still inherit `color` from the control. With `text-white` on the field
 * that made every option white-on-white and invisible; only the hovered row was legible,
 * because hovering paints its own blue background. The list looked empty when it was full.
 *
 * Options therefore carry their own explicit colours rather than inheriting the dark theme.
 */
const option = "bg-slate-900 text-white";
const label = "mb-1 block text-[11px] font-black uppercase tracking-[0.16em] text-slate-500";
const primary = "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-50";

/** 14 characters, mixed case + digits + a symbol — comfortably past the password policy. */
function generatePassword(): string {
  const pools = ["ABCDEFGHJKLMNPQRSTUVWXYZ", "abcdefghijkmnpqrstuvwxyz", "23456789", "!@#$%&*?"];
  const all = pools.join("");
  const pick = (set: string) => set[Math.floor(Math.random() * set.length)];
  const chars = [...pools.map(pick), ...Array.from({ length: 10 }, () => pick(all))];
  return chars.sort(() => Math.random() - 0.5).join("");
}

/** Create a permanent student or tutor login, and pair people into a chat. */
export function AccountsClient({ students, tutors }: { students: Person[]; tutors: Person[] }) {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "tutor">("student");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: generatePassword(),
    city: "", curriculum: "IB", grade: "", school: "", subjects: "", headline: "", pairWithUserId: "",
  });
  const [sendEmail, setSendEmail] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{ email: string; password: string; emailed: boolean; paired: boolean } | null>(null);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const counterparts = useMemo(() => (role === "student" ? tutors : students), [role, students, tutors]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setDone(null);
    try {
      const response = await fetch("/admin/api/accounts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role, sendEmail }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error ?? "Could not create the account.");
      setDone({ email: form.email, password: form.password, emailed: Boolean(body.emailed), paired: Boolean(body.pairedConversationId) });
      setForm({
        firstName: "", lastName: "", email: "", phone: "", password: generatePassword(),
        city: "", curriculum: "IB", grade: "", school: "", subjects: "", headline: "", pairWithUserId: "",
      });
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not create the account.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-4">
      <section className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="mb-5 flex flex-wrap gap-2">
          {(["student", "tutor"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRole(option)}
              className={`rounded-lg border px-4 py-2 text-sm font-black uppercase tracking-[0.12em] transition ${
                role === option
                  ? "border-emerald-300/60 bg-emerald-300/15 text-emerald-100"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-emerald-300/30"
              }`}
            >
              Add {option}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>First name *</label>
            <input className={field} value={form.firstName} onChange={set("firstName")} required placeholder="Aarav" />
          </div>
          <div>
            <label className={label}>Last name</label>
            <input className={field} value={form.lastName} onChange={set("lastName")} placeholder="Sharma" />
          </div>
          <div>
            <label className={label}>Login email *</label>
            <input className={field} type="email" value={form.email} onChange={set("email")} required placeholder="name@email.com" />
          </div>
          <div>
            <label className={label}>Phone / WhatsApp{role === "student" ? " (adds a student profile)" : ""}</label>
            <input className={field} value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
          </div>

          <div className="sm:col-span-2">
            <label className={label}>Password *</label>
            <div className="flex gap-2">
              <input className={field} value={form.password} onChange={set("password")} required minLength={10} />
              <button type="button" onClick={() => setForm((f) => ({ ...f, password: generatePassword() }))} className="h-11 shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-xs font-black uppercase tracking-[0.12em] text-slate-200 hover:border-emerald-300/40">
                New
              </button>
            </div>
            <p className="mt-1 text-xs font-semibold text-slate-500">At least 10 characters. They can change it from Settings after signing in.</p>
          </div>

          {role === "student" ? (
            <>
              <div>
                <label className={label}>City</label>
                <input className={field} value={form.city} onChange={set("city")} placeholder="Gurugram" />
              </div>
              <div>
                <label className={label}>Curriculum</label>
                <select className={field} value={form.curriculum} onChange={set("curriculum")}>
                  <option className={option} value="IB">IB</option>
                  <option className={option} value="IGCSE">IGCSE</option>
                  <option className={option} value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={label}>Grade / year</label>
                <input className={field} value={form.grade} onChange={set("grade")} placeholder="IB DP Year 1" />
              </div>
              <div>
                <label className={label}>School</label>
                <input className={field} value={form.school} onChange={set("school")} placeholder="Pathways World School" />
              </div>
              <div className="sm:col-span-2">
                <label className={label}>Subjects (comma separated)</label>
                <input className={field} value={form.subjects} onChange={set("subjects")} placeholder="Maths AA HL, Physics HL" />
              </div>
            </>
          ) : (
            <div className="sm:col-span-2">
              <label className={label}>Headline</label>
              <input className={field} value={form.headline} onChange={set("headline")} placeholder="IB DP Maths & Physics tutor, 8 years" />
              <p className="mt-1 text-xs font-semibold text-slate-500">
                A draft tutor profile is created too — finish it under Tutor Signups and publish when it is ready.
              </p>
            </div>
          )}

          <div className="sm:col-span-2">
            <label className={label}>Pair permanently with a {role === "student" ? "tutor" : "student"} (optional)</label>
            <select className={field} value={form.pairWithUserId} onChange={set("pairWithUserId")}>
              <option className={option} value="">No pairing</option>
              {counterparts.map((p) => (
                <option className={option} key={p.id} value={p.id}>{p.name} — {p.email}</option>
              ))}
            </select>
            <p className="mt-1 text-xs font-semibold text-slate-500">Opens a permanent chat between the two, exactly like a paid booking does.</p>
          </div>

          <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 sm:col-span-2">
            <input type="checkbox" checked={sendEmail} onChange={(e) => setSendEmail(e.target.checked)} className="size-4 accent-emerald-400" />
            Email them their login details
          </label>

          {error && <p className="rounded-lg border border-rose-300/30 bg-rose-300/10 p-3 text-sm font-bold text-rose-100 sm:col-span-2">{error}</p>}

          {done && (
            <div className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 p-3 text-sm font-bold text-emerald-100 sm:col-span-2">
              <p>Account created for {done.email}.</p>
              <p className="mt-1 font-mono text-xs text-emerald-200">Password: {done.password}</p>
              <p className="mt-1 text-xs font-semibold text-emerald-200/80">
                {done.emailed ? "Login details emailed." : "Email was not sent (SMTP is not configured) — share the password yourself."}
                {done.paired ? " Permanent chat opened." : ""}
              </p>
            </div>
          )}

          <div className="sm:col-span-2">
            <button type="submit" disabled={busy} className={primary}>
              {busy ? "Creating…" : `Create ${role} account`}
            </button>
          </div>
        </form>
      </section>

      <PairExisting students={students} tutors={tutors} />
    </div>
  );
}

/** Pair two accounts that already exist into a permanent chat. */
function PairExisting({ students, tutors }: { students: Person[]; tutors: Person[] }) {
  const [studentId, setStudentId] = useState("");
  const [tutorId, setTutorId] = useState("");
  const [notify, setNotify] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const response = await fetch("/admin/api/accounts/link/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, tutorId, notify }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error ?? "Could not pair them.");
      setMessage({ ok: true, text: "Paired — their chat is open permanently and both sides have been told." });
    } catch (caught) {
      setMessage({ ok: false, text: caught instanceof Error ? caught.message : "Could not pair them." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <h2 className="text-lg font-black text-white">Pair an existing student with a tutor</h2>
      <p className="mt-1 text-sm font-medium text-slate-400">
        Opens a permanent chat between them, so they can message, share files and start Google Meet classes without waiting for a payment.
      </p>

      <form onSubmit={submit} className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Student</label>
          <select className={field} value={studentId} onChange={(e) => setStudentId(e.target.value)} required>
            <option className={option} value="">Choose a student</option>
            {students.map((p) => (
              <option className={option} key={p.id} value={p.id}>{p.name} — {p.email}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Tutor</label>
          <select className={field} value={tutorId} onChange={(e) => setTutorId(e.target.value)} required>
            <option className={option} value="">Choose a tutor</option>
            {tutors.map((p) => (
              <option className={option} key={p.id} value={p.id}>{p.name} — {p.email}</option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 sm:col-span-2">
          <input type="checkbox" checked={notify} onChange={(e) => setNotify(e.target.checked)} className="size-4 accent-emerald-400" />
          Email both of them that the chat is open
        </label>

        {message && (
          <p className={`rounded-lg border p-3 text-sm font-bold sm:col-span-2 ${message.ok ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100" : "border-rose-300/30 bg-rose-300/10 text-rose-100"}`}>
            {message.text}
          </p>
        )}

        <div className="sm:col-span-2">
          <button type="submit" disabled={busy || !studentId || !tutorId} className={primary}>
            {busy ? "Pairing…" : "Open their permanent chat"}
          </button>
        </div>
      </form>
    </section>
  );
}
