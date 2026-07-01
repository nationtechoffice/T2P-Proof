import { clsx, type ClassValue } from "clsx"
import { toggleMerge } from "tailwind-merge"

// Utility function to merge Tailwind classes cleanly without conflicts
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
