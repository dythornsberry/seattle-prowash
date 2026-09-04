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

const Kenmore = () => {
  useEffect(() => {
    // Inject LocalBusiness Schema for Kenmore
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Kenmore`,
      description: "Professional roof cleaning and gutter cleaning services in Kenmore, WA. Serving Kenmore Highlands, Moorlands, and all local neighborhoods. 12-month moss-free guarantee.",
      url: "https://www.seattleprowash.com/kenmore-roof-gutter-cleaning",
      address: {
        ...COMPANY_INFO.address,
        addressLocality: "Kenmore"
      },
      geo: {
        latitude: 47.7574,
        longitude: -122.2429
      },
      areaServed: ["Kenmore", "Kenmore Highlands", "Moorlands", "Inglewood", "Kenmore Village"]
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Kenmore", url: "https://www.seattleprowash.com/kenmore-roof-gutter-cleaning" }
    ]);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    window.scrollTo(0, 0);

    return () => {
      cleanupBusiness();
      cleanupBreadcrumb();
    };
  }, []);

  const neighborhoods = [
    "Kenmore Highlands",
    "Moorlands",
    "Inglewood",
    "Kenmore Village", 
    "North Rose Hill",
    "South Kenmore",
    "Kenmore City Center",
    "Finn Hill"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Roof & Gutter Cleaning in Kenmore, WA"
        description="Expert roof cleaning, gutter cleaning, and moss removal in Kenmore, WA. Serving Kenmore Highlands, Moorlands, and all local neighborhoods. 12-month guarantee. Licensed & insured."
        url="https://www.seattleprowash.com/kenmore-roof-gutter-cleaning"
      />
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-orange/20 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Kenmore, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Professional Roof & Gutter Cleaning in Kenmore
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Trusted moss treatment and exterior cleaning services for Kenmore homeowners
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Fast Quotes</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">233 5-Star Reviews</span>
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
                    Kenmore's Trusted Roof & Gutter Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Based right here in Kenmore, we understand the unique challenges Pacific Northwest weather brings to your home's exterior.
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
                        Based in Kenmore, we know the specific challenges of moss growth and debris accumulation in our area.
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
                        233 five-star reviews and counting — homeowners across Kenmore and surrounding areas trust our professional service.
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
                        Fast quotes and quick scheduling for all Kenmore area properties.
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
                    Complete Cleaning Services for Kenmore Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    From moss treatment to gutter cleaning, we provide complete exterior care for your Kenmore property.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Moss Treatment</h3>
                    <p className="text-white/80 mb-4">
                      Our specialized moss treatment kills existing growth and prevents regrowth for 12 months, perfect for Kenmore's moss-prone climate.
                    </p>
                    <div className="text-bright-orange font-semibold">12-Month Guarantee</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Complete gutter cleaning and inspection to protect your Kenmore home from water damage and foundation issues.
                    </p>
                    <div className="text-bright-orange font-semibold">Debris Removal & Inspection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Moss Protection</h3>
                    <p className="text-white/80 mb-4">
                      Gentle roof cleaning that removes stains, algae, and organic growth without the damage of pressure washing.
                    </p>
                    <div className="text-bright-orange font-semibold">Shingle-Safe Method</div>
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
                    Serving All Kenmore Neighborhoods
                  </h2>
                  <p className="text-lg text-gray-600">
                    We provide professional roof and gutter cleaning services throughout Kenmore and surrounding areas.
                  </p>
                </div>

                {/* Simple map placeholder */}
                <div className="bg-primary-teal/10 rounded-lg p-8 mb-8 text-center">
                  <MapPin className="w-12 h-12 text-primary-teal mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-teal mb-2">Kenmore Service Area</h3>
                  <p className="text-gray-600 mb-4">Professional exterior cleaning services across all Kenmore neighborhoods</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                      <p className="font-medium text-dark-teal">{neighborhood}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 space-y-2">
                  <p className="text-gray-600 mb-3">
                    Don't see your neighborhood? We likely still serve you. Call us today!
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = 'tel:+12067526690'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call or Text 206-752-6690
                  </Button>
                  <p className="text-gray-600 mt-4">
                    Looking for another location? <a href="/services" className="text-primary-teal hover:underline font-semibold">See all areas we serve</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Kenmore */}
          <section className="py-16 bg-moss-green text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Kenmore Homeowners Choose Seattle ProWash
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Local Knowledge</h3>
                    <p className="text-white/90 mb-6">
                      Based in Kenmore, we understand local climate challenges and the specific moss and algae issues common to our area.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Proven Results</h3>
                    <p className="text-white/90">
                      Our 12-month moss-free guarantee is backed by years of successful treatments across Kenmore neighborhoods.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Licensed & Insured</h3>
                    <p className="text-white/90 mb-6">
                      Full licensing and complete insurance protect your property and give you peace of mind.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Customer Satisfaction</h3>
                    <p className="text-white/90">
                      233 five-star reviews from satisfied customers across Kenmore and the greater Seattle area.
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
                  What Kenmore Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard 
                    quote="Dylan was very thorough with his works. Easy to communicate and schedule. My roof is nice and clean. I'll use the service again!"
                    author="Mandy Muk"
                    service="Roof Cleaning"
                  />
                  <TestimonialCard 
                    quote="If you are looking for roof or gutter cleaning services in Kenmore and nearby cities, look no further; call Seattle ProWash instead. Excellent service."
                    author="Thang Tuang"
                    service="Roof & Gutter Cleaning"
                  />
                  <TestimonialCard 
                    quote="Thank you for a good job cleaning my roof and gutter today Dylan. Will definitely contact you again for future services! Highly recommend: can't beat price!"
                    author="Hien H"
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
                question: "What Kenmore neighborhoods do you serve?",
                answer: "We serve all Kenmore areas including Kenmore Highlands, Moorlands, Inglewood, Kenmore Village, North Rose Hill, and South Kenmore. Fast quotes available throughout Kenmore."
              },
              {
                question: "Why is Lake Washington's proximity important for Kenmore homes?",
                answer: "Kenmore's location on Lake Washington creates higher moisture levels year-round. Combined with mature tree coverage, this makes annual roof and gutter cleaning essential to prevent moss damage and water intrusion."
              },
              {
                question: "How long have you been serving Kenmore?",
                answer: "We've been serving Kenmore homeowners for years, building lasting relationships with repeat customers. Our deep understanding of local weather patterns helps us provide the best preventative care for your home."
              }
            ]} 
            schemaContext="roof" 
          />

          {/* Nearby Service Areas */}
          <NearbyLocations 
            currentCity="Kenmore"
            cities={nearbyCitiesData.kenmore}
          />

          {/* Related Resources */}
          <RelatedResources locationName="Kenmore" />

          {/* Quote Form */}
          <div id="contact" className="bg-off-white">
            <TwoStepQuoteForm />
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Protect Your Kenmore Home?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join 233 satisfied customers. Get a fast quote today and see why Kenmore homeowners trust Seattle ProWash.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="prowash-secondary"
                    size="xl"
                    onClick={navigateToContact}
                  >
                    GET FAST QUOTE
                  </Button>
                  <Button 
                    variant="prowash-outline"
                    size="xl"
                    onClick={() => window.location.href = 'tel:206-752-6690'}
                  >
                    Call or Text 206-752-6690
                  </Button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <span>✓ Fast quotes</span>
                  <span>✓ Licensed & Insured</span>
                  <span>✓ 12-month moss-free guarantee</span>
                  <span>✓ 233 5-star reviews</span>
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

export default Kenmore;
