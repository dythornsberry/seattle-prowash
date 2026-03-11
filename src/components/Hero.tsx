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
  const services = ["Roof cleaning", "Gutter cleaning", "Pressure washing", "Window cleaning"];

  return (
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden md:min-h-[90vh]">
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
            fetchpriority="high"
            decoding="async"
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Roof Cleaning, Gutter Cleaning & Pressure Washing for Greater Seattle Homes
          </h1>

          {/* Trust Line */}
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto animate-fade-in mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Kenmore-based local crew serving Seattle, Bothell, Kirkland, Woodinville, Shoreline and nearby cities
          </p>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto animate-fade-in mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            <a href="/reviews" className="hover:text-brand-orange transition-colors">5.0★ from 200+ neighbors</a> • 12-Month Moss-Free Guarantee • Same-Day Estimates
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in mb-8">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-3 animate-fade-in sm:flex-row sm:gap-4">
            <Button 
              size="xl" 
              variant="cta-orange"
              className="w-full max-w-md px-8 py-7 text-lg font-semibold shadow-xl sm:w-auto sm:min-w-[280px] sm:text-xl"
              onClick={handleGetQuote}
            >
              Get My Free Quote →
            </Button>
            <Button 
              size="xl"
              variant="outline"
              className="w-full max-w-md border-2 border-white bg-transparent px-8 py-7 text-lg font-semibold text-white shadow-xl hover:bg-white hover:text-brand-navy sm:w-auto sm:min-w-[280px] sm:text-xl"
              onClick={handleCall}
            >
              Call or Text 206-752-6690
            </Button>
          </div>
          <p className="mt-4 text-sm font-medium text-white/85 animate-fade-in drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] md:text-base">
            Request a quote in about 60 seconds. Most homes get a same-day estimate.
          </p>
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
