import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Input & Textarea — Terminal form fields
 *
 * Inset feel: background slightly darker than surroundings (control-bg).
 * Sharp radius (rounded, 4px). Monospace labels.
 * Focus ring uses accent violet.
 */

const fieldStyles = cn(
  "w-full rounded border border-edge bg-control-bg px-3 py-2.5",
  "text-sm text-ink placeholder:text-ink-faint",
  "transition-colors duration-150",
  "focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30",
  "hover:border-edge-hover"
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block font-mono text-xs font-medium text-ink-secondary"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(fieldStyles, className)}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, id, ...props }, ref) => {
    const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={textareaId}
          className="block font-mono text-xs font-medium text-ink-secondary"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={5}
          className={cn(fieldStyles, "resize-none", className)}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
