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
      answer: "Yes. Our soft wash method kills moss and algae at the root without high pressure. It protects shingles and keeps your warranty valid.",
      category: "Safety"
    },
    {
      icon: CheckCircle,
      question: "What types of stains do you remove?",
      answer: "Our soft wash techniques safely remove organic growth like moss, mold, mildew, algae, and lichen. However, we cannot guarantee removal of non-organic stains such as scuff marks, dust, oxidation, oil stains, gum, paint, or rust. Seattle ProWash specializes in organic growth removal only.",
      category: "Services"
    },
    {
      icon: Shield,
      question: "What types of roofs do you clean?", 
      answer: "We specialize in cleaning metal, asphalt/composite, and flat roofs (including EPDM, TPO, and PVC). We don't clean cedar shake or tile roofs - we recommend contacting a roofing professional for those specialized roof types.",
      category: "Services"
    },
    {
      icon: CheckCircle,
      question: "Do you clean windows?",
      answer: "No. Instead we offer house soft washing that includes windows for free as part of the service, excellent for removing grime and dust off the windows, but not a deep clean that is 100% spot free like a traditional window cleaning service.",
      category: "Services"
    },
    {
      icon: Leaf,
      question: "Do you use eco-friendly solutions?",
      answer: "Yes. We use biodegradable, manufacturer-approved cleaning solutions that are safe for plants, pets, and the environment when used properly.",
      category: "Environment"
    },
    {
      icon: Clock,
      question: "How often should I clean my roof or gutters in the Seattle area?",
      answer: "We recommend yearly roof cleaning and gutter cleaning twice per year (once in Fall, once in Spring) in the Pacific Northwest due to our wet climate and moss growth conditions.",
      category: "Maintenance"
    },
    {
      icon: Shield,
      question: "Will pressure washing damage my surfaces?",
      answer: "No. We use appropriate pressure levels and techniques for each surface. For delicate areas like roofs and siding, we use soft washing. For concrete and pavers, we use controlled pressure washing with professional surface cleaners.",
      category: "Safety"
    },
    {
      icon: Clock,
      question: "How long does a typical service take?",
      answer: "Most services take 2-4 hours depending on size and scope. Roof cleaning: 4-6 hours. House washing: 3-4 hours. Gutter cleaning: 1-2 hours.",
      category: "Process"
    },
    {
      icon: CheckCircle,
      question: "What happens if moss comes back after treatment?",
      answer: "We offer a 12-month moss-free guarantee. If any new moss growth appears on treated surfaces within 12 months of your service date, we'll return and re-treat the affected areas free of charge.",
      category: "Guarantee"
    },
    {
      icon: CheckCircle,
      question: "What areas do you serve?",
      answer: "We serve Seattle, Kenmore and the greater Seattle area, including Bothell, Kirkland, Shoreline, Woodinville, Redmond, Bellevue, Mukilteo, Mill Creek, and Lynnwood.",
      category: "Service Area"
    },
    {
      icon: Clock,
      question: "How do estimates and scheduling work?",
      answer: "We provide free estimates. For roof cleaning, we require in-person assessments. For services like gutter cleaning or driveway cleaning, we can usually provide remote quotes over the phone. We schedule services typically within 1-2 weeks of booking.",
      category: "Process"
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
                                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
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
                Don't see your question? Call us for a free consultation and personalized answers.
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