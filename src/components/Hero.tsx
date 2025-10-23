import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-gray-house.webp";

const Hero = () => {
  const handleGetQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:12067526690';
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Beautiful gray home with clean roof"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Star className="w-5 h-5 fill-brand-orange text-brand-orange" />
              <span className="font-semibold text-brand-navy">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Shield className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold text-brand-navy">Licensed & Insured</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Moss-Free Roofs, Guaranteed
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-2xl mx-auto">
            Professional roof and gutter cleaning that protects your home.
          </p>

          {/* Local credibility */}
          <p className="text-lg md:text-xl text-white/80">
            Serving Kenmore, Bothell, Kirkland & Greater Seattle since 2022
          </p>

          {/* Speed emphasis */}
          <p className="text-lg md:text-xl text-brand-orange font-semibold flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            Most quotes delivered same day
          </p>

          {/* 12-Month Guarantee Badge */}
          <div className="inline-flex items-center gap-3 bg-brand-orange backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-xl">
            <Shield className="w-8 h-8" />
            <div className="text-left">
              <div className="text-2xl font-bold font-heading">12-Month</div>
              <div className="text-sm font-semibold">Moss-Free Guarantee</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="xl" 
              variant="cta-orange"
              className="group text-lg px-8 py-6 w-full sm:w-auto"
              onClick={handleGetQuote}
            >
              Get Free Quote Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="xl" 
              variant="prowash-outline"
              className="text-lg px-8 py-6 w-full sm:w-auto"
              onClick={handleCall}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 206-752-6690
            </Button>
          </div>

          {/* Trust Reassurance */}
          <p className="text-white/90 text-sm md:text-base pt-4">
            No spam. Same-day estimate.
          </p>

          {/* Additional Trust Info */}
          <p className="text-white/80 text-sm pt-2">
            180+ Five-Star Reviews • Family-Owned • Serving Seattle Since 2022
          </p>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#fafafa" fillOpacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
