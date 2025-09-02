import { Button } from "@/components/ui/button";
import { MessageSquare, Settings, Shield } from "lucide-react";

const ThreeStepProcess = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cta-orange/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-cta-orange" />
              </div>
              <div className="w-8 h-8 bg-cta-orange text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
                1
              </div>
              <h3 className="font-bold text-brand-blue mb-2">Fast Quote</h3>
              <p className="text-sm text-foreground/70">
                Call, text, or use the form.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-brand-blue" />
              </div>
              <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
                2
              </div>
              <h3 className="font-bold text-brand-blue mb-2">We Treat & Clean</h3>
              <p className="text-sm text-foreground/70">
                Pro methods that protect your roof.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-brand-blue" />
              </div>
              <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
                3
              </div>
              <h3 className="font-bold text-brand-blue mb-2">Moss-Free Guarantee</h3>
              <p className="text-sm text-foreground/70">
                12-month coverage on qualifying treatments.
              </p>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-cta-orange hover:bg-cta-orange-dark text-white font-bold px-8 py-4"
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET YOUR FREE QUOTE TODAY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;