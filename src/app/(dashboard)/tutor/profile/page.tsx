"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, AlertCircle, BadgeCheck } from "lucide-react";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";
import {
  fetchMyTutorProfile,
  saveMyTutorProfile,
  type TutorProfileStatus,
  type TutorProfileView,
} from "@/lib/tutor/profile";

function StatusBanner({ status }: { status: TutorProfileStatus }) {
  if (status === "none") return null;
  const map = {
    pending: { icon: Clock, cls: "border-amber-400/30 bg-amber-400/10 text-amber-800 dark:text-amber-300", text: "Your profile is under review. Once an admin approves it, you will appear on the Find a Tutor page." },
    approved: { icon: BadgeCheck, cls: "border-emerald-400/30 bg-emerald-400/10 text-emerald-800 dark:text-emerald-300", text: "Your profile is approved and live. Students can find and book demos with you." },
    rejected: { icon: AlertCircle, cls: "border-rose-400/30 bg-rose-400/10 text-rose-700 dark:text-rose-300", text: "Your profile was not approved. Update the details below and save to resubmit." },
    none: { icon: Clock, cls: "", text: "" },
  } as const;
  const { icon: Icon, cls, text } = map[status];
  return (
    <div className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium ${cls}`}>
      <Icon className="mt-0.5 size-4 shrink-0" /> <span>{text}</span>
    </div>
  );
}

export default function TutorProfilePage() {
  const router = useRouter();
  const { user } = useCurrentUser();
  const [view, setView] = useState<TutorProfileView | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [displayName, setDisplayName] = useState("");
  const [headline, setHeadline] = useState("");
  const [subjects, setSubjects] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (user && user.accountType !== "tutor") router.replace("/student");
  }, [user, router]);

  const hydrate = useCallback((v: TutorProfileView) => {
    setView(v);
    const p = v.profile;
    if (p) {
      setDisplayName(p.displayName ?? "");
      setHeadline(p.headline ?? "");
      setSubjects((p.subjects ?? []).join(", "));
      setExperienceYears(p.experienceYears != null ? String(p.experienceYears) : "");
      setPhone(p.phone ?? "");
      setBio(p.bio ?? "");
      setAbout(p.about ?? "");
    }
  }, []);

  useEffect(() => {
    fetchMyTutorProfile()
      .then(hydrate)
      .catch(() => setError("Could not load your profile."))
      .finally(() => setLoading(false));
  }, [hydrate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    if (!displayName.trim()) {
      setError("Please enter your display name.");
      return;
    }
    setSaving(true);
    try {
      const v = await saveMyTutorProfile({
        displayName: displayName.trim(),
        headline: headline.trim(),
        bio: bio.trim(),
        about: about.trim(),
        experienceYears: experienceYears ? Number(experienceYears) : null,
        phone: phone.trim(),
        subjects: subjects.split(",").map((s) => s.trim()).filter(Boolean),
      });
      hydrate(v);
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save your profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-muted-foreground">Loading your profile…</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">My Tutor Profile</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
          This is your public profile. New profiles and edits are reviewed by an admin before going live.
        </p>
      </div>

      {view && <StatusBanner status={view.status} />}
      {saved && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="size-4" /> Saved. {view?.status === "approved" ? "Your changes are live." : "Sent for admin review."}
        </div>
      )}
      {error && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>
      )}

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="displayName" className="text-xs">Display name *</Label>
                <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="h-11 rounded-xl" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs">Phone</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-11 rounded-xl" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="headline" className="text-xs">Headline</Label>
                <Input id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} placeholder="e.g. IB DP Maths & Physics specialist · 10+ yrs" className="h-11 rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subjects" className="text-xs">Subjects (comma separated)</Label>
                <Input id="subjects" value={subjects} onChange={(e) => setSubjects(e.target.value)} placeholder="IB Maths AA, IGCSE Physics" className="h-11 rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="exp" className="text-xs">Years of experience</Label>
                <Input id="exp" type="number" min="0" value={experienceYears} onChange={(e) => setExperienceYears(e.target.value)} className="h-11 rounded-xl" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="bio" className="text-xs">Short bio</Label>
              <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="min-h-[90px] w-full rounded-xl border border-border bg-background/50 p-3 text-sm outline-none focus:border-primary resize-none" placeholder="One or two lines shown on your card." />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="about" className="text-xs">About you</Label>
              <textarea id="about" value={about} onChange={(e) => setAbout(e.target.value)} className="min-h-[120px] w-full rounded-xl border border-border bg-background/50 p-3 text-sm outline-none focus:border-primary resize-none" placeholder="Your teaching approach, experience and results." />
            </div>
            <Button type="submit" disabled={saving} className="h-12 rounded-xl font-bold">
              {saving ? "Saving…" : view?.status === "none" ? "Create profile & submit for review" : "Save changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
