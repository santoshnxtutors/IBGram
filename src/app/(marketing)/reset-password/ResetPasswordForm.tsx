"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ResetPasswordForm() {
  const token = useSearchParams().get("token") ?? "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }
    setBusy(true);
    try {
      const response = await fetch("/api/auth/reset-password/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || body?.success === false) {
        throw new Error(body?.error?.message ?? "Could not reset your password.");
      }
      setDone(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  if (!token) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="mb-2 text-xl font-bold">Link not valid</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            This reset link is missing its token. Request a new one and use the most recent email.
          </p>
          <Link href="/forgot-password" className="text-sm font-semibold text-primary hover:text-primary/80">
            Request a new link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-4 py-16">
      {done ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="mb-2 text-xl font-bold">Password updated</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            You can now sign in with your new password. Any other devices were signed out.
          </p>
          <Link href="/login" className="text-sm font-semibold text-primary hover:text-primary/80">
            Go to login
          </Link>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8">
          <h1 className="mb-2 text-xl font-bold">Choose a new password</h1>
          <p className="mb-6 text-sm text-muted-foreground">Must be at least 10 characters.</p>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs">New password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              minLength={10}
              required
              className="h-11 rounded-xl bg-background/50 border-border"
            />
          </div>

          <div className="mt-3 space-y-1.5">
            <Label htmlFor="confirm" className="text-xs">Confirm new password</Label>
            <Input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
              autoComplete="new-password"
              minLength={10}
              required
              className="h-11 rounded-xl bg-background/50 border-border"
            />
          </div>

          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

          <Button type="submit" disabled={busy} className="mt-5 h-11 w-full rounded-xl">
            {busy ? "Updating…" : "Update password"}
          </Button>
        </form>
      )}
    </div>
  );
}
