import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Home, Droplet, Car, Zap } from "lucide-react";

const Pricing = () => {
  // SEO meta tags
  useEffect(() => {
    document.title = "Pricing & Services | Seattle ProWash";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See simple, upfront pricing for roof cleaning, gutter cleaning, and house washing in the Seattle area. Fair prices and no surprises.');
    }
  }, []);

  const services = [
    {
      icon: Home,
      title: "Roof Cleaning",
      price: "From $500",
      features: [
        "Complete soft wash treatment kills all moss & algae",
        "Gentle, low-pressure method is safe for all shingle types",
        "All loose debris removed from roof surface",
        "Includes our 12-month moss-free guarantee on qualifying treatments"
      ]
    },
    {
      icon: Droplet,
      title: "Gutter Cleaning",
      price: "From $250",
      features: [
        "We clear all debris from your gutters",
        "Flush your downspouts to ensure proper water flow",
        "Protect your home's foundation",
        "Completion photos are included with every job"
      ]
    },
    {
      icon: Zap,
      title: "House Washing",
      price: "From $500",
      features: [
        "Complete exterior soft wash for your home",
        "Gently clean siding, trim, eaves, and outside of gutters",
        "Remove algae, mildew, and organic stains",
        "Fresh new look for your home's exterior"
      ]
    },
    {
      icon: Car,
      title: "Pressure Washing",
      price: "From $250",
      features: [
        "Revitalize your home's curb appeal",
        "Deep clean driveways, patios, walkways",
        "Clean other hardscapes",
        "Remove years of built-up grime"
      ]
    }
  ];

  const priceRanges = [
    { service: "Roof Cleaning", range: "$500 – $1,200+" },
    { service: "Gutter Cleaning", range: "$250 – $450+" },
    { service: "House Washing", range: "$500 – $1,000+" },
    { service: "Pressure Washing", range: "$250 – $600+" }
  ];

  const faqs = [
    {
      question: "Why do prices say 'starting at'?",
      answer: "Every home is unique. Our final pricing depends on the square footage, pitch of the roof, accessibility, and the level of cleaning required. We provide a firm quote before any work begins."
    },
    {
      question: "Is your roof cleaning guaranteed?",
      answer: "Yes. Qualifying roof treatments come with our 12-month moss-free guarantee. If moss returns within a year, we'll come back and treat it for free."
    },
    {
      question: "Is soft washing safe for my house?",
      answer: "Absolutely. Soft washing is the #1 method recommended by roofing and siding manufacturers. It uses low pressure and specialized cleaning solutions to kill organic growth without risking damage to your property."
    },
    {
      question: "Do I get to see the results?",
      answer: "Yes. We provide completion photos, especially for roof and gutter work, so you can see the finished job from the ground."
    },
    {
      question: "Are your quotes free?",
      answer: "Always. Quotes are 100% free and carry no obligation. Most can be done quickly online using satellite imagery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
              Simple, Upfront Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-2xl">
              Fast quotes. Fair prices. No surprises.
            </p>
            <Button 
              variant="cta-orange" 
              size="xl"
                onClick={() => {
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
            >
              Get My Fast Quote
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-off-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-bright-orange/50">
                    <CardHeader className="text-center pb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange/10 rounded-full mb-4 mx-auto group-hover:bg-bright-orange/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-bright-orange" />
                      </div>
                      <CardTitle className="text-xl font-bold text-dark-teal mb-2">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-bright-orange text-white text-lg font-bold px-4 py-2">
                        {service.price}
                      </Badge>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-moss-green mr-3 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Typical Project Ranges */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-dark-teal mb-6 text-center">
                Typical Project Ranges
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary-teal">
                      <th className="text-left py-3 px-4 font-bold text-dark-teal">Service</th>
                      <th className="text-left py-3 px-4 font-bold text-dark-teal">Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceRanges.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">{item.service}</td>
                        <td className="py-3 px-4 text-bright-orange font-semibold">{item.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Pricing varies based on home size, complexity, and condition.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-teal mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md border">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-dark-teal hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark-teal text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Spotless Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today. Most quotes can be done quickly using satellite imagery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta-orange" 
                size="xl"
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
              >
                Get My Fast Quote
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-dark-teal"
                onClick={() => window.location.href = 'tel:2067526690'}
              >
                Call 206.752.6690
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;