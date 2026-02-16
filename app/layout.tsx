import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/config/i18n";
import "./globals.css";

/**
 * Font setup using next/font (automatically optimized, no layout shift).
 * Geist is Vercel's clean sans-serif, perfect for modern portfolios.
 * Geist Mono is used for code snippets and tech tags.
 */
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

/**
 * Site-wide metadata.
 *
 * Placeholder values are marked with comments — replace them once
 * you have a real domain, name, and social image.
 */
const siteUrl = "https://valerubio.dev"; // TODO: replace with real domain

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Valentin Rubio Portfolio",
		template: "%s | Valentin Rubio",
	},
	description: "Backend developer transitioning into ML and Data Engineering.",
	keywords: [
		"backend developer",
		"machine learning",
		"data engineering",
		"Python",
		"TypeScript",
		"portfolio",
		"Valentin Rubio",
	],
	authors: [{ name: "Valentin Rubio", url: siteUrl }],
	creator: "Valentin Rubio",
	openGraph: {
		type: "website",
		locale: "es_ES",
		alternateLocale: "en_US",
		url: siteUrl,
		siteName: "Vale Rubio — Portfolio",
		title: "Vale Rubio — Backend & ML Engineer",
		description:
			"Backend developer transitioning into ML and Data Engineering.",
		// TODO: add an OG image once you have one:
		// images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vale Rubio — Portfolio" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Valentin Rubio Portfolio",
		description:
			"Backend developer transitioning into ML and Data Engineering.",
		// TODO: add twitter handle:
		// creator: "@valerubio",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

/**
 * Root Layout - Server Component
 *
 * - suppressHydrationWarning on <html> is required by next-themes
 *   to prevent mismatch between server (no class) and client (.dark class)
 * - ThemeProvider is a Client Component wrapper (see components/theme-provider.tsx)
 * - The layout itself stays as a Server Component for better performance
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-accent-solid focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-white"
				>
					Skip to content
				</a>
				<ThemeProvider>
					<LanguageProvider>{children}</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
