"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Loader2, Upload } from "lucide-react";

type JobSummary = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
};

type Message = { tone: "ok" | "err"; text: string } | null;

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{children}</span>;
}

function inputClass() {
  return "mt-1 h-11 w-full rounded-lg border border-border bg-card px-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary";
}

export function JobApplicationForm({ job }: { job: JobSummary }) {
  const [message, setMessage] = useState<Message>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setMessage(null);

    try {
      const formData = new FormData(form);
      const res = await fetch(`/api/jobs/${job.slug}/applications/`, {
        method: "POST",
        body: formData,
      });
      const body = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) throw new Error(body?.error ?? "Application could not be submitted");
      form.reset();
      setMessage({ tone: "ok", text: "Application submitted. We will review it and get back to you." });
    } catch (err) {
      setMessage({ tone: "err", text: err instanceof Error ? err.message : "Application failed" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6 rounded-lg border border-border/60 bg-card p-5 md:p-7">
      {message && (
        <div
          className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-bold ${
            message.tone === "ok"
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-destructive/30 bg-destructive/10 text-destructive"
          }`}
        >
          {message.tone === "ok" ? <CheckCircle2 className="size-4" /> : <AlertTriangle className="size-4" />}
          {message.text}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <FieldLabel>First name *</FieldLabel>
          <input name="firstName" required className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Last name *</FieldLabel>
          <input name="lastName" required className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Email *</FieldLabel>
          <input name="email" type="email" required className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Phone</FieldLabel>
          <input name="phone" type="tel" className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Current location</FieldLabel>
          <input name="currentLocation" className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Current role</FieldLabel>
          <input name="currentRole" className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Experience years</FieldLabel>
          <input name="experienceYears" type="number" className={inputClass()} />
        </label>
        <label>
          <FieldLabel>Expected fees as a tutor in range</FieldLabel>
          <input name="expectedCompensation" className={inputClass()} />
        </label>
        <label>
          <FieldLabel>LinkedIn URL</FieldLabel>
          <input name="linkedInUrl" className={inputClass()} />
        </label>
        <label className="sm:col-span-2">
          <FieldLabel>Portfolio / work sample URL (optional)</FieldLabel>
          <input name="portfolioUrl" className={inputClass()} />
        </label>
      </div>

      <label className="block">
        <FieldLabel>Your photo</FieldLabel>
        <div className="mt-1 rounded-lg border border-dashed border-border bg-background p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Upload className="size-5 text-primary" />
              <div>
                <p className="text-sm font-black text-foreground">Upload your picture</p>
                <p className="text-xs font-semibold text-muted-foreground">Optional.</p>
              </div>
            </div>
            <input
              name="photo"
              type="file"
              className="text-sm font-semibold text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-black file:text-primary-foreground"
            />
          </div>
        </div>
      </label>

      <label className="block">
        <FieldLabel>Resume *</FieldLabel>
        <div className="mt-1 rounded-lg border border-dashed border-border bg-background p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Upload className="size-5 text-primary" />
              <div>
                <p className="text-sm font-black text-foreground">Upload resume</p>
                <p className="text-xs font-semibold text-muted-foreground">Any file type is accepted.</p>
              </div>
            </div>
            <input
              name="resume"
              type="file"
              required
              className="text-sm font-semibold text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-black file:text-primary-foreground"
            />
          </div>
        </div>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <FieldLabel>Availability</FieldLabel>
          <textarea
            name="availability"
            rows={4}
            placeholder="Preferred start date, time zone, working hours."
            className="mt-1 w-full rounded-lg border border-border bg-card p-3 text-sm font-medium leading-6 text-foreground outline-none transition focus:border-primary"
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-muted-foreground">
        <input name="consentAccepted" value="true" type="checkbox" required className="mt-1 size-4 rounded border-border" />
        I confirm that the information shared is accurate and agree that IB Gram may contact me about this role.
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
        >
          {busy ? <Loader2 className="size-4 animate-spin" /> : null}
          {busy ? "Submitting" : "Submit Application"}
        </button>
        <Link href={`/jobs/${job.slug}`} className="text-sm font-black text-muted-foreground transition hover:text-primary">
          Back to role
        </Link>
      </div>
    </form>
  );
}




