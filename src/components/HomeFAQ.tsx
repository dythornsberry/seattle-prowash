import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { generateFAQSchema, injectSchema } from "@/utils/schema";

const topFAQs = [
  {
    question: "What does roof or gutter cleaning cost?",
    answer: "Most homes in our area range from $250–$1,200 depending on roof size, pitch, and access. Typical starting prices: Gutter cleaning $250+, Moss treatment with gutter cleaning $499+. We send same-day estimates.",
    icon: CheckCircle,
    cta: true
  },
  {
    question: "How soon can you schedule my service?",
    answer: "Most quotes same day; we usually schedule within 3–7 days (weather dependent). Urgent roof/gutter issues get priority.",
    icon: Clock,
    cta: true
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Seattle ProWash is fully licensed, bonded, and insured. We carry full liability coverage.",
    icon: Shield,
    cta: false
  },
  {
    question: "Do you remove moss? Do you offer treatments?",
    answer: "Absolutely. We safely remove moss using gentle methods and apply our professional moss treatment with a 12-month moss-free guarantee (with basic maintenance).",
    icon: CheckCircle,
    cta: true
  },
  {
    question: "How do I get a quote?",
    answer: "60-second form: name, address, phone, service needed. We look up your roof and text a firm price.",
    icon: CheckCircle,
    cta: true
  },
  {
    question: "What types of roofs do you service?",
    answer: "We service asphalt, metal, and many composite roof types. We use no pressure on shingles to protect your roof while removing moss and debris.",
    icon: CheckCircle,
    cta: false
  }
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
            <p className="text-base text-muted-foreground">
              Straight answers from a local team. No sales pitch.
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
                    <p className="mb-3">{faq.answer}</p>
                    {faq.cta && (
                      <a 
                        href="#contact" 
                        className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 font-medium text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById('contact');
                          if (element) {
                            const offset = 120;
                            const y = element.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }}
                      >
                        Get My Free Quote <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    )}
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
