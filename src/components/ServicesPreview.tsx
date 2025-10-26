import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Car } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof Cleaning",
      description: "Safe moss removal and treatment with a 12-month guarantee.",
      link: "/roof-cleaning",
      size: "large"
    },
    {
      icon: Car,
      title: "Gutter Cleaning",
      description: "Complete hand cleaning with downspout flush.",
      link: "/gutter-cleaning",
      size: "small"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
            Our Roof & Gutter Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isLarge = service.size === "large";
            return (
              <Card key={index} className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-brand-orange/50 fade-up ${isLarge ? 'md:col-span-3' : ''}`}>
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-orange/10 rounded-full mb-4 mx-auto group-hover:bg-brand-orange/20 transition-colors">
                    <IconComponent className="w-10 h-10 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <Button 
                    variant="prowash-secondary" 
                    size="sm"
                    onClick={() => window.location.href = service.link}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-up">
          <Button 
            variant="cta-orange" 
            size="xl"
            onClick={() => {
              if (window.location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
          >
            Get My Free Quote →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;