import { useEffect, useCallback } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import { generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import CostOfWaiting from "@/components/CostOfWaiting";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import HomeFAQ from "@/components/HomeFAQ";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Footer from "@/components/Footer";
import UnifiedContactBar from "@/components/UnifiedContactBar";

const Index = () => {
  // Scroll tracking and Schema injection
  useEffect(() => {
    const cleanup = initScrollTracking();
    
    // Inject LocalBusiness Schema
    const schema = generateLocalBusinessSchema({
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
    const cleanupSchema = injectSchema(schema);
    
    return () => {
      cleanup?.();
      cleanupSchema();
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
      <div id="content-with-offset">
        <Header />
        
        <main>
          <Hero />
          <TrustBar />
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
          <ServiceAreaMap />
        </main>
      <Footer />
      <UnifiedContactBar />
      </div>
    </div>
  );
};

export default Index;
