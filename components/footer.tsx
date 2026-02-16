"use client";

import { useTranslation } from "@/config/i18n";

/**
 * Footer — Minimal, prompt-style
 *
 * Just the essential info. No decorative fluff.
 * Terminal green tilde, monospace, year auto-updated.
 */
export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-ink-muted">
          <span className="text-terminal">~</span> {year}{" "}
          {t.hero.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-ink-faint">
          {t.footer.builtWith} Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
