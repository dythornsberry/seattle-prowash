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
            <div className="space-y-4">
              <Badge variant="outline" className="border-brand-orange text-brand-blue bg-brand-orange/10">
                <Star className="w-4 h-4 fill-brand-orange text-brand-orange mr-1" />
                180 Five-Star Google Reviews
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
                Kenmore's Roof & Gutter 
                <span className="text-brand-orange block">Cleaning Pros</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-gray-text font-medium">
                moss removal • gutter cleaning • house & pressure washing
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="prowash-primary" size="xl" className="flex-1 sm:flex-none">
                Get My Free Quote
              </Button>
              <Button variant="prowash-secondary" size="xl" className="flex-1 sm:flex-none">
                Call Now: 206-752-6690
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              <div className="flex items-center gap-2 text-brand-blue">
                <Shield className="w-5 h-5 text-brand-orange" />
                <span className="font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-brand-blue">
                <Award className="w-5 h-5 text-brand-orange" />
                <span className="font-semibold">100% Satisfaction</span>
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
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-6 right-6 lg:left-0 lg:right-auto lg:w-72">
              <div className="bg-brand-white rounded-xl shadow-xl p-6 border border-brand-orange/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-brand-blue">$499+</div>
                    <div className="text-sm text-brand-gray-text">Roof Moss Removal</div>
                    <div className="text-xs text-brand-orange font-semibold">+ FREE Gutter Clean</div>
                  </div>
                  <div className="text-right">
                    <div className="flex text-brand-orange text-lg">
                      ★★★★★
                    </div>
                    <div className="text-xs text-brand-gray-text">180 Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;