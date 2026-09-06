import { useEffect } from "react";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import RelatedResources from "@/components/RelatedResources";
import ServiceFAQ from "@/components/ServiceFAQ";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import gutterCleaningImage from "@/assets/gutter-cleaning-before-after.jpg";
import gutterBrightening2026 from "@/assets/gutter-brightening-before-after-2026.jpg";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
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
        title="Gutter Cleaning in Seattle & Kenmore, WA"
        description="Expert gutter cleaning in Seattle, Kenmore, Bothell & Kirkland — starting at $250 with free roof blow-off. Prevent water damage. Licensed & insured. Fast quotes."
        url="https://www.seattleprowash.com/gutter-cleaning"
        image={gutterCleaningImage}
      />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="fade-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    Gutter Cleaning in Seattle
                  </h1>
                  
                  <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
                    Gutters cleared, downspouts flushed, and roof debris blown off.
                  </p>
                  <p className="text-white font-semibold mb-6">From $250</p>

                  <div className="grid grid-cols-2 sm:flex gap-3">
                    <Button 
                      variant="cta-orange"
                      size="xl"
                      className="min-w-0 px-3 sm:px-6 text-sm sm:text-base"
                      onClick={navigateToContact}
                    >
                      Get a Fast Quote
                    </Button>
                    <Button asChild
                      variant="prowash-outline"
                      size="xl"
                      className="min-w-0 px-3 sm:px-6 text-sm sm:text-base"
                    >
                      <a href="sms:+12067526690"><MessageCircle aria-hidden="true" /> Text Us</a>
                    </Button>
                  </div>
                  
                </div>
                <div className="fade-up">
                  <img
                    src={gutterCleaningImage}
                    alt="Professional gutter cleaning before and after - Clear downspouts and debris removal in Kenmore, Bothell, and Kirkland"
                    className="mx-auto rounded-lg w-full max-h-72 lg:max-h-[420px] object-contain"
                    width={1200}
                    height={800}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <EnhancedTrustBar />

        {/* Gutter Cleaning Explanation Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    What's Included
                  </h2>
                </div>
                <div className="fade-up">
                  <ul className="space-y-3">
                    {[
                      "Hand-scoop all leaves and debris",
                      "Flush downspouts for clear drainage",
                      "Blow off roof debris",
                      "Debris bagged and removed from property",
                      "Before/after photos provided",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button variant="cta-orange" size="lg" onClick={navigateToContact}>
                      Get Gutter Cleaning Quote →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gutter Brightening Section */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                    Gutter Brightening
                  </h2>
                  <p className="text-brand-orange font-semibold mb-4">Optional add-on service</p>
                  <p className="text-muted-foreground text-lg mb-4">
                    Want the outside cleaned too? We hand-scrub the exterior to remove dark streaks and buildup. Available with your gutter cleaning.
                  </p>
                  <div className="mt-8">
                    <Button variant="cta-orange" size="lg" onClick={navigateToContact}>
                      Add Gutter Brightening
                    </Button>
                  </div>
                </div>
                <div className="fade-up">
                  <img
                    src={gutterBrightening2026}
                    alt="Gutter brightening before and after, black streak removal from exterior gutters in Seattle"
                    className="rounded-2xl shadow-2xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Quote Form */}
        <div className="bg-off-white">
          <TwoStepQuoteForm />
        </div>

        {/* Service Areas */}
        <ServiceAreasSection
          title="Gutter Cleaning Service Areas"
          description="Professional gutter cleaning services throughout the Greater Seattle area"
          areas={[
            { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
            { name: "Lake Forest Park", path: "/lake-forest-park-roof-gutter-cleaning" },
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

      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default GutterCleaning;
