"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MapPin, ChevronDown, Menu, UserCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocalizationModal } from "./LocalizationModal";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useEffect, useState } from "react";

const PROGRAMS = [
  { name: "Primary Years (PYP)", slug: "pyp" },
  { name: "Middle Years (MYP)", slug: "myp" },
  { name: "Diploma (DP)", slug: "dp" },
  { name: "Career-related (CP)", slug: "cp" },
];

const COURSE_GROUPS = [
  { name: "IB Mathematics", slug: "mathematics" },
  { name: "IB Sciences", slug: "sciences" },
  { name: "IB Individuals & Societies", slug: "individuals" },
  { name: "IB English", slug: "english" },
  { name: "IB Language", slug: "language" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isIgcse = pathname?.startsWith('/igcse');

  const [locationLabel, setLocationLabel] = useState<{ country: string; city: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const load = () => {
      const country = localStorage.getItem("ibgram_country");
      const city = localStorage.getItem("ibgram_city");
      if (country && city) {
        // Capitalise first letter for display
        const fmt = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ");
        setLocationLabel({ country: fmt(country), city: fmt(city) });
      } else {
        setLocationLabel(null);
      }
    };
    load();
    window.addEventListener("ibgram_location_updated", load);
    return () => window.removeEventListener("ibgram_location_updated", load);
  }, []);

  return (
    <>
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "border-b border-primary/20 bg-background/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
        : "border-b border-border/40 bg-background/80 backdrop-blur-md"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Left: Logo & Location (desktop) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              IB<span className="text-primary">Gram</span>
            </span>
          </Link>

          {/* Curriculum Switcher for Small Screens (Mobile/Tablet) */}
          <div className="lg:hidden ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger aria-label="Switch Curriculum" className="flex items-center gap-1 text-xs font-bold text-foreground focus:outline-none bg-muted/20 px-2.5 py-1 rounded-full hover:bg-muted/40 transition-colors">
                <span>{isIgcse ? "IGCSE" : "IB"}</span> <ChevronDown className="size-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-32 border-border bg-background mt-2">
                {isIgcse ? (
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted text-secondary" onClick={() => router.push('/')}>
                    <span className="w-full font-medium text-secondary">IB</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted text-secondary" onClick={() => router.push('/igcse')}>
                    <span className="w-full font-medium text-secondary">IGCSE</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer ml-6">
            <MapPin className="size-4 text-primary" />
            <LocalizationModal>
              <div className="flex items-center gap-1 focus:outline-none hover:text-foreground">
                {locationLabel ? (
                  <>
                    <span className="text-foreground font-semibold">{locationLabel.country}</span>
                    <span className="opacity-50">|</span>
                    <span className="text-primary font-semibold">{locationLabel.city}</span>
                  </>
                ) : (
                  <>Select Country <span className="opacity-50">|</span> Select City</>
                )}
                <ChevronDown className="size-3" />
              </div>
            </LocalizationModal>
          </div>
        </div>

        {/* Center: Main Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* Curriculum Switcher Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger aria-label="Switch Curriculum" className="flex items-center gap-1 text-sm font-bold text-foreground focus:outline-none bg-muted/20 px-3 py-1.5 rounded-full hover:bg-muted/40 transition-colors">
              <span>{isIgcse ? "IGCSE" : "IB"}</span> <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-40 border-border bg-background mt-2">
              {isIgcse ? (
                <DropdownMenuItem className="cursor-pointer hover:bg-muted text-secondary" onClick={() => router.push('/')}>
                  <span className="w-full font-medium text-secondary">IB</span>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="cursor-pointer hover:bg-muted text-secondary" onClick={() => router.push('/igcse')}>
                  <span className="w-full font-medium text-secondary">IGCSE</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger aria-label="Programmes" className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
              Programmes <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 border-white/10 bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-2xl shadow-2xl">
              {PROGRAMS.map(prog => (
                <Link href={`/programmes/${prog.slug}`} key={prog.slug} className="w-full">
                  <DropdownMenuItem className="cursor-pointer rounded-xl py-2 px-4 font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                    {prog.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger aria-label="Courses" className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
              Courses <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 border-white/10 bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-2xl shadow-2xl">
              {COURSE_GROUPS.map(course => (
                <Link href={`/courses/${isIgcse ? 'igcse' : 'ib'}/${course.slug}`} key={course.slug} className="w-full">
                  <DropdownMenuItem className="cursor-pointer rounded-xl py-2 px-4 font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                    {course.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/tutors" aria-label="Tutors" className="hover:text-primary transition-colors">
            Tutors
          </Link>
          <Link href="/ai-tools" aria-label="AI Tools" className="hover:text-primary transition-colors">
            AI Tools
          </Link>
        </nav>

        {/* Right: Auth Dropdown */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger aria-label="User Account Options" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full hover:bg-muted/50 transition-all cursor-pointer" })}>
              <UserCircle className="size-8 text-foreground/80 hover:text-primary transition-colors" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 border-white/10 bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-[1.5rem] shadow-2xl transition-all">
              <Link href="/login" aria-label="Login">
                <DropdownMenuItem className="cursor-pointer rounded-xl py-3 px-4 font-bold text-foreground hover:bg-white/10 hover:text-primary transition-all focus:bg-white/10 outline-none">
                  Login
                </DropdownMenuItem>
              </Link>
              <Link href="/signup" aria-label="Sign up">
                <DropdownMenuItem className="cursor-pointer rounded-xl py-3 px-4 font-bold text-foreground hover:bg-white/10 hover:text-primary transition-all focus:bg-white/10 outline-none">
                  Sign up
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle & Theme Switcher */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="size-6 text-foreground" />
          </Button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay — rendered OUTSIDE header to escape its stacking context */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[9999] flex flex-col p-6 lg:hidden"
          style={{ backgroundColor: 'oklch(0.18 0.02 260)' }}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              IB<span className="text-primary">Gram</span>
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="size-6" />
            </Button>
          </div>

          <div className="mb-8 px-4 flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <MapPin className="size-5 text-primary" />
            <LocalizationModal>
              <div className="flex items-center gap-1 focus:outline-none">
                {locationLabel ? (
                  <>
                    <span className="text-foreground font-bold">{locationLabel.country}</span>
                    <span className="opacity-50">|</span>
                    <span className="text-primary font-bold">{locationLabel.city}</span>
                  </>
                ) : (
                  <>Select Country <span className="opacity-50">|</span> Select City</>
                )}
                <ChevronDown className="size-4" />
              </div>
            </LocalizationModal>
          </div>

          <nav className="flex flex-col gap-4 text-lg font-bold">
            <details className="group">
              <summary className="px-4 py-3 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary cursor-pointer list-none flex items-center justify-between bg-muted/10 rounded-xl">
                Programmes
                <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-6 pt-3 pb-1 flex flex-col gap-3">
                {PROGRAMS.map(prog => (
                  <Link 
                    key={prog.slug}
                    href={`/programmes/${prog.slug}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors block py-1"
                  >
                    {prog.name}
                  </Link>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="px-4 py-3 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary cursor-pointer list-none flex items-center justify-between bg-muted/10 rounded-xl">
                Courses
                <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-6 pt-3 pb-1 flex flex-col gap-3">
                {COURSE_GROUPS.map(course => (
                  <Link 
                    key={course.slug}
                    href={`/courses/${isIgcse ? 'igcse' : 'ib'}/${course.slug}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors block py-1"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link 
              href="/tutors" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary bg-muted/10 rounded-xl"
            >
              Tutors
            </Link>
            <Link 
              href="/ai-tools" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary bg-muted/10 rounded-xl"
            >
              AI Tools
            </Link>
          </nav>

          <div className="mt-auto pt-10 border-t border-border/50 flex flex-col gap-4">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full py-6 text-lg rounded-2xl font-bold bg-primary text-primary-foreground">
                Login
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full py-6 text-lg rounded-2xl font-bold border-primary/20 hover:bg-primary/5">
                Sign Up
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
