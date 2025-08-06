import { Shield, Calendar, CheckCircle, Star } from "lucide-react";

const BenefitStrip = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete protection"
    },
    {
      icon: Calendar,
      title: "12 Month Moss‑Free",
      description: "Guarantee"
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "Guaranteed results"
    },
    {
      icon: Star,
      title: "180 ★★★★★ Reviews",
      description: "Trusted by neighbors"
    }
  ];

  return (
    <section className="py-16 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-brand-gray-text/10 text-center fade-up hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-sm lg:text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs lg:text-sm text-brand-gray-text font-medium">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitStrip;