import { Star, Shield, Clock, Award } from "lucide-react";
import { useEffect, useState } from "react";

const EnhancedTrustBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      icon: Star,
      value: "4.9",
      label: "Star Rating",
      subtext: "194+ Reviews",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10"
    },
    {
      icon: Shield,
      value: "12",
      label: "Month Guarantee",
      subtext: "Moss-Free",
      color: "text-green-600",
      bgColor: "bg-green-600/10"
    },
    {
      icon: Clock,
      value: "Same",
      label: "Day Estimates",
      subtext: "Fast Response",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      subtext: "Licensed & Insured",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-brand-navy to-slate-800 border-y-2 border-brand-orange/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${metric.bgColor} rounded-full mb-3`}>
                  <IconComponent className={`w-7 h-7 md:w-8 md:h-8 ${metric.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {metric.value}
                  {metric.value === "4.9" && <span className="text-brand-orange">★</span>}
                  {metric.value === "12" && <span className="text-lg">mo</span>}
                </div>
                <div className="text-sm md:text-base font-semibold text-white/90">
                  {metric.label}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTrustBar;
