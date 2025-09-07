import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";

const Kenmore = () => {
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
      <StickyTopBar />
      <div style={{ paddingTop: '60px' }}>
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6" />
                  <Badge variant="secondary">Kenmore, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Roof & Gutter Cleaning in Kenmore
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Trusted moss treatment and exterior cleaning services for Kenmore homeowners
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
                        Over 180 satisfied customers across Kenmore and surrounding areas trust our professional service.
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
                        Same-day estimates and quick turnaround times for all Kenmore area properties.
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
                    Comprehensive Cleaning Services for Kenmore Homes
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
                    <div className="text-moss-green font-semibold">12-Month Guarantee</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Cleaning</h3>
                    <p className="text-white/80 mb-4">
                      Complete gutter cleaning and inspection to protect your Kenmore home from water damage and foundation issues.
                    </p>
                    <div className="text-moss-green font-semibold">Debris Removal & Inspection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">House Soft Washing</h3>
                    <p className="text-white/80 mb-4">
                      Gentle yet effective exterior cleaning that removes algae, mildew, and dirt without damaging your home's surfaces.
                    </p>
                    <div className="text-moss-green font-semibold">Safe & Effective</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Pressure Washing</h3>
                    <p className="text-white/80 mb-4">
                      Professional pressure washing for driveways, patios, decks, and walkways around your Kenmore property.
                    </p>
                    <div className="text-moss-green font-semibold">Concrete & Surfaces</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Soft Washing</h3>
                    <p className="text-white/80 mb-4">
                      Gentle roof cleaning that removes stains, algae, and organic growth without the damage of pressure washing.
                    </p>
                    <div className="text-moss-green font-semibold">Shingle-Safe Method</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Gutter Brightening</h3>
                    <p className="text-white/80 mb-4">
                      Restore your gutters' appearance by removing oxidation stains and returning them to like-new condition.
                    </p>
                    <div className="text-moss-green font-semibold">Like-New Appearance</div>
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

                <div className="text-center mt-8">
                  <p className="text-gray-600">
                    Don't see your neighborhood? We serve the greater Kenmore area. Call to confirm service to your location.
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
                      Full licensing and comprehensive insurance protect your property and give you peace of mind.
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">✓ Customer Satisfaction</h3>
                    <p className="text-white/90">
                      Over 180 five-star reviews from satisfied customers across Kenmore and the greater Seattle area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                  Ready to Protect Your Kenmore Home?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get your free estimate today and discover why Kenmore homeowners trust Seattle ProWash for their roof and gutter cleaning needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button 
                    variant="cta-orange"
                    size="xl"
                    className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
                    onClick={() => {
                      window.location.href = '/#contact';
                    }}
                  >
                    GET YOUR FREE QUOTE TODAY
                  </Button>
                  <Button 
                    variant="outline"
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
    </div>
  );
};

export default Kenmore;