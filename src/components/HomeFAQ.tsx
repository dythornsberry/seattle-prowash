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
      question: "What does roof or gutter cleaning cost?",
      answer: "Roof cleaning typically ranges from $500–$1,000, while gutter cleaning is $250–$500. Final pricing depends on roof size, pitch, condition and how long it's been since your last service.",
      icon: CheckCircle
    },
    {
      question: "How soon can you do the job?",
      answer: "We strive to schedule most jobs within the same week. Peak seasons fill up quickly, so contact us early to secure your preferred date.",
      icon: Clock
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. Seattle ProWash is fully licensed, bonded and insured, so your property is protected.",
      icon: Shield
    },
    {
      question: "Do you remove moss? Do you offer treatments?",
      answer: "Absolutely. We safely remove moss and apply long-lasting moss treatments to prevent regrowth. Our treatments are eco-friendly and tailored to the Pacific Northwest climate.",
      icon: CheckCircle
    },
    {
      question: "How do I get a quote?",
      answer: "Simply fill out the 'Get My Free Quote' form or call/text us. We'll gather a few details and provide a no-obligation estimate.",
      icon: CheckCircle
    },
    {
      question: "What types of roofs do you service?",
      answer: "We clean most residential roof types including asphalt shingles, metal, tile and cedar shake. For unique materials, please contact us.",
      icon: CheckCircle
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted-foreground">
              Everything you need to know
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {topFAQs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-5 bg-card hover:shadow-sm transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-base font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/faq'}
              className="border border-border hover:bg-accent"
            >
              View All FAQs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
