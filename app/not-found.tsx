import Link from "next/link";
import type { Metadata } from "next";

/**
 * 404 — Terminal "command not found" page
 *
 * Simulates a failed terminal command:
 *   $ cd /unknown-path
 *   bash: 404: path not found
 *
 * Then offers a way back home. Centered vertically,
 * monospace throughout, matching the site identity.
 */

export const metadata: Metadata = {
  title: "404 — Path Not Found",
};
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Terminal window */}
        <div className="overflow-hidden rounded-md border border-edge bg-surface-1">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-edge px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="ml-3 font-mono text-[11px] text-ink-muted">
              ~/404
            </span>
          </div>

          {/* Terminal content */}
          <div className="space-y-4 p-6">
            {/* Command that "failed" */}
            <p className="font-mono text-sm">
              <span className="text-terminal">$</span>{" "}
              <span className="text-ink-muted">cd /unknown-path</span>
            </p>

            {/* Error output */}
            <div className="space-y-1">
              <p className="font-mono text-sm text-destructive">
                bash: 404: path not found
              </p>
              <p className="font-mono text-xs text-ink-muted">
                the page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>

            {/* Suggestion */}
            <div className="border-t border-edge pt-4">
              <p className="font-mono text-sm">
                <span className="text-terminal">$</span>{" "}
                <Link
                  href="/"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-accent-hover hover:decoration-accent"
                >
                  cd ~
                </Link>
                <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
