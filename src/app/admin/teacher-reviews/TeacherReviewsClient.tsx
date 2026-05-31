"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Edit3, ExternalLink, Plus, Search } from "lucide-react";
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
  tutorId: string;
  tutorName: string;
  tutorSlug: string;
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

type TutorOpt = { id: string; slug: string; displayName: string };

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

export function TeacherReviewsClient({ items, tutors }: { items: Item[]; tutors: TutorOpt[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/teacher-reviews", router);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);
  const [query, setQuery] = useState("");
  const [tutorFilter, setTutorFilter] = useState("");

  const tutorOptions = useMemo(
    () => [
      { value: "", label: tutors.length === 0 ? "No tutors found — create one first" : "Select a tutor…" },
      ...tutors.map((t) => ({ value: t.id, label: t.displayName })),
    ],
    [tutors],
  );

  const tutorFilterOptions = useMemo(
    () => [
      { value: "", label: "All tutors" },
      ...tutors.map((t) => ({ value: t.id, label: t.displayName })),
    ],
    [tutors],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (tutorFilter && item.tutorId !== tutorFilter) return false;
      if (!q) return true;
      return (
        item.tutorName.toLowerCase().includes(q) ||
        item.authorName.toLowerCase().includes(q) ||
        item.quote.toLowerCase().includes(q) ||
        (item.location ?? "").toLowerCase().includes(q)
      );
    });
  }, [items, query, tutorFilter]);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by tutor, author, location, quote…"
                className="h-10 w-full rounded-md border border-white/10 bg-white/[0.05] pl-9 pr-3 text-sm text-slate-200 focus:border-emerald-300/50 focus:outline-none"
              />
            </div>
            <select
              value={tutorFilter}
              onChange={(e) => setTutorFilter(e.target.value)}
              className="h-10 rounded-md border border-white/10 bg-white/[0.05] px-3 text-sm text-slate-200 focus:border-emerald-300/50 focus:outline-none sm:w-56"
            >
              {tutorFilterOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setCreating(true)}
            disabled={tutors.length === 0}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30 disabled:opacity-40"
          >
            <Plus className="size-4" aria-hidden /> New teacher review
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
            {editing ? `Edit review for ${editing.tutorName}` : "New teacher review"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {!editing && (
              <label className="sm:col-span-2">
                <FieldLabel>Tutor *</FieldLabel>
                <SelectInput name="tutorId" defaultValue="" options={tutorOptions} />
              </label>
            )}
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

      <p className="text-xs font-bold text-slate-500">
        {filtered.length} of {items.length} review{items.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          {items.length === 0 ? "No teacher reviews yet. Create the first one above." : "No reviews match your filters."}
        </div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {filtered.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-start gap-3 p-4">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/admin/tutors/${item.tutorId}/edit`}
                    className="inline-flex items-center gap-1 rounded bg-emerald-400/15 px-2 py-0.5 text-xs font-black text-emerald-200 hover:bg-emerald-400/25"
                  >
                    {item.tutorName}
                    <ExternalLink className="size-3" aria-hidden />
                  </Link>
                  <span className="text-sm font-black text-slate-100">· {item.authorName}</span>
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
                <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300">{item.quote}</p>
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
                <DeleteIconButton onClick={() => remove(item.id, `${item.authorName} (${item.tutorName})`)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
