import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigateToContact } from "@/lib/navigation";
import heroImage from "@/assets/truck-at-jobsite.jpg";

const Hero = () => (
  <section className="prowash-hero relative mt-20 overflow-hidden bg-charcoal" aria-labelledby="home-title">
    <picture className="absolute inset-0">
      <img src={heroImage} alt="Seattle ProWash's equipped cleaning truck at a residential job" width={1200} height={900} fetchPriority="high" className="prowash-hero-image h-full w-full object-cover" />
    </picture>
    <div className="absolute inset-0 bg-black/40" />
    <div className="prowash-hero-content relative mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16">
      <p className="mb-3 text-sm font-semibold text-white">Roof, gutter &amp; exterior cleaning</p>
      <h1 id="home-title" className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Seattle ProWash</h1>
      <p className="mt-4 max-w-[440px] text-base leading-relaxed text-white sm:text-lg">Locally owned in Kenmore. Cleaning homes across north Seattle and the Eastside.</p>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <Button variant="cta-orange" className="h-12 px-6 text-base" onClick={navigateToContact}>Get a Quote <ArrowRight aria-hidden="true" /></Button>
        <Link to="/gallery" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white">See Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);

export default Hero;
