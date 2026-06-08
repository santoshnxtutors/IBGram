"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Trash2, Upload, RefreshCw, Search, FileText, Check, AlertTriangle } from "lucide-react";

type Asset = {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  altText: string | null;
  width: number | null;
  height: number | null;
  createdAt: string;
};

type ApiResponse = { items: Asset[]; total: number; take: number; skip: number };

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function MediaLibrary({ initial }: { initial: ApiResponse | null }) {
  const [items, setItems] = useState<Asset[]>(initial?.items ?? []);
  const [total, setTotal] = useState<number>(initial?.total ?? 0);
  const [search, setSearch] = useState<string>("");
  const [folder, setFolder] = useState<string>("general");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAlt, setEditAlt] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const fetchAssets = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      const res = await fetch(`/admin/api/assets?${params.toString()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
      const data = (await res.json()) as ApiResponse;
      setItems(data.items);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load media");
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  const upload = useCallback(
    async (files: FileList | File[]) => {
      const list = Array.from(files);
      if (list.length === 0) return;
      setIsLoading(true);
      setError(null);
      let uploaded = 0;
      for (const file of list) {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("folder", folder);
        fd.append("altText", "");
        try {
          const res = await fetch("/admin/api/assets/upload", { method: "POST", body: fd, cache: "no-store" });
          if (!res.ok) {
            const msg = (await res.json().catch(() => null))?.error ?? `Upload failed: ${res.status}`;
            throw new Error(msg);
          }
          uploaded++;
        } catch (err) {
          setError(err instanceof Error ? err.message : "Upload failed");
        }
      }
      if (uploaded > 0) {
        showToast(`Uploaded ${uploaded} file${uploaded === 1 ? "" : "s"}`);
        await fetchAssets();
      }
      setIsLoading(false);
    },
    [folder, fetchAssets, showToast],
  );

  const onSaveAlt = useCallback(
    async (id: string, altText: string) => {
      const res = await fetch(`/admin/api/assets/${id}`, {
        method: "PATCH",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ altText }),
      });
      if (res.ok) {
        showToast("Alt text saved");
        await fetchAssets();
        setEditingId(null);
      } else {
        setError("Failed to save alt text");
      }
    },
    [fetchAssets, showToast],
  );

  const onDelete = useCallback(
    async (id: string, filename: string) => {
      if (!window.confirm(`Delete ${filename}? This cannot be undone.`)) return;
      const res = await fetch(`/admin/api/assets/${id}`, { method: "DELETE", cache: "no-store" });
      if (res.ok) {
        showToast("Deleted");
        await fetchAssets();
      } else {
        setError("Failed to delete");
      }
    },
    [fetchAssets, showToast],
  );

  const onCopyUrl = useCallback(
    (url: string) => {
      const absolute = typeof window !== "undefined" ? new URL(url, window.location.origin).toString() : url;
      void navigator.clipboard.writeText(absolute);
      showToast("URL copied");
    },
    [showToast],
  );

  useEffect(() => {
    const onSearch = setTimeout(() => {
      if (search !== "") void fetchAssets();
    }, 300);
    return () => clearTimeout(onSearch);
  }, [search, fetchAssets]);

  const onPickFiles = () => inputRef.current?.click();

  return (
    <div className="space-y-6">
      {toast && (
        <div className="flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          <Check className="size-4" /> {toast}
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 rounded-md border border-rose-400/30 bg-rose-400/10 px-4 py-2 text-sm font-bold text-rose-200">
          <AlertTriangle className="size-4" /> {error}
        </div>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          if (e.dataTransfer.files.length > 0) void upload(e.dataTransfer.files);
        }}
        className={`rounded-lg border-2 border-dashed p-6 text-center transition ${
          dragActive ? "border-emerald-400 bg-emerald-400/5" : "border-white/15 bg-white/[0.02]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,image/avif,application/pdf"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) void upload(e.target.files);
            e.target.value = "";
          }}
        />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Upload className="size-6 text-emerald-300" aria-hidden />
          <div className="text-left sm:flex-1">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">Drop files here or click to upload</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Accepts JPEG, PNG, WebP, GIF, SVG, AVIF or PDF up to {Math.round((Number(process.env.NEXT_PUBLIC_UPLOAD_MAX_BYTES ?? 5242880)) / 1024 / 1024)} MB.
            </p>
          </div>
          <button
            onClick={onPickFiles}
            disabled={isLoading}
            className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30 disabled:opacity-50"
          >
            Choose files
          </button>
        </div>
        <div className="mx-auto mt-4 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-xs">
          <label className="flex items-center gap-2 text-slate-400">
            <span className="font-bold">Folder:</span>
            <input
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              placeholder="general"
              className="h-8 rounded-md border border-white/10 bg-white/[0.05] px-2 text-slate-200"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" aria-hidden />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search filename or alt text…"
            className="h-10 w-full rounded-md border border-white/10 bg-white/[0.04] pl-9 pr-3 text-sm text-slate-200"
          />
        </div>
        <button
          onClick={() => void fetchAssets()}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-sm font-bold text-slate-200 hover:bg-white/10"
        >
          <RefreshCw className={`size-4 ${isLoading ? "animate-spin" : ""}`} aria-hidden /> Refresh
        </button>
        <p className="text-xs font-bold text-slate-500">{total} total</p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          {isLoading ? "Loading…" : "No assets yet. Upload one above."}
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((asset) => {
            const isImage = asset.mimeType.startsWith("image/");
            return (
              <li key={asset.id} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <div className="relative aspect-video bg-black/40">
                  {isImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={asset.url} alt={asset.altText ?? asset.filename} className="absolute inset-0 size-full object-contain" />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      <FileText className="size-10 text-slate-500" aria-hidden />
                    </div>
                  )}
                </div>
                <div className="space-y-3 p-3">
                  <div>
                    <p className="truncate text-xs font-black text-slate-200" title={asset.filename}>
                      {asset.filename}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      {asset.mimeType.split("/")[1]?.toUpperCase() ?? asset.mimeType} · {formatBytes(asset.sizeBytes)}
                      {asset.width && asset.height ? ` · ${asset.width}×${asset.height}` : ""}
                    </p>
                  </div>
                  {editingId === asset.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={editAlt}
                        onChange={(e) => setEditAlt(e.target.value)}
                        rows={2}
                        className="w-full rounded-md border border-white/10 bg-white/[0.05] p-2 text-xs text-slate-200"
                        placeholder="Alt text…"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => void onSaveAlt(asset.id, editAlt)}
                          className="flex-1 rounded-md bg-emerald-400/20 py-1 text-xs font-black text-emerald-200 hover:bg-emerald-400/30"
                        >
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)} className="flex-1 rounded-md border border-white/10 py-1 text-xs font-bold text-slate-400 hover:bg-white/5">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setEditAlt(asset.altText ?? "");
                        setEditingId(asset.id);
                      }}
                      className="w-full rounded-md border border-white/10 px-2 py-1 text-left text-xs font-medium text-slate-300 hover:bg-white/5"
                    >
                      {asset.altText ? <>Alt: <span className="text-slate-100">{asset.altText}</span></> : <span className="italic text-slate-500">Add alt text…</span>}
                    </button>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => onCopyUrl(asset.url)}
                      className="flex-1 rounded-md border border-white/10 py-1 text-xs font-bold text-slate-300 hover:bg-white/5"
                    >
                      Copy URL
                    </button>
                    <button
                      onClick={() => void onDelete(asset.id, asset.filename)}
                      aria-label={`Delete ${asset.filename}`}
                      className="inline-flex items-center justify-center rounded-md border border-rose-400/30 bg-rose-400/10 px-2 py-1 text-rose-200 hover:bg-rose-400/20"
                    >
                      <Trash2 className="size-3.5" aria-hidden />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
