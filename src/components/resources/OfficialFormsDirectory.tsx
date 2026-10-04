"use client";

import { useMemo, useState } from "react";
import { Bookmark, BookmarkCheck, ExternalLink, Eye, FileText, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FORM_SORTS,
  formMatchesQuery,
  sortForms,
  type FormSort,
  type OfficialForm,
} from "@/lib/official-forms";
import { useSaved } from "@/lib/use-saved";

export function OfficialFormsDirectory({
  sectionId,
  eyebrow,
  title,
  description,
  forms,
  states,
  categories,
  note,
  storageKey,
  tone = "default",
}: {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  forms: OfficialForm[];
  states: readonly string[];
  categories: readonly string[];
  note: string;
  storageKey: string;
  tone?: "default" | "secondary";
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [state, setState] = useState("All");
  const [sort, setSort] = useState<FormSort>("recent");
  const [savedOnly, setSavedOnly] = useState(false);
  const [preview, setPreview] = useState<OfficialForm | null>(null);
  const { saved, toggle, isSaved } = useSaved(storageKey);

  const clearAll = () => {
    setQuery("");
    setCategory("All");
    setState("All");
    setSort("recent");
    setSavedOnly(false);
  };

  const filtered = useMemo(() => {
    const list = forms.filter((f) => {
      if (savedOnly && !saved.includes(f.title)) return false;
      if (category !== "All" && f.category !== category) return false;
      if (state !== "All" && f.state !== state) return false;
      return formMatchesQuery(f, query);
    });
    return sortForms(list, sort);
  }, [forms, query, category, state, sort, savedOnly, saved]);

  return (
    <>
      <section
        id={sectionId}
        className={`scroll-mt-24 border-t border-border py-20 sm:py-28 ${
          tone === "secondary" ? "bg-secondary" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>

          <div className="mt-8 flex flex-col gap-3 lg:flex-row">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search forms by title, authority or keyword"
                aria-label="Search forms"
                className="h-11 w-full rounded-lg border border-border bg-card pr-4 pl-11 text-sm shadow-card outline-none placeholder:text-muted-foreground focus:border-accent"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                aria-label="Filter by state or territory"
                className="h-11 rounded-lg border border-border bg-card px-4 text-sm shadow-card outline-none focus:border-accent"
              >
                <option value="All">All states</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as FormSort)}
                aria-label="Sort forms"
                className="h-11 rounded-lg border border-border bg-card px-4 text-sm shadow-card outline-none focus:border-accent"
              >
                {FORM_SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    Sort: {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Quick filters
            </p>
            <div className="mt-2 flex flex-wrap gap-2" aria-label="Category filters">
              {["All", ...categories].map((c) => {
                const count = c === "All" ? forms.length : forms.filter((f) => f.category === c).length;
                const active = category === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
                    }`}
                  >
                    {c} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              State / territory
            </p>
            <div className="mt-2 flex flex-wrap gap-2" aria-label="State filters">
              {["All", ...states].map((s) => {
                const active = state === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setState(s)}
                    aria-pressed={active}
                    className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "border-accent bg-accent/15 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
                    }`}
                  >
                    {s}
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
          </div>

          <p className="mt-6 text-sm text-muted-foreground" role="status">
            Showing {filtered.length} of {forms.length} forms
            {(category !== "All" || state !== "All" || query.trim() || savedOnly) && (
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
              <p className="text-lg font-semibold">No forms match your filters</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different keyword or state, or clear the filters to see every form.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                View all forms
              </button>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((form) => {
                const savedActive = isSaved(form.title);
                return (
                  <Card key={form.title} className="border-border shadow-card">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                        <span className="rounded-full bg-primary px-2.5 py-1 text-primary-foreground">
                          {form.state}
                        </span>
                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">
                          {form.category}
                        </span>
                        <span className="text-muted-foreground">{form.format}</span>
                        <button
                          type="button"
                          onClick={() => toggle(form.title)}
                          aria-pressed={savedActive}
                          aria-label={savedActive ? `Remove ${form.title} from saved` : `Save ${form.title}`}
                          title={savedActive ? "Saved" : "Save for later"}
                          className={`ml-auto rounded-md p-1.5 transition-colors ${
                            savedActive ? "text-accent" : "text-muted-foreground hover:text-accent"
                          }`}
                        >
                          {savedActive ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
                        </button>
                      </div>
                      <div className="mt-4 flex items-start gap-3">
                        <FileText className="mt-0.5 size-5 shrink-0 text-accent" />
                        <div>
                          <p className="font-semibold">{form.title}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{form.authority}</p>
                        </div>
                      </div>
                      <p className="mt-3 flex-1 text-sm text-muted-foreground">{form.body}</p>
                      <p className="mt-3 text-xs text-muted-foreground">
                        Last checked {form.lastChecked}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" onClick={() => setPreview(form)}>
                          <Eye className="size-3.5" /> Preview
                        </Button>
                        <Button variant="hero" size="sm" asChild>
                          <a href={form.href} target="_blank" rel="noreferrer">
                            Open the official form <ExternalLink className="size-3.5" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
          <p className="mt-8 text-xs text-muted-foreground">{note}</p>
        </div>
      </section>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-xl">
          {preview && (
            <>
              <DialogHeader>
                <DialogTitle>{preview.title}</DialogTitle>
                <DialogDescription>
                  {preview.authority} · {preview.state} · {preview.category} · {preview.format}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{preview.body}</p>
              <p className="text-xs text-muted-foreground">
                Last checked {preview.lastChecked}. This form lives on the official website
                and always opens the current version.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="hero" size="sm" asChild>
                  <a href={preview.href} target="_blank" rel="noreferrer">
                    Open the official form <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
