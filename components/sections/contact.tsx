"use client";

import { useCallback, useState } from "react";
import { useTranslation } from "@/config/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/**
 * Contact Section — Terminal Session Layout
 *
 * Two-column terminal window:
 * - Left: connection info panel (email, github, linkedin as terminal output)
 * - Right: message form with CLI-flag labels and function-call submit
 *
 * The whole thing sits inside a terminal window card (three dots + border),
 * matching the visual language of the project cards.
 *
 * Replace FORMSPREE_ENDPOINT and CONTACT_LINKS with real values.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

/** Contact channels — replace with your real links */
const CONTACT_LINKS = [
	{
		label: "email",
		value: "rubiovalentin.work@gmail.com",
		href: "mailto:rubiovalentin.work@gmail.com",
	},
	{
		label: "github",
		value: "github.com/valerubio7",
		href: "https://github.com/valerubio7",
	},
	{
		label: "linkedin",
		value: "linkedin.com/in/rubiovalentin",
		href: "https://www.linkedin.com/in/rubiovalentin/",
	},
];

type FormStatus = "idle" | "sending" | "success" | "error";

/** Returns a formatted timestamp like [15:42:03] */
function getTimestamp(): string {
	const now = new Date();
	const h = String(now.getHours()).padStart(2, "0");
	const m = String(now.getMinutes()).padStart(2, "0");
	const s = String(now.getSeconds()).padStart(2, "0");
	return `[${h}:${m}:${s}]`;
}

/** Arrow icon for external links */
function ArrowIcon() {
	return (
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
			className="shrink-0 opacity-40"
		>
			<line x1="7" y1="17" x2="17" y2="7" />
			<polyline points="7 7 17 7 17 17" />
		</svg>
	);
}

export function Contact() {
	const { t } = useTranslation();
	const sectionRef = useScrollAnimation();
	const [status, setStatus] = useState<FormStatus>("idle");
	const [timestamp, setTimestamp] = useState("");

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setStatus("sending");

			const formData = new FormData(e.currentTarget);

			try {
				const res = await fetch(FORMSPREE_ENDPOINT, {
					method: "POST",
					body: formData,
					headers: { Accept: "application/json" },
				});

				setTimestamp(getTimestamp());

				if (res.ok) {
					setStatus("success");
					(e.target as HTMLFormElement).reset();
				} else {
					setStatus("error");
				}
			} catch {
				setTimestamp(getTimestamp());
				setStatus("error");
			}
		},
		[],
	);

	/** Shared monospace field styles */
	const fieldClasses =
		"w-full rounded border border-edge bg-control-bg px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors duration-150 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 hover:border-edge-hover";

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="px-4 pt-10 pb-20 md:px-6 md:pt-16 md:pb-28"
		>
			<div className="mx-auto max-w-4xl">
				<div className="animate-on-scroll">
					<SectionHeading
						title={t.contact.title}
						description={t.contact.description}
					/>
				</div>

				{/* Terminal window card */}
				<div className="animate-on-scroll stagger-1 overflow-hidden rounded-md border border-edge bg-surface-1">
					{/* Window chrome — three dots */}
					<div className="flex items-center gap-1.5 border-b border-edge px-4 py-3">
						<span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
						<span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
						<span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
						<span className="ml-3 font-mono text-[11px] text-ink-muted">
							~/contact
						</span>
					</div>

					{/* Two-column layout */}
					<div className="grid md:grid-cols-[1fr_1.4fr]">
						{/* Left — Connection info panel */}
						<div className="border-b border-edge p-5 md:border-b-0 md:border-r md:p-6">
							{/* Command line */}
							<p className="mb-5 font-mono text-xs">
								<span className="text-terminal">$</span>{" "}
								<span className="text-ink-muted">{t.contact.infoCommand}</span>
							</p>

							{/* Contact links as terminal output lines */}
							<div className="space-y-3">
								{CONTACT_LINKS.map((link) => (
									<a
										key={link.label}
										href={link.href}
										target={link.label !== "email" ? "_blank" : undefined}
										rel={
											link.label !== "email" ? "noopener noreferrer" : undefined
										}
										className="group flex items-center gap-2 font-mono text-xs transition-colors duration-150"
									>
										<span className="w-16 shrink-0 text-ink-muted">
											{link.label}
										</span>
										<span className="text-ink-faint">→</span>
										<span className="text-accent group-hover:text-accent-hover">
											{link.value}
										</span>
										{link.label !== "email" && <ArrowIcon />}
									</a>
								))}
							</div>

							{/* Status note */}
							<p className="mt-6 font-mono text-[11px] text-ink-faint">
								<span className="text-ink-muted">{"// "}</span>
								{t.contact.openTo}
							</p>
						</div>

						{/* Right — Message form */}
						<div className="p-5 md:p-6">
							{/* Command line */}
							<p className="mb-5 font-mono text-xs">
								<span className="text-terminal">$</span>{" "}
								<span className="text-ink-muted">
									{t.contact.composeCommand}
								</span>
							</p>

							<form onSubmit={handleSubmit} className="space-y-4">
								{/* Name + Email row */}
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-1.5">
										<label
											htmlFor="contact-name"
											className="block font-mono text-xs text-ink-secondary"
										>
											{t.contact.nameLabel}
										</label>
										<input
											id="contact-name"
											name="name"
											placeholder={t.contact.namePlaceholder}
											required
											aria-required="true"
											autoComplete="name"
											className={fieldClasses}
										/>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="contact-email"
											className="block font-mono text-xs text-ink-secondary"
										>
											{t.contact.emailLabel}
										</label>
										<input
											id="contact-email"
											name="email"
											type="email"
											placeholder={t.contact.emailPlaceholder}
											required
											aria-required="true"
											autoComplete="email"
											className={fieldClasses}
										/>
									</div>
								</div>

								{/* Message */}
								<div className="space-y-1.5">
									<label
										htmlFor="contact-message"
										className="block font-mono text-xs text-ink-secondary"
									>
										{t.contact.messageLabel}
									</label>
									<textarea
										id="contact-message"
										name="message"
										rows={5}
										placeholder={t.contact.messagePlaceholder}
										required
										aria-required="true"
										className={`${fieldClasses} resize-none`}
									/>
								</div>

								{/* Submit + status */}
								<div className="flex flex-wrap items-center gap-3">
									<Button
										type="submit"
										disabled={status === "sending"}
										className="font-mono"
									>
										{status === "sending" ? t.contact.sending : t.contact.send}
									</Button>

									{/* Status messages — terminal stdout/stderr with timestamp */}
									{status === "success" && (
										<p className="flex items-center gap-1.5 font-mono text-xs text-success">
											<span className="text-ink-faint">{timestamp}</span>
											{t.contact.success}
										</p>
									)}
									{status === "error" && (
										<p className="flex items-center gap-1.5 font-mono text-xs text-destructive">
											<span className="text-ink-faint">{timestamp}</span>
											{t.contact.error}
										</p>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
