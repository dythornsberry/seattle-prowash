import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import Footer from "@/components/Footer";

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
        <div className="bg-dark-teal text-white">
          <CostOfWaiting />
        </div>
        <div className="bg-off-white">
          <ProcessSection />
        </div>
        <div className="bg-dark-teal text-white">
          <AboutPreview />
        </div>
        <div className="bg-off-white">
          <TestimonialSlider />
        </div>
        <div className="bg-navy">
          <BeforeAfterSlider />
        </div>
        <div className="bg-dark-teal text-white">
          <CTABanner />
        </div>
        <div className="bg-off-white">
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
