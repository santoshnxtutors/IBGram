"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, CheckCircle2, Settings as SettingsIcon, Trash2 } from "lucide-react";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { changePassword, setPassword } from "@/lib/tutor/profile";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";

const REASONS = [
  "I no longer need it",
  "I found what I needed elsewhere",
  "Privacy concerns",
  "Too many calls or messages",
  "Something did not work for me",
  "Other",
];

const fieldCls = "h-11 rounded-xl";

/**
 * Settings for students and tutors: change password and permanently delete the
 * account. `before` lets a role add its own cards on top (tutor visibility).
 */
export function AccountSettings({ before }: { before?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={SettingsIcon}>Settings</HeaderPill>}
        title="Account settings"
        subtitle="Manage your password, your visibility and your account."
      />
      {before}
      <ChangePasswordCard />
      <DeleteAccountCard />
    </div>
  );
}

function ChangePasswordCard() {
  const { user, refresh } = useCurrentUser();
  // Google sign-ups have a random password they never saw: let them set one without it.
  const settingFirst = user?.passwordSet === false;
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setDone(false);
    if (next.length < 10) return setError("New password must be at least 10 characters.");
    if (next !== confirm) return setError("New password and confirmation do not match.");
    setBusy(true);
    try {
      if (settingFirst) await setPassword(next);
      else await changePassword(current, next);
      setDone(true);
      setCurrent("");
      setNext("");
      setConfirm("");
      if (settingFirst) refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not change your password.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{settingFirst ? "Set a password" : "Change password"}</CardTitle>
      </CardHeader>
      <CardContent>
        {settingFirst && (
          <p className="mb-4 text-sm text-muted-foreground">
            You signed up with Google. Set a password to also log in with your email ({user?.email}) and password.
          </p>
        )}
        {done && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="size-4" /> Password saved. You can now log in with your email and this password.
          </div>
        )}
        {error && <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          {!settingFirst && (
            <div className="space-y-1.5">
              <Label htmlFor="current" className="text-xs">Current password</Label>
              <Input id="current" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} className={fieldCls} autoComplete="current-password" required />
            </div>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="next" className="text-xs">New password</Label>
            <Input id="next" type="password" value={next} onChange={(e) => setNext(e.target.value)} className={fieldCls} autoComplete="new-password" minLength={10} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirm" className="text-xs">Confirm new password</Label>
            <Input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={fieldCls} autoComplete="new-password" minLength={10} required />
          </div>
          <Button type="submit" disabled={busy} className="h-12 rounded-xl font-bold">
            {busy ? "Saving…" : settingFirst ? "Set password" : "Update password"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function DeleteAccountCard() {
  const { user } = useCurrentUser();
  const isTutor = user?.accountType === "tutor";
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");
  const [typed, setTyped] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ready = reason && understood && typed === "DELETE";

  const remove = async () => {
    if (!ready) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/account/delete/", {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ confirm: typed, reason, feedback }),
      });
      const body = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) throw new Error(body?.error ?? "Could not delete your account.");
      // Hard navigation: the session is gone, so every gated view must reset.
      window.location.href = "/?account=deleted";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete your account.");
      setBusy(false);
    }
  };

  return (
    <Card className="border-destructive/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-destructive">
          <Trash2 className="size-5" /> Delete account
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Permanently delete your IB Gram account
          {isTutor ? ", your tutor profile and its public page on the Find a Tutor directory" : " and your student profile"}, together
          with all your demo requests and bookings. This cannot be undone.
        </p>

        {!open ? (
          <Button variant="outline" onClick={() => setOpen(true)} className="h-11 rounded-xl border-destructive/40 font-bold text-destructive hover:bg-destructive/10 hover:text-destructive">
            Delete my account
          </Button>
        ) : (
          <div className="space-y-4 rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
            <div className="flex items-start gap-2 text-sm font-semibold text-destructive">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              Before you go: tell us why you are leaving, then confirm.
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="reason" className="text-xs">Why are you deleting your account? *</Label>
              <select
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              >
                <option value="">Choose a reason…</option>
                {REASONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="feedback" className="text-xs">Anything we could have done better? (optional)</Label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                maxLength={1000}
                className="min-h-[80px] w-full resize-none rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <label className="flex items-start gap-2.5 text-sm text-foreground">
              <input type="checkbox" checked={understood} onChange={(e) => setUnderstood(e.target.checked)} className="mt-1 size-4 accent-[var(--destructive)]" />
              I understand my account{isTutor ? ", tutor profile" : ""} and bookings will be permanently deleted and cannot be recovered.
            </label>

            <div className="space-y-1.5">
              <Label htmlFor="typed" className="text-xs">Type <span className="font-black">DELETE</span> to confirm</Label>
              <Input id="typed" value={typed} onChange={(e) => setTyped(e.target.value)} className={fieldCls} autoComplete="off" placeholder="DELETE" />
            </div>

            {error && <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={remove}
                disabled={!ready || busy}
                className="h-11 rounded-xl bg-destructive font-bold text-white hover:bg-destructive/90 disabled:opacity-50"
              >
                {busy ? "Deleting…" : "Permanently delete account"}
              </Button>
              <Button variant="ghost" onClick={() => setOpen(false)} disabled={busy} className="h-11 rounded-xl font-bold">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
