"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { smoothJumpTo } from "@/lib/scroll";

type NavLink = { id: string; label: string; href?: string };

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "pairs", label: "Pairs" },
  { id: "roadmap", label: "Roadmap" },
  { id: "journey", label: "Journey" },
  { id: "collabs", label: "Collabs", href: "/collaborations" },
  { id: "staking", label: "Staking", href: "/staking" },
];

// Route to `/#<id>` (or `/` for the home id) when a scroll target is clicked
// from a page other than the home page.
function scrollTargetHref(id: string): string {
  return id === "home" ? "/" : `/#${id}`;
}

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Section-observer only meaningful on the home page — the sections
    // don't exist on other routes.
    if (!isHome) return;

    const ids = NAV_LINKS.filter((l) => !l.href).map((l) => l.id);
    const visibility = new Map<string, number>();
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(id, entry.intersectionRatio);
          });
          let best = "home";
          let bestVal = -1;
          visibility.forEach((v, k) => {
            if (v > bestVal) {
              bestVal = v;
              best = k;
            }
          });
          if (bestVal > 0.1) setActive(best);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  // Renders a scroll-target link. On the home page it's a button that
  // smooth-scrolls in place; on other pages it's a Link back to /#<id>.
  function renderScrollTarget(
    l: NavLink,
    cls: string,
    onClickAfter?: () => void,
  ) {
    if (isHome) {
      return (
        <button
          key={l.id}
          onClick={() => {
            smoothJumpTo(l.id);
            onClickAfter?.();
          }}
          className={cls}
        >
          {l.label}
        </button>
      );
    }
    return (
      <Link
        key={l.id}
        href={scrollTargetHref(l.id)}
        onClick={onClickAfter}
        className={cls}
      >
        {l.label}
      </Link>
    );
  }

  // Logo/wordmark on the left — behaves like the "Home" scroll target.
  const brand = (
    <>
      <Logo size={36} />
      <span className="font-bold text-white tracking-tight text-lg sm:text-xl group-hover:text-cyan-200 transition">
        LUMENAIRE
      </span>
    </>
  );

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors " +
        (scrolled
          ? "bg-black/40 border-purple-500/40"
          : "bg-black/20 border-purple-500/30")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {isHome ? (
          <button
            onClick={() => smoothJumpTo("home")}
            className="flex items-center gap-3 group"
          >
            {brand}
          </button>
        ) : (
          <Link href="/" className="flex items-center gap-3 group">
            {brand}
          </Link>
        )}

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id;
            const cls =
              "px-3 py-1.5 rounded-md text-sm font-medium transition " +
              (isActive
                ? "text-cyan-300 bg-purple-500/20 ring-1 ring-purple-400/30"
                : "text-purple-100 hover:text-white hover:bg-white/5");
            if (l.href) {
              return (
                <Link key={l.id} href={l.href} className={cls}>
                  {l.label}
                </Link>
              );
            }
            return renderScrollTarget(l, cls);
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {isHome ? (
            <button
              onClick={() => smoothJumpTo("pairs")}
              className="px-3.5 py-1.5 rounded-md text-sm font-bold bg-purple-500 hover:bg-purple-400 text-black transition"
            >
              Buy $xLMNR
            </button>
          ) : (
            <Link
              href="/#pairs"
              className="px-3.5 py-1.5 rounded-md text-sm font-bold bg-purple-500 hover:bg-purple-400 text-black transition"
            >
              Buy $xLMNR
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-purple-500/20 bg-black/60 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const cls =
                "px-3 py-2 rounded-md text-sm font-medium text-left transition " +
                (active === l.id
                  ? "text-cyan-300 bg-purple-500/20"
                  : "text-purple-100 hover:bg-white/5");
              if (l.href) {
                return (
                  <Link
                    key={l.id}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    {l.label}
                  </Link>
                );
              }
              return renderScrollTarget(l, cls, () => setOpen(false));
            })}
            {isHome ? (
              <button
                onClick={() => {
                  smoothJumpTo("pairs");
                  setOpen(false);
                }}
                className="mt-2 px-3 py-2 rounded-md text-sm font-bold bg-purple-500 text-black"
              >
                Buy $xLMNR
              </button>
            ) : (
              <Link
                href="/#pairs"
                onClick={() => setOpen(false)}
                className="mt-2 px-3 py-2 rounded-md text-sm font-bold bg-purple-500 text-black"
              >
                Buy $xLMNR
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
