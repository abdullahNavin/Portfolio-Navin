"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="— Projects"
          title="Things I've Built"
          description="A few selected builds that reflect product thinking, scalable architecture, and attention to user experience."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel glass-panel-hover group flex h-full flex-col overflow-hidden rounded-[2rem]"
            >
              {/* Image with hover overlay */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-400/30 backdrop-blur-sm text-white hover:bg-fuchsia-400/50 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub for ${project.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600/30 backdrop-blur-sm text-white hover:bg-violet-600/50 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/10 to-violet-600/10" />
                <Image
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  width={900}
                  height={640}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold">
                  <span className="gradient-text">{project.name}</span>
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-violet-400/12 bg-violet-400/8 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-200 transition-colors hover:text-fuchsia-300"
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
