import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

const StickyTopBar = () => {
  const handleCallClick = () => {
    // Track phone call click
    if (window.gtag) {
      window.gtag('event', 'phone_call_click', {
        location: 'sticky_top_bar',
        phone_number: '2067526690'
      });
    }
    window.location.href = 'tel:12067526690';
  };

  return (
    <div id="sticky-top-bar" className="fixed top-0 left-0 right-0 z-50 bg-brand-navy border-b border-brand-orange/20 shadow-lg h-12 md:h-11">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between gap-2 h-full">
          <div className="text-white font-medium text-xs md:text-base">
            🏠 <span className="hidden sm:inline">Kenmore's Roof & Gutter Cleaning Experts</span><span className="sm:hidden">Roof & Gutter Pros</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCallClick}
              className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors font-bold text-lg md:text-xl active:scale-95"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-base md:text-lg">206-752-6690</span>
            </button>
            <Button 
              variant="cta-orange"
              size="sm"
              className="shadow-md hidden sm:inline-flex"
              onClick={navigateToContact}
            >
              Get Fast Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTopBar;
