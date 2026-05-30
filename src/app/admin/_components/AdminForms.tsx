"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Check, AlertTriangle, Loader2 } from "lucide-react";
import type { AdminLocationRecord, AdminTutorRecord } from "../_types/admin";

function csvToArray(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string") return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function AdminTutorEditor({ tutor }: { tutor?: AdminTutorRecord }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<{ tone: "ok" | "err"; message: string } | null>(null);

  const showToast = (message: string, tone: "ok" | "err" = "ok") => {
    setToast({ tone, message });
    setTimeout(() => setToast(null), 4000);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tutor) {
      showToast("Cannot save — no tutor loaded.", "err");
      return;
    }
    setBusy(true);
    const fd = new FormData(event.currentTarget);
    const payload = {
      displayName: (fd.get("displayName") as string) || undefined,
      headline: (fd.get("headline") as string) || null,
      bio: (fd.get("bio") as string) || null,
      curriculums: csvToArray(fd.get("curriculums")),
      ibProgrammes: csvToArray(fd.get("ibProgrammes")),
      ibSubjects: csvToArray(fd.get("ibSubjects")),
      igcseSubjects: csvToArray(fd.get("igcseSubjects")),
      teachingModes: csvToArray(fd.get("teachingModes")),
      primaryCitySlug: (fd.get("primaryCitySlug") as string) || null,
      areas: csvToArray(fd.get("areas")),
      sectors: csvToArray(fd.get("sectors")),
      societies: csvToArray(fd.get("societies")),
      travelNotes: (fd.get("travelNotes") as string) || null,
    };
    // Use the slug, not the legacy numeric id — the Prisma Tutor row uses the
    // slug (e.g. "dr-sarah-m-1"), while AdminTutorRecord.id is the static
    // numeric id ("1"). The API route accepts either.
    const lookupKey = tutor.slug || tutor.id;
    // Trailing slash to match the project's trailingSlash:true config so we
    // don't trigger a 308 redirect that some browsers drop the PATCH body on.
    try {
      const res = await fetch(`/admin/api/tutors/${encodeURIComponent(lookupKey)}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let bodyText = "";
      let bodyJson: { error?: string } | null = null;
      try {
        bodyText = await res.text();
        bodyJson = bodyText ? (JSON.parse(bodyText) as { error?: string }) : null;
      } catch {
        bodyJson = null;
      }
      if (!res.ok) {
        const msg = bodyJson?.error ?? `Save failed (${res.status}) — ${bodyText.slice(0, 200)}`;
        throw new Error(msg);
      }
      showToast("Saved to database.");
      router.refresh();
    } catch (err) {
      const msg =
        err instanceof TypeError && err.message.includes("fetch")
          ? "Network error reaching /admin/api/tutors. Restart `npm run dev` and retry."
          : err instanceof Error
            ? err.message
            : "Save failed";
      showToast(msg, "err");
      console.error("[AdminTutorEditor] save failed:", err);
    } finally {
      setBusy(false);
    }
  };

  const onSubmitForReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tutor) return;
    setBusy(true);
    const lookupKey = tutor.slug || tutor.id;
    try {
      const res = await fetch(`/admin/api/tutors/${encodeURIComponent(lookupKey)}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "draft" }),
      });
      if (!res.ok) throw new Error(`Status change failed (${res.status})`);
      showToast("Marked as draft for review.");
      router.refresh();
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Failed", "err");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 md:grid-cols-2"
      onSubmit={onSubmit}
    >
      <h2 className="md:col-span-2 text-xl font-black text-white">
        {tutor ? `Edit ${tutor.name}` : "New tutor"}
      </h2>

      {toast && (
        <div
          className={`md:col-span-2 flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-bold ${
            toast.tone === "ok"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
              : "border-rose-400/30 bg-rose-400/10 text-rose-200"
          }`}
        >
          {toast.tone === "ok" ? <Check className="size-4" /> : <AlertTriangle className="size-4" />}
          {toast.message}
        </div>
      )}

      <Field name="displayName" label="Name" defaultValue={tutor?.name} />
      <Field name="headline" label="Headline" defaultValue={tutor?.headline} />
      <Textarea name="bio" label="Bio" defaultValue={tutor?.bio} />
      <Field name="curriculums" label="Curriculums (comma-separated)" defaultValue={tutor?.curriculums ?? "IB"} />
      <Field name="ibProgrammes" label="IB programmes" defaultValue={tutor?.ibProgrammes.join(", ")} />
      <Field name="ibSubjects" label="IB subjects" defaultValue={tutor?.ibSubjects.join(", ")} />
      <Field name="igcseSubjects" label="IGCSE subjects" defaultValue={tutor?.igcseSubjects.join(", ")} />
      <Field name="teachingModes" label="Teaching modes (home, online, hybrid)" defaultValue={tutor?.teachingModes.join(", ")} />
      <Field name="primaryCitySlug" label="Primary city" defaultValue={tutor?.primaryCity} />
      <Field name="areas" label="Areas" defaultValue={tutor?.availableAreas.join(", ")} />
      <Field name="sectors" label="Sectors" defaultValue={tutor?.availableSectors.join(", ")} />
      <Field name="societies" label="Societies" defaultValue={tutor?.availableSocieties.join(", ")} />
      <Textarea name="travelNotes" label="Travel notes" defaultValue={tutor?.travelNotes} />

      <div className="md:col-span-2 flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-300 px-4 text-sm font-black text-slate-950 hover:bg-emerald-200 disabled:opacity-50"
        >
          {busy ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
          {busy ? "Saving…" : "Save to database"}
        </button>
        <button
          type="button"
          onClick={(event) => {
            const form = (event.currentTarget as HTMLButtonElement).closest("form") as HTMLFormElement | null;
            if (form) onSubmitForReview({ preventDefault() {}, currentTarget: form } as unknown as FormEvent<HTMLFormElement>);
          }}
          disabled={busy}
          className="h-10 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white hover:bg-white/[0.08] disabled:opacity-50"
        >
          Mark as draft
        </button>
      </div>
    </form>
  );
}

