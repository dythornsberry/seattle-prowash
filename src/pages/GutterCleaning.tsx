import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import ServiceFAQ from "@/components/ServiceFAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import gutterCleaningImage from "@/assets/gutter-cleaning-before-after.jpg";
import gutterBA1 from "@/assets/gutter-brightening-before-after.jpg";
import gutterBA2 from "@/assets/gutter-cleaning-before-after.jpg";

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
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="fade-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    Gutter Cleaning—Clog-Free and Flowing
                  </h1>
                  
                  {/* Mini Trust Line */}
                  <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
                    4.9★ from 180+ neighbors • Licensed & Insured • Same-Day Estimates
                  </p>

                  {/* 1-2-3 Process */}
                  <ul className="flex flex-wrap gap-2 md:gap-4 text-white/90 mb-8 text-sm md:text-base">
                    <li><strong className="text-brand-orange">1)</strong> Request a Quote</li>
                    <li><strong className="text-brand-orange">2)</strong> Schedule</li>
                    <li><strong className="text-brand-orange">3)</strong> Relax—before/after photos provided</li>
                  </ul>

                  <div className="mb-8">
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
                  </div>
                </div>
                <div className="fade-up">
                  <img
                    src={gutterCleaningImage}
                    alt="Professional gutter cleaning before and after - Clear downspouts and debris removal in Kenmore, Bothell, and Kirkland"
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
              src: gutterBA1,
              alt: "Gutter brightening before and after - Black streak removal",
              width: 1200,
              height: 800
            },
            {
              src: gutterBA2,
              alt: "Gutter cleaning before and after showing debris removal and clear flow",
              width: 1200,
              height: 800
            },
            {
              src: gutterCleaningImage,
              alt: "Professional gutter cleaning results with downspout flushing",
              width: 1200,
              height: 800
            }
          ]}
        />

        {/* FAQ Section */}
        <ServiceFAQ
          schemaContext="gutter"
          faqs={[
            {
              question: "Do you pressure wash shingles?",
              answer: "No—We use a soft-wash process that protects shingles while removing organic growth."
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

        {/* What You Get Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                  What You Get Every Visit
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Hand-scoop all leaves and debris</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Flush downspouts for perfect drainage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Remove all debris—no mess left behind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Clean visible drips from fascia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Completion photos provided</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 fade-up">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Licensed & insured service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Option */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="fade-up bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border-brand-orange/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                      Bundle & Save 15%
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      <strong className="text-brand-navy">Gutter Cleaning + Roof Blow-Off</strong>
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Clear leaves and debris from both your gutters and roof in one visit. Most efficient way to maintain your home's exterior.
                    </p>
                    <Button 
                      variant="prowash-primary" 
                      size="lg"
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
                  </div>
                </CardContent>
              </Card>
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
              <div className="flex justify-center gap-4 mb-6">
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