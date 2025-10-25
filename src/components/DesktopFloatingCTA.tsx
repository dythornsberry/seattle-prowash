import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileText } from "lucide-react";

const DesktopFloatingCTA = () => {
  const handleQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:12067526690';
  };

  const handleText = () => {
    window.location.href = 'sms:12067526690';
  };

  return (
    <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-fade-in">
      <div className="bg-white border-2 border-brand-navy rounded-2xl shadow-2xl p-2 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCall}
          className="bg-brand-orange text-white hover:bg-brand-orange-light"
          title="Call us"
        >
          <Phone className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleText}
          className="bg-brand-orange text-white hover:bg-brand-orange-light"
          title="Text us"
        >
          <MessageSquare className="w-4 h-4" />
        </Button>

        <Button
          variant="cta-orange"
          size="sm"
          onClick={handleQuote}
          className="font-bold shadow-md pulse"
          title="Get quote"
        >
          Get a Fast Quote
        </Button>
      </div>
    </div>
  );
};

export default DesktopFloatingCTA;
