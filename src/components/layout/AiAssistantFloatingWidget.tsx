"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, MoreVertical, ArrowUp } from "lucide-react";
import { useState } from "react";

export function AiAssistantFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Container for Tooltip + Button (Horizontal Layout) */}
      <div className="flex flex-row-reverse items-center gap-3">
        {/* Floating Button with Rotating Ring */}
        <div 
          className="relative group shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Continuous Rotating Ring - Clockwise */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 border-2 border-primary/40 border-t-white rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
          />
          
          {/* Glow behind the bot */}
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 -z-10" />

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`size-12 sm:size-14 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all relative z-10 ${
              isOpen ? "bg-[#6B21A8] text-white" : "bg-primary text-primary-foreground"
            }`}
          >
            <motion.div
              animate={{ 
                rotate: isOpen ? 12 : 0,
                scale: isOpen ? 1.1 : 1 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Bot className="size-7 sm:size-8" />
            </motion.div>
          </motion.button>
        </div>

        {/* Tooltip on Hover - Now attached to the LEFT */}
        <AnimatePresence>
          {(!isOpen && isHovered) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="bg-[#1A1C1E] border border-white/10 px-3 py-1.5 rounded-xl shadow-xl hidden sm:block pointer-events-none whitespace-nowrap"
            >
              <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <span>Ask</span>
                <span className="text-primary italic">IBGram AI</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Zendesk-style Chat Popup - Absolutely positioned above the button */}
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
                damping: 15,
                mass: 1
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.4, 
              y: 50,
              transition: {
                duration: 0.2,
                ease: "easeIn"
              }
            }}
            className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2.5rem)] sm:w-[400px] h-[600px] bg-white rounded-3xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col text-slate-800"
          >
            {/* Purple Header */}
            <div className="bg-[#6B21A8] p-5 pt-7 pb-6 text-white shrink-0 relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">IBGram AI Assistance</h3>
                <button className="opacity-70 hover:opacity-100 transition-opacity">
                  <MoreVertical className="size-5" />
                </button>
              </div>
              <p className="text-white/80 text-xs font-medium">Hello 👋 Looking for something? We're here to help!</p>
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-slate-50/50 p-6 pt-8 overflow-y-auto space-y-6 scrollbar-hide">
              <div className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>

              {/* Bot Row */}
              <div className="flex items-end gap-3 pr-8">
                <div className="size-9 rounded-full bg-[#6B21A8] flex items-center justify-center text-white shadow-sm shrink-0">
                   <Bot className="size-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">IBGram AI</p>
                  <div className="space-y-1">
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 text-sm leading-relaxed">
                      Hello 👋 Looking for something? We're here to help!
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 text-sm leading-relaxed">
                      Hi there! Welcome to IBGram. I'd love to help you out!
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 text-sm leading-relaxed">
                      First things first, could I have your name?
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Chat Input Area (Premium GPT Style) */}
            <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.02)] z-10 relative">
              <div className="relative flex items-center group">
                <input 
                  type="text" 
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-3.5 pl-6 pr-12 text-sm focus:outline-none focus:border-[#6B21A8]/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                />
                <button className="absolute right-1.5 size-9 rounded-full bg-[#6B21A8] hover:bg-[#581c87] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#6B21A8]/20 group-focus-within:bg-[#581c87]">
                  <ArrowUp className="size-4" strokeWidth={3} />
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-1 opacity-30 mt-3 hover:opacity-100 transition-opacity cursor-default">
                 <Bot className="size-3 text-slate-800" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-800">Built with IBGram AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
