import { CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Get Your Free Quote",
      description: "Call, text, or fill out our form. We'll provide a fast, accurate, and no-pressure quote for your property."
    },
    {
      number: "2", 
      title: "We Handle the Work",
      description: "Our licensed and insured team will arrive on time and use professional equipment to safely transform your home."
    },
    {
      number: "3",
      title: "Love Your Results", 
      description: "Enjoy a pristine property, backed by our 100% satisfaction and 12-month moss-free guarantees."
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Our Simple 3-Step Process
            </h2>
            <p className="text-xl text-brand-gray-text max-w-2xl mx-auto font-medium">
              We make restoring your home's beauty straightforward and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="fade-up group">
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-4">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brand-orange/20 transform -translate-y-1/2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 fade-up">
            <div className="inline-flex items-center bg-brand-blue/10 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-brand-orange mr-2" />
              <span className="text-brand-blue font-semibold">
                Licensed, Insured & Locally Owned Since 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;