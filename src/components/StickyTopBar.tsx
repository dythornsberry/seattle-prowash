import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const StickyTopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary-teal border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-white font-medium text-sm md:text-base">
            🚨 Roof Moss Removal Specialists
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="tel:12067526690"
              className="hidden sm:flex items-center gap-2 text-white hover:text-bright-orange transition-colors font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              206-752-6690
            </a>
            <Button 
              variant="cta-orange"
              size="sm"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTopBar;