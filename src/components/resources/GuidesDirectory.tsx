"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, Bookmark, BookmarkCheck, Search } from "lucide-react";

import { GuideDownloadButton } from "@/components/guides/GuidePdfButtons";
import { toPdfInput } from "@/lib/guide-pdf";
import { getGuideDetails } from "@/lib/rpl-guide-details";
import {
  RPL_BROAD_INDUSTRIES,
  RPL_CATEGORIES,
  RPL_GUIDES,
  countGuidesByBroadIndustry,
  guideMatchesIndustry,
} from "@/lib/rpl-guides";
import { useSaved } from "@/lib/use-saved";

export type GuideSort = "recent" | "title" | "industry";

export const GUIDE_SORTS: { value: GuideSort; label: string }[] = [
  { value: "recent", label: "Recently updated" },
  { value: "title", label: "Title A–Z" },
  { value: "industry", label: "Industry" },
];

function updatedTime(guide: { updated: string }): number {
  const t = Date.parse(guide.updated);
  return Number.isNaN(t) ? 0 : t;
}

export function GuidesDirectory({
  initialQuery = "",
  initialIndustry = "All",
  initialCategory = "All",
  initialSort = "recent",
  anchor,
}: {
  initialQuery?: string;
  initialIndustry?: string;
  initialCategory?: string;
  initialSort?: GuideSort;
  // hash anchor to preserve when syncing filter state to the URL
  anchor?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery);
  const [industry, setIndustry] = useState(initialIndustry);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<GuideSort>(initialSort);
  const [savedOnly, setSavedOnly] = useState(false);
  const { saved, toggle, isSaved } = useSaved("skills-connect:saved-guides");

  const syncUrl = (next: { q: string; industry: string; category: string; sort: GuideSort }) => {
    const sp = new URLSearchParams();
    if (next.q.trim()) sp.set("q", next.q.trim());
    if (next.industry !== "All") sp.set("industry", next.industry);
    if (next.category !== "All") sp.set("category", next.category);
    if (next.sort !== "recent") sp.set("sort", next.sort);
    const qs = sp.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}${anchor ? `#${anchor}` : ""}`, {
      scroll: false,
    });
  };

  const update = (patch: { q?: string; industry?: string; category?: string; sort?: GuideSort }) => {
    const next = {
      q: patch.q ?? query,
      industry: patch.industry ?? industry,
      category: patch.category ?? category,
      sort: patch.sort ?? sort,
    };
    if (patch.q !== undefined) setQuery(patch.q);
    if (patch.industry !== undefined) setIndustry(patch.industry);
    if (patch.category !== undefined) setCategory(patch.category);
    if (patch.sort !== undefined) setSort(patch.sort);
    syncUrl(next);
  };

  const clearAll = () => {
    setQuery("");
    setIndustry("All");
    setCategory("All");
    setSort("recent");
    setSavedOnly(false);
    router.replace(`${pathname}${anchor ? `#${anchor}` : ""}`, { scroll: false });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = RPL_GUIDES.filter((g) => {
      if (savedOnly && !saved.includes(g.slug)) return false;
      if (industry !== "All" && !guideMatchesIndustry(g, industry)) return false;
      if (category !== "All" && g.category !== category) return false;
      if (
        q &&
        !`${g.trade} ${g.code} ${g.qualification} ${g.description}`.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
    if (sort === "title") list.sort((a, b) => a.trade.localeCompare(b.trade));
    else if (sort === "industry")
      list.sort((a, b) => a.category.localeCompare(b.category) || a.trade.localeCompare(b.trade));
    else
      list.sort(
        (a, b) => updatedTime(b) - updatedTime(a) || a.trade.localeCompare(b.trade)
      );
    return list;
  }, [query, industry, category, sort, savedOnly, saved]);

  const industries: string[] = ["All", ...RPL_BROAD_INDUSTRIES];
  const categories: string[] = ["All", ...RPL_CATEGORIES];

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => update({ q: e.target.value })}
            placeholder="Search by trade, qualification name or code (e.g. carpentry, CHC43015)"
            aria-label="Search guides"
            className="h-11 w-full rounded-lg border border-border bg-card pr-4 pl-11 text-sm shadow-card outline-none placeholder:text-muted-foreground focus:border-accent"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={industry}
            onChange={(e) => update({ industry: e.target.value })}
            aria-label="Filter by industry"
            className="h-11 rounded-lg border border-border bg-card px-4 text-sm shadow-card outline-none focus:border-accent"
          >
            {industries.map((i) => (
              <option key={i} value={i}>
                {i === "All" ? "All industries" : i}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => update({ sort: e.target.value as GuideSort })}
            aria-label="Sort guides"
            className="h-11 rounded-lg border border-border bg-card px-4 text-sm shadow-card outline-none focus:border-accent"
          >
            {GUIDE_SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                Sort: {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Industry filters">
        {industries.map((i) => {
          const count = i === "All" ? RPL_GUIDES.length : countGuidesByBroadIndustry(i);
          const active = industry === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => update({ industry: i })}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
              }`}
            >
              {i === "All" ? "All industries" : i} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-2" aria-label="Category filters">
        {categories.map((c) => {
          const count =
            c === "All" ? RPL_GUIDES.length : RPL_GUIDES.filter((g) => g.category === c).length;
          const active = category === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => update({ category: c })}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "border-accent bg-accent/15 text-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
              }`}
            >
              {c === "All" ? "All guides" : c} ({count})
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setSavedOnly((v) => !v)}
          aria-pressed={savedOnly}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
            savedOnly
              ? "border-accent bg-accent/15 text-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
          }`}
        >
          {savedOnly ? <BookmarkCheck className="size-3.5" /> : <Bookmark className="size-3.5" />}
          Saved ({saved.length})
        </button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" role="status">
        Showing {filtered.length} of {RPL_GUIDES.length} guides
        {(industry !== "All" || category !== "All" || query.trim() || savedOnly) && (
          <>
            {" "}
            <button
              type="button"
              onClick={clearAll}
              className="font-semibold text-accent hover:underline"
            >
              Clear filters
            </button>
          </>
        )}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-xl border border-border bg-card p-10 text-center shadow-card">
          <p className="text-lg font-semibold">No guides match your search</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different trade name, code, or clear the filters to browse the full list.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            View all guides <ArrowRight className="size-4" />
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guide) => {
            const details = getGuideDetails(guide.slug);
            const savedActive = isSaved(guide.slug);
            return (
              <article
                key={guide.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                    {guide.category}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggle(guide.slug)}
                    aria-pressed={savedActive}
                    aria-label={savedActive ? `Remove ${guide.trade} from saved` : `Save ${guide.trade}`}
                    title={savedActive ? "Saved" : "Save for later"}
                    className={`rounded-md p-1.5 transition-colors ${
                      savedActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-accent"
                    }`}
                  >
                    {savedActive ? (
                      <BookmarkCheck className="size-4" />
                    ) : (
                      <Bookmark className="size-4" />
                    )}
                  </button>
                </div>
                <h3 className="mt-2 text-xl font-bold">{guide.trade}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {guide.code} — {guide.qualification}
                </p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{guide.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">Updated {guide.updated}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4">
                  <Link
                    href={`/rpl-evidence-guides/${guide.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    Read guide <ArrowRight className="size-4" />
                  </Link>
                  {details && <GuideDownloadButton input={toPdfInput(guide, details)} />}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
