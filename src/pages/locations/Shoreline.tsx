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
import NearbyLocations from "@/components/NearbyLocations";
import RelatedResources from "@/components/RelatedResources";
import { nearbyCitiesData } from "@/lib/locationNearbyCities";
import { generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";

const Shoreline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const localBusinessSchema = generateLocalBusinessSchema({
      name: "Seattle ProWash - Shoreline",
      description: "Professional roof cleaning, moss removal, and gutter cleaning services in Shoreline, WA",
      url: "https://seattleprowash.com/shoreline",
      telephone: COMPANY_INFO.telephone,
      address: {
        streetAddress: "",
        addressLocality: "Shoreline",
        addressRegion: "WA",
        postalCode: "98133",
        addressCountry: "US"
      },
      geo: {
        latitude: 47.7557,
        longitude: -122.3415
      },
      areaServed: ["Shoreline"],
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
      quote: "Excellent work on our Shoreline home! The team was professional, thorough, and the results exceeded our expectations. Our roof looks fantastic.",
      author: "Michael S.",
      service: "Roof Cleaning"
    },
    {
      quote: "They did a great job on our gutters. Quick, efficient, and no mess left behind. Highly recommend Seattle ProWash!",
      author: "Susan K.",
      service: "Gutter Cleaning"
    },
    {
      quote: "Professional moss removal service that actually works. Our roof has stayed clean for over a year now. Great value for Shoreline homeowners.",
      author: "David R.",
      service: "Moss Treatment"
    }
  ];

  const localFAQs = [
    {
      question: "Do you serve all Shoreline neighborhoods?",
      answer: "Absolutely! We provide complete roof cleaning and gutter cleaning services throughout Shoreline, including Richmond Beach, Ridgecrest, and all surrounding neighborhoods."
    },
    {
      question: "Why is roof cleaning important in Shoreline?",
      answer: "Shoreline's proximity to Puget Sound creates a humid environment perfect for moss and algae growth. Regular roof cleaning prevents damage, extends roof life, and maintains your home's value."
    },
    {
      question: "What's included in your gutter cleaning service?",
      answer: "Our Shoreline gutter cleaning includes debris removal, downspout flushing, minor repairs, and a full inspection to ensure your gutters are functioning properly."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Roof & Gutter Cleaning Shoreline WA"
        description="Professional roof cleaning, moss removal & gutter cleaning in Shoreline. Expert roof and gutter services with 5-star reviews. Free quotes. Call (206) 752-6690"
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
                  Professional Roof & Gutter Cleaning in Shoreline, WA
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Expert roof and gutter cleaning services for Shoreline homes. Specializing in roof moss removal and gutter maintenance.
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
                Our Shoreline Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Roof Cleaning</h3>
                    <p className="text-muted-foreground">
                      Safe, effective soft washing to remove moss, algae, and stains from your Shoreline roof without causing damage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Gutter Cleaning</h3>
                    <p className="text-muted-foreground">
                      Thorough gutter cleaning and maintenance to protect your Shoreline home from water damage and foundation issues.
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
                What Shoreline Customers Say
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

          {/* Nearby Service Areas */}
          <NearbyLocations 
            currentCity="Shoreline"
            cities={nearbyCitiesData.shoreline}
          />

          {/* Related Resources */}
          <RelatedResources locationName="Shoreline" />

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Protect Your Shoreline Property?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote for professional roof and gutter cleaning services in Shoreline.
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

export default Shoreline;
