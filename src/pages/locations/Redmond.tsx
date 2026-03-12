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

const Redmond = () => {
  useEffect(() => {
    // Inject LocalBusiness Schema for Redmond
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Redmond`,
      description: "Professional roof cleaning, gutter cleaning, and exterior washing services in Redmond, WA. Serving all Redmond neighborhoods. 12-month moss-free guarantee.",
      address: {
        ...COMPANY_INFO.address,
        addressLocality: "Redmond"
      },
      geo: {
        latitude: 47.6740,
        longitude: -122.1215
      },
      areaServed: ["Redmond", "Downtown Redmond", "Education Hill", "Overlake", "Grasslawn"]
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Redmond", url: "https://www.seattleprowash.com/service-areas/redmond" }
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
        title="Roof & Gutter Cleaning in Redmond, WA"
        description="Expert roof cleaning, gutter cleaning, and moss removal in Redmond, WA. Professional service for all Redmond neighborhoods. 12-month moss-free guarantee. Licensed & insured."
        url="https://www.seattleprowash.com/service-areas/redmond"
      />
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Redmond, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Roof & Gutter Cleaning in Redmond, WA
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Professional moss treatment and gutter cleaning services for Redmond homeowners
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Same-Day Estimates</span>
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
                    Redmond's Trusted Roof & Gutter Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Serving Redmond homes with expert care, understanding the unique challenges Pacific Northwest weather brings to your property.
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
                        We understand Redmond's specific challenges with moss growth and debris accumulation.
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
                        Over 200 satisfied customers across Redmond and surrounding areas trust our professional service.
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
                        Same-day estimates and quick turnaround times for all Redmond area properties.
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
                    Comprehensive Cleaning Services for Redmond Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    From moss treatment to gutter cleaning, we provide complete exterior care for your Redmond property.
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
                  What Redmond Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard 
                    quote="Excellent service, he came in with a couple days of the rains, and during. Dylan kept us up to date before our scheduled time. He gave excellent service and the roof is still looking great months later."
                    author="Lori"
                    service="Roof Cleaning"
                  />
                  <TestimonialCard 
                    quote="Dylan was very professional, responsive and took the time to explain the soft wash processes."
                    author="Emmanuell Sevieux"
                    service="Roof Soft Wash"
                  />
                  <TestimonialCard 
                    quote="Very professional and very smooth process right from the start. Highly recommend their service."
                    author="Vishal Vasudevan"
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
                question: "What Redmond neighborhoods do you serve?",
                answer: "We serve all Redmond areas including Downtown Redmond, Education Hill, Overlake, Grasslawn, and surrounding neighborhoods. Same-day estimates available throughout Redmond."
              },
              {
                question: "Do you service Redmond's tech campus areas?",
                answer: "Yes! We regularly service homes in the Overlake and Education Hill areas near major tech campuses. We understand busy professionals need flexible scheduling and efficient service."
              },
              {
                question: "How often do Redmond homes need roof cleaning?",
                answer: "Most Redmond homes benefit from annual roof cleaning. Newer developments with less tree coverage may extend to 18 months, while heavily wooded areas like Grasslawn may need bi-annual service."
              }
            ]} 
            schemaContext="roof" 
          />

          {/* Nearby Service Areas */}
          <NearbyLocations 
            currentCity="Redmond"
            cities={nearbyCitiesData.redmond}
          />

          {/* Related Resources */}
          <RelatedResources locationName="Redmond" />

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Protect Your Redmond Home?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join 200+ satisfied customers. Get your free estimate today and see why Redmond homeowners trust Seattle ProWash.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="prowash-secondary"
                    size="xl"
                    onClick={() => window.location.href = '/#contact'}
                  >
                    GET YOUR FREE QUOTE TODAY
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

export default Redmond;
