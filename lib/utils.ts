import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with clsx and resolves Tailwind conflicts with twMerge.
 * Example: cn("p-4 bg-red-500", condition && "bg-blue-500") => "p-4 bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
