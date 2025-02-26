"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import React, { useMemo } from "react";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const locale = useLocale();
  const rtlLocale = ["he", "ar"];
  const rows = new Array(50).fill(1);
  const cols = new Array(50).fill(1);
  const colors = ["--sky-600", "--red-600", "--blue-500", "--gray-200"];

  const randomColors = useMemo(
    () =>
      rows.map(() =>
        cols.map(() =>
          Math.random() > 0.99
            ? `var(${colors[Math.floor(Math.random() * colors.length)]})`
            : "transparent"
        )
      ),
    []
  );

  return (
    <div
      style={{
        transform: `${
          !rtlLocale.includes(locale)
            ? "skewX(-48deg) skewY(14deg) scale(0.675)"
            : "skewX(-48deg) skewY(14deg) scale(0.675)"
        } translateZ(0)`,
      }}
      className={cn(
        `absolute ${!rtlLocale.includes(locale) ? 'right-0' : 'left-1/3'}  -top-1/3 -translate-x-1/2 w-full h-full flex p-4 z-0 opacity-65`,
        className
      )}
      {...rest}
    >
      
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-300 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              style={{ backgroundColor: randomColors[i][j], opacity: 0.2 }}
              className="w-16 h-8 border-r border-t border-slate-300 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
