"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { buttonVariants } from "@/components/ui/button";

const themes = [
  { id: "default", name: "Default", color: "bg-[#10B981]" }, // Using primary green for default label
  { id: "blue", name: "Blue", color: "bg-blue-500" },
  { id: "green", name: "Green", color: "bg-emerald-500" },
  { id: "pink", name: "Pink", color: "bg-pink-500" },
  { id: "orange", name: "Orange", color: "bg-orange-500" },
];

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("ibgram_theme") || "default";
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("ibgram_theme", themeId);
    // Dispatch event for other components if needed
    window.dispatchEvent(new Event("ibgram_theme_changed"));
  };

  const currentTheme = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className={buttonVariants({ 
          variant: "ghost", 
          className: "flex items-center gap-2 group focus:outline-none bg-muted/20 hover:bg-muted/40 transition-all px-4 py-2 h-auto rounded-full border border-white/5 hover:border-primary/20 cursor-pointer" 
        })}
      >
        <div className={`size-3 rounded-full ${currentTheme.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
        <span className="text-sm font-bold text-foreground/90 group-hover:text-foreground">
          {currentTheme.name}
        </span>
        <ChevronDown className="size-3 text-muted-foreground group-hover:text-foreground transition-transform group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="center" 
        className="w-44 border-white/10 bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-2xl shadow-2xl"
      >
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            className={`cursor-pointer rounded-xl py-2.5 px-3 flex items-center justify-between group transition-all mb-1 last:mb-0 ${
              activeTheme === theme.id ? "bg-white/5 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
            onClick={() => applyTheme(theme.id)}
          >
            <div className="flex items-center gap-3">
              <div className={`size-3 rounded-full ${theme.color} ring-2 ring-white/10`} />
              <span className="text-sm font-semibold">{theme.name}</span>
            </div>
            {activeTheme === theme.id && <Check className="size-4 animate-in zoom-in-50 duration-300" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
