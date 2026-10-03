"use client";

import { useCallback, useState } from "react";

// Persisted "saved / favourite" ids (e.g. bookmarked guides or forms).
// Stored in localStorage so the Saved filter survives reloads.
export function useSaved(key: string) {
  const [saved, setSaved] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      // storage unavailable — start empty
      return [];
    }
  });

  const toggle = useCallback(
    (id: string) => {
      setSaved((prev) => {
        const next = prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id];
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // storage unavailable — keep in-memory state only
        }
        return next;
      });
    },
    [key]
  );

  const isSaved = useCallback((id: string) => saved.includes(id), [saved]);

  return { saved, isSaved, toggle };
}
