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
import MobileBottomBar from "@/components/MobileBottomBar";

const Kirkland = () => {
  useEffect(() => {
    document.title = "Roof & Gutter Cleaning in Kirkland, WA | Seattle ProWash";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Expert roof & gutter cleaning in Kirkland, WA. Serving all neighborhoods: Juanita, Totem Lake, Houghton. 12-month moss-free guarantee. Licensed & insured. Same-day quotes."
      );
    }

    // Add geographic meta tags for Kirkland
    const addOrUpdateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addOrUpdateMetaTag('geo.region', 'US-WA');
    addOrUpdateMetaTag('geo.placename', 'Kirkland');
    addOrUpdateMetaTag('geo.position', '47.6815;-122.2087');
    addOrUpdateMetaTag('ICBM', '47.6815, -122.2087');

    // Inject LocalBusiness Schema for Kirkland
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Kirkland`,
      description: "Professional roof cleaning, gutter cleaning, and exterior washing services in Kirkland, WA. Serving all Kirkland neighborhoods including Juanita, Totem Lake, and Houghton. 12-month moss-free guarantee.",
      address: {
        ...COMPANY_INFO.address,
        addressLocality: "Kirkland"
      },
      geo: {
        latitude: 47.6815,
        longitude: -122.2087
      },
      areaServed: ["Kirkland", "Downtown Kirkland", "Juanita", "Totem Lake", "Houghton", "Finn Hill", "Kingsgate"]
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Kirkland", url: "https://www.seattleprowash.com/service-areas/kirkland" }
    ]);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    window.scrollTo(0, 0);

    return () => {
      cleanupBusiness();
      cleanupBreadcrumb();
    };
  }, []);

  const neighborhoods = [
    "Downtown Kirkland",
    "Juanita",
    "Totem Lake",
    "Houghton",
    "Kingsgate",
    "Bridle Trails",
    "Highlands",
    "Rose Hill"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Roof & Gutter Cleaning in Kirkland, WA"
        description="Expert roof cleaning, gutter cleaning, and moss removal in Kirkland, WA. Serving Juanita, Totem Lake, Houghton, and all Kirkland neighborhoods. 12-month guarantee."
        url="https://www.seattleprowash.com/service-areas/kirkland"
      />
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Kirkland, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Expert Roof & Gutter Cleaning Services in Kirkland
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Professional moss treatment and exterior cleaning for Kirkland homeowners since 2022
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Same-Day Estimates</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">180+ 5-Star Reviews</span>
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
                    Kirkland's Preferred Exterior Cleaning Service
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    From waterfront estates to neighborhood homes, we provide premium exterior cleaning services that match Kirkland's high standards.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Kirkland Specialists</h3>
                      <p className="text-gray-600">
                        We understand Kirkland's diverse architecture and unique maintenance requirements for lakefront and hillside properties.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Premium Quality</h3>
                      <p className="text-gray-600">
                        High-end service standards that meet the expectations of discerning Kirkland homeowners.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Concierge Service</h3>
                      <p className="text-gray-600">
                        White-glove service with attention to detail that preserves the beauty of your Kirkland property.
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
                    Comprehensive Exterior Services for Kirkland Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Tailored cleaning solutions that protect and enhance Kirkland's distinctive homes and landscapes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Advanced Moss Treatment</h3>
                    <p className="text-white/80 mb-4">
                      State-of-the-art moss removal and prevention system designed for Kirkland's challenging moss-growing conditions.
                    </p>
                    <div className="text-bright-orange font-semibold">12-Month Guarantee</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Premium Gutter Care</h3>
                    <p className="text-white/80 mb-4">
                      Comprehensive gutter cleaning and maintenance to protect your valuable Kirkland property investment.
                    </p>
                    <div className="text-bright-orange font-semibold">Complete Protection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Restoration</h3>
                    <p className="text-white/80 mb-4">
                      Gentle yet thorough roof cleaning that restores appearance and extends the life of premium roofing materials.
                    </p>
                    <div className="text-bright-orange font-semibold">Value Preservation</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Maintenance Programs</h3>
                    <p className="text-white/80 mb-4">
                      Customized maintenance schedules to keep your Kirkland property looking pristine year-round.
                    </p>
                    <div className="text-bright-orange font-semibold">Ongoing Care</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Luxury House Washing (Add-On)</h3>
                    <p className="text-white/80 mb-4">
                      Specialized gentle washing for high-end siding materials, preserving beauty while removing contaminants.
                    </p>
                    <div className="text-bright-orange font-semibold">Material-Safe Methods</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Estate Pressure Washing (Add-On)</h3>
                    <p className="text-white/80 mb-4">
                      Professional cleaning for driveways, walkways, patios, and outdoor living spaces throughout Kirkland.
                    </p>
                    <div className="text-bright-orange font-semibold">Outdoor Living Care</div>
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
                    Serving All Kirkland Neighborhoods
                  </h2>
                  <p className="text-lg text-gray-600">
                    From downtown condos to waterfront estates, we provide premium exterior cleaning services across all Kirkland communities.
                  </p>
                </div>

                {/* Simple map placeholder */}
                <div className="bg-primary-teal/10 rounded-lg p-8 mb-8 text-center">
                  <MapPin className="w-12 h-12 text-primary-teal mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-teal mb-2">Kirkland Service Territory</h3>
                  <p className="text-gray-600 mb-4">Premium exterior cleaning services for all Kirkland neighborhoods</p>
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
                    We proudly serve the entire Kirkland area, including waterfront properties and surrounding communities.
                  </p>
                  <p className="text-gray-600">
                    Looking for another location? <a href="/services" className="text-primary-teal hover:underline font-semibold">See all areas we serve</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Kirkland */}
          <section className="py-16 bg-moss-green text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Kirkland Homeowners Choose Seattle ProWash
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Premium Standards</h3>
                    <p className="text-white/90 mb-6">
                      We understand the high expectations of Kirkland homeowners and deliver service that exceeds those standards.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Property Protection</h3>
                    <p className="text-white/90">
                      Specialized techniques for high-value properties, ensuring your investment is protected throughout the cleaning process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Comprehensive Insurance</h3>
                    <p className="text-white/90 mb-6">
                      Full licensing and premium insurance coverage provide complete protection for luxury properties.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Proven Excellence</h3>
                    <p className="text-white/90">
                      Years of successful service to Kirkland's most discerning homeowners, with consistent 5-star results.
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
                  What Kirkland Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard 
                    quote="Seattle Pro Wash did a great job on my driveway and made it look like new! Would highly recommend."
                    author="Robert Mintz"
                    service="Driveway Pressure Washing"
                  />
                  <TestimonialCard 
                    quote="Dylan is great to work with. Good price and good service. I used him again this year and even better. Attention to detail and good communication."
                    author="Roger Wallace"
                    service="Roof & Gutter Cleaning"
                  />
                  <TestimonialCard 
                    quote="Great communication, transparent pricing, all around great experience."
                    author="Y Kos"
                    service="Complete Service"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Local FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-12 text-center">
                  Kirkland Service FAQs
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-dark-teal mb-3">What Kirkland neighborhoods do you serve?</h3>
                      <p className="text-muted-foreground">
                        We serve all Kirkland areas including Downtown Kirkland, Juanita, Totem Lake, Houghton, Finn Hill, Kingsgate, and Rose Hill. Same-day estimates available throughout Kirkland.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-dark-teal mb-3">How does Kirkland's waterfront location affect roof maintenance?</h3>
                      <p className="text-muted-foreground">
                        Kirkland's extensive Lake Washington waterfront creates consistently high humidity. This moisture, combined with the area's mature trees and premium homes, makes professional roof and gutter maintenance particularly important for protecting your investment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-dark-teal mb-3">Do you work on high-end Kirkland properties?</h3>
                      <p className="text-muted-foreground">
                        Absolutely. We regularly service Kirkland's finest homes and understand the attention to detail required. Our team is fully insured with comprehensive coverage appropriate for high-value properties.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Enhance Your Kirkland Property Today
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join 180+ satisfied customers. Experience the Seattle ProWash difference with your free estimate.
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
                  <span>✓ 180+ 5-star reviews</span>
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

export default Kirkland;