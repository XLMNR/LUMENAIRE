"use client";

import Link from "next/link";
import { ArrowRight, Coins, TrendingUp, Zap } from "lucide-react";
import { smoothJumpTo } from "@/lib/scroll";

type Card = {
  Icon: typeof Zap;
  title: string;
  body: string;
  href?: string;
};

const CARDS: Card[] = [
  {
    Icon: Zap,
    title: "DeFi Platform",
    body: "Powering tipping mechanisms and transaction layers across the Stellar ecosystem.",
  },
  {
    Icon: Coins,
    title: "LP Staking",
    body: "Stake your SDEX liquidity-pool positions and earn $xLMNR rewards continuously, settled on-chain.",
    href: "/staking",
  },
  {
    Icon: TrendingUp,
    title: "Higher Rewards",
    body: "Superior returns compared to current DeFi platforms, paid in $xLMNR.",
  },
];

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
          {CARDS.map(({ Icon, title, body, href }) => {
            const inner = (
              <>
                <div className="h-12 w-12 rounded-md grid place-items-center bg-cyan-400/10 ring-1 ring-cyan-400/30 group-hover:bg-cyan-400/20 transition">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-purple-200 leading-relaxed">{body}</p>
                {href && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition">
                    Open <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </>
            );

            const cardClasses =
              "group block bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-7 hover:border-cyan-400/60 hover:bg-purple-900/40 transition";

            return href ? (
              <Link key={title} href={href} className={cardClasses}>
                {inner}
              </Link>
            ) : (
              <div key={title} className={cardClasses}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
