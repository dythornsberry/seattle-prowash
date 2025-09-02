import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Droplets } from "lucide-react";

const TwoServiceCards = () => {
  const handleCTAClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'GET YOUR FREE QUOTE TODAY - Services'
      });
    }
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-seattle-blue text-center mb-12">
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Roof Cleaning */}
            <Card className="border-2 border-gray-200 hover:border-seattle-blue transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-seattle-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-seattle-blue mb-3">
                  Roof Cleaning
                </h3>
                <p className="text-text-charcoal">
                  Treatment that kills moss & algae safely. 12-month guarantee.
                </p>
              </CardContent>
            </Card>

            {/* Gutter Cleaning */}
            <Card className="border-2 border-gray-200 hover:border-seattle-blue transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-seattle-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-seattle-blue mb-3">
                  Gutter Cleaning
                </h3>
                <p className="text-text-charcoal">
                  Debris cleared + downspouts flushed. Photo proof included.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <p className="text-text-charcoal">
              Also: <a href="/services" className="text-seattle-blue hover:underline">House Washing & Pressure Washing →</a>
            </p>
          </div>

          <div className="text-center">
            <Button 
              variant="cta-orange" 
              size="xl"
              onClick={handleCTAClick}
              className="text-lg px-12 py-4"
            >
              GET YOUR FREE QUOTE TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoServiceCards;