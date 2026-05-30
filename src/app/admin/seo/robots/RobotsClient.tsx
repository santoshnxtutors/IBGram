"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import {
  CrudToast,
  useCrudForm,
  FormSaveButton,
  CancelButton,
  DeleteIconButton,
  FieldLabel,
  TextInput,
  SelectInput,
  CheckboxField,
} from "../../_components/CmsCrudShell";

type Item = { id: string; userAgent: string; directive: string; path: string; isActive: boolean };

const DIRECTIVE_OPTIONS = [
  { value: "Allow", label: "Allow" },
  { value: "Disallow", label: "Disallow" },
  { value: "Crawl-delay", label: "Crawl-delay" },
];

export function RobotsClient({ items }: { items: Item[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/seo/robots", router);
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} rules</p>
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New rule
          </button>
        </div>
      )}

      {creating && (
        <form
          onSubmit={(e) =>
            submit(e, { method: "POST" }).then((res) => {
              if (res) setCreating(false);
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">New robots rule</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <label>
              <FieldLabel>User-Agent</FieldLabel>
              <TextInput name="userAgent" defaultValue="*" />
            </label>
            <label>
              <FieldLabel>Directive *</FieldLabel>
              <SelectInput name="directive" defaultValue="Disallow" options={DIRECTIVE_OPTIONS} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Path *</FieldLabel>
              <TextInput name="path" placeholder="/admin/" required />
            </label>
            <div className="flex items-end">
              <CheckboxField name="isActive" defaultChecked label="Active" />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <FormSaveButton busy={busy} label="Create" />
            <CancelButton onClick={() => setCreating(false)} />
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No robots rules — runtime is using the safe fallback policy.
        </div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-center gap-3 p-3">
              <code className="col-span-3 truncate text-xs text-slate-200">{item.userAgent}</code>
              <span className="col-span-2 text-xs font-bold text-slate-400">{item.directive}</span>
              <code className="col-span-5 truncate text-xs text-slate-200">{item.path}</code>
              <div className="col-span-2 flex justify-end">
                <DeleteIconButton onClick={() => remove(item.id, `${item.directive} ${item.path}`)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
