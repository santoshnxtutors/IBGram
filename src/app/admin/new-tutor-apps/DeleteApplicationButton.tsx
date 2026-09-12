"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** Deletes one tutor application, with a confirm step since it is irreversible. */
export function DeleteApplicationButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    if (!window.confirm(`Delete the application from ${name}? This also removes their uploaded CV and photo, and cannot be undone.`)) {
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/admin/api/new-tutor-apps/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not delete this application.");
      }
      router.refresh();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Could not delete this application.");
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleDelete}
        disabled={busy}
        className="rounded-full border border-destructive/40 px-4 py-2 text-xs font-bold text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
      >
        {busy ? "Deleting…" : "Delete"}
      </button>
      {error && <span className="text-xs font-semibold text-destructive">{error}</span>}
    </>
  );
}
