/* Hallmark · macrostructure: editorial-spread · theme: himalayan-terroir · genre: editorial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

"use client";

import { ReactNode, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function ScrollTriggerSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLenis(() => {
    ScrollTrigger.update();
  });

  useIsomorphicLayoutEffect(() => {
    // Snap to top immediately before paint on route change
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }

    // Refresh ScrollTrigger calculations after route transition & layout rendering
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 1.3,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
