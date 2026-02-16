"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps the app with next-themes ThemeProvider.
 * Separated into its own file so the root layout stays a Server Component.
 *
 * - attribute="class": Adds/removes .dark class on <html> (Tailwind v4 compatible)
 * - defaultTheme="system": Respects the user's OS preference
 * - enableSystem: Listens for prefers-color-scheme changes
 * - disableTransitionOnChange: Prevents FOUC flash when switching themes
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
