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

const Sammamish = () => {
  useEffect(() => {
    document.title = "Roof & Gutter Cleaning in Sammamish, WA | Seattle ProWash";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Expert roof & gutter cleaning in Sammamish, WA. Professional moss removal & prevention. 12-month moss-free guarantee. Licensed & insured. Same-day quotes."
      );
    }

    // Add geographic meta tags for Sammamish
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
    addOrUpdateMetaTag('geo.placename', 'Sammamish');
    addOrUpdateMetaTag('geo.position', '47.6163;-122.0356');
    addOrUpdateMetaTag('ICBM', '47.6163, -122.0356');

    // Inject LocalBusiness Schema for Sammamish
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Sammamish`,
      description: "Professional roof cleaning, gutter cleaning, and exterior washing services in Sammamish, WA. Serving all Sammamish neighborhoods. 12-month moss-free guarantee.",
      address: {
        ...COMPANY_INFO.address,
        addressLocality: "Sammamish"
      },
      geo: {
        latitude: 47.6163,
        longitude: -122.0356
      },
      areaServed: ["Sammamish", "Klahanie", "Sahalee", "Pine Lake", "Beaver Lake"]
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Sammamish", url: "https://www.seattleprowash.com/service-areas/sammamish" }
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
        title="Roof & Gutter Cleaning in Sammamish, WA"
        description="Expert roof cleaning, gutter cleaning, and moss removal in Sammamish, WA. Professional service for all Sammamish neighborhoods. 12-month guarantee. Licensed & insured."
        url="https://www.seattleprowash.com/service-areas/sammamish"
      />
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Sammamish, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Roof & Gutter Cleaning in Sammamish, WA
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Professional moss treatment and exterior cleaning services for Sammamish homeowners
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
                    Sammamish's Trusted Roof & Gutter Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Serving Sammamish homes with expert care, understanding the unique challenges Pacific Northwest weather brings to your property.
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
                        We understand Sammamish's specific challenges with moss growth and debris accumulation.
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
                        Over 180 satisfied customers across Sammamish and surrounding areas trust our professional service.
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
                        Same-day estimates and quick turnaround times for all Sammamish area properties.
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
                    Comprehensive Cleaning Services for Sammamish Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    From moss treatment to gutter cleaning, we provide complete exterior care for your Sammamish property.
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

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">House Washing</h3>
                    <p className="text-white/80 mb-4">
                      Gentle exterior cleaning that removes algae, mildew, and dirt.
                    </p>
                    <div className="text-bright-orange font-semibold">Safe & Effective</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Pressure Washing</h3>
                    <p className="text-white/80 mb-4">
                      Professional pressure washing for driveways, patios, and walkways.
                    </p>
                    <div className="text-bright-orange font-semibold">Concrete & Surfaces</div>
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
                  What Sammamish Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard 
                    quote="Really happy with the work the Seattle Pro Wash team did to clean the transparent roof of my backyard pergola. It's a pretty high structure and a bit awkward to access, but they had the skills and tools to do the job right."
                    author="Aileen Imperial"
                    service="Pergola Roof Cleaning"
                  />
                  <TestimonialCard 
                    quote="I am happy with the quality of the work done - roof cleaning, gutter cleaning."
                    author="Sheikh Rahman"
                    service="Roof & Gutter Cleaning"
                  />
                  <TestimonialCard 
                    quote="Great quality work and professional service!"
                    author="Abhishek Pandey"
                    service="Professional Service"
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
                  Sammamish Service FAQs
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-dark-teal mb-3">What Sammamish neighborhoods do you serve?</h3>
                      <p className="text-muted-foreground">
                        We serve all Sammamish areas including Klahanie, Sahalee, Pine Lake, Beaver Lake, and all surrounding neighborhoods. Same-day estimates available throughout Sammamish.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-dark-teal mb-3">Do you have experience with Sammamish's larger properties?</h3>
                      <p className="text-muted-foreground">
                        Yes! Sammamish is known for larger homes and properties. We have the equipment and expertise to handle extensive roof areas, long driveways, and multi-level homes common in the area.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-dark-teal mb-3">How does Sammamish's elevation affect moss growth?</h3>
                      <p className="text-muted-foreground">
                        Sammamish's higher elevation and forested areas create ideal conditions for moss. The combination of shade from mature trees and Pacific Northwest rainfall makes annual roof treatment essential for home protection.
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
                  Ready to Protect Your Sammamish Home?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join 180+ satisfied customers. Get your free estimate today and see why Sammamish homeowners trust Seattle ProWash.
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

export default Sammamish;
