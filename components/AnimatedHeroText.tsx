"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeroText() {
  const [titleNumber, setTitleNumber] = useState(0);
  
  // The words that will cycle through the animation
  const titles = useMemo(
    () => ["Operations", "Systems", "Workflows", "Strategy", "Data Logic"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500); // Changed to 2.5s so it's readable before sliding
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="flex flex-col select-none">
      {/* Top Static Text */}
      <h1 className="text-[3rem] xl:text-[4.5rem] font-[family-name:var(--font-space)] font-bold tracking-tighter text-slate-900 dark:text-white leading-[0.85] transition-colors duration-500">
        Bridging
      </h1>
      
      {/* Middle Animated Text Container */}
      <h1 className="text-[3rem] xl:text-[4.5rem] font-[family-name:var(--font-playfair)] italic tracking-tight text-cyan-500 dark:text-cyan-400 leading-[0.9] transition-colors duration-500 relative flex w-full items-start overflow-hidden h-[3.5rem] xl:h-[5rem] mt-1">
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold"
            initial={{ opacity: 0, y: "-100px" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </h1>

      {/* Bottom Static Text */}
      <h1 className="text-[3rem] xl:text-[4.5rem] font-[family-name:var(--font-space)] font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white] xl:[-webkit-text-stroke:2px_black] dark:xl:[-webkit-text-stroke:2px_white] leading-[0.9] mt-2 transition-colors duration-500">
        & Design.
      </h1>
    </div>
  );
}