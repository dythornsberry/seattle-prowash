import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const SlimUrgencyBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-navy border-t-2 border-brand-orange shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <p className="text-white text-sm md:text-base font-medium">
              Moss damage happens fast. Limited spots available this week
            </p>
          </div>
          <Button
            variant="cta-orange"
            size="sm"
            className="whitespace-nowrap"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Fast Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlimUrgencyBanner;
