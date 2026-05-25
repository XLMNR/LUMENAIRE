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

      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/lumenaire-logo.webp"
            alt="Lumenaire"
            width={360}
            height={120}
            className="drop-shadow-[0_0_12px_rgba(0,220,180,0.3)]"
            priority
          />
          <p className="mt-1 text-sm text-gray-400">
            Stake your SDEX LP positions and earn xLMNR rewards
          </p>
        </div>
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
