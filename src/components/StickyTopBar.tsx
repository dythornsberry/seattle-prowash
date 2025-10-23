import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const StickyTopBar = () => {
  return (
    <div id="sticky-top-bar" className="fixed top-0 left-0 right-0 z-50 bg-brand-navy border-b border-brand-orange/20 shadow-lg h-10 md:h-11">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between gap-2 h-full">
          <div className="text-white font-medium text-xs md:text-base">
            🌲 <span className="hidden sm:inline">Roof Cleaning & Moss Removal Specialists</span><span className="sm:hidden">Roof & Moss Pros</span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="tel:12067526690"
              className="hidden sm:flex items-center gap-2 text-white hover:text-brand-orange transition-colors font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              206-752-6690
            </a>
            <Button 
              variant="cta-orange"
              size="sm"
              className="shadow-md"
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