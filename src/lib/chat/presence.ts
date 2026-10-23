/**
 * "Online" and "typing…" for the chat, held in memory.
 *
 * Both are worth nothing a minute from now, so they never touch the database —
 * a keystroke must not cost a write. The map lives on globalThis so a dev
 * hot-reload does not reset it, and it is pruned on every read.
 *
 * Caveat: one process only. Behind several Node workers each would keep its own
 * view, and a user polling worker A would not see typing recorded on worker B.
 * ponytail: single-process map; move to Redis (or a `typingAt` column) if the
 * app is ever run with more than one worker.
 */
const SEEN_MS = 30_000;
const TYPING_MS = 6_000;

type Mark = { seenAt: number; typingUntil: number };

declare global {
  var __ibgramChatPresence: Map<string, Mark> | undefined;
}

const marks: Map<string, Mark> = (globalThis.__ibgramChatPresence ??= new Map());

/** Key is per user per thread: typing is about one conversation, online is not. */
const key = (userId: string, conversationId: string) => `${userId}:${conversationId}`;

function prune() {
  const cutoff = Date.now() - SEEN_MS;
  for (const [id, mark] of marks) if (mark.seenAt < cutoff) marks.delete(id);
}

/** Called whenever the viewer loads a thread — that is what "online" means here. */
export function markSeen(userId: string, conversationId: string) {
  const mark = marks.get(key(userId, conversationId));
  if (mark) mark.seenAt = Date.now();
  else marks.set(key(userId, conversationId), { seenAt: Date.now(), typingUntil: 0 });
  prune();
}

/** Called while the viewer is typing; expires on its own a few seconds later. */
export function markTyping(userId: string, conversationId: string) {
  const now = Date.now();
  const mark = marks.get(key(userId, conversationId));
  if (mark) {
    mark.seenAt = now;
    mark.typingUntil = now + TYPING_MS;
  } else {
    marks.set(key(userId, conversationId), { seenAt: now, typingUntil: now + TYPING_MS });
  }
}

export function presenceOf(userId: string, conversationId: string): { online: boolean; typing: boolean } {
  const mark = marks.get(key(userId, conversationId));
  if (!mark) return { online: false, typing: false };
  const now = Date.now();
  return { online: now - mark.seenAt < SEEN_MS, typing: mark.typingUntil > now };
}
