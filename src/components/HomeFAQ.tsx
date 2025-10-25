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
      question: "How long does roof and gutter cleaning take?",
      answer: "Most residential jobs take 2-4 hours. We'll give you an accurate time estimate when we provide your free quote.",
      icon: Clock
    },
    {
      question: "Are estimates free?",
      answer: "Yes, all estimates are completely free with no obligation. We can often provide quotes the same day.",
      icon: CheckCircle
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We're fully licensed, bonded, and insured to protect your property and give you complete peace of mind.",
      icon: Shield
    },
    {
      question: "Which areas do you service?",
      answer: "We serve Seattle and the greater Eastside, including Bellevue, Kirkland, Redmond, Sammamish, Woodinville, Bothell, and Kenmore.",
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
