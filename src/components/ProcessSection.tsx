import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Fast Quote",
      description: "Call or use the form. Most quotes sent quickly by email."
    },
    {
      number: "2", 
      title: "We Treat & Clean",
      description: "Pro methods that protect your roof."
    },
    {
      number: "3",
      title: "Moss-Free Guarantee", 
      description: "12-month moss-free guarantee on qualifying treatments. On-site visits available when helpful."
    }
  ];

  return (
    <section className="section-spacing bg-primary-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
              From fast quote to moss-free guarantee, we make it simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="fade-up group">
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-bright-green/20">
                    <div className="flex items-center justify-center w-16 h-16 bg-bright-green text-white rounded-full font-bold text-xl mb-6 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-primary-teal mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-text-charcoal text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-bright-green/20 transform -translate-y-1/2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center fade-up">
            <Button 
              variant="cta-orange" 
              size="xl"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              GET YOUR FREE QUOTE TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;