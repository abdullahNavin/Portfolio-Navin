"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;

    if (!element) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll(".title-reveal"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        },
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="title-reveal mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300/80">
        {eyebrow}
      </p>
      <h2
        className={`title-reveal animated-underline relative inline-block text-3xl font-semibold sm:text-4xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="title-reveal mt-8 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
