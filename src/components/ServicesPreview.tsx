import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Car } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof cleaning",
      description: "Safe moss removal and treatment with a 12-month moss-free guarantee.",
      link: "/roof-cleaning",
      badge: "Our Specialty"
    },
    {
      icon: Car,
      title: "Gutter cleaning",
      description: "Complete hand cleaning with downspout flush (includes roof blow-off).",
      link: "/gutter-cleaning"
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
            return (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-brand-orange/50 fade-up relative">
                {service.badge && (
                  <Badge className="absolute top-3 right-3 bg-brand-orange text-white border-0 text-xs">
                    {service.badge}
                  </Badge>
                )}
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
                    variant="cta-orange" 
                    size="sm"
                    onClick={navigateToContact}
                  >
                    Get My Free Quote →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-8 fade-up">
          We also offer{" "}
          <Link to="/pressure-washing" className="text-brand-orange hover:underline">pressure washing</Link>,{" "}
          <Link to="/window-cleaning" className="text-brand-orange hover:underline">window cleaning</Link>, and dryer vent cleaning.
        </p>

        <div className="text-center mt-8 fade-up">
          <p className="text-sm text-muted-foreground mb-4">
            Pricing varies based on roof size, pitch, and access. Get your exact price with a free quote.
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