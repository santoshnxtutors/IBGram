"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

import { CONTACT } from "@/lib/contact";
import whatsappLogo from "../../../public/images/whatshap.jpg";

const buildWhatsAppUrl = (message: string) => {
  try {
    const url = new URL(CONTACT.whatsappUrl);
    url.searchParams.set("text", message);
    return url.toString();
  } catch {
    return `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`;
  }
};

export function WhatsAppFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith("/admissions")) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "New IBGram enquiry",
      `Name: ${formData.get("name") || ""}`,
      `Number: ${formData.get("number") || ""}`,
      `Subject: ${formData.get("subject") || ""}`,
      `Course: ${formData.get("course") || ""}`,
      `Location: ${formData.get("location") || ""}`,
      `Query: ${formData.get("query") || ""}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[110] sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] max-w-[340px] overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/95 text-card-foreground shadow-[0_24px_70px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">WhatsApp Enquiry</p>
              <p className="text-xs text-muted-foreground">Send your details to IBGram.</p>
            </div>
            <button
              type="button"
              aria-label="Close WhatsApp enquiry form"
              onClick={() => setIsOpen(false)}
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <form className="space-y-3 px-4 py-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <label className="block space-y-1 text-xs font-medium text-muted-foreground">
                <span>Name</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]"
                />
              </label>
              <label className="block space-y-1 text-xs font-medium text-muted-foreground">
                <span>Number</span>
                <input
                  name="number"
                  required
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block space-y-1 text-xs font-medium text-muted-foreground">
                <span>Subject</span>
                <input
                  name="subject"
                  required
                  className="w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]"
                />
              </label>
              <label className="block space-y-1 text-xs font-medium text-muted-foreground">
                <span>Course</span>
                <input
                  name="course"
                  required
                  className="w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]"
                />
              </label>
            </div>

            <label className="block space-y-1 text-xs font-medium text-muted-foreground">
              <span>Location</span>
              <input
                name="location"
                required
                autoComplete="address-level2"
                className="w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]"
              />
            </label>

            <label className="block space-y-1 text-xs font-medium text-muted-foreground">
              <span>Query</span>
              <textarea
                name="query"
                required
                rows={3}
                className="w-full resize-none rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]"
              />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-[1.01] hover:bg-[#20bd5a] active:scale-[0.99]"
            >
              Send on WhatsApp
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isOpen && isHovered && (
          <div className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-xl border border-border/60 bg-card/95 px-3 py-2 shadow-xl backdrop-blur sm:block">
            <p className="text-[11px] font-semibold text-foreground">
              Send your query on <span className="italic text-[#25D366]">WhatsApp</span>
            </p>
          </div>
        )}

        <button
          type="button"
          aria-label={isOpen ? "Close WhatsApp enquiry form" : "Open WhatsApp enquiry form"}
          onClick={() => setIsOpen((current) => !current)}
          className={`relative flex size-12 items-center justify-center overflow-hidden rounded-[1.5rem] text-black shadow-2xl shadow-[#25D366]/25 transition-transform hover:scale-105 active:scale-95 sm:size-14 ${
            isOpen ? "bg-[#25D366]" : "bg-white"
          }`}
        >
          <span className="absolute -inset-1.5 rounded-full border-2 border-[#25D366]/35" />
          {isOpen ? (
            <X className="relative size-6" />
          ) : (
            <Image
              src={whatsappLogo}
              alt=""
              fill
              priority
              sizes="(min-width: 640px) 56px, 48px"
              className="object-cover object-center scale-[1.45]"
            />
          )}
        </button>
      </div>
    </div>
  );
}
