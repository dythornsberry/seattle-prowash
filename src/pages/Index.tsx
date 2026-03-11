import { Suspense, lazy, useEffect, useState } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import { scrollToSection } from "@/lib/navigation";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import DeferredSection from "@/components/DeferredSection";

const GoogleReviewsCarousel = lazy(() => import("@/components/GoogleReviewsCarousel"));
const TwoStepQuoteForm = lazy(() => import("@/components/TwoStepQuoteForm"));
const CostOfWaiting = lazy(() => import("@/components/CostOfWaiting"));
const BeforeAfterSlider = lazy(() => import("@/components/BeforeAfterSlider"));
const HomeFAQ = lazy(() => import("@/components/HomeFAQ"));
const ServiceAreasSection = lazy(() => import("@/components/ServiceAreasSection"));
const ServiceAreaMap = lazy(() => import("@/components/ServiceAreaMap"));
const Footer = lazy(() => import("@/components/Footer"));
const UnifiedContactBar = lazy(() => import("@/components/UnifiedContactBar"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));

interface SectionPlaceholderProps {
  backgroundClassName?: string;
  pulseClassName?: string;
  heightClassName?: string;
}

const SectionPlaceholder = ({
  backgroundClassName = "bg-background",
  pulseClassName = "bg-brand-navy/10",
  heightClassName = "py-16 min-h-[220px]",
}: SectionPlaceholderProps) => (
  <div className={backgroundClassName}>
    <div className={`container mx-auto flex items-center justify-center px-4 ${heightClassName}`}>
      <div className={`h-5 w-40 animate-pulse rounded-full ${pulseClassName}`} />
    </div>
  </div>
);

