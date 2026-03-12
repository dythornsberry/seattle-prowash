import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roof-cleaning.jpg";
import heroImageWebp from "@/assets/hero-roof-cleaning.webp";
import heroImageMobileWebp from "@/assets/hero-roof-cleaning-mobile.webp";
import { navigateToContact } from "@/lib/navigation";

const getSeasonalMessage = (): string => {
  const month = new Date().getMonth(); // 0-indexed
  switch (month) {
    case 0: // Jan
    case 1: // Feb
      return "Winter moisture is feeding moss right now — get ahead of it before spring.";
    case 2: // Mar
    case 3: // Apr
      return "Spring rain + warming temps = rapid moss growth. Act now before damage spreads.";
    case 4: // May
      return "Moss season is peaking — protect your roof before summer.";
    case 5: // Jun
    case 6: // Jul
    case 7: // Aug
      return "Summer is the best time to clean your roof. Book now while the weather holds.";
    case 8: // Sep
      return "Fall is here — clean your gutters before the leaves pile up.";
    case 9: // Oct
    case 10: // Nov
      return "Clogged gutters + fall rain = water damage. Get your gutters cleaned now.";
    case 11: // Dec
      return "Year-end special — start the new year with a clean, moss-free roof.";
    default:
      return "Fast quotes. Fair prices. Expert moss removal.";
  }
};

const Hero = () => {
  const handleGetQuote = () => {
    navigateToContact();
  };

  const handleCall = () => {
    window.location.href = 'tel:12067526690';
  };

  const seasonalMessage = getSeasonalMessage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroImageMobileWebp} type="image/webp" />
          <source srcSet={heroImageWebp} type="image/webp" />
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
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Kenmore&apos;s Roof & Gutter Cleaning Experts
          </h1>

          {/* Trust Line */}
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto animate-fade-in mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Serving Bothell, Kirkland, Woodinville &amp; Greater Seattle
          </p>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto animate-fade-in mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            <a href="/reviews" className="hover:text-brand-orange transition-colors">5.0★ from 200+ neighbors</a> • 12-Month Moss-Free Guarantee • Same-Day Estimates
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              size="xl" 
              variant="cta-orange"
              className="text-lg px-10 py-7 text-xl font-semibold shadow-xl"
              onClick={handleGetQuote}
            >
              Get My Free Quote →
            </Button>
            <Button 
              size="xl"
              variant="outline"
              className="text-lg px-10 py-7 text-xl font-semibold border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-navy shadow-xl"
              onClick={handleCall}
            >
              Call 206-752-6690
            </Button>
          </div>
          <p className="text-white text-sm md:text-base font-normal max-w-2xl mt-4 animate-fade-in drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {seasonalMessage}
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
