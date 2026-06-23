import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Tokenomics } from "@/components/tokenomics";
import { Pairs } from "@/components/pairs";
import { Ascension } from "@/components/ascension";
import { Roadmap } from "@/components/roadmap";
import { Journey } from "@/components/journey";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <Tokenomics />
        <Pairs />
        <Ascension />
        <Roadmap />
        <Journey />
      </main>
      <SiteFooter />
    </>
  );
}
