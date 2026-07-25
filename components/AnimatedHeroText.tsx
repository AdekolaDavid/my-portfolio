"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/** Tracks the user's OS-level reduced-motion preference, live. */
function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersReduced(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}

function PauseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="3" height="10" fill="currentColor" />
      <rect x="7" y="1" width="3" height="10" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 1.5L10 6L2.5 10.5V1.5Z" fill="currentColor" />
    </svg>
  );
}

export default function AnimatedHeroText() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Reduced-motion users start paused (opted out by default); everyone else
  // starts playing but can pause explicitly. Either way it's user-controlled.
  const [userPaused, setUserPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) setUserPaused(true);
  }, [prefersReducedMotion]);

  const isPaused = userPaused || isHovered;

  // The words that will cycle through the animation
  const titles = useMemo(
    () => ["Operations", "Systems", "Workflows", "Strategy", "Data Logic"],
    []
  );

  useEffect(() => {
    if (isPaused) return;

    const timeoutId = setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
    }, 2500); // 2.5s so it's readable before sliding

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, isPaused]);

  return (
    <div
      className="flex flex-col select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static sentence for screen readers / SEO — the animation below is aria-hidden */}
      <p className="sr-only">
        Bridging Operations, Systems, Workflows, Strategy, and Data Logic &amp; Design.
      </p>

      {/* Top Static Text */}
      <h1
        aria-hidden="true"
        className="text-[3rem] xl:text-[4.5rem] font-[family-name:var(--font-space)] font-bold tracking-tighter text-slate-900 dark:text-white leading-[0.85] transition-colors duration-500"
      >
        Bridging
      </h1>

      {/* Middle Animated Text Container */}
      <div className="flex items-center gap-3">
        <h1
          aria-hidden="true"
          className="text-[3rem] xl:text-[4.5rem] font-[family-name:var(--font-playfair)] italic tracking-tight text-cyan-500 dark:text-cyan-400 leading-[0.9] transition-colors duration-500 relative flex w-full items-start overflow-hidden h-[3.5rem] xl:h-[5rem] mt-1"
        >
          {titles.map((title, index) =>
            prefersReducedMotion ? (
              // Reduced motion: simple crossfade, no positional movement at all.
              <motion.span
                key={index}
                className="absolute font-semibold"
                initial={false}
                animate={{ opacity: titleNumber === index ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.span>
            ) : (
              <motion.span
                key={index}
                className="absolute font-semibold"
                initial={{ opacity: 0, y: "-100px" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                }
              >
                {title}
              </motion.span>
            )
          )}
        </h1>

        {/* Explicit pause/play control — covers keyboard & touch users hover can't reach */}
        <button
          type="button"
          onClick={() => setUserPaused((prev) => !prev)}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Play title animation" : "Pause title animation"}
          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 transition-colors duration-200"
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>

      {/* Bottom Static Text */}
      <h1
        aria-hidden="true"
        className="text-[3rem] xl:text-[4.5rem] font-[family-name:var(--font-space)] font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white] xl:[-webkit-text-stroke:2px_black] dark:xl:[-webkit-text-stroke:2px_white] leading-[0.9] mt-2 transition-colors duration-500"
      >
        &amp; Design.
      </h1>
    </div>
  );
}
