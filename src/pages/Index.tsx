import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BenefitStrip from "@/components/BenefitStrip";
import ServicesPreview from "@/components/ServicesPreview";
import Footer from "@/components/Footer";

// Lazy load below-fold components
const CostOfWaiting = lazy(() => import("@/components/CostOfWaiting"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const AboutPreview = lazy(() => import("@/components/AboutPreview"));
const TestimonialSlider = lazy(() => import("@/components/TestimonialSlider"));
const BeforeAfterSlider = lazy(() => import("@/components/BeforeAfterSlider"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const QuoteForm = lazy(() => import("@/components/QuoteForm"));

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
      <Header />
      <main>
        <Hero />
        <div className="bg-off-white">
          <TrustBar />
        </div>
        <div className="bg-dark-teal text-white">
          <BenefitStrip />
        </div>
        <div className="bg-off-white">
          <ServicesPreview />
        </div>
        <Suspense fallback={<div className="bg-dark-teal text-white h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-dark-teal text-white">
            <CostOfWaiting />
          </div>
        </Suspense>
        <Suspense fallback={<div className="bg-off-white h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-off-white">
            <ProcessSection />
          </div>
        </Suspense>
        <Suspense fallback={<div className="bg-dark-teal text-white h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-dark-teal text-white">
            <AboutPreview />
          </div>
        </Suspense>
        <Suspense fallback={<div className="bg-off-white h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-off-white">
            <TestimonialSlider />
          </div>
        </Suspense>
        <Suspense fallback={<div className="bg-navy h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-navy">
            <BeforeAfterSlider />
          </div>
        </Suspense>
        <Suspense fallback={<div className="bg-dark-teal text-white h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-dark-teal text-white">
            <CTABanner />
          </div>
        </Suspense>
        <Suspense fallback={<div className="bg-off-white h-96 flex items-center justify-center">Loading...</div>}>
          <div className="bg-off-white">
            <QuoteForm />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
