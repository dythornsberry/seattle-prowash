import { Search, Droplets, Shield } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Inspect",
      description: "We assess your roof's condition and identify problem areas",
      icon: Search
    },
    {
      number: "2", 
      title: "Treat",
      description: "Safe soft-wash treatment eliminates moss and prevents regrowth",
      icon: Droplets
    },
    {
      number: "3",
      title: "Protect", 
      description: "12-month moss-free guarantee keeps your roof clean",
      icon: Shield
    }
  ];

  return (
    <section className="section-spacing bg-forest-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our 3-Step Process
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Simple, effective, and guaranteed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="fade-up">
                  <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gold text-forest-green rounded-full mb-6 mx-auto">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-forest-green mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;