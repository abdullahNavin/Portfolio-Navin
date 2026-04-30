"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Rocket } from "lucide-react";
import { FaGithub, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBetterauth,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";
import type { ProjectItem } from "@/types";

const techIcons = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  "REST API": CheckCircle2,
  JWT: SiJsonwebtokens,
  "Better Auth": SiBetterauth,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Docker: FaDocker,
  "Framer Motion": SiFramer,
};

type ProjectDetailViewProps = { project: ProjectItem };

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const projects = portfolioData.projects;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="section-shell py-32"
    >
      {/* Back */}
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-fuchsia-300/40 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-200/80">Project Detail</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">{project.name}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">{project.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-violet-400/15 bg-violet-400/8 px-4 py-2 text-sm text-slate-100">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 shadow-[0_8px_32px_rgba(139,92,246,0.35)]"
              >
                Live Demo <ArrowUpRight size={18} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:border-fuchsia-300/40"
              >
                GitHub <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-violet-400/12 bg-gradient-to-br from-fuchsia-400/10 to-violet-600/10">
            <Image src={project.image} alt={`${project.name} preview`} width={1200} height={900} priority className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Overview + Tech Stack */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-violet-400/10 bg-black/15 p-6">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
              {project.overview.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-violet-400/10 bg-black/15 p-6">
            <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.techStack.map((tech) => {
                const Icon = techIcons[tech as keyof typeof techIcons] ?? Rocket;
                return (
                  <div key={tech} className="rounded-2xl border border-violet-400/10 bg-white/5 p-4 text-center">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400/20 to-violet-600/20 text-lg text-fuchsia-200">
                      <Icon />
                    </div>
                    <p className="mt-3 text-sm text-slate-200">{tech}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Challenges + Future Plans */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-violet-400/10 bg-black/15 p-6">
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <ol className="mt-5 space-y-4">
              {project.challenges.map((c, i) => (
                <li key={c} className="flex gap-4 text-slate-300">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fuchsia-400/12 text-sm text-fuchsia-200">{i + 1}</span>
                  <span className="leading-7">{c}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[1.75rem] border border-violet-400/10 bg-black/15 p-6">
            <h2 className="text-2xl font-semibold text-white">Future Plans</h2>
            <ol className="mt-5 space-y-4">
              {project.futurePlans.map((p, i) => (
                <li key={p} className="flex gap-4 text-slate-300">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600/12 text-sm text-fuchsia-200">{i + 1}</span>
                  <span className="leading-7">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`} className="group flex max-w-[48%] items-center gap-3 rounded-[1.5rem] border border-violet-400/15 bg-white/5 px-5 py-4 transition-all hover:border-fuchsia-300/40 hover:bg-white/8">
            <ArrowLeft size={18} className="shrink-0 text-slate-400 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Previous</p>
              <p className="mt-0.5 truncate text-sm font-semibold text-white">{prevProject.name}</p>
            </div>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="group ml-auto flex max-w-[48%] items-center gap-3 rounded-[1.5rem] border border-violet-400/15 bg-white/5 px-5 py-4 transition-all hover:border-fuchsia-300/40 hover:bg-white/8">
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Next</p>
              <p className="mt-0.5 truncate text-sm font-semibold text-white">{nextProject.name}</p>
            </div>
            <ArrowRight size={18} className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : <div />}
      </div>
    </motion.section>
  );
}
