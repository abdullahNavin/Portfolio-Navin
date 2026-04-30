"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useSpring(0, { stiffness: 180, damping: 22 });
  const y = useSpring(0, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setVisible(true);
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(0,245,255,0.22),_rgba(0,128,255,0.08)_42%,_transparent_70%)] blur-3xl lg:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    />
  );
}
