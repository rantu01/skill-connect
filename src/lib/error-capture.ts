import type { ReactNode } from "react";

export function reportLovableError(error: unknown, context?: { boundary: string }) {
  console.error(`[lovable-error] ${context?.boundary ?? "unknown"}`, error);
}

export function renderErrorPage(): string {
  return "<h1>Something went wrong</h1>";
}