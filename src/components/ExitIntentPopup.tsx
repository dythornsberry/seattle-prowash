import { useState, useEffect } from "react";
import { X, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigateToContact } from "@/lib/navigation";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        // Small delay to prevent accidental triggers
        timeoutId = setTimeout(() => {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }, 200);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGetQuote = () => {
    // Track exit intent conversion
    if (window.gtag) {
      window.gtag('event', 'exit_intent_conversion', {
        location: 'exit_popup'
      });
    }
    navigateToContact();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] max-w-lg animate-scale-in">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-brand-orange overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Alert Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4">
              <Clock className="w-8 h-8 text-brand-orange" />
            </div>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
              Before You Go
            </h3>

            {/* Subheading */}
            <p className="text-gray-700 text-lg mb-6">
              <strong>Moss doesn't stop growing while you decide.</strong> Every week you wait, the damage gets more expensive to fix. Get a fast quote and we'll be in touch shortly.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-200">
              <div className="text-center">
                <Star className="w-6 h-6 text-brand-orange mx-auto mb-1 fill-brand-orange" />
                <div className="text-sm font-semibold text-gray-900">5.0★ Rating</div>
                <div className="text-xs text-gray-600">200+ Reviews</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-brand-orange mx-auto mb-1" />
                <div className="text-sm font-semibold text-gray-900">12-Month</div>
                <div className="text-xs text-gray-600">Guarantee</div>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 text-brand-orange mx-auto mb-1" />
                <div className="text-sm font-semibold text-gray-900">Free</div>
                <div className="text-xs text-gray-600">Quotes</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                variant="cta-orange"
                size="lg"
                className="w-full text-lg font-bold shadow-lg"
                onClick={handleGetQuote}
              >
                Get Fast Quote →
              </Button>
              <p className="text-sm text-gray-600">
                Or call or text <a href="tel:12067526690" className="text-brand-orange hover:underline font-semibold">206-752-6690</a> now
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitIntentPopup;