const Index = () => {
  const [enhancementsReady, setEnhancementsReady] = useState(false);

  // Scroll tracking and Schema injection
  useEffect(() => {
    const cleanup = initScrollTracking();
    
    // Inject LocalBusiness Schema
    const businessSchema = generateLocalBusinessSchema({
      name: COMPANY_INFO.name,
      description: COMPANY_INFO.description,
      url: COMPANY_INFO.url,
      telephone: COMPANY_INFO.telephone,
      address: COMPANY_INFO.address,
      geo: COMPANY_INFO.geo,
      areaServed: COMPANY_INFO.serviceAreas,
      priceRange: "$$",
      rating: COMPANY_INFO.rating
    });
    const cleanupBusinessSchema = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" }
    ]);
    const cleanupBreadcrumbSchema = injectSchema(breadcrumbSchema);
    
    return () => {
      cleanup?.();
      cleanupBusinessSchema();
      cleanupBreadcrumbSchema();
    };
  }, []);

  // Handle initial hash navigation using shared scroll utility
  useEffect(() => {
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo(0, 0);
        return;
      }
      const targetId = hash.substring(1);
      scrollToSection(targetId, {
        preferForm: targetId === 'contact',
        behavior: 'auto',
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Optimized Intersection Observer for fade-up animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Batch DOM updates using RAF for better performance
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      });
    };

    // Increased threshold to reduce callback frequency
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.25,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const enableEnhancements = () => setEnhancementsReady(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableEnhancements, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enableEnhancements, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Seattle Roof & Gutter Cleaning Experts"
        description="Based in Kenmore, serving Bothell, Lynnwood, Kirkland, Shoreline & greater Seattle. Expert roof cleaning and gutter cleaning with 12-month moss-free guarantee. Licensed, insured, 100% satisfaction guaranteed."
        url="https://www.seattleprowash.com"
      />
      <div id="content-with-offset">
        <Header />
        
        <main>
          <Hero />
          <EnhancedTrustBar />
          <ServicesPreview />
          <DeferredSection
            placeholder={<SectionPlaceholder heightClassName="py-12 min-h-[140px]" />}
          >
            <Suspense fallback={<SectionPlaceholder heightClassName="py-12 min-h-[140px]" />}>
              <GoogleReviewsCarousel />
            </Suspense>
          </DeferredSection>
          <div className="bg-off-white">
            <DeferredSection
              placeholder={<SectionPlaceholder backgroundClassName="bg-off-white" heightClassName="py-16 min-h-[360px]" />}
            >
              <Suspense fallback={<SectionPlaceholder backgroundClassName="bg-off-white" heightClassName="py-16 min-h-[360px]" />}>
                <TwoStepQuoteForm />
              </Suspense>
            </DeferredSection>
          </div>
          <DeferredSection
            placeholder={<SectionPlaceholder backgroundClassName="bg-light-gray" heightClassName="py-16 min-h-[320px]" />}
          >
            <Suspense fallback={<SectionPlaceholder backgroundClassName="bg-light-gray" heightClassName="py-16 min-h-[320px]" />}>
              <CostOfWaiting />
            </Suspense>
          </DeferredSection>
          <div className="bg-navy">
            <DeferredSection
              placeholder={<SectionPlaceholder backgroundClassName="bg-navy" pulseClassName="bg-white/15" heightClassName="py-20 min-h-[460px]" />}
            >
              <Suspense fallback={<SectionPlaceholder backgroundClassName="bg-navy" pulseClassName="bg-white/15" heightClassName="py-20 min-h-[460px]" />}>
                <BeforeAfterSlider />
              </Suspense>
            </DeferredSection>
          </div>
          <DeferredSection
            placeholder={<SectionPlaceholder heightClassName="py-16 min-h-[260px]" />}
          >
            <Suspense fallback={<SectionPlaceholder heightClassName="py-16 min-h-[260px]" />}>
              <HomeFAQ />
            </Suspense>
          </DeferredSection>
          <DeferredSection
            placeholder={<SectionPlaceholder heightClassName="py-16 min-h-[320px]" />}
          >
            <Suspense fallback={<SectionPlaceholder heightClassName="py-16 min-h-[320px]" />}>
              <ServiceAreasSection 
                title="Based in Kenmore, Serving Greater Seattle"
                description="Professional roof cleaning and gutter cleaning services from our home base in Kenmore to communities throughout the north end and greater Seattle"
                areas={[
                  { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning", description: "Our home base – Lake Washington roof & gutter experts" },
                  { name: "Bothell", path: "/bothell-roof-gutter-cleaning", description: "Northshore area roof and gutter specialists" },
                  { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning", description: "North Seattle metro roof and gutter cleaning" },
                  { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning", description: "Waterfront property roof specialists" },
                  { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning", description: "Shoreline roof and gutter experts" },
                  { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning", description: "Wine country roof care specialists" },
                  { name: "Seattle", path: "/seattle-roof-gutter-cleaning", description: "Seattle's roof and gutter cleaning experts" },
                  { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning", description: "Expert roof and gutter cleaning on the Eastside" },
                  { name: "Redmond", path: "/redmond-roof-gutter-cleaning", description: "Roof and gutter cleaning for Redmond homes" },
                  { name: "Sammamish", path: "/sammamish-roof-gutter-cleaning", description: "Premium roof cleaning for luxury homes" },
                  { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning", description: "Coastal property roof specialists" },
                  { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning", description: "Mill Creek roof cleaning specialists" },
                  { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning", description: "Roof and gutter cleaning services" },
                ]}
              />
            </Suspense>
          </DeferredSection>
          <DeferredSection
            placeholder={<SectionPlaceholder heightClassName="py-16 min-h-[320px]" />}
          >
            <Suspense fallback={<SectionPlaceholder heightClassName="py-16 min-h-[320px]" />}>
              <ServiceAreaMap />
            </Suspense>
          </DeferredSection>
        </main>
      <DeferredSection
        placeholder={<SectionPlaceholder heightClassName="py-12 min-h-[160px]" />}
      >
        <Suspense fallback={<SectionPlaceholder heightClassName="py-12 min-h-[160px]" />}>
          <Footer />
        </Suspense>
      </DeferredSection>
      {enhancementsReady ? (
        <Suspense fallback={null}>
          <UnifiedContactBar />
          <ExitIntentPopup />
        </Suspense>
      ) : null}
      </div>
    </div>
  );
};

export default Index;
