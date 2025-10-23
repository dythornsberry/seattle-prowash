import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

const HomeFAQ = () => {
  const topFAQs = [
    {
      question: "Is your moss treatment safe for my roof?",
      answer: "✓ Yes. Our manufacturer-recommended treatment kills moss at the root without damaging high pressure. It protects your shingles and keeps your warranty valid.",
      icon: Shield
    },
    {
      question: "What's in the 12-month guarantee?",
      answer: "If any new moss growth appears within 12 months of service, we'll return and re-treat the affected areas completely free of charge. No questions asked.",
      icon: CheckCircle
    },
    {
      question: "How quickly can you provide a quote?",
      answer: "Most quotes are delivered the same day. We respond within 1 hour during business hours. For roof cleaning, we may schedule a quick on-site visit to ensure accuracy.",
      icon: Clock
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-heading">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to help you decide
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 fade-up">
            {topFAQs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-brand-navy/10 rounded-xl px-6 hover:border-brand-orange/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4 pr-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-5 h-5 text-brand-orange" />
                      </div>
                      <span className="text-lg font-semibold text-brand-navy">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-14 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="text-center mt-8 fade-up">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/faq'}
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-orange hover:text-white"
            >
              View All FAQs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Still have questions?{" "}
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-orange hover:text-brand-orange-light font-semibold underline"
              >
                Contact us
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
