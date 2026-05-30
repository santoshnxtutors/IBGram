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
  CheckboxField,
} from "../../_components/CmsCrudShell";

type Item = {
  id: string;
  sourcePath: string;
  targetPath: string;
  reason: string | null;
  isActive: boolean;
  updatedAt: string;
};

export function CanonicalsClient({ items }: { items: Item[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/seo/canonicals", router);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} canonical overrides</p>
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New canonical
          </button>
        </div>
      )}

      {(creating || editing) && (
        <form
          onSubmit={(e) =>
            submit(e, { method: "POST" }).then((res) => {
              if (res) {
                setEditing(null);
                setCreating(false);
              }
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">{editing ? "Edit canonical" : "New canonical"}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label>
              <FieldLabel>Source path *</FieldLabel>
              <TextInput name="sourcePath" defaultValue={editing?.sourcePath} placeholder="/ib-tutors/gurgaon/" required />
            </label>
            <label>
              <FieldLabel>Canonical target *</FieldLabel>
              <TextInput name="targetPath" defaultValue={editing?.targetPath} placeholder="/ib-tutors/gurugram/" required />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Reason</FieldLabel>
              <TextInput name="reason" defaultValue={editing?.reason ?? ""} placeholder="Gurgaon → Gurugram canonical" />
            </label>
            <div className="flex items-end">
              <CheckboxField name="isActive" defaultChecked={editing?.isActive ?? true} label="Active" />
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
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">No canonical overrides. Create one above.</div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-center gap-3 p-4">
              <div className="col-span-12 md:col-span-9">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs text-slate-200">{item.sourcePath}</code>
                  <span className="text-xs font-bold text-slate-500">→</span>
                  <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs text-slate-200">{item.targetPath}</code>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${
                      item.isActive ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300"
                    }`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                {item.reason && <p className="mt-1 text-xs text-slate-500">{item.reason}</p>}
              </div>
              <div className="col-span-12 flex justify-end gap-2 md:col-span-3">
                <button
                  onClick={() => {
                    setEditing(item);
                    setCreating(false);
                  }}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                >
                  <Edit3 className="size-3.5" aria-hidden /> Edit
                </button>
                <DeleteIconButton onClick={() => remove(item.id, item.sourcePath)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
