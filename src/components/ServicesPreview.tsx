import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import { Link } from "react-router-dom";
import roofImage from "@/assets/roof-cleaning-before-after-new.jpg";
import gutterImage from "@/assets/gutter-cleaning-before-after.jpg";
import houseImage from "@/assets/technician-house-washing.jpg";
import windowImage from "@/assets/window-cleaning-action.jpg";

const ServicesPreview = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Roof cleaning, gutter cleaning, pressure washing & window cleaning — protecting homes across greater Seattle
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4 lg:space-y-6">
          {/* Roof Cleaning — Hero Card (dominant) */}
          <Link
            to="/roof-cleaning"
            className="group relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={roofImage}
              alt="Roof cleaning before and after — moss removal results"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent transition-opacity duration-300 group-hover:from-brand-navy" />
            <Badge className="absolute top-4 left-4 bg-brand-orange text-white border-0 px-3 py-1.5 text-sm shadow-md z-10">
              Most Popular
            </Badge>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-sm">
                Roof Cleaning
              </h3>
              <p className="text-white/90 text-base sm:text-lg mb-2 drop-shadow-sm max-w-xl">
                Moss treatment, moss removal & gutter cleaning — all included. Starting at $499.
              </p>
              <p className="text-brand-orange font-bold text-sm sm:text-base mb-4">
                12-Month Moss-Free Guarantee
              </p>
              <div className="flex items-center text-white font-semibold text-sm sm:text-base group-hover:text-brand-orange transition-colors duration-300">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Secondary Services — 3 equal cards */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            <Link
              to="/gutter-cleaning"
              className="group relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={gutterImage}
                alt="Gutter cleaning before and after"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent transition-opacity duration-300 group-hover:from-brand-navy" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-sm">
                  Gutter Cleaning
                </h3>
                <p className="text-white/80 text-sm mb-3 drop-shadow-sm">
                  Full clean + free roof blow-off. Starting at $250.
                </p>
                <div className="flex items-center text-brand-orange font-semibold text-sm group-hover:text-white transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link
              to="/pressure-washing"
              className="group relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={houseImage}
                alt="Pressure washing house siding"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent transition-opacity duration-300 group-hover:from-brand-navy" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-sm">
                  Pressure Washing
                </h3>
                <p className="text-white/80 text-sm mb-3 drop-shadow-sm">
                  Driveways, siding, patios & walkways
                </p>
                <div className="flex items-center text-brand-orange font-semibold text-sm group-hover:text-white transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link
              to="/window-cleaning"
              className="group relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={windowImage}
                alt="Exterior window cleaning"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent transition-opacity duration-300 group-hover:from-brand-navy" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-sm">
                  Window Cleaning
                </h3>
                <p className="text-white/80 text-sm mb-3 drop-shadow-sm">
                  Streak-free exterior cleaning up to 3 stories
                </p>
                <div className="flex items-center text-brand-orange font-semibold text-sm group-hover:text-white transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 fade-up">
          <Button
            variant="cta-orange"
            size="xl"
            onClick={navigateToContact}
          >
            Get My Free Quote →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
