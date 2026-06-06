"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Save } from "lucide-react";

type TutorOption = {
  id: string;
  name: string;
  slug: string;
  status: string;
  approved: boolean;
  image?: string | null;
};

type PageOption = {
  label: string;
  path: string;
};

type Placement = {
  tutorId: string;
  tutorName: string;
  tutorStatus: string;
  tutorApproved: boolean;
  pagePath: string;
  pageLabel?: string;
  sortOrder: number;
  isActive: boolean;
};

type ApiState = {
  pageOptions: PageOption[];
  tutors: TutorOption[];
  placements: Placement[];
};

function normalizePath(value: string) {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withoutOrigin = trimmed.replace(/^https?:\/\/[^/]+/i, "");
  const withLeadingSlash = withoutOrigin.startsWith("/") ? withoutOrigin : `/${withoutOrigin}`;
  const clean = withLeadingSlash.split(/[?#]/)[0] || "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function TutorVisibilityClient() {
  const [data, setData] = useState<ApiState | null>(null);
  const [pagePath, setPagePath] = useState("/");
  const [customPath, setCustomPath] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [status, setStatus] = useState("Loading visibility settings...");
  const [saving, setSaving] = useState(false);

  const activePagePath = normalizePath(customPath || pagePath);
  const activePageLabel = data?.pageOptions.find((option) => option.path === activePagePath)?.label || activePagePath;

  useEffect(() => {
    let mounted = true;
    fetch("/admin/api/tutor-visibility")
      .then((response) => response.json().then((json) => ({ response, json })))
      .then(({ response, json }) => {
        if (!mounted) return;
        if (!response.ok) throw new Error(json.error || "Could not load tutor visibility.");
        setData(json);
        setStatus("Ready");
      })
      .catch((error) => {
        if (!mounted) return;
        setStatus(error instanceof Error ? error.message : "Could not load tutor visibility.");
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!data) return;
    const ids = data.placements
      .filter((placement) => placement.isActive && placement.pagePath === activePagePath)
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .slice(0, 3)
      .map((placement) => placement.tutorId);
    setSelectedIds(ids);
  }, [activePagePath, data]);

  const availableTutors = useMemo(() => data?.tutors.filter((tutor) => tutor.status === "active" && tutor.approved) ?? [], [data]);
  const groupedPlacements = useMemo(() => {
    const byPage = new Map<string, Placement[]>();
    for (const placement of data?.placements ?? []) {
      if (!placement.isActive) continue;
      const group = byPage.get(placement.pagePath) ?? [];
      group.push(placement);
      byPage.set(placement.pagePath, group);
    }
    return [...byPage.entries()]
      .map(([path, placements]) => ({
        path,
        label: placements[0]?.pageLabel || data?.pageOptions.find((option) => option.path === path)?.label || path,
        placements: placements.sort((a, b) => a.sortOrder - b.sortOrder),
      }))
      .sort((a, b) => a.path.localeCompare(b.path));
  }, [data]);

  const updateSlot = (index: number, tutorId: string) => {
    setSelectedIds((prev) => {
      const next = [...prev];
      if (!tutorId) {
        next.splice(index, 1);
        return next;
      }
      const withoutDuplicate = next.filter((id) => id !== tutorId);
      withoutDuplicate[index] = tutorId;
      return withoutDuplicate.filter(Boolean).slice(0, 3);
    });
  };

  const moveSlot = (index: number, direction: -1 | 1) => {
    setSelectedIds((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const save = async () => {
    setSaving(true);
    setStatus("Saving...");
    try {
      const response = await fetch("/admin/api/tutor-visibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pagePath: activePagePath,
          pageLabel: activePageLabel,
          assignments: selectedIds.map((tutorId, index) => ({ tutorId, sortOrder: index + 1, isActive: true })),
        }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Could not save tutor visibility.");
      const fresh = await fetch("/admin/api/tutor-visibility").then((res) => res.json());
      setData(fresh);
      setStatus(`Saved ${json.saved} tutor${json.saved === 1 ? "" : "s"} for ${json.pagePath}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not save tutor visibility.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-5">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Page</span>
            <select
              value={pagePath}
              onChange={(event) => {
                setCustomPath("");
                setPagePath(event.target.value);
              }}
              className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-slate-950 px-3 text-sm font-bold text-white outline-none ring-emerald-300/30 focus:ring-2"
            >
              {(data?.pageOptions ?? [{ label: "Homepage", path: "/" }]).map((option) => (
                <option key={option.path} value={option.path}>
                  {option.label} ({option.path})
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Custom page path</span>
            <input
              value={customPath}
              onChange={(event) => setCustomPath(event.target.value)}
              placeholder="/courses/ib/mathematics/"
              className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-bold text-white outline-none ring-emerald-300/30 placeholder:text-slate-600 focus:ring-2"
            />
          </label>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">Showing on</p>
          <h2 className="mt-2 text-2xl font-black text-white">{activePageLabel}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-400">{activePagePath}</p>
        </div>

        <div className="grid gap-3">
          {[0, 1, 2].map((index) => (
            <div key={index} className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 md:grid-cols-[110px_minmax(0,1fr)_auto] md:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Position</p>
                <p className="text-xl font-black text-emerald-300">#{index + 1}</p>
              </div>
              <select
                value={selectedIds[index] ?? ""}
                onChange={(event) => updateSlot(index, event.target.value)}
                className="h-11 min-w-0 rounded-lg border border-white/10 bg-slate-950 px-3 text-sm font-bold text-white outline-none ring-emerald-300/30 focus:ring-2"
              >
                <option value="">No tutor selected</option>
                {availableTutors.map((tutor) => (
                  <option key={tutor.id} value={tutor.id}>
                    {tutor.name} ({tutor.slug})
                  </option>
                ))}
              </select>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => moveSlot(index, -1)}
                  className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]"
                  aria-label="Move tutor up"
                >
                  <ArrowUp className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => moveSlot(index, 1)}
                  className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]"
                  aria-label="Move tutor down"
                >
                  <ArrowDown className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-400">{status}</p>
          <button
            type="button"
            onClick={save}
            disabled={saving || !data}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-300 px-4 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save className="size-4" />
            Save visibility
          </button>
        </div>
      </div>

      <aside className="space-y-3">
        <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Current placements</h3>
        <div className="max-h-[620px] space-y-3 overflow-auto pr-1">
          {groupedPlacements.length ? (
            groupedPlacements.map((group) => (
              <div key={group.path} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="text-sm font-black text-white">{group.label}</p>
                <p className="text-xs font-semibold text-slate-500">{group.path}</p>
                <ol className="mt-3 space-y-2">
                  {group.placements.map((placement) => (
                    <li key={`${group.path}-${placement.tutorId}`} className="text-sm font-semibold text-slate-300">
                      <span className="text-emerald-300">#{placement.sortOrder}</span> {placement.tutorName}
                    </li>
                  ))}
                </ol>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-white/15 p-4 text-sm font-semibold text-slate-500">
              No tutor visibility rules saved yet.
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
