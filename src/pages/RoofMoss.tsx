import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";
import MossUrgency from "@/components/MossUrgency";
import CostOfWaiting from "@/components/CostOfWaiting";
import FloatingMossCTA from "@/components/FloatingMossCTA";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, AlertTriangle } from "lucide-react";
import mossRemovalImage from "@/assets/roof-moss-removal-detailed-before-after.jpg";

const RoofMoss = () => {
  useEffect(() => {
    document.title = "Roof Moss Removal and Treatment | Seattle ProWash";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Professional roof moss removal and treatment. Stop growth and protect your shingles. Safe soft-wash methods in Kenmore, Bothell, Kirkland."
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
    "Inspection and photos",
    "Gentle brushing of loose growth",
    "Soft wash treatment to kill remaining moss",
    "Rinse sensitive areas and light cleanup",
    "Optional follow-up check"
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
                  <Badge variant="outline" className="text-gold border-gold mb-4 text-lg px-4 py-2">
                    🛡️ 12-Month Moss-Free Guarantee
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    Roof Moss Removal & Treatment
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-white/90 font-semibold">
                    Stop moss growth at the roots and protect your investment.
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
                    src={mossRemovalImage}
                    alt="Roof moss removal and treatment before and after results"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why This Matters
              </h2>
              <Card className="bg-brand-orange/10 border-brand-orange/20">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground">
                    Homeowners search for moss removal and moss treatment. We do both—removal of loose growth today and treatment to kill what remains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plain Explanation Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Approach
              </h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground">
                    Moss removal means taking off loose, bulky growth. Moss treatment means killing the roots so the dead moss dries and sheds after weather cycles. We remove what can be brushed safely, then apply a soft wash that kills what remains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                Our Process
              </h2>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 fade-up">
                    <div className="bg-brand-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <p className="text-muted-foreground">{step}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* After Service Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                After Service
              </h2>
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-brand-navy flex items-center justify-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Color changes are normal as moss dies. Expect gradual shedding. Do not pressure wash or scrape shingles. Call with any questions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Moss Urgency Section */}
        <MossUrgency />

        {/* Cost of Waiting Section */}
        <CostOfWaiting />

        {/* Quote Form */}
        <div id="contact" className="bg-off-white">
          <QuoteForm />
        </div>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Stop Roof Moss?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get your free quote today. Professional moss removal and treatment that protects your roof.
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
                  Need roof cleaning too? <a href="/roof-cleaning" className="text-gold hover:underline">Click here</a>
                </p>
                <p className="text-white/70 text-sm">
                  Have questions? <a href="/faq" className="text-gold hover:underline">Visit our FAQ page</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingMossCTA />
    </div>
  );
};

export default RoofMoss;