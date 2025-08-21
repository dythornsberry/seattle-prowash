import { Shield, CheckCircle, Star, Clock } from "lucide-react";

const ProWashPromise = () => {
  const promisePoints = [
    {
      icon: Shield,
      title: "12-Month Guarantee",
      description: "Our qualifying roof treatments come with a 12-month moss-free guarantee."
    },
    {
      icon: CheckCircle,
      title: "Fully Licensed & Insured",
      description: "We carry full insurance coverage to protect your property and our team."
    },
    {
      icon: Star,
      title: "180+ 5-Star Reviews",
      description: "Trusted by homeowners across Kenmore, Kirkland, Bothell, and beyond."
    },
    {
      icon: Clock,
      title: "Fast, Free Estimates",
      description: "Get a no-pressure quote for your property, often on the same day."
    }
  ];

  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
            The Seattle ProWash Promise
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promisePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange/10 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-bright-orange" />
                </div>
                <h3 className="font-bold text-dark-teal text-lg mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProWashPromise;