import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplet, Sparkles, Waves, Wind, Flame, ArrowRight } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import { Link } from "react-router-dom";
import roofImage from "@/assets/roof-softwash-before-after.jpg";
import gutterImage from "@/assets/gutter-cleaning-before-after.jpg";
import drivewayImage from "@/assets/driveway-pressure-washing.jpg";
import houseImage from "@/assets/technician-house-washing.jpg";
import windowImage from "@/assets/technician-holding-ladder.jpg";

const featuredServices = [
  {
    title: "Roof Cleaning & Moss Treatment",
    tagline: "Safe soft-wash and 12-month moss-free guarantee",
    link: "/roof-cleaning",
    image: roofImage,
    badge: "Our Specialty",
  },
  {
    title: "Gutter Cleaning",
    tagline: "Complete hand cleaning, downspout flush & roof blow-off",
    link: "/gutter-cleaning",
    image: gutterImage,
  },
  {
    title: "Pressure Washing",
    tagline: "Restore driveways, patios, and walkways to like-new",
    link: "/pressure-washing",
    image: drivewayImage,
  },
  {
    title: "House Washing",
    tagline: "Gentle soft-washing for siding, stucco, and brick",
    link: "/pressure-washing",
    image: houseImage,
  },
  {
    title: "Window Cleaning",
    tagline: "Streak-free exterior window cleaning up to 3 stories",
    link: "/window-cleaning",
    image: windowImage,
  },
];

const allServices = [
  {
    icon: Droplet,
    title: "Roof Cleaning",
    description: "Safe moss removal and treatment for asphalt, metal, and composite roofs. We use a gentle soft-wash approach that protects your roof's lifespan while eliminating moss, algae, and lichen. Backed by our 12-month moss-free guarantee.",
    link: "/roof-cleaning",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description: "Comprehensive gutter maintenance including hand-scooping of all debris, flushing of downspouts to ensure proper flow, and a complimentary roof blow-off. We provide photo proof upon completion.",
    link: "/gutter-cleaning",
  },
  {
    icon: Waves,
    title: "Pressure Washing",
    description: "Professional surface cleaning that restores your home's curb appeal. We effectively remove built-up dirt, grime, and organic growth from driveways, patios, walkways, retaining walls, and siding.",
    link: "/pressure-washing",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    description: "Exterior window washing for homes up to 3 stories tall. We use professional-grade equipment and pure water systems to leave your windows streak-free and crystal-clear.",
    link: "/window-cleaning",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    description: "Reduce fire risk, lower energy bills, and improve your dryer's efficiency with our professional vent cleaning service. We remove lint buildup from the entire vent line.",
    link: "", // No dedicated page yet
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Professional Exterior Cleaning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top-rated residential services to protect your home and boost curb appeal
          </p>
        </div>

        {/* Part A: Featured Image Grid - 3 top, 2 bottom centered */}
        <div className="grid md:grid-cols-6 gap-4 lg:gap-6 mb-16 max-w-6xl mx-auto">
          {featuredServices.map((service, index) => {
            // First 3 cards: span 2 cols each (fills 6). Last 2: span 3 cols each (fills 6, centered)
            const colSpan = index < 3 ? "md:col-span-2" : "md:col-span-3";
            return (
              <Link 
                key={index} 
                to={service.link}
                className={`group relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300 ${colSpan}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent transition-opacity duration-300 group-hover:from-brand-navy" />
                {service.badge && (
                  <Badge className="absolute top-4 left-4 bg-brand-orange text-white border-0 px-3 py-1 text-sm shadow-md z-10">
                    {service.badge}
                  </Badge>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4 drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden sm:block">
                    {service.tagline}
                  </p>
                  <div className="flex items-center text-brand-orange font-semibold text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Part B: Detailed Service Blocks */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex items-start gap-5 fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-navy">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    {service.link && (
                      <Link 
                        to={service.link} 
                        className="inline-flex items-center text-sm font-semibold text-brand-orange hover:text-brand-navy transition-colors"
                      >
                        View details <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-up">
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
