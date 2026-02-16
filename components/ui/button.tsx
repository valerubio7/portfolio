import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Button — Technical identity
 *
 * Sharp radius (4px). No soft, rounded pills.
 * Primary uses accent violet. Outline uses edge borders.
 * Transitions are fast (150ms) — no lazy animations.
 */

const variants = {
  primary:
    "bg-accent-solid text-white hover:bg-accent-solid-hover",
  outline:
    "border border-edge-strong text-ink hover:border-accent hover:text-accent",
  ghost:
    "text-ink-muted hover:text-ink hover:bg-control-bg",
} as const;

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-sm",
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      as = "button",
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded font-medium font-mono",
      "transition-all duration-150 ease-out",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      "disabled:pointer-events-none disabled:opacity-40",
      "cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    if (as === "a") {
      return (
        <a
          className={classes}
          href={props.href}
          target={props.target}
          rel={props.rel}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
