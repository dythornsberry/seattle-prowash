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

const LakeForestPark = () => {
  useEffect(() => {
    // Inject LocalBusiness Schema for Lake Forest Park
    const businessSchema = generateLocalBusinessSchema({
      ...COMPANY_INFO,
      name: `${COMPANY_INFO.name} - Lake Forest Park`,
      description: "Professional roof cleaning, moss removal, and gutter cleaning in Lake Forest Park, WA. Serving Sheridan Beach, Horizon View, and all local neighborhoods. 12-month moss-free guarantee.",
      url: "https://www.seattleprowash.com/lake-forest-park-roof-gutter-cleaning",
      address: {
        streetAddress: "",
        addressLocality: "Lake Forest Park",
        addressRegion: "WA",
        postalCode: "98155",
        addressCountry: "US"
      },
      geo: {
        latitude: 47.7568,
        longitude: -122.2810
      },
      areaServed: ["Lake Forest Park", "Sheridan Beach", "Horizon View", "Brookside", "Sheridan Heights"],
      rating: {
        ratingValue: 5.0,
        reviewCount: 224
      }
    });
    const cleanupBusiness = injectSchema(businessSchema);

    // Inject Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Service Areas", url: "https://www.seattleprowash.com/service-areas" },
      { name: "Lake Forest Park", url: "https://www.seattleprowash.com/lake-forest-park-roof-gutter-cleaning" }
    ]);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);

    window.scrollTo(0, 0);

    return () => {
      cleanupBusiness();
      cleanupBreadcrumb();
    };
  }, []);

  const neighborhoods = [
    "Sheridan Beach",
    "Sheridan Heights",
    "Horizon View",
    "Blue Heron",
    "Brookside",
    "Lake Forest Park Estates",
    "Towne Centre Area",
    "Ballinger"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roof & Gutter Cleaning in Lake Forest Park, WA"
        description="Expert roof cleaning, moss removal, and gutter cleaning in Lake Forest Park, WA. Serving Sheridan Beach, Horizon View & all neighborhoods. 12-month guarantee. Licensed & insured."
        url="https://www.seattleprowash.com/lake-forest-park-roof-gutter-cleaning"
      />
      <Header />

        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-orange/20 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Lake Forest Park, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Professional Roof & Gutter Cleaning in Lake Forest Park
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Moss removal and gutter cleaning built for the most tree-covered city on the north end
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Fast Quotes</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">224 5-Star Reviews</span>
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
                    Lake Forest Park's Roof & Gutter Specialists Next Door
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We're based in Kenmore, one town over on Bothell Way. All those firs, cedars, and maples that make Lake Forest Park beautiful also drop needles in your gutters and shade your roof — which is exactly the work we do all day.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Minutes Away</h3>
                      <p className="text-gray-600">
                        Our home base in Kenmore is right next door, so scheduling is easy and we're often already working in your neighborhood.
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
                        224 five-star Google reviews from homeowners across Lake Forest Park, Kenmore, Shoreline, and the greater Seattle area.
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
                        Fast quotes and quick scheduling for Lake Forest Park homes, from Sheridan Beach up to Horizon View.
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
                    Complete Cleaning Services for Lake Forest Park Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Heavy tree cover means moss and full gutters come with the territory here. We handle both.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Moss Treatment</h3>
                    <p className="text-white/80 mb-4">
                      Shaded roofs under mature evergreens grow moss fast. Our treatment kills it at the root and keeps it from coming back for 12 months.
                    </p>
                    <div className="text-bright-orange font-semibold">12-Month Guarantee</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Fir needles clog Lake Forest Park gutters year-round, not just in fall. Full hand-clean with downspout flush and roof blow-off included.
                    </p>
                    <div className="text-bright-orange font-semibold">Debris Removal & Inspection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Soft-Wash Roof Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Gentle roof cleaning that removes moss, algae, and debris without high pressure — safe for asphalt, composite, and metal roofs.
                    </p>
                    <div className="text-bright-orange font-semibold">Shingle-Safe Method</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Brightening</h3>
                    <p className="text-white/80 mb-4">
                      Remove the black streaks and oxidation from your gutters' exterior and bring back that like-new look.
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
                    Serving All Lake Forest Park Neighborhoods
                  </h2>
                  <p className="text-lg text-gray-600">
                    From the lakefront at Sheridan Beach to the hillside streets above Bothell Way, we cover all of Lake Forest Park.
                  </p>
                </div>

                {/* Simple map placeholder */}
                <div className="bg-primary-teal/10 rounded-lg p-8 mb-8 text-center">
                  <MapPin className="w-12 h-12 text-primary-teal mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-teal mb-2">Lake Forest Park Service Area</h3>
                  <p className="text-gray-600 mb-4">Professional roof and gutter cleaning across all Lake Forest Park neighborhoods</p>
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
                    Looking for another location? <a href="/service-areas" className="text-primary-teal hover:underline font-semibold">See all areas we serve</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Lake Forest Park */}
          <section className="py-16 bg-moss-green text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Lake Forest Park Homeowners Choose Seattle ProWash
                </h2>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ We Know Tree-Heavy Properties</h3>
                    <p className="text-white/90 mb-6">
                      Lake Forest Park has some of the densest tree canopy in the area. We clean roofs and gutters under mature evergreens every week, and we know what that shade and needle drop does to a home.
                    </p>

                    <h3 className="text-xl font-bold mb-4">✓ Proven Results</h3>
                    <p className="text-white/90">
                      Our 12-month moss-free guarantee is backed by years of successful treatments on homes just like yours, one town over in every direction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">✓ Licensed & Insured</h3>
                    <p className="text-white/90 mb-6">
                      Full licensing and complete insurance protect your property and give you peace of mind.
                    </p>

                    <h3 className="text-xl font-bold mb-4">✓ Customer Satisfaction</h3>
                    <p className="text-white/90">
                      224 five-star reviews from homeowners across Lake Forest Park and the greater Seattle area.
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
                  What Our Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <TestimonialCard
                    quote="If you miss good old fashion quality service, you will find it here. These guys are the best - on time, quality workmanship, and at a fair price."
                    author="Mary D."
                    service="Roof & Gutter Cleaning"
                  />
                  <TestimonialCard
                    quote="I had 5 different quotes for gutter & roof cleaning, and Dylan was by far the best."
                    author="Melanie C."
                    service="Gutter & Roof Cleaning"
                  />
                  <TestimonialCard
                    quote="Great company and easy to work with. I don't dare to step on my roof, so I am happy to pay someone else to do it."
                    author="Matt T."
                    service="Roof Cleaning"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Local FAQ Section */}
          <ServiceFAQ
            faqs={[
              {
                question: "What Lake Forest Park neighborhoods do you serve?",
                answer: "We serve all of Lake Forest Park including Sheridan Beach, Sheridan Heights, Horizon View, Blue Heron, Brookside, Lake Forest Park Estates, Ballinger, and the streets around Towne Centre. Fast quotes available throughout the city."
              },
              {
                question: "Why do Lake Forest Park roofs grow so much moss?",
                answer: "Lake Forest Park is one of the most heavily treed cities in the Seattle area. Mature firs, cedars, and maples keep roofs shaded and damp for much of the year, which is exactly the environment moss loves. Regular treatment and gutter cleaning are the best defense."
              },
              {
                question: "How quickly can you get to a Lake Forest Park home?",
                answer: "Fast — our shop is in neighboring Kenmore, and we drive through Lake Forest Park on Bothell Way constantly. Most quotes come back the same day and jobs are typically scheduled within the week."
              }
            ]}
            schemaContext="roof"
          />

          {/* Nearby Service Areas */}
          <NearbyLocations
            currentCity="Lake Forest Park"
            cities={nearbyCitiesData["lake-forest-park"]}
          />

          {/* Related Resources */}
          <RelatedResources locationName="Lake Forest Park" />

          {/* Quote Form */}
          <div id="contact" className="bg-off-white">
            <TwoStepQuoteForm />
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Protect Your Lake Forest Park Home?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get a fast quote today and see why homeowners across Lake Forest Park and Kenmore trust Seattle ProWash.
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
                  <span>✓ 224 5-star reviews</span>
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

export default LakeForestPark;
