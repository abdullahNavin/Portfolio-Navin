"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DatabaseZap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html5: FaHtml5,
  css3: FaCss3Alt,
  nodejs: FaNodeJs,
  api: FaCode,
  sql: DatabaseZap,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  default: DatabaseZap,
};

const skillsData = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 94, icon: "react" },
      { name: "Next.js", level: 95, icon: "nextjs" },
      { name: "TypeScript", level: 92, icon: "typescript" },
      { name: "Tailwind CSS", level: 93, icon: "tailwind" },
      { name: "HTML5", level: 96, icon: "html5" },
      { name: "CSS3", level: 90, icon: "css3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 91, icon: "nodejs" },
      { name: "MongoDB", level: 88, icon: "mongodb" },
      { name: "PostgreSQL", level: 87, icon: "postgresql" },
      { name: "Prisma", level: 90, icon: "prisma" },
      { name: "SQL", level: 85, icon: "sql" },
      { name: "REST API", level: 89, icon: "api" },
    ],
  },
];

const segmentMask = {
  WebkitMaskImage: "repeating-linear-gradient(to right, black 0%, black 6px, transparent 6px, transparent 9px)",
  maskImage: "repeating-linear-gradient(to right, black 0%, black 6px, transparent 6px, transparent 9px)",
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section || !leftPanelRef.current || !rightPanelRef.current) return;

    const ctx = gsap.context(() => {
      // Slide in panels
      gsap.fromTo(
        leftPanelRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        }
      );
      gsap.fromTo(
        rightPanelRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        }
      );

      // Stagger skill cards inside left panel
      if (leftPanelRef.current) {
        gsap.fromTo(
          leftPanelRef.current.querySelectorAll("[data-skill-card]"),
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: leftPanelRef.current, start: "top 80%" },
          }
        );
      }

      // Stagger skill cards inside right panel
      if (rightPanelRef.current) {
        gsap.fromTo(
          rightPanelRef.current.querySelectorAll("[data-skill-card]"),
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: rightPanelRef.current, start: "top 80%" },
          }
        );
      }

      // Animate progress bars from 0 → target width
      section.querySelectorAll<HTMLElement>("[data-skill-bar]").forEach((bar) => {
        const target = bar.getAttribute("data-target") ?? "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: bar, start: "top 90%" },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-[#0a0a12] py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="— Skills"
          title="My Technical Arsenal"
          description="A practical toolkit shaped around fast interfaces, dependable APIs, and production-ready workflows."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillsData.map((category, idx) => {
            const isLeft = idx === 0;
            return (
              <div
                key={category.title}
                ref={isLeft ? leftPanelRef : rightPanelRef}
                className="rounded-2xl border border-white/5 bg-[#0f0f1a] p-6 sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <span className="rounded-lg border border-white/10 bg-[#1e1a2e]/50 px-3 py-1.5 text-xs font-bold tracking-widest text-[#888899]">
                    {category.items.length} SKILLS
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {category.items.map((skill) => {
                    const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? iconMap.default;
                    return (
                      <div
                        key={skill.name}
                        data-skill-card
                        className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1e1a2e] text-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] group-hover:text-[#e040fb]">
                            <Icon />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-base font-bold text-white">{skill.name}</span>
                            <span className="text-sm font-medium text-[#888899]">{skill.level}%</span>
                          </div>
                        </div>

                        <div className="mt-2 flex flex-col gap-2">
                          {/* Segmented Progress Bar */}
                          <div className="h-2.5 w-full rounded-full bg-[#2a2a3a]" style={segmentMask}>
                            <div
                              data-skill-bar
                              data-target={skill.level}
                              className="h-full w-0 rounded-full bg-gradient-to-r from-[#e040fb] to-[#7c3aed]"
                            />
                          </div>

                          {/* Secondary Small Pill Indicators */}
                          <div className="flex gap-1.5">
                            {[0, 1, 2, 3, 4].map((dot) => {
                              const dotValue = (dot + 1) * 20;
                              const isFilled = skill.level >= dotValue - 10; // Show filled if close enough
                              return (
                                <span
                                  key={`${skill.name}-${dot}`}
                                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                    isFilled
                                      ? "bg-gradient-to-r from-[#e040fb] to-[#7c3aed]"
                                      : "bg-[#2a2a3a]"
                                  }`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
