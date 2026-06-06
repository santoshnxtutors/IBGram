"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit3, ExternalLink, Plus } from "lucide-react";
import {
  CrudToast,
  useCrudForm,
  FormSaveButton,
  CancelButton,
  DeleteIconButton,
  FieldLabel,
  TextInput,
  TextArea,
  SelectInput,
} from "../_components/CmsCrudShell";

type ReachFaq = { question: string; answer: string };

type Item = {
  id: string;
  tutorId: string;
  slug: string;
  subject: string;
  board: string;
  mode: string;
  city: string | null;
  title: string;
  h1: string;
  intro: string | null;
  body: string;
  faqs: ReachFaq[];
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  status: string;
  indexFlag: string;
  wordCount: number;
  publishedAt: string | null;
  updatedAt: string;
  tutorName: string;
};

type TutorOption = { id: string; displayName: string; slug: string };

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
];

const INDEX_OPTIONS = [
  { value: "auto", label: "Auto (index if 400+ words)" },
  { value: "index", label: "Always index" },
  { value: "noindex", label: "Never index" },
];

const MODE_OPTIONS = [
  { value: "home", label: "Home" },
  { value: "online", label: "Online" },
  { value: "hybrid", label: "Hybrid" },
];

// FAQs are edited as plain text: one per line, "Question :: Answer".
function faqsToText(faqs: ReachFaq[]): string {
  return faqs.map((f) => `${f.question} :: ${f.answer}`).join("\n");
}
function textToFaqs(text: unknown): ReachFaq[] {
  if (typeof text !== "string") return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf("::");
      if (idx === -1) return null;
      const question = line.slice(0, idx).trim();
      const answer = line.slice(idx + 2).trim();
      if (!question || !answer) return null;
      return { question, answer };
    })
    .filter((f): f is ReachFaq => f !== null);
}

