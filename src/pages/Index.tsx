import { useEffect } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignalSection from "@/components/TrustSignalSection";
import TrustBar from "@/components/TrustBar";
import BenefitStrip from "@/components/BenefitStrip";
import ServicesPreview from "@/components/ServicesPreview";
import CostOfWaiting from "@/components/CostOfWaiting";
import ProcessSection from "@/components/ProcessSection";
import AboutPreview from "@/components/AboutPreview";
import TestimonialSlider from "@/components/TestimonialSlider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTABanner from "@/components/CTABanner";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import HomeFAQ from "@/components/HomeFAQ";
import SeasonalPromotions from "@/components/SeasonalPromotions";
import MossUrgency from "@/components/MossUrgency";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import GutterAddonSection from "@/components/GutterAddonSection";
import UnifiedContactBar from "@/components/UnifiedContactBar";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import ServicesPricing from "@/components/ServicesPricing";

const Index = () => {
  // Enable smooth scrolling globally and scroll tracking
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const cleanup = initScrollTracking();
    return () => {
      document.documentElement.style.scrollBehavior = '';
      cleanup?.();
    };
  }, []);

  // Scroll to top and set up fade-up animations
  useEffect(() => {
    // Handle hash navigation or scroll to top
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          // Prefer the form inside contact on all devices if present
          const formElement = element.querySelector('form') as HTMLElement | null;
          const target = (formElement && hash === 'contact') ? formElement : (element as HTMLElement);
          // Compute dynamic offset using element bottoms + small padding
          const topBar = document.getElementById('sticky-top-bar') as HTMLElement | null;
          const header = document.getElementById('site-header') as HTMLElement | null;
          const extra = 12;
          let offset = 0;
          if (header) {
            offset = header.getBoundingClientRect().bottom + extra;
          } else if (topBar) {
            offset = topBar.getBoundingClientRect().bottom + extra;
          } else {
            offset = 92;
          }
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

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

    // Observe all fade-up elements with staggered delay
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el, index) => {
      // Add staggered delay for gallery items
      if (el.classList.contains('gallery-item') || el.closest('[class*="grid"]')) {
        (el as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      }
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle hash navigation (e.g., /#contact)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Use longer timeout for cross-page navigation to ensure elements are rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const formElement = element.querySelector('form') as HTMLElement | null;
          const target = (formElement && hash === '#contact') ? formElement : (element as HTMLElement);
          
          // For cross-page navigation, use a more reliable offset calculation
          let offset = 120; // Default safe offset
          
          // Try to get actual header heights if available
          const topBar = document.getElementById('sticky-top-bar') as HTMLElement | null;
          const header = document.getElementById('site-header') as HTMLElement | null;
          
          if (header && header.offsetHeight > 0) {
            offset = topBar ? topBar.offsetHeight + header.offsetHeight + 20 : header.offsetHeight + 20;
          } else if (topBar && topBar.offsetHeight > 0) {
            offset = topBar.offsetHeight + 20;
          }
          
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300); // Increased timeout for cross-page navigation
    }
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
