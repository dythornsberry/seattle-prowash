import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Home, Zap, Car } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof & Gutter Cleaning",
      description: "Moss removal + full gutter cleanouts, done the right way.",
      features: [
        "Brush and blow moss and roof debris",
        "Apply soft wash treatment (manufacturer-recommended method)",
        "Clean out gutters, flush downspouts, ground cleanup, and rinse siding if needed"
      ]
    },
    {
      icon: Zap,
      title: "Pressure Washing",
      description: "Restore driveways, patios, walkways, and concrete surfaces.",
      features: [
        "Driveways, patios, walkways, and concrete",
        "Removes moss, algae, oil, and grime buildup",
        "Safe, streak-free results with professional equipment"
      ],
      socialProof: "5-star rated by 180+ Seattle-area homeowners"
    },
    {
      icon: Home,
      title: "House Washing",
      description: "Soft wash cleaning for your home's full exterior.",
      features: [
        "Cleans siding, trim, soffits, eaves, exterior gutters, windows & doors",
        "2nd-story homes included",
        "We use your water source (standard for soft washing)"
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

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-orange/50 fade-up">
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
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3 flex-shrink-0 mt-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {service.socialProof && (
                    <div className="pt-2">
                      <p className="text-xs text-brand-orange text-center font-medium">
                        {service.socialProof}
                      </p>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-border">
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
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Free Quote
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
              Ready to Get Started?
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
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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