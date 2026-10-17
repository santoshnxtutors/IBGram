"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutCurrentUser } from "@/lib/auth/useCurrentUser";

/** Dashboard header "Log out": ends the session, then hard-navigates home so gated views reset. */
export function LogoutButton() {
  const [busy, setBusy] = useState(false);
  return (
    <Button
      variant="outline"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        await logoutCurrentUser();
        window.location.href = "/";
      }}
      // Desktop only: on mobile, Log out sits in the top bar next to the logo.
      className="hidden h-10 bg-background shadow-sm hover:border-destructive/40 hover:bg-destructive/5 hover:text-destructive lg:inline-flex"
    >
      <LogOut className="ml-0 mr-2 size-4" /> {busy ? "Logging out…" : "Log out"}
    </Button>
  );
}
