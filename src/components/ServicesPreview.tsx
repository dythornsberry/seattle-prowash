import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Sparkles, Waves, Wind, Flame } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplet,
    title: "Roof Cleaning",
    description: "Safe moss removal and treatment for asphalt, metal, and composite roofs. 12-month moss-free guarantee.",
    link: "/roof-cleaning",
    badge: "Our Specialty",
    price: "Starting at $500",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description: "Complete hand cleaning with downspout flush and roof blow-off. Photo proof on completion.",
    link: "/gutter-cleaning",
    price: "Starting at $300",
  },
  {
    icon: Waves,
    title: "Pressure Washing",
    description: "Driveways, patios, walkways, and siding. Surface cleaning that restores your home's curb appeal.",
    link: "/pressure-washing",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    description: "Exterior window washing for homes up to 3 stories. Streak-free, crystal-clear results.",
    link: "/window-cleaning",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    description: "Reduce fire risk and improve dryer efficiency with professional vent cleaning.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From roof to driveway — we keep your home's exterior spotless
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border hover:border-brand-orange/40 fade-up relative ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1 ring-2 ring-brand-orange/20' : ''
                }`}
              >
                {service.badge && (
                  <Badge className="absolute top-3 right-3 bg-brand-orange text-white border-0 text-xs">
                    {service.badge}
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-brand-blue mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      {service.price && (
                        <p className="text-sm font-semibold text-brand-blue mb-3">{service.price}</p>
                      )}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="cta-orange"
                          size="sm"
                          onClick={(e) => { e.preventDefault(); navigateToContact(); }}
                        >
                          Get Quote
                        </Button>
                        {service.link && (
                          <Link 
                            to={service.link} 
                            className="text-sm text-brand-orange hover:underline font-medium"
                          >
                            Learn more →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10 fade-up">
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
