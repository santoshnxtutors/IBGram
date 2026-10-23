"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import {
  ArrowLeft,
  ArrowDown,
  CalendarClock,
  CheckCheck,
  Check,
  CornerUpLeft,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Mic,
  Paperclip,
  Phone,
  Plus,
  RotateCw,
  Search,
  Send,
  Smile,
  Square,
  Trash2,
  Video,
  X,
} from "lucide-react";

type Party = {
  id: string;
  name: string;
  email?: string;
  avatarUrl: string | null;
  online?: boolean;
  typing?: boolean;
};

type Summary = {
  id: string;
  viewerRole: "student" | "tutor";
  status: string;
  permanent: boolean;
  lastMessageAt: string | null;
  unread: number;
  other: Party;
  preview: string | null;
  previewMine: boolean;
};

type Quote = { id: string; body: string; kind: string; mine: boolean; deletedAt: string | null };

type Msg = {
  id: string;
  senderId: string;
  body: string;
  kind: "text" | "image" | "file" | "audio" | "meet" | "system";
  attachmentUrl: string | null;
  attachmentName: string | null;
  attachmentMime: string | null;
  attachmentSize: number | null;
  meta: { link?: string; startsAt?: string; minutes?: number } | null;
  createdAt: string;
  readAt: string | null;
  deletedAt: string | null;
  replyTo: Quote | null;
  mine: boolean;
  /** Set on a locally-added bubble that has not come back from the server yet. */
  pending?: boolean;
  failed?: boolean;
  /** Kept on a failed bubble so the retry button can send it again. */
  retry?: { text: string; file?: File; replyToId: string | null };
};

type Detail = {
  id: string;
  viewerRole: "student" | "tutor";
  status: string;
  permanent: boolean;
  /** First message that was still unread when the thread was opened. */
  firstUnreadId: string | null;
  other: Party;
  messages: Msg[];
};

type Contact = { id: string; name: string; email: string; avatarUrl: string | null; subject: string | null; conversationId: string | null };

type ContactProfile = {
  role: "student" | "tutor";
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  headline: string | null;
  bio: string | null;
  goals: string | null;
  phone: string | null;
  subjects: string[];
  facts: Array<{ label: string; value: string }>;
  publicUrl: string | null;
  permanent: boolean;
  classes: { total: number; completed: number };
  upcoming: { id: string; subject: string; scheduledAt: string; status: string; meetLink: string | null } | null;
};

const EMOJI = "😀 😂 🙂 😍 🤩 🥳 👍 🙏 👏 💪 🔥 ✨ ✅ ❌ ⏰ 📚 📝 ✏️ 📎 📷 🎓 💡 ❤️ 🎉".split(" ");

const clock = (iso: string) => new Date(iso).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });

