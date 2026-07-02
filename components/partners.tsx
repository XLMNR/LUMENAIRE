import {
  Droplets,
  CreditCard,
  Sparkles,
  Wrench,
  Crown,
  ArrowUpRight,
} from "lucide-react";

type Partner = {
  name: string;
  role: string;
  body: string;
  href?: string;
  cta?: string;
  Icon: typeof Droplets;
};

const PARTNERS: Partner[] = [
  {
    name: "Stellar Drip",
    role: "Distribution Partner",
    body: "A decentralized community faucet for distributing and claiming Stellar assets with automated daily distribution.",
    href: "https://stellar-drip.base44.app/faucet/6a03258f91ecc4e3102fff70",
    cta: "Claim Free xLMNR",
    Icon: Droplets,
  },
  {
    name: "ACT",
    role: "Payment Partner",
    body: "Digital payments and services on Stellar, partnering on the Ascension Initiative.",
    href: "https://authentic-payment.com/",
    Icon: CreditCard,
  },
  {
    name: "JDM",
    role: "Community Partner",
    body: "Just Dumb Memes Coins — community memecoin collective on Stellar, joining the Ascension Initiative.",
    href: "https://justdumbmemescoins.netlify.app/",
    Icon: Sparkles,
  },
  {
    name: "BLUFAB",
    role: "Automation Partner",
    body: "Node-based visual automation platform for Stellar. Build, run, and monitor on-chain workflows without code.",
    href: "https://blufabric.org/",
    Icon: Wrench,
  },
  {
    name: "GAMBIT",
    role: "Prediction Market Partner",
    body: "Non-custodial chess prediction market on Stellar. Bet XLM on live grandmaster matches with trustless Soroban settlement.",
    href: "https://gambit64.com/",
    Icon: Crown,
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Partners
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Partners &amp; Collaborations
          </h2>
          <p className="mt-5 text-xl text-purple-200 text-pretty">
            Projects we build, distribute, and grow with across the Stellar
            ecosystem.
          </p>
        </div>

        <div
          className={
            PARTNERS.length === 1
              ? "flex justify-center"
              : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {PARTNERS.map(({ name, role, body, href, cta, Icon }) => (
            <div
              key={name}
              className="bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-7 max-w-md w-full mx-auto hover:border-cyan-400/60 hover:bg-purple-900/40 transition flex flex-col"
            >
              <div className="h-12 w-12 rounded-md grid place-items-center bg-cyan-400/10 ring-1 ring-cyan-400/30">
                <Icon className="h-7 w-7 text-cyan-400" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">{name}</h3>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold">
                {role}
              </div>
              <p className="mt-3 text-purple-200 leading-relaxed flex-1">
                {body}
              </p>

              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition self-start"
                >
                  {cta ?? "Visit"} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
