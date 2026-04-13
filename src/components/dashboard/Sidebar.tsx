"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  BrainCircuit,
  MessageSquare,
  Settings,
  LogOut,
  GraduationCap,
  Users,
  LineChart,
  Wallet
} from "lucide-react";

const studentNavigation = [
  { name: "Overview", href: "/dashboard/student", icon: LayoutDashboard },
  { name: "My Schedule", href: "/dashboard/student/schedule", icon: Calendar },
  { name: "Mock Tests", href: "#", icon: BookOpen },
  { name: "AI Test Generator", href: "/ai-tools/test-generator", icon: BrainCircuit },
  { name: "Messages", href: "#", icon: MessageSquare },
];

const tutorNavigation = [
  { name: "Overview", href: "/dashboard/tutor", icon: LayoutDashboard },
  { name: "My Students", href: "#", icon: Users },
  { name: "Schedule & Classes", href: "#", icon: Calendar },
  { name: "AI Diagnostics", href: "#", icon: BrainCircuit },
  { name: "Earnings", href: "#", icon: Wallet },
];

export function Sidebar() {
  const pathname = usePathname();
  const isTutor = pathname.includes("/tutor");
  
  const navigation = isTutor ? tutorNavigation : studentNavigation;

  return (
    <div className="flex flex-col w-64 border-r border-border/50 bg-background/50 backdrop-blur-md h-screen sticky top-0">
      <div className="flex h-16 items-center px-6 border-b border-border/50">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            IB<span className="text-primary">Gram</span>
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {/* User Profile Snippet */}
        {isTutor ? (
          <div className="px-6 mb-8 flex items-center gap-3">
            <div className="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary relative overflow-hidden">
              <BookOpen className="size-5 z-10" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">Dr. Alex J.</h3>
              <p className="text-xs text-muted-foreground">IB Math Expert</p>
            </div>
          </div>
        ) : (
          <div className="px-6 mb-8 flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary relative overflow-hidden">
              <GraduationCap className="size-5 z-10" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">Sarah M.</h3>
              <p className="text-xs text-muted-foreground">IB DP Year 1</p>
            </div>
          </div>
        )}

        <nav className="space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all",
                  isActive
                    ? "bg-primary/5 border border-primary/20 shadow-sm text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 size-5 flex-shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-border/50">
        <Link
          href="#"
          className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all mb-1"
        >
          <Settings className="mr-3 size-5 text-muted-foreground group-hover:text-foreground" />
          Settings
        </Link>
        <button
          className="w-full group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
        >
          <LogOut className="mr-3 size-5 text-muted-foreground group-hover:text-destructive" />
          Sign out
        </button>
      </div>
    </div>
  );
}
