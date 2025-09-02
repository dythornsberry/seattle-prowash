import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Trash2 } from "lucide-react";

const TwoServiceCards = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue text-center mb-8">
            Our Core Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Roof Cleaning */}
            <Card className="border-brand-blue/20 hover:border-brand-blue/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-6 h-6 text-brand-blue" />
                </div>
                <CardTitle className="text-brand-blue">Roof Cleaning</CardTitle>
                <CardDescription className="text-foreground/70">
                  Treatment that kills moss & algae safely. 12-month guarantee.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-foreground/80 mb-4">
                  Our gentle roof treatment eliminates moss, algae, and organic growth without damaging your shingles. Backed by our comprehensive 12-month moss-free guarantee.
                </p>
                <Button 
                  variant="outline" 
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  onClick={() => window.location.href = '/pricing'}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Gutter Cleaning */}
            <Card className="border-brand-blue/20 hover:border-brand-blue/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-6 h-6 text-brand-blue" />
                </div>
                <CardTitle className="text-brand-blue">Gutter Cleaning</CardTitle>
                <CardDescription className="text-foreground/70">
                  Debris cleared + downspouts flushed. Photo proof included.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-foreground/80 mb-4">
                  Complete gutter and downspout cleaning with debris removal. We provide before and after photos so you can see the difference we make.
                </p>
                <Button 
                  variant="outline" 
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  onClick={() => window.location.href = '/pricing'}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services Link */}
          <div className="text-center mb-8">
            <a 
              href="/pricing" 
              className="text-brand-blue hover:underline text-sm"
            >
              Also: House Washing & Pressure Washing →
            </a>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-cta-orange hover:bg-cta-orange-dark text-white font-bold px-8 py-4"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
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