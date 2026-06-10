import heroImage from "@/assets/hero-roof-cleaning.jpg";
import heroImageWebp from "@/assets/hero-roof-cleaning.webp";
import HeroQuickForm from "@/components/HeroQuickForm";

const Hero = () => {
  const handleCall = () => {
    window.location.href = 'tel:12067526690';
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Hero Background with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            src={heroImage}
            alt="Professional roof cleaning service in Seattle - moss removal with pump sprayer treatment"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6">
          {/* Main Headline */}
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Seattle&apos;s Roof, Gutter & Exterior Cleaning Experts
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto animate-fade-in drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Roof cleaning, moss removal, gutter cleaning, house washing, pressure washing, and exterior window cleaning throughout Greater Seattle.
          </p>

          {/* Inline mini-form */}
          <HeroQuickForm />

          {/* Call/text alternative */}
          <p className="text-white/90 text-sm md:text-base font-medium animate-fade-in drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Prefer to call or text?{" "}
            <button
              onClick={handleCall}
              className="text-white font-bold underline underline-offset-4 hover:text-brand-orange transition-colors"
            >
              206-752-6690
            </button>
          </p>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#1A3E66" fillOpacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
