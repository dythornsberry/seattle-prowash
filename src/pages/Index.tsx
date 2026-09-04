import { useEffect } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import { scrollToSection } from "@/lib/navigation";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AboutPreview from "@/components/AboutPreview";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import HomeFAQ from "@/components/HomeFAQ";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  // Scroll tracking (LocalBusiness schema is in static index.html — no JS injection needed)
  useEffect(() => {
    const cleanup = initScrollTracking();
    return () => { cleanup?.(); };
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
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Seattle Roof & Gutter Cleaning Experts"
        description="Roof cleaning, moss removal & gutter cleaning in Seattle, Kenmore, Lake Forest Park, Bothell, Kirkland & Shoreline. 12-month moss-free guarantee. Licensed & insured. Fast quotes."
        url="https://www.seattleprowash.com"
      />
      <div id="content-with-offset">
        <Header />
        
        <main>
          <Hero />
          <EnhancedTrustBar />
          <ServicesPreview />
          <div className="bg-navy">
            <BeforeAfterSlider />
          </div>
          <AboutPreview />
          <GoogleReviewsCarousel />
          <div className="bg-off-white">
            <TwoStepQuoteForm />
          </div>
          <HomeFAQ />
          <ServiceAreasSection 
            title="Serving North Seattle & the Eastside"
            description="Based in Kenmore and serving nearby communities."
            areas={[
              { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
              { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
              { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" },
              { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
              { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
              { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
            ]}
          />
        </main>
      <Footer />
      <MobileBottomBar />
      <ExitIntentPopup />
      </div>
    </div>
  );
};

export default Index;
