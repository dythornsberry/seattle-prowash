import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Shield, Clock, Leaf } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

const FAQ = () => {
  // SEO meta tags
  useEffect(() => {
    document.title = "FAQ - Seattle ProWash | Roof Cleaning & Pressure Washing";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Get answers to common questions about our roof cleaning, pressure washing, and house washing services in Seattle. Learn about our process, guarantees, and more."
    );
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

  const faqs = [
    {
      icon: Shield,
      question: "Is soft washing safe for my roof?",
      answer: "✅ Yes. Our manufacturer-recommended soft wash method kills moss and algae at the root without using damaging high pressure.\n✅ Protects your shingles and keeps your warranty valid.",
      category: "Safety & Trust"
    },
    {
      icon: CheckCircle,
      question: "What happens if moss comes back after treatment?",
      answer: "We offer a 12-month moss-free guarantee.\nIf any new moss growth appears within 12 months of service, we'll return and re-treat the affected areas free of charge.",
      category: "Safety & Trust"
    },
    {
      icon: CheckCircle,
      question: "What types of stains do you remove?",
      answer: "✅ Organic growth: moss, mold, mildew, algae, lichen\n❌ Not guaranteed: scuff marks, dust, oxidation, oil stains, gum, paint, rust\n\nSeattle ProWash specializes in organic growth removal only.",
      category: "Safety & Trust"
    },
    {
      icon: Shield,
      question: "Will pressure washing damage my surfaces?",
      answer: "No. We use the right method for each surface:\n• Roofs, siding & decks → soft washing\n• Concrete & pavers → controlled pressure washing with pro-grade surface cleaners",
      category: "Safety & Trust"
    },
    {
      icon: CheckCircle,
      question: "What types of roofs do you clean?",
      answer: "• Metal\n• Asphalt/composite\n• Flat roofs (EPDM, TPO, PVC)\n\n❌ We don't clean cedar shake or tile roofs. For those, we recommend contacting a roofing professional.",
      category: "Services"
    },
    {
      icon: CheckCircle,
      question: "Do you clean windows?",
      answer: "We include exterior window rinsing with house washing (great for removing dirt, dust, and grime).\nNot a 100% spot-free finish like a dedicated window cleaning service.",
      category: "Services"
    },
    {
      icon: Leaf,
      question: "Do you use eco-friendly solutions?",
      answer: "✅ Yes. We use biodegradable, manufacturer-approved cleaning solutions.\n✅ Safe for plants, pets, and the environment when used properly.",
      category: "Environment"
    },
    {
      icon: Clock,
      question: "How often should I clean my roof or gutters in the Seattle area?",
      answer: "• Roof cleaning → once per year\n• Gutter cleaning → twice per year (Spring + Fall)",
      category: "Maintenance"
    },
    {
      icon: Clock,
      question: "How long does a typical service take?",
      answer: "• Roof cleaning → 4–6 hours\n• House washing → 3–4 hours\n• Gutter cleaning → 1–2 hours\n\nMost jobs are completed same day.",
      category: "Process"
    },
    {
      icon: Clock,
      question: "How do estimates and scheduling work?",
      answer: "• Free estimates provided\n• Roof cleaning → requires on-site assessment\n• Gutter cleaning/driveway cleaning → often quoted remotely by phone\n• Services usually scheduled within 1–2 weeks",
      category: "Process"
    },
    {
      icon: CheckCircle,
      question: "What areas do you serve?",
      answer: "Seattle, Kenmore, and the greater Seattle area, including Bothell, Kirkland, Shoreline, Woodinville, Redmond, Bellevue, Mukilteo, Mill Creek, and Lynnwood.",
      category: "Service Area"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Get answers to common questions about our roof cleaning, pressure washing, and house washing services.
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
                const categoryFAQs = faqs.filter(faq => faq.category === category);
                
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
                  Call 206.752.6690
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