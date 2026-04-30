import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

// Syne: editorial, modern — used for the brand logo "Navin."
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navin-portfolio.vercel.app"),
  title: {
    default: "Abdullah Al Fayed Navin | Full Stack Developer",
    template: "%s | Abdullah Al Fayed Navin",
  },
  description:
    "A modern glassmorphism portfolio for Abdullah Al Fayed Navin, a Full Stack Developer focused on scalable web applications, polished user experiences, and clean architecture.",
  keywords: [
    "Abdullah Al Fayed Navin",
    "Full Stack Developer",
    "Next.js portfolio",
    "TypeScript developer",
    "Backend Engineer",
  ],
  openGraph: {
    title: "Abdullah Al Fayed Navin | Full Stack Developer",
    description:
      "Explore projects, skills, education, and contact details for Abdullah Al Fayed Navin.",
    url: "https://navin-portfolio.vercel.app",
    siteName: "Navin Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Fayed Navin | Full Stack Developer",
    description:
      "Glassmorphism portfolio showcasing full-stack projects, skills, and experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${syne.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full overflow-x-hidden bg-background text-foreground selection:bg-fuchsia-400/20"
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
