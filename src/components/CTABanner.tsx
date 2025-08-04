import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-navy/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border-2 border-brand-yellow rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-brand-yellow rounded-full translate-x-24 translate-y-24"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 fade-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold">
              <Clock className="w-4 h-4" />
              Limited Time Offer
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white mb-4">
              Free Same-Day Estimates
            </h2>
            
            <p className="text-xl text-brand-white/80 max-w-2xl mx-auto">
              Don't wait for moss and grime to damage your home. Get your personalized quote today and protect your biggest investment.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="prowash-primary" size="xl" className="flex-1 sm:flex-none">
              Get My Free Quote
            </Button>
            <div className="text-brand-white/60 px-4">or</div>
            <Button 
              variant="outline" 
              size="xl" 
              className="flex-1 sm:flex-none border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-navy"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 206-752-6690
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-brand-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-yellow">180+</div>
              <div className="text-sm text-brand-white/80">Five-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-yellow">100%</div>
              <div className="text-sm text-brand-white/80">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-yellow">$2M+</div>
              <div className="text-sm text-brand-white/80">Fully Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-yellow">Same Day</div>
              <div className="text-sm text-brand-white/80">Free Estimates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;