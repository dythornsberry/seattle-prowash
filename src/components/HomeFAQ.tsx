import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { generateFAQSchema, injectSchema } from "@/utils/schema";

const topFAQs = [
  {
    question: "What does roof or gutter cleaning cost?",
    answer: "Roof cleaning starts at $499 and gutter cleaning starts at $250. Your exact price depends on size, access, roof type, and buildup.",
  },
  {
    question: "How soon can you schedule my service?",
    answer: "Scheduling depends on weather and demand. Dylan will confirm current availability when he follows up.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Seattle ProWash is fully licensed, bonded, and insured. We carry full liability coverage.",
  },
  {
    question: "Do you remove moss? Do you offer treatments?",
    answer: "Yes. We gently remove moss and apply treatment backed by a 12-month moss-free guarantee.",
  },
];

const HomeFAQ = () => {
  // Inject FAQ Schema for SEO
  useEffect(() => {
    const faqData = topFAQs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));

    const schema = generateFAQSchema({ faqs: faqData });
    const cleanup = injectSchema(schema);

    return cleanup;
  }, []);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {topFAQs.map((faq, index) => {
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
                    <p>{faq.answer}</p>
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
