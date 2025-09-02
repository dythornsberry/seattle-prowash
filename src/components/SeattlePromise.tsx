import { Button } from "@/components/ui/button";
import { Star, Shield, Calendar, Zap } from "lucide-react";

const SeattlePromise = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8">
            The Seattle ProWash Promise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* 180+ 5-Star Reviews */}
            <div className="flex flex-col items-center text-center p-4">
              <Star className="w-8 h-8 text-amber-500 mb-3 fill-current" />
              <h3 className="font-bold text-brand-blue mb-2">180+ 5-Star Reviews</h3>
              <p className="text-sm text-foreground/70">Trusted by your neighbors</p>
            </div>
            
            {/* Licensed & Insured */}
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="w-8 h-8 text-brand-blue mb-3" />
              <h3 className="font-bold text-brand-blue mb-2">Licensed & Insured</h3>
              <p className="text-sm text-foreground/70">Full protection guaranteed</p>
            </div>
            
            {/* 12-Month Moss-Free Guarantee */}
            <div className="flex flex-col items-center text-center p-4">
              <Calendar className="w-8 h-8 text-brand-blue mb-3" />
              <h3 className="font-bold text-brand-blue mb-2">12-Month Moss-Free Guarantee</h3>
              <p className="text-sm text-foreground/70">On qualifying roof treatments</p>
            </div>
            
            {/* Fast, Same-Day Quotes */}
            <div className="flex flex-col items-center text-center p-4">
              <Zap className="w-8 h-8 text-cta-orange mb-3" />
              <h3 className="font-bold text-brand-blue mb-2">Fast, Same-Day Quotes</h3>
              <p className="text-sm text-foreground/70">Reply within ~10 minutes</p>
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

export default SeattlePromise;