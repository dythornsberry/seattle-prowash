import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";
import ProcessSection from "@/components/ProcessSection";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, HelpCircle, Calendar } from "lucide-react";
import gutterCleaningImage from "@/assets/gutter-cleaning-before-after.jpg";

const GutterCleaning = () => {
  useEffect(() => {
    document.title = "Gutter Cleaning and Downspout Flushing | Seattle ProWash";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Professional gutter cleaning and downspout flushing. Clear flow, clean edges, photos included. Serving Kenmore, Bothell, Kirkland."
      );
    }

    window.scrollTo(0, 0);

    // Intersection Observer for fade-up animations
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

  const whatYouGet = [
    "Hand-scoop all leaves and debris to restore proper water flow",
    "Flush downspouts to ensure drainage works perfectly",
    "Remove all debris from your property—no mess left behind",
    "Clean visible drips from fascia to improve your home's appearance",
    "Receive completion photos showing the work was done right"
  ];

  const addOns = [
    "Minor gutter reseals where accessible",
    "Gutter brightening for black streaks",
    "Roof blow-off if requested"
  ];

  const faqs = [
    {
      question: "Do you work from the roof or ladders?",
      answer: "We choose the safest method for the home and conditions."
    },
    {
      question: "Can you unclog underground drains?",
      answer: "If a line is blocked underground we'll advise options."
    },
    {
      question: "Do you clean up after?",
      answer: "Yes. We leave the site tidy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StickyTopBar />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="fade-up">
                  <Badge variant="outline" className="text-brand-orange border-brand-orange mb-4">
                    Gutter Cleaning Experts
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    Gutter Cleaning and Downspout Flushing
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-white/90 font-semibold">
                    Our main recurring service — keeps your home safe year-round
                  </p>
                  <p className="text-lg mb-4 text-white/80">
                    With Seattle's heavy rain and mossy trees, we recommend 1–2 cleanings per year. Our gutter cleaning keeps water flowing properly, protecting your foundation and preventing costly damage.
                  </p>
                  <p className="text-lg mb-8 text-white/80">
                    <strong>Ask about our Gutter Maintenance Plans</strong> for hassle-free scheduling and priority service.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="prowash-secondary" 
                      size="xl"
                      onClick={() => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }}
                    >
                      Get Free Quote Today
                    </Button>
                    <Button 
                      variant="outline" 
                      size="xl"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                      onClick={() => window.location.href = 'tel:206-752-6690'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call 206-752-6690
                    </Button>
                  </div>
                </div>
                <div className="fade-up">
                  <img
                    src={gutterCleaningImage}
                    alt="Professional gutter cleaning Seattle - Before and after photos showing debris removal and clear downspouts in Kenmore, Bothell, and Kirkland area"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                  What You Get Every Visit
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="fade-up">
                  <ul className="space-y-4">
                    {whatYouGet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fade-up">
                  <Card className="h-full bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border-brand-orange/20">
                    <CardHeader>
                      <CardTitle className="text-brand-navy flex items-center gap-2">
                        Bundle & Save 15%
                        <Badge className="bg-bright-green">Popular</Badge>
                      </CardTitle>
                      <CardDescription>
                        Complete exterior protection
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold text-brand-navy mb-3">
                        Gutter Cleaning + Roof Blow-Off
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Clear leaves and debris from both your gutters and roof in one visit. Most efficient way to maintain your home's exterior.
                      </p>
                      <div className="space-y-2 pt-4 border-t">
                        <p className="text-sm font-semibold text-brand-navy">Standard Pricing:</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Single-story: $199 - $299</p>
                          <p>• Two-story: $299 - $499</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                Add-ons
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {addOns.map((addOn, index) => (
                  <div key={index} className="text-center fade-up">
                    <div className="bg-brand-orange/10 rounded-lg p-6">
                      <CheckCircle className="w-8 h-8 text-brand-orange mx-auto mb-4" />
                      <p className="text-muted-foreground">{addOn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Testimonials Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                What Our Customers Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <TestimonialCard 
                  quote="Great job on my roof and gutters, friendly crew. Customer‑first attitude; price fair. Recommend them!"
                  author="Miguel Angel M."
                  service="Roof & Gutter Cleaning"
                />
                <TestimonialCard 
                  quote="They did a great job cleaning my roof and gutters, also applying zinc to protect it throughout the summer months. I will definitely be using them again come September."
                  author="Daniel B."
                  service="Roof & Gutter Cleaning"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Schedule Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Recommended Schedule
              </h2>
              <Card className="bg-brand-orange/10 border-brand-orange/30">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Calendar className="w-8 h-8 text-brand-navy" />
                    <p className="text-2xl font-bold text-brand-navy">Twice a Year</p>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">
                    <strong>Fall:</strong> After leaves drop to prevent winter ice damage
                  </p>
                  <p className="text-lg text-muted-foreground">
                    <strong>Spring:</strong> Clear debris and prepare for heavy rain season
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Regular cleaning prevents overflow, protects your foundation, and extends gutter life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="fade-up">
                    <CardHeader>
                      <CardTitle className="text-brand-navy flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Clean Gutters?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get your free quote today. Professional gutter cleaning with clear results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Get Free Quote Today
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                  onClick={() => window.location.href = 'tel:206-752-6690'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 206-752-6690
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-white/70 text-sm">
                  Need roof cleaning too? <a href="/roof-cleaning" className="text-brand-orange hover:underline">Click here</a>
                </p>
                <p className="text-white/70 text-sm">
                  <a href="#faq" className="text-brand-orange hover:underline">Got questions? Jump to FAQs</a>
                </p>
                <p className="text-white/70 text-sm">
                  Have questions? <a href="/faq" className="text-brand-orange hover:underline">Visit our FAQ page</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default GutterCleaning;