function csvToArray(value: unknown): string[] {
  if (typeof value !== "string") return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function TutorReachClient({ items, tutors }: { items: Item[]; tutors: TutorOption[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/tutor-reach", router);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);

  const tutorOptions = tutors.map((t) => ({ value: t.id, label: t.displayName }));

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} tutor pages</p>
          <button
            onClick={() => setCreating(true)}
            disabled={tutors.length === 0}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30 disabled:opacity-40"
          >
            <Plus className="size-4" aria-hidden /> New tutor page
          </button>
        </div>
      )}

      {tutors.length === 0 && !editing && (
        <p className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-4 text-sm font-medium text-amber-200">
          Add at least one tutor first (Tutors section) before creating tutor pages.
        </p>
      )}

      {(creating || editing) && (
        <form
          onSubmit={(e) =>
            submit(e, {
              ...(editing ? { method: "PATCH" as const, id: editing.id } : { method: "POST" as const }),
              transform: (data: Record<string, unknown>) => ({
                ...data,
                faqs: textToFaqs(data.faqsText),
                faqsText: undefined,
                metaKeywords: csvToArray(data.metaKeywords),
              }),
            }).then((res) => {
              if (res) {
                setEditing(null);
                setCreating(false);
              }
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            {editing ? `Edit "${editing.title}"` : "New tutor page"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <FieldLabel>Tutor *</FieldLabel>
              <SelectInput name="tutorId" defaultValue={editing?.tutorId ?? tutors[0]?.id} options={tutorOptions} />
            </label>
            <label>
              <FieldLabel>Board / programme * (e.g. IB DP, IGCSE, CBSE)</FieldLabel>
              <TextInput name="board" defaultValue={editing?.board} placeholder="IB DP" required />
            </label>
            <label>
              <FieldLabel>Subject * (e.g. Mathematics)</FieldLabel>
              <TextInput name="subject" defaultValue={editing?.subject} placeholder="Mathematics" required />
            </label>
            <label>
              <FieldLabel>Mode</FieldLabel>
              <SelectInput name="mode" defaultValue={editing?.mode ?? "home"} options={MODE_OPTIONS} />
            </label>
            <label>
              <FieldLabel>City (optional)</FieldLabel>
              <TextInput name="city" defaultValue={editing?.city ?? ""} placeholder="Gurugram" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Page title * (browser/SEO title)</FieldLabel>
              <TextInput
                name="title"
                defaultValue={editing?.title}
                placeholder="IB DP Maths Home Tutor in Gurugram — Ajay Vatsyayan"
                required
              />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Slug (leave blank to auto-generate from title)</FieldLabel>
              <TextInput
                name="slug"
                defaultValue={editing?.slug ?? ""}
                placeholder="ib-dp-maths-home-tutor-ajay-vatsyayan"
              />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>H1 heading *</FieldLabel>
              <TextInput name="h1" defaultValue={editing?.h1} placeholder="IB DP Mathematics Home Tutor — Ajay Vatsyayan" required />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Intro (short hero paragraph)</FieldLabel>
              <TextArea name="intro" defaultValue={editing?.intro ?? ""} rows={2} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Body * (Markdown — make this UNIQUE per page; 400+ words recommended)</FieldLabel>
              <TextArea
                name="body"
                defaultValue={editing?.body}
                rows={14}
                placeholder="## Why this tutor for IB DP Maths&#10;&#10;Write unique, syllabus-specific content here..."
              />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>FAQs (one per line: Question :: Answer)</FieldLabel>
              <TextArea
                name="faqsText"
                defaultValue={editing ? faqsToText(editing.faqs) : ""}
                rows={5}
                placeholder="Is HL Maths AA suitable for engineering? :: Yes, HL AA is the standard choice for engineering pathways..."
              />
            </label>
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing?.status ?? "draft"} options={STATUS_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Index flag</FieldLabel>
              <SelectInput name="indexFlag" defaultValue={editing?.indexFlag ?? "auto"} options={INDEX_OPTIONS} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Meta description (SEO, ~160 chars)</FieldLabel>
              <TextArea name="metaDescription" defaultValue={editing?.metaDescription ?? ""} rows={2} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Meta keywords (comma-separated)</FieldLabel>
              <TextInput
                name="metaKeywords"
                defaultValue={editing?.metaKeywords.join(", ") ?? ""}
                placeholder="IB DP maths tutor, IB maths home tutor gurugram"
              />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <FormSaveButton busy={busy} label={editing ? "Save changes" : "Create"} />
            <CancelButton
              onClick={() => {
                setEditing(null);
                setCreating(false);
              }}
            />
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No tutor pages yet. Create one above.
        </div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-start gap-3 p-4">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-black text-slate-100">{item.title}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${
                      item.status === "published" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                    {item.wordCount} words
                  </span>
                  {item.status === "published" && item.indexFlag !== "index" && item.wordCount < 400 && (
                    <span className="rounded bg-rose-400/15 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-rose-300">
                      thin — not in sitemap (set &ldquo;Always index&rdquo; or add words)
                    </span>
                  )}
                  {item.status === "published" && item.indexFlag === "index" && (
                    <span className="rounded bg-emerald-400/15 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-300">
                      in sitemap
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs font-bold text-slate-500">
                  {item.tutorName} · {item.board} {item.subject} · /tutor/{item.slug}/
                </p>
                <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300">
                  {item.intro ?? item.body.slice(0, 200)}
                </p>
              </div>
              <div className="col-span-12 flex justify-end gap-2 md:col-span-4">
                {item.status === "published" && (
                  <a
                    href={`/tutor/${item.slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                  >
                    <ExternalLink className="size-3.5" aria-hidden /> View
                  </a>
                )}
                <button
                  onClick={() => {
                    setEditing(item);
                    setCreating(false);
                  }}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                >
                  <Edit3 className="size-3.5" aria-hidden /> Edit
                </button>
                <DeleteIconButton onClick={() => remove(item.id, item.title)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