/** "Today" / "Yesterday" / "12 Oct 2026" — the separator between day groups. */
function dayLabel(iso: string): string {
  const d = new Date(iso);
  const today = new Date();
  const same = (a: Date, b: Date) => a.toDateString() === b.toDateString();
  if (same(d, today)) return "Today";
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (same(d, yesterday)) return "Yesterday";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/** Sidebar timestamp: time for today, day name this week, date beyond. */
function listTime(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  const age = Date.now() - d.getTime();
  if (d.toDateString() === new Date().toDateString()) return clock(iso);
  if (age < 6 * 864e5) return d.toLocaleDateString("en-IN", { weekday: "short" });
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

const prettyBytes = (n: number | null) =>
  !n ? "" : n < 1024 ? `${n} B` : n < 1048576 ? `${Math.round(n / 1024)} KB` : `${(n / 1048576).toFixed(1)} MB`;

/** Local id for an optimistic bubble; replaced when the thread reloads. */
const tempId = () => `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

const quoteText = (q: Quote) =>
  q.deletedAt ? "This message was deleted" : q.body.trim() || (q.kind === "image" ? "📷 Photo" : q.kind === "audio" ? "🎤 Voice message" : q.kind === "meet" ? "📹 Google Meet" : "📎 Attachment");

/** Short double-beep for an incoming message. No asset to ship or cache. */
function chime() {
  try {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
    gain.connect(ctx.destination);
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1175, ctx.currentTime + 0.12);
    osc.connect(gain);
    osc.start();
    osc.stop(ctx.currentTime + 0.36);
    osc.onended = () => ctx.close();
  } catch {
    // Audio is a nicety — a blocked AudioContext must never break the chat.
  }
}

const URL_RE = /(https?:\/\/[^\s<]+|www\.[^\s<]+)/gi;

/**
 * Message text with links made clickable. Split by a single-capture regex puts
 * the matches at the odd indices — that, not a second `.test()`, is what marks
 * a link here (a /g regex carries `lastIndex` between calls and would lie).
 */
function Linkified({ text, mine }: { text: string; mine: boolean }) {
  const parts = text.split(URL_RE);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={part.startsWith("http") ? part : `https://${part}`}
            target="_blank"
            rel="noreferrer noopener"
            className={`underline underline-offset-2 ${mine ? "text-primary-foreground" : "text-primary"}`}
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Shared by the student and tutor dashboards; the API decides what the viewer can see. */
export function Messages() {
  const [list, setList] = useState<Summary[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [pending, setPending] = useState<Msg[]>([]);
  const [replyTo, setReplyTo] = useState<Msg | null>(null);
  const [firstUnreadId, setFirstUnreadId] = useState<string | null>(null);
  const [newBelow, setNewBelow] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);
  const [isTutor, setIsTutor] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const atBottomRef = useRef(true);
  const countRef = useRef(0);
  const lastSeenIdRef = useRef<string | null>(null);

  const loadList = useCallback(async () => {
    try {
      const res = await fetch("/api/chat/conversations/", { cache: "no-store" });
      if (!res.ok) return;
      const body = await res.json();
      const rows: Summary[] = body.conversations ?? [];
      setList(rows);
      if (rows.some((c) => c.viewerRole === "tutor")) setIsTutor(true);
      setActiveId((cur) => {
        if (cur) return cur;
        const fromUrl = new URLSearchParams(window.location.search).get("c");
        return fromUrl && rows.some((c) => c.id === fromUrl) ? fromUrl : rows[0]?.id ?? null;
      });
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * `settled` is set by the send paths: the server now has the message, so the
   * optimistic bubbles can go. A background poll must NOT clear them, or a
   * bubble vanishes mid-send. Bubbles that failed always stay, to be retried.
   */
  const loadDetail = useCallback(async (id: string, settled = false) => {
    const res = await fetch(`/api/chat/conversations/${id}/`, { cache: "no-store" });
    if (!res.ok) return;
    const body = await res.json();
    const convo: Detail = body.conversation;
    setDetail(convo);
    // Only the first load of a thread reports unread — later polls have marked them read.
    if (convo.firstUnreadId) setFirstUnreadId((cur) => cur ?? convo.firstUnreadId);
    if (settled) setPending((p) => p.filter((m) => m.failed));
  }, []);

  useEffect(() => {
    loadList();
    // The tutor-only actions must show even before the first thread exists.
    fetch("/api/auth/me/", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((b) => setIsTutor(b?.data?.user?.accountType === "tutor"))
      .catch(() => {});
  }, [loadList]);

  // Light polling keeps both sides in sync without running a socket server.
  useEffect(() => {
    if (!activeId) return;
    loadDetail(activeId);
    const timer = setInterval(() => {
      if (document.hidden) return;
      loadDetail(activeId);
      loadList();
    }, 5_000);
    return () => clearInterval(timer);
  }, [activeId, loadDetail, loadList]);

  const messages = useMemo(() => [...(detail?.messages ?? []), ...pending], [detail?.messages, pending]);

  /**
   * Stay pinned to the newest message only when the reader is already there.
   * Scrolled up reading history, they get a "N new" button instead of being
   * yanked to the bottom.
   */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const added = messages.length - countRef.current;
    countRef.current = messages.length;
    if (added <= 0) return;
    const last = messages[messages.length - 1];
    if (atBottomRef.current || last?.mine) {
      el.scrollTop = el.scrollHeight;
      setNewBelow(0);
    } else {
      setNewBelow((n) => n + added);
    }
  }, [messages]);

  // A new message from the other side: chime, and badge the tab title.
  useEffect(() => {
    const last = detail?.messages[detail.messages.length - 1];
    const previous = lastSeenIdRef.current;
    lastSeenIdRef.current = last?.id ?? null;
    if (previous && last && last.id !== previous && !last.mine) chime();
  }, [detail?.messages]);

  useEffect(() => {
    const total = list.reduce((sum, c) => sum + c.unread, 0);
    const base = document.title.replace(/^\(\d+\)\s*/, "");
    document.title = total > 0 ? `(${total}) ${base}` : base;
  }, [list]);

  const openThread = (id: string) => {
    setActiveId(id);
    setDetail(null);
    setPending([]);
    setReplyTo(null);
    setFirstUnreadId(null);
    setNewBelow(0);
    setShowProfile(false);
    setError(null);
    countRef.current = 0;
    atBottomRef.current = true;
  };

  const jumpToLatest = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
    setNewBelow(0);
  };

  /** Sends text; the optimistic bubble disappears when the thread reloads. */
  const sendText = async (text: string, replyToId: string | null) => {
    if (!activeId || !text.trim()) return;
    const temp: Msg = {
      id: tempId(), senderId: "me", body: text.trim(), kind: "text", attachmentUrl: null, attachmentName: null,
      attachmentMime: null, attachmentSize: null, meta: null, createdAt: new Date().toISOString(), readAt: null,
      deletedAt: null, replyTo: null, mine: true, pending: true, retry: { text, replyToId },
    };
    setPending((p) => [...p, temp]);
    setError(null);
    try {
      const res = await fetch(`/api/chat/conversations/${activeId}/messages/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: text, replyToId }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Could not send.");
      await Promise.all([loadDetail(activeId, true), loadList()]);
    } catch (caught) {
      setPending((p) => p.map((m) => (m.id === temp.id ? { ...m, pending: false, failed: true } : m)));
      setError(caught instanceof Error ? caught.message : "Could not send.");
    }
  };

  /** Uploads a photo, file or voice note straight into the thread. */
  const sendFile = async (file: File, caption = "", replyToId: string | null = null) => {
    if (!activeId) return;
    const isImage = file.type.startsWith("image/");
    const temp: Msg = {
      id: tempId(), senderId: "me", body: caption, kind: isImage ? "image" : file.type.startsWith("audio/") ? "audio" : "file",
      attachmentUrl: isImage ? URL.createObjectURL(file) : null, attachmentName: file.name, attachmentMime: file.type,
      attachmentSize: file.size, meta: null, createdAt: new Date().toISOString(), readAt: null, deletedAt: null,
      replyTo: null, mine: true, pending: true, retry: { text: caption, file, replyToId },
    };
    setPending((p) => [...p, temp]);
    setError(null);
    try {
      const form = new FormData();
      form.set("file", file);
      if (caption) form.set("caption", caption);
      if (replyToId) form.set("replyToId", replyToId);
      const res = await fetch(`/api/chat/conversations/${activeId}/attachments/`, { method: "POST", body: form });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Upload failed.");
      await Promise.all([loadDetail(activeId, true), loadList()]);
    } catch (caught) {
      setPending((p) => p.map((m) => (m.id === temp.id ? { ...m, pending: false, failed: true } : m)));
      setError(caught instanceof Error ? caught.message : "Upload failed.");
    }
  };

  /** Re-sends a bubble that failed, and drops the failed copy. */
  const retry = async (message: Msg) => {
    if (!message.retry) return;
    setPending((p) => p.filter((m) => m.id !== message.id));
    const { text, file, replyToId } = message.retry;
    if (file) await sendFile(file, text, replyToId);
    else await sendText(text, replyToId);
  };

  const removeMessage = async (message: Msg) => {
    if (!activeId) return;
    if (message.failed || message.pending) {
      setPending((p) => p.filter((m) => m.id !== message.id));
      return;
    }
    if (!window.confirm("Delete this message for everyone?")) return;
    await fetch(`/api/chat/conversations/${activeId}/messages/${message.id}/`, { method: "DELETE" });
    await Promise.all([loadDetail(activeId, true), loadList()]);
  };

  const createMeet = async (startsAt: string | null, minutes: number, note: string) => {
    if (!activeId) return;
    setError(null);
    const res = await fetch(`/api/chat/conversations/${activeId}/meet/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startsAt, minutes, note }),
    });
    const body = await res.json();
    if (!res.ok) {
      setError(body.error ?? "Could not create the meeting.");
      return;
    }
    await Promise.all([loadDetail(activeId, true), loadList()]);
  };

  const setStatus = async (status: "active" | "closed") => {
    if (!activeId) return;
    await fetch(`/api/chat/conversations/${activeId}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await Promise.all([loadDetail(activeId, true), loadList()]);
  };

  const pingTyping = useCallback(() => {
    if (!activeId) return;
    fetch(`/api/chat/conversations/${activeId}/typing/`, { method: "POST" }).catch(() => {});
  }, [activeId]);

  const startChat = async (payload: { studentId?: string; email?: string }) => {
    const res = await fetch("/api/chat/conversations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await res.json();
    if (!res.ok) return body.error ?? "Could not start the chat.";
    await loadList();
    openThread(body.conversationId);
    setShowNewChat(false);
    return null;
  };

  /** Scroll a quoted message into view and flash it. */
  const jumpTo = (id: string) => {
    const el = document.getElementById(`msg-${id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-2", "ring-primary/60", "rounded-2xl");
    setTimeout(() => el.classList.remove("ring-2", "ring-primary/60", "rounded-2xl"), 1200);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((c) => c.other.name.toLowerCase().includes(q) || (c.preview ?? "").toLowerCase().includes(q));
  }, [list, query]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-border/60 bg-card">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (list.length === 0 && !showNewChat) {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-10 text-center">
        <MessageSquare className="mx-auto mb-3 size-8 text-muted-foreground" />
        <h3 className="mb-1 font-bold">No conversations yet</h3>
        <p className="mx-auto max-w-md text-sm text-muted-foreground">
          A thread opens as soon as a demo class is confirmed, and stays open permanently once a tutor is booked.
        </p>
        {isTutor && (
          <Button className="mt-4 gap-2 rounded-xl font-bold" onClick={() => setShowNewChat(true)}>
            <Plus className="size-4" /> Start a chat with a student
          </Button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid h-[calc(100dvh-15rem)] min-h-[30rem] gap-4 lg:grid-cols-[clamp(260px,26%,340px)_1fr]">
        {/* Thread list — full width on mobile until a chat is open */}
        <aside className={`${activeId ? "hidden lg:flex" : "flex"} min-h-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card`}>
          <div className="flex items-center gap-2 border-b border-border/60 p-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search chats"
                className="h-10 w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 text-sm outline-none focus:border-primary/50"
              />
            </div>
            {isTutor && (
              <button
                type="button"
                onClick={() => setShowNewChat(true)}
                title="New chat"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition hover:opacity-90"
              >
                <Plus className="size-5" />
              </button>
            )}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">No chats match “{query}”.</p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => openThread(c.id)}
                  className={`relative flex w-full items-center gap-3 border-b border-border/40 px-3 py-3 text-left transition-colors ${
                    c.id === activeId ? "bg-primary/10" : "hover:bg-muted/50"
                  }`}
                >
                  {c.id === activeId && <span className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-primary" />}
                  <PersonAvatar src={c.other.avatarUrl} name={c.other.name} className="size-11 text-sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-sm font-bold text-foreground">{c.other.name}</span>
                      <span className={`shrink-0 text-[10px] font-semibold ${c.unread ? "text-primary" : "text-muted-foreground"}`}>
                        {listTime(c.lastMessageAt)}
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center justify-between gap-2">
                      <p className="truncate text-xs text-muted-foreground">
                        {c.previewMine && <span className="mr-1 text-muted-foreground/70">You:</span>}
                        {c.preview ?? "No messages yet"}
                      </p>
                      {c.unread > 0 && (
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
                          {c.unread > 9 ? "9+" : c.unread}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex gap-1.5">
                      {c.permanent && (
                        <span className="rounded bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                          Booked
                        </span>
                      )}
                      {c.status === "closed" && (
                        <span className="rounded bg-muted px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-muted-foreground">
                          Closed
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </aside>

        {/* Thread */}
        <section className={`${activeId ? "flex" : "hidden lg:flex"} relative min-h-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card`}>
          {detail ? (
            <>
              <header className="flex items-center gap-2 border-b border-border/60 bg-linear-to-r from-primary/[0.06] to-transparent px-2.5 py-2.5 sm:gap-3 sm:px-3">
                <button className="shrink-0 rounded-lg p-1 hover:bg-muted lg:hidden" onClick={() => setActiveId(null)} aria-label="Back to chats">
                  <ArrowLeft className="size-5 text-muted-foreground" />
                </button>
                {/* The whole identity block opens the contact panel, like every messenger. */}
                <button
                  type="button"
                  onClick={() => setShowProfile(true)}
                  className="flex min-w-0 flex-1 items-center gap-3 rounded-xl p-1 text-left transition-colors hover:bg-muted/60"
                  title="View profile"
                >
                  <span className="relative shrink-0">
                    <PersonAvatar src={detail.other.avatarUrl} name={detail.other.name} className="size-10 text-sm" />
                    {detail.other.online && (
                      <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-card bg-emerald-500" aria-label="Online" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="truncate font-bold leading-tight text-foreground">{detail.other.name}</span>
                      {detail.permanent && (
                        <span className="hidden shrink-0 rounded bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-emerald-700 sm:inline dark:text-emerald-300">
                          Booked
                        </span>
                      )}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {detail.other.typing ? (
                        <span className="font-semibold text-primary">typing…</span>
                      ) : detail.other.online ? (
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">Online</span>
                      ) : (
                        "Tap for profile and class history"
                      )}
                    </span>
                  </span>
                </button>
                {detail.viewerRole === "tutor" && detail.status === "active" && <MeetButton onCreate={createMeet} />}
                {detail.viewerRole === "tutor" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-9 shrink-0 rounded-xl text-xs font-bold"
                    onClick={() => setStatus(detail.status === "active" ? "closed" : "active")}
                  >
                    {detail.status === "active" ? "Close" : "Reopen"}
                  </Button>
                )}
              </header>

              <div
                ref={scrollRef}
                onScroll={(e) => {
                  const el = e.currentTarget;
                  const near = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
                  atBottomRef.current = near;
                  if (near && newBelow) setNewBelow(0);
                }}
                className="min-h-0 flex-1 space-y-1 overflow-y-auto bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--color-muted-foreground)_18%,transparent)_1px,transparent_0)] [background-size:22px_22px] p-4"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  for (const file of Array.from(e.dataTransfer.files)) sendFile(file, "", replyTo?.id ?? null);
                  setReplyTo(null);
                }}
              >
                {messages.length === 0 && (
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                    <PersonAvatar src={detail.other.avatarUrl} name={detail.other.name} className="size-16 text-xl" />
                    <div>
                      <p className="font-bold text-foreground">{detail.other.name}</p>
                      <p className="mx-auto mt-1 max-w-xs text-sm text-muted-foreground">
                        Say hello — photos, files and voice notes work here, and every message also reaches{" "}
                        {detail.other.name.split(" ")[0]} by email.
                      </p>
                    </div>
                  </div>
                )}
                {messages.map((m, i) => {
                  const prev = messages[i - 1];
                  const newDay = !prev || dayLabel(prev.createdAt) !== dayLabel(m.createdAt);
                  const grouped =
                    !newDay && prev?.mine === m.mine && !m.replyTo && +new Date(m.createdAt) - +new Date(prev.createdAt) < 5 * 60_000;
                  return (
                    <div key={m.id}>
                      {newDay && (
                        <div className="sticky top-0 z-10 my-3 flex justify-center">
                          <span className="rounded-full bg-card/90 px-3 py-1 text-[11px] font-bold text-muted-foreground shadow-sm ring-1 ring-border/60 backdrop-blur">
                            {dayLabel(m.createdAt)}
                          </span>
                        </div>
                      )}
                      {m.id === firstUnreadId && (
                        <div className="my-3 flex items-center gap-2">
                          <span className="h-px flex-1 bg-primary/40" />
                          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-black uppercase tracking-wide text-primary">
                            New messages
                          </span>
                          <span className="h-px flex-1 bg-primary/40" />
                        </div>
                      )}
                      <Bubble
                        message={m}
                        grouped={grouped}
                        onOpenImage={setLightbox}
                        onReply={detail.status === "active" ? setReplyTo : undefined}
                        onDelete={removeMessage}
                        onRetry={retry}
                        onJumpTo={jumpTo}
                      />
                    </div>
                  );
                })}
              </div>

              {newBelow > 0 && (
                <button
                  type="button"
                  onClick={jumpToLatest}
                  className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-black text-primary-foreground shadow-lg"
                >
                  <ArrowDown className="size-3.5" /> {newBelow} new message{newBelow > 1 ? "s" : ""}
                </button>
              )}

              {detail.status === "active" ? (
                <Composer
                  error={error}
                  replyTo={replyTo}
                  onCancelReply={() => setReplyTo(null)}
                  onText={async (text) => {
                    const id = replyTo?.id ?? null;
                    setReplyTo(null);
                    await sendText(text, id);
                  }}
                  onFile={async (file) => {
                    const id = replyTo?.id ?? null;
                    setReplyTo(null);
                    await sendFile(file, "", id);
                  }}
                  onTyping={pingTyping}
                  onDismissError={() => setError(null)}
                />
              ) : (
                <div className="flex items-center gap-2 border-t border-border/60 p-4 text-sm text-muted-foreground">
                  <Lock className="size-4" /> This conversation is closed.
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
              {activeId ? <Loader2 className="size-5 animate-spin" /> : "Select a conversation"}
            </div>
          )}
        </section>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image preview"
        >
          <button className="absolute right-4 top-4 text-white" aria-label="Close">
            <X className="size-7" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="" className="max-h-full max-w-full rounded-lg object-contain" />
        </div>
      )}

      {showProfile && activeId && <ContactPanel conversationId={activeId} onClose={() => setShowProfile(false)} />}

      {showNewChat && <NewChatDialog onClose={() => setShowNewChat(false)} onStart={startChat} onOpen={openThread} />}
    </>
  );
}

/**
 * Who you are talking to: a slide-over with their details and the classes the
 * two of you share. Opens from the thread header.
 */
function ContactPanel({ conversationId, onClose }: { conversationId: string; onClose: () => void }) {
  const [profile, setProfile] = useState<ContactProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/chat/conversations/${conversationId}/profile/`, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((b) => setProfile(b?.profile ?? null))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [conversationId]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={onClose} role="dialog" aria-label="Profile">
      <aside
        className="flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-border/60 bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <h3 className="text-sm font-black uppercase tracking-wide text-muted-foreground">
            {profile?.role === "tutor" ? "Tutor profile" : "Student profile"}
          </h3>
          <button onClick={onClose} aria-label="Close"><X className="size-5 text-muted-foreground" /></button>
        </div>

        {loading ? (
          <div className="flex flex-1 items-center justify-center"><Loader2 className="size-5 animate-spin text-muted-foreground" /></div>
        ) : !profile ? (
          <p className="p-6 text-center text-sm text-muted-foreground">Could not load this profile.</p>
        ) : (
          <div className="space-y-5 p-5">
            <div className="flex flex-col items-center text-center">
              <PersonAvatar src={profile.avatarUrl} name={profile.name} className="size-24 text-2xl" />
              <h4 className="mt-3 text-xl font-black text-foreground">{profile.name}</h4>
              {profile.headline && <p className="mt-0.5 text-sm font-medium text-muted-foreground">{profile.headline}</p>}
              {profile.permanent && (
                <span className="mt-2 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  Booked — permanent chat
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border/60 p-3 text-center">
                <p className="text-2xl font-black text-foreground">{profile.classes.total}</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Classes booked</p>
              </div>
              <div className="rounded-xl border border-border/60 p-3 text-center">
                <p className="text-2xl font-black text-foreground">{profile.classes.completed}</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Completed</p>
              </div>
            </div>

            {profile.upcoming && (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-3">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-primary">
                  <CalendarClock className="size-3.5" /> Next class
                </p>
                <p className="mt-1 font-bold text-foreground">{profile.upcoming.subject}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(profile.upcoming.scheduledAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                </p>
                {profile.upcoming.meetLink && (
                  <a
                    href={profile.upcoming.meetLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-black text-primary-foreground"
                  >
                    <Video className="size-3.5" /> Join
                  </a>
                )}
              </div>
            )}

            {profile.subjects.length > 0 && (
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-muted-foreground">
                  <GraduationCap className="size-3.5" /> Subjects
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profile.subjects.map((s) => (
                    <span key={s} className="rounded-lg bg-muted px-2 py-1 text-xs font-semibold text-foreground">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {profile.facts.length > 0 && (
              <dl className="space-y-2 rounded-xl border border-border/60 p-3">
                {profile.facts.map((f) => (
                  <div key={f.label} className="flex gap-3 text-sm">
                    <dt className="w-24 shrink-0 font-bold text-muted-foreground">{f.label}</dt>
                    <dd className="min-w-0 font-medium text-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {(profile.bio || profile.goals) && (
              <div>
                <p className="mb-1 text-xs font-black uppercase tracking-wide text-muted-foreground">
                  {profile.goals ? "Goals" : "About"}
                </p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{profile.goals ?? profile.bio}</p>
              </div>
            )}

            <div className="space-y-1.5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2.5 rounded-xl border border-border/60 px-3 py-2.5 text-sm font-semibold hover:bg-muted">
                <Mail className="size-4 text-muted-foreground" /> <span className="min-w-0 truncate">{profile.email}</span>
              </a>
              {profile.phone && (
                <a href={`tel:${profile.phone}`} className="flex items-center gap-2.5 rounded-xl border border-border/60 px-3 py-2.5 text-sm font-semibold hover:bg-muted">
                  <Phone className="size-4 text-muted-foreground" /> {profile.phone}
                </a>
              )}
              {profile.publicUrl && (
                <a href={profile.publicUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 rounded-xl border border-border/60 px-3 py-2.5 text-sm font-semibold hover:bg-muted">
                  <ExternalLink className="size-4 text-muted-foreground" /> View full profile
                </a>
              )}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

/** One message. Text, photo, file, voice note or a Meet card. */
function Bubble({
  message: m,
  grouped,
  onOpenImage,
  onReply,
  onDelete,
  onRetry,
  onJumpTo,
}: {
  message: Msg;
  grouped: boolean;
  onOpenImage: (url: string) => void;
  onReply?: (message: Msg) => void;
  onDelete: (message: Msg) => void;
  onRetry: (message: Msg) => void;
  onJumpTo: (id: string) => void;
}) {
  const mine = m.mine;
  const tone = mine
    ? "bg-primary text-primary-foreground rounded-br-sm"
    : "bg-background text-foreground border border-border/60 rounded-bl-sm";
  const meta = mine ? "text-primary-foreground/70" : "text-muted-foreground";

  if (m.deletedAt) {
    return (
      <div id={`msg-${m.id}`} className={`flex ${mine ? "justify-end" : "justify-start"} ${grouped ? "mt-0.5" : "mt-2"}`}>
        <div className="max-w-[85%] rounded-2xl border border-dashed border-border px-3 py-2 text-sm italic text-muted-foreground sm:max-w-[72%]">
          This message was deleted
        </div>
      </div>
    );
  }

  const actions = (
    <div className="flex shrink-0 items-center gap-0.5 self-center opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100 max-sm:opacity-100">
      {m.failed && (
        <button type="button" onClick={() => onRetry(m)} title="Try again" className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-muted">
          <RotateCw className="size-3.5" />
        </button>
      )}
      {onReply && !m.pending && !m.failed && (
        <button type="button" onClick={() => onReply(m)} title="Reply" className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-muted">
          <CornerUpLeft className="size-3.5" />
        </button>
      )}
      {mine && (
        <button type="button" onClick={() => onDelete(m)} title="Delete" className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-destructive">
          <Trash2 className="size-3.5" />
        </button>
      )}
    </div>
  );

  return (
    <div id={`msg-${m.id}`} className={`group flex gap-1 ${mine ? "justify-end" : "justify-start"} ${grouped ? "mt-0.5" : "mt-2"}`}>
      {mine && actions}
      <div className={`max-w-[85%] rounded-2xl px-2.5 py-2 shadow-sm sm:max-w-[72%] ${tone} ${m.failed ? "opacity-60 ring-1 ring-destructive" : ""}`}>
        {m.replyTo && (
          <button
            type="button"
            onClick={() => onJumpTo(m.replyTo!.id)}
            className={`mb-1.5 block w-full rounded-lg border-l-2 px-2 py-1 text-left text-xs ${
              mine ? "border-primary-foreground/60 bg-primary-foreground/10" : "border-primary/60 bg-muted"
            }`}
          >
            <span className="block font-bold">{m.replyTo.mine ? "You" : "Them"}</span>
            <span className="line-clamp-2 opacity-80">{quoteText(m.replyTo)}</span>
          </button>
        )}

        {m.kind === "image" && m.attachmentUrl && (
          <button type="button" onClick={() => onOpenImage(m.attachmentUrl!)} className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.attachmentUrl} alt={m.attachmentName ?? "Photo"} className="max-h-72 w-full rounded-xl object-cover" />
          </button>
        )}

        {m.kind === "audio" && m.attachmentUrl && (
          <audio controls preload="none" src={m.attachmentUrl} className="h-10 w-56 max-w-full sm:w-64" />
        )}

        {m.kind === "file" && m.attachmentUrl && (
          <a
            href={m.attachmentUrl}
            target="_blank"
            rel="noreferrer"
            download={m.attachmentName ?? undefined}
            className={`flex items-center gap-2.5 rounded-xl px-2 py-1.5 ${mine ? "bg-primary-foreground/10" : "bg-muted"}`}
          >
            <FileText className="size-7 shrink-0 opacity-80" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{m.attachmentName ?? "Attachment"}</span>
              <span className={`block text-[11px] ${meta}`}>{prettyBytes(m.attachmentSize)}</span>
            </span>
            <Download className="size-4 shrink-0 opacity-70" />
          </a>
        )}

        {m.kind === "meet" && m.meta?.link && (
          <div className={`rounded-xl px-2.5 py-2 ${mine ? "bg-primary-foreground/10" : "bg-muted"}`}>
            <p className="flex items-center gap-2 text-sm font-bold">
              <Video className="size-4" /> Google Meet class
            </p>
            {m.meta.startsAt && (
              <p className={`mt-0.5 text-xs ${meta}`}>
                {new Date(m.meta.startsAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                {m.meta.minutes ? ` · ${m.meta.minutes} min` : ""}
              </p>
            )}
            <a
              href={m.meta.link}
              target="_blank"
              rel="noreferrer"
              className={`mt-2 inline-flex rounded-lg px-3 py-1.5 text-xs font-black ${
                mine ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
              }`}
            >
              Join the class
            </a>
          </div>
        )}

        {m.body && (
          <p className="whitespace-pre-wrap break-words px-1 text-sm leading-relaxed">
            <Linkified text={m.body} mine={mine} />
          </p>
        )}

        <p className={`mt-0.5 flex items-center justify-end gap-1 px-1 text-[10px] ${meta}`}>
          {m.failed ? "Not sent" : clock(m.createdAt)}
          {mine && !m.failed && (m.pending ? <Check className="size-3 opacity-50" /> : m.readAt ? <CheckCheck className="size-3" /> : <Check className="size-3" />)}
        </p>
      </div>
      {!mine && actions}
    </div>
  );
}

/** Text box with emoji, attachments, voice notes and the reply preview. */
function Composer({
  error,
  replyTo,
  onCancelReply,
  onText,
  onFile,
  onTyping,
  onDismissError,
}: {
  error: string | null;
  replyTo: Msg | null;
  onCancelReply: () => void;
  onText: (text: string) => Promise<void>;
  onFile: (file: File) => Promise<void>;
  onTyping: () => void;
  onDismissError: () => void;
}) {
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [seconds, setSeconds] = useState(0);
  /** Set when the recording is cancelled, so onstop throws the audio away. */
  const discardRef = useRef(false);
  const typingAtRef = useRef(0);
  const fileRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  // Auto-grow the textarea up to ~5 lines, like every messenger does.
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [draft]);

  // Focus the box when a reply is started, so you can type straight away.
  useEffect(() => {
    if (replyTo) textRef.current?.focus();
  }, [replyTo]);

  useEffect(() => {
    if (!recorder) return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [recorder]);

  const send = async () => {
    const text = draft.trim();
    if (!text || busy) return;
    setBusy(true);
    setDraft("");
    await onText(text);
    setBusy(false);
  };

  const pick = async (files: FileList | File[] | null | undefined) => {
    const list = files ? Array.from(files) : [];
    if (list.length === 0) return;
    setBusy(true);
    for (const file of list) await onFile(file);
    setBusy(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Chrome/Firefox give webm, Safari gives mp4 — ask for whichever is supported.
      const mime = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
      const rec = new MediaRecorder(stream, { mimeType: mime });
      const chunks: BlobPart[] = [];
      rec.ondataavailable = (e) => e.data.size > 0 && chunks.push(e.data);
      rec.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        if (discardRef.current) return;
        const ext = mime === "audio/webm" ? "weba" : "m4a";
        const blob = new Blob(chunks, { type: mime });
        if (blob.size > 0) await pick([new File([blob], `voice-note-${Date.now()}.${ext}`, { type: mime })]);
      };
      discardRef.current = false;
      rec.start();
      setSeconds(0);
      setRecorder(rec);
    } catch {
      alert("Microphone access was blocked, so a voice note cannot be recorded.");
    }
  };

  const stopRecording = (keep: boolean) => {
    if (!recorder) return;
    discardRef.current = !keep;
    recorder.stop();
    setRecorder(null);
  };

  return (
    <div className="border-t border-border/60 p-2.5">
      {error && (
        <p className="mb-2 flex items-center justify-between gap-2 rounded-lg bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">
          {error}
          <button onClick={onDismissError} aria-label="Dismiss"><X className="size-3.5" /></button>
        </p>
      )}

      {replyTo && (
        <div className="mb-2 flex items-start gap-2 rounded-xl border-l-2 border-primary bg-muted/60 px-3 py-2">
          <div className="min-w-0 flex-1 text-xs">
            <p className="font-bold text-primary">Replying to {replyTo.mine ? "yourself" : "them"}</p>
            <p className="line-clamp-2 text-muted-foreground">{quoteText(replyTo)}</p>
          </div>
          <button onClick={onCancelReply} aria-label="Cancel reply"><X className="size-4 text-muted-foreground" /></button>
        </div>
      )}

      {emoji && (
        <div className="mb-2 flex flex-wrap gap-1 rounded-xl border border-border/60 bg-background/70 p-2">
          {EMOJI.map((e) => (
            <button
              key={e}
              type="button"
              className="rounded-lg px-1.5 py-1 text-lg hover:bg-muted"
              onClick={() => {
                setDraft((d) => d + e);
                textRef.current?.focus();
              }}
            >
              {e}
            </button>
          ))}
        </div>
      )}

      {recorder ? (
        <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3 py-2.5">
          <span className="size-2.5 animate-pulse rounded-full bg-destructive" />
          <span className="flex-1 text-sm font-semibold tabular-nums">
            Recording… {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
          </span>
          <Button size="sm" variant="outline" className="h-9 rounded-xl text-xs font-bold" onClick={() => stopRecording(false)}>
            Cancel
          </Button>
          <Button size="sm" className="h-9 gap-1.5 rounded-xl text-xs font-bold" onClick={() => stopRecording(true)}>
            <Square className="size-3.5" /> Send
          </Button>
        </div>
      ) : (
        <div className="flex items-end gap-2">
          {/* One pill holds the actions and the box, so the composer reads as a single control. */}
          <div className="flex flex-1 items-end gap-1 rounded-[1.4rem] border border-border bg-background/70 px-1.5 py-1 transition-colors focus-within:border-primary/50">
            <button type="button" onClick={() => setEmoji((v) => !v)} title="Emoji" className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-muted ${emoji ? "text-primary" : "text-muted-foreground"}`}>
              <Smile className="size-5" />
            </button>
            <button type="button" onClick={() => fileRef.current?.click()} title="Attach files" className="grid size-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted">
              <Paperclip className="size-5" />
            </button>
            <input ref={fileRef} type="file" multiple className="hidden" onChange={(e) => { pick(e.target.files); e.target.value = ""; }} />

            <textarea
            ref={textRef}
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              // Tell the other side at most once every 3s, not once per keystroke.
              if (Date.now() - typingAtRef.current > 3000) {
                typingAtRef.current = Date.now();
                onTyping();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            onPaste={(e) => {
              if (e.clipboardData.files.length > 0) {
                e.preventDefault();
                pick(e.clipboardData.files);
              }
            }}
              rows={1}
              placeholder="Write a message…"
              className="max-h-[120px] min-h-[36px] flex-1 resize-none bg-transparent px-1 py-2 text-sm outline-none placeholder:text-muted-foreground/70"
            />
          </div>

          {draft.trim() ? (
            <Button onClick={send} disabled={busy} className="size-11 shrink-0 rounded-full p-0 shadow-md" title="Send">
              {busy ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            </Button>
          ) : (
            <Button onClick={startRecording} disabled={busy} className="size-11 shrink-0 rounded-full p-0 shadow-md" title="Record a voice note">
              {busy ? <Loader2 className="size-4 animate-spin" /> : <Mic className="size-4" />}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

/** Tutor-only: start a Google Meet now, or schedule one, and post it to the chat. */
function MeetButton({ onCreate }: { onCreate: (startsAt: string | null, minutes: number, note: string) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [when, setWhen] = useState("");
  const [minutes, setMinutes] = useState(60);
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  const create = async (startsAt: string | null) => {
    setBusy(true);
    await onCreate(startsAt, minutes, note);
    setBusy(false);
    setOpen(false);
    setNote("");
  };

  return (
    <>
      <Button size="sm" className="h-9 shrink-0 gap-1.5 rounded-xl text-xs font-bold" onClick={() => setOpen(true)}>
        <Video className="size-4" /> <span className="hidden sm:inline">Google Meet</span>
      </Button>
      {open && (
        <Dialog title="Start a class" onClose={() => setOpen(false)}>
          <p className="text-sm text-muted-foreground">
            Creates a Google Meet link, invites you both by email and posts it in the chat.
          </p>
          <label className="mt-4 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Starts at</label>
          <input
            type="datetime-local"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary/50"
          />
          <label className="mt-3 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Length</label>
          <select
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary/50"
          >
            {[30, 45, 60, 90, 120].map((n) => (
              <option key={n} value={n}>{n} minutes</option>
            ))}
          </select>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Message to send with the link (optional)"
            className="mt-3 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary/50"
          />
          <div className="mt-5 flex flex-wrap gap-2">
            <Button onClick={() => create(null)} disabled={busy} className="flex-1 gap-2 rounded-xl font-bold">
              {busy ? <Loader2 className="size-4 animate-spin" /> : <Video className="size-4" />} Start now
            </Button>
            <Button variant="outline" onClick={() => create(when || null)} disabled={busy || !when} className="flex-1 rounded-xl font-bold">
              Schedule
            </Button>
          </div>
        </Dialog>
      )}
    </>
  );
}

/** Tutor-only: pick a student from their bookings, or add one by email. */
function NewChatDialog({
  onClose,
  onStart,
  onOpen,
}: {
  onClose: () => void;
  onStart: (payload: { studentId?: string; email?: string }) => Promise<string | null>;
  onOpen: (conversationId: string) => void;
}) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/chat/contacts/", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { contacts: [] }))
      .then((b) => setContacts(b.contacts ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const start = async (payload: { studentId?: string; email?: string }) => {
    setBusy(true);
    setError(await onStart(payload));
    setBusy(false);
  };

  return (
    <Dialog title="New chat" onClose={onClose}>
      {error && <p className="mb-3 rounded-lg bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">{error}</p>}

      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Your students</p>
      <div className="mt-2 max-h-64 space-y-1 overflow-y-auto">
        {loading ? (
          <p className="flex items-center gap-2 py-3 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Loading…</p>
        ) : contacts.length === 0 ? (
          <p className="py-2 text-sm text-muted-foreground">No students have booked you yet — add one by email below.</p>
        ) : (
          contacts.map((c) => (
            <button
              key={c.id}
              disabled={busy}
              onClick={() => (c.conversationId ? (onOpen(c.conversationId), onClose()) : start({ studentId: c.id }))}
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-muted disabled:opacity-50"
            >
              <PersonAvatar src={c.avatarUrl} name={c.name} className="size-9 text-xs" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">{c.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{c.subject ?? c.email}</span>
              </span>
              <span className="shrink-0 text-xs font-bold text-primary">{c.conversationId ? "Open" : "Start"}</span>
            </button>
          ))
        )}
      </div>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">Or add by email</p>
      <form
        className="mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (email.trim()) start({ email: email.trim() });
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="student@email.com"
          className="h-11 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary/50"
        />
        <Button type="submit" disabled={busy || !email.trim()} className="h-11 rounded-xl px-4 font-bold">
          {busy ? <Loader2 className="size-4 animate-spin" /> : "Add"}
        </Button>
      </form>
      <p className="mt-2 text-xs text-muted-foreground">The student needs an IB Gram account with that email.</p>
    </Dialog>
  );
}

function Dialog({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose} role="dialog" aria-label={title}>
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-black">{title}</h3>
          <button onClick={onClose} aria-label="Close"><X className="size-5 text-muted-foreground" /></button>
        </div>
        {children}
      </div>
    </div>
  );
}
