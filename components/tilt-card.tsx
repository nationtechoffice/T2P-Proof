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
 * High-intensity CSS tilt with float, lift, and glare.
 * No Three.js — keeps mobile CWV intact.
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
  const lift = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-22, 22]), {
    stiffness: 220,
    damping: 18,
  });
  const liftSpring = useSpring(lift, { stiffness: 260, damping: 20 });
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.42), transparent 52%)`;
  const shadow = useMotionTemplate`0 ${useTransform(y, [-0.5, 0.5], [26, 50])}px 60px -16px rgba(15,40,60,0.58)`;

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
    lift.set(-18);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    lift.set(0);
  }

  return (
    <div className={`[perspective:1200px] ${className}`}>
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ scale: 1.035 }}
        style={{
          rotateX,
          rotateY,
          y: liftSpring,
          boxShadow: shadow,
          transformStyle: "preserve-3d",
        }}
        className="spatial-card-float group relative block overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-offset-2"
      >
        <div
          className="pointer-events-none absolute -inset-x-6 -bottom-10 h-16 rounded-[100%] bg-slate-900/25 blur-xl"
          style={{ transform: "translateZ(-48px)" }}
          aria-hidden
        />

        <div className="relative aspect-[16/11] overflow-hidden" style={{ transform: "translateZ(1px)" }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
          {icon ? (
            <motion.div
              className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--accent))] text-white shadow-lg"
              style={{ transform: "translateZ(56px)" }}
              animate={{ y: [0, -5, 0], rotateZ: [0, -4, 0, 4, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {icon}
            </motion.div>
          ) : null}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glareBackground }}
          />
        </div>

        <div className="relative p-5" style={{ transform: "translateZ(42px)" }}>
          <h3 className="mb-2 text-lg font-bold text-[hsl(var(--foreground))]">{title}</h3>
          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--primary))] transition-transform group-hover:translate-x-1">
            View service →
          </span>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50"
          style={{ transform: "translateZ(2px)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[6px] rounded-xl border border-orange-400/0 transition-colors duration-300 group-hover:border-orange-400/30"
          style={{ transform: "translateZ(8px)" }}
        />
      </motion.a>
    </div>
  );
}

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
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-16, 16]), {
    stiffness: 220,
    damping: 18,
  });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div className={`[perspective:1200px] ${className}`}>
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
