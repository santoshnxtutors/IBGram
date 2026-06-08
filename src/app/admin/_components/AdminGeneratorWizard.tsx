"use client";

import { useState } from "react";
import { FileText, Loader2, RefreshCw, Save, Sparkles, Wand2 } from "lucide-react";

import type { GeneratedSeoResult } from "@/lib/page-generator/types";
import { AdminJsonViewer, AdminQualityScoreRing, AdminStatusBadge } from "./AdminPrimitives";

const csv = (value: string) => value.split(",").map((item) => item.trim()).filter(Boolean);

export function AdminGeneratorWizard() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<GeneratedSeoResult | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("Generating full page preview...");
    const form = new FormData(event.currentTarget);
    const payload = {
      pageType: form.get("pageType"),
      curriculum: form.get("curriculum"),
      cityName: form.get("cityName"),
      localityName: form.get("localityName"),
      serviceFocus: form.get("serviceFocus"),
      primaryKeyword: form.get("primaryKeyword"),
      nearbyAreas: csv(String(form.get("nearbyAreas") || "")),
      nearbySchools: csv(String(form.get("nearbySchools") || "")),
      proofNotes: form.get("proofNotes"),
      tutorAvailabilityNotes: form.get("tutorAvailabilityNotes"),
      ctaFocus: form.get("ctaFocus"),
      indexPreference: form.get("indexPreference"),
    };
    const response = await fetch("/admin/api/generator/", {
      method: "POST",
      cache: "no-store",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    setLoading(false);
    if (!response.ok) {
      setMessage(json.error || "Generation failed.");
      return;
    }
    setResult(json);
    setMessage("Generated structured SEO draft.");
  }

  async function saveDraft() {
    if (!result) return;
    setLoading(true);
    const response = await fetch("/admin/api/pages/", {
      method: "POST",
      cache: "no-store",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: result.page }),
    });
    const json = await response.json();
    setMessage(json.message || "Draft saved.");
    setLoading(false);
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
      <form onSubmit={submit} className="space-y-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field as="select" name="pageType" label="Page type" options={["city", "area", "sector", "society", "school", "subject", "programme"]} defaultValue="sector" />
          <Field as="select" name="curriculum" label="Curriculum" options={["IB", "IGCSE", "Both"]} defaultValue="IB" />
        </div>
        <Field name="cityName" label="City" defaultValue="Gurugram" />
        <Field name="localityName" label="Locality optional" defaultValue="Sector 56" />
        <Field name="serviceFocus" label="Service focus" defaultValue="IB tutors" />
        <Field name="primaryKeyword" label="Primary keyword" defaultValue="IB tutors in Sector 56 Gurugram" />
        <Field name="nearbyAreas" label="Nearby areas" defaultValue="Golf Course Road, DLF Phase 5, Sushant Lok" />
        <Field name="nearbySchools" label="Nearby schools" defaultValue="Scottish High International School, Lancers International School" />
        <Textarea name="proofNotes" label="Proof notes" defaultValue="Keep claims safe, local and parent-facing." />
        <Textarea name="tutorAvailabilityNotes" label="Tutor availability notes" defaultValue="Home tutoring depends on schedule, subject and travel feasibility." />
        <Field name="ctaFocus" label="CTA focus" defaultValue="Book a free academic consultation" />
        <Field as="select" name="indexPreference" label="Index preference" options={["auto", "index", "noindex"]} defaultValue="auto" />
        <div className="grid gap-2 sm:grid-cols-2">
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-300 px-3 text-sm font-black text-slate-950 hover:bg-amber-300" disabled={loading}>
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Wand2 className="size-4" />}
            Generate full page
          </button>
          <Action label="Metadata only" icon={<FileText className="size-4" />} />
          <Action label="FAQs only" icon={<Sparkles className="size-4" />} />
          <Action label="Internal links" icon={<RefreshCw className="size-4" />} />
          <Action label="Humanize content" icon={<Sparkles className="size-4" />} />
          <button type="button" onClick={saveDraft} disabled={!result || loading} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white hover:bg-white/[0.08] disabled:opacity-50">
            <Save className="size-4 text-emerald-300" />
            Save draft
          </button>
        </div>
        {message && <p className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm font-bold text-slate-300">{message}</p>}
      </form>

      <section className="space-y-4">
        {!result ? (
          <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.025] p-8 text-center text-slate-400">Generator output preview will show URL, metadata, content blocks, FAQs, schema, internal links, scores and warnings.</div>
        ) : (
          <>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">{result.page.canonicalUrl}</p>
                  <h2 className="mt-2 text-2xl font-black text-white">{result.page.h1}</h2>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-400">{result.page.metaDescription}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <AdminStatusBadge status={result.page.status === "published" ? "published" : result.page.status} />
                    <AdminStatusBadge indexFlag={result.page.indexFlag} />
                  </div>
                </div>
                <AdminQualityScoreRing score={result.page.quality.seoScore} />
              </div>
            </div>
            <PreviewPanel title="Content outline">{result.page.contentBlocks.map((block) => <p key={block.type}>{block.heading}</p>)}</PreviewPanel>
            <PreviewPanel title="Warnings">{result.page.quality.warnings.length ? result.page.quality.warnings.map((warning) => <p key={warning}>{warning}</p>) : <p>No warnings.</p>}</PreviewPanel>
            <PreviewPanel title="Schema"><AdminJsonViewer value={result.page.schema} /></PreviewPanel>
          </>
        )}
      </section>
    </div>
  );
}

function Field(props: {
  name: string;
  label: string;
  defaultValue?: string;
  as?: "input" | "select";
  options?: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{props.label}</span>
      {props.as === "select" ? (
        <select name={props.name} defaultValue={props.defaultValue} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30">
          {props.options?.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input name={props.name} defaultValue={props.defaultValue} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
      )}
    </label>
  );
}

function Textarea(props: { name: string; label: string; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{props.label}</span>
      <textarea name={props.name} defaultValue={props.defaultValue} className="min-h-20 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}

function Action({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <button type="submit" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white hover:bg-white/[0.08]">
      <span className="text-emerald-300">{icon}</span>
      {label}
    </button>
  );
}

function PreviewPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
      <h3 className="mb-3 text-lg font-black text-white">{title}</h3>
      <div className="space-y-2 text-sm font-medium leading-6 text-slate-400">{children}</div>
    </div>
  );
}
