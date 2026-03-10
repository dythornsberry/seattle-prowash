import { useEffect } from "react";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import AsSeenOn from "@/components/AsSeenOn";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import RelatedResources from "@/components/RelatedResources";
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
import { navigateToContact } from "@/lib/navigation";

const RoofCleaning = () => {
  useEffect(() => {

    // Inject Service Schema
    const serviceSchema = generateServiceSchema({
      name: "Roof Cleaning and Moss Removal",
      description: "Professional roof cleaning service to remove moss, algae, and lichen. Includes gutter cleaning and 12-month moss-free guarantee.",
      provider: COMPANY_INFO.name,
      areaServed: COMPANY_INFO.serviceAreas,
      serviceType: "Roof Cleaning",
      url: `${COMPANY_INFO.url}/roof-cleaning`,
      offers: {
        priceRange: "$499-$1200",
        priceCurrency: "USD"
      }
    });
    const cleanupService = injectSchema(serviceSchema);

    // Inject FAQ Schema
    const faqSchema = generateFAQSchema({
      faqs: [
        {
          question: "Will you damage my shingles with high pressure?",
          answer: "We never use high pressure on asphalt shingles. Our soft-wash process uses low pressure and specialized solutions to safely remove moss, algae, and lichen without damaging your roof or voiding warranties."
        },
        {
          question: "How long does the moss treatment last?",
          answer: "Our moss prevention treatment typically lasts 12 months. The treatment kills existing moss at the root and prevents new growth for up to a year, depending on weather and tree coverage."
        },
        {
          question: "Do I need to be home during the roof cleaning?",
          answer: "You don't need to be home. We work on the exterior only and will send you before/after photos when the job is complete. Just make sure we have clear access to your roof."
        }
      ]
    });
    const cleanupFAQ = injectSchema(faqSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Roof Cleaning", url: "https://www.seattleprowash.com/roof-cleaning" }
    ]);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    return () => {
      cleanupService();
      cleanupFAQ();
      cleanupBreadcrumb();
    };
  }, []);

  useEffect(() => {
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
      <SEOHead 
        title="Professional Roof Cleaning Services"
        description="Expert roof cleaning and moss removal in Seattle. Eco-friendly soft washing extends roof life and prevents damage. Licensed, insured, and guaranteed. Free quotes available."
        url="https://www.seattleprowash.com/roof-cleaning"
        image="/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.png"
      />
      <Header />
      <EnhancedTrustBar />
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
                    5.0★ from 200+ neighbors • Licensed & Insured • Same-Day Estimates
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
                      onClick={navigateToContact}
                    >
                      Get My Free Quote →
                    </Button>
                    <Button 
                      variant="prowash-outline"
                      size="xl"
                      onClick={() => window.location.href = 'tel:2067526690'}
                    >
                      Call 206-752-6690
                    </Button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <p className="text-white/80 text-sm">
                    ✓ 12-Month Guarantee  ✓ Same-Day Quotes  ✓ 200+ Reviews
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

        {/* As Seen On Section */}
        <AsSeenOn />

        {/* FAQ Section */}
        <ServiceFAQ
          schemaContext="roof"
          faqs={[
            {
              question: "Will you damage my shingles with high pressure?",
              answer: "We never use high pressure on asphalt shingles. Our soft-wash process uses low pressure and specialized solutions to safely remove moss, algae, and lichen without damaging your roof or voiding warranties."
            },
            {
              question: "How long does the moss treatment last?",
              answer: "Our moss prevention treatment typically lasts 12 months. The treatment kills existing moss at the root and prevents new growth for up to a year, depending on weather and tree coverage."
            },
            {
              question: "Do I need to be home during the roof cleaning?",
              answer: "You don't need to be home. We work on the exterior only and will send you before/after photos when the job is complete. Just make sure we have clear access to your roof."
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
                  Two simple options to keep your roof and gutters in top shape
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card className="fade-up border-brand-orange border-2 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-orange">Most Popular</Badge>
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="text-brand-navy">Roof Cleaning</CardTitle>
                    <CardDescription>Complete moss treatment & gutter cleaning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-3xl font-bold text-brand-navy">$499 – $1,200 <span className="text-sm font-normal text-muted-foreground">for most homes</span></p>
                    <p className="text-muted-foreground">
                      Our premium all-in-one service: moss treatment, moss removal, and gutter cleaning — all included. Backed by our 12-month moss-free guarantee.
                    </p>
                    <Button
                      variant="prowash-primary"
                      className="w-full"
                      onClick={navigateToContact}
                    >
                      Get a Fast Quote
                    </Button>
                  </CardContent>
                </Card>
                <Card className="fade-up">
                  <CardHeader>
                    <CardTitle className="text-brand-navy">Gutter Cleaning</CardTitle>
                    <CardDescription>Full clean with complimentary roof blow-off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-3xl font-bold text-brand-navy">Starting at $250</p>
                    <p className="text-muted-foreground">
                      Complete gutter cleaning with hand-scooping, downspout flushing, and a complimentary roof blow-off to clear debris. No moss? This is all you need.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={navigateToContact}
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
                  <p className="text-muted-foreground">Our roof cleaning treatment removes moss and debris without damaging shingles.</p>
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
                  quote="Really happy with the work the Seattle Pro Wash team did to clean the transparent roof of my backyard pergola. Quick, friendly and efficient. Highly recommended!"
                  author="Aileen I."
                  service="Pergola Roof Cleaning"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <ServiceAreasSection
          title="Roof Cleaning Service Areas"
          description="Professional roof cleaning and moss treatment across the Greater Seattle area"
          areas={[
            { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
            { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
            { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
            { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
            { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
            { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
            { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
            { name: "Bellevue", path: "/service-areas" },
            { name: "Redmond", path: "/service-areas" },
            { name: "Sammamish", path: "/service-areas" },
            { name: "Edmonds", path: "/service-areas" },
            { name: "Mill Creek", path: "/service-areas" }
          ]}
        />

        {/* Related Resources */}
        <RelatedResources />

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
                  onClick={navigateToContact}
                >
                  Get a Fast Quote
                </Button>
                <Button 
                  variant="prowash-outline"
                  size="xl"
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