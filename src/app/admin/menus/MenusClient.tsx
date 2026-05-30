"use client";

import { useState, type FormEvent } from "react";
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
} from "../_components/CmsCrudShell";

type Item = { id: string; label: string; href: string; sortOrder: number; isActive: boolean };
type Menu = { id: string; menuKey: string; label: string; position: string; items: Item[] };

export function MenusClient({ menus }: { menus: Menu[] }) {
  const router = useRouter();
  const { toast, remove } = useCrudForm<Item>("/admin/api/menus", router);
  const itemCrud = useCrudForm<Item>("/admin/api/menus", router);
  const [editingItem, setEditingItem] = useState<{ menuKey: string; item: Item } | null>(null);
  const [addingTo, setAddingTo] = useState<string | null>(null);

  const submitNewItem = async (event: FormEvent<HTMLFormElement>, menuKey: string) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const payload = {
      kind: "item",
      menuKey,
      label: (fd.get("label") as string) ?? "",
      href: (fd.get("href") as string) ?? "",
      sortOrder: Number(fd.get("sortOrder") ?? 0),
      isActive: fd.get("isActive") === "true",
    };
    const res = await fetch("/admin/api/menus", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (res.ok) {
      setAddingTo(null);
      router.refresh();
    }
  };

  return (
    <div className="space-y-6">
      <CrudToast toast={toast} />

      {menus.length === 0 && (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No menus seeded yet. Run <code>npm run db:seed-cms</code> to create the header and footer menus.
        </div>
      )}

      {menus.map((menu) => (
        <section key={menu.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <header className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">{menu.position}</h3>
              <p className="mt-1 text-base font-black text-slate-100">{menu.label}</p>
              <p className="text-xs font-bold text-slate-500">{menu.menuKey} · {menu.items.length} items</p>
            </div>
            <button
              onClick={() => setAddingTo(menu.menuKey)}
              className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-400/20 px-3 text-xs font-black text-emerald-200 hover:bg-emerald-400/30"
            >
              <Plus className="size-3.5" aria-hidden /> Add item
            </button>
          </header>

          {addingTo === menu.menuKey && (
            <form onSubmit={(e) => submitNewItem(e, menu.menuKey)} className="mb-4 rounded-md border border-white/10 bg-white/[0.04] p-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                <label className="sm:col-span-2">
                  <FieldLabel>Label *</FieldLabel>
                  <TextInput name="label" required />
                </label>
                <label className="sm:col-span-2">
                  <FieldLabel>Href *</FieldLabel>
                  <TextInput name="href" placeholder="/tutors/" required />
                </label>
                <label>
                  <FieldLabel>Sort order</FieldLabel>
                  <TextInput name="sortOrder" defaultValue={0} type="number" />
                </label>
                <div className="flex items-end">
                  <CheckboxField name="isActive" defaultChecked label="Active" />
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <FormSaveButton busy={false} label="Add" />
                <CancelButton onClick={() => setAddingTo(null)} />
              </div>
            </form>
          )}

          <ul className="divide-y divide-white/10 rounded-md border border-white/10">
            {menu.items.length === 0 && (
              <li className="p-3 text-center text-xs font-bold text-slate-500">No items in this menu.</li>
            )}
            {menu.items.map((item) => (
              <li key={item.id} className="grid grid-cols-12 items-center gap-3 p-3">
                {editingItem?.item.id === item.id ? (
                  <form
                    onSubmit={(e) =>
                      itemCrud.submit(e, { method: "PATCH", id: item.id }).then((res) => {
                        if (res) setEditingItem(null);
                      })
                    }
                    className="col-span-12 grid grid-cols-1 gap-2 sm:grid-cols-4"
                  >
                    <TextInput name="label" defaultValue={item.label} />
                    <TextInput name="href" defaultValue={item.href} />
                    <TextInput name="sortOrder" defaultValue={item.sortOrder} type="number" />
                    <div className="flex gap-2">
                      <FormSaveButton busy={itemCrud.busy} />
                      <CancelButton onClick={() => setEditingItem(null)} />
                    </div>
                  </form>
                ) : (
                  <>
                    <span className="col-span-1 text-xs font-black text-slate-500">#{item.sortOrder}</span>
                    <span className="col-span-4 text-sm font-bold text-slate-200">{item.label}</span>
                    <code className="col-span-5 truncate text-xs text-slate-400">{item.href}</code>
                    <div className="col-span-2 flex justify-end gap-2">
                      <button
                        onClick={() => setEditingItem({ menuKey: menu.menuKey, item })}
                        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.05] px-2 text-[11px] font-bold text-slate-200 hover:bg-white/10"
                      >
                        <Edit3 className="size-3" aria-hidden /> Edit
                      </button>
                      <DeleteIconButton onClick={() => remove(item.id, item.label)} />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
