import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-cleaning-service.jpg";

// Google logo as SVG component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" width="16" height="16">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video/Photo Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional roof and gutter cleaning service in Kenmore, WA"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-navy/60"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-up">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Protect Your Home, <span className="text-brand-green">Restore Its Beauty.</span>
              </h1>
              
              {/* Seasonal Banner */}
              <div className="bg-brand-green/20 border border-brand-green/40 rounded-xl px-6 py-4 backdrop-blur-sm">
                <p className="text-lg font-semibold text-white">
                  Beat the Fall Rush! Schedule your essential roof & gutter cleaning now before the rainy season hits.
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                Seattle's Trusted Specialists for Roof Moss Removal & Gutter Cleaning.
              </p>
              
              <p className="text-lg text-white/80 font-medium">
                Based in Kenmore, WA — proudly serving Kenmore, Bothell, Kirkland, North Seattle and nearby areas.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="prowash-primary" 
                  size="xl"
                  className="text-lg px-8 py-4 h-16 shadow-2xl"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get My Free Quote
                </Button>
                <Button 
                  variant="prowash-outline" 
                  size="xl"
                  className="text-lg px-8 py-4 h-16"
                  onClick={() => {
                    window.location.href = 'tel:2067526690';
                  }}
                >
                  Call: 206.752.6690
                </Button>
              </div>
            </div>

          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-2 gap-4 lg:order-last fade-up">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-brand-green text-3xl font-bold">4+</div>
              <div className="text-white font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-brand-green text-3xl font-bold">1K+</div>
              <div className="text-white font-medium">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-brand-green text-3xl font-bold">100%</div>
              <div className="text-white font-medium">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-brand-green text-3xl font-bold">Same-Day</div>
              <div className="text-white font-medium">Quotes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;