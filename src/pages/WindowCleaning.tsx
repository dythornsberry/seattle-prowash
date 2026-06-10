import { useEffect } from "react";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import { navigateToContact } from "@/lib/navigation";
import windowCleaningPhoto from "@/assets/window-cleaning-action.jpg";

const WindowCleaning = () => {
  useEffect(() => {
    const serviceSchema = generateServiceSchema({
      name: "Exterior Window Cleaning Services",
      description: "Professional exterior window cleaning in the greater Seattle area. Streak-free results for homes and small businesses.",
      provider: COMPANY_INFO.name,
      areaServed: COMPANY_INFO.serviceAreas,
      serviceType: "Window Cleaning",
      url: `${COMPANY_INFO.url}/window-cleaning`,
    });
    const cleanupService = injectSchema(serviceSchema);

    const faqSchema = generateFAQSchema({
      faqs: [
        {
          question: "Do you clean interior windows too?",
          answer: "We focus on exterior window cleaning. For most homes, the outside is where the real buildup happens from rain, pollen, and hard water. We get those sparkling clean."
        },
        {
          question: "How do you reach upper-story windows?",
          answer: "We use water-fed poles and professional extension equipment to safely clean windows up to three stories without ladders touching your siding or roof."
        },
        {
          question: "How often should I get my windows cleaned?",
          answer: "For the Seattle area, we recommend twice a year. Spring and fall cleanings keep your windows looking clear year-round and prevent hard water stains from building up."
        }
      ]
    });
    const cleanupFAQ = injectSchema(faqSchema);

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Window Cleaning", url: "https://www.seattleprowash.com/window-cleaning" }
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
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Exterior Window Cleaning"
        description="Professional exterior window cleaning in Seattle, Kenmore & Bothell. Streak-free results with safe techniques. Fast quotes. Licensed & insured."
        url="https://www.seattleprowash.com/window-cleaning"
      />
      <Header />
      <EnhancedTrustBar />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  Crystal Clear Windows, Every Time
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
                  5.0★ from 200+ neighbors · Licensed & Insured · Fast Quotes
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Seattle rain, pollen, and hard water take a toll on your windows. We handle the exterior cleaning so you can enjoy the view again. Safe, streak-free results on every pane.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                    Get Fast Quote →
                  </Button>
                  <Button variant="prowash-outline" size="xl" onClick={() => window.location.href = "tel:2067526690"}>
                    Call or Text 206-752-6690
                  </Button>
                </div>
                <p className="text-white/80 text-sm">
                  ✓ Streak-Free Guarantee  ✓ Fast Quotes  ✓ 200+ Reviews
                </p>
              </div>
              <div className="fade-up">
                <img
                  src={windowCleaningPhoto}
                  alt="Seattle ProWash technician cleaning exterior windows with water-fed pole"
                  className="rounded-2xl shadow-2xl w-full"
                  width={1200}
                  height={800}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "All exterior windows cleaned",
                  "Screen wipe-down",
                  "Window frame and sill cleaning",
                  "Hard water spot treatment",
                  "Safe water-fed pole technique",
                  "Before and after photos",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 fade-up">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ
          schemaContext="window-cleaning"
          faqs={[
            {
              question: "Do you clean interior windows too?",
              answer: "We focus on exterior window cleaning. For most homes, the outside is where the real buildup happens from rain, pollen, and hard water. We get those sparkling clean."
            },
            {
              question: "How do you reach upper-story windows?",
              answer: "We use water-fed poles and professional extension equipment to safely clean windows up to three stories without ladders touching your siding or roof."
            },
            {
              question: "How often should I get my windows cleaned?",
              answer: "For the Seattle area, we recommend twice a year. Spring and fall cleanings keep your windows looking clear year-round and prevent hard water stains from building up."
            }
          ]}
        />

        {/* Service Areas */}
        <ServiceAreasSection
          title="Window Cleaning Service Areas"
          description="Professional exterior window cleaning throughout the Greater Seattle area"
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
          ]}
        />

        {/* Quote Form */}
        <div id="contact" className="bg-off-white">
          <TwoStepQuoteForm />
        </div>

        {/* CTA */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Spotless Windows?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a fast window cleaning quote. Dylan will call or text to confirm the windows, access, and scope.
              </p>
              <Button variant="prowash-secondary" size="xl" onClick={navigateToContact}>
                Get Fast Quote
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

export default WindowCleaning;
