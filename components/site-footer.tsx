import { Twitter } from "lucide-react";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="py-12 px-4 bg-black/40 border-t border-purple-500/30">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Join the LUMENAIRE Community
        </h3>
        <p className="mt-3 text-purple-200 max-w-2xl mx-auto">
          Follow along, stake your LP positions, and position yourself before
          the crowd arrives.
        </p>

        <a
          href="https://twitter.com/X_LMNR"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 active:scale-[0.98] font-semibold transition"
        >
          <Twitter className="h-4 w-4" />
          Follow on X
        </a>

        <div className="mt-10 border-t border-purple-500/20 pt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-bold text-white tracking-tight">
              LUMENAIRE
            </span>
          </div>
          <p className="text-sm text-purple-200">
            LUMENAIRE ($xLMNR) — The Future of DeFi on Stellar
          </p>
          <p className="text-xs text-purple-300/70">
            &copy; 2026 LUMENAIRE. All rights reserved. &middot; Max Supply:
            333M &middot; Deflationary &middot;{" "}
            <span className="text-orange-400">🔥</span> Burns
          </p>
        </div>
      </div>
    </footer>
  );
}
