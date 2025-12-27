import { Star, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigateToContact } from "@/lib/navigation";

const TrustBar = () => {
  const trustPoints = [
    {
      icon: Star,
      text: "194+ 5-Star Reviews",
      link: "https://www.google.com/search?q=Seattle+ProWash+reviews"
    },
    {
      icon: Shield,
      text: "12-month moss-free guarantee"
    },
    {
      icon: Award,
      text: "Fully Licensed & Insured"
    },
    {
      icon: Clock,
      text: "Same-Day Free Estimates"
    }
  ];

  return (
    <section className="py-8 bg-primary-teal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            const content = (
              <div className="flex items-center justify-center gap-3 text-white">
                <IconComponent className="w-6 h-6 text-bright-green flex-shrink-0" />
                <span className="font-semibold text-center">{point.text}</span>
              </div>
            );

            return (
              <div key={index} className="text-center">
                {point.link ? (
                  <a 
                    href={point.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-bright-green transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="cta-orange" 
              size="sm"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
            onClick={navigateToContact}
            >
              GET YOUR FREE QUOTE TODAY
            </Button>
          </div>
        </div>
      </section>
  );
};

export default TrustBar;