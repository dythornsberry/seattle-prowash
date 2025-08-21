import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Home, Zap, Car } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof Cleaning",
      price: "From $500",
      description: "Our soft wash roof cleaning safely kills moss and algae, protecting your shingles and leaving your roof spotless. Includes our 12-month moss-free guarantee on qualifying treatments.",
      features: [
        "Complete soft wash treatment kills all moss & algae",
        "Gentle, low-pressure method is safe for all shingle types",
        "All loose debris removed from roof surface",
        "Includes our 12-month moss-free guarantee on qualifying treatments"
      ]
    },
    {
      icon: Droplet,
      title: "Gutter Cleaning",
      price: "From $250",
      description: "We clear all debris from your gutters and flush your downspouts to ensure proper water flow and protect your home's foundation. Completion photos are included with every job.",
      features: [
        "Clear all debris from your gutters",
        "Flush your downspouts to ensure proper water flow",
        "Protect your home's foundation",
        "Completion photos included with every job"
      ]
    },
    {
      icon: Home,
      title: "House Washing",
      price: "From $500",
      description: "A complete exterior soft wash for your home. We gently clean siding, trim, eaves, and the outside of gutters to remove algae, mildew, and organic stains for a fresh new look.",
      features: [
        "Complete exterior soft wash for your home",
        "Gently clean siding, trim, eaves, and outside of gutters",
        "Remove algae, mildew, and organic stains",
        "Fresh new look for your home's exterior"
      ]
    },
    {
      icon: Car,
      title: "Pressure Washing",
      price: "From $250",
      description: "Revitalize your home's curb appeal. We deep clean driveways, patios, walkways, and other hardscapes to remove years of built-up grime.",
      features: [
        "Revitalize your home's curb appeal",
        "Deep clean driveways, patios, walkways",
        "Clean other hardscapes",
        "Remove years of built-up grime"
      ]
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-orange/50 fade-up flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4 mx-auto group-hover:bg-brand-orange/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-blue mb-3">
                    {service.title}
                  </CardTitle>
                  <div className="text-center mb-3">
                    <span className="bg-brand-orange text-white font-bold px-3 py-1 rounded-full text-lg">
                      {service.price}
                    </span>
                  </div>
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
                      Free Estimates · Call or Text 206.752.6690
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      variant="prowash-secondary" 
                      className="w-full" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/pricing';
                      }}
                    >
                      See Pricing Details
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
              Call or text us today for your free estimate. We'll walk your property and provide an accurate quote for the services you need.
            </p>
            <p className="text-sm text-brand-gray-text italic">
              Roof cleaning costs vary based on roof size and moss level. Most homes fall between $499–$999.
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
            Get My Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;