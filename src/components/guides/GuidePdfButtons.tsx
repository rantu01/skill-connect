"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Eye, LoaderCircle, Printer, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  downloadGuidePdf,
  getGuidePdfPreviewUrl,
  type GuidePdfInput,
} from "@/lib/guide-pdf";

export function GuidePdfButtons({ input }: { input: GuidePdfInput }) {
  const [downloading, setDownloading] = useState(false);
  const [buildingPreview, setBuildingPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewFailed, setPreviewFailed] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const closePreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setPreviewFailed(false);
  };

  const togglePreview = async () => {
    if (previewUrl) {
      closePreview();
      return;
    }
    setBuildingPreview(true);
    setPreviewFailed(false);
    try {
      const url = await getGuidePdfPreviewUrl(input);
      setPreviewUrl(url);
      requestAnimationFrame(() =>
        previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    } catch (err) {
      console.error(`[guide-pdf] preview failed slug=${input.slug}`, err);
      setPreviewFailed(true);
    } finally {
      setBuildingPreview(false);
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadGuidePdf(input);
    } catch (err) {
      console.error(`[guide-pdf] download failed slug=${input.slug}`, err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 print:hidden">
        <Button variant="hero" size="lg" onClick={handleDownload} disabled={downloading}>
          {downloading ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
          {downloading ? "Preparing PDF…" : "Download this guide (PDF)"}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={togglePreview}
          disabled={buildingPreview}
          aria-expanded={!!previewUrl}
        >
          {buildingPreview ? <LoaderCircle className="size-4 animate-spin" /> : <Eye className="size-4" />}
          {buildingPreview ? "Building preview…" : previewUrl ? "Hide PDF preview" : "Preview the PDF"}
        </Button>
        <Button variant="outline" size="lg" onClick={() => window.print()}>
          <Printer className="size-4" /> Print
        </Button>
      </div>

      <div ref={previewRef} className="scroll-mt-24 print:hidden">
        {previewFailed && (
          <p className="mt-8 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground shadow-card">
            The preview could not be created in this browser. You can still download the
            guide as a PDF.
          </p>
        )}
        {previewUrl && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-3">
              <p className="text-sm font-semibold">PDF preview</p>
              <p className="text-xs text-muted-foreground">
                Exactly what downloads — scroll inside the panel to read every page.
              </p>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={previewUrl} target="_blank" rel="noreferrer">
                    Open in new tab
                  </a>
                </Button>
                <Button variant="ghost" size="sm" onClick={closePreview}>
                  <X className="size-4" /> Close
                </Button>
              </div>
            </div>
            <iframe
              src={previewUrl}
              title={`${input.trade} RPL evidence portfolio guide PDF preview`}
              className="h-[70vh] max-h-[760px] min-h-[520px] w-full bg-secondary"
            />
            <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
              If the preview stays blank, your browser can&apos;t display PDFs inline — use
              &quot;Open in new tab&quot; or download the guide.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export function GuideDownloadButton({ input }: { input: GuidePdfInput }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadGuidePdf(input);
    } catch (err) {
      console.error(`[guide-pdf] download failed slug=${input.slug}`, err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={downloading}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline disabled:cursor-wait disabled:opacity-70"
    >
      {downloading ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
      {downloading ? "Preparing…" : "Download PDF"}
    </button>
  );
}
