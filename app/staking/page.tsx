import Image from "next/image";
import { ConnectWallet } from "@/components/staking/ConnectWallet";
import { StakingDashboard } from "@/components/staking/StakingDashboard";
import { CONTRACT_ID } from "@/lib/staking/constants";

export default function StakingPage() {
  // Staking goes live only once the contract is configured via env vars
  // (NEXT_PUBLIC_CONTRACT_ID). Until then — including the current window while
  // the contract admin key is being rotated — show a "Coming Soon" state so no
  // one can connect a wallet and stake against an unsecured contract.
  const stakingLive = !!CONTRACT_ID;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Infographic hero banner */}
      <div className="mb-8 overflow-hidden rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/40">
        <Image
          src="/images/staking-hero.jpg"
          alt="Stake. Earn. xLMNR. — Lumenaire HODL & Earn. Stake your xLMNR tokens and earn rewards while supporting the future of the network. 333,000,000 max staking. How it works: 1. Connect your wallet, 2. Choose your amount and stake, 3. Collect rewards automatically. Secure, simple, and community-driven."
          width={853}
          height={1280}
          className="w-full h-auto"
          priority
        />
      </div>

      {stakingLive ? (
        <>
          <div className="mb-6 flex justify-center sm:justify-end">
            <ConnectWallet />
          </div>
          <StakingDashboard />
        </>
      ) : (
        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm px-6 py-12 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Staking
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Coming Soon
          </h2>
          <p className="mt-4 text-purple-200 max-w-md mx-auto">
            xLMNR LP staking is launching shortly. Stake your SDEX
            liquidity-pool positions and earn xLMNR rewards — check back soon.
          </p>
          <a
            href="https://twitter.com/X_LMNR"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold transition"
          >
            Follow for the launch
          </a>
        </div>
      )}

      <footer className="mt-12 border-t border-lmnr-700/20 pt-6 text-center text-xs text-gray-500">
        <p>
          xLMNR LP Staking &middot;{" "}
          <a
            href="https://www.thelumenaire.com"
            className="text-lmnr-400 hover:underline"
          >
            thelumenaire.com
          </a>
        </p>
      </footer>
    </main>
  );
}
