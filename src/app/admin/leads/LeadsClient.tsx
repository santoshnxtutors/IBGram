"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit3, Mail, MapPin, Phone } from "lucide-react";
import {
  CancelButton,
  CrudToast,
  DeleteIconButton,
  FieldLabel,
  FormSaveButton,
  SelectInput,
  TextArea,
  useCrudForm,
} from "../_components/CmsCrudShell";

type LeadItem = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  inquiryType: string | null;
  message: string;
  status: string;
  sourcePage: string | null;
  adminNotes: string | null;
  createdAt: string;
};

const STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "reviewing", label: "Reviewing" },
  { value: "contacted", label: "Contacted" },
  { value: "closed", label: "Closed" },
  { value: "spam", label: "Spam" },
];

function statusClass(status: string) {
  if (status === "contacted") return "bg-emerald-400/15 text-emerald-300";
  if (status === "closed") return "bg-slate-400/15 text-slate-300";
  if (status === "spam") return "bg-rose-400/15 text-rose-200";
  if (status === "reviewing") return "bg-sky-400/15 text-sky-200";
  return "bg-amber-400/15 text-amber-200";
}

export function LeadsClient({ items }: { items: LeadItem[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<LeadItem>("/admin/api/leads", router);
  const [editing, setEditing] = useState<LeadItem | null>(null);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {editing && (
        <form
          onSubmit={(event) =>
            submit(event, {
              method: "PATCH",
              id: editing.id,
              transform: (data) => ({
                status: data.status,
                adminNotes: typeof data.adminNotes === "string" ? data.adminNotes : null,
              }),
            }).then((res) => {
              if (res) setEditing(null);
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            Update {editing.name}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing.status} options={STATUS_OPTIONS} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Admin notes</FieldLabel>
              <TextArea name="adminNotes" defaultValue={editing.adminNotes ?? ""} rows={5} />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <FormSaveButton busy={busy} label="Save" />
            <CancelButton onClick={() => setEditing(null)} />
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No messages yet. Submissions from the contact form will appear here.
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-black text-slate-100">{item.name}</h3>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${statusClass(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                    {item.inquiryType && (
                      <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-300">
                        {item.inquiryType}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                    <a href={`mailto:${item.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                      <Mail className="size-3.5" /> {item.email}
                    </a>
                    {item.phone && (
                      <a href={`tel:${item.phone}`} className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                        <Phone className="size-3.5" /> {item.phone}
                      </a>
                    )}
                    {item.sourcePage && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" /> {item.sourcePage}
                      </span>
                    )}
                    <span>{new Date(item.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setEditing(item)}
                    className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                  >
                    <Edit3 className="size-3.5" /> Update
                  </button>
                  <DeleteIconButton onClick={() => remove(item.id, item.name)} />
                </div>
              </div>

              <div className="mt-4 rounded-md border border-white/10 bg-white/[0.02] p-3 text-sm leading-6 text-slate-200">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Message</p>
                <p className="mt-1 whitespace-pre-wrap">{item.message}</p>
              </div>

              {item.adminNotes && (
                <div className="mt-3 rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-50">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">Admin notes</p>
                  <p className="mt-1 whitespace-pre-wrap">{item.adminNotes}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
