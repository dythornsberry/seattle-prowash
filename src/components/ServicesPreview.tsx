import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navigateToContact } from "@/lib/navigation";
import { Link } from "react-router-dom";

import roofImage from "@/assets/roof-softwash-before-after.jpg";
import gutterImage from "@/assets/gutter-cleaning-before-after.jpg";
import pressureWashImage from "@/assets/driveway-pressure-washing.jpg";
import windowImage from "@/assets/technician-house-washing.jpg";
import dryerVentImage from "@/assets/prowash-truck-driveway.jpg";

const services = [
  {
    title: "Roof Cleaning",
    subtitle: "Moss Removal & Treatment",
    image: roofImage,
    link: "/roof-cleaning",
    badge: "Our Specialty",
    featured: true,
  },
  {
    title: "Gutter Cleaning",
    subtitle: "Hand Clean + Downspout Flush",
    image: gutterImage,
    link: "/gutter-cleaning",
  },
  {
    title: "Pressure Washing",
    subtitle: "Driveways, Patios & Siding",
    image: pressureWashImage,
    link: "/pressure-washing",
  },
  {
    title: "Window Cleaning",
    subtitle: "Exterior Window Washing",
    image: windowImage,
    link: "/window-cleaning",
  },
  {
    title: "Dryer Vent Cleaning",
    subtitle: "Safety & Efficiency",
    image: dryerVentImage,
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-spacing bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From roof to driveway — we keep your home's exterior spotless
          </p>
        </div>

        {/* Service Cards Grid - 2 featured top, 3 bottom */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isLarge = index < 2;
            const CardWrapper = service.link ? Link : 'div';
            const wrapperProps = service.link ? { to: service.link } : {};

            return (
              <CardWrapper
                key={index}
                {...wrapperProps as any}
                className={`group relative overflow-hidden rounded-xl cursor-pointer fade-up ${
                  isLarge ? 'col-span-1 aspect-[4/3] lg:col-span-1' : 'aspect-[4/3]'
                } ${index === 0 ? 'lg:col-span-2 lg:aspect-[2/1]' : ''}`}
              >
                <div className="absolute inset-0 bg-brand-navy" />
                <img
                  src={service.image}
                  alt={`${service.title} service in Seattle`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-[1]"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={600}
                  height={400}
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Badge */}
                {service.badge && (
                  <Badge className="absolute top-3 left-3 bg-brand-orange text-white border-0 text-xs z-10">
                    {service.badge}
                  </Badge>
                )}

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mt-1 drop-shadow-md">
                    {service.subtitle}
                  </p>
                </div>

                {/* Hover arrow indicator */}
                {service.link && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm">→</span>
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>

        <div className="text-center mt-10 fade-up">
          <p className="text-sm text-muted-foreground mb-4">
            Pricing varies based on size, access, and condition. Get your exact price with a free quote.
          </p>
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
