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
    <section className="section-spacing bg-off-white">
      <div className="container mx-auto px-4">
        {/* Visually isolated "Plan" container */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-teal mb-6">
              Our Simple 3-Step Process
            </h2>
            <p className="text-xl text-text-charcoal max-w-2xl mx-auto font-medium">
              From free estimate to sparkling clean results, we make roof cleaning straightforward and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="fade-up group">
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-bright-green/20">
                    <div className="flex items-center justify-center w-16 h-16 bg-bright-green text-white rounded-full font-bold text-xl mb-6 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-primary-teal mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-text-charcoal text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-bright-green/20 transform -translate-y-1/2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center fade-up">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md border border-bright-green/20">
              <div className="w-6 h-6 bg-bright-green rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-primary-teal font-semibold">Licensed, Insured & Locally Owned Since 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;