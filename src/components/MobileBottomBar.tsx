import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex items-center justify-between p-3 gap-2">
        <Button 
          variant="outline"
          size="sm"
          className="flex-1 flex items-center gap-2"
          onClick={() => window.location.href = 'tel:12067526690'}
        >
          <Phone className="w-4 h-4" />
          Call
        </Button>
        
        <Button 
          variant="outline"
          size="sm"
          className="flex-1 flex items-center gap-2"
          onClick={() => window.location.href = 'sms:12067526690'}
        >
          <MessageSquare className="w-4 h-4" />
          Text
        </Button>
        
        <Button 
          variant="cta-orange"
          size="sm"
          className="flex-1 bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;