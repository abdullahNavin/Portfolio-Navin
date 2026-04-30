"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

type LenisWindow = Window & {
  __lenisScrollTo?: (target: string) => void;
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = useMemo(() => portfolioData.navItems, []);
  const rafRef = useRef<number>(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll opacity trigger
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reliable active section detection:
  // On each animation frame, find which section's top is closest to 30% down the viewport
  useEffect(() => {
    const detect = () => {
      const viewportMid = window.innerHeight * 0.3;

      let closest = navItems[0].id;
      let closestDist = Infinity;

      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Distance from section top to 30% mark — prefer sections that have passed the mark
        const dist = Math.abs(rect.top - viewportMid);
        if (rect.top <= viewportMid + window.innerHeight * 0.5 && dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      setActiveSection(closest);
      rafRef.current = requestAnimationFrame(detect);
    };

    rafRef.current = requestAnimationFrame(detect);
    return () => cancelAnimationFrame(rafRef.current);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const lenisWindow = window as LenisWindow;
    lenisWindow.__lenisScrollTo?.(`#${id}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-fuchsia-400 to-violet-600"
        style={{ scaleX }}
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
        <div className="section-shell">
          <nav
            className={`relative flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled
                ? "border border-fuchsia-400/20 bg-[#0d0520]/85 shadow-[0_8px_32px_rgba(124,58,237,0.25),inset_0_1px_0_rgba(232,121,249,0.1)] backdrop-blur-2xl"
                : "border border-fuchsia-400/10 bg-[#0d0520]/60 shadow-[0_4px_20px_rgba(124,58,237,0.12),inset_0_1px_0_rgba(232,121,249,0.06)] backdrop-blur-xl"
            }`}
          >
            {/* Subtle inner gradient shimmer on glass */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-400/[0.05] via-transparent to-violet-600/[0.05]" />

            {/* Brand logo */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="relative z-10 text-2xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              <span className="gradient-text drop-shadow-[0_0_12px_rgba(232,121,249,0.5)]">
                {portfolioData.shortName}
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="relative hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative z-10 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/20 to-violet-600/20 border border-fuchsia-400/30 shadow-[0_0_16px_rgba(232,121,249,0.2)]"
                        transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((o) => !o)}
              className="relative z-10 inline-flex rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-2 text-white lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="section-shell mt-2 lg:hidden"
            >
              <div className="rounded-2xl border border-fuchsia-400/15 bg-[#0d0520]/90 p-2 shadow-[0_16px_40px_rgba(124,58,237,0.3)] backdrop-blur-2xl">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-fuchsia-400/15 to-violet-600/15 text-white border border-fuchsia-400/20"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-fuchsia-400/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
