"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, registerGsap } from "@/lib/gsap";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** GSAP animation style */
  variant?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
  duration?: number;
  y?: number;
};

const variantFrom: Record<
  NonNullable<AnimateInProps["variant"]>,
  gsap.TweenVars
> = {
  "fade-up": { opacity: 0, y: 40 },
  "fade-in": { opacity: 0 },
  "scale-in": { opacity: 0, scale: 0.92 },
  "slide-left": { opacity: 0, x: -48 },
  "slide-right": { opacity: 0, x: 48 },
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  duration = 0.85,
  y,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const from = { ...variantFrom[variant] };
    if (y !== undefined && "y" in from) from.y = y;

    gsap.set(el, from);

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay: delay / 1000,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, variant, duration, y]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
