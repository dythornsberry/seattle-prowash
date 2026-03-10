import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceFAQ from "@/components/ServiceFAQ";
import { generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";

const Lynnwood = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const localBusinessSchema = generateLocalBusinessSchema({
      name: "Seattle ProWash - Lynnwood",
      description: "Professional roof cleaning, moss removal, and gutter cleaning services in Lynnwood, WA",
      url: "https://seattleprowash.com/lynnwood",
      telephone: COMPANY_INFO.telephone,
      address: {
        streetAddress: "",
        addressLocality: "Lynnwood",
        addressRegion: "WA",
        postalCode: "98036",
        addressCountry: "US"
      },
      geo: {
        latitude: 47.8209,
        longitude: -122.3151
      },
      areaServed: ["Lynnwood"],
      rating: {
        ratingValue: 4.9,
        reviewCount: 201
      }
    });

    const cleanup = injectSchema(localBusinessSchema);
    return cleanup;
  }, []);

  const testimonials = [
    {
      quote: "Seattle ProWash did an amazing job on our Lynnwood home. The roof looks brand new and they were very professional throughout the entire process.",
      author: "Jennifer M.",
      service: "Roof Cleaning"
    },
    {
      quote: "The gutter cleaning was thorough and they even cleaned up after themselves. Very impressed with the attention to detail!",
      author: "Robert T.",
      service: "Gutter Cleaning"
    },
    {
      quote: "Fast, efficient, and excellent results. They removed years of moss buildup from our roof. Great service in the Lynnwood area!",
      author: "Patricia L.",
      service: "Moss Treatment"
    }
  ];

  const localFAQs = [
    {
      question: "Do you service all areas of Lynnwood?",
      answer: "Yes! We provide comprehensive roof cleaning and gutter cleaning services throughout all of Lynnwood, including neighborhoods near Alderwood Mall, Martha Lake, and surrounding areas."
    },
    {
      question: "How often should Lynnwood homes get roof cleaning?",
      answer: "Due to Lynnwood's wet climate and tree coverage, we recommend professional roof cleaning every 1-2 years to prevent moss and algae buildup that can damage your roof."
    },
    {
      question: "What's your response time in Lynnwood?",
      answer: "We typically provide quotes within 24 hours and can schedule service within a week, depending on weather conditions and current demand in the Lynnwood area."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Roof & Gutter Cleaning Lynnwood WA"
        description="Professional roof cleaning, moss removal & gutter cleaning in Lynnwood. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 752-6690"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        <EnhancedTrustBar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-orange/20 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional Roof & Gutter Cleaning in Lynnwood, WA
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Expert roof cleaning and gutter cleaning services for Lynnwood homes. We keep your property protected and looking its best.
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
                    onClick={() => window.location.href = 'tel:+12067526690'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (206) 752-6690
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
                Our Lynnwood Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Roof Cleaning & Moss Treatment</h3>
                    <p className="text-muted-foreground">
                      Professional soft washing to safely remove moss, algae, and debris from your Lynnwood roof without damage. Includes 12-month moss-free guarantee.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Gutter Cleaning</h3>
                    <p className="text-muted-foreground">
                      Complete gutter cleaning and maintenance to prevent water damage and ensure proper drainage year-round.
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
                What Lynnwood Customers Say
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
          <ServiceFAQ faqs={localFAQs} schemaContext="roof" />

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Lynnwood Property?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote for professional exterior cleaning services in Lynnwood.
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
                    onClick={() => window.location.href = 'tel:+12067526690'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (206) 752-6690
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

export default Lynnwood;
