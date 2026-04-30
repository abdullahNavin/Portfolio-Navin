"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type LenisWindow = Window & {
  __lenisScrollTo?: (target: string) => void;
};

export function useLenis() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", () => ScrollTrigger.update());

    // Drive Lenis via GSAP ticker so both stay in perfect sync
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Expose scrollTo globally for navbar / hero buttons
    const lenisWindow = window as LenisWindow;
    lenisWindow.__lenisScrollTo = (target) => {
      lenis.scrollTo(target, {
        offset: -96,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      delete lenisWindow.__lenisScrollTo;
    };
  }, []);
}
