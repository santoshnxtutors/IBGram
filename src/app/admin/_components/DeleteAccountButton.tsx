"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** Permanently deletes a student or tutor account from the admin panel, after a typed confirmation. */
export function DeleteAccountButton({ userId, name, isTutor }: { userId: string; name: string; isTutor: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    const what = isTutor ? "account, tutor profile and public tutor page" : "account and student profile";
    const typed = window.prompt(
      `Permanently delete ${name}'s ${what}, plus all their demo requests and bookings?\n\nThis removes them from the database and cannot be undone. Type DELETE to confirm.`,
    );
    if (typed !== "DELETE") return;

    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/admin/api/accounts/${userId}/`, { method: "DELETE" });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not delete this account.");
      }
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not delete this account.");
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleDelete}
        disabled={busy}
        className="rounded-full border border-rose-400/40 px-4 py-2 text-xs font-bold text-rose-300 transition-colors hover:bg-rose-400/10 disabled:opacity-50"
      >
        {busy ? "Deleting…" : "Delete account"}
      </button>
      {error && <span className="text-xs font-semibold text-rose-300">{error}</span>}
    </>
  );
}
