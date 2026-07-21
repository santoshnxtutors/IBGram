"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, Loader2 } from "lucide-react";
import { updateBooking } from "@/lib/bookings/api";

type Props = {
  bookingId: string;
  subject: string;
  displayName: string;
  otherPartyName: string;
  backHref: string;
};

const JITSI_DOMAIN = "meet.jit.si";
const SCRIPT_SRC = `https://${JITSI_DOMAIN}/external_api.js`;

declare global {
  interface Window {
    JitsiMeetExternalAPI?: new (domain: string, options: Record<string, unknown>) => {
      addEventListener: (event: string, handler: (...args: unknown[]) => void) => void;
      executeCommand: (command: string, ...args: unknown[]) => void;
      dispose: () => void;
    };
  }
}

function loadJitsiScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.JitsiMeetExternalAPI) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("load failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load the video engine."));
    document.body.appendChild(script);
  });
}

export function DemoRoom({ bookingId, subject, displayName, otherPartyName, backHref }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const endClass = () => {
    if (leftRef.current) return;
    leftRef.current = true;
    // Save the class to both profiles' history (best-effort), then leave.
    updateBooking(bookingId, "completed").catch(() => {});
    router.push(backHref);
    router.refresh();
  };

  useEffect(() => {
    let cancelled = false;
    let api: InstanceType<NonNullable<Window["JitsiMeetExternalAPI"]>> | null = null;

    loadJitsiScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.JitsiMeetExternalAPI) return;
        api = new window.JitsiMeetExternalAPI(JITSI_DOMAIN, {
          roomName: `IBGramDemo-${bookingId}`,
          parentNode: containerRef.current,
          width: "100%",
          height: "100%",
          userInfo: { displayName },
          configOverwrite: {
            prejoinPageEnabled: false,
            disableDeepLinking: true,
            startWithAudioMuted: false,
            startWithVideoMuted: false,
          },
          interfaceConfigOverwrite: {
            MOBILE_APP_PROMO: false,
            SHOW_JITSI_WATERMARK: false,
            DISABLE_DEEP_LINKING: true,
          },
        });
        api.addEventListener("videoConferenceJoined", () => setStatus("ready"));
        api.addEventListener("readyToClose", endClass);
        api.addEventListener("videoConferenceLeft", endClass);
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      try {
        api?.dispose();
      } catch {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingId, displayName]);

  return (
    <div className="flex h-screen flex-col bg-[#0b0f19]">
      <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={endClass}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="size-4" /> <span className="hidden sm:inline">Leave</span>
          </button>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 truncate text-sm font-black text-white">
              <BookOpen className="size-4 text-primary shrink-0" /> {subject}
            </p>
            <p className="truncate text-xs text-white/60">Demo class with {otherPartyName}</p>
          </div>
        </div>
        <span className="hidden shrink-0 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary sm:inline">Live</span>
      </header>

      <div className="relative flex-1">
        {status !== "ready" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#0b0f19] text-white/70">
            {status === "error" ? (
              <>
                <p className="font-bold text-white">Could not start the class.</p>
                <p className="text-sm">Check your connection and try again, or rejoin from your dashboard.</p>
              </>
            ) : (
              <>
                <Loader2 className="size-7 animate-spin text-primary" />
                <p className="text-sm font-medium">Connecting to your live class…</p>
              </>
            )}
          </div>
        )}
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  );
}
