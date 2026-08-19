"use client";

import { useEffect } from "react";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";

/** Registers GSAP ScrollTrigger once and refreshes on route resize */
export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return children;
}
