import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  imageAlt?: string;
  projectUrl?: string;
  codeUrl?: string;
  viewProjectLabel: string;
  viewCodeLabel: string;
  className?: string;
}

/**
 * Project Card — Code block aesthetic
 *
 * Looks like a terminal window / code block:
 * - Header with three dots (macOS window controls)
 * - Title in monospace
 * - Tech tags styled as inline `code` backticks
 * - Minimal border, no drop shadows
 * - Sharp corners (rounded-md, 6px)
 */
export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  imageAlt,
  projectUrl,
  codeUrl,
  viewProjectLabel,
  viewCodeLabel,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-md",
        "border border-edge bg-surface-1",
        "transition-all duration-200 ease-out",
        "hover:border-edge-hover",
        className
      )}
    >
      {/* Terminal window header */}
      <div className="flex items-center gap-1.5 border-b border-edge px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="ml-2 font-mono text-xs text-ink-muted">{title}</span>
      </div>

      {/* Project image */}
      {imageUrl && (
        <div className="relative aspect-video overflow-hidden border-b border-edge bg-surface-2">
          <Image
            src={imageUrl}
            alt={imageAlt || `Screenshot of ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="font-mono text-base font-semibold text-ink group-hover:text-accent transition-colors duration-150">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
          {description}
        </p>

        {/* Tech tags — inline code style */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded bg-accent-subtle px-2 py-0.5 font-mono text-[11px] font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="mt-4 flex items-center gap-4 border-t border-edge pt-3">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-accent hover:text-accent-hover transition-colors duration-150"
            >
              <ArrowUpRightIcon />
              {viewProjectLabel}
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-ink-muted hover:text-ink transition-colors duration-150"
            >
              <GitBranchIcon />
              {viewCodeLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* Icons — minimal, technical. Git branch instead of generic GitHub logo. */

function ArrowUpRightIcon() {
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
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function GitBranchIcon() {
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
    >
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}
