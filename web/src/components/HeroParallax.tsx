"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Fija (pin) la primera sección hija mientras el usuario sigue haciendo
// scroll, y la segunda sección hija sube y la cubre al soltarse. Separa
// visualmente el hero del resto del sitio. Respeta prefers-reduced-motion:
// si está activado, no se fija nada, el scroll es normal.
export function HeroParallax({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const pinTarget = wrap.querySelector<HTMLElement>("[data-parallax-pin]");
    if (!pinTarget) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinTarget,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 0.6)}`,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return <div ref={wrapRef}>{children}</div>;
}
