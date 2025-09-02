import { useEffect } from "react";
import Header from "@/components/Header";
import UltraSimpleHero from "@/components/UltraSimpleHero";
import PromiseBlock from "@/components/PromiseBlock";
import TwoServiceCards from "@/components/TwoServiceCards";
import SingleBeforeAfter from "@/components/SingleBeforeAfter";
import SimpleHowItWorks from "@/components/SimpleHowItWorks";
import CompactReviews from "@/components/CompactReviews";
import FinalCTA from "@/components/FinalCTA";
import SimplifiedFooter from "@/components/SimplifiedFooter";
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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <UltraSimpleHero />
        <PromiseBlock />
        <TwoServiceCards />
        <SingleBeforeAfter />
        <SimpleHowItWorks />
        <CompactReviews />
        <FinalCTA />
      </main>
      <SimplifiedFooter />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
