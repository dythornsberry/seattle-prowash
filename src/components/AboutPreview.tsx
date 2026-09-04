import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import dylanOwnerPhoto from "@/assets/dylan-owner-truck.jpg";

const AboutPreview = () => {
  return (
    <section className="section-spacing bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative fade-up">
            {/* Subtle orange accent line — modern, no rotation */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-brand-orange/15 rounded-2xl -z-10"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-brand-navy/5 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/70 to-transparent z-10"></div>
              <img
                src={dylanOwnerPhoto}
                alt="Dylan Thornsberry, owner of Seattle ProWash, standing in front of the company truck in Kenmore WA"
                className="w-full h-full object-cover"
                width={1600}
                height={1200}
                loading="lazy"
              />

              {/* Info Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-lg leading-tight">Dylan Thornsberry</p>
                    <p className="text-sm font-semibold text-brand-orange">Owner & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 fade-up" style={{ animationDelay: '200ms' }}>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading">
                Meet <span className="text-brand-orange">Dylan</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm the owner of Seattle ProWash, based here in Kenmore. My goal is simple: protect your home and do work you'll feel good recommending.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="cta-orange" className="text-base px-8 py-6 rounded-xl">
                <Link to="/about">
                  Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
