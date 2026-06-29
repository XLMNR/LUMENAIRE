import { SiteNav } from "@/components/site-nav";
import { Ascension } from "@/components/ascension";
import { Partners } from "@/components/partners";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Collaborations — LUMENAIRE",
  description:
    "Programs and partner projects building alongside Lumenaire across the Stellar ecosystem, including the Ascension Initiative holder rewards program.",
};

export default function CollaborationsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="relative pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
              Ecosystem
            </span>
            <h1 className="mt-3 text-5xl md:text-6xl font-black text-white tracking-tight">
              Collaborations
            </h1>
            <p className="mt-5 text-xl text-purple-200 text-pretty">
              Programs and partner projects building alongside Lumenaire across
              the Stellar ecosystem.
            </p>
          </div>
        </section>

        <Ascension />
        <Partners />
      </main>
      <SiteFooter />
    </>
  );
}
