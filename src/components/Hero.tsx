import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award } from "lucide-react";
import heroImageWebP from "@/assets/hero-cleaning-service.webp";
import heroImageJpg from "@/assets/hero-cleaning-service.jpg";

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
    <section id="home" className="relative h-screen flex items-center" style={{ minHeight: '100vh' }}>
      {/* Optimized hero image with WebP and fallback */}
      <picture className="absolute inset-0">
        <source srcSet={heroImageWebP} type="image/webp" />
        <img 
          src={heroImageJpg}
          alt="Professional roof and exterior cleaning service in Seattle"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          width="1920"
          height="1080"
          style={{ objectPosition: 'center center' }}
        />
      </picture>
      <div className="absolute inset-0 bg-primary-teal/80"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Roof Moss Removal Specialists — Kenmore, Bothell, Kirkland
              </h1>
              
              <p className="text-xl md:text-2xl text-white/95 font-semibold drop-shadow-md mb-2">
                Expert moss removal and roof cleaning. Gutter service available. 5-star rated and insured. Same-day quotes.
              </p>
              
              <p className="text-sm text-white/80 font-medium">
                ★★★★★ <a 
                  href="https://g.page/r/CZ1YhG3KQ4_8EAE/review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-moss-green transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <GoogleIcon className="inline" />
                  180+ Google reviews
                </a> • Licensed & Insured • Since 2022
              </p>
              
              <p className="text-sm text-white/70 font-medium">
                🗺️ Serving Kenmore, Bothell, Kirkland & nearby
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  variant="cta-orange" 
                  size="xl"
                  className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Moss Removal Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => window.location.href = 'tel:206-752-6690'}
                >
                  Call 206-752-6690
                </Button>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/80 font-medium">
                  <a 
                    href="https://g.page/r/CZ1YhG3KQ4_8EAE/review" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-moss-green transition-colors underline decoration-white/50 hover:decoration-moss-green"
                  >
                    Read 180+ Google reviews
                  </a>
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white/90 font-medium text-sm">Licensed & Insured • 180+ 5-Star Reviews</span>
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