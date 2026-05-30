"use client";

import { useState } from "react";
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
  TextArea,
  SelectInput,
} from "../_components/CmsCrudShell";
import { MediaPicker } from "../_components/MediaPicker";

type Item = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  authorName: string | null;
  status: string;
  indexFlag: string;
  publishedAt: string | null;
  tags: string[];
  featuredImageId?: string | null;
  ogImageAssetId?: string | null;
  updatedAt: string;
};

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
];

const INDEX_OPTIONS = [
  { value: "auto", label: "Auto" },
  { value: "index", label: "Index" },
  { value: "noindex", label: "Noindex" },
];

export function BlogClient({ items }: { items: Item[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<Item>("/admin/api/blog", router);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);
  const [featuredImageId, setFeaturedImageId] = useState<string | null>(null);
  const [ogImageId, setOgImageId] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {!creating && !editing && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold text-slate-500">{items.length} posts</p>
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-400/20 px-4 text-sm font-black text-emerald-200 hover:bg-emerald-400/30"
          >
            <Plus className="size-4" aria-hidden /> New post
          </button>
        </div>
      )}

      {(creating || editing) && (
        <form
          onSubmit={(e) =>
            submit(e, editing ? { method: "PATCH", id: editing.id } : { method: "POST" }, {
              transform: (data) => ({
                ...data,
                featuredImageId: featuredImageId ?? editing?.featuredImageId ?? null,
                ogImageAssetId: ogImageId ?? editing?.ogImageAssetId ?? null,
              }),
            }).then((res) => {
              if (res) {
                setEditing(null);
                setCreating(false);
                setFeaturedImageId(null);
                setOgImageId(null);
              }
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            {editing ? `Edit "${editing.title}"` : "New blog post"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <FieldLabel>Title *</FieldLabel>
              <TextInput name="title" defaultValue={editing?.title} required />
            </label>
            <label>
              <FieldLabel>Slug *</FieldLabel>
              <TextInput name="slug" defaultValue={editing?.slug} placeholder="ib-math-aa-iA-checklist" required />
            </label>
            <label>
              <FieldLabel>Author name</FieldLabel>
              <TextInput name="authorName" defaultValue={editing?.authorName ?? ""} />
            </label>
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing?.status ?? "draft"} options={STATUS_OPTIONS} />
            </label>
            <label>
              <FieldLabel>Index flag</FieldLabel>
              <SelectInput name="indexFlag" defaultValue={editing?.indexFlag ?? "auto"} options={INDEX_OPTIONS} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Excerpt</FieldLabel>
              <TextArea name="excerpt" defaultValue={editing?.excerpt ?? ""} rows={3} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Body *</FieldLabel>
              <TextArea name="body" defaultValue={editing?.body} rows={10} required />
            </label>
            <label>
              <FieldLabel>Meta title</FieldLabel>
              <TextInput name="metaTitle" defaultValue={""} placeholder="SEO title for search" />
            </label>
            <label>
              <FieldLabel>Reading time (min)</FieldLabel>
              <TextInput name="readingTimeMinutes" type="number" />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Meta description</FieldLabel>
              <TextArea name="metaDescription" rows={2} placeholder="Up to ~160 chars" />
            </label>
            <div>
              <MediaPicker
                label="Featured image"
                value={featuredImageId ?? editing?.featuredImageId ?? null}
                onChange={(id) => setFeaturedImageId(id)}
                folder="blog"
              />
            </div>
            <div>
              <MediaPicker
                label="OG image (social)"
                value={ogImageId ?? editing?.ogImageAssetId ?? null}
                onChange={(id) => setOgImageId(id)}
                folder="blog-og"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <FormSaveButton busy={busy} label={editing ? "Save changes" : "Create"} />
            <CancelButton
              onClick={() => {
                setEditing(null);
                setCreating(false);
              }}
            />
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No posts yet. Create one above.
        </div>
      ) : (
        <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-12 items-start gap-3 p-4">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-black text-slate-100">{item.title}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${
                      item.status === "published" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">/{item.slug}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300">{item.excerpt ?? item.body.slice(0, 220)}</p>
                {item.publishedAt && <p className="mt-1 text-[10px] font-bold text-slate-500">Published {item.publishedAt.slice(0, 10)}</p>}
              </div>
              <div className="col-span-12 flex justify-end gap-2 md:col-span-4">
                <button
                  onClick={() => {
                    setEditing(item);
                    setCreating(false);
                  }}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                >
                  <Edit3 className="size-3.5" aria-hidden /> Edit
                </button>
                <DeleteIconButton onClick={() => remove(item.id, item.title)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
