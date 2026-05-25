import { WalletProvider } from "@/components/staking/WalletProvider";
import "../staking/staking.css";

export default function AdminLayout({
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
