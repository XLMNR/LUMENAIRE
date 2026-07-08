import { Check } from "lucide-react";

type Phase = {
  q: string;
  title: string;
  points: string[];
  status: "done" | "active" | "next";
};

const PHASES: Phase[] = [
  {
    q: "Phase 01",
    title: "Launch & Liquidity",
    status: "done",
    points: [
      "Stellar deployment",
      "Initial DEX liquidity",
      "Community bootstrap",
    ],
  },
  {
    q: "Phase 02",
    title: "xLMNR V2 Migration",
    status: "active",
    points: [
      "Fortify Foundation",
      "Elevate brand, scale holders",
      "Implement faucets",
    ],
  },
  {
    q: "Phase 03",
    title: "Staking · Utility & Yields",
    status: "next",
    points: [
      "Creator integrations",
      "On-chain buyback contract",
      "Soroban smart contracts",
      "Lock in Soroban LP & collabs",
    ],
  },
  {
    q: "Phase 04",
    title: "Tipping Layer",
    status: "next",
    points: [
      "Tip bot",
      "Social tipping API",
      "Creator integrations",
      "Reward pools",
    ],
  },
  {
    q: "Phase 05",
    title: "DeFi Suite",
    status: "next",
    points: [
      "Staking vaults",
      "Cross-chain bridge",
      "Yield routing",
      "Wallet",
      "TBD",
    ],
  },
];

function statusLabel(s: Phase["status"]) {
  switch (s) {
    case "done":
      return "Complete";
    case "active":
      return "In progress";
    case "next":
      return "Upcoming";
  }
}

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-20 px-4 bg-black/20 backdrop-blur-sm border-y border-purple-500/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Roadmap
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Path Forward
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative">
          {/* Connecting line — only at lg: when all 5 cards are in a row */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px bg-gradient-to-r from-purple-500/20 via-cyan-400/40 to-purple-500/20"
          />

          {PHASES.map((p) => {
            const isDone = p.status === "done";
            const isActive = p.status === "active";
            return (
              <li
                key={p.q}
                className="relative bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-5"
              >
                <div
                  className={
                    "absolute -top-3 left-5 h-7 w-7 rounded-full grid place-items-center text-xs font-bold ring-4 ring-slate-950 " +
                    (isDone
                      ? "bg-cyan-400 text-slate-900"
                      : isActive
                        ? "bg-purple-500 text-white animate-pulse-glow"
                        : "bg-purple-900 text-purple-200 ring-purple-500/30")
                  }
                >
                  {isDone ? <Check className="h-4 w-4" /> : p.q.slice(-2)}
                </div>

                <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold">
                  {p.q} · {statusLabel(p.status)}
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  {p.title}
                </div>

                <ul className="mt-3 space-y-1.5">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-purple-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
