import { Award, Building2, Home, Shield } from "lucide-react";

const AsSeenOn = () => {
  const features = [
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "194+ Five-Star Reviews"
    },
    {
      icon: Building2,
      title: "Trusted by Businesses",
      description: "Commercial & Residential"
    },
    {
      icon: Home,
      title: "Seattle's Top Choice",
      description: "Family-Owned & Operated"
    },
    {
      icon: Shield,
      title: "Fully Protected",
      description: "Licensed, Bonded & Insured"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-4">
            Trusted by Seattle Homeowners Since 2008
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full mb-3">
                  <IconComponent className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
