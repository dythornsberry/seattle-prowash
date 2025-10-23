import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingMossCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 800) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-24 md:bottom-8 right-4 z-40 max-w-sm transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"
      }`}
    >
      <div className="bg-brand-navy border-2 border-brand-orange rounded-lg shadow-2xl p-4 relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-brand-orange text-white rounded-full p-1 hover:bg-brand-orange/90 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-white text-sm mb-1">
              Moss Damage Happening Now
            </h3>
            <p className="text-white/90 text-xs mb-2">
              Every day moss sits on your roof costs you money. Get protected before it's too late.
            </p>
            <p className="text-brand-orange text-xs font-semibold">
              ⚡ Limited spots available this week—lock in your price now
            </p>
          </div>
        </div>
        
        <Button
          variant="cta-orange"
          size="sm"
          className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Free Quote Today
        </Button>
      </div>
    </div>
  );
};

export default FloatingMossCTA;
