import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const { hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);
  useEffect(() => {
    const serviceSchema = generateServiceSchema({
      name: "Pressure Washing Services",
      description: "Concrete pressure washing, low-pressure house soft washing, and wood or composite deck cleaning in the greater Seattle area.",
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
          answer: "Too much pressure can damage surfaces. We assess the material and condition first, using low-pressure soft washing for siding and a suitable method for concrete and decks."
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
        title="Pressure Washing & House Soft Washing"
        description="Pressure washing for concrete driveways, patios, and decks, plus low-pressure house soft washing in Seattle, Kenmore, and Bothell. Fast quotes. Licensed and insured."
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
                  House Soft Washing &amp; Pressure Washing
                </h1>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Concrete driveways, patios, and decks cleaned with the right method for each surface. Low-pressure soft washing for house siding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                    Get Fast Quote →
                  </Button>
                  <Button variant="prowash-outline" size="xl" onClick={() => window.location.href = "tel:2067526690"}>
                    Call or Text 206-752-6690
                  </Button>
                </div>
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
                What We Clean
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { id: "house-soft-washing", title: "House Soft Washing", description: "Low-pressure cleaning for siding, trim, and soffits." },
                  { id: "concrete-cleaning", title: "Concrete Pressure Washing", description: "Driveways, patios, walkways, and steps." },
                  { id: "deck-cleaning", title: "Deck Cleaning", description: "Wood and composite decks. Cleaning method matched to the material and condition." },
                ].map((item) => (
                  <div id={item.id} key={item.id} className="flex items-start gap-3 scroll-mt-32">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                    <div><h3 className="text-xl font-semibold text-brand-navy mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
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
              answer: "Too much pressure can damage surfaces. We assess the material and condition first, using low-pressure soft washing for siding and a suitable method for concrete and decks."
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
            { name: "Lake Forest Park", path: "/lake-forest-park-roof-gutter-cleaning" },
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
                Get a Quote
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Dylan will call or text to confirm the surfaces and price.
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
