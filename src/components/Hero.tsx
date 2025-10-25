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
          alt="Professional roof cleaning service in Seattle - moss removal and roof treatment"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-navy/55"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in mb-6">
            Roof & Gutter Cleaning for Seattle Homes
          </h1>

          {/* Trust Line */}
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto animate-fade-in mb-8">
            <a href="/reviews" className="hover:text-brand-orange transition-colors">4.9★ from 180+ neighbors</a> • Licensed & Insured • Same-Day Estimates
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <Button 
              size="xl" 
              variant="cta-orange"
              className="group text-lg px-10 py-7 text-xl font-semibold shadow-xl"
              onClick={handleGetQuote}
            >
              Get a Fast Quote
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-white/80 text-sm md:text-base font-normal max-w-2xl">
              Fast quotes. Fair prices. Expert results — trusted by Seattle-area homeowners.
            </p>
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
