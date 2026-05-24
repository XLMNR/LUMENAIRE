import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.18) 30%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-5xl px-4">
        <div className="relative">
          <Image
            src="/images/xLMNRnoBG.png"
            alt="LUMENAIRE mascot"
            width={256}
            height={256}
            priority
            className="animate-float-slow"
            style={{
              filter:
                "drop-shadow(0 0 28px rgba(168,85,247,0.55)) drop-shadow(0 0 60px rgba(34,211,238,0.25))",
            }}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] text-white">
          LUMENAIRE
        </h1>
        <p className="text-2xl text-cyan-300 font-semibold tracking-wider">
          $LMNR
        </p>
        <p className="text-xl text-purple-100 max-w-2xl text-pretty">
          The deflationary token powering the future of decentralized finance on
          Stellar.
        </p>

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-cyan-300/70 font-semibold">
          Site rebuild in progress · preview deploy
        </p>
      </div>
    </main>
  );
}
