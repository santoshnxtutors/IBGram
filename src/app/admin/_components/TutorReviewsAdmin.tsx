"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit3, Plus, Star } from "lucide-react";
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
} from "./CmsCrudShell";

export type TutorReviewItem = {
  id: string;
  authorName: string;
  authorRole: string | null;
  location: string | null;
  rating: number;
  quote: string;
  curriculum: string | null;
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

const CURRICULUM_OPTIONS = [
  { value: "", label: "—" },
  { value: "IB", label: "IB" },
  { value: "IGCSE", label: "IGCSE" },
  { value: "BOTH", label: "Both" },
];

export function TutorReviewsAdmin({ tutorLookupKey, items }: { tutorLookupKey: string; items: TutorReviewItem[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<TutorReviewItem>(`/admin/api/tutors/${encodeURIComponent(tutorLookupKey)}/reviews`, router);
  const [editing, setEditing] = useState<TutorReviewItem | null>(null);
  const [creating, setCreating] = useState(false);

  return (
    <section className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-black text-white">
            <Star className="size-5 text-amber-300" />
            Reviews for this tutor
          </h3>
          <p className="text-xs font-semibold text-slate-500">
            Shown in the carousel on the public tutor profile page. Only published reviews are visible.
          </p>
        </div>
        {!creating && !editing && (
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New review
          </button>
        )}
      </div>

      <CrudToast toast={toast} />

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
          className="mt-3 rounded-lg border border-white/10 bg-black/30 p-4"
        >
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            {editing ? `Edit review by ${editing.authorName}` : "New review"}
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label>
              <FieldLabel>Author name *</FieldLabel>
              <TextInput name="authorName" defaultValue={editing?.authorName} required />
            </label>
            <label>
              <FieldLabel>Author role</FieldLabel>
              <TextInput name="authorRole" defaultValue={editing?.authorRole ?? ""} placeholder="Parent, Student…" />
            </label>
            <label>
              <FieldLabel>Location</FieldLabel>
              <TextInput name="location" defaultValue={editing?.location ?? ""} placeholder="Gurugram" />
            </label>
            <label>
              <FieldLabel>Rating (1-5)</FieldLabel>
              <TextInput name="rating" defaultValue={editing?.rating ?? 5} type="number" />
            </label>
            <label>
              <FieldLabel>Curriculum</FieldLabel>
              <SelectInput name="curriculum" defaultValue={editing?.curriculum ?? ""} options={CURRICULUM_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing?.status ?? "published"} options={STATUS_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Sort order</FieldLabel>
              <TextInput name="sortOrder" defaultValue={editing?.sortOrder ?? 0} type="number" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Quote *</FieldLabel>
              <TextArea name="quote" defaultValue={editing?.quote} rows={4} required />
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

      <div className="mt-4">
        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-white/10 p-8 text-center text-sm font-bold text-slate-500">
            No reviews for this tutor yet. Click <span className="text-emerald-300">New review</span> to add one.
          </div>
        ) : (
          <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
            {items.map((item) => (
              <li key={item.id} className="grid grid-cols-12 items-start gap-3 p-4">
                <div className="col-span-12 md:col-span-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-black text-slate-100">{item.authorName}</span>
                    {item.location && <span className="text-xs font-semibold text-slate-500">· {item.location}</span>}
                    <span className="text-xs font-bold text-amber-300">{"★".repeat(item.rating)}</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${
                        item.status === "published"
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-amber-400/15 text-amber-200"
                      }`}
                    >
                      {item.status}
                    </span>
                    {item.featured && (
                      <span className="rounded bg-sky-400/15 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-sky-300">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm font-medium leading-relaxed text-slate-300">{item.quote}</p>
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
                  <DeleteIconButton onClick={() => remove(item.id, item.authorName)} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
