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
 * Muted, playsInline autoplay loop optimized for hero / showcase backgrounds.
 * Falls back to the poster image if autoplay is blocked or the video fails.
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
    const play = video.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => setFailed(true));
    }
  }, [shouldLoad, failed]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Poster always present for LCP / no-JS / autoplay failure */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {shouldLoad && !failed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "metadata" : "none"}
          poster={posterSrc}
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
