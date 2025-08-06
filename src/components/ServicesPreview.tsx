import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Home, Zap, Car } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Droplet,
      title: "Roof & Gutter Cleaning",
      description: "Complete moss removal and gutter cleaning to protect your home from water damage.",
      features: ["Moss & algae removal", "Gutter cleaning & inspection", "Downspout clearing", "12-month moss-free guarantee"],
      socialProof: "⭐ Most popular service with 180+ 5-star reviews",
      image: "/src/assets/roof-moss-removal-detailed-before-after.jpg"
    },
    {
      icon: Zap,
      title: "Pressure Washing",
      description: "Professional pressure washing for driveways, patios, decks, and walkways.",
      features: ["Concrete cleaning", "Deck restoration", "Walkway cleaning", "Eco-friendly solutions"],
      socialProof: "✨ Transform your outdoor spaces in just one day",
      image: "/src/assets/patio-pressure-washing-before-after.jpg"
    },
    {
      icon: Home,
      title: "House Washing",
      description: "Gentle yet effective exterior house washing to restore your home's curb appeal.",
      features: ["Siding cleaning", "Window washing", "Trim restoration", "Mold & mildew removal"],
      socialProof: "🏡 Increase your home value with our soft-wash system",
      image: "/src/assets/house-wash-exterior-before-after.jpg"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Professional Cleaning Services
          </h2>
          <p className="text-xl text-brand-gray-text max-w-3xl mx-auto">
            From moss-covered roofs to dirty driveways, we restore the beauty and value of your Pacific Northwest home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="fade-up border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-navy/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/90 rounded-full">
                      <IconComponent className="w-6 h-6 text-brand-green" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
                    <p className="text-brand-gray-text leading-relaxed">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-brand-gray-text">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.socialProof && (
                    <div className="bg-brand-green/5 border border-brand-green/20 rounded-lg p-3 mb-4">
                      <p className="text-sm font-medium text-brand-navy text-center">{service.socialProof}</p>
                    </div>
                  )}

                  <Button 
                    variant="prowash-primary" 
                    className="w-full"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get My Free Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-up">
          <div className="bg-brand-gray rounded-2xl p-8 max-w-2xl mx-auto border border-brand-green/20">
            <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-brand-gray-text mb-6">
              Get your free, no-obligation estimate today. Same-day quotes available!
            </p>
            <Button 
              variant="prowash-primary" 
              size="xl"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get My Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;