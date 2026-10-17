"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** Status dropdown that PATCHes `{ status }` to `endpoint` and refreshes the page. */
export function StatusSelect({ endpoint, status, options }: { endpoint: string; status: string; options: readonly string[] }) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function change(next: string) {
    const previous = value;
    setValue(next);
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not update status.");
      }
      router.refresh();
    } catch (caught) {
      setValue(previous);
      setError(caught instanceof Error ? caught.message : "Could not update status.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <label className="flex items-center gap-2 text-xs font-bold text-slate-300">
      Status
      <select
        value={value}
        disabled={busy}
        onChange={(e) => change(e.target.value)}
        className="rounded-full border border-white/15 bg-[#0b111c] px-3 py-1.5 text-xs font-bold capitalize text-slate-100 disabled:opacity-50"
      >
        {options.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      {error && <span className="font-semibold text-rose-300">{error}</span>}
    </label>
  );
}
