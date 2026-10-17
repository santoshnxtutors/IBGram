"use client";

import { type ComponentType, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCurrentUser, logoutCurrentUser } from "@/lib/auth/useCurrentUser";
import {
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  Wallet,
  Search,
  ScrollText,
  Star,
  UserRound,
  LifeBuoy,
} from "lucide-react";

type NavItem = { name: string; href: string; icon: ComponentType<{ className?: string }>; badge?: "unread" };

const studentNavigation: NavItem[] = [
  { name: "Overview", href: "/student", icon: LayoutDashboard },
  { name: "My classes", href: "/student/schedule", icon: CalendarDays },
  { name: "Find a tutor", href: "/student/tutors", icon: Search },
  { name: "Messages", href: "/student/messages", icon: MessageSquare, badge: "unread" },
  { name: "My profile", href: "/student/profile", icon: UserRound },
];

const tutorNavigation: NavItem[] = [
  { name: "Overview", href: "/tutor", icon: LayoutDashboard },
  { name: "Demo classes", href: "/tutor/schedule", icon: CalendarDays },
  { name: "My students", href: "/tutor/students", icon: Users },
  { name: "Reviews", href: "/tutor/reviews", icon: Star },
  { name: "Earnings", href: "/tutor/earnings", icon: Wallet },
  { name: "Messages", href: "/tutor/messages", icon: MessageSquare, badge: "unread" },
  { name: "My profile", href: "/tutor/profile", icon: UserRound },
  { name: "Tutor policy", href: "/tutor/policy", icon: ScrollText },
];

/** Total unread messages, for the sidebar badge. Same endpoint the chat screen uses. */
function useUnreadCount() {
  const [unread, setUnread] = useState(0);
  useEffect(() => {
    let active = true;
    const load = () =>
      fetch("/api/chat/conversations/", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((body) => {
          if (!active || !body?.conversations) return;
          setUnread(
            (body.conversations as Array<{ unread?: number }>).reduce((sum, c) => sum + (c.unread ?? 0), 0),
          );
        })
        .catch(() => {});
    load();
    const timer = setInterval(load, 60_000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);
  return unread;
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { user } = useCurrentUser();
  const unread = useUnreadCount();
  const isTutor = user?.accountType === "tutor" || (!user && pathname.includes("/tutor"));

  const navigation = isTutor ? tutorNavigation : studentNavigation;
  const root = isTutor ? "/tutor" : "/student";
  const displayName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.email || (isTutor ? "Tutor" : "Student");

  const handleLogout = async () => {
    await logoutCurrentUser();
    window.location.href = "/";
  };

  return (
    <div className="flex h-screen w-[17rem] flex-col border-r border-border/60 bg-card">
      <div className="flex h-16 items-center border-b border-border/60 px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-primary">
            <span className="text-secondary">IB</span>Gram
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        {/* Who is signed in, and the way out. */}
        <Link
          href={`${root}/profile`}
          onClick={onNavigate}
          className="mb-5 flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 p-3 transition-colors hover:border-primary/30"
        >
          <span
            className={cn(
              "grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl text-sm font-black",
              isTutor ? "bg-[#e8780c]/15 text-[#9a4f04]" : "bg-primary/10 text-primary",
            )}
          >
            {user?.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.avatarUrl} alt="" className="size-full object-cover" />
            ) : (
              displayName.slice(0, 1).toUpperCase()
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold leading-tight text-foreground">{displayName}</p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {isTutor ? "Tutor" : "Student"}
            </p>
          </div>
        </Link>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = item.href === root ? pathname === root : pathname.startsWith(item.href);
            const count = item.badge === "unread" ? unread : 0;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-12px_rgba(19,47,116,0.9)]"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className={cn("size-[1.15rem] shrink-0", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                <span className="flex-1 truncate">{item.name}</span>
                {count > 0 && (
                  <span
                    className={cn(
                      "grid min-w-5 shrink-0 place-items-center rounded-full px-1.5 py-0.5 text-[10px] font-black",
                      isActive ? "bg-white/20 text-white" : "bg-secondary text-secondary-foreground",
                    )}
                  >
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-1 border-t border-border/60 p-3">
        <Link
          href={`${root}/settings`}
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
            pathname.startsWith(`${root}/settings`)
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <Settings className="size-[1.15rem]" /> Settings
        </Link>
        <Link
          href="/contact-us"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LifeBuoy className="size-[1.15rem]" /> Help &amp; support
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="size-[1.15rem]" /> Log out
        </button>
      </div>
    </div>
  );
}
