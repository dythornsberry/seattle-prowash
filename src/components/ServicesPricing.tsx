import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

// Easy to update pricing - just change these values
const PRICING = {
  gutterCleaning: {
    title: "Gutter Cleaning",
    price: "Starting at $300",
    subtitle: "Quick maintenance service",
    included: [
      "Gutter cleaning & flushing",
      "Downspout check & clearing",
      "Complete roof debris blow-off",
      "Perfect for regular maintenance"
    ]
  },
  roofCleaning: {
    title: "Roof Cleaning & Moss Removal",
    price: "Starting at $500",
    subtitle: "Complete roof & gutter service",
    included: [
      "Professional moss removal",
      "Moss prevention treatment (12-month protection)",
      "Complete gutter cleaning",
      "Roof debris blow-off",
      "Everything your roof needs"
    ]
  }
};

const ServicesPricing = () => {
  const handleGetQuote = (service: string, price: string) => {
    // Track pricing card click
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'pricing_card_click', {
        service_type: service,
        starting_price: price
      });
    }
    
    // Store the selected service preference
    sessionStorage.setItem('preselectedService', service);
    navigateToContact();
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing for professional roof and gutter care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Gutter Cleaning Card */}
          <Card className="border-2 hover:border-muted-foreground/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                {PRICING.gutterCleaning.title}
              </CardTitle>
              <div className="text-3xl font-bold text-brand-orange mt-2">
                {PRICING.gutterCleaning.price}
              </div>
              <CardDescription className="text-base mt-2">
                {PRICING.gutterCleaning.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {PRICING.gutterCleaning.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => handleGetQuote('Gutter Cleaning', PRICING.gutterCleaning.price)}
              >
                Get Quote →
              </Button>
            </CardContent>
          </Card>

          {/* Roof Cleaning Card */}
          <Card className="border-2 border-brand-orange hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                {PRICING.roofCleaning.title}
              </CardTitle>
              <div className="text-3xl font-bold text-brand-orange mt-2">
                {PRICING.roofCleaning.price}
              </div>
              <CardDescription className="text-base mt-2">
                {PRICING.roofCleaning.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {PRICING.roofCleaning.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="prowash" 
                size="lg" 
                className="w-full"
                onClick={() => handleGetQuote('Roof Cleaning & Moss Removal', PRICING.roofCleaning.price)}
              >
                Get Quote →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Disclaimer */}
        <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
          Pricing varies based on roof size, pitch, and accessibility. Most homes in the Seattle area range from $300-$1,200 depending on the service. Get your exact price with a free quote - no obligation.
        </p>
      </div>
    </section>
  );
};

export default ServicesPricing;
