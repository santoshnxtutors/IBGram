"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit3, ExternalLink, FileText, Mail, Phone } from "lucide-react";
import {
  CancelButton,
  CrudToast,
  DeleteIconButton,
  FieldLabel,
  FormSaveButton,
  SelectInput,
  TextArea,
  useCrudForm,
} from "../_components/CmsCrudShell";

type ApplicationItem = {
  id: string;
  jobId: string | null;
  jobTitleSnapshot: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  currentLocation: string | null;
  currentRole: string | null;
  experienceYears: number | null;
  noticePeriod: string | null;
  expectedCompensation: string | null;
  linkedInUrl: string | null;
  portfolioUrl: string | null;
  resumeUrl: string | null;
  resumeFilename: string | null;
  photoUrl: string | null;
  photoFilename: string | null;
  answersJson: unknown;
  adminNotes: string | null;
  createdAt: string;
  job: { slug: string; title: string; department: string } | null;
};

const STATUS_OPTIONS = [
  { value: "received", label: "Received" },
  { value: "reviewing", label: "Reviewing" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "rejected", label: "Rejected" },
  { value: "hired", label: "Hired" },
  { value: "withdrawn", label: "Withdrawn" },
];

function statusClass(status: string) {
  if (status === "shortlisted" || status === "hired") return "bg-emerald-400/15 text-emerald-300";
  if (status === "rejected" || status === "withdrawn") return "bg-rose-400/15 text-rose-200";
  if (status === "reviewing") return "bg-sky-400/15 text-sky-200";
  return "bg-amber-400/15 text-amber-200";
}

function answerText(answersJson: unknown, key: "availability") {
  if (!answersJson || typeof answersJson !== "object") return null;
  const value = (answersJson as Record<string, unknown>)[key];
  return typeof value === "string" && value.trim() ? value : null;
}

function externalHref(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function JobApplicationsClient({ items }: { items: ApplicationItem[] }) {
  const router = useRouter();
  const { toast, busy, submit, remove } = useCrudForm<ApplicationItem>("/admin/api/job-applications", router);
  const [editing, setEditing] = useState<ApplicationItem | null>(null);

  return (
    <div className="space-y-5">
      <CrudToast toast={toast} />

      {editing && (
        <form
          onSubmit={(event) =>
            submit(event, {
              method: "PATCH",
              id: editing.id,
              transform: (data) => ({
                status: data.status,
                adminNotes: typeof data.adminNotes === "string" ? data.adminNotes : null,
              }),
            }).then((res) => {
              if (res) setEditing(null);
            })
          }
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300">
            Review {editing.firstName} {editing.lastName}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <FieldLabel>Status</FieldLabel>
              <SelectInput name="status" defaultValue={editing.status} options={STATUS_OPTIONS} />
            </label>
            <label className="sm:col-span-2">
              <FieldLabel>Admin notes</FieldLabel>
              <TextArea name="adminNotes" defaultValue={editing.adminNotes ?? ""} rows={5} />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <FormSaveButton busy={busy} label="Save review" />
            <CancelButton onClick={() => setEditing(null)} />
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/10 p-12 text-center text-sm font-bold text-slate-500">
          No job applications yet.
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => {
            const name = `${item.firstName} ${item.lastName}`;
            const availability = answerText(item.answersJson, "availability");
            return (
              <li key={item.id} className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex min-w-0 gap-3">
                    {item.photoUrl && (
                      <Link
                        href={item.photoUrl}
                        target="_blank"
                        className="relative mt-0.5 size-14 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
                      >
                        <Image src={item.photoUrl} alt={name} fill sizes="56px" className="object-cover" unoptimized />
                      </Link>
                    )}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-black text-slate-100">{name}</h3>
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] ${statusClass(
                            item.status,
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-slate-400">
                        {item.job?.title ?? item.jobTitleSnapshot}
                        {item.job ? ` - ${item.job.department}` : ""}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                        <a href={`mailto:${item.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                          <Mail className="size-3.5" /> {item.email}
                        </a>
                        {item.phone && (
                          <a href={`tel:${item.phone}`} className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                            <Phone className="size-3.5" /> {item.phone}
                          </a>
                        )}
                        <span>Applied {new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.resumeUrl && (
                      <Link
                        href={item.resumeUrl}
                        target="_blank"
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                      >
                        <FileText className="size-3.5" /> Resume
                      </Link>
                    )}
                    {item.photoUrl && (
                      <Link
                        href={item.photoUrl}
                        target="_blank"
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                      >
                        <FileText className="size-3.5" /> Photo
                      </Link>
                    )}
                    {item.job?.slug && (
                      <Link
                        href={`/jobs/${item.job.slug}`}
                        target="_blank"
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                      >
                        <ExternalLink className="size-3.5" /> Role
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => setEditing(item)}
                      className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-3 text-xs font-bold text-slate-200 hover:bg-white/10"
                    >
                      <Edit3 className="size-3.5" /> Review
                    </button>
                    <DeleteIconButton onClick={() => remove(item.id, name)} />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 text-sm md:grid-cols-2">
                  <div className="space-y-2 text-slate-300">
                    <p>
                      <span className="font-black text-slate-500">Location:</span> {item.currentLocation ?? "Not shared"}
                    </p>
                    <p>
                      <span className="font-black text-slate-500">Current role:</span> {item.currentRole ?? "Not shared"}
                    </p>
                    <p>
                      <span className="font-black text-slate-500">Experience:</span>{" "}
                      {item.experienceYears !== null ? `${item.experienceYears} years` : "Not shared"}
                    </p>
                    <p>
                      <span className="font-black text-slate-500">Notice:</span> {item.noticePeriod ?? "Not shared"}
                    </p>
                    <p>
                      <span className="font-black text-slate-500">Compensation:</span>{" "}
                      {item.expectedCompensation ?? "Not shared"}
                    </p>
                    {item.linkedInUrl && (
                      <p>
                        <a
                          href={externalHref(item.linkedInUrl)}
                          target="_blank"
                          className="font-black text-emerald-300 hover:text-amber-200"
                        >
                          LinkedIn
                        </a>
                      </p>
                    )}
                    {item.portfolioUrl && (
                      <p>
                        <a
                          href={externalHref(item.portfolioUrl)}
                          target="_blank"
                          className="font-black text-emerald-300 hover:text-amber-200"
                        >
                          Portfolio
                        </a>
                      </p>
                    )}
                  </div>
                  <div className="space-y-3 text-sm leading-6 text-slate-300">
                    {availability && (
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Availability</p>
                        <p className="mt-1 whitespace-pre-wrap">{availability}</p>
                      </div>
                    )}
                    {item.adminNotes && (
                      <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Admin notes</p>
                        <p className="mt-1 whitespace-pre-wrap text-emerald-50">{item.adminNotes}</p>
                      </div>
                    )}
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
