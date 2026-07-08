type Card = { num: string; title: string; body: string };

const CARDS: Card[] = [
  {
    num: "01",
    title: "Origin",
    body: "Born from the Stellar community in 2024 with one thesis: meme energy paired with real utility. Reforged as xLMNR in 2026 with sharper mechanics and a tighter team.",
  },
  {
    num: "02",
    title: "Mission",
    body: "Make DeFi rewards on Stellar genuinely competitive with the largest L1 ecosystems — not just on paper, but in what holders take home.",
  },
  {
    num: "03",
    title: "Promise",
    body: "Every burn is on-chain. Every buyback is automatic. Every holder is early.",
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="relative py-20 px-4 bg-black/20 backdrop-blur-sm border-y border-purple-500/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Journey
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            From Meme to Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map(({ num, title, body }) => (
            <div
              key={num}
              className="bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-6 hover:border-cyan-400/60 hover:bg-purple-900/40 transition"
            >
              <div className="font-mono text-[11px] text-purple-300/70 tracking-[0.2em]">
                {num}
              </div>
              <div className="mt-2 text-xl font-bold text-cyan-300">
                {title}
              </div>
              <p className="mt-3 text-purple-100 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
