"use client";

import { ArrowRight, Coins, TrendingUp, Zap } from "lucide-react";
import { smoothJumpTo } from "@/lib/scroll";

const CARDS = [
  {
    Icon: Zap,
    title: "DeFi Platform",
    body: "Powering tipping mechanisms and transaction layers across the Stellar ecosystem.",
  },
  {
    Icon: Coins,
    title: "LP Staking",
    body: "Stake your SDEX liquidity-pool positions and earn $xLMNR rewards continuously, settled on-chain.",
  },
  {
    Icon: TrendingUp,
    title: "Higher Rewards",
    body: "Superior returns compared to current DeFi platforms, paid in $xLMNR.",
  },
] as const;

export function Features() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-black/20 backdrop-blur-sm border-y border-purple-500/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            More Than a Meme
          </h2>
          <p className="mt-5 text-xl text-purple-200 text-pretty">
            $xLMNR is engineered for utility — buybacks, burns, and real
            transaction infrastructure on Stellar. Built to last, built to
            compound.
          </p>
          <button
            onClick={() => smoothJumpTo("tokenomics")}
            className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-purple-500 hover:bg-purple-400 text-black font-bold transition"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-7 hover:border-cyan-400/60 hover:bg-purple-900/40 transition"
            >
              <div className="h-12 w-12 rounded-md grid place-items-center bg-cyan-400/10 ring-1 ring-cyan-400/30 group-hover:bg-cyan-400/20 transition">
                <Icon className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-purple-200 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
