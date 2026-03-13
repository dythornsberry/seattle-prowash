import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Shield, Clock, Leaf } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

const faqs = [
  {
    icon: Shield,
    question: "Is our roof moss protection treatment safe for my roof?",
    answer: "✅ Yes. Our manufacturer-recommended moss protection treatment kills moss and algae at the root without using damaging high pressure.\n\n✅ Protects your shingles and keeps your warranty valid.",
    category: "Safety & Trust"
  },
  {
    icon: CheckCircle,
    question: "What if moss comes back?",
    answer: "We offer a 12-month moss-free guarantee.\n\nIf any new moss growth appears within 12 months of service, we'll return and re-treat the affected areas free of charge.",
    category: "Safety & Trust"
  },
  {
    icon: CheckCircle,
    question: "What types of stains do you remove?",
    answer: "✅ Organic growth: moss, mold, mildew, algae, lichen\n\n❌ Not guaranteed: scuff marks, dust, oxidation, oil stains, gum, paint, rust\n\nSeattle ProWash specializes in organic growth removal only.",
    category: "Safety & Trust"
  },
  {
    icon: Shield,
    question: "Will your cleaning damage my roof?",
    answer: "No. We use gentle, manufacturer-approved soft wash methods:\n\n• Low-pressure application (never high-pressure blasting)\n\n• Eco-friendly moss treatment that kills growth at the root\n\n• Safe for all shingle types and won't void your warranty",
    category: "Safety & Trust"
  },
  {
    icon: CheckCircle,
    question: "What types of roofs do you clean?",
    answer: "• Metal\n\n• Asphalt/composite\n\n• Flat roofs (EPDM, TPO, PVC)\n\n❌ We don't clean cedar shake or tile roofs; we recommend contacting a roofing professional for these specialized roof types.",
    category: "Services"
  },
  {
    icon: CheckCircle,
    question: "Do you offer other services besides roof and gutter cleaning?",
    answer: "Yes. Roof cleaning and gutter cleaning are still our core services, and we also handle pressure washing, exterior window cleaning, and select commercial exterior cleaning throughout the Seattle area.",
    category: "Services"
  },
  {
    icon: Leaf,
    question: "Do you use eco-friendly solutions?",
    answer: "✅ Yes. We use biodegradable, manufacturer-approved cleaning solutions.\n\n✅ Safe for plants, pets, and the environment when used properly.",
    category: "Environment"
  },
  {
    icon: Clock,
    question: "How often should I clean my roof or gutters?",
    answer: "• Roof cleaning - once per year\n\n• Gutter cleaning - twice per year (Spring + Fall)",
    category: "Maintenance"
  },
  {
    icon: Clock,
    question: "What's the best time of year to get my roof or gutters cleaned?",
    answer: "The best time was last year! Regular maintenance will improve your roof's longevity.\n\n• If you see visible moss on your roof\n\n• If you notice clogged or overflowing gutters\n\n• If there's debris buildup from trees\n\nWe recommend cleaning ASAP before it gets worse. Moss and gutter issues only compound over time and get more expensive to fix.",
    category: "Maintenance"
  }
];

const additionalFaqs = [
  {
    icon: Clock,
    question: "How long does a typical service take?",
    answer: "• Roof cleaning - 4-6 hours\n\n• Gutter cleaning - 1-2 hours\n\nMost jobs are completed same day.",
    category: "Process"
  },
  {
    icon: Clock,
    question: "How do estimates and scheduling work?",
    answer: "• Free estimates provided\n\n• Roof cleaning - requires on-site assessment or photos\n\n• Gutter cleaning - often quoted remotely by phone\n\n• Services usually scheduled within 1-2 weeks",
    category: "Process"
  },
  {
    icon: CheckCircle,
    question: "What areas do you serve?",
    answer: "Seattle, Kenmore, and the greater Seattle area, including Bothell, Kirkland, Shoreline, Woodinville, Redmond, Bellevue, Mukilteo, Mill Creek, and Lynnwood.",
    category: "Service Area"
  }
];

const allFaqs = [...faqs, ...additionalFaqs];

const FAQ = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const categories = [...new Set(allFaqs.map(faq => faq.category))];

  // Inject FAQ Schema with all FAQ data
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/✅|❌|•/g, '').trim()
        }
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-page-schema';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.getElementById('faq-page-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Frequently Asked Questions"
        description="Get answers to common questions about Seattle ProWash roof and gutter cleaning. Learn about our process, moss treatment guarantee, pricing, and service areas."
        url="https://www.seattleprowash.com/faq"
      />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Get answers to common questions about our roof cleaning and gutter cleaning services.
              </p>
              <div className="flex justify-center">
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={navigateToContact}
                >
                  Still Have Questions? Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {categories.map((category) => {
                const categoryFAQs = allFaqs.filter(faq => faq.category === category);
                
                return (
                  <div key={category} className="mb-12 fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 border-b border-brand-orange/20 pb-4">
                      {category}
                    </h2>
                    
                    <div className="space-y-6">
                      {categoryFAQs.map((faq, index) => {
                        const IconComponent = faq.icon;
                        
                        return (
                          <Card key={index} className="border-brand-orange/10 hover:border-brand-orange/30 transition-colors">
                            <CardHeader className="pb-4">
                              <div className="flex items-start gap-4">
                                <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-orange/10 rounded-full flex-shrink-0 mt-1">
                                  <IconComponent className="w-5 h-5 text-brand-orange" />
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-lg md:text-xl text-brand-navy mb-3">
                                    Q: {faq.question}
                                  </CardTitle>
                                  <CardDescription className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                                    A: {faq.answer}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Don't see your question? Call us today for a free consultation and personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={navigateToContact}
                >
                  Get My Free Quote
                </Button>
                <Button 
                  variant="prowash-phone" 
                  size="xl"
                  onClick={() => window.location.href = 'tel:206-752-6690'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 206-752-6690
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
