import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileText, X } from "lucide-react";
import { useState } from "react";

const UnifiedContactBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:12067526690';
  };

  const handleText = () => {
    window.location.href = 'sms:12067526690';
  };

  const handleQuote = () => {
    setIsExpanded(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        {isExpanded ? (
          <div className="bg-white border border-border rounded-2xl shadow-2xl p-4 space-y-2 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">Contact Us</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className="w-full justify-start gap-2 border-border hover:bg-accent"
            >
              <Phone className="w-4 h-4" />
              Call 206-752-6690
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleText}
              className="w-full justify-start gap-2 border-border hover:bg-accent"
            >
              <MessageSquare className="w-4 h-4" />
              Send a Text
            </Button>
            <Button
              variant="cta-orange"
              size="sm"
              onClick={handleQuote}
              className="w-full justify-start gap-2"
            >
              <FileText className="w-4 h-4" />
              Get Free Quote
            </Button>
          </div>
        ) : (
          <Button
            variant="cta-orange"
            onClick={() => setIsExpanded(true)}
            className="shadow-2xl rounded-full px-6 py-6 text-base font-semibold"
          >
            Contact Us
          </Button>
        )}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-2xl mb-safe">
        {isExpanded ? (
          <div className="p-4 space-y-2 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">Contact Us</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className="w-full justify-start gap-2 border-border hover:bg-accent"
            >
              <Phone className="w-4 h-4" />
              Call 206-752-6690
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleText}
              className="w-full justify-start gap-2 border-border hover:bg-accent"
            >
              <MessageSquare className="w-4 h-4" />
              Send a Text
            </Button>
            <Button
              variant="cta-orange"
              size="sm"
              onClick={handleQuote}
              className="w-full justify-start gap-2"
            >
              <FileText className="w-4 h-4" />
              Get Free Quote
            </Button>
          </div>
        ) : (
          <div className="p-3">
            <Button
              variant="cta-orange"
              onClick={() => setIsExpanded(true)}
              className="w-full font-semibold"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default UnifiedContactBar;
