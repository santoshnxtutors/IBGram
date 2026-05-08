"use client";

import type { AdminLocationRecord, AdminTutorRecord } from "../_types/admin";

export function AdminTutorEditor({ tutor }: { tutor?: AdminTutorRecord }) {
  return (
    <FormShell title={tutor ? `Edit ${tutor.name}` : "New tutor"}>
      <Field label="Name" defaultValue={tutor?.name} />
      <Field label="Headline" defaultValue={tutor?.headline} />
      <Textarea label="Bio" defaultValue={tutor?.bio} />
      <Field label="Curriculums" defaultValue={tutor?.curriculums ?? "IB"} />
      <Field label="IB programmes" defaultValue={tutor?.ibProgrammes.join(", ")} />
      <Field label="IB subjects" defaultValue={tutor?.ibSubjects.join(", ")} />
      <Field label="IGCSE subjects" defaultValue={tutor?.igcseSubjects.join(", ")} />
      <Field label="Teaching modes" defaultValue={tutor?.teachingModes.join(", ")} />
      <Field label="Primary city" defaultValue={tutor?.primaryCity} />
      <Field label="Areas" defaultValue={tutor?.availableAreas.join(", ")} />
      <Field label="Sectors" defaultValue={tutor?.availableSectors.join(", ")} />
      <Field label="Societies" defaultValue={tutor?.availableSocieties.join(", ")} />
      <Textarea label="Travel notes" defaultValue={tutor?.travelNotes} />
    </FormShell>
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

function Field({ label, defaultValue, type = "text" }: { label: string; defaultValue?: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input type={type} defaultValue={defaultValue} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}

function Textarea({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <label className="block md:col-span-2">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <textarea defaultValue={defaultValue} className="min-h-24 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}
