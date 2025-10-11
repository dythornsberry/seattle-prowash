import { useEffect } from "react";
import Header from "@/components/Header";
import StickyTopBar from "@/components/StickyTopBar";
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
import QuoteForm from "@/components/QuoteForm";
import SeasonalPromotions from "@/components/SeasonalPromotions";
import MossUrgency from "@/components/MossUrgency";
import FloatingMossCTA from "@/components/FloatingMossCTA";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
  // Intersection Observer for fade-up animations
  useEffect(() => {
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

    // Observe all fade-up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

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
      <StickyTopBar />
      <div style={{ paddingTop: '60px' }}>
        <Header />
        <main>
          <Hero />
          <TrustSignalSection />
          <div className="bg-off-white">
            <TrustBar />
          </div>
        <div className="bg-dark-teal text-white">
          <BenefitStrip />
        </div>
        <MossUrgency />
        <div className="bg-off-white">
          <ServicesPreview />
        </div>
        <div className="bg-dark-teal text-white">
          <CostOfWaiting />
        </div>
        <div className="bg-off-white">
          <ProcessSection />
        </div>
        <div className="bg-dark-teal text-white">
          <AboutPreview />
        </div>
        <div id="reviews" className="bg-off-white">
          <TestimonialSlider />
        </div>
        <div className="bg-navy">
          <BeforeAfterSlider />
        </div>
        <div className="bg-dark-teal text-white">
          <CTABanner />
        </div>
        <div id="contact" className="bg-off-white">
          <QuoteForm />
        </div>
        <SeasonalPromotions />
        </main>
      <Footer />
      <MobileBottomBar />
      <FloatingMossCTA />
      </div>
    </div>
  );
};

export default Index;
