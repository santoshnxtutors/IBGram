"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function AiAssistantToggle() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full border border-primary/20 transition-all font-bold text-sm group"
    >
      <div className="relative">
        <Sparkles className="size-4 group-hover:animate-pulse" />
        <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span>AI Assistant</span>
    </motion.button>
  );
}
