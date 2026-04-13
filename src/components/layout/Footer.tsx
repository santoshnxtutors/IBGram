"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <footer className="w-full bg-[#050A15] border-t border-border mt-20 pt-16 pb-8 relative overflow-hidden">
      {/* 🟢 Glow / Orange Glow Mix */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                IB<span className="text-primary drop-shadow-md">Gram</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium mb-6 leading-relaxed">
              The world's gold standard for IB and IGCSE preparation, accelerating learning outcomes with top-tier tutors and AI diagnostics.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <Link href="#" aria-label="Visit our Global Network" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                <Globe className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-foreground mb-6 drop-shadow-sm">Programmes</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/programmes/pyp" className="hover:text-primary transition-colors">Primary Years (PYP)</Link></li>
              <li><Link href="/programmes/myp" className="hover:text-primary transition-colors">Middle Years (MYP)</Link></li>
              <li><Link href="/programmes/dp" className="hover:text-primary transition-colors">Diploma (DP)</Link></li>
              <li><Link href="/programmes/cp" className="hover:text-primary transition-colors">Career-related (CP)</Link></li>
              <li><Link href="/igcse" className="hover:text-primary transition-colors italic">Cambridge IGCSE</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-foreground mb-6 drop-shadow-sm">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">AI Test Generator</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Smart Planner</Link></li>
              <li><Link href="/subscription" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 drop-shadow-sm">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How IBGram Works</Link></li>
              <li><Link href="/jobs" className="hover:text-primary transition-colors">Jobs</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold text-muted-foreground">
          <p>© {new Date().getFullYear()} IB Gram. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Global Operations</span>
            <span className="hidden md:inline">•</span>
            <span>Enterprise-Grade Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
