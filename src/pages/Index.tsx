import { useEffect, useCallback } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import AsSeenOn from "@/components/AsSeenOn";
import ServicesPreview from "@/components/ServicesPreview";
import CostOfWaiting from "@/components/CostOfWaiting";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import HomeFAQ from "@/components/HomeFAQ";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import Footer from "@/components/Footer";
import UnifiedContactBar from "@/components/UnifiedContactBar";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
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

  // Optimized hash navigation - merged duplicate logic
  const handleHashNavigation = useCallback(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = hash.substring(1);
    const element = document.getElementById(targetId);
    if (!element) return;

    // Prefer form element for contact sections
    const formElement = element.querySelector('form') as HTMLElement | null;
    const target = (formElement && targetId === 'contact') ? formElement : element;

    // Calculate offset from sticky headers
    const topBar = document.getElementById('sticky-top-bar');
    const header = document.getElementById('site-header');
    let offset = 120; // Default fallback

    if (header?.offsetHeight) {
      offset = (topBar?.offsetHeight || 0) + header.offsetHeight + 20;
    } else if (topBar?.offsetHeight) {
      offset = topBar.offsetHeight + 20;
    }

    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    
    // Use instant scroll instead of smooth for better performance
    window.scrollTo({ top: y });
  }, []);

  // Handle initial hash navigation
  useEffect(() => {
    // Delay to ensure DOM is ready
    const timer = setTimeout(handleHashNavigation, 100);
    return () => clearTimeout(timer);
  }, [handleHashNavigation]);

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


  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Seattle Roof & Gutter Cleaning Experts | Seattle ProWash"
        description="Based in Kenmore, serving Bothell, Lynnwood, Kirkland, Shoreline & greater Seattle. Expert roof cleaning and gutter cleaning with 12-month moss-free guarantee. Licensed, insured, 100% satisfaction guaranteed."
        url="https://www.seattleprowash.com"
      />
      <div id="content-with-offset">
        <Header />
        
        <main>
          <Hero />
          <EnhancedTrustBar />
          <AsSeenOn />
          <CostOfWaiting />
          <ServicesPreview />
          <GoogleReviewsCarousel />
          <div className="bg-navy">
            <BeforeAfterSlider />
          </div>
          <div className="bg-off-white">
            <TwoStepQuoteForm />
          </div>
          <HomeFAQ />
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
              { name: "Bellevue", path: "/service-areas", description: "Expert roof and gutter cleaning on the Eastside" },
              { name: "Redmond", path: "/service-areas", description: "Roof and gutter cleaning for Redmond homes" },
              { name: "Sammamish", path: "/service-areas", description: "Premium roof cleaning for luxury homes" },
              { name: "Edmonds", path: "/service-areas", description: "Coastal property roof specialists" },
              { name: "Mill Creek", path: "/service-areas", description: "Mill Creek roof cleaning specialists" },
              { name: "Mountlake Terrace", path: "/service-areas", description: "Roof and gutter cleaning services" },
            ]}
          />
          <ServiceAreaMap />
        </main>
      <Footer />
      <UnifiedContactBar />
      <ExitIntentPopup />
      </div>
    </div>
  );
};

export default Index;
