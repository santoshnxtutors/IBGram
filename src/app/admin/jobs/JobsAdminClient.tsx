"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit3, ExternalLink, Plus } from "lucide-react";
import {
  CancelButton,
  CrudToast,
  DeleteIconButton,
  FieldLabel,
  FormSaveButton,
  SelectInput,
  TextArea,
  TextInput,
  useCrudForm,
} from "../_components/CmsCrudShell";

type JobItem = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  level: string | null;
  workMode: string | null;
  summary: string | null;
  roleOverview: string | null;
  jobDescription: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  applicationPrompt: string | null;
  status: string;
  sortOrder: number;
  publishedAt: string | null;
  closesAt: string | null;
  updatedAt: string;
  applicationCount: number;
};

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "closed", label: "Closed" },
  { value: "archived", label: "Archived" },
];

function toLocalDateTime(value: string | null | undefined) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const offsetMs = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 16);
}

function toIso(value: unknown) {
  if (typeof value !== "string" || !value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function listValue(items: string[] | undefined) {
  return items?.join("\n") ?? "";
}

export function JobsAdminClient({ items }: { items: JobItem[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<JobItem>("/admin/api/jobs", router);
  const [editing, setEditing] = useState<JobItem | null>(null);
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} jobs</p>
          <button
            type="button"
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New job
          </button>
        </div>
      )}

      {(creating || editing) && (
        <form
          onSubmit={(event) =>
            submit(event, {
              ...(editing ? { method: "PATCH" as const, id: editing.id } : { method: "POST" as const }),
              transform: (data) => ({
                ...data,
                level: typeof data.level === "string" ? data.level : null,
                workMode: typeof data.workMode === "string" ? data.workMode : null,
                summary: typeof data.summary === "string" ? data.summary : null,
                roleOverview: typeof data.roleOverview === "string" ? data.roleOverview : null,
                applicationPrompt: typeof data.applicationPrompt === "string" ? data.applicationPrompt : null,
                publishedAt: toIso(data.publishedAt),
                closesAt: toIso(data.closesAt),
              }),
            }).then((res) => {
              if (res) {
                setCreating(false);
                setEditing(null);
              }
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            {editing ? `Edit "${editing.title}"` : "New job"}
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <FieldLabel>Title *</FieldLabel>
              <TextInput name="title" defaultValue={editing?.title} required />
            </label>
            <label>
              <FieldLabel>Slug</FieldLabel>
              <TextInput name="slug" defaultValue={editing?.slug} placeholder="ib-physics-specialist" />
            </label>
            <label>
              <FieldLabel>Department *</FieldLabel>
              <TextInput name="department" defaultValue={editing?.department} placeholder="Teaching & Academic" required />
            </label>
            <label>
              <FieldLabel>Location *</FieldLabel>
              <TextInput name="location" defaultValue={editing?.location} placeholder="Global / Remote" required />
            </label>
            <label>
              <FieldLabel>Employment type *</FieldLabel>
              <TextInput name="employmentType" defaultValue={editing?.employmentType} placeholder="Full-time" required />
            </label>
            <label>
              <FieldLabel>Level</FieldLabel>
              <TextInput name="level" defaultValue={editing?.level ?? ""} placeholder="Senior" />
            </label>
            <label>
              <FieldLabel>Work mode</FieldLabel>
              <TextInput name="workMode" defaultValue={editing?.workMode ?? ""} placeholder="Remote / Hybrid" />
            </label>
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing?.status ?? "draft"} options={STATUS_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Sort order</FieldLabel>
              <TextInput name="sortOrder" type="number" defaultValue={editing?.sortOrder ?? 0} />
            </label>
            <label>
              <FieldLabel>Published at</FieldLabel>
              <TextInput name="publishedAt" type="datetime-local" defaultValue={toLocalDateTime(editing?.publishedAt)} />
            </label>
            <label>
              <FieldLabel>Closes at</FieldLabel>
              <TextInput name="closesAt" type="datetime-local" defaultValue={toLocalDateTime(editing?.closesAt)} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Short summary</FieldLabel>
              <TextArea name="summary" defaultValue={editing?.summary ?? ""} rows={3} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Role overview</FieldLabel>
              <TextArea name="roleOverview" defaultValue={editing?.roleOverview ?? ""} rows={5} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Job description / JD *</FieldLabel>
              <TextArea name="jobDescription" defaultValue={editing?.jobDescription ?? ""} rows={8} required />
            </label>
            <label>
              <FieldLabel>Responsibilities</FieldLabel>
              <TextArea name="responsibilities" defaultValue={listValue(editing?.responsibilities)} rows={7} placeholder="One item per line" />
            </label>
            <label>
              <FieldLabel>Requirements</FieldLabel>
              <TextArea name="requirements" defaultValue={listValue(editing?.requirements)} rows={7} placeholder="One item per line" />
            </label>
            <label>
              <FieldLabel>Nice to have</FieldLabel>
              <TextArea name="niceToHave" defaultValue={listValue(editing?.niceToHave)} rows={6} placeholder="One item per line" />
            </label>
            <label>
              <FieldLabel>Benefits</FieldLabel>
              <TextArea name="benefits" defaultValue={listValue(editing?.benefits)} rows={6} placeholder="One item per line" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Application prompt</FieldLabel>
              <TextArea name="applicationPrompt" defaultValue={editing?.applicationPrompt ?? ""} rows={3} />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <FormSaveButton busy={busy} label={editing ? "Save changes" : "Create"} />
            <CancelButton
              onClick={() => {
                setCreating(false);
                setEditing(null);
              }}
            />
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No jobs yet. Create one above.
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
                      item.status === "published"
                        ? "bg-emerald-400/15 text-emerald-300"
                        : item.status === "closed"
                          ? "bg-rose-400/15 text-rose-200"
                          : "bg-amber-400/15 text-amber-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                    /{item.slug}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300">
                  {item.summary ?? item.jobDescription.slice(0, 220)}
                </p>
                <p className="mt-2 text-xs font-bold text-slate-500">
                  {item.department} · {item.location} · {item.employmentType} · {item.applicationCount} applications
                </p>
              </div>
              <div className="col-span-12 flex justify-end gap-2 md:col-span-4">
                <Link
                  href={`/jobs/${item.slug}`}
                  target="_blank"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                >
                  <ExternalLink className="size-3.5" aria-hidden /> View
                </Link>
                <button
                  type="button"
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
