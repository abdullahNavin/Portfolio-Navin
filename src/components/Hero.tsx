"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

type LenisWindow = Window & {
  __lenisScrollTo?: (target: string) => void;
};

// Heading words with alternating brightness for Athos-style effect
// Building Modern Web Apps with Clean Code & Clear Purpose
const headingWords = [
  { text: "Building", dim: true },
  { text: "Modern", dim: true },
  { text: "Web", dim: false },
  { text: "Apps", dim: false },
  { text: "with", dim: false },
  { text: "Clean", dim: false },
  { text: "Code", dim: true },
  { text: "&", dim: false },
  { text: "Clear", dim: true },
  { text: "Purpose", dim: false },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Avatar
      tl.fromTo(
        "[data-hero-avatar]",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        0
      )
        // Badge
        .fromTo(
          "[data-hero-badge]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.2
        )
        // Heading words stagger
        .fromTo(
          "[data-hero-word]",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 },
          0.4
        )
        // Subheading
        .fromTo(
          "[data-hero-sub]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.75
        )
        // Buttons
        .fromTo(
          "[data-hero-btns]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          0.9
        );
    }, el);

    return () => ctx.revert();
  }, []);

  const handleProjectsClick = () => {
    const w = window as LenisWindow;
    w.__lenisScrollTo?.("#projects");
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* ── Background radial purple glow ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(88,28,220,0.55) 0%, rgba(59,10,120,0.28) 38%, rgba(20,5,50,0.10) 65%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Static outer darkening layer */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 50%, rgba(8,4,15,0.9) 100%)",
        }}
      />

      {/* ── Avatar + Badge ── */}
      <div data-hero-avatar className="relative mb-8 flex flex-col items-center">
        {/* Glow ring behind avatar */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400/40 to-violet-700/30 blur-xl scale-110" />

        {/* Avatar circle */}
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-fuchsia-400/40 shadow-[0_0_40px_rgba(168,85,247,0.35)]">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-violet-700/20" />
          <Image
            src={portfolioData.profileImage}
            alt="Abdullah Al Fayed Navin"
            width={112}
            height={112}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        {/* Floating badge — overlaps bottom of avatar */}
        <div
          data-hero-badge
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/30 bg-black/70 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(168,85,247,0.25)] backdrop-blur-md">
            <span className="text-fuchsia-300">✦</span>
            Full Stack Developer
          </span>
        </div>
      </div>

      {/* ── Heading ── */}
      <h1
        className="mt-6 max-w-3xl text-center font-extrabold leading-[1.12] tracking-tight"
        style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        aria-label="Designed to Build & Ship Modern Web Apps"
      >
        {headingWords.map((word, i) => (
          <span
            key={i}
            data-hero-word
            className={`mr-[0.2em] inline-block last:mr-0 ${word.dim
              ? "text-white/35"
              : "text-white drop-shadow-[0_0_20px_rgba(232,121,249,0.3)]"
              }`}
          >
            {word.text}
          </span>
        ))}
      </h1>

      {/* ── Subheading ── */}
      <p
        data-hero-sub
        className="mt-7 max-w-xl text-center text-base leading-7 text-slate-400 sm:text-lg"
      >
        Crafting fast, scalable, and beautiful web experiences — from pixel-perfect frontends to robust backend systems.
      </p>

      {/* ── CTA Buttons ── */}
      <div
        data-hero-btns
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {/* Primary — dark filled */}
        <a
          href={portfolioData.resumePath}
          download
          className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_4px_24px_rgba(255,255,255,0.12)] transition-all duration-200 hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-[1.03]"
        >
          <Download size={16} />
          Download Resume
        </a>

        {/* Secondary — ghost outline */}
        <button
          type="button"
          onClick={handleProjectsClick}
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-fuchsia-400/50 hover:bg-fuchsia-400/8 hover:scale-[1.03]"
        >
          View Projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
