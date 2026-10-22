"use client";

/**
 * Lazy-loads Trustindex loader.js. Trustindex must have “rich snippet” disabled in its dashboard
 * so the third-party script never adds review/AggregateRating JSON-LD alongside our schema.
 */
import { useEffect, useRef, useState } from "react";
import { trustindexLoaderSrc } from "@/lib/trustindex";

const RENDER_TIMEOUT_MS = 5000;

type TrustindexWidgetProps = {
  widgetId: string;
  /** Reserved height before the widget loads (avoids layout shift). */
  minHeight: number;
};

function hostHasWidgetContent(host: HTMLElement): boolean {
  if (host.querySelector("iframe, [class*='ti-'], [class*='trustindex'], [id*='trustindex']")) {
    return true;
  }
  return Array.from(host.children).some((el) => el.tagName !== "SCRIPT");
}

type LoadState = "idle" | "pending" | "ready" | "failed";

export function TrustindexWidget({ widgetId, minHeight }: TrustindexWidgetProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [loadState, setLoadState] = useState<LoadState>("idle");
  const scriptInjected = useRef(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || scriptInjected.current) return;

    let renderTimeout: ReturnType<typeof setTimeout> | undefined;
    let mutationObserver: MutationObserver | undefined;

    const markReady = () => {
      setLoadState("ready");
      if (renderTimeout) clearTimeout(renderTimeout);
      mutationObserver?.disconnect();
    };

    const markFailed = () => {
      setLoadState("failed");
      if (renderTimeout) clearTimeout(renderTimeout);
      mutationObserver?.disconnect();
    };

    const scheduleRenderCheck = () => {
      if (renderTimeout) clearTimeout(renderTimeout);
      renderTimeout = setTimeout(() => {
        if (!hostRef.current) return;
        if (hostHasWidgetContent(hostRef.current)) {
          markReady();
        } else {
          markFailed();
        }
      }, RENDER_TIMEOUT_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        if (scriptInjected.current) return;
        scriptInjected.current = true;
        setLoadState("pending");

        mutationObserver = new MutationObserver(() => {
          if (hostRef.current && hostHasWidgetContent(hostRef.current)) {
            markReady();
          }
        });
        mutationObserver.observe(host, { childList: true, subtree: true });

        const script = document.createElement("script");
        script.src = trustindexLoaderSrc(widgetId);
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (hostHasWidgetContent(host)) {
            markReady();
            return;
          }
          scheduleRenderCheck();
        };
        script.onerror = () => markFailed();
        host.appendChild(script);

        observer.disconnect();
      },
      { rootMargin: "240px 0px", threshold: 0.01 }
    );

    observer.observe(host);
    return () => {
      observer.disconnect();
      mutationObserver?.disconnect();
      if (renderTimeout) clearTimeout(renderTimeout);
    };
  }, [widgetId]);

  if (loadState === "failed") {
    return null;
  }

  const reserveHeight = loadState === "ready" ? undefined : minHeight;

  return (
    <div
      ref={hostRef}
      className="trustindex-widget-host w-full overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30"
      style={{ minHeight: reserveHeight }}
      data-trustindex-widget={widgetId}
      aria-busy={loadState !== "ready"}
    />
  );
}
