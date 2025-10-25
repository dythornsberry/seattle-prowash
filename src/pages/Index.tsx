import { useEffect } from "react";
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

const Index = () => {
  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
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
          element.scrollIntoView({ behavior: 'smooth' });
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
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // On mobile, scroll to the form specifically for better UX
          const isMobile = window.innerWidth < 1024;
          const formElement = element.querySelector('form');
          
          if (isMobile && formElement && hash === '#contact') {
            formElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          } else {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 100);
    }
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <div id="content-with-offset">
        <Header />
        
        <main>
          <Hero />
          
          {/* Service Area Proof */}
          <div className="bg-brand-navy py-3">
            <div className="container mx-auto px-4">
              <p className="text-center text-white/90 text-sm md:text-base font-medium">
                Local to Kenmore, Bothell, Kirkland, Shoreline
              </p>
            </div>
          </div>
          
          <MossUrgency />
          <CostOfWaiting />
          <div className="bg-off-white">
            <ServicesPreview />
          </div>
          <div className="bg-navy">
            <BeforeAfterSlider />
          </div>
          <div id="reviews" className="bg-off-white">
            <TestimonialSlider />
          </div>
          <GoogleReviewsCarousel />
          <HomeFAQ />
          <ServiceAreaMap />
          
          {/* Service Area Proof - Footer */}
          <div className="bg-muted/30 py-6">
            <div className="container mx-auto px-4">
              <p className="text-center text-brand-navy text-sm md:text-base font-medium">
                Proudly serving Kenmore, Bothell, Kirkland, Shoreline & surrounding areas
              </p>
            </div>
          </div>
          
          <div id="contact" className="bg-off-white">
            <TwoStepQuoteForm />
          </div>
        </main>
      <Footer />
      <UnifiedContactBar />
      </div>
    </div>
  );
};

export default Index;
