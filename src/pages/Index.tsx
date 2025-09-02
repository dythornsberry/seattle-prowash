import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalistHero from "@/components/MinimalistHero";
import SeattlePromise from "@/components/SeattlePromise";
import TwoServiceCards from "@/components/TwoServiceCards";
import SingleBeforeAfter from "@/components/SingleBeforeAfter";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import CompactReviews from "@/components/CompactReviews";
import SimplifiedFooter from "@/components/SimplifiedFooter";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Intersection Observer for fade animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-up class
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Special handling for mobile contact form
          if (hash === '#contact' && window.innerWidth < 768) {
            setTimeout(() => {
              const form = document.querySelector('#quote-form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 500);
          }
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero with inline form */}
      <MinimalistHero />
      
      {/* Promise section */}
      <SeattlePromise />
      
      {/* Two service cards */}
      <TwoServiceCards />
      
      {/* Single dramatic before/after */}
      <SingleBeforeAfter />
      
      {/* Three-step process */}
      <ThreeStepProcess />
      
      {/* Compact reviews */}
      <CompactReviews />
      
      {/* Final CTA */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Get your fast, free quote today. Most quotes sent same day with reply within ~10 minutes.
          </p>
          <Button 
            size="lg"
            className="bg-cta-orange hover:bg-cta-orange-dark text-white font-bold px-8 py-4"
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET YOUR FREE QUOTE TODAY
          </Button>
        </div>
      </section>
      
      <SimplifiedFooter />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
