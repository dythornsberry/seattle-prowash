import { useEffect } from "react";
import { MapPin, Shield, Clock, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import NearbyLocations from "@/components/NearbyLocations";
import RelatedResources from "@/components/RelatedResources";
import { SEOHead } from "@/components/SEOHead";
import { generateLocalBusinessSchema, injectSchema, COMPANY_INFO } from "@/utils/schema";
import { nearbyCitiesData } from "@/lib/locationNearbyCities";

const Seattle = () => {
  useEffect(() => {
    // Generate schemas
    const localBusinessSchema = generateLocalBusinessSchema({
      name: "Seattle Pro-Wash - Professional Roof & Gutter Cleaning",
      description: "Leading roof cleaning, gutter cleaning, and moss removal services in Seattle, WA. Serving Queen Anne, Capitol Hill, Ballard, and all Seattle neighborhoods.",
      url: "https://seattleprowash.com/seattle",
      telephone: COMPANY_INFO.telephone,
      address: {
        streetAddress: COMPANY_INFO.address.streetAddress,
        addressLocality: "Seattle",
        addressRegion: "WA",
        postalCode: "98101",
        addressCountry: "US"
      },
      geo: {
        latitude: 47.6062,
        longitude: -122.3321
      },
      areaServed: ["Seattle", "Queen Anne", "Capitol Hill", "Ballard", "Fremont", "Wallingford", "University District", "Green Lake"],
      rating: {
        ratingValue: 4.9,
        reviewCount: 487
      }
    });

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${COMPANY_INFO.url}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Service Areas",
          "item": `${COMPANY_INFO.url}/service-areas`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Seattle",
          "item": `${COMPANY_INFO.url}/seattle`
        }
      ]
    };

    // Inject schemas
    const cleanupBusiness = injectSchema(localBusinessSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    return () => {
      cleanupBusiness();
      cleanupBreadcrumb();
    };
  }, []);

  return (
    <>
      <SEOHead 
        title="Seattle Roof Cleaning & Gutter Cleaning | Pro-Wash Services"
        description="Professional roof cleaning, gutter cleaning & moss removal in Seattle, WA. Serving Queen Anne, Capitol Hill, Ballard & all neighborhoods. Free quotes, licensed & insured."
        url="https://seattleprowash.com/seattle"
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-brand-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-prowash-teal/20 via-transparent to-transparent" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-prowash-teal" />
                <span className="text-prowash-teal font-semibold">Serving Seattle, WA</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Seattle's Trusted Roof & Gutter Cleaning Experts
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Professional roof cleaning, gutter cleaning, and moss removal services throughout Seattle. 
                From Queen Anne to Capitol Hill, Ballard to Green Lake - we keep Seattle homes pristine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-prowash-teal hover:bg-prowash-teal/90 text-brand-navy font-semibold">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Call (206) 866-3728
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-prowash-teal" />
                <div>
                  <div className="font-semibold">Licensed & Insured</div>
                  <div className="text-sm text-muted-foreground">Full Coverage</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-prowash-teal" />
                <div>
                  <div className="font-semibold">10+ Years</div>
                  <div className="text-sm text-muted-foreground">Seattle Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-prowash-teal" />
                <div>
                  <div className="font-semibold">487+ Reviews</div>
                  <div className="text-sm text-muted-foreground">4.9 Star Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-prowash-teal" />
                <div>
                  <div className="font-semibold">All Neighborhoods</div>
                  <div className="text-sm text-muted-foreground">Seattle Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Seattle Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive exterior cleaning solutions for Seattle's unique climate
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-prowash-teal transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Roof Cleaning</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert moss, algae, and lichen removal using safe soft-wash techniques. Perfect for Seattle's damp climate.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Composition, metal & tile roofs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Moss & algae treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Preventative treatments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-prowash-teal transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Gutter Cleaning</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete gutter cleaning and maintenance to handle Seattle's heavy rainfall.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Debris removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Downspout flushing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Gutter brightening</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-prowash-teal transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Moss Treatment</h3>
                  <p className="text-muted-foreground mb-4">
                    Targeted moss removal and prevention for roofs, walkways, and driveways.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Roof moss removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Concrete cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0 mt-0.5" />
                      <span>Long-term prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seattle Neighborhoods */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seattle Neighborhoods We Serve</h2>
              <p className="text-xl text-muted-foreground">
                Professional service throughout all Seattle areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Queen Anne", "Capitol Hill", "Ballard", "Fremont",
                "Wallingford", "University District", "Green Lake", "Magnolia",
                "West Seattle", "Beacon Hill", "Ravenna", "Madison Park",
                "Laurelhurst", "Montlake", "Leschi", "Madrona"
              ].map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                  <CheckCircle2 className="w-5 h-5 text-prowash-teal shrink-0" />
                  <span className="font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Seattle Customers Say</h2>
              <p className="text-xl text-muted-foreground">
                Real reviews from your neighbors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard
                quote="Our Capitol Hill Victorian needed serious moss removal. Pro-Wash did an incredible job - roof looks brand new! They were respectful of our historic home and the results are outstanding."
                author="Michael Chen"
                service="Queen Anne, Seattle"
              />
              <TestimonialCard
                quote="Best gutter cleaning service in Seattle! They handle our Ballard craftsman home twice a year. Always on time, thorough, and reasonably priced. Highly recommend!"
                author="Jennifer Martinez"
                service="Ballard, Seattle"
              />
              <TestimonialCard
                quote="Professional crew, great communication, and fair pricing. They cleaned our roof and gutters in one day. The difference is amazing - no more moss! Will definitely use again."
                author="David Thompson"
                service="Green Lake, Seattle"
              />
            </div>
          </div>
        </section>

        {/* Local FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seattle Homeowner FAQs</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about roof & gutter services in Seattle
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">How often should Seattle homes have roof cleaning?</h3>
                  <p className="text-muted-foreground">
                    Due to Seattle's wet climate and heavy tree coverage, we recommend roof cleaning every 1-2 years. 
                    Homes with significant tree coverage (especially in neighborhoods like Queen Anne, Capitol Hill, or 
                    Wallingford) may benefit from annual cleaning to prevent moss buildup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Is soft-wash safe for Seattle's historic homes?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Soft-wash is the preferred method for Seattle's many historic homes, especially in 
                    neighborhoods like Capitol Hill and Queen Anne. It's gentler than pressure washing and won't damage 
                    delicate shingles or historic materials while still effectively removing moss and algae.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Do you work during Seattle's rainy season?</h3>
                  <p className="text-muted-foreground">
                    Yes! We operate year-round, though we prefer dry conditions when possible. Seattle's mild winters 
                    allow us to clean roofs and gutters even in cooler months. We monitor weather closely and will 
                    reschedule if conditions aren't safe. Fall is actually an ideal time for gutter cleaning before 
                    heavy winter rains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Seattle Quote</h2>
              <p className="text-xl text-muted-foreground">
                Fast response times for all Seattle neighborhoods
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* Nearby Service Areas */}
        <NearbyLocations 
          currentCity="Seattle"
          cities={nearbyCitiesData.seattle}
        />

        {/* Related Resources */}
        <RelatedResources locationName="Seattle" />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-brand-navy text-white">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Restore Your Seattle Home?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join hundreds of satisfied Seattle homeowners who trust Pro-Wash for their exterior cleaning needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="prowash-secondary">
                Get Free Estimate
              </Button>
              <Button size="lg" variant="prowash-outline">
                Call (206) 866-3728
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Seattle;
