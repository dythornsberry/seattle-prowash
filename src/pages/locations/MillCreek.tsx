import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import { generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";

const MillCreek = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const localBusinessSchema = generateLocalBusinessSchema({
      name: "Seattle ProWash - Mill Creek",
      description: "Professional roof cleaning, moss removal, gutter cleaning, and pressure washing services in Mill Creek, WA",
      url: "https://seattleprowash.com/mill-creek",
      telephone: COMPANY_INFO.telephone,
      address: {
        streetAddress: "",
        addressLocality: "Mill Creek",
        addressRegion: "WA",
        postalCode: "98012",
        addressCountry: "US"
      },
      geo: {
        latitude: 47.8601,
        longitude: -122.2043
      },
      areaServed: ["Mill Creek"],
      rating: {
        ratingValue: 4.9,
        reviewCount: 180
      }
    });

    const cleanup = injectSchema(localBusinessSchema);
    return cleanup;
  }, []);

  const testimonials = [
    {
      quote: "Outstanding roof cleaning service! Our Mill Creek home's roof looks brand new. The team was professional, punctual, and did an excellent job.",
      author: "Brian C.",
      service: "Roof Cleaning"
    },
    {
      quote: "We've used Seattle ProWash for both gutter cleaning and pressure washing. Both times they exceeded our expectations. Highly recommend to Mill Creek residents!",
      author: "Amanda F.",
      service: "Multiple Services"
    },
    {
      quote: "The moss removal was incredibly thorough. Our roof has stayed clean and moss-free for over a year. Great value and excellent customer service.",
      author: "Christopher L.",
      service: "Moss Treatment"
    }
  ];

  const localFAQs = [
    {
      question: "Do you service all of Mill Creek?",
      answer: "Yes! We provide complete roof cleaning, gutter cleaning, and pressure washing services throughout Mill Creek, including Country Club, North Creek, and all surrounding neighborhoods."
    },
    {
      question: "What makes Mill Creek homes vulnerable to moss?",
      answer: "Mill Creek's tree-lined neighborhoods and Pacific Northwest climate create perfect conditions for moss growth. The shade from trees and constant moisture mean roofs need regular professional cleaning to prevent damage."
    },
    {
      question: "How quickly can you schedule service?",
      answer: "We typically provide quotes within 24 hours and can schedule service in Mill Creek within 5-7 days, weather permitting. Emergency services may be available for urgent situations."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Roof Cleaning & Pressure Washing Mill Creek WA"
        description="Professional roof cleaning, moss removal & pressure washing in Mill Creek. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 508-4090"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-orange/20 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional Roof Cleaning & Pressure Washing in Mill Creek, WA
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Expert exterior cleaning services for Mill Creek homes. Specializing in roof moss removal, gutter cleaning, and pressure washing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    variant="prowash-secondary"
                    onClick={() => window.location.href = '/#quote'}
                  >
                    Get Free Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="prowash-outline"
                    onClick={() => window.location.href = 'tel:+12065084090'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (206) 508-4090
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
                Our Mill Creek Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Roof Cleaning</h3>
                    <p className="text-muted-foreground">
                      Safe, effective soft washing to remove moss, algae, and debris from your Mill Creek roof without causing any damage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Gutter Cleaning</h3>
                    <p className="text-muted-foreground">
                      Comprehensive gutter cleaning and maintenance to protect your Mill Creek home from water damage and foundation issues.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Pressure Washing</h3>
                    <p className="text-muted-foreground">
                      Professional pressure washing for driveways, patios, siding, decks, and all exterior surfaces throughout Mill Creek.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
                What Mill Creek Customers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    service={testimonial.service}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Local FAQs */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
                Mill Creek Service FAQs
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {localFAQs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-brand-navy">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Mill Creek Property?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote for professional exterior cleaning services in Mill Creek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="prowash-secondary"
                  onClick={() => window.location.href = '/#quote'}
                >
                  Get Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="prowash-outline"
                  onClick={() => window.location.href = 'tel:+12065084090'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <MobileBottomBar />
      </div>
    </>
  );
};

export default MillCreek;
