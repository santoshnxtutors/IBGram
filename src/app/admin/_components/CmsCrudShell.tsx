"use client";

import { useCallback, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Check, AlertTriangle, Save, X, Trash2 } from "lucide-react";

type ToastState = { tone: "ok" | "err"; message: string } | null;

export function CrudToast({ toast }: { toast: ToastState }) {
  if (!toast) return null;
  const cls =
    toast.tone === "ok"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : "border-rose-400/30 bg-rose-400/10 text-rose-200";
  return (
    <div className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-bold ${cls}`}>
      {toast.tone === "ok" ? <Check className="size-4" /> : <AlertTriangle className="size-4" />}
      {toast.message}
    </div>
  );
}

export function useCrudForm<TItem>(
  endpoint: string,
  router: ReturnType<typeof useRouter>,
) {
  const [toast, setToast] = useState<ToastState>(null);
  const [busy, setBusy] = useState(false);

  const showToast = useCallback((message: string, tone: "ok" | "err" = "ok") => {
    setToast({ tone, message });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const submit = useCallback(
    async (event: FormEvent<HTMLFormElement>, opts?: { method?: "POST" | "PATCH"; id?: string; transform?: (data: Record<string, unknown>) => Record<string, unknown> }) => {
      event.preventDefault();
      setBusy(true);
      const fd = new FormData(event.currentTarget);
      const json: Record<string, unknown> = {};
      for (const [key, value] of fd.entries()) {
        if (value === "") continue;
        if (typeof value === "string") {
          if (value === "true" || value === "false") json[key] = value === "true";
          else if (/^-?\d+$/.test(value)) json[key] = Number(value);
          else json[key] = value;
        }
      }
      const payload = opts?.transform ? opts.transform(json) : json;
      const method = opts?.method ?? "POST";
      const url = opts?.id ? `${endpoint}/${opts.id}` : endpoint;
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const msg = (await res.json().catch(() => null))?.error ?? `${method} failed (${res.status})`;
          throw new Error(msg);
        }
        const body = (await res.json().catch(() => null)) as { item?: TItem } | null;
        showToast(opts?.id ? "Saved" : "Created");
        router.refresh();
        return body?.item ?? null;
      } catch (err) {
        showToast(err instanceof Error ? err.message : "Failed", "err");
        return null;
      } finally {
        setBusy(false);
      }
    },
    [endpoint, router, showToast],
  );

  const remove = useCallback(
    async (id: string, label: string) => {
      if (!window.confirm(`Delete "${label}"? This cannot be undone.`)) return;
      setBusy(true);
      try {
        const res = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error(`Delete failed (${res.status})`);
        showToast("Deleted");
        router.refresh();
      } catch (err) {
        showToast(err instanceof Error ? err.message : "Failed", "err");
      } finally {
        setBusy(false);
      }
    },
    [endpoint, router, showToast],
  );

  return { toast, busy, submit, remove } as const;
}

export function FormSaveButton({ busy, label = "Save" }: { busy: boolean; label?: string }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30 disabled:opacity-50"
    >
      <Save className="size-4" aria-hidden /> {busy ? "Saving…" : label}
    </button>
  );
}

export function CancelButton({ onClick, label = "Cancel" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-sm font-bold text-slate-300 hover:bg-white/10"
    >
      <X className="size-4" aria-hidden /> {label}
    </button>
  );
}

export function DeleteIconButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-md border border-rose-400/30 bg-rose-400/10 p-2 text-rose-200 hover:bg-rose-400/20"
      aria-label="Delete"
    >
      <Trash2 className="size-3.5" aria-hidden />
    </button>
  );
}

export function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{children}</span>;
}

export function TextInput({ name, defaultValue, placeholder, type = "text", required }: { name: string; defaultValue?: string | number | null; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <input
      name={name}
      defaultValue={defaultValue ?? ""}
      placeholder={placeholder}
      type={type}
      required={required}
      className="mt-1 h-10 w-full rounded-md border border-white/10 bg-white/[0.05] px-3 text-sm text-slate-200 focus:border-emerald-300/50 focus:outline-none"
    />
  );
}

export function TextArea({ name, defaultValue, rows = 4, placeholder, required }: { name: string; defaultValue?: string | null; rows?: number; placeholder?: string; required?: boolean }) {
  return (
    <textarea
      name={name}
      defaultValue={defaultValue ?? ""}
      rows={rows}
      placeholder={placeholder}
      required={required}
      className="mt-1 w-full rounded-md border border-white/10 bg-white/[0.05] p-3 text-sm text-slate-200 focus:border-emerald-300/50 focus:outline-none"
    />
  );
}

export function SelectInput({ name, defaultValue, options }: { name: string; defaultValue?: string; options: Array<{ value: string; label: string }> }) {
  return (
    <select
      name={name}
      defaultValue={defaultValue ?? options[0]?.value}
      className="mt-1 h-10 w-full rounded-md border border-white/10 bg-white/[0.05] px-3 text-sm text-slate-200 focus:border-emerald-300/50 focus:outline-none"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function CheckboxField({ name, defaultChecked, label }: { name: string; defaultChecked?: boolean; label: string }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300">
      <input type="checkbox" name={name} value="true" defaultChecked={defaultChecked} className="size-4 rounded border-white/20 bg-white/10 text-emerald-400 focus:ring-emerald-400" />
      {label}
    </label>
  );
}
