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
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import roofCleaningImage from "@/assets/roof-moss-removal-detailed-before-after.jpg";

const RoofCleaning = () => {
  useEffect(() => {
    document.title = "Roof Cleaning in Kenmore, Bothell, and Kirkland | Seattle ProWash";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Safe roof moss removal and treatment in Kenmore, Bothell, and Kirkland. No pressure on shingles. Licensed & insured."
      );
    }

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

  const processSteps = [
    "Send a few photos or request a quick site visit",
    "We give a fast, firm quote",
    "We clean the roof and provide photos. Easy pay when finished"
  ];

  const whatWeDo = [
    "Hand-remove moss and debris to restore your home's curb appeal",
    "Soft-wash treatment protects shingles while eliminating moss at the roots",
    "Preventative application slows future moss and algae growth",
    "Clean up debris around your property—leave no mess behind",
    "Optional gutter flush ensures water flows freely away from your foundation"
  ];

  const whyChooseUs = [
    "No high pressure on roofs",
    "Trained, insured technicians with proper safety gear",
    "Photos on every job",
    "Honest advice and maintenance options"
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
                    Roof Cleaning Specialists
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    Roof Cleaning in Kenmore, Bothell, and Kirkland
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-white/90 font-semibold">
                    Safe moss removal and treatment. No pressure on shingles.
                  </p>
                  <p className="text-lg mb-8 text-white/80">
                    We clean roofs the right way. Seattle ProWash uses a soft wash process that kills moss at the roots and protects your shingles. We bag light debris, flush gutters if needed, and show clear before and after photos.
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
                    src={roofCleaningImage}
                    alt="Roof cleaning before and after showing moss removal results"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                  What We Do
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="fade-up">
                  <ul className="space-y-4">
                    {whatWeDo.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fade-up">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-brand-navy">Pricing</CardTitle>
                      <CardDescription>
                        Final price after quick photo or drive-by evaluation.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-brand-orange mb-2">
                        Starting at $499
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For typical single-story homes
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 fade-up">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="fade-up">
                    <div className="bg-brand-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                Why Choose Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 fade-up">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{reason}</span>
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
                  quote="My roof looks brand new! They were careful, thorough, and the moss is completely gone. Highly recommend!"
                  author="Sarah M."
                  service="Roof Cleaning - Kenmore"
                />
                <TestimonialCard 
                  quote="Professional service from start to finish. They explained everything and my roof has stayed clean for months now."
                  author="Mike T."
                  service="Roof Moss Treatment - Bothell"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Care After Cleaning Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Care After Cleaning
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Killed moss dries out and weathers off over time. Do not pressure wash or scrape shingles. Ask about maintenance treatment for shaded lots.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Expert Roof Cleaning?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get your free quote today. Safe, effective moss removal with professional results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
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
              <Button 
                variant="link"
                className="text-brand-yellow hover:text-brand-yellow/80"
                onClick={() => window.location.href = '/roof-moss'}
              >
                Learn about Moss Treatment <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default RoofCleaning;