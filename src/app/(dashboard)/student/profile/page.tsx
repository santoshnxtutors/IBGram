"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, CheckCircle2, Trash2 } from "lucide-react";
import { UserRound } from "lucide-react";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";
import { fetchMyStudentProfile, saveMyStudentProfile, uploadStudentPhoto, type LearningMode, type StudentProfileInput } from "@/lib/student/profile";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";

const GRADES: Record<StudentProfileInput["curriculum"], string[]> = {
  IB: ["IB PYP (Grades 1-5)", "IB MYP Year 1-3 (Grades 6-8)", "IB MYP Year 4-5 (Grades 9-10)", "IB DP Year 1 (Grade 11)", "IB DP Year 2 (Grade 12)"],
  IGCSE: ["Pre-IGCSE (Grades 6-8)", "IGCSE Grade 9", "IGCSE Grade 10", "AS / A Level (Grades 11-12)"],
};
const MODES: LearningMode[] = ["online", "home", "hybrid"];

const EMPTY: StudentProfileInput = {
  phone: "",
  parentName: "",
  curriculum: "IB",
  grade: "",
  school: "",
  subjects: [],
  city: "",
  learningModes: ["online"],
  goals: "",
};

const inputCls = "h-11 rounded-xl";
const selectCls = "h-11 w-full rounded-xl border border-border bg-background/50 px-3 text-sm outline-none focus:border-primary";

/** Profile photo: saved on upload, so it needs no Save press. */
function PhotoCard() {
  const { user, refresh } = useCurrentUser();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const name = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.email || "Student";

  const pick = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      await uploadStudentPhoto(file);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not upload the photo.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <Card className="border-border/50">
      <CardHeader><CardTitle className="text-lg font-bold">Profile photo</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap items-center gap-5">
        <PersonAvatar src={user?.avatarUrl} name={name} className="size-20 text-xl" />
        <div className="min-w-0 flex-1 space-y-2">
          <input
            ref={fileRef}
            id="student-photo"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            onChange={(e) => pick(e.target.files?.[0])}
          />
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" disabled={busy} onClick={() => fileRef.current?.click()} className="h-11 gap-2 rounded-xl font-bold">
              <Camera className="size-4" /> {busy ? "Uploading…" : user?.avatarUrl ? "Change photo" : "Add photo"}
            </Button>
            {user?.avatarUrl && (
              <Button
                type="button"
                variant="ghost"
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  setError(null);
                  try {
                    const res = await fetch("/api/profile/photo/", { method: "DELETE", credentials: "include" });
                    if (!res.ok) throw new Error("Could not remove the photo.");
                    refresh();
                  } catch (err) {
                    setError(err instanceof Error ? err.message : "Could not remove the photo.");
                  } finally {
                    setBusy(false);
                  }
                }}
                className="h-11 gap-2 rounded-xl font-semibold text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="size-4" /> Remove
              </Button>
            )}
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            JPG, PNG or WebP, up to 5 MB. Shown on your dashboard and to the tutors you book — never on a public page.
          </p>
          {error && <p className="text-xs font-semibold text-destructive">{error}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

export default function StudentProfilePage() {
  const router = useRouter();
  const { user } = useCurrentUser();
  const [form, setForm] = useState<StudentProfileInput>(EMPTY);
  const [subjects, setSubjects] = useState("");
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user && user.accountType === "tutor") router.replace("/tutor/profile");
  }, [user, router]);

  useEffect(() => {
    fetchMyStudentProfile()
      .then(({ profile }) => {
        if (!profile) return;
        setForm(profile);
        setSubjects(profile.subjects.join(", "));
        setIsNew(false);
      })
      .catch(() => setError("Could not load your profile."))
      .finally(() => setLoading(false));
  }, []);

  const set = <K extends keyof StudentProfileInput>(key: K, value: StudentProfileInput[K]) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    const subjectList = subjects.split(",").map((s) => s.trim()).filter(Boolean);
    if (!subjectList.length) return setError("Add at least one subject you need help with.");
    if (!form.learningModes.length) return setError("Pick at least one learning mode.");
    setSaving(true);
    try {
      await saveMyStudentProfile({ ...form, subjects: subjectList });
      setIsNew(false);
      setSaved(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save your profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-muted-foreground">Loading your profile…</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={UserRound}>My profile</HeaderPill>}
        title="Your learning profile"
        subtitle="Tell us what you study and what you need help with. Our team uses this to match you with the right tutor."
      />

      {saved && (
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="size-4" /> Saved. Our team will contact you to match a tutor.
          <Link href="/student/tutors" className="ml-auto font-bold underline underline-offset-4">Browse tutors now</Link>
        </div>
      )}
      {error && <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}

      <PhotoCard />

      <form onSubmit={submit} className="space-y-6">
        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg font-bold">Contact</CardTitle></CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs">Phone / WhatsApp *</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98xxxxxxxx" className={inputCls} required minLength={7} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="parentName" className="text-xs">Parent / guardian name</Label>
              <Input id="parentName" value={form.parentName} onChange={(e) => set("parentName", e.target.value)} className={inputCls} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="city" className="text-xs">City *</Label>
              <Input id="city" value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="Gurugram" className={inputCls} required minLength={2} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="school" className="text-xs">School</Label>
              <Input id="school" value={form.school} onChange={(e) => set("school", e.target.value)} className={inputCls} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg font-bold">What you study</CardTitle></CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="curriculum" className="text-xs">Curriculum *</Label>
              <select
                id="curriculum"
                value={form.curriculum}
                onChange={(e) => setForm((f) => ({ ...f, curriculum: e.target.value as StudentProfileInput["curriculum"], grade: "" }))}
                className={selectCls}
              >
                <option value="IB">IB</option>
                <option value="IGCSE">IGCSE / Cambridge</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="grade" className="text-xs">Grade / year *</Label>
              <select id="grade" value={form.grade} onChange={(e) => set("grade", e.target.value)} className={selectCls} required>
                <option value="">Choose…</option>
                {[...new Set([...GRADES[form.curriculum], ...(form.grade ? [form.grade] : [])])].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="subjects" className="text-xs">Subjects you need help with (comma separated) *</Label>
              <Input id="subjects" value={subjects} onChange={(e) => setSubjects(e.target.value)} placeholder="Mathematics AA HL, Physics" className={inputCls} />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <span className="text-xs font-medium">How do you want to learn? *</span>
              <div className="flex flex-wrap gap-2">
                {MODES.map((mode) => {
                  const on = form.learningModes.includes(mode);
                  return (
                    <label key={mode} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold capitalize transition-colors ${on ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                      <input type="checkbox" className="sr-only" checked={on} onChange={() => set("learningModes", on ? form.learningModes.filter((m) => m !== mode) : [...form.learningModes, mode])} />
                      {mode}
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="goals" className="text-xs">Goals or anything we should know</Label>
              <textarea id="goals" value={form.goals} onChange={(e) => set("goals", e.target.value)} maxLength={2000} className="min-h-[110px] w-full resize-none rounded-xl border border-border bg-background/50 p-3 text-sm outline-none focus:border-primary" placeholder="e.g. Aiming for a 7 in Maths AA HL, mocks in March, struggling with calculus." />
            </div>
          </CardContent>
        </Card>

        <Button type="submit" disabled={saving} className="h-12 w-full rounded-xl font-bold sm:w-auto sm:px-8">
          {saving ? "Saving…" : isNew ? "Save profile" : "Save changes"}
        </Button>
      </form>
    </div>
  );
}
