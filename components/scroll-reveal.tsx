"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "fade-up" | "scale-in" | "fade" | "flip-up" | "swing-in";

const variants: Record<
  RevealVariant,
  { hidden: TargetAndTransition; visible: TargetAndTransition }
> = {
  "fade-up": {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "flip-up": {
    hidden: { opacity: 0, rotateX: 28, y: 40, transformPerspective: 900 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 900 },
  },
  "swing-in": {
    hidden: { opacity: 0, rotateY: -24, x: -30, transformPerspective: 900 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 900 },
  },
};

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[as];
  const preset = variants[variant];

  return (
    <MotionTag
      className={className}
      initial={preset.hidden}
      whileInView={preset.visible}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </MotionTag>
  );
}
