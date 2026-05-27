import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

const MobileBottomBar = () => {
  const handleCall = () => {
    // Track phone call click
    if (window.gtag) {
      window.gtag('event', 'phone_call_click', {
        location: 'mobile_bottom_bar',
        phone_number: '2067526690'
      });
    }
    window.location.href = 'tel:12067526690';
  };

  const handleQuote = () => {
    // Track quote button click
    if (window.gtag) {
      window.gtag('event', 'get_quote_click', {
        location: 'mobile_bottom_bar'
      });
    }
    navigateToContact();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-brand-navy shadow-2xl md:hidden pb-safe">
      <div className="flex items-center gap-2 p-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white min-h-[56px] text-sm font-semibold leading-tight"
          onClick={handleCall}
        >
          <Phone className="w-5 h-5" />
          <span className="flex flex-col items-start">
            <span className="text-[10px] font-normal opacity-80">Tap to call</span>
            <span>206-752-6690</span>
          </span>
        </Button>
        
        <Button 
          variant="cta-orange"
          size="lg"
          className="flex-1 shadow-md min-h-[56px] text-base font-semibold"
          onClick={handleQuote}
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;