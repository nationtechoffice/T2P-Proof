"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type VideoBackgroundProps = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  posterAlt?: string;
  className?: string;
  /** Below-fold clips only — hero should keep this false/omit. */
  lazy?: boolean;
  priority?: boolean;
};

/**
 * Always-on muted looping hero/background video.
 * Retries autoplay on mount, visibility, focus, and first user gesture
 * so it starts without requiring a hard refresh.
 */
export function VideoBackground({
  mp4Src,
  webmSrc,
  posterSrc,
  posterAlt = "Handyman Pros FL technician on a Tampa drywall, paint, and TV mounting job",
  className = "",
  lazy = false,
  priority = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const [playing, setPlaying] = useState(false);

  const ensurePlaying = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    // Keep looping even if the loop attribute is ignored
    if (video.ended) {
      video.currentTime = 0;
    }

    const attempt = video.play();
    if (attempt && typeof attempt.then === "function") {
      attempt
        .then(() => setPlaying(true))
        .catch(() => {
          /* Browser may block until a gesture — retries below handle it */
        });
    }
  }, []);

  // Lazy load below-fold only
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
      { rootMargin: "240px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [lazy, shouldLoad]);

  // Start / restart playback whenever the video is in the DOM
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => setPlaying(true);
    const onPause = () => {
      // Resume if paused unexpectedly (tab switch, soft nav, etc.)
      if (!video.ended && document.visibilityState === "visible") {
        ensurePlaying();
      }
    };
    const onEnded = () => {
      video.currentTime = 0;
      ensurePlaying();
    };
    const onCanPlay = () => ensurePlaying();
    const onLoadedData = () => ensurePlaying();
    const onVisibility = () => {
      if (document.visibilityState === "visible") ensurePlaying();
    };
    const onPageShow = () => ensurePlaying();
    const onGesture = () => ensurePlaying();

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onLoadedData);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("focus", onGesture);
    // First tap/click/keydown unlocks autoplay policies if needed
    document.addEventListener("pointerdown", onGesture, { once: true, passive: true });
    document.addEventListener("touchstart", onGesture, { once: true, passive: true });
    document.addEventListener("keydown", onGesture, { once: true });

    // Kick off immediately + after layout
    ensurePlaying();
    const raf = requestAnimationFrame(() => ensurePlaying());
    const t1 = window.setTimeout(ensurePlaying, 100);
    const t2 = window.setTimeout(ensurePlaying, 500);
    const t3 = window.setTimeout(ensurePlaying, 1500);

    // If hero scrolls into view again, keep playing
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) ensurePlaying();
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) io.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      io.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("focus", onGesture);
      document.removeEventListener("pointerdown", onGesture);
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("keydown", onGesture);
    };
  }, [shouldLoad, mp4Src, ensurePlaying]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Poster underneath until video is actually playing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt={posterAlt}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoad ? (
        <video
          ref={videoRef}
          key={mp4Src}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          // Prefer direct src — more reliable autoplay than nested <source>
          src={mp4Src}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload={priority || !lazy ? "auto" : "metadata"}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        </video>
      ) : null}
    </div>
  );
}
