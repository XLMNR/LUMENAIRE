"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HeroDots } from "./hero-dots";
import { smoothJumpTo } from "@/lib/scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.18) 30%, transparent 60%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 text-cyan-400 pointer-events-none"
      >
        <HeroDots count={22} />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -m-10 rounded-full pointer-events-none animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(34,211,238,0.15) 40%, transparent 70%)",
            }}
          />
          <Image
            src="/images/xlmnr-hero.png"
            alt="xLMNR — Lumenaire mascot"
            width={420}
            height={420}
            priority
            className="relative animate-float-slow"
            style={{
              filter:
                "drop-shadow(0 0 28px rgba(168,85,247,0.55)) drop-shadow(0 0 60px rgba(34,211,238,0.25))",
            }}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.95]">
          LUMENAIRE
        </h1>
        <div className="text-2xl text-cyan-300 font-semibold tracking-wider">
          $xLMNR
        </div>

        <div className="mt-2 flex flex-col gap-1 text-2xl md:text-3xl font-extrabold tracking-wider leading-tight text-pretty uppercase">
          <span className="text-cyan-300">
            Stellar moves the money.
          </span>
          <span className="text-white">
            Lumenaire moves the people.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
          <button
            onClick={() => smoothJumpTo("pairs")}
            className="px-6 py-3 rounded-md bg-purple-500 hover:bg-purple-400 active:scale-[0.98] text-black font-bold transition shadow-lg shadow-purple-900/40"
          >
            Buy $xLMNR
          </button>
          <a
            href="https://twitter.com/X_LMNR"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 active:scale-[0.98] font-semibold transition"
          >
            Follow Us
          </a>
          <WhitepaperButton />
        </div>

        <div className="mt-6 text-purple-200 text-sm sm:text-base flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <span className="text-orange-400">🔥</span> Buybacks + Burns
          </span>
          <span className="text-purple-400">•</span>
          <span>Deflationary</span>
          <span className="text-purple-400">•</span>
          <span>333M Max Supply</span>
        </div>

        <button
          onClick={() => smoothJumpTo("about")}
          className="mt-10 text-purple-200/70 hover:text-cyan-300 transition flex flex-col items-center gap-1 text-xs uppercase tracking-[0.2em]"
        >
          <span>Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}

function WhitepaperButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-6 py-3 rounded-md border-2 border-purple-400 text-purple-300 hover:text-purple-200 hover:bg-purple-400/10 active:scale-[0.98] font-semibold transition min-w-[180px]"
    >
      {hovered ? "Coming Soon" : "Whitepaper"}
    </button>
  );
}
