"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Full tutor application form, rendered on its own page at /join-as-tutor.
 * Posts multipart/form-data to /api/tutor-applications (resume + photo uploads),
 * which stores the row in the JobApplication table so it shows in the admin.
 */
const CURRICULA = [
  "IB DP",
  "IB MYP",
  "IB PYP",
  "IGCSE (Cambridge)",
  "IGCSE (Pearson Edexcel)",
  "A Level",
  "CBSE / ICSE",
];

const TEACHING_MODES = ["Online", "Home visits", "Hybrid"];

// Most applicants are in India; the rest is an alphabetical short list of the
// countries IB/IGCSE tutors actually apply from, with a free-text fallback.
const COUNTRIES = [
  "India", "United Arab Emirates", "Singapore", "United Kingdom", "United States",
  "Canada", "Australia", "Qatar", "Saudi Arabia", "Oman", "Kuwait", "Bahrain",
  "Malaysia", "Hong Kong", "Switzerland", "Germany", "Netherlands", "Other",
];

type Status = "idle" | "sending" | "done" | "error";

export function TutorApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.getAll("curricula").length === 0) {
      setStatus("error");
      setError("Select at least one curriculum you teach.");
      return;
    }
    if (data.getAll("teachingModes").length === 0) {
      setStatus("error");
      setError("Select at least one teaching mode.");
      return;
    }

    data.set("consentAccepted", data.get("consentAccepted") ? "true" : "false");

    setStatus("sending");
    setError(null);
    try {
      const response = await fetch("/api/tutor-applications", { method: "POST", body: data });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not send your application.");
      }
      setStatus("done");
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Could not send your application.");
    }
  }

  return (
    <div className="w-full">
      {status === "done" ? (
        <div className="space-y-5 rounded-2xl border border-primary/30 bg-primary/10 p-8">
          <p className="text-xl font-extrabold text-foreground">Application received.</p>
          <p className="text-sm font-medium leading-relaxed text-muted-foreground">
            Our academic team reviews every profile and will contact you on the number you gave. If you did
            not attach a CV, we may ask for one before the first call.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-border/60 bg-card/20 p-6 md:p-8">

            <Section title="About you">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="firstName" label="First name" required autoComplete="given-name" />
                <Field name="lastName" label="Last name" required autoComplete="family-name" />
                <Field name="phone" label="Mobile number" required type="tel" inputMode="tel" autoComplete="tel" />
                <Field name="email" label="Email" required type="email" autoComplete="email" />
                <Field name="experienceYears" label="Years of teaching experience" type="number" min={0} max={60} placeholder="5" />
              </div>
            </Section>

            <Section title="Location">
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField name="country" label="Country" required options={COUNTRIES} defaultValue="India" autoComplete="country-name" />
                <Field name="state" label="State / province" required placeholder="Haryana" autoComplete="address-level1" />
                <Field name="currentLocation" label="City" required placeholder="Gurugram" autoComplete="address-level2" />
                <Field name="postalCode" label="PIN / postal code" placeholder="122002" autoComplete="postal-code" />
              </div>
              <TextArea
                name="addressLine"
                label="Full address"
                rows={2}
                placeholder="House / flat, street, sector or locality"
                autoComplete="street-address"
              />
            </Section>

            <Section title="Academic background">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="highestQualification" label="Highest qualification" required placeholder="M.Sc. Physics" />
                <Field name="university" label="University / institution" placeholder="Delhi University" />
                <Field name="feesRange" label="Fees range (per hour)" placeholder="Rs 1,500 - 2,500" />
                <Field name="linkedInUrl" label="LinkedIn or profile URL" type="url" placeholder="https://" />
              </div>
            </Section>

            <Section title="Subject expertise">
              <CheckGroup
                name="curricula"
                label="Curricula you teach"
                required
                options={CURRICULA}
              />
              <TextArea
                name="subjects"
                label="Subjects and levels"
                required
                rows={2}
                placeholder="IB DP Physics HL/SL, IGCSE Maths 0580 Extended, Edexcel 4PH1"
              />
              <CheckGroup name="teachingModes" label="Teaching modes" required options={TEACHING_MODES} />
              <Field
                name="availability"
                label="Availability"
                placeholder="Weekday evenings after 6pm, weekend mornings"
              />
            </Section>

            <Section title="Documents">
              <div className="grid gap-4 sm:grid-cols-2">
                <FileField name="resume" label="Resume / CV" accept=".pdf,.doc,.docx" hint="PDF or Word, up to 5MB" />
                <FileField name="photo" label="Photo (optional)" accept="image/*" hint="JPG or PNG, up to 5MB" />
              </div>
              <TextArea
                name="about"
                label="Anything else we should know"
                rows={3}
                placeholder="Examiner experience, results you are proud of, students you work best with."
              />
            </Section>

            {/* Honeypot: hidden from people, filled by bots. */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <label className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/30 p-4">
              <input type="checkbox" name="consentAccepted" required className="mt-1 size-4 shrink-0 accent-primary" />
              <span className="text-sm font-medium leading-relaxed text-muted-foreground">
                I confirm the details above are accurate and agree to IB Gram contacting me about tutoring
                opportunities and storing this application.
              </span>
            </label>

            {error && (
              <p className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm font-semibold text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit application"}
              {status !== "sending" && <ArrowRight className="size-4" />}
            </button>
                  </form>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xs font-black uppercase tracking-[0.16em] text-primary">{title}</legend>
      {children}
    </fieldset>
  );
}

const CONTROL =
  "w-full rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

function Label({ label, required }: { label: string; required?: boolean }) {
  return (
    <span className="mb-1.5 block text-sm font-bold text-foreground">
      {label}
      {required && <span className="ml-0.5 text-destructive">*</span>}
    </span>
  );
}

function Field({
  name,
  label,
  required,
  type = "text",
  ...rest
}: { name: string; label: string; required?: boolean; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <Label label={label} required={required} />
      <input name={name} type={type} required={required} className={CONTROL} {...rest} />
    </label>
  );
}

function SelectField({
  name,
  label,
  required,
  options,
  ...rest
}: { name: string; label: string; required?: boolean; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <Label label={label} required={required} />
      <select name={name} required={required} className={CONTROL} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  name,
  label,
  required,
  ...rest
}: { name: string; label: string; required?: boolean } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <Label label={label} required={required} />
      <textarea name={name} required={required} className={`${CONTROL} resize-y`} {...rest} />
    </label>
  );
}

function FileField({
  name,
  label,
  hint,
  accept,
}: {
  name: string;
  label: string;
  hint?: string;
  accept?: string;
}) {
  return (
    <label className="block">
      <Label label={label} />
      <input
        name={name}
        type="file"
        accept={accept}
        className="w-full cursor-pointer rounded-xl border border-dashed border-border/70 bg-card/30 px-4 py-2.5 text-sm font-medium text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-1.5 file:text-xs file:font-bold file:text-primary-foreground hover:border-primary/50"
      />
      {hint && <span className="mt-1 block text-xs font-medium text-muted-foreground/70">{hint}</span>}
    </label>
  );
}

function CheckGroup({
  name,
  label,
  options,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <Label label={label} required={required} />
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/15"
          >
            <input type="checkbox" name={name} value={option} className="size-3.5 accent-primary" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
