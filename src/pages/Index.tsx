import { useEffect } from "react";
import { initScrollTracking } from "@/utils/scrollTracking";
import { scrollToSection } from "@/lib/navigation";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import RecentProjects from "@/components/RecentProjects";
import CostOfWaiting from "@/components/CostOfWaiting";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AboutPreview from "@/components/AboutPreview";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import HomeFAQ from "@/components/HomeFAQ";
import ServiceAreaMap from "@/components/ServiceAreaMap";
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
        description="Expert roof cleaning and gutter cleaning in Seattle, Kenmore, Bothell, Kirkland & Shoreline. 12-month moss-free guarantee. Licensed & insured. Free quotes."
        url="https://www.seattleprowash.com"
      />
      <div id="content-with-offset">
        <Header />
        
        <main>
          <Hero />
          <EnhancedTrustBar />
          <ServicesPreview />
          <RecentProjects />
          <AboutPreview />
          <GoogleReviewsCarousel />
          <div className="bg-off-white">
            <TwoStepQuoteForm />
          </div>
          <CostOfWaiting />
          <div className="bg-navy">
            <BeforeAfterSlider />
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
              { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning", description: "Expert roof and gutter cleaning on the Eastside" },
              { name: "Redmond", path: "/redmond-roof-gutter-cleaning", description: "Roof and gutter cleaning for Redmond homes" },
              { name: "Sammamish", path: "/sammamish-roof-gutter-cleaning", description: "Premium roof cleaning for luxury homes" },
              { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning", description: "Coastal property roof specialists" },
              { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning", description: "Mill Creek roof cleaning specialists" },
              { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning", description: "Roof and gutter cleaning services" },
            ]}
          />
          <ServiceAreaMap />
        </main>
      <Footer />
      <MobileBottomBar />
      <ExitIntentPopup />
      </div>
    </div>
  );
};

export default Index;
