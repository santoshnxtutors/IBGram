"use client";

import { useDeferredValue, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { GripVertical, Plus, Save, Sparkles, Trash2 } from "lucide-react";

import type { AdminPageRecord } from "../_types/admin";
import { AdminJsonViewer, AdminQualityChecklist } from "./AdminPrimitives";

export function AdminPageEditor({ page, checklist }: { page: AdminPageRecord; checklist: { errors: string[]; warnings: string[] } }) {
  const router = useRouter();
  const [draft, setDraft] = useState(page);
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const deferredDraft = useDeferredValue(draft);
  const wordCount = useMemo(
    () => [deferredDraft.h1, deferredDraft.heroSubtitle, deferredDraft.introSummary, ...deferredDraft.contentBlocks.map((block) => `${block.heading} ${block.body}`)].join(" ").trim().split(/\s+/).filter(Boolean).length,
    [deferredDraft],
  );

  async function save() {
    const response = await fetch(`/admin/api/pages/${encodeURIComponent(page.id)}/`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    const json = await response.json();
    if (response.ok && json.page) {
      setDraft(json.page);
      startTransition(() => router.refresh());
    }
    setMessage(json.message || (response.ok ? "Saved preview." : "Save failed."));
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <section className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="Page title" value={draft.title} onChange={(title) => setDraft({ ...draft, title })} />
          <Field label="Slug" value={draft.slug} onChange={(slug) => setDraft({ ...draft, slug })} />
          <Field label="URL path" value={draft.url} onChange={(url) => setDraft({ ...draft, url })} />
          <Field label="Page type" value={draft.pageType} onChange={(pageType) => setDraft({ ...draft, pageType: pageType as AdminPageRecord["pageType"] })} />
          <Field label="Curriculum" value={draft.curriculum} onChange={(curriculum) => setDraft({ ...draft, curriculum: curriculum as AdminPageRecord["curriculum"] })} />
          <Field label="City" value={draft.city || ""} onChange={(city) => setDraft({ ...draft, city })} />
          <Field label="Area / locality" value={draft.locality || ""} onChange={(locality) => setDraft({ ...draft, locality })} />
          <Field label="Primary keyword" value={draft.primaryKeyword} onChange={(primaryKeyword) => setDraft({ ...draft, primaryKeyword })} />
        </div>

        <Panel title="Metadata">
          <Field label="Meta title" value={draft.metaTitle} onChange={(metaTitle) => setDraft({ ...draft, metaTitle })} />
          <Textarea label="Meta description" value={draft.metaDescription} onChange={(metaDescription) => setDraft({ ...draft, metaDescription })} />
          <Field label="H1" value={draft.h1} onChange={(h1) => setDraft({ ...draft, h1 })} />
          <Field label="Canonical" value={draft.canonicalUrl} onChange={(canonicalUrl) => setDraft({ ...draft, canonicalUrl })} />
          <Field label="Robots tag" value={draft.robotsTag} onChange={(robotsTag) => setDraft({ ...draft, robotsTag })} />
          <Field label="OG title" value={draft.ogTitle} onChange={(ogTitle) => setDraft({ ...draft, ogTitle })} />
          <Field label="OG image" value={draft.ogImage} onChange={(ogImage) => setDraft({ ...draft, ogImage })} />
        </Panel>

        <Panel title="Hero and summary">
          <Field label="Hero title" value={draft.heroTitle} onChange={(heroTitle) => setDraft({ ...draft, heroTitle })} />
          <Textarea label="Hero subtitle" value={draft.heroSubtitle} onChange={(heroSubtitle) => setDraft({ ...draft, heroSubtitle })} />
          <Textarea label="Intro summary" value={draft.introSummary} onChange={(introSummary) => setDraft({ ...draft, introSummary })} />
        </Panel>

        <Panel title="Structured content blocks">
          <div className="space-y-3">
            {draft.contentBlocks.map((block, index) => (
              <div key={`${block.type}-${index}`} className="rounded-lg border border-white/10 bg-black/20 p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                    <GripVertical className="size-4" />
                    {block.type}
                  </div>
                  <button type="button" onClick={() => setDraft({ ...draft, contentBlocks: draft.contentBlocks.filter((_, itemIndex) => itemIndex !== index) })} className="grid size-8 place-items-center rounded-md text-rose-300 hover:bg-rose-300/10">
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <Field label="Heading" value={block.heading} onChange={(heading) => setDraft({ ...draft, contentBlocks: draft.contentBlocks.map((item, itemIndex) => itemIndex === index ? { ...item, heading } : item) })} />
                <Textarea label="Body" value={block.body} onChange={(body) => setDraft({ ...draft, contentBlocks: draft.contentBlocks.map((item, itemIndex) => itemIndex === index ? { ...item, body } : item) })} />
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setDraft({ ...draft, contentBlocks: [...draft.contentBlocks, { type: "cta", heading: "New block", body: "Add useful content here.", items: [] }] })} className="mt-3 inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white">
            <Plus className="size-4 text-emerald-300" />
            Add block
          </button>
        </Panel>
      </section>

      <aside className="space-y-4">
        <div className="sticky top-24 space-y-4">
          <Panel title="Editor controls">
            <div className="grid gap-2">
              <button type="button" onClick={save} disabled={isPending} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-300 px-3 text-sm font-black text-slate-950 hover:bg-amber-300 disabled:opacity-60">
                <Save className="size-4" />
                {isPending ? "Refreshing..." : "Manual save"}
              </button>
              <button type="button" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white">
                <Sparkles className="size-4 text-emerald-300" />
                Improve grammar
              </button>
              <button type="button" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white">
                <Sparkles className="size-4 text-amber-300" />
                Humanize content
              </button>
            </div>
            {message && <p className="mt-3 rounded-lg border border-white/10 bg-black/20 p-3 text-sm font-bold text-slate-300">{message}</p>}
          </Panel>
          <Panel title="SEO warning panel">
            <p className="mb-3 text-sm font-semibold text-slate-400">Current word count: {wordCount}</p>
            <AdminQualityChecklist errors={checklist.errors} warnings={checklist.warnings} />
          </Panel>
          <Panel title="Schema preview">
            <AdminJsonViewer value={draft.schema} />
          </Panel>
        </div>
      </aside>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
      <h2 className="mb-3 text-lg font-black text-white">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} className="h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}

function Textarea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <textarea value={value} onChange={(event) => onChange(event.target.value)} className="min-h-24 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-emerald-300/30" />
    </label>
  );
}
