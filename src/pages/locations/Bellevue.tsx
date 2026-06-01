import { useEffect } from "react";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceFAQ from "@/components/ServiceFAQ";
import NearbyLocations from "@/components/NearbyLocations";
import RelatedResources from "@/components/RelatedResources";
import { nearbyCitiesData } from "@/lib/locationNearbyCities";
import MobileBottomBar from "@/components/MobileBottomBar";
import TwoStepQuoteForm from "@/components/TwoStepQuoteForm";
import { navigateToContact } from "@/lib/navigation";

const Bellevue = () => {
  useEffect(() => {
    // Inject LocalBusiness Schema for Bellevue
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Bellevue`,
      description: "Professional roof cleaning and gutter cleaning services in Bellevue, WA. Serving all Bellevue neighborhoods with expert moss removal and 12-month guarantee.",
      url: "https://www.seattleprowash.com/bellevue-roof-gutter-cleaning",
      address: {
        ...COMPANY_INFO.address,
        addressLocality: "Bellevue"
      },
      geo: {
        latitude: 47.6101,
        longitude: -122.2015
      },
      areaServed: ["Bellevue", "Downtown Bellevue", "Crossroads", "Wilburton", "Somerset", "Factoria"]
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Bellevue", url: "https://www.seattleprowash.com/bellevue-roof-gutter-cleaning" }
    ]);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    window.scrollTo(0, 0);

    return () => {
      cleanupBusiness();
      cleanupBreadcrumb();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Roof & Gutter Cleaning in Bellevue, WA"
        description="Expert roof cleaning, gutter cleaning, and moss removal in Bellevue, WA. Serving all Bellevue neighborhoods. 12-month moss-free guarantee. Licensed & insured. Free estimates."
        url="https://www.seattleprowash.com/bellevue-roof-gutter-cleaning"
      />
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Bellevue, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Roof & Gutter Cleaning in Bellevue, WA
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Professional moss treatment and gutter cleaning services for Bellevue homeowners
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Free Estimates</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">200+ 5-Star Reviews</span>
                </div>
              </div>
            </div>
          </section>

          {/* Local Trust Signals */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                    Bellevue's Trusted Roof & Gutter Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Serving Bellevue homes with expert care, understanding the unique challenges Pacific Northwest weather brings to your property.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Local Experts</h3>
                      <p className="text-gray-600">
                        We understand Bellevue's specific challenges with moss growth and debris accumulation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">5-Star Service</h3>
                      <p className="text-gray-600">
                        Over 200 satisfied customers across Bellevue and surrounding areas trust our professional service.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Fast Response</h3>
                      <p className="text-gray-600">
                        Free estimates and quick scheduling for all Bellevue area properties.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-dark-teal text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Complete Cleaning Services for Bellevue Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    From moss treatment to gutter cleaning, we provide expert care for your Bellevue property.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Moss Treatment</h3>
                    <p className="text-white/80 mb-4">
                      Specialized moss treatment that kills existing growth and prevents regrowth for 12 months.
                    </p>
                    <div className="text-bright-orange font-semibold">12-Month Guarantee</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Complete gutter cleaning and inspection to protect your home from water damage.
                    </p>
                    <div className="text-bright-orange font-semibold">Debris Removal & Inspection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Gentle roof cleaning that removes stains and algae without pressure washing damage.
                    </p>
                    <div className="text-bright-orange font-semibold">Shingle-Safe Method</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Brightening</h3>
                    <p className="text-white/80 mb-4">
                      Restore your gutters' appearance by removing oxidation stains.
                    </p>
                    <div className="text-bright-orange font-semibold">Like-New Appearance</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-12 text-center">
                  What Bellevue Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard 
                    quote="Dylan and team did our gutter cleaning, moss removal did an awesome job. We highly recommend them"
                    author="Ashokraj"
                    service="Roof & Gutter Cleaning"
                  />
                  <TestimonialCard 
                    quote="They were responsive and reasonable in pricing. Did a great job with my grimy gutters getting them white again. Roof looks good, too."
                    author="Kelly Sim"
                    service="Gutter Cleaning & Brightening"
                  />
                  <TestimonialCard 
                    quote="Excellent company to work with, Dylan and his guys are friendly and do great work with attention to detail. Professional and easy company to work with."
                    author="Chris Olson"
                    service="Complete Exterior Service"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Local FAQ Section */}
          <ServiceFAQ 
            faqs={[
              {
                question: "Do I need a permit for roof cleaning in Bellevue?",
                answer: "No permit is required for routine roof and gutter cleaning services in Bellevue. Our soft-wash methods are non-invasive and comply with all local regulations."
              },
              {
                question: "What Bellevue neighborhoods do you serve?",
                answer: "We serve all Bellevue areas including Downtown Bellevue, Crossroads, Wilburton, Somerset, Factoria, Bridle Trails, and surrounding neighborhoods. Free estimates available throughout Bellevue."
              },
              {
                question: "How often should Bellevue homes get roof cleaning?",
                answer: "Due to Bellevue's wet climate and tree coverage, we recommend annual roof cleaning and moss treatment. Homes with heavy tree coverage may benefit from twice-yearly service."
              }
            ]} 
            schemaContext="roof" 
          />

          {/* Nearby Service Areas */}
          <NearbyLocations 
            currentCity="Bellevue"
            cities={nearbyCitiesData.bellevue}
          />

          {/* Related Resources */}
          <RelatedResources locationName="Bellevue" />

          {/* Quote Form */}
          <div id="contact" className="bg-off-white">
            <TwoStepQuoteForm />
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Protect Your Bellevue Home?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join 200+ satisfied customers. Get your free estimate today and see why Bellevue homeowners trust Seattle ProWash.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="prowash-secondary"
                    size="xl"
                    onClick={navigateToContact}
                  >
                    REQUEST YOUR FREE ESTIMATE
                  </Button>
                  <Button 
                    variant="prowash-outline"
                    size="xl"
                    onClick={() => window.location.href = 'tel:206-752-6690'}
                  >
                    Call 206-752-6690
                  </Button>
                </div>
              </div>
            </div>
          </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Bellevue;
