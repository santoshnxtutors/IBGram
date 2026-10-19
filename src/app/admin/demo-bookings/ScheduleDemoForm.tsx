"use client";

import { useState } from "react";
import { AdminCard } from "../_components/AdminPrimitives";
import { SearchSelect } from "@/components/ui/search-select";

export type TutorOption = { id: string; displayName: string; hasLogin: boolean };
export type StudentOption = { id: string; name: string; email: string };

/** Admin-side scheduling: pairs a tutor with an existing or brand-new student. */
export function ScheduleDemoForm({ tutors, students }: { tutors: TutorOption[]; students: StudentOption[] }) {
  const [mode, setMode] = useState<"existing" | "new">("existing");
  const [tutorId, setTutorId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentEmail, setNewStudentEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const submit = async () => {
    setError(null);
    setResult(null);
    setBusy(true);
    try {
      const res = await fetch("/admin/api/demos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorId,
          subject,
          scheduledAt: new Date(scheduledAt).toISOString(),
          durationMinutes,
          ...(mode === "existing" ? { studentId } : { newStudentName, newStudentEmail }),
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Could not schedule the demo.");

      const bits = [
        body.meetLink ? "Meet link created" : "no Meet link (check Google credentials)",
        body.studentEmailed ? "student emailed" : "student email FAILED",
        body.tutorEmailed ? "tutor emailed" : "tutor email FAILED",
        body.chatOpened ? "chat opened" : "chat NOT opened",
      ];
      if (body.accountCreated) bits.push("new student account created, credentials sent");
      setResult(`Demo scheduled — ${bits.join(", ")}.`);
      setSubject("");
      setScheduledAt("");
      setNewStudentName("");
      setNewStudentEmail("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not schedule the demo.");
    } finally {
      setBusy(false);
    }
  };

  const input = "h-9 w-full rounded-md border border-white/15 bg-white/[0.04] px-3 text-sm text-slate-100 outline-none focus:border-emerald-400";
  const menu = "border-white/15 bg-[#121a28] text-slate-100";
  const label = "mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-400";
  const bookable = tutors.filter((t) => t.hasLogin);
  const noLogin = tutors.length - bookable.length;
  const ready = tutorId && subject && scheduledAt && (mode === "existing" ? studentId : newStudentName && newStudentEmail);

  return (
    <AdminCard>
      <h3 className="mb-1 text-sm font-black uppercase tracking-[0.18em] text-slate-300">Schedule a demo</h3>
      <p className="mb-4 text-xs text-slate-500">
        Books the demo as confirmed, creates a Google Meet link, opens the student–tutor chat, and emails both sides.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className={label}>Tutor</label>
          <SearchSelect
            name="tutorId"
            label="Tutor"
            value={tutorId}
            onChange={setTutorId}
            options={bookable.map((t) => ({ value: t.id, label: t.displayName }))}
            placeholder="Select a tutor…"
            searchPlaceholder={`Search ${bookable.length} tutors by name`}
            className={input}
            menuClassName={menu}
          />
          {noLogin > 0 && (
            <p className="mt-1 text-[11px] text-slate-500">
              {noLogin} tutor{noLogin === 1 ? "" : "s"} hidden — no login account yet. Create one from Tutor Applications.
            </p>
          )}
        </div>

        <div>
          <label className={label}>Student</label>
          <div className="mb-2 flex gap-3 text-xs text-slate-400">
            <label className="flex items-center gap-1.5">
              <input type="radio" checked={mode === "existing"} onChange={() => setMode("existing")} /> Existing
            </label>
            <label className="flex items-center gap-1.5">
              <input type="radio" checked={mode === "new"} onChange={() => setMode("new")} /> New
            </label>
          </div>
          {mode === "existing" ? (
            <SearchSelect
              name="studentId"
              label="Student"
              value={studentId}
              onChange={setStudentId}
              options={students.map((s) => ({ value: s.id, label: s.name, hint: s.email }))}
              placeholder="Select a student…"
              searchPlaceholder={`Search ${students.length} students by name or email`}
              className={input}
              menuClassName={menu}
            />
          ) : (
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} placeholder="Full name" className={input} />
              <input type="email" value={newStudentEmail} onChange={(e) => setNewStudentEmail(e.target.value)} placeholder="student@email.com" className={input} />
            </div>
          )}
        </div>

        <div>
          <label className={label}>Subject</label>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="IB Maths AA HL" className={input} />
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-2">
          <div>
            <label className={label}>Date &amp; time</label>
            <input type="datetime-local" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} className={input} />
          </div>
          <div>
            <label className={label}>Mins</label>
            <input
              type="number"
              min={15}
              max={180}
              step={15}
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
              className={`${input} w-20`}
            />
          </div>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}
      {result && <p className="mt-3 text-sm text-emerald-400">{result}</p>}

      <button
        disabled={busy || !ready}
        onClick={submit}
        className="mt-4 h-9 rounded-md bg-emerald-500/90 px-4 text-xs font-bold text-white hover:bg-emerald-500 disabled:opacity-40"
      >
        {busy ? "Scheduling…" : "Schedule demo & send Meet link"}
      </button>

      {mode === "new" && (
        <p className="mt-2 text-[11px] text-slate-500">
          A new student gets an account created automatically and their login details included in the email.
        </p>
      )}
    </AdminCard>
  );
}
