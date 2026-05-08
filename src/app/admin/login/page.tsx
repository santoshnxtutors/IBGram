import { redirectIfAdminSession } from "../_lib/admin-auth";
import { AdminLoginForm } from "../_components/AdminLoginForm";

export default async function AdminLoginPage() {
  await redirectIfAdminSession();

  return (
    <main className="grid min-h-screen place-items-center bg-[#070b12] px-4 py-10 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(245,158,11,0.14),transparent_26%),linear-gradient(135deg,#070b12,#111827_62%,#070b12)]" />
      <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">Private IBGram operations</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Premium control room</h1>
          <p className="mx-auto mt-3 max-w-lg text-base font-medium leading-7 text-slate-400">Manage pages, tutors, locations, internal links and publishing checks without touching the public website UI.</p>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
