"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/dashboard/ui";
import { Check, Copy, Download, ExternalLink, MessageCircle, Share2 } from "lucide-react";

/**
 * The tutor's review collection kit: a public link plus a QR code to show in
 * class, on a poster or over a screen share. Submitted reviews wait for the IB
 * Gram team to publish them.
 *
 * ponytail: the QR bitmap comes from goqr.me rather than a bundled encoder —
 * swap in a `qrcode` dependency if the link must work with no network.
 */
const qrSrc = (url: string, size: number) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=12&data=${encodeURIComponent(url)}`;

/** The public site, not window.location: a shared link must never say localhost. */
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ibgram.com").replace(/\/$/, "");

export function ReviewShare({ slug, displayName }: { slug: string; displayName: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE}/review/${slug}`;
  const message = `Hi! If my sessions helped you, please leave a short review for me on IB Gram — it takes a minute: ${url}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (http, or an older browser): the input below is selectable.
    }
  };

  // Cross-origin downloads ignore the `download` attribute, so fetch the PNG first.
  const downloadQr = async () => {
    try {
      const res = await fetch(qrSrc(url, 1000));
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = `ibgram-reviews-${slug}.png`;
      a.click();
      URL.revokeObjectURL(href);
    } catch {
      window.open(qrSrc(url, 1000), "_blank", "noopener");
    }
  };

  return (
    <SectionCard
      title="Collect reviews"
      description="Share your link or let a student scan the QR. Every review is checked by the IB Gram team before it goes live on your profile."
      icon={Share2}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <p className="mb-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">Your review link</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                readOnly
                value={url}
                onFocus={(e) => e.currentTarget.select()}
                aria-label="Your review link"
                className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-muted/40 px-3.5 font-mono text-sm text-foreground outline-none focus:border-primary"
              />
              <Button onClick={copy} className="h-11 shrink-0 gap-2 rounded-xl font-bold">
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-11 gap-2 rounded-xl font-semibold">
                <MessageCircle className="size-4" /> Send on WhatsApp
              </Button>
            </a>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-11 gap-2 rounded-xl font-semibold">
                <ExternalLink className="size-4" /> Preview the form
              </Button>
            </a>
          </div>

          <ol className="space-y-1.5 rounded-2xl bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <li>
              <span className="font-bold text-foreground">1.</span> Send the link after a good session, while it is fresh.
            </li>
            <li>
              <span className="font-bold text-foreground">2.</span> Or show the QR at the end of class — one scan opens the form.
            </li>
            <li>
              <span className="font-bold text-foreground">3.</span> Reviews show as <em>Pending</em> here until our team publishes them.
            </li>
          </ol>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background p-4 lg:w-56">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc(url, 400)}
            alt={`QR code linking to the review form for ${displayName}`}
            width={176}
            height={176}
            className="size-44 rounded-xl"
          />
          <Button variant="outline" onClick={downloadQr} className="h-10 w-full gap-2 rounded-xl text-xs font-bold">
            <Download className="size-4" /> Download QR
          </Button>
          <p className="text-center text-[11px] leading-snug text-muted-foreground">Print it, or drop it into your slides.</p>
        </div>
      </div>
    </SectionCard>
  );
}
