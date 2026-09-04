import { Star, ShieldCheck, BadgeCheck } from "lucide-react";

const EnhancedTrustBar = () => {
  const trustPoints = [
    {
      icon: Star,
      title: "5.0 Google rating",
      detail: "233 reviews",
    },
    {
      icon: ShieldCheck,
      title: "12-month guarantee",
      detail: "Moss-free",
    },
    {
      icon: BadgeCheck,
      title: "Licensed & insured",
      detail: "$1M liability coverage",
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-brand-navy border-y border-brand-orange/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {trustPoints.map((point) => {
            const IconComponent = point.icon;
            return (
              <div key={point.title} className="flex items-center justify-center gap-3 text-left">
                <IconComponent className="w-7 h-7 text-brand-orange shrink-0" />
                <div>
                  <div className="font-bold text-white">
                    {point.title}
                  </div>
                  <div className="text-sm text-white/65">
                    {point.detail}
                  </div>
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
