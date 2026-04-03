"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CostaParallaxBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [110, -90]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.62, 0.36]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y, rotate, opacity }}
        className="absolute -right-28 top-[-7rem] h-[38rem] w-[38rem] lg:-right-8 lg:h-[46rem] lg:w-[46rem]"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_42%_36%,rgba(255,247,222,0.92),rgba(255,247,222,0.32)_23%,transparent_52%)] blur-3xl" />
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_54%_50%,rgba(163,216,236,0.5),transparent_58%)] blur-[70px]" />

        <svg
          aria-hidden="true"
          viewBox="0 0 640 640"
          className="h-full w-full text-[#f8fcfe]"
        >
          <defs>
            <linearGradient
              id="sea-ribbon"
              x1="120"
              y1="160"
              x2="520"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="rgba(255,255,255,0.92)" />
              <stop offset="0.48" stopColor="rgba(217,240,248,0.58)" />
              <stop offset="1" stopColor="rgba(135,194,219,0.16)" />
            </linearGradient>
            <linearGradient
              id="shoreline"
              x1="116"
              y1="170"
              x2="494"
              y2="390"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="rgba(255,255,255,0.88)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.18)" />
            </linearGradient>
          </defs>

          <circle cx="414" cy="188" r="104" fill="rgba(255,243,211,0.7)" />
          <circle cx="414" cy="188" r="76" fill="rgba(255,248,232,0.88)" />

          <path
            d="M116 224c58-60 138-84 220-66 84 18 150 70 194 154"
            fill="none"
            stroke="url(#shoreline)"
            strokeDasharray="7 14"
            strokeLinecap="round"
            strokeWidth="6"
          />

          <circle cx="126" cy="222" r="15" fill="rgba(255,255,255,0.95)" />
          <circle cx="520" cy="386" r="20" fill="rgba(255,255,255,0.95)" />
          <circle cx="520" cy="386" r="8" fill="rgba(100,167,198,0.8)" />

          <path
            d="M80 360c94-44 196-48 296-8 66 26 120 40 186 24"
            fill="none"
            stroke="url(#sea-ribbon)"
            strokeLinecap="round"
            strokeWidth="22"
          />
          <path
            d="M64 430c102-46 210-42 300 2 64 30 116 42 188 22"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeLinecap="round"
            strokeWidth="16"
          />
          <path
            d="M98 500c92-42 190-38 272 4 54 28 98 38 160 20"
            fill="none"
            stroke="rgba(240,251,255,0.42)"
            strokeLinecap="round"
            strokeWidth="10"
          />

          <path
            d="M464 276c12 20 28 36 46 48 10 6 14 18 10 30-6 18-30 20-44 4-18-20-30-42-36-66"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </svg>
      </motion.div>
    </div>
  );
}
