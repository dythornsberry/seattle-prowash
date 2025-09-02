import { Star, Shield, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromiseBlock = () => {
  const promises = [
    {
      icon: Star,
      text: "180+ 5-Star Reviews"
    },
    {
      icon: Shield,
      text: "Licensed & Insured"
    },
    {
      icon: Calendar,
      text: "12-Month Moss-Free Guarantee"
    },
    {
      icon: Zap,
      text: "Fast, Same-Day Quotes"
    }
  ];

  const handleCTAClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'GET YOUR FREE QUOTE TODAY - Promise'
      });
    }
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-seattle-blue mb-12">
            The Seattle ProWash Promise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {promises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-seattle-orange rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm md:text-base font-medium text-text-charcoal">
                    {promise.text}
                  </p>
                </div>
              );
            })}
          </div>

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
    </section>
  );
};

export default PromiseBlock;