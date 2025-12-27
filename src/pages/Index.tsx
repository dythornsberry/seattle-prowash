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
        description="Seattle's trusted roof and gutter cleaning experts. Safe moss removal with 12-month guarantee. Professional gutter cleaning and maintenance. Licensed, insured, and 100% satisfaction guaranteed."
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
            title="Trusted Throughout Greater Seattle"
            description="Professional roof cleaning and gutter cleaning services in Seattle and surrounding communities"
            areas={[
              { name: "Seattle", path: "/locations/seattle", description: "Seattle's roof and gutter cleaning experts" },
              { name: "Bellevue", path: "/locations/bellevue", description: "Expert roof and gutter cleaning on the Eastside" },
              { name: "Kirkland", path: "/locations/kirkland", description: "Waterfront property roof specialists" },
              { name: "Redmond", path: "/locations/redmond", description: "Roof and gutter cleaning for Redmond homes" },
              { name: "Sammamish", path: "/locations/sammamish", description: "Premium roof cleaning for luxury homes" },
              { name: "Bothell", path: "/locations/bothell", description: "Northshore area roof and gutter experts" },
              { name: "Woodinville", path: "/locations/woodinville", description: "Wine country roof care specialists" },
              { name: "Kenmore", path: "/locations/kenmore", description: "Lake Washington roof and gutter services" },
              { name: "Edmonds", path: "/locations/edmonds", description: "Coastal property roof specialists" },
              { name: "Lynnwood", path: "/locations/lynnwood", description: "North Seattle metro roof and gutter cleaning" },
              { name: "Shoreline", path: "/locations/shoreline", description: "Shoreline roof and gutter experts" },
              { name: "Mill Creek", path: "/locations/mill-creek", description: "Mill Creek roof cleaning specialists" },
              { name: "Mountlake Terrace", path: "/locations/mountlake-terrace", description: "Roof and gutter cleaning services" },
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
