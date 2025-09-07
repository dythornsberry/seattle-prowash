import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingSMSButton = () => {
  const handleSMSClick = () => {
    // For mobile devices, this will open the default messaging app
    // For desktop, it will attempt to open a messaging application
    window.location.href = 'sms:2067526690?body=Hi! I\'m interested in getting a quote for roof and gutter cleaning services.';
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 md:bottom-6">
      <Button
        onClick={handleSMSClick}
        className="bg-bright-orange hover:bg-bright-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4 group animate-pulse hover:animate-none"
        size="lg"
        aria-label="Text us for a quote"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        <span className="hidden sm:inline-block ml-2 font-semibold">Text Us</span>
      </Button>
      
      {/* Floating animation rings */}
      <div className="absolute inset-0 rounded-full bg-bright-orange/20 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-bright-orange/10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default FloatingSMSButton;