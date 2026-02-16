import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

/**
 * Section Heading — Terminal signature
 *
 * Instead of a generic colored bar, uses a prompt indicator ">_"
 * in terminal green + monospace font. This is the signature element
 * that recurs throughout the portfolio.
 */
export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {/* Prompt indicator — the signature */}
      <span className="mb-3 block font-mono text-sm text-terminal">
        {">"}_
      </span>
      <h2 className="font-mono text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
