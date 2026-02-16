"use client";

import { useTranslation } from "@/config/i18n";
import { Button } from "@/components/ui/button";

/**
 * Hero Section — Terminal prompt aesthetic
 *
 * The first impression. Structured like a terminal session:
 * - "$ whoami" as the introductory line
 * - Name in large monospace with blinking cursor
 * - Role highlighted in accent (like syntax highlighting)
 * - Description in sans-serif (deliberate contrast with mono)
 * - CTAs styled as terminal commands
 *
 * Full viewport height, content centered vertically.
 */
export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 md:px-6"
    >
      <div className="mx-auto w-full max-w-4xl pt-14">
        {/* Terminal prompt line */}
        <div className="mb-6 flex items-center gap-2">
          <span className="font-mono text-sm text-terminal">$</span>
          <span className="font-mono text-sm text-ink-muted">whoami</span>
        </div>

        {/* Name — large mono, the main visual anchor */}
        <h1 className="font-mono text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          {t.hero.name}
          <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] bg-accent" />
        </h1>

        {/* Role — syntax highlighted */}
        <p className="mt-4 font-mono text-lg text-ink-secondary sm:text-xl">
          <span className="text-ink-faint">{"// "}</span>
          <span className="text-accent">{t.hero.role}</span>
        </p>

        {/* Description — sans-serif for readability, deliberate contrast */}
        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button as="a" href="#projects" size="lg">
            {t.hero.cta}
          </Button>
          <Button as="a" href="#contact" variant="outline" size="lg">
            {t.hero.contact}
          </Button>
        </div>

        {/* Subtle scroll indicator */}
        <div className="mt-16 flex items-center gap-2 text-ink-faint md:mt-24">
          <span className="font-mono text-xs">scroll</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
