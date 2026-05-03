"use client";

import { FormEvent, useMemo, useState } from "react";
import { Check, Copy, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  mail: Mail,
  phone: Phone,
  "message-circle": MessageCircle,
  "map-pin": MapPin,
};

type FormState = "idle" | "submitting" | "success";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const methods = useMemo(() => portfolioData.contact.methods, []);

  const handleCopy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1500);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("submitting");
    window.setTimeout(() => {
      setFormState("success");
      form.reset();
      window.setTimeout(() => setFormState("idle"), 3500);
    }, 1200);
  };

  const inputCls =
    "w-full rounded-2xl border border-violet-400/15 bg-black/15 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-400/50 focus:shadow-[0_0_0_3px_rgba(232,121,249,0.1)] transition-all";

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="— Get In Touch"
          title={portfolioData.contact.heading}
          description={portfolioData.contact.intro}
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: contact cards */}
          <div className="space-y-4">
            {methods.map((method, index) => {
              const Icon = iconMap[method.icon];
              const isLocation = method.icon === "map-pin";
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
                  className="glass-panel flex items-center justify-between gap-4 rounded-[1.75rem] p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400/20 to-violet-600/20 text-fuchsia-200">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{method.label}</p>
                      <a
                        href={method.href}
                        target={method.href.startsWith("https://") ? "_blank" : undefined}
                        rel={method.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                        className="text-base font-medium text-white hover:text-fuchsia-200 transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                  {!isLocation && (
                    <button
                      type="button"
                      onClick={() => handleCopy(method.label, method.value)}
                      className="rounded-full border border-violet-400/15 bg-white/5 p-3 text-slate-300 hover:border-fuchsia-300/40 hover:text-white transition-colors"
                      aria-label={`Copy ${method.label}`}
                    >
                      {copied === method.label ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-panel rounded-4xl p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex min-h-80 flex-col items-center justify-center gap-5 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400/20 to-violet-600/20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    >
                      <Check size={36} className="text-fuchsia-300" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">Message Sent!</p>
                    <p className="mt-2 text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-400">Name *</span>
                      <input type="text" required className={inputCls} placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-400">Email *</span>
                      <input type="email" required className={inputCls} placeholder="you@example.com" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-400">Subject</span>
                    <input type="text" className={inputCls} placeholder="Project inquiry" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-400">Message *</span>
                    <textarea required rows={6} className={`${inputCls} resize-none rounded-3xl`} placeholder="Tell me a bit about what you're building." />
                  </label>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex min-w-44 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-600 px-6 py-3 font-semibold text-white shadow-[0_8px_32px_rgba(139,92,246,0.35)] transition-all hover:scale-105 hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {formState === "submitting" ? (
                      <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Sending...</>
                    ) : "Send Message →"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
