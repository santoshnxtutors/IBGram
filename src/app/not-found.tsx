import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-9xl font-bold text-primary/20">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the page you're looking for. It might have been removed, or the link may be broken.
      </p>
      <Link href="/">
        <Button size="lg">Return Home</Button>
      </Link>
    </div>
  );
}
