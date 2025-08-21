import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProWashPromise from "@/components/ProWashPromise";
import StreamlinedServices from "@/components/StreamlinedServices";
import ProcessSection from "@/components/ProcessSection";
import RealResults from "@/components/RealResults";
import AboutPreview from "@/components/AboutPreview";
import FinalCTA from "@/components/FinalCTA";
import SimplifiedFooter from "@/components/SimplifiedFooter";

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
        {/* 1. Hero Section (Keep As-Is) */}
        <Hero />
        
        {/* 2. NEW "The ProWash Promise" Section (Consolidated Trust Bar) */}
        <ProWashPromise />
        
        {/* 3. Streamlined Services Section */}
        <StreamlinedServices />
        
        {/* 4. Our Simple 3-Step Process (Keep As-Is) */}
        <div className="bg-off-white">
          <ProcessSection />
        </div>
        
        {/* 5. Powerful Proof Section (Combined & Refined) */}
        <RealResults />
        
        {/* 6. Meet the Owner Section (Keep As-Is) */}
        <div className="bg-dark-teal text-white">
          <AboutPreview />
        </div>
        
        {/* 7. Final Call-to-Action & Contact Form */}
        <FinalCTA />
      </main>
      
      {/* 8. Simplified Footer */}
      <SimplifiedFooter />
    </div>
  );
};

export default Index;
