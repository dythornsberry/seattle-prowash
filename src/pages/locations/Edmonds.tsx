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

const Edmonds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const localBusinessSchema = generateLocalBusinessSchema({
      name: "Seattle ProWash - Edmonds",
      description: "Professional roof cleaning, moss removal, gutter cleaning, and pressure washing services in Edmonds, WA",
      url: "https://seattleprowash.com/edmonds",
      telephone: COMPANY_INFO.telephone,
      address: {
        streetAddress: "",
        addressLocality: "Edmonds",
        addressRegion: "WA",
        postalCode: "98020",
        addressCountry: "US"
      },
      geo: {
        latitude: 47.8107,
        longitude: -122.3774
      },
      areaServed: ["Edmonds"],
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
      quote: "Our Edmonds home looks incredible after Seattle ProWash cleaned our roof and gutters. The team was courteous, efficient, and did a meticulous job.",
      author: "Catherine B.",
      service: "Roof & Gutter Cleaning"
    },
    {
      quote: "Living near the waterfront means constant moss and algae. They completely transformed our roof and it's stayed clean. Highly recommend to Edmonds neighbors!",
      author: "James W.",
      service: "Moss Removal"
    },
    {
      quote: "Professional service from start to finish. Our driveway and walkway look brand new. Best pressure washing company in Edmonds!",
      author: "Lisa M.",
      service: "Pressure Washing"
    }
  ];

  const localFAQs = [
    {
      question: "Do you service waterfront properties in Edmonds?",
      answer: "Yes! We regularly service waterfront and hillside properties throughout Edmonds. We have the equipment and expertise to safely clean homes in challenging locations."
    },
    {
      question: "How does the coastal climate affect roof maintenance in Edmonds?",
      answer: "Edmonds' coastal climate creates ideal conditions for moss and algae growth. The salt air and moisture mean roofs need regular professional cleaning to prevent damage and maintain their appearance."
    },
    {
      question: "What's your availability in the Edmonds area?",
      answer: "We service Edmonds year-round and can typically schedule your cleaning within 5-7 days. We provide quotes within 24 hours and work around your schedule."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Roof Cleaning & Pressure Washing Edmonds WA"
        description="Professional roof cleaning, moss removal & pressure washing in Edmonds. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 508-4090"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-orange/20 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional Roof Cleaning & Pressure Washing in Edmonds, WA
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Expert exterior cleaning services for Edmonds waterfront and hillside homes. Specializing in roof moss removal and coastal property care.
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
                Our Edmonds Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Roof Cleaning</h3>
                    <p className="text-muted-foreground">
                      Specialized soft washing for Edmonds coastal homes to safely remove moss, algae, and salt deposits without damage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Gutter Cleaning</h3>
                    <p className="text-muted-foreground">
                      Complete gutter maintenance for Edmonds properties, including debris removal and downspout clearing to prevent water damage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">Pressure Washing</h3>
                    <p className="text-muted-foreground">
                      Expert pressure washing for driveways, patios, decks, and siding throughout Edmonds, including waterfront properties.
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
                What Edmonds Customers Say
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
                Edmonds Service FAQs
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
                Ready to Transform Your Edmonds Property?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote for professional exterior cleaning services in Edmonds.
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

export default Edmonds;
