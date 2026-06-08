"use client";

import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, PauseCircle } from "lucide-react";

export function AdminPagePublishControls({
  pageId,
  canPublish,
  currentStatus,
}: {
  pageId: string;
  canPublish: boolean;
  currentStatus: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<"publish" | "unpublish" | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function setStatus(status: "published" | "paused") {
    setBusy(status === "published" ? "publish" : "unpublish");
    setMessage(null);
    try {
      const response = await fetch(`/admin/api/pages/${encodeURIComponent(pageId)}/`, {
        method: "PATCH",
        cache: "no-store",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status,
          indexFlag: status === "published" ? "index" : "noindex",
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.error ?? `Status update failed (${response.status})`);
      }
      setMessage(status === "published" ? "Published and revalidated." : "Unpublished and revalidated.");
      startTransition(() => router.refresh());
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Status update failed.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm font-semibold text-slate-300">
        Current status: <span className="font-black uppercase text-white">{currentStatus}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!canPublish || busy !== null}
          onClick={() => void setStatus("published")}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-300 px-3 text-sm font-black text-slate-950 hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy === "publish" ? <Loader2 className="size-4 animate-spin" /> : <CheckCircle2 className="size-4" />}
          Publish
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => void setStatus("paused")}
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy === "unpublish" ? <Loader2 className="size-4 animate-spin" /> : <PauseCircle className="size-4" />}
          Unpublish
        </button>
      </div>
      {message && (
        <p className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm font-bold text-slate-300">
          {message}
        </p>
      )}
    </div>
  );
}

