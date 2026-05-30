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
  sectionKey: string;
  displayName: string;
  sectionType: string;
  heading: string | null;
  subheading: string | null;
  body: string | null;
  sortOrder: number;
  isVisible: boolean;
  status: string;
};

const STATUS_OPTIONS = [
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "archived", label: "Archived" },
];

const SECTION_TYPE_OPTIONS = [
  { value: "hero", label: "Hero" },
  { value: "stats", label: "Trust / stats" },
  { value: "programmes", label: "Programme cards" },
  { value: "subjects", label: "Subjects" },
  { value: "city_cta", label: "City CTA" },
  { value: "process", label: "Process" },
  { value: "tutors", label: "Tutors" },
  { value: "testimonials", label: "Testimonials" },
  { value: "blog", label: "Blog / resources" },
  { value: "faqs", label: "FAQs" },
  { value: "cta", label: "CTA" },
];

export function HomepageClient({ items }: { items: Item[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/homepage", router);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} sections · drag-order coming in next phase, edit sortOrder below to reorder</p>
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New section
          </button>
        </div>
      )}

      {(creating || editing) && (
        <form
          onSubmit={(e) =>
            submit(e, editing ? { method: "PATCH", id: editing.id } : { method: "POST" }).then((res) => {
              if (res) {
                setEditing(null);
                setCreating(false);
              }
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            {editing ? `Edit "${editing.displayName}"` : "New homepage section"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label>
              <FieldLabel>Section key *</FieldLabel>
              <TextInput name="sectionKey" defaultValue={editing?.sectionKey} placeholder="hero, trust-indicators, …" required />
            </label>
            <label>
              <FieldLabel>Display name *</FieldLabel>
              <TextInput name="displayName" defaultValue={editing?.displayName} required />
            </label>
            <label>
              <FieldLabel>Section type *</FieldLabel>
              <SelectInput name="sectionType" defaultValue={editing?.sectionType ?? "hero"} options={SECTION_TYPE_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Sort order</FieldLabel>
              <TextInput name="sortOrder" defaultValue={editing?.sortOrder ?? 0} type="number" />
            </label>
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing?.status ?? "published"} options={STATUS_OPTIONS} />
            </label>
            <div className="flex items-end">
              <CheckboxField name="isVisible" defaultChecked={editing?.isVisible ?? true} label="Visible" />
            </div>
            <label className="sm:col-span-2">
              <FieldLabel>Heading</FieldLabel>
              <TextInput name="heading" defaultValue={editing?.heading ?? ""} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Subheading</FieldLabel>
              <TextInput name="subheading" defaultValue={editing?.subheading ?? ""} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Body</FieldLabel>
              <TextArea name="body" defaultValue={editing?.body ?? ""} rows={5} />
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
          No homepage sections — run <code>npm run db:seed-cms</code> or create one above.
        </div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-start gap-3 p-4">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black text-slate-500">#{item.sortOrder}</span>
                  <span className="text-sm font-black text-slate-100">{item.displayName}</span>
                  <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">{item.sectionType}</span>
                  <span className="rounded bg-sky-400/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-300">{item.sectionKey}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${
                      item.status === "published" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  {!item.isVisible && <span className="rounded bg-rose-400/15 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-rose-200">Hidden</span>}
                </div>
                {item.heading && <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300">{item.heading}</p>}
                {item.subheading && <p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-slate-400">{item.subheading}</p>}
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
                <DeleteIconButton onClick={() => remove(item.id, item.displayName)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
