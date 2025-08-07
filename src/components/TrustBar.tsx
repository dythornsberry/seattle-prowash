import { Star, Shield, Clock, Award } from "lucide-react";

const TrustBar = () => {
  const trustPoints = [
    {
      icon: Star,
      text: "180+ 5-Star Reviews",
      link: "https://www.google.com/search?q=Seattle+ProWash+reviews"
    },
    {
      icon: Shield,
      text: "12-Month Moss-Free Guarantee"
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
      </div>
    </section>
  );
};

export default TrustBar;