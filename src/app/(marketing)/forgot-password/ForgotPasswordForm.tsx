"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const response = await fetch("/api/auth/request-password-reset/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ usernameOrEmail: email }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error?.message ?? "Could not send the reset email.");
      }
      // Always a success screen: the API never says whether the account exists.
      setSent(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-4 py-16">
      {sent ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h1 className="mb-2 text-xl font-bold">Check your email</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            If an account exists for <strong>{email}</strong>, we&apos;ve sent a link to reset your password. It expires in 60 minutes.
          </p>
          <Link href="/login" className="text-sm font-semibold text-primary hover:text-primary/80">
            Back to login
          </Link>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8">
          <h1 className="mb-2 text-xl font-bold">Forgot your password?</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Enter the email you signed up with and we&apos;ll send you a link to set a new password.
          </p>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="h-11 rounded-xl bg-background/50 border-border"
            />
          </div>

          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

          <Button type="submit" disabled={busy} className="mt-5 h-11 w-full rounded-xl">
            {busy ? "Sending…" : "Send reset link"}
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Remembered it?{" "}
            <Link href="/login" className="font-semibold text-primary hover:text-primary/80">Back to login</Link>
          </p>
        </form>
      )}
    </div>
  );
}
