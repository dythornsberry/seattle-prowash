import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-cleaning-service.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-white to-brand-gray">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
                <span className="text-brand-orange block">Roof Moss Removal & Gutter Cleaning — Seattle's North-End Specialists</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-gray-text font-medium leading-relaxed">
                Soft washing, pressure washing, and full exterior cleaning for homes in Kenmore, Bothell, Kirkland & nearby.
              </p>
              
              <p className="text-sm text-brand-gray-text/80 font-medium">
                ⭐ 180+ 5‑Star Reviews · Fully Licensed & Insured.
              </p>
              
              <p className="text-sm text-brand-gray-text/70 font-medium">
                🗺️ Serving Kenmore, Bothell, Kirkland, and surrounding suburbs within a 10-mile radius.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <div className="flex justify-center lg:justify-start">
                <Button 
                  variant="prowash-primary" 
                  size="xl"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get My Free Quote
                </Button>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-brand-gray-text font-medium">📞 Call or Text: 206.752.6690.</p>
              </div>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional roof and gutter cleaning service in Kenmore, WA - clean house with moss-free roof"
                className="w-full h-[400px] lg:h-[600px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;