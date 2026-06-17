import { ArrowUpRight } from "lucide-react";

const XLMNR_ISSUER = "GDKA6WVMFSA73BMEVKPO6WXSSWP4MPRBDJVSXLLSEVIEVH226L5RJ7NL";

type PoolRecord = {
  id: string;
  total_trustlines: string | number;
  reserves: Array<{ asset: string; amount: string }>;
};

type TopPair = {
  rank: number;
  pair: string;
  xlmnrAmount: number;
  trustlines: number;
  poolId: string;
};

async function getTopPairs(): Promise<TopPair[]> {
  try {
    const res = await fetch(
      `https://horizon.stellar.org/liquidity_pools?reserves=xLMNR:${XLMNR_ISSUER}&limit=200`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    const records: PoolRecord[] = data?._embedded?.records ?? [];

    return records
      .map((p) => {
        const xlmnrReserve = p.reserves.find((r) =>
          r.asset.startsWith("xLMNR"),
        );
        const otherReserve = p.reserves.find(
          (r) => !r.asset.startsWith("xLMNR"),
        );
        if (!xlmnrReserve || !otherReserve) return null;
        const otherSymbol =
          otherReserve.asset === "native"
            ? "XLM"
            : otherReserve.asset.split(":")[0];
        return {
          poolId: p.id,
          pair: `xLMNR / ${otherSymbol}`,
          xlmnrAmount: parseFloat(xlmnrReserve.amount),
          trustlines:
            typeof p.total_trustlines === "number"
              ? p.total_trustlines
              : parseInt(p.total_trustlines, 10),
        };
      })
      .filter((p): p is Omit<TopPair, "rank"> => p !== null)
      .sort((a, b) => b.xlmnrAmount - a.xlmnrAmount)
      .slice(0, 10)
      .map((p, i) => ({ ...p, rank: i + 1 }));
  } catch {
    return [];
  }
}

function formatAmount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toFixed(0);
}

export async function Pairs() {
  const topPairs = await getTopPairs();

  return (
    <section id="pairs" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            Trading Pairs
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Over 75 Trading Pairs
          </h2>
          <p className="mt-5 text-xl text-purple-200 text-pretty">
            80% of liquidity focused on top-traded Stellar assets and
            partnerships.
          </p>
        </div>

        {topPairs.length > 0 ? (
          <div className="bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg overflow-hidden">
            {/* Desktop table */}
            <table className="hidden sm:table w-full">
              <thead className="bg-purple-900/40 border-b border-purple-500/30">
                <tr>
                  <th className="text-left text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold py-3 px-4 w-14">
                    #
                  </th>
                  <th className="text-left text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold py-3 px-4">
                    Pair
                  </th>
                  <th className="text-right text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold py-3 px-4">
                    xLMNR Locked
                  </th>
                  <th className="text-right text-[11px] uppercase tracking-[0.2em] text-purple-300 font-semibold py-3 px-4">
                    Holders
                  </th>
                  <th className="w-12 py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {topPairs.map((p) => (
                  <tr
                    key={p.poolId}
                    className="border-b border-purple-500/10 last:border-0 hover:bg-purple-900/20 transition"
                  >
                    <td className="py-3 px-4 text-purple-300 font-mono text-sm">
                      {p.rank}
                    </td>
                    <td className="py-3 px-4 text-white font-semibold">
                      {p.pair}
                    </td>
                    <td className="py-3 px-4 text-right text-cyan-300 font-mono">
                      {formatAmount(p.xlmnrAmount)}
                    </td>
                    <td className="py-3 px-4 text-right text-purple-200 font-mono text-sm">
                      {p.trustlines}
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={`https://stellar.expert/explorer/public/liquidity-pool/${p.poolId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-cyan-300 transition inline-flex"
                        aria-label="View pool on Stellar.Expert"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile cards */}
            <div className="sm:hidden divide-y divide-purple-500/10">
              {topPairs.map((p) => (
                <a
                  key={p.poolId}
                  href={`https://stellar.expert/explorer/public/liquidity-pool/${p.poolId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 px-4 hover:bg-purple-900/20 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-purple-300 font-mono text-sm w-6">
                        {p.rank}
                      </span>
                      <span className="text-white font-semibold">{p.pair}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-purple-300 shrink-0" />
                  </div>
                  <div className="mt-1 ml-9 flex items-center gap-2 text-sm">
                    <span className="text-cyan-300 font-mono">
                      {formatAmount(p.xlmnrAmount)} xLMNR
                    </span>
                    <span className="text-purple-400">•</span>
                    <span className="text-purple-200 font-mono">
                      {p.trustlines} holders
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm rounded-lg p-8 text-center text-purple-200">
            Live pair data unavailable. View all pools on Stellar.Expert.
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={`https://stellar.expert/explorer/public/asset/xLMNR-${XLMNR_ISSUER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
          >
            View all pairs on Stellar.Expert <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
