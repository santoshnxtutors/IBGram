"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MapPin, ChevronDown, Menu, UserCircle, X, LogOut } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCurrentUser, logoutCurrentUser } from "@/lib/auth/useCurrentUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocalizationModal, readSavedCityLabel } from "./LocalizationModal";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { JoinAsTutorButton } from "./JoinAsTutorButton";
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
  { name: "IB Arts", slug: "arts" },
];

// The site owner asked to keep these controls rather than delete them.
// Theme switcher: hidden (the site uses one fixed theme). Account/login menu: shown.
const SHOW_THEME_SWITCHER = false;
const SHOW_ACCOUNT_CONTROLS = true;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isIgcse = pathname?.startsWith('/igcse');
  const { user } = useCurrentUser();
  const displayName = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.email || "";
  const initial = displayName.trim().charAt(0).toUpperCase() || "?";
  // Google photo when the account has one (falls back to the initial if it fails to load),
  // otherwise a gradient initial. Green dot = signed in.
  const [photoFailed, setPhotoFailed] = useState(false);
  const avatar = (size: string, dot = false) => (
    <span className="relative block shrink-0 leading-none">
      {user?.avatarUrl && !photoFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={user.avatarUrl}
          alt=""
          referrerPolicy="no-referrer"
          onError={() => setPhotoFailed(true)}
          className={`block ${size} rounded-full object-cover shadow-md`}
        />
      ) : (
        <span className={`grid ${size} place-items-center rounded-full bg-linear-to-br from-primary via-primary to-sky-500 font-extrabold tracking-tight text-white shadow-md shadow-primary/30`}>
          {initial}
        </span>
      )}
      {dot && <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />}
    </span>
  );

  const handleLogout = async () => {
    await logoutCurrentUser();
    // Hard navigation so the gated dashboard layout + server state fully reset.
    window.location.href = "/";
  };

  const [locationLabel, setLocationLabel] = useState<{ country: string; city: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateScrolledState = () => {
      frameId = 0;
      const nextScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };

    const onScroll = () => {
      if (frameId === 0) {
        frameId = requestAnimationFrame(updateScrolledState);
      }
    };

    updateScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const load = () => {
      // Any detected or typed city, e.g. "New Delhi" or "Munich".
      const city = readSavedCityLabel();
      setLocationLabel(city ? { country: localStorage.getItem("ibgram_country") ?? "", city } : null);
    };
    load();
    window.addEventListener("ibgram_location_updated", load);
    return () => window.removeEventListener("ibgram_location_updated", load);
  }, []);

  return (
    <>
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "border-b border-primary/20 bg-background/95 md:bg-background/60 md:backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
        : "border-b border-border/40 bg-background/95 md:bg-background/80 md:backdrop-blur-md"
    }`}>
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
        
        {/* Left: Logo & Location (desktop) */}
        <div className="flex items-center">
          <Link href="/" prefetch={false} className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-primary">
              <span className="text-secondary">IB</span>Gram
            </span>
          </Link>

          {/* Curriculum Switcher for Small Screens (Mobile/Tablet) */}
          <div className="lg:hidden ml-2 sm:ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger aria-label="IB curriculum switcher" className="flex items-center gap-1 text-xs font-bold text-foreground focus:outline-none bg-muted/20 px-2.5 py-1 rounded-full hover:bg-muted/40 transition-colors">
                <span>{isIgcse ? "IGCSE" : "IB"}</span> <ChevronDown className="size-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-32 border-border bg-background mt-2">
                {isIgcse ? (
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted text-amber-800" onClick={() => router.push('/')}>
                    <span className="w-full font-medium text-amber-800">IB</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted text-amber-800" onClick={() => router.push('/igcse')}>
                    <span className="w-full font-medium text-amber-800">IGCSE</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer ml-6">
            <MapPin className="size-4 text-primary" />
            <LocalizationModal>
              <div className="flex items-center gap-1 focus:outline-none hover:text-foreground">
                <span className="font-semibold text-foreground/80">
                  {locationLabel ? locationLabel.city : "Select Location"}
                </span>
                <ChevronDown className="size-3" />
              </div>
            </LocalizationModal>
          </div>
        </div>

        {/* Center: Main Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* Curriculum Switcher Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger aria-label="IB curriculum switcher" className="flex items-center gap-1 text-sm font-bold text-foreground focus:outline-none bg-muted/20 px-3 py-1.5 rounded-full hover:bg-muted/40 transition-colors">
              <span>{isIgcse ? "IGCSE" : "IB"}</span> <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-40 border-border bg-background mt-2">
              {isIgcse ? (
                <DropdownMenuItem className="cursor-pointer hover:bg-muted text-amber-800" onClick={() => router.push('/')}>
                  <span className="w-full font-medium text-amber-800">IB</span>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="cursor-pointer hover:bg-muted text-amber-800" onClick={() => router.push('/igcse')}>
                  <span className="w-full font-medium text-amber-800">IGCSE</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger aria-label="Programmes" className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
              Programmes <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-52 border-border bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-2xl shadow-2xl">
              <Link href="/programmes" prefetch={false} className="w-full">
                <DropdownMenuItem className="cursor-pointer rounded-xl py-1.5 px-4 font-bold text-primary hover:bg-primary/10 transition-all mb-1">
                  All Programmes Hub
                </DropdownMenuItem>
              </Link>
              <div className="h-px bg-border/40 my-1 mx-2" />
              {PROGRAMS.map(prog => (
                <Link href={`/programmes/${prog.slug}`} key={prog.slug} prefetch={false} className="w-full">
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
            <DropdownMenuContent align="center" className="w-56 border-border bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-2xl shadow-2xl">
              {COURSE_GROUPS.map(course => (
                <Link href={`/courses/${isIgcse ? 'igcse' : 'ib'}/${course.slug}`} key={course.slug} prefetch={false} className="w-full">
                  <DropdownMenuItem className="cursor-pointer rounded-xl py-2 px-4 font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                    {course.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/tutors" prefetch={false} aria-label="Tutors" className="hover:text-primary transition-colors">
            Tutors
          </Link>
          <Link href="/admissions" prefetch={false} aria-label="Admissions & Test Prep" className="hover:text-primary transition-colors">
            Admissions & Test Prep
          </Link>
        </nav>

        {/* Right: Join as tutor CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Signed-in users already have an account, so the join CTA is hidden for them. */}
          {!user && <JoinAsTutorButton />}
          {SHOW_THEME_SWITCHER && <ThemeSwitcher />}
          {/* Account / login menu, to the right of Join as tutor. Signed in: the user's initial. */}
          {SHOW_ACCOUNT_CONTROLS && <DropdownMenu>
            {user ? (
              <DropdownMenuTrigger
                aria-label={`Account menu for ${displayName}`}
                className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full ring-2 ring-primary/20 transition-all duration-200 hover:scale-105 hover:ring-primary/60 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus-visible:ring-primary"
              >
                {avatar("size-9 text-base", true)}
              </DropdownMenuTrigger>
            ) : (
              <DropdownMenuTrigger aria-label="User Account Options" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full text-foreground hover:bg-primary/10 hover:text-primary transition-all cursor-pointer" })}>
                <UserCircle className="size-8 transition-colors" />
              </DropdownMenuTrigger>
            )}
            <DropdownMenuContent align="end" className={`${user ? "w-60" : "w-48"} border-border bg-background/95 backdrop-blur-xl mt-2 p-2 rounded-[1.5rem] shadow-2xl transition-all`}>
              {user ? (
                <>
                  <div className="flex items-center gap-3 border-b border-border/60 px-3 pb-3 pt-2 mb-1">
                    {avatar("size-9 text-base")}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-foreground">{displayName}</p>
                      {user.firstName && <p className="truncate text-xs font-medium text-muted-foreground">{user.email}</p>}
                    </div>
                  </div>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer rounded-xl py-3 px-4 font-bold text-foreground hover:bg-muted hover:text-destructive transition-all focus:bg-muted outline-none">
                    <LogOut className="mr-2 size-4" /> Log out
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <Link href="/login" prefetch={false} aria-label="Login">
                    <DropdownMenuItem className="cursor-pointer rounded-xl py-3 px-4 font-bold text-foreground hover:bg-muted hover:text-primary transition-all focus:bg-muted outline-none">
                      Login
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/signup" prefetch={false} aria-label="Sign up">
                    <DropdownMenuItem className="cursor-pointer rounded-xl py-3 px-4 font-bold text-foreground hover:bg-muted hover:text-primary transition-all focus:bg-muted outline-none">
                      Sign up
                    </DropdownMenuItem>
                  </Link>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-1.5">
          {/* Join CTA lives in the bar itself on small screens — buried in the
              drawer it was a tap away and invisible on first paint. */}
          {!user && <JoinAsTutorButton />}
          {SHOW_THEME_SWITCHER && <ThemeSwitcher />}
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="size-9"
          >
            <Menu className="size-6 text-foreground" />
          </Button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay — rendered OUTSIDE header to escape its stacking context */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col p-6 lg:hidden bg-background"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold tracking-tight text-primary">
              <span className="text-secondary">IB</span>Gram
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Close mobile menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="size-6" />
            </Button>
          </div>

          <div className="mb-8 px-4 flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <MapPin className="size-5 text-primary" />
            <LocalizationModal>
              <div className="flex items-center gap-1 focus:outline-none">
                <span className="font-bold text-foreground/80">
                  {locationLabel ? locationLabel.city : "Select Location"}
                </span>
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
                <Link 
                  href="/programmes" 
                  prefetch={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[15px] font-bold text-primary hover:text-primary transition-colors block py-1"
                >
                  All Programmes Hub
                </Link>
                {PROGRAMS.map(prog => (
                  <Link 
                    key={prog.slug}
                    href={`/programmes/${prog.slug}`} 
                    prefetch={false}
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
                    prefetch={false}
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
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary bg-muted/10 rounded-xl"
            >
              Tutors
            </Link>
            <Link 
              href="/admissions" 
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary bg-muted/10 rounded-xl shadow-sm"
            >
              Admissions & Test Prep
            </Link>
          </nav>

          <div className="mt-auto pt-10 border-t border-border/50 flex flex-col gap-4">
            {SHOW_ACCOUNT_CONTROLS && (user ? (
              <>
                <div className="flex items-center gap-3 px-1">
                  {avatar("size-11 text-lg")}
                  <div className="min-w-0">
                    <p className="truncate font-bold text-foreground">{displayName}</p>
                    {user.firstName && <p className="truncate text-sm text-muted-foreground">{user.email}</p>}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}
                  className="w-full py-6 text-lg rounded-2xl font-bold border-primary/20 hover:bg-primary/5"
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full py-6 text-lg rounded-2xl font-bold bg-primary text-primary-foreground">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full py-6 text-lg rounded-2xl font-bold border-primary/20 hover:bg-primary/5">
                    Sign Up
                  </Button>
                </Link>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
