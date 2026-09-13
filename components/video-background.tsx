"use client";

import { useEffect, useRef, useState } from "react";

type VideoBackgroundProps = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  className?: string;
  /** When true, skip loading the video until near viewport (for below-fold clips). */
  lazy?: boolean;
  priority?: boolean;
};

/**
 * Muted autoplay loop for hero / showcase backgrounds.
 * Shows a sharp poster instantly, then fades to video once enough data is buffered.
 * MP4-first for Safari + reliable progressive download (requires faststart moov).
 */
export function VideoBackground({
  mp4Src,
  webmSrc,
  posterSrc,
  className = "",
  lazy = false,
  priority = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!lazy || shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [lazy, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || failed) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      const result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(() => {
          /* keep poster until user gesture / next canplay */
        });
      }
    };

    const markReady = () => {
      setReady(true);
      tryPlay();
    };

    if (video.readyState >= 2) markReady();

    video.addEventListener("canplay", markReady);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("error", () => setFailed(true));

    if (priority) {
      video.load();
      tryPlay();
    }

    return () => {
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("loadeddata", markReady);
    };
  }, [shouldLoad, failed, priority, mp4Src]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      {shouldLoad && !failed ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "none"}
          poster={posterSrc}
          aria-hidden="true"
        >
          <source src={mp4Src} type="video/mp4" />
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        </video>
      ) : null}
    </div>
  );
}
