"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, MessageSquare, Send, Loader2 } from "lucide-react";

type Summary = {
  id: string;
  viewerRole: "student" | "tutor";
  status: string;
  permanent: boolean;
  lastMessageAt: string | null;
  unread: number;
  other: { id: string; name: string; avatarUrl: string | null };
  preview: string | null;
};

type Msg = { id: string; senderId: string; body: string; createdAt: string; mine: boolean };

type Detail = {
  id: string;
  viewerRole: "student" | "tutor";
  status: string;
  permanent: boolean;
  other: { id: string; name: string; avatarUrl: string | null };
  messages: Msg[];
};

const time = (iso: string) => new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

/** Shared by the student and tutor dashboards; the API decides what the viewer can see. */
export function Messages() {
  const [list, setList] = useState<Summary[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const loadList = useCallback(async () => {
    try {
      const res = await fetch("/api/chat/conversations/", { cache: "no-store" });
      if (!res.ok) return;
      const body = await res.json();
      setList(body.conversations ?? []);
      setActiveId((cur) => cur ?? body.conversations?.[0]?.id ?? null);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadDetail = useCallback(async (id: string) => {
    const res = await fetch(`/api/chat/conversations/${id}/`, { cache: "no-store" });
    if (!res.ok) return;
    const body = await res.json();
    setDetail(body.conversation);
  }, []);

  useEffect(() => {
    loadList();
  }, [loadList]);

  // Light polling keeps both sides in sync without running a socket server.
  useEffect(() => {
    if (!activeId) return;
    loadDetail(activeId);
    const timer = setInterval(() => {
      loadDetail(activeId);
      loadList();
    }, 10_000);
    return () => clearInterval(timer);
  }, [activeId, loadDetail, loadList]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [detail?.messages.length]);

  const send = async () => {
    if (!activeId || !draft.trim()) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch(`/api/chat/conversations/${activeId}/messages/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: draft }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Could not send.");
      setDraft("");
      await loadDetail(activeId);
      await loadList();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not send.");
    } finally {
      setSending(false);
    }
  };

  const setStatus = async (status: "active" | "closed") => {
    if (!activeId) return;
    await fetch(`/api/chat/conversations/${activeId}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await loadDetail(activeId);
    await loadList();
  };

  if (loading) {
    return (
      <Card className="flex h-64 items-center justify-center">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      </Card>
    );
  }

  if (list.length === 0) {
    return (
      <Card className="p-10 text-center">
        <MessageSquare className="mx-auto mb-3 size-8 text-muted-foreground" />
        <h3 className="mb-1 font-bold">No conversations yet</h3>
        <p className="text-sm text-muted-foreground">
          A thread opens as soon as a demo class is confirmed, and stays open permanently once a tutor is booked.
        </p>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
      <Card className="divide-y divide-border/60 overflow-hidden p-0">
        {list.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`flex w-full items-start gap-3 p-3 text-left transition-colors ${
              c.id === activeId ? "bg-primary/5" : "hover:bg-muted/40"
            }`}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-foreground">{c.other.name}</span>
                {c.unread > 0 && (
                  <span className="shrink-0 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                    {c.unread}
                  </span>
                )}
              </div>
              <p className="truncate text-xs text-muted-foreground">{c.preview ?? "No messages yet"}</p>
              <div className="mt-1 flex gap-1.5">
                {c.permanent && (
                  <span className="rounded bg-emerald-400/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-300">
                    Booked
                  </span>
                )}
                {c.status === "closed" && (
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
                    Closed
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </Card>

      <Card className="flex h-[32rem] flex-col p-0">
        {detail ? (
          <>
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <div>
                <p className="font-bold text-foreground">{detail.other.name}</p>
                <p className="text-xs text-muted-foreground">
                  {detail.permanent ? "Booked tutor — this chat stays open" : "Demo conversation"}
                </p>
              </div>
              {detail.viewerRole === "tutor" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 rounded-lg text-xs"
                  onClick={() => setStatus(detail.status === "active" ? "closed" : "active")}
                >
                  {detail.status === "active" ? "Close chat" : "Reopen"}
                </Button>
              )}
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto p-4">
              {detail.messages.map((m) => (
                <div key={m.id} className={`flex ${m.mine ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[75%] rounded-2xl px-3.5 py-2 ${
                      m.mine ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.body}</p>
                    <p className={`mt-1 text-[10px] ${m.mine ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {time(m.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {detail.status === "active" ? (
              <div className="border-t border-border/60 p-3">
                {error && <p className="mb-2 text-xs text-destructive">{error}</p>}
                <div className="flex gap-2">
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send();
                      }
                    }}
                    rows={2}
                    placeholder="Write a message…  (Enter to send, Shift+Enter for a new line)"
                    className="flex-1 resize-none rounded-xl border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-primary/50"
                  />
                  <Button onClick={send} disabled={sending || !draft.trim()} className="h-auto rounded-xl px-4">
                    {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 border-t border-border/60 p-4 text-sm text-muted-foreground">
                <Lock className="size-4" /> This conversation is closed.
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
            Select a conversation
          </div>
        )}
      </Card>
    </div>
  );
}
