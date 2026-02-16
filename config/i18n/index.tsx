"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";
import { es } from "./es";
import { en } from "./en";

/* ============================================
   Type Definitions
   ============================================ */

export type Locale = "es" | "en";

export interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    cta: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
    techTitle: string;
  };
  projects: {
    title: string;
    description: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    description: string;
    infoCommand: string;
    composeCommand: string;
    openTo: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

/* ============================================
   Translations Map
   ============================================ */

const translations: Record<Locale, Translations> = { es, en };

/* ============================================
   Language Context
   ============================================ */

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

/* ============================================
   Language Provider
   ============================================ */

const STORAGE_KEY = "portfolio-locale";

/**
 * Detects the user's preferred language from the browser.
 * Falls back to "es" (Spanish) as the default.
 */
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;

  const browserLang = navigator.language.slice(0, 2);
  return browserLang === "en" ? "en" : "es";
}

/**
 * Detect if we're on the client (mounted) without setState in useEffect.
 */
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer: runs once on mount, avoids setState-in-effect
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const mounted = useIsMounted();

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  // On the server / before hydration, always render "es" to prevent mismatch
  const currentLocale = mounted ? locale : "es";

  return (
    <LanguageContext.Provider
      value={{
        locale: currentLocale,
        t: translations[currentLocale],
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/* ============================================
   Hook
   ============================================ */

export function useTranslation(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
