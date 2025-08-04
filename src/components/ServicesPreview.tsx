import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Home, Zap, Car } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof Moss Removal",
      price: "$499+",
      bonus: "FREE Gutter Cleaning",
      description: "Safe soft-wash kills moss spores, extends shingle life, protects your investment.",
      features: ["Low-pressure safe process", "Kills moss at the root", "Extends roof lifespan"]
    },
    {
      icon: Home,
      title: "Gutter Cleaning",
      price: "$249+",
      bonus: "Downspout Flush Included",
      description: "Complete gutter system cleaning prevents water damage and foundation issues.",
      features: ["Debris removal", "Downspout clearing", "Water damage prevention"]
    },
    {
      icon: Zap,
      title: "House Soft Wash",
      price: "$499+",
      bonus: "Safe on All Siding",
      description: "Gentle cleaning removes algae, mildew, and dirt to boost your home's curb appeal.",
      features: ["Safe on all materials", "Removes algae & mildew", "Boosts curb appeal"]
    },
    {
      icon: Car,
      title: "Pressure Washing",
      price: "$249+",
      bonus: "Driveways & Patios",
      description: "High-pressure cleaning removes oil stains, rust, and eliminates slip hazards.",
      features: ["Oil & rust removal", "Slip hazard elimination", "Concrete restoration"]
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
            Professional Cleaning Services
          </h2>
          <p className="text-xl text-brand-gray-text max-w-3xl mx-auto font-medium">
            From moss-covered roofs to clogged gutters, we restore your home's beauty and protect your investment with proven cleaning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-orange/50 fade-up">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4 mx-auto group-hover:bg-brand-orange/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">
                    {service.title}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-brand-blue">{service.price}</div>
                    <div className="text-sm text-brand-orange font-semibold">{service.bonus}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Button variant="prowash-secondary" className="w-full" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-up">
          <p className="text-sm text-muted-foreground mb-6">
            *Final price confirmed after on-site walk-around or detailed photos.
          </p>
          <Button variant="prowash-primary" size="xl">
            Get My Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;