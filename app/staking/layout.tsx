import { WalletProvider } from "@/components/staking/WalletProvider";
import "./staking.css";

export default function StakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WalletProvider>
      <div className="staking-root">{children}</div>
    </WalletProvider>
  );
}
