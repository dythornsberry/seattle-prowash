import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award } from "lucide-react";
import heroImageWebP from "@/assets/hero-cleaning-service.webp";
import heroImageJpg from "@/assets/hero-cleaning-service.jpg";
import newRoofAfter1WebP from "@/assets/new-roof-after-1.webp";
import newRoofAfter1 from "@/assets/new-roof-after-1.jpg";

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
          width="1920"
          height="1080"
          style={{ objectPosition: 'center center' }}
        />
      </picture>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Seattle's Trusted Roof & Gutter Cleaning Pros
              </h1>
              
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-2xl">
                Fast, safe, and guaranteed cleaning with dramatic results you can see.
              </p>
              
              <p className="text-sm text-white font-medium drop-shadow-xl">
                ⭐ <a 
                  href="https://www.google.com/search?q=Seattle+ProWash+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-bright-green transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <GoogleIcon className="inline" />
                  180+ 5‑Star Reviews
                </a> · Fully Licensed & Insured
              </p>
              
              <p className="text-sm text-white font-medium drop-shadow-xl">
                🗺️ Serving Kenmore, Bothell, Kirkland & nearby
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                <Button 
                  variant="cta-orange" 
                  size="xl"
                  className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get My Fast Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-dark-teal font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    window.location.href = '/pricing';
                  }}
                >
                  See Our Pricing
                </Button>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white font-medium drop-shadow-xl">📞 <a href="tel:2067526690" className="hover:text-bright-green transition-colors">Call or Text: 206.752.6690</a></p>
              </div>
            </div>
          </div>

          {/* Before/After Slider */}
          <div className="lg:ml-8 fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-4 text-center">Real Before & After Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-white/80 text-sm font-medium text-center">Before</p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <picture>
                      <source srcSet="/lovable-uploads/6f421435-bb27-40ea-ac27-6ba923f0d820.png" type="image/webp" />
                      <img 
                        src="/lovable-uploads/6f421435-bb27-40ea-ac27-6ba923f0d820.png"
                        alt="Moss-covered roof before cleaning"
                        className="w-full h-32 object-cover"
                        loading="eager"
                        width="300"
                        height="200"
                      />
                    </picture>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm font-medium text-center">After</p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <picture>
                      <source srcSet={newRoofAfter1WebP} type="image/webp" />
                      <img 
                        src={newRoofAfter1}
                        alt="Clean roof after professional cleaning"
                        className="w-full h-32 object-cover"
                        loading="eager"
                        width="300"
                        height="200"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-xs text-center mt-3">Seattle Roof Cleaning • 12-Month Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;