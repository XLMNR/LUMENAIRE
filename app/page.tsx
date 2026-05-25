import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
