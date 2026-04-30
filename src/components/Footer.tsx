import { FaFacebook, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  "Twitter/X": FaXTwitter,
  Facebook: FaFacebook,
};

export function Footer() {
  return (
    <footer className="relative border-t border-violet-400/15 py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />
      <div className="section-shell flex flex-col items-center justify-center gap-5 text-center">
        <div className="text-2xl font-semibold">
          <span className="gradient-text">{portfolioData.shortName}</span>
        </div>
        <p className="text-sm text-slate-400">{portfolioData.footerTagline}</p>
        <div className="flex items-center gap-3">
          {portfolioData.socialLinks.map((social) => {
            const Icon = socialIcons[social.label as keyof typeof socialIcons];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass-panel glass-panel-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-100 transition-transform hover:scale-110"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-slate-500">
          Designed &amp; Built by Abdullah Al Fayed Navin
        </p>
        <p className="text-sm text-slate-500">
          © 2026 — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
