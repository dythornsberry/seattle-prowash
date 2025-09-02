import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileText } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50 md:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        {/* Call */}
        <Button
          asChild
          variant="ghost"
          className="flex flex-col items-center justify-center h-16 text-brand-blue hover:bg-brand-blue/10"
        >
          <a href="tel:2067526690">
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Call</span>
          </a>
        </Button>

        {/* Text */}
        <Button
          asChild
          variant="ghost"
          className="flex flex-col items-center justify-center h-16 text-brand-blue hover:bg-brand-blue/10"
        >
          <a href="sms:2067526690">
            <MessageSquare className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Text</span>
          </a>
        </Button>

        {/* Get Quote */}
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center h-16 text-white bg-cta-orange hover:bg-cta-orange-dark"
          onClick={() => {
            document.getElementById('quote-form')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            });
          }}
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Get Quote</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;