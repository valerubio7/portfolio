"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/config/i18n";
import { ThemeToggle } from "./theme-toggle";

/**
 * Navbar — Fixed navigation with terminal aesthetic
 *
 * Same background as content (no separate "nav color").
 * Border-bottom appears on scroll via backdrop-blur.
 * Monospace nav links. ES|EN toggle. Hamburger on mobile.
 */

const NAV_LINKS = [
  { key: "about" as const, href: "#about" },
  { key: "projects" as const, href: "#projects" },
  { key: "contact" as const, href: "#contact" },
];

export function Navbar() {
  const { t, locale, toggleLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileOpen, closeMobile]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50",
        "transition-all duration-200",
        scrolled
          ? "border-b border-edge bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 md:px-6">
        {/* Logo — monospace, compact */}
        <a
          href="#hero"
          className="font-mono text-base font-semibold text-ink hover:text-accent transition-colors duration-150"
        >
          <span className="text-terminal">~</span>/portfolio
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="font-mono text-sm text-ink-muted hover:text-ink transition-colors duration-150"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>

        {/* Controls: lang toggle + theme toggle + hamburger */}
        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLocale}
            className={cn(
              "flex h-8 items-center rounded px-2",
              "font-mono text-sm",
              "text-ink-muted hover:text-ink",
              "hover:bg-control-bg transition-colors duration-150",
              "cursor-pointer"
            )}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espanol"}
          >
            <span className={cn(locale === "es" && "text-accent font-medium")}>
              ES
            </span>
            <span className="mx-1 text-ink-faint">/</span>
            <span className={cn(locale === "en" && "text-accent font-medium")}>
              EN
            </span>
          </button>

          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={cn(
              "flex h-8 w-8 flex-col items-center justify-center gap-1 rounded md:hidden",
              "text-ink-muted hover:text-ink",
              "hover:bg-control-bg transition-colors duration-150",
              "cursor-pointer"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block h-px w-3.5 bg-current transition-all duration-200",
                mobileOpen && "translate-y-[3px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-3.5 bg-current transition-all duration-200",
                mobileOpen && "-translate-y-[2px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-edge bg-background/95 backdrop-blur-md md:hidden",
          "transition-all duration-200 ease-out",
          mobileOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3" role="menu">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              role="menuitem"
              onClick={closeMobile}
              className="rounded px-3 py-2 font-mono text-sm text-ink-muted hover:text-ink hover:bg-control-bg transition-colors duration-150"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
