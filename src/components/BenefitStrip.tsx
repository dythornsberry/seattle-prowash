import { Shield, Gift, CheckCircle, Star } from "lucide-react";

const BenefitStrip = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete protection"
    },
    {
      icon: Gift,
      title: "Free Gutter Clean",
      description: "w/ Roof Service"
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
    <section className="py-12 bg-brand-gray border-y border-brand-orange/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-blue text-sm lg:text-base mb-1">
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