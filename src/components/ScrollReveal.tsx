"use client";

import { useEffect } from "react";

const AUTO_TAG_SELECTOR = [
  "section [class*='shadow-card']",
  "section h1",
  "section h2",
  "section h3",
  "section .section-eyebrow",
  "section img",
  "section p",
].join(", ");

export function ScrollReveal() {
  useEffect(() => {
    // Auto-tag elements that were not explicitly tagged on the homepage.
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(AUTO_TAG_SELECTOR),
    );

    const delayByParent = new Map<Element, number>();

    for (const el of candidates) {
      if (
        el.hasAttribute("data-reveal") ||
        el.classList.contains("reveal") ||
        el.classList.contains("reveal-scale") ||
        el.className.includes("animate-") ||
        el.closest("[data-reveal]")
      ) {
        continue;
      }

      const isImage = el.tagName === "IMG";
      el.setAttribute("data-reveal", "");
      el.classList.add(isImage ? "reveal-scale" : "reveal");

      const parent = el.parentElement;
      const index = parent ? (delayByParent.get(parent) ?? 0) : 0;
      el.style.setProperty("--reveal-delay", `${Math.min(index * 80, 320)}ms`);
      if (parent) delayByParent.set(parent, index + 1);
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
