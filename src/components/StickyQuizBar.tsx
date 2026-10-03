"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export function StickyQuizBar() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("skills-connect:quiz-bar-dismissed")) {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  const dismiss = () => {
    sessionStorage.setItem("skills-connect:quiz-bar-dismissed", "1");
    setDismissed(true);
    trackEvent("quiz_sticky_bar_dismiss");
  };

  return (
    <div
      role="region"
      aria-label="Free skills check"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/15 bg-primary text-primary-foreground shadow-card"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-3 sm:justify-between">
        <p className="text-sm font-medium">
          <span className="font-semibold text-accent">Free:</span> Find out what your experience
          is worth in 60 seconds.
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/skills-check"
            onClick={() => trackEvent("quiz_sticky_bar_click")}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Take the free skills check
            <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss free skills check bar"
            className="inline-flex size-9 items-center justify-center rounded-md text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}