"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Shared scroll-reveal system (also powers the homepage).
// Auto-tags content on every route so all pages get the same subtle
// fade-up + stagger without per-page animation code.
const AUTO_TAG_SELECTOR = [
  "section h1",
  "section h2",
  "section h3",
  "section .section-eyebrow",
  "section p",
  "section img",
  "section [class*='shadow-card']",
  "section article",
  "section details",
  "section form",
  "section li[class*='rounded']",
  "section div[class*='rounded-xl']",
  "section span[class*='rounded-full']",
].join(", ");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const delayByParent = new Map<Element, number>();
    let observer: IntersectionObserver | null = null;

    function ensureObserver() {
      if (observer || reduceMotion) return observer;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in-view");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
      );
      return observer;
    }

    function tagElement(el: HTMLElement) {
      if (
        el.hasAttribute("data-reveal") ||
        el.classList.contains("reveal") ||
        el.classList.contains("reveal-scale") ||
        el.className.includes("animate-") ||
        el.closest("[data-reveal]")
      ) {
        return;
      }

      // Never animate interactive controls themselves (keeps filters/forms calm).
      if (el.closest("button, a, input, select, textarea")) {
        // Allow cards/articles containing links, but not the controls.
        if (["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA"].includes(el.tagName)) {
          return;
        }
      }

      const isImage = el.tagName === "IMG";
      el.setAttribute("data-reveal", "");
      el.classList.add(isImage ? "reveal-scale" : "reveal");

      // Preserve explicit per-page stagger (homepage sets its own delays).
      if (!el.style.getPropertyValue("--reveal-delay")) {
        const parent = el.parentElement;
        const index = parent ? (delayByParent.get(parent) ?? 0) : 0;
        el.style.setProperty("--reveal-delay", `${Math.min(index * 80, 320)}ms`);
        if (parent) delayByParent.set(parent, index + 1);
      }

      if (reduceMotion) {
        el.classList.add("is-in-view");
        return;
      }
      ensureObserver()?.observe(el);
    }

    function tagRoot(root: ParentNode) {
      const candidates = Array.from(
        root.querySelectorAll<HTMLElement>(AUTO_TAG_SELECTOR),
      );
      for (const el of candidates) tagElement(el);

      if (reduceMotion) return;
      // Anything already tagged (e.g. explicit data-reveal in markup) still
      // needs observing on this route.
      const pretagged = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in-view)"),
      );
      const io = ensureObserver();
      if (io) pretagged.forEach((el) => io.observe(el));
    }

    tagRoot(document);

    // Catch client-rendered / filtered content (guide directory, quiz, matrix).
    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of Array.from(record.addedNodes)) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches?.(AUTO_TAG_SELECTOR)) tagElement(node);
          if (node.querySelectorAll) tagRoot(node);
        }
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      observer = null;
      mutation.disconnect();
    };
  }, [pathname]);

  return null;
}
