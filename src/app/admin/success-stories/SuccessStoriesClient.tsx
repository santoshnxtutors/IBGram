"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit3, Plus } from "lucide-react";
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
  CheckboxField,
} from "../_components/CmsCrudShell";

type Item = {
  id: string;
  studentName: string;
  subject: string | null;
  focus: string | null;
  outcome: string | null;
  nextStep: string | null;
  longStory: string | null;
  accentClass: string | null;
  imageAssetId: string | null;
  status: string;
  featured: boolean;
  sortOrder: number;
  updatedAt: string;
};

const STATUS_OPTIONS = [
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "archived", label: "Archived" },
];

const ACCENT_OPTIONS = [
  { value: "", label: "Default (primary)" },
  { value: "text-primary border-primary/20 bg-primary/10", label: "Primary green" },
  { value: "text-secondary border-secondary/20 bg-secondary/10", label: "Secondary orange" },
];

export function SuccessStoriesClient({ items }: { items: Item[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/success-stories", router);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} success stories</p>
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New success story
          </button>
        </div>
      )}

      {(creating || editing) && (
        <form
          onSubmit={(e) => submit(e, editing ? { method: "PATCH", id: editing.id } : { method: "POST" })
            .then((res) => {
              if (res) {
                setEditing(null);
                setCreating(false);
              }
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            {editing ? `Edit "${editing.studentName}"` : "New success story"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <FieldLabel>Title / Student name *</FieldLabel>
              <TextInput name="studentName" defaultValue={editing?.studentName} placeholder="IB Math AA HL success story" required />
            </label>
            <label>
              <FieldLabel>Subject</FieldLabel>
              <TextInput name="subject" defaultValue={editing?.subject ?? ""} placeholder="IB DP Mathematics" />
            </label>
            <label>
              <FieldLabel>Focus / Badge</FieldLabel>
              <TextInput name="focus" defaultValue={editing?.focus ?? ""} placeholder="Student story" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Outcome (main paragraph)</FieldLabel>
              <TextArea name="outcome" defaultValue={editing?.outcome ?? ""} rows={4} placeholder="A student moved from scattered revision to a weekly plan…" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Next step / call-out</FieldLabel>
              <TextInput name="nextStep" defaultValue={editing?.nextStep ?? ""} placeholder="Revision structure, exam practice and progress check-ins" />
            </label>
            <label>
              <FieldLabel>Accent style</FieldLabel>
              <SelectInput name="accentClass" defaultValue={editing?.accentClass ?? ""} options={ACCENT_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing?.status ?? "published"} options={STATUS_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Sort order</FieldLabel>
              <TextInput name="sortOrder" defaultValue={editing?.sortOrder ?? 0} type="number" />
            </label>
            <label>
              <FieldLabel>Image asset id (optional)</FieldLabel>
              <TextInput name="imageAssetId" defaultValue={editing?.imageAssetId ?? ""} placeholder="from Media Library" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Long story (optional, for future detail page)</FieldLabel>
              <TextArea name="longStory" defaultValue={editing?.longStory ?? ""} rows={4} />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <CheckboxField name="featured" defaultChecked={editing?.featured} label="Featured" />
            </div>
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
          No success stories yet. Create one above.
        </div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-start gap-3 p-4">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-black text-slate-100">{item.studentName}</span>
                  {item.subject && <span className="text-xs font-semibold text-slate-500">· {item.subject}</span>}
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${
                      item.status === "published" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  {item.featured && <span className="rounded bg-sky-400/15 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-sky-300">Featured</span>}
                </div>
                {item.outcome && <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300">{item.outcome}</p>}
              </div>
              <div className="col-span-12 flex justify-end gap-2 md:col-span-4">
                <button
                  onClick={() => {
                    setEditing(item);
                    setCreating(false);
                  }}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                >
                  <Edit3 className="size-3.5" aria-hidden /> Edit
                </button>
                <DeleteIconButton onClick={() => remove(item.id, item.studentName)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
