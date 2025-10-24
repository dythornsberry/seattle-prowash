import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star, Shield } from "lucide-react";
import heroImage from "@/assets/hero-roof-cleaning.jpg";

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
          alt="Professional roof cleaner washing roof in Seattle"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-brand-navy/60"></div>
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
            Seattle Roof Cleaning Specialists
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-2xl mx-auto">
            Safe, no-damage roof moss removal with a 12-month moss-free guarantee.
          </p>

          {/* Service Area */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Serving the Seattle Metro Area
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="xl" 
              variant="cta-orange"
              className="group text-lg px-8 py-6 w-full sm:w-auto"
              onClick={handleGetQuote}
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href="tel:12067526690"
              className="text-white/90 hover:text-white font-semibold text-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              206-752-6690
            </a>
          </div>
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
