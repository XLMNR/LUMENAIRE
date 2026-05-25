"use client";

import { useMemo } from "react";

type Dot = {
  top: number;
  left: number;
  size: number;
  delay: number;
  dur: number;
  hue: "bg-cyan-400" | "bg-purple-400";
};

export function HeroDots({ count = 22 }: { count?: number }) {
  const dots = useMemo<Dot[]>(() => {
    const arr: Dot[] = [];
    let seed = 1337;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < count; i++) {
      arr.push({
        top: rand() * 100,
        left: rand() * 100,
        size: 4 + rand() * 6,
        delay: rand() * 4,
        dur: 2 + rand() * 4,
        hue: rand() > 0.7 ? "bg-purple-400" : "bg-cyan-400",
      });
    }
    return arr;
  }, [count]);

  return (
    <>
      {dots.map((d, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${d.hue} animate-twinkle pointer-events-none`}
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            boxShadow: "0 0 14px currentColor",
            animationDelay: `${d.delay}s`,
            ["--twk-dur" as string]: `${d.dur}s`,
          }}
        />
      ))}
    </>
  );
}
