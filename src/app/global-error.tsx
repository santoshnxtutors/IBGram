"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optional: Log the error to an error reporting service like Sentry or PostHog
    // e.g., Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
          <p className="text-muted-foreground mb-8">
            A critical error occurred. Please try reloading the page.
          </p>
          <Button onClick={() => reset()} size="lg">
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
