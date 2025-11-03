import { useEffect, useCallback, lazy, Suspense } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import CostOfWaiting from "@/components/CostOfWaiting";
import Footer from "@/components/Footer";
import UnifiedContactBar from "@/components/UnifiedContactBar";

// Lazy load below-the-fold components for better initial load
const BeforeAfterSlider = lazy(() => import("@/components/BeforeAfterSlider"));
const TwoStepQuoteForm = lazy(() => import("@/components/TwoStepQuoteForm"));
const HomeFAQ = lazy(() => import("@/components/HomeFAQ"));
const ServiceAreaMap = lazy(() => import("@/components/ServiceAreaMap"));

const Index = () => {
  // Scroll tracking only (removed global smooth scroll for performance)
  useEffect(() => {
    const cleanup = initScrollTracking();
    return () => cleanup?.();
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
          
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <div className="bg-navy">
              <BeforeAfterSlider />
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <div className="bg-off-white">
              <TwoStepQuoteForm />
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <HomeFAQ />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <ServiceAreaMap />
          </Suspense>
        </main>
      <Footer />
      <UnifiedContactBar />
      </div>
    </div>
  );
};

export default Index;
