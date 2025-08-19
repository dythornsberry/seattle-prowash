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
      answer: "• Safe on shingles - no damaging high pressure\n• Kills moss and algae at the root\n• Protects your warranty\n• Manufacturer-recommended method",
      category: "Safety & Trust"
    },
    {
      icon: CheckCircle,
      question: "What happens if moss comes back after treatment?",
      answer: "We offer a **12-month moss-free guarantee**\n\n• If moss returns within 12 months, we re-treat for free\n• No questions asked\n• Applies to all treated surfaces",
      category: "Safety & Trust"
    },
    {
      icon: CheckCircle,
      question: "What types of stains do you remove?",
      answer: "**We specialize in organic growth removal:**\n• Moss, mold, mildew\n• Algae and lichen\n• Green buildup on surfaces\n\n**Not guaranteed:**\n• Oil stains, rust, oxidation\n• Scuff marks, gum, paint\n• Dust (requires wiping)",
      category: "Safety & Trust"
    },
    {
      icon: Shield,
      question: "Will pressure washing damage my surfaces?",
      answer: "No. We use the right method for each surface:\n\n**Soft washing for:**\n• Roofs, siding & decks\n• Delicate surfaces\n\n**Controlled pressure for:**\n• Concrete & pavers\n• Professional surface cleaners used",
      category: "Safety & Trust"
    },
    {
      icon: CheckCircle,
      question: "What types of roofs do you clean?",
      answer: "**We clean:**\n• Metal roofs\n• Asphalt/composite shingles\n• Flat roofs (EPDM, TPO, PVC)\n\n**We don't clean:**\n• Cedar shake roofs\n• Tile roofs\n\n*For these, contact a roofing professional*",
      category: "Services"
    },
    {
      icon: CheckCircle,
      question: "Do you clean windows?",
      answer: "We include **exterior window rinsing** with house washing:\n\n• Great for removing dirt, dust, and grime\n• Not a 100% spot-free finish\n• Different from dedicated window cleaning service",
      category: "Services"
    },
    {
      icon: Leaf,
      question: "Do you use eco-friendly solutions?",
      answer: "**Yes - all our solutions are:**\n• Biodegradable\n• Manufacturer-approved\n• Safe for plants and pets when used properly\n• Environmentally responsible",
      category: "Environment"
    },
    {
      icon: Clock,
      question: "How often should I clean my roof or gutters in the Seattle area?",
      answer: "**Recommended schedule for Pacific Northwest:**\n\n• **Roof cleaning:** Once per year\n• **Gutter cleaning:** Twice per year (Spring + Fall)\n\n*Our wet climate promotes moss growth*",
      category: "Maintenance"
    },
    {
      icon: Clock,
      question: "How long does a typical service take?",
      answer: "**Most jobs completed same day:**\n\n• **Roof cleaning:** 4–6 hours\n• **House washing:** 3–4 hours\n• **Gutter cleaning:** 1–2 hours\n\n*Times vary by property size and condition*",
      category: "Process"
    },
    {
      icon: Clock,
      question: "How do estimates and scheduling work?",
      answer: "**Free estimates provided:**\n\n• **Roof cleaning:** Requires on-site assessment\n• **Gutter/driveway cleaning:** Often quoted by phone\n• **Scheduling:** Usually within 1–2 weeks\n• **No pressure sales**",
      category: "Process"
    },
    {
      icon: CheckCircle,
      question: "What areas do you serve?",
      answer: "**Primary service areas:**\n\nSeattle, Kenmore, Bothell, Kirkland, Shoreline, Woodinville, Redmond, Bellevue, Mukilteo, Mill Creek, and Lynnwood\n\n*Contact us if your area isn't listed*",
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
                                    <div dangerouslySetInnerHTML={{ 
                                      __html: `A: ${faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}`
                                    }} />
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