export function AdminLocationEditor({ location }: { location?: AdminLocationRecord }) {
  return (
    <FormShell title={location ? `Edit ${location.name}` : "New location"}>
      <Field label="Name" defaultValue={location?.name} />
      <Field label="Slug" defaultValue={location?.slug} />
      <Field label="Type" defaultValue={location?.type ?? "city"} />
      <Field label="Parent city" defaultValue={location?.parentCity} />
      <Field label="Parent area" defaultValue={location?.parentArea} />
      <Field label="Parent sector" defaultValue={location?.parentSector} />
      <Textarea label="Local description" defaultValue={location?.localDescription} />
      <Field label="Premium score" defaultValue={String(location?.premiumScore ?? 70)} />
      <Field label="Demand score" defaultValue={String(location?.demandScore ?? 70)} />
      <Textarea label="SEO notes" defaultValue={location?.seoNotes} />
    </FormShell>
  );
}

export function AdminAssetManager() {
  return (
    <FormShell title="Asset manager">
      <Field label="Upload image" type="file" />
      <Field label="Alt text" />
      <Field label="Asset category" defaultValue="SEO pages" />
      <p className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-3 text-sm font-semibold text-amber-100">Local upload UI is ready. Connect S3, Cloudinary or another storage adapter before production uploads.</p>
    </FormShell>
  );
}

export function AdminSettingsForm() {
  return (
    <FormShell title="Site settings">
      <Field label="Site name" defaultValue="IB Gram" />
      <Field label="Production domain" defaultValue="https://ibgram.com" />
      <Field label="Default OG image" defaultValue="/images/ib-gram-city-og.svg" />
      <Field label="Organization name" defaultValue="IB Gram" />
      <Field label="Contact email" defaultValue="ibgram24@gmail.com" />
      <Field label="Default robots behavior" defaultValue="index" />
      <Field label="AI generation default tone" defaultValue="premium, helpful, parent-facing" />
      <p className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm font-semibold text-emerald-100">Auth secrets are read from server-only environment variables and are never sent to this form.</p>
    </FormShell>
  );
}

function FormShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <form className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <h2 className="md:col-span-2 text-xl font-black text-white">{title}</h2>
      {children}
      <div className="md:col-span-2 flex flex-wrap gap-2">
        <button className="h-10 rounded-lg bg-emerald-300 px-3 text-sm font-black text-slate-950">Save preview</button>
        <button className="h-10 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white">Send for review</button>
      </div>
    </form>
  );
}

function Field({ label, defaultValue, type = "text", name }: { label: string; defaultValue?: string; type?: string; name?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input name={name} type={type} defaultValue={defaultValue} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}

function Textarea({ label, defaultValue, name }: { label: string; defaultValue?: string; name?: string }) {
  return (
    <label className="block md:col-span-2">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <textarea name={name} defaultValue={defaultValue} className="min-h-24 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}
