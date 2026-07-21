"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { changePassword } from "@/lib/tutor/profile";

export default function TutorSettingsPage() {
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
    if (next.length < 10) {
      setError("New password must be at least 10 characters.");
      return;
    }
    if (next !== confirm) {
      setError("New password and confirmation do not match.");
      return;
    }
    setBusy(true);
    try {
      await changePassword(current, next);
      setDone(true);
      setCurrent("");
      setNext("");
      setConfirm("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not change your password.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Manage your account security.</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Change password</CardTitle>
        </CardHeader>
        <CardContent>
          {done && (
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="size-4" /> Password updated successfully.
            </div>
          )}
          {error && <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}

          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="current" className="text-xs">Current password</Label>
              <Input id="current" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} className="h-11 rounded-xl" autoComplete="current-password" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="next" className="text-xs">New password</Label>
              <Input id="next" type="password" value={next} onChange={(e) => setNext(e.target.value)} className="h-11 rounded-xl" autoComplete="new-password" minLength={10} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="confirm" className="text-xs">Confirm new password</Label>
              <Input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="h-11 rounded-xl" autoComplete="new-password" minLength={10} required />
            </div>
            <Button type="submit" disabled={busy} className="h-12 rounded-xl font-bold">
              {busy ? "Updating…" : "Update password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
