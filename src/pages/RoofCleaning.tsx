import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import ServiceFAQ from "@/components/ServiceFAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone } from "lucide-react";
import roofCleaningImage from "@/assets/roof-moss-removal-detailed-before-after.jpg";
import roofBA1 from "@/assets/asphalt-roof-moss-cleaning-before-after.jpg";
import roofBA2 from "@/assets/metal-roof-cleaning-before-after.jpg";
import roofBA3 from "@/assets/roof-softwash-before-after.jpg";

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


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="fade-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    Roof Cleaning: Soft on Shingles, Tough on Grime
                  </h1>
                  
                  {/* Mini Trust Line */}
                  <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
                    4.9★ from 180+ neighbors • Licensed & Insured • Same-Day Estimates
                  </p>

                  {/* 1-2-3 Process */}
                  <ul className="flex flex-wrap gap-2 md:gap-4 text-white/90 mb-8 text-sm md:text-base">
                    <li><strong className="text-brand-orange">1)</strong> Request a Quote</li>
                    <li><strong className="text-brand-orange">2)</strong> Schedule</li>
                    <li><strong className="text-brand-orange">3)</strong> Relax while we work, before/after photos provided</li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button 
                      variant="cta-orange" 
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
                      Get My Free Quote →
                    </Button>
                    <Button 
                      variant="outline"
                      size="xl"
                      className="border-2 border-white text-white hover:bg-white hover:text-brand-navy"
                      onClick={() => window.location.href = 'tel:2067526690'}
                    >
                      Call 206-752-6690
                    </Button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <p className="text-white/80 text-sm">
                    ✓ 12-Month Guarantee  ✓ Same-Day Quotes  ✓ 180+ Reviews
                  </p>
                </div>
                <div className="fade-up">
                  <img
                    src={roofCleaningImage}
                    alt="Asphalt roof before and after soft-wash cleaning - Professional moss removal in Kenmore and Kirkland"
                    className="rounded-2xl shadow-2xl w-full"
                    width={1200}
                    height={800}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Showcase */}
        <BeforeAfterShowcase
          images={[
            {
              src: roofBA1,
              alt: "Asphalt roof before and after soft-wash cleaning",
              width: 1200,
              height: 800
            },
            {
              src: roofBA2,
              alt: "Metal roof moss removal before and after treatment",
              width: 1200,
              height: 800
            },
            {
              src: roofBA3,
              alt: "Roof soft-wash cleaning results showing moss and algae removal",
              width: 1200,
              height: 800
            }
          ]}
        />

        {/* FAQ Section */}
        <ServiceFAQ
          schemaContext="roof"
          faqs={[
            {
              question: "Do you pressure wash shingles?",
              answer: "No. We use a soft-wash process that protects shingles while removing organic growth."
            },
            {
              question: "How soon can you schedule?",
              answer: "Most jobs are scheduled within 24–72 hours depending on demand."
            },
            {
              question: "Do you bag debris & flush downspouts?",
              answer: "Yes. We bag debris and can flush/test downspouts on request."
            }
          ]}
        />

        {/* Our Services - Three Clear Options */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Three clear options to keep your roof and gutters in top shape
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="fade-up">
                  <CardHeader>
                    <CardTitle className="text-brand-navy">Gutter Cleaning Only</CardTitle>
                    <CardDescription>Perfect for clear roofs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Remove leaves and debris from gutters and downspouts. Ideal for homes where the roof itself is already clear.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }}
                    >
                      Get a Fast Quote
                    </Button>
                  </CardContent>
                </Card>
                <Card className="fade-up border-brand-orange border-2 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-orange">Most Popular • Save 15%</Badge>
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="text-brand-navy">Roof & Gutter Cleaning</CardTitle>
                    <CardDescription>Complete exterior protection</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Combines gutter cleaning with roof blow-off and soft debris removal (leaves, needles). Our most common package keeps your entire system in top shape.
                    </p>
                    <Button 
                      variant="prowash-primary" 
                      className="w-full"
                      onClick={() => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }}
                    >
                      Get a Fast Quote
                    </Button>
                  </CardContent>
                </Card>
                <Card className="fade-up">
                  <CardHeader>
                    <CardTitle className="text-brand-navy">Roof & Gutter + Moss Treatment</CardTitle>
                    <CardDescription>Complete restoration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Hand-removal of heavy moss, soft-wash treatment, and preventative application. Includes gutter cleaning. Custom pricing based on moss coverage.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }}
                    >
                      Get a Fast Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>


        {/* How It Works Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="fade-up">
                  <div className="bg-brand-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-brand-navy mb-2">Inspect</h3>
                  <p className="text-muted-foreground">We assess your roof and gutters to recommend the right service level.</p>
                </div>
                <div className="fade-up">
                  <div className="bg-brand-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-brand-navy mb-2">Treat</h3>
                  <p className="text-muted-foreground">Gentle soft-wash removes moss and debris without damaging shingles.</p>
                </div>
                <div className="fade-up">
                  <div className="bg-brand-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-brand-navy mb-2">Protect</h3>
                  <p className="text-muted-foreground">Preventative treatment keeps moss away for 12 months, guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                Why Choose Seattle ProWash
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">No High Pressure on Roofs</h3>
                    <p className="text-sm text-muted-foreground">Our soft-wash method is safe for all shingle types</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Trained & Insured Technicians</h3>
                    <p className="text-sm text-muted-foreground">Licensed professionals with proper safety equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Photos on Every Job</h3>
                    <p className="text-sm text-muted-foreground">Clear before-and-after documentation of all work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Honest Advice & Maintenance</h3>
                    <p className="text-sm text-muted-foreground">We recommend only what your roof truly needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">12-Month Moss-Free Guarantee</h3>
                    <p className="text-sm text-muted-foreground">Your roof stays protected for a full year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Same-Week Availability</h3>
                    <p className="text-sm text-muted-foreground">Fast scheduling when you need service quickly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                What Our Customers Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <TestimonialCard 
                  quote="These guys did an amazing job cleaning up my roof. They did a great job not damaging anything and I would definitely hire them again down the line."
                  author="Daniel S."
                  service="Roof Cleaning"
                />
                <TestimonialCard 
                  quote="Really happy with the work the Seattle Pro Wash team did to clean the transparent roof of my backyard pergola. Quick, friendly and efficient – highly recommended!"
                  author="Aileen I."
                  service="Pergola Roof Cleaning"
                />
              </div>
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
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
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
                  Get a Fast Quote
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
              <p className="text-white/70 text-sm mt-4">
                Have questions? <a href="/faq" className="text-brand-orange hover:underline">Visit our FAQ page</a>
              </p>
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