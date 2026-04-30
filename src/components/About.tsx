"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const countersEl = countersRef.current;
    if (!section || !countersEl) return;

    const ctx = gsap.context(() => {
      portfolioData.about.stats.forEach((stat, i) => {
        const el = countersEl.querySelector<HTMLElement>(`[data-counter="${i}"]`);
        if (!el) return;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stat.value,
            duration: 1.8,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: countersEl, start: "top 80%" },
            onUpdate() {
              el.innerText = Math.round(Number(el.innerText)) + stat.suffix;
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="— About Me"
          title={portfolioData.about.title}
          description="A quick look at the story, mindset, and habits behind the work."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="mb-8 inline-flex rounded-full border border-fuchsia-300/15 bg-white/5 px-4 py-2 text-sm text-fuchsia-100">
              Crafting durable digital experiences
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {portfolioData.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Stats</p>
            <div ref={countersRef} className="mt-8 space-y-5">
              {portfolioData.about.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-violet-400/12 bg-black/15 px-5 py-4"
                >
                  <div data-counter={index} className="text-3xl font-bold gradient-text">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
