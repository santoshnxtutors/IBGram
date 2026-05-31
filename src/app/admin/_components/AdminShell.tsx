import Link from "next/link";
import {
  BarChart3,
  Bot,
  ChevronRight,
  FileText,
  Gauge,
  HelpCircle,
  Home,
  Image,
  Import,
  Link2,
  ListChecks,
  MapPin,
  Menu as MenuIcon,
  MessageSquareQuote,
  Newspaper,
  Search,
  Settings,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { requireAdminSession } from "../_lib/admin-auth";
import { LogoutButton } from "./LogoutButton";

const navigation = [
  { label: "Dashboard", href: "/admin/dashboard", icon: BarChart3 },
  { label: "Homepage", href: "/admin/homepage", icon: Home },
  { label: "Pages", href: "/admin/pages", icon: FileText },
  { label: "AI Generator", href: "/admin/generator", icon: Bot },
  { label: "Tutors", href: "/admin/tutors", icon: Users },
  { label: "Locations", href: "/admin/locations", icon: MapPin },
  { label: "Menus", href: "/admin/menus", icon: MenuIcon },
  { label: "Internal Links", href: "/admin/internal-links", icon: Link2 },
  { label: "SEO", href: "/admin/seo", icon: Gauge },
  { label: "Blog", href: "/admin/blog", icon: Newspaper },
  { label: "Reviews", href: "/admin/testimonials", icon: MessageSquareQuote },
  { label: "Teacher Reviews", href: "/admin/teacher-reviews", icon: Star },
  { label: "Success Stories", href: "/admin/success-stories", icon: Sparkles },
  { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { label: "Media Library", href: "/admin/assets", icon: Image },
  { label: "Imports", href: "/admin/imports", icon: Import },
  { label: "Audit Logs", href: "/admin/audit-logs", icon: ListChecks },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Users", href: "/admin/users", icon: Shield },
];

export async function AdminShell({ children }: { children: React.ReactNode }) {
  await requireAdminSession();

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(245,158,11,0.12),transparent_24%),linear-gradient(135deg,#070b12_0%,#101827_60%,#080b10_100%)]" />
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="min-w-0 flex-1 lg:pl-72">
          <AdminTopbar />
          <div className="px-4 py-5 sm:px-6 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

function AdminSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 bg-[#080d16]/95 shadow-2xl shadow-black/30 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="shrink-0 p-4 pb-3">
        <Link href="/admin/dashboard" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-lg shadow-black/20 transition hover:border-emerald-300/30 hover:bg-white/[0.06]">
          <div className="grid size-11 place-items-center rounded-lg bg-gradient-to-br from-emerald-300 to-teal-500 text-sm font-black tracking-tight text-slate-950 shadow-lg shadow-emerald-950/30">
            IB
          </div>
          <div className="min-w-0">
            <p className="text-base font-black tracking-tight">IBGram Admin</p>
            <p className="text-xs font-semibold text-slate-400">Content operations</p>
          </div>
        </Link>
      </div>
      <nav
        className="min-h-0 flex-1 space-y-1.5 overflow-y-auto px-4 pb-4 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/15 hover:[&::-webkit-scrollbar-thumb]:bg-white/25"
        aria-label="Admin navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-sm font-bold text-slate-300 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
          >
            <item.icon className="size-4 text-emerald-300 group-hover:text-amber-300" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070b12]/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <AdminBreadcrumbs />
          <p className="mt-1 truncate text-sm font-semibold text-slate-400">Admin session active</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-slate-300 md:flex">
            <Search className="size-4 text-emerald-300" />
            <span>Command search ready</span>
          </div>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}

function AdminBreadcrumbs() {
  return (
    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
      <Link href="/admin/dashboard" className="hover:text-emerald-300">
        Admin
      </Link>
      <ChevronRight className="size-3" />
      <span className="text-emerald-300">Operations</span>
    </div>
  );
}
