"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, type MouseEvent, type ReactNode } from "react";

type TiltCardProps = {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon?: ReactNode;
  className?: string;
};

/**
 * Lightweight CSS 3D perspective tilt — no Three.js bundle cost.
 * Preferable for mobile CWV vs React Three Fiber for simple service cards.
 */
export function TiltCard({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  className = "",
}: TiltCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 280,
    damping: 24,
  });
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 55%)`;

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative block overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-[0_18px_40px_-20px_rgba(15,40,60,0.45)] transition-shadow hover:shadow-[0_28px_50px_-18px_rgba(15,40,60,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-transparent" />
          {icon ? (
            <div
              className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent))] text-white shadow-lg"
              style={{ transform: "translateZ(36px)" }}
            >
              {icon}
            </div>
          ) : null}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glareBackground }}
          />
        </div>
        <div className="relative p-5" style={{ transform: "translateZ(28px)" }}>
          <h3 className="mb-2 text-lg font-bold text-[hsl(var(--foreground))]">{title}</h3>
          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            {description}
          </p>
          <span className="mt-4 inline-flex text-sm font-semibold text-[hsl(var(--primary))]">
            View service →
          </span>
        </div>
        {/* Depth plate */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40"
          style={{ transform: "translateZ(1px)" }}
        />
      </motion.a>
    </div>
  );
}

/** Non-link tilt shell for wrapping existing interactive cards */
export function TiltShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 260,
    damping: 22,
  });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
