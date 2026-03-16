import { useEffect } from "react";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceFAQ from "@/components/ServiceFAQ";
import NearbyLocations from "@/components/NearbyLocations";
import RelatedResources from "@/components/RelatedResources";
import { nearbyCitiesData } from "@/lib/locationNearbyCities";
import MobileBottomBar from "@/components/MobileBottomBar";

const Bothell = () => {
  useEffect(() => {
    // Inject LocalBusiness Schema for Bothell
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Bothell`,
      description: "Professional roof cleaning and gutter cleaning services in Bothell, WA. Serving all Bothell neighborhoods including Canyon Park and Country Village. 12-month moss-free guarantee.",
      url: "https://www.seattleprowash.com/bothell-roof-gutter-cleaning",
      address: {
        ...COMPANY_INFO.address,
        addressLocality: "Bothell"
      },
      geo: {
        latitude: 47.7623,
        longitude: -122.2054
      },
      areaServed: ["Bothell", "Downtown Bothell", "Canyon Park", "Country Village", "Fitzgerald", "North Creek"]
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Bothell", url: "https://www.seattleprowash.com/bothell-roof-gutter-cleaning" }
    ]);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    window.scrollTo(0, 0);

    return () => {
      cleanupBusiness();
      cleanupBreadcrumb();
    };
  }, []);

  const neighborhoods = [
    "Downtown Bothell",
    "Country Village",
    "Fitzgerald",
    "North Creek",
    "Queensboro",
    "Thrasher's Corner", 
    "Canyon Park",
    "Bothell West"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Roof & Gutter Cleaning in Bothell, WA"
        description="Expert roof cleaning, gutter cleaning, and moss removal in Bothell, WA. Serving all Bothell neighborhoods including Canyon Park and Country Village. 12-month moss-free guarantee. Licensed & insured."
        url="https://www.seattleprowash.com/bothell-roof-gutter-cleaning"
      />
      <Header />
      <EnhancedTrustBar />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Bothell, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Premium Roof & Gutter Cleaning in Bothell
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Protecting Bothell's beautiful homes with expert moss treatment and gutter cleaning services
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
                    Bothell's Premier Exterior Cleaning Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Serving Bothell families and businesses with reliable, professional roof and gutter cleaning services built for our Pacific Northwest climate.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Bothell Focused</h3>
                      <p className="text-gray-600">
                        We understand Bothell's unique weather patterns and the specific maintenance needs of homes in our community.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Trusted Service</h3>
                      <p className="text-gray-600">
                        Bothell homeowners trust our proven track record of excellence and our commitment to customer satisfaction.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Responsive Care</h3>
                      <p className="text-gray-600">
                        Quick response times and flexible scheduling to meet the needs of busy Bothell families.
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
                    Complete Exterior Care for Bothell Properties
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Protecting Bothell homes with complete cleaning and maintenance services designed for our local climate.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Professional Moss Treatment</h3>
                    <p className="text-white/80 mb-4">
                      Advanced moss removal and prevention system that keeps Bothell roofs moss-free for an entire year.
                    </p>
                    <div className="text-bright-orange font-semibold">12-Month Protection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Complete Gutter Service</h3>
                    <p className="text-white/80 mb-4">
                      Thorough gutter cleaning, inspection, and minor repairs to protect your Bothell home from water damage.
                    </p>
                    <div className="text-bright-orange font-semibold">Full Service Approach</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Safe roof cleaning methods that remove stains and organic growth without damaging roofing materials.
                    </p>
                    <div className="text-bright-orange font-semibold">Damage-Free Process</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Brightening</h3>
                    <p className="text-white/80 mb-4">
                      Restore your gutters' appearance by removing oxidation stains and returning them to like-new condition.
                    </p>
                    <div className="text-bright-orange font-semibold">Like-New Appearance</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhoods Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                    Proudly Serving All Bothell Communities
                  </h2>
                  <p className="text-lg text-gray-600">
                    From downtown Bothell to Canyon Park, we provide reliable exterior cleaning services across all neighborhoods.
                  </p>
                </div>

                {/* Simple map placeholder */}
                <div className="bg-primary-teal/10 rounded-lg p-8 mb-8 text-center">
                  <MapPin className="w-12 h-12 text-primary-teal mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-teal mb-2">Bothell Coverage Area</h3>
                  <p className="text-gray-600 mb-4">Full exterior cleaning services for all Bothell neighborhoods</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                      <p className="font-medium text-dark-teal">{neighborhood}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 space-y-2">
                  <p className="text-gray-600">
                    We also serve surrounding areas. Contact us to confirm service availability for your specific location.
                  </p>
                  <p className="text-gray-600">
                    Looking for another location? <a href="/services" className="text-primary-teal hover:underline font-semibold">See all areas we serve</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Bothell */}
          <section className="py-16 bg-moss-green text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Bothell Residents Trust Seattle ProWash
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Community Connection</h3>
                    <p className="text-white/90 mb-6">
                      As part of the Bothell community, we're invested in maintaining the beauty and value of our neighborhood homes.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Weather Expertise</h3>
                    <p className="text-white/90">
                      We understand how Bothell's climate affects homes and tailor our services to provide maximum protection.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Quality Guarantee</h3>
                    <p className="text-white/90 mb-6">
                      Our work is backed by strong guarantees, including our exclusive 12-month moss-free promise.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Professional Standards</h3>
                    <p className="text-white/90">
                      Licensed, insured, and committed to the highest standards of safety and workmanship.
                    </p>
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
                  What Bothell Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard 
                    quote="Great and effective work on our roof in Bothell. Would highly recommend!"
                    author="Raoul Comaduran"
                    service="Roof Cleaning"
                  />
                  <TestimonialCard 
                    quote="Seattle ProWash did an amazing job on my roof! They arrived on time, were very professional, and delivered great results. Highly recommend!"
                    author="Sarcanean Denis"
                    service="Roof Cleaning"
                  />
                  <TestimonialCard 
                    quote="Very nice and efficient! Also noticed my gutters might need to be cleaned. Scheduled on the spot for this service, very convenient."
                    author="Amy Healy"
                    service="Roof & Gutter Cleaning"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Local FAQ Section */}
          <ServiceFAQ 
            faqs={[
              {
                question: "What Bothell neighborhoods do you serve?",
                answer: "We serve all Bothell areas including Downtown Bothell, Canyon Park, Country Village, Fitzgerald, North Creek, Queensboro, and Thrasher's Corner. Same-day estimates available throughout Bothell."
              },
              {
                question: "Why is moss so common on Bothell roofs?",
                answer: "Bothell's proximity to the Sammamish River and North Creek creates higher humidity levels, combined with heavy tree coverage in many neighborhoods. This creates ideal conditions for moss growth, making annual roof cleaning essential."
              },
              {
                question: "How quickly can you service my Bothell home?",
                answer: "Most Bothell customers receive same-day quotes and can be scheduled within 1-2 weeks. Emergency services available for urgent situations like overflowing gutters or heavy moss buildup."
              }
            ]} 
            schemaContext="roof" 
          />

          {/* Nearby Service Areas */}
          <NearbyLocations 
            currentCity="Bothell"
            cities={nearbyCitiesData.bothell}
          />

          {/* Related Resources */}
          <RelatedResources locationName="Bothell" />

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Protect Your Bothell Home Today
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join 200+ satisfied customers. Get your free estimate today and see why Bothell homeowners trust Seattle ProWash.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="prowash-secondary"
                    size="xl"
                    onClick={() => {
                      window.location.href = '/#contact';
                    }}
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
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <span>✓ Same-day estimates</span>
                  <span>✓ Licensed & Insured</span>
                  <span>✓ 12-month moss-free guarantee</span>
                  <span>✓ 200+ 5-star reviews</span>
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

export default Bothell;
