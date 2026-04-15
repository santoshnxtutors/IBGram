"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, MoreVertical, ArrowUp, Sparkles } from "lucide-react";
import { useState } from "react";

export function AiAssistantFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="fixed bottom-4 right-4 z-[100] sm:bottom-6 sm:right-6">
      <div className="relative flex flex-row-reverse items-center">
        <div
          className="relative shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="ai-widget-ring absolute -inset-1.5 rounded-full border-2 border-primary/40 border-t-primary opacity-40 transition-opacity" />
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-primary/20 blur-xl" />

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative z-10 flex size-12 items-center justify-center rounded-[1.5rem] shadow-2xl transition-all sm:size-14 ${
              isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
            }`}
          >
            <motion.div
              animate={{
                rotate: isOpen ? 12 : 0,
                scale: isOpen ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {isOpen ? <X className="size-6 sm:size-7" /> : <Bot className="size-7 sm:size-8" />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {!isOpen && isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-xl border border-border/60 bg-card/95 px-3 py-2 shadow-xl backdrop-blur sm:block"
            >
              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground">
                <span>Ask</span>
                <span className="italic text-primary">IBGram AI</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 50, originX: 1, originY: 1 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 18,
                mass: 1,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.4,
              y: 50,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            }}
            className="absolute bottom-16 right-0 flex h-[520px] max-h-[80vh] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card/95 text-foreground shadow-[0_28px_80px_-18px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:bottom-20 sm:h-[620px] sm:w-[390px]"
          >
            <div className="shrink-0 border-b border-border/60 bg-card/90 px-5 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
                    <Bot className="size-5 text-primary" />
                    IBGram AI Assistance
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Ask anything about programmes, admissions, or finding the right next step.
                  </p>
                </div>
                <button className="mt-0.5 opacity-60 transition-opacity hover:opacity-100">
                  <MoreVertical className="size-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto bg-background/70 px-5 py-6">
              <div className="text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/80">
                {currentTime}
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-sm">
                  <Bot className="size-4" />
                </div>
                <div className="min-w-0 flex-1 space-y-3">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    IBGram AI <Sparkles className="size-3 text-primary" />
                  </p>
                  <div className="max-w-[88%] rounded-3xl rounded-tl-md border border-border/60 bg-card px-4 py-3 text-[15px] leading-7 text-foreground shadow-sm">
                    Hello there. Looking for something? We&apos;re here to help.
                  </div>
                  <div className="max-w-[88%] rounded-3xl rounded-tl-md border border-border/60 bg-card px-4 py-3 text-[15px] leading-7 text-foreground shadow-sm">
                    Hi there. Welcome to IBGram. I&apos;d love to help you out.
                  </div>
                  <div className="max-w-[88%] rounded-3xl rounded-tl-md border border-border/60 bg-card px-4 py-3 text-[15px] leading-7 text-foreground shadow-sm">
                    First things first, could I have your name?
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-border/60 bg-card/90 px-5 py-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="w-full rounded-full border border-border/60 bg-background/80 py-3.5 pl-5 pr-14 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary/50 focus:outline-none"
                />
                <button className="absolute right-1.5 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:scale-105 hover:bg-primary/90 active:scale-95">
                  <ArrowUp className="size-4" strokeWidth={3} />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/70">
                <Bot className="size-3" />
                <span>Built with IBGram AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}