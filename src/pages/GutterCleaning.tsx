import { useEffect } from "react";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import AsSeenOn from "@/components/AsSeenOn";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import RelatedResources from "@/components/RelatedResources";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import ServiceFAQ from "@/components/ServiceFAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import gutterCleaningImage from "@/assets/gutter-cleaning-before-after.jpg";
import gutterBA1 from "@/assets/gutter-brightening-before-after.jpg";
import gutterBA2 from "@/assets/gutter-cleaning-before-after.jpg";
import { navigateToContact } from "@/lib/navigation";

const GutterCleaning = () => {
  useEffect(() => {

    // Inject Service Schema
    const serviceSchema = generateServiceSchema({
      name: "Gutter Cleaning and Maintenance",
      description: "Professional gutter cleaning service including hand-scooping debris, downspout flushing, and roof debris removal. Complete gutter system maintenance to prevent water damage.",
      provider: COMPANY_INFO.name,
      areaServed: COMPANY_INFO.serviceAreas,
      serviceType: "Gutter Cleaning",
      url: `${COMPANY_INFO.url}/gutter-cleaning`,
      offers: {
        priceRange: "$250-$600",
        priceCurrency: "USD"
      }
    });
    const cleanupService = injectSchema(serviceSchema);

    // Inject FAQ Schema
    const faqSchema = generateFAQSchema({
      faqs: [
        {
          question: "How often should I clean my gutters?",
          answer: "In the Pacific Northwest, we recommend cleaning gutters twice per year - once in late fall after leaves drop, and once in spring. Homes with lots of trees may need more frequent cleaning."
        },
        {
          question: "What's included in your gutter cleaning service?",
          answer: "Our service includes hand-scooping all debris from gutters, flushing downspouts, blowing off roof debris, checking for damage, and cleaning up all debris from your property. We also provide before/after photos."
        },
        {
          question: "Do you clean inside the downspouts?",
          answer: "Yes! We flush all downspouts to ensure proper drainage. If we encounter a clog, we'll work to clear it or let you know if there's a structural issue."
        }
      ]
    });
    const cleanupFAQ = injectSchema(faqSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Gutter Cleaning", url: "https://www.seattleprowash.com/gutter-cleaning" }
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
        title="Professional Gutter Cleaning Services"
        description="Expert gutter cleaning and maintenance in Seattle. Prevent water damage, protect your foundation, and extend gutter life. Licensed, insured, and guaranteed. Free quotes available."
        url="https://www.seattleprowash.com/gutter-cleaning"
        image={gutterCleaningImage}
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
                    Gutter Cleaning: Clog-Free and Flowing
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
              question: "How often should I get my gutters cleaned?",
              answer: "We recommend twice a year - spring and fall. If you have overhanging trees or heavy leaf buildup, you may need quarterly cleanings to prevent clogs and overflow."
            },
            {
              question: "Will you clean out the downspouts too?",
              answer: "Yes! We hand-scoop all debris from gutters and flush downspouts to ensure complete water flow from roof to ground. If a downspout is clogged underground, we'll let you know."
            },
            {
              question: "Do you remove the debris from my property?",
              answer: "We bag all gutter debris and remove it from your property. There's no mess to clean up after we're done."
            }
          ]}
        />

        {/* As Seen On Section */}
        <AsSeenOn />

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
                    <p className="text-muted-foreground">Remove all debris, no mess left behind</p>
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

        {/* Service Areas */}
        <ServiceAreasSection
          title="Gutter Cleaning Service Areas"
          description="Professional gutter cleaning services throughout the Greater Seattle area"
          areas={[
            { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
            { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
            { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
            { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
            { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
            { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
            { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
            { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" },
            { name: "Redmond", path: "/redmond-roof-gutter-cleaning" },
            { name: "Sammamish", path: "/sammamish-roof-gutter-cleaning" },
            { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning" },
            { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" },
            { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning" }
          ]}
        />

        {/* Related Resources */}
        <RelatedResources
          resources={[
            {
              title: "Gutter Cleaning Safety Tips",
              description: "Essential safety guidelines for maintaining your gutters.",
              path: "/resources/gutter-cleaning-safety-tips"
            },
            {
              title: "Roof & Gutter Maintenance",
              description: "Why regular cleaning is crucial for your home.",
              path: "/resources/roof-gutter-cleaning-importance"
            },
            {
              title: "Prevent Moss & Algae Growth",
              description: "Keep your home's exterior moss-free year-round.",
              path: "/resources/prevent-moss-algae-growth"
            }
          ]}
        />

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
                  onClick={navigateToContact}
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
