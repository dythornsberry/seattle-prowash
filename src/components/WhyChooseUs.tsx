import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Family-owned & operated in Kenmore",
    "180+ five-star Google reviews",
    "12-month moss-free guarantee",
    "Licensed, bonded & insured",
    "Same-day quotes available"
  ];

  return (
    <div className="bg-brand-navy text-white py-8 px-6 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Seattle ProWash?</h3>
      <ul className="space-y-3 max-w-2xl mx-auto">
        {reasons.map((reason, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <span className="text-base">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
