"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollAnimationOptions = {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: string;
  start?: string;
  stagger?: number;
};

export function useScrollAnimation<T extends HTMLElement>(
  selector: string,
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const {
      from = { y: 40, opacity: 0 },
      to = { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      start = "top 80%",
      stagger = 0.08,
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll(selector), from, {
        ...to,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [selector, options]);

  return ref;
}
