import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dylanPhoto from "@/assets/dylan-owner-patio-pressure-washing.webp";

const AboutPreview = () => (
  <section className="section-spacing bg-white">
    <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2 md:gap-16">
      <img src={dylanPhoto} alt="Dylan cleaning a patio with Seattle ProWash" width={880} height={1184} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover object-center" />
      <div>
        <p className="mb-3 text-sm font-semibold text-brand-navy">Locally owned. Based in Kenmore.</p>
        <h2 className="text-3xl text-foreground md:text-4xl">Meet Dylan</h2>
        <p className="mt-5 max-w-lg text-lg text-muted-foreground">I'm the owner of Seattle ProWash. My goal is simple: protect your home and do work you'll feel good recommending.</p>
        <Link to="/about" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-navy">About Seattle ProWash <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);

export default AboutPreview;
