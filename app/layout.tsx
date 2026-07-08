import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LUMENAIRE ($LMNR) — The Future of DeFi on Stellar",
  description:
    "The deflationary token powering the future of decentralized finance on Stellar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
