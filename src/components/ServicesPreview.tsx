import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Home, Zap, Car } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof Moss Removal",
      description: "Soft-wash moss removal and treatment. No pressure on shingles. Light debris cleanup included. Our most requested service with a 12-month moss-free guarantee.",
      features: [
        "Gentle brush removal of loose moss",
        "Soft wash treatment to kill remaining growth",
        "12-month moss-free guarantee",
        "Light debris cleanup around home",
        "Safe for all roof types"
      ],
      link: "/roof-cleaning"
    },
    {
      icon: Car,
      title: "Gutter Cleaning",
      description: "Hand clean and flush downspouts. Photos on completion. Optional gutter brightening.",
      features: [
        "Hand scoop and vacuum debris",
        "Downspout flush and function test",
        "Completion photos sent to you",
        "Gutter brightening available"
      ],
      link: "/gutter-cleaning"
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isRoofService = index === 0;
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-orange/50 fade-up flex flex-col h-full ${isRoofService ? 'md:col-span-2 border-brand-orange/30 relative' : ''}`}>
                {isRoofService && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-brand-orange text-white">Our Specialty</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4 mx-auto group-hover:bg-brand-orange/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center text-base font-medium text-brand-gray-text">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3 flex-shrink-0 mt-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                  
                  <div className="pt-4 border-t border-border mt-auto">
                    <p className="text-xs text-brand-gray-text text-center font-medium">
                      Free Estimates · Call 206-752-6690
                    </p>
                  </div>
                  
                  <div className="pt-2 space-y-2">
                    <Button 
                      variant="prowash-secondary" 
                      className="w-full" 
                      size="sm"
                      onClick={() => window.location.href = service.link}
                    >
                      Learn More
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="sm"
                      onClick={() => {
                        if (window.location.pathname === '/') {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }}
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-up">
          <div className="bg-brand-orange/10 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg font-semibold text-brand-blue mb-2">
              Ready to Protect Your Home This Fall?
            </p>
            <p className="text-brand-gray-text mb-4">
              Call us today for your free estimate. We'll walk your property and provide an accurate quote for the services you need.
            </p>
            <p className="text-sm text-brand-gray-text italic">
              Roof cleaning costs vary based on roof size and moss level. Most homes fall between $499–$999.
            </p>
            <p className="text-xs text-brand-gray-text mt-1">
              Final price after quick photo or drive-by evaluation.
            </p>
          </div>
          <Button 
            variant="prowash-primary" 
            size="xl"
            onClick={() => {
              if (window.location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
          >
            Get a Fast Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;