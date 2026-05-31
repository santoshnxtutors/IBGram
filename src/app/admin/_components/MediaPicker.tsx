"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Image as ImageIcon, Upload, X, Check } from "lucide-react";

type Asset = {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  altText: string | null;
};

type MediaPickerProps = {
  value?: string | null;
  /** Pre-existing image URL to show when no Asset id is known yet (e.g. legacy avatar) */
  currentUrl?: string | null;
  onChange: (assetId: string | null, url: string | null) => void;
  label?: string;
  folder?: string;
};

function normalisePreviewUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("/uploads/")) return `/api/media/${trimmed.slice("/uploads/".length)}`;
  if (trimmed.startsWith("uploads/")) return `/api/media/${trimmed.slice("uploads/".length)}`;
  if (trimmed.startsWith("/")) return trimmed;
  return `/${trimmed}`;
}

export function MediaPicker({ value, currentUrl, onChange, label = "Image", folder = "general" }: MediaPickerProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchAssets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL("/admin/api/assets", window.location.origin);
      if (search) url.searchParams.set("search", search);
      url.searchParams.set("mime", "image/");
      const res = await fetch(url.toString(), { cache: "no-store" });
      if (!res.ok) throw new Error(`Load failed (${res.status})`);
      const data = await res.json();
      setItems(data.items as Asset[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load media");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (open) void fetchAssets();
  }, [open, fetchAssets]);

  useEffect(() => {
    if (!value) {
      setSelectedAsset(null);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/admin/api/assets?search=${encodeURIComponent(value)}`, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled) return;
        const match = (data.items as Asset[]).find((a) => a.id === value);
        if (match) setSelectedAsset(match);
      } catch {
        // ignore — picker remains empty
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [value]);

  const onUpload = useCallback(
    async (files: FileList | File[]) => {
      const list = Array.from(files);
      if (list.length === 0) return;
      setLoading(true);
      setError(null);
      try {
        const fd = new FormData();
        fd.append("file", list[0]);
        fd.append("folder", folder);
        fd.append("altText", "");
        const res = await fetch("/admin/api/assets/upload", { method: "POST", body: fd });
        if (!res.ok) {
          const msg = (await res.json().catch(() => null))?.error ?? `Upload failed (${res.status})`;
          throw new Error(msg);
        }
        const data = await res.json();
        const asset = data.asset as Asset;
        setSelectedAsset(asset);
        onChange(asset.id, asset.url);
        setOpen(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setLoading(false);
      }
    },
    [folder, onChange],
  );

  const fallbackPreviewUrl = normalisePreviewUrl(currentUrl);
  const previewUrl = selectedAsset?.url ?? fallbackPreviewUrl;
  const previewLabel = selectedAsset?.filename ?? (fallbackPreviewUrl ? "Current image (saved earlier)" : null);

  return (
    <div>
      <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{label}</span>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        {previewUrl ? (
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-2 pr-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt={previewLabel ?? "Selected"}
              className="size-16 rounded object-cover"
              onError={(event) => {
                const target = event.currentTarget;
                target.style.opacity = "0.3";
                target.title = "Image could not be loaded — file may have been deleted.";
              }}
            />
            <div className="min-w-0">
              <p className="truncate text-xs font-black text-slate-200">{previewLabel}</p>
              <p className="truncate text-[10px] font-medium text-slate-500" title={previewUrl}>{previewUrl}</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedAsset(null);
                  onChange(null, null);
                }}
                className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-rose-300 hover:text-rose-200"
              >
                <X className="size-3" /> Remove image
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-16 items-center gap-2 rounded-lg border border-dashed border-white/15 bg-white/[0.02] px-3">
            <ImageIcon className="size-4 text-slate-500" />
            <span className="text-xs font-bold text-slate-500">No image set</span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
        >
          <ImageIcon className="size-3.5" /> Choose
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-3 text-xs font-black text-emerald-200 hover:bg-emerald-400/30"
        >
          <Upload className="size-3.5" /> Upload
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,image/avif"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) void onUpload(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={() => setOpen(false)}>
          <div
            className="max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-[#0b0f1a] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">Choose media</h3>
              <button onClick={() => setOpen(false)} className="rounded-md p-1.5 text-slate-400 hover:bg-white/5">
                <X className="size-4" />
              </button>
            </div>
            <div className="border-b border-white/10 p-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search filename or alt text…"
                className="h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm text-slate-200"
              />
              {error && (
                <p className="mt-2 text-xs font-bold text-rose-300">{error}</p>
              )}
            </div>
            <div className="max-h-[55vh] overflow-y-auto p-4">
              {loading ? (
                <p className="py-10 text-center text-sm font-bold text-slate-500">Loading…</p>
              ) : items.length === 0 ? (
                <div className="rounded-lg border border-dashed border-white/10 p-10 text-center text-sm font-bold text-slate-500">
                  No images found. Click <span className="text-emerald-300">Upload</span> above to add one.
                </div>
              ) : (
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedAsset(item);
                          onChange(item.id, item.url);
                          setOpen(false);
                        }}
                        className="group block w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left hover:border-emerald-300/40"
                      >
                        <div className="relative aspect-square bg-black/40">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.url} alt={item.altText ?? item.filename} className="absolute inset-0 size-full object-contain" />
                          {value === item.id && (
                            <span className="absolute right-2 top-2 inline-flex size-6 items-center justify-center rounded-full bg-emerald-400 text-emerald-950">
                              <Check className="size-3.5" />
                            </span>
                          )}
                        </div>
                        <p className="truncate p-2 text-[10px] font-bold text-slate-300">{item.filename}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
