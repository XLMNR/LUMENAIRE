import Image from "next/image";
import { ConnectWallet } from "@/components/staking/ConnectWallet";
import { StakingDashboard } from "@/components/staking/StakingDashboard";
import { CONTRACT_ID } from "@/lib/staking/constants";

export default function StakingPage() {
  const contractConfigured = !!CONTRACT_ID;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Migration status banner — visible until env vars are set in Vercel */}
      {!contractConfigured && (
        <div className="mb-6 rounded-md border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
          <strong className="font-bold">Staking placeholder.</strong> Contract
          and pool config are not set in this environment. UI is wired up but
          on-chain calls will no-op until the xLMNR contract is migrated and{" "}
          <code className="font-mono">NEXT_PUBLIC_CONTRACT_ID</code> +{" "}
          <code className="font-mono">POOL_CONFIG</code> are populated in
          Vercel.
        </div>
      )}

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

      {/* Connect wallet sits just above the live dashboard */}
      <div className="mb-6 flex justify-center sm:justify-end">
        <ConnectWallet />
      </div>

      <StakingDashboard />

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
