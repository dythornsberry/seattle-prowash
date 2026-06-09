import { useEffect } from "react";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import { navigateToContact } from "@/lib/navigation";
import drivewayCleaning from "@/assets/driveway-pressure-washing.jpg";
import patioBA from "@/assets/patio-pressure-washing-before-after.jpg";
import sidingBA from "@/assets/house-siding-softwash-before-after.jpg";
import drivewayBA from "@/assets/driveway-moss-cleaning-before-after.jpg";

const PressureWashing = () => {
  useEffect(() => {
    const serviceSchema = generateServiceSchema({
      name: "Pressure Washing Services",
      description: "Professional pressure washing for driveways, patios, walkways, decks, and house siding in the greater Seattle area. Safe surface cleaning that restores curb appeal.",
      provider: COMPANY_INFO.name,
      areaServed: COMPANY_INFO.serviceAreas,
      serviceType: "Pressure Washing",
      url: `${COMPANY_INFO.url}/pressure-washing`,
    });
    const cleanupService = injectSchema(serviceSchema);

    const faqSchema = generateFAQSchema({
      faqs: [
        {
          question: "What surfaces can you pressure wash?",
          answer: "We clean concrete driveways, sidewalks, patios, pavers, decks, retaining walls, and house siding. We adjust pressure and technique based on the surface material to avoid damage."
        },
        {
          question: "Will pressure washing damage my concrete or siding?",
          answer: "No. We use the right pressure settings and surface cleaners for each material. Soft wash techniques protect delicate surfaces like vinyl siding and painted wood."
        },
        {
          question: "How often should I pressure wash my driveway?",
          answer: "In the Pacific Northwest, we recommend once a year. Moss and algae grow fast in our climate, so annual cleaning keeps surfaces safe and looking great."
        }
      ]
    });
    const cleanupFAQ = injectSchema(faqSchema);

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Pressure Washing", url: "https://www.seattleprowash.com/pressure-washing" }
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
        title="Pressure Washing Services"
        description="Professional pressure washing for driveways, patios, decks, and siding in Seattle, Kenmore, Bothell, and surrounding areas. Fast quotes, licensed and insured."
        url="https://www.seattleprowash.com/pressure-washing"
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
                  Pressure Washing That Makes It Look New
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
                  5.0★ from 200+ neighbors · Licensed & Insured · Fast Quotes
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Driveways, patios, walkways, decks, siding - if it's covered in moss, grime, or algae, we'll make it look like the day it was installed. We use the right pressure and cleaning solution for every surface so nothing gets damaged.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                    Get Fast Quote →
                  </Button>
                  <Button variant="prowash-outline" size="xl" onClick={() => window.location.href = "tel:2067526690"}>
                    Call 206-752-6690
                  </Button>
                </div>
                <p className="text-white/80 text-sm">
                  ✓ Safe for All Surfaces  ✓ Fast Quotes  ✓ 200+ Reviews
                </p>
              </div>
              <div className="fade-up">
                <img
                  src={drivewayCleaning}
                  alt="Professional driveway pressure washing in Kenmore, WA - moss and grime removal"
                  className="rounded-2xl shadow-2xl w-full"
                  width={1200}
                  height={800}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <BeforeAfterShowcase
          images={[
            { src: patioBA, alt: "Patio pressure washing before and after - moss and algae removed", width: 1200, height: 800 },
            { src: drivewayBA, alt: "Driveway moss cleaning before and after", width: 1200, height: 800 },
            { src: sidingBA, alt: "House siding soft wash before and after", width: 1200, height: 800 },
          ]}
        />

        {/* What We Clean */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center fade-up">
                What We Pressure Wash
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Concrete driveways and walkways",
                  "Patios and outdoor living areas",
                  "Pavers and retaining walls",
                  "Wood and composite decks",
                  "House siding (soft wash)",
                  "Stairs and entryways",
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
          schemaContext="pressure-washing"
          faqs={[
            {
              question: "What surfaces can you pressure wash?",
              answer: "We clean concrete driveways, sidewalks, patios, pavers, decks, retaining walls, and house siding. We adjust pressure and technique based on the surface material to avoid damage."
            },
            {
              question: "Will pressure washing damage my concrete or siding?",
              answer: "No. We use the right pressure settings and surface cleaners for each material. Soft wash techniques protect delicate surfaces like vinyl siding and painted wood."
            },
            {
              question: "How often should I pressure wash my driveway?",
              answer: "In the Pacific Northwest, we recommend once a year. Moss and algae grow fast in our climate, so annual cleaning keeps surfaces safe and looking great."
            }
          ]}
        />

        {/* Service Areas */}
        <ServiceAreasSection
          title="Pressure Washing Service Areas"
          description="Professional pressure washing throughout the Greater Seattle area"
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
                Ready to See the Difference?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a fast pressure washing quote. Dylan will call or text to confirm the surfaces and walk you through pricing.
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

export default PressureWashing;
