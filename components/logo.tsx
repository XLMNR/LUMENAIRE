type LogoProps = { size?: number };

export function Logo({ size = 36 }: LogoProps) {
  return (
    <div
      className="rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-900/50 ring-1 ring-white/20"
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #22d3ee 100%)",
        fontSize: size * 0.55,
        letterSpacing: "-0.04em",
      }}
      aria-hidden="true"
    >
      L
    </div>
  );
}
