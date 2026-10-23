"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile, rendered only when a site key is configured.
 *
 * Turnstile rather than reCAPTCHA because it is free at any volume, needs no Google account,
 * and usually solves itself without showing the visitor a puzzle - signup is the last place to
 * add friction for real people.
 *
 * With no NEXT_PUBLIC_TURNSTILE_SITE_KEY this renders nothing and reports no token, and the
 * backend skips verification when it has no secret. So the feature is dormant until both keys
 * exist, and adding them turns it on with no code change.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const holder = useRef<HTMLDivElement | null>(null);
  const widgetId = useRef<string | null>(null);
  // Kept in a ref so re-renders of the parent do not re-run the mount effect and draw a
  // second widget. Synced in an effect rather than assigned during render, which
  // react-hooks/refs forbids - a render-phase mutation is not safe under concurrent
  // rendering, where React may render without committing.
  const onTokenRef = useRef(onToken);
  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!siteKey || !holder.current) return;

    let cancelled = false;

    const render = () => {
      if (cancelled || !holder.current || !window.turnstile || widgetId.current) return;
      widgetId.current = window.turnstile.render(holder.current, {
        sitekey: siteKey,
        theme: "auto",
        callback: (token: string) => onTokenRef.current(token),
        // An expired or failed challenge must clear the token, or the form would submit a
        // stale one and the server would reject it with no explanation.
        "expired-callback": () => onTokenRef.current(""),
        "error-callback": () => onTokenRef.current(""),
      });
    };

    if (window.turnstile) {
      render();
    } else if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = render;
      document.head.appendChild(script);
    } else {
      document.querySelector(`script[src="${SCRIPT_SRC}"]`)?.addEventListener("load", render);
    }

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          // Already gone; nothing to clean up.
        }
        widgetId.current = null;
      }
    };
  }, [siteKey]);

  if (!siteKey) return null;
  return <div ref={holder} className="mt-4 flex justify-center" />;
}
