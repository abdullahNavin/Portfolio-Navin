"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: { trigger: section, start: "top 70%" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="— Education"
          title="Academic Background"
          description="A foundation that blends technical learning with a rich humanistic perspective."
        />

        <div className="relative mt-14 pl-8 sm:pl-12">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-fuchsia-400/80 via-violet-500/40 to-transparent sm:left-5"
          />

          <div className="space-y-8">
            {portfolioData.education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[1.35rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border text-sm sm:-left-[1.9rem] ${
                    item.status === "ongoing"
                      ? "border-fuchsia-400/60 bg-slate-950 text-fuchsia-300 shadow-[0_0_24px_rgba(232,121,249,0.5)]"
                      : "border-violet-400/25 bg-slate-950 text-slate-300"
                  }`}
                >
                  {item.status === "ongoing" ? (
                    <span
                      className="h-3 w-3 rounded-full bg-fuchsia-400"
                      style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                    />
                  ) : (
                    <CheckCircle2 size={16} />
                  )}
                </div>

                <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400/20 to-violet-600/20 text-fuchsia-200">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                          {item.degree}
                        </h3>
                        <p className="mt-1 text-base text-slate-300">{item.institution}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                      <span className="rounded-full border border-violet-400/15 bg-violet-400/8 px-4 py-2 text-sm text-fuchsia-100">
                        {item.duration}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "ongoing"
                            ? "border border-fuchsia-400/30 bg-fuchsia-400/15 text-fuchsia-300"
                            : "border border-green-400/20 bg-green-400/10 text-green-300"
                        }`}
                      >
                        {item.status === "ongoing" ? "🎓 Ongoing" : "✓ Completed"}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
