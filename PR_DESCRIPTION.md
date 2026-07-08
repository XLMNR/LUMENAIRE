# Rebuild thelumenaire.com: full Next.js site + xLMNR staking + collaborations

Replaces the single "Under Construction" placeholder page with a complete
Next.js 14 marketing site, an integrated LP staking app, and a collaborations
page — all under the existing domain, with the `stellar.toml` asset metadata
preserved intact.

## What's included

### Marketing home page (`/`)
- **Nav** — frosted glass, scroll-tracking active section, mobile sheet menu,
  Buy $xLMNR CTA. Links out to the Collabs and Staking pages.
- **Hero** — xLMNR character mascot, animated starfield, manifesto
  ("Stellar moves the money. Lumenaire moves the people."), CTA row
  (Buy / Claim Free xLMNR / Follow / Whitepaper), supply strip.
- **Features** — "More Than a Meme" three-card grid (LP Staking card links
  to `/staking`).
- **Tokenomics** — 333M max supply, buyback/burn, liquidity provision,
  Stellar chain stat tiles.
- **Trading Pairs** — "Over 75 Trading Pairs" with a live top-20 list
  fetched from Horizon (hourly revalidate), each linking to Stellar.Expert.
- **Roadmap** — five phases (Launch → xLMNR V2 Migration → Staking →
  Tipping Layer → DeFi Suite).
- **Journey** — Origin / Mission / Promise.
- **Footer** — community CTA, Follow on X + Follow on Telegram.

### Staking app (`/staking`, `/admin`)
- Full LP staking UI ported from the existing staking site: wallet connect
  (Stellar Wallets Kit), stake / claim / unstake, rewards ticker, epoch
  countdown, add-liquidity panel, admin dashboard.
- New xLMNR "STAKE. EARN." infographic hero banner.
- Cron + proof API routes (`/api/cron`, `/api/proof/[pool]/[address]`).
- Wallet provider scoped to these routes only (not loaded on marketing pages).

### Collaborations page (`/collaborations`)
- The Ascension Initiative holder-rewards infographic.
- Partner cards: Stellar Forge (+ Stellar Drip faucet), ACT, JDM, BLUFAB,
  GAMBIT — each with a description and site link.

### Preserved / infrastructure
- `/.well-known/stellar.toml` still served with the correct
  `Content-Type: text/plain` + `Access-Control-Allow-Origin: *` headers
  (moved to `next.config.js` `headers()` — verified wallets keep resolving
  the xLMNR asset).
- TypeScript throughout, Tailwind, lucide-react. Vercel builds passing on
  every preview.

## After merge — required to fully activate staking

Merging this deploys the site to production, but the staking dashboard shows
a "placeholder" banner until these environment variables are set in the
Vercel project (they are intentionally not committed):

| Var | Purpose |
|-----|---------|
| `NEXT_PUBLIC_CONTRACT_ID` | xLMNR staking contract (`CBDA7H3X…BVAE`) |
| `NEXT_PUBLIC_ADMIN_WALLET` | admin address for the admin page gate |
| `NEXT_PUBLIC_RPC_URL` / `NEXT_PUBLIC_HORIZON_URL` / `NEXT_PUBLIC_NETWORK_PASSPHRASE` | mainnet endpoints |
| `POOL_CONFIG` | JSON of the three xLMNR SDEX pools (XLM / SHX / VELO) |
| `CRON_SECRET` | bearer auth for the daily `/api/cron` |
| `ADMIN_SECRET_KEY` | signs the daily Merkle-root + reconcile transactions |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob (proofs + epoch manifests) |

A full handoff doc with exact values / where-to-get is being prepared
separately.

## Notes
- Production `stellar.toml` behavior is unchanged — this was smoke-tested to
  confirm CORS + content-type match the current live values.
- The daily cron is **not** scheduled in this repo yet (`vercel.json` cron
  entry omitted) so nothing auto-runs against the contract until env vars
  are in place and a cron schedule is added.
