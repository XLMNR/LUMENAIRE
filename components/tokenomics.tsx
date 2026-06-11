import { Coins, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

type Stat = {
  Icon: typeof Coins;
  value: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  {
    Icon: Coins,
    value: "400M",
    label: "Max Supply",
    sub: "$xLMNR",
  },
  {
    Icon: ShieldCheck,
    value: "Buyback",
    label: "Burn Mechanism",
    sub: "auto, on-chain",
  },
  {
    Icon: TrendingUp,
    value: "3 Pools",
    label: "SDEX Liquidity",
    sub: "XLM · SHX · VELO",
  },
  {
    Icon: Sparkles,
    value: "Stellar",
    label: "Chain",
    sub: "low-fee, fast",
  },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Tokenomics
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineered for Scarcity
          </h2>
          <p className="mt-5 text-xl text-purple-200 text-pretty">
            A fixed max supply of 400M $xLMNR, paired with on-chain buybacks
            and burns on Stellar — built for compounding scarcity, not endless
            emission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ Icon, value, label, sub }) => (
            <div
              key={label}
              className="bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-6 hover:border-cyan-400/60 hover:bg-purple-900/40 transition"
            >
              <div className="h-11 w-11 rounded-md grid place-items-center bg-cyan-400/10 ring-1 ring-cyan-400/30">
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="mt-5 text-3xl font-extrabold text-white tracking-tight">
                {value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold">
                {label}
              </div>
              <div className="mt-1 text-sm text-purple-200">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
