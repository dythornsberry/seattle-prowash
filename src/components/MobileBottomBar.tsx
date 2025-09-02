import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText } from "lucide-react";

const MobileBottomBar = () => {
  const handleCallClick = () => {
    // Track call click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Phone',
        event_label: 'Call - Mobile Bottom Bar'
      });
    }
    window.location.href = 'tel:206-752-6690';
  };

  const handleTextClick = () => {
    // Track text click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'SMS',
        event_label: 'Text - Mobile Bottom Bar'
      });
    }
    window.location.href = 'sms:206-752-6690';
  };

  const handleQuoteClick = () => {
    // Track quote click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Get Quote - Mobile Bottom Bar'
      });
    }
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-3 gap-0">
        <Button
          onClick={handleCallClick}
          variant="ghost"
          className="h-16 rounded-none flex-col gap-1 text-seattle-blue hover:bg-seattle-blue/5"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Call</span>
        </Button>

        <Button
          onClick={handleTextClick}
          variant="ghost"
          className="h-16 rounded-none flex-col gap-1 text-seattle-blue hover:bg-seattle-blue/5"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">Text</span>
        </Button>

        <Button
          onClick={handleQuoteClick}
          variant="cta-orange"
          className="h-16 rounded-none flex-col gap-1"
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs font-medium">Get Quote</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;