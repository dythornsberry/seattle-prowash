import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import dylanOwnerPhoto from "@/assets/dylan-owner-patio-pressure-washing.jpg";

const AboutPreview = () => {
  return (
    <section className="section-spacing bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative fade-up">
            <div className="absolute -inset-4 bg-brand-navy/5 rounded-3xl -z-10 rotate-3 transition-transform duration-500 hover:rotate-6"></div>
            <div className="absolute -inset-4 border-2 border-brand-orange/20 rounded-3xl -z-10 -rotate-2 transition-transform duration-500 hover:-rotate-1"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-navy/5 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 to-transparent z-10"></div>
              <img
                src={dylanOwnerPhoto}
                alt="Dylan Thornsberry, Seattle ProWash Owner, performing pressure washing in Kenmore WA"
                className="w-full h-full object-cover"
                width={800}
                height={1000}
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
          <div className="w-full lg:w-7/12 space-y-6 lg:space-y-8 fade-up" style={{ animationDelay: '200ms' }}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-4">
                <ShieldCheck size={16} />
                <span>Locally Owned & Operated</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading">
                Meet the Team Behind <span className="text-brand-orange">Seattle ProWash</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started Seattle ProWash because I kept seeing homes get wrecked by neglected gutters and moss-covered roofs. Fixing that stuff early saves homeowners thousands.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-2xl border border-brand-navy/10 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -z-10"></div>
              <p className="font-medium text-brand-navy italic text-lg relative z-10">
                "A clean roof lasts 10-15 years longer. That's the whole reason we do this."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="bg-brand-navy/10 p-2.5 rounded-lg text-brand-navy">
                  <Star size={24} className="fill-brand-orange stroke-brand-orange" />
                </div>
                <div>
                  <p className="font-bold text-xl text-brand-navy">200+</p>
                  <p className="text-sm text-muted-foreground font-medium">5-Star Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-navy/10 p-2.5 rounded-lg text-brand-navy">
                  <Award size={24} className="text-brand-navy" />
                </div>
                <div>
                  <p className="font-bold text-xl text-brand-navy">500+</p>
                  <p className="text-sm text-muted-foreground font-medium">Roofs Cleaned</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
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
