"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type SpatialFieldProps = {
  children?: ReactNode;
  className?: string;
  /** Intensity of mouse parallax (0–1). */
  intensity?: number;
  /** Show ambient floating orbs/planes. */
  orbs?: boolean;
  tone?: "dark" | "light";
};

/**
 * Mouse-reactive depth stage — parallax planes and drifting orbs.
 * Pure CSS/Framer; no WebGL cost.
 */
export function SpatialField({
  children,
  className = "",
  intensity = 0.55,
  orbs = true,
  tone = "dark",
}: SpatialFieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.4 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-12 * intensity, 12 * intensity]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10 * intensity, -10 * intensity]);
  const shiftX = useTransform(sx, [-0.5, 0.5], [-40 * intensity, 40 * intensity]);
  const shiftY = useTransform(sy, [-0.5, 0.5], [-28 * intensity, 28 * intensity]);
  const counterX = useTransform(shiftX, (v) => v * -0.7);
  const counterY = useTransform(shiftY, (v) => v * -0.7);
  const boostX = useTransform(shiftX, (v) => v * 1.25);
  const boostY = useTransform(shiftY, (v) => v * 0.95);
  const spin = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const glowX = useTransform(sx, [-0.5, 0.5], [18, 82]);
  const glowY = useTransform(sy, [-0.5, 0.5], [22, 78]);
  const glow = useMotionTemplate`radial-gradient(680px circle at ${glowX}% ${glowY}%, ${
    tone === "dark" ? "rgba(244,125,49,0.22)" : "rgba(244,125,49,0.14)"
  }, transparent 55%)`;
  const contentRX = useTransform(rotateX, (v) => v * 0.35);
  const contentRY = useTransform(rotateY, (v) => v * 0.35);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(event: PointerEvent) {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      mx.set((event.clientX - rect.left) / rect.width - 0.5);
      my.set((event.clientY - rect.top) / rect.height - 0.5);
    }

    function onLeave() {
      mx.set(0);
      my.set(0);
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  const orbTone = tone === "dark" ? "bg-orange-400/25" : "bg-orange-500/20";

  return (
    <div ref={ref} className={`relative isolate overflow-hidden ${className}`}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: glow }}
      />

      {orbs ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] [perspective:1200px]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <motion.div
            className={`spatial-float absolute -right-[8%] top-[12%] h-52 w-52 rounded-[2rem] border border-white/15 ${orbTone} blur-[1px]`}
            style={{ x: shiftX, y: shiftY, translateZ: 80 }}
          />
          <motion.div
            className="spatial-float-slow absolute -left-[6%] bottom-[18%] h-40 w-40 rounded-full border border-cyan-200/20 bg-cyan-400/15"
            style={{ x: counterX, y: counterY, translateZ: 120 }}
          />
          <motion.div
            className="spatial-orbit absolute bottom-[22%] right-[18%] h-28 w-28 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-[2px]"
            style={{ x: boostX, y: boostY, translateZ: 160, rotateZ: spin }}
          />
          <div className="spatial-ring absolute left-[20%] top-[28%] h-64 w-64 rounded-full border border-dashed border-white/20" />
        </motion.div>
      ) : null}

      <motion.div
        className="relative z-[2]"
        style={{
          rotateX: contentRX,
          rotateY: contentRY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
