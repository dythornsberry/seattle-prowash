import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
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
      <div className="grid grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] gap-2 p-3">
        <Button
          variant="outline"
          size="lg"
          className="w-full min-w-0 flex items-center justify-center gap-1.5 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white min-h-[56px] px-2 text-sm font-semibold leading-tight"
          onClick={handleCall}
        >
          <span className="flex min-w-0 flex-col items-center">
            <span className="text-xs font-normal opacity-80">Call</span>
            <span className="text-xs">206-752-6690</span>
          </span>
        </Button>

        <Button asChild variant="outline" className="h-14 w-12 flex-col gap-0.5 px-0" title="Text Seattle ProWash">
          <a href="sms:+12067526690" aria-label="Text Seattle ProWash at 206-752-6690" onClick={() => {
            window.gtag?.('event', 'sms_click', { location: 'mobile_bottom_bar', phone_number: '2067526690' });
          }}>
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span className="text-xs">Text</span>
          </a>
        </Button>
        
        <Button 
          variant="cta-orange"
          size="lg"
          className="w-full min-w-0 shadow-md min-h-[56px] px-2 text-sm font-semibold"
          onClick={handleQuote}
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
