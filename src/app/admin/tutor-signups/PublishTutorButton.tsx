"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** Publishes (status active + approved) or unpublishes a self-signup tutor via the tutor PATCH route. */
export function PublishTutorButton({ tutorId, published }: { tutorId: string; published: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/admin/api/tutors/${tutorId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(published ? { status: "draft", approved: false } : { status: "active", approved: true }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not update this tutor.");
      }
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not update this tutor.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={busy}
        className={
          published
            ? "rounded-full border border-amber-300/40 px-4 py-2 text-xs font-bold text-amber-200 transition-colors hover:bg-amber-300/10 disabled:opacity-50"
            : "rounded-full bg-emerald-300 px-4 py-2 text-xs font-black text-slate-950 transition-colors hover:bg-emerald-200 disabled:opacity-50"
        }
      >
        {busy ? "Saving…" : published ? "Unpublish" : "Publish"}
      </button>
      {error && <span className="text-xs font-semibold text-rose-300">{error}</span>}
    </>
  );
}
