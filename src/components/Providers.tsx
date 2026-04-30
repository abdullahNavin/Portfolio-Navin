"use client";

import { type ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";

type ProvidersProps = {
  children: ReactNode;
};

// useLenis handles both Lenis init AND GSAP ScrollTrigger registration
// in one place, keeping them in sync via gsap.ticker
export function Providers({ children }: ProvidersProps) {
  useLenis();
  return children;
}
