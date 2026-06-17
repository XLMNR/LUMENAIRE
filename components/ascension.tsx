import Image from "next/image";

export function Ascension() {
  return (
    <section
      id="ascension"
      className="relative py-20 px-4 bg-black/20 backdrop-blur-sm border-y border-purple-500/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Holder Rewards
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Ascension Initiative
          </h2>
          <p className="mt-5 text-xl text-purple-200 text-pretty">
            Rewarding conviction. Tier-based airdrops, vetted ecosystem access,
            and priority incentives for holders who position before the crowd.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-2xl w-full bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <Image
              src="/images/ascension-initiative.jpg"
              alt="The Ascension Initiative — LUMENAIRE Holder Rewards Program. Tier I (Ascension Member): hold 3.33M+ xLMNR for eligibility in 7 annual airdrops, ecosystem access, and future holder incentives. Tier II (Ascension Elite): hold 5.89M+ xLMNR for all Tier I benefits plus enhanced airdrop allocations and priority access. Snapshot in the second half of the first week of June."
              width={989}
              height={1280}
              className="w-full h-auto rounded-md"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 640px"
            />
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-purple-300/70">
          Snapshot is based on $xLMNR in your wallet — LP positions are rewarded
          separately through staking.
        </p>
      </div>
    </section>
  );
}
