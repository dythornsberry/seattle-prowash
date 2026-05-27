import { Star, Shield, Clock, Award } from "lucide-react";

const EnhancedTrustBar = () => {
  const metrics = [
    {
      icon: Star,
      value: "5.0",
      label: "Star Rating",
      subtext: "200+ Reviews",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10"
    },
    {
      icon: Shield,
      value: "12",
      label: "Month Guarantee",
      subtext: "Moss-Free",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10"
    },
    {
      icon: Clock,
      value: "100%",
      label: "Satisfaction",
      subtext: "Money-Back Guarantee",
      color: "text-white",
      bgColor: "bg-white/10"
    },
    {
      icon: Award,
      value: "500+",
      label: "Roofs Cleaned",
      subtext: "$1M Liability Insured",
      color: "text-white",
      bgColor: "bg-white/10"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-brand-navy to-slate-800 border-y-2 border-brand-orange/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${metric.bgColor} rounded-full mb-3`}>
                  <IconComponent className={`w-7 h-7 md:w-8 md:h-8 ${metric.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {metric.value}
                  {metric.value === "5.0" && <span className="text-brand-orange">★</span>}
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
        <p className="text-center text-white/50 text-xs mt-6 tracking-wide">
          Eco-friendly, non-toxic products safe for your family, pets, and landscaping
        </p>
      </div>
    </section>
  );
};

export default EnhancedTrustBar;
