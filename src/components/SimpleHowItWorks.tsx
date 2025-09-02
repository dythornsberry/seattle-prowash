import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, Shield } from "lucide-react";

const SimpleHowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Fast Quote",
      description: "Call, text, or use the form."
    },
    {
      icon: Wrench,
      title: "We Treat & Clean",
      description: "Pro methods that protect your roof."
    },
    {
      icon: Shield,
      title: "Moss-Free Guarantee",
      description: "12-month coverage on qualifying treatments."
    }
  ];

  const handleCTAClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'GET YOUR FREE QUOTE TODAY - How It Works'
      });
    }
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-seattle-blue mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-seattle-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-seattle-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-charcoal">
                    {step.description}
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

export default SimpleHowItWorks;