import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";

const Kirkland = () => {
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
                    <div className="text-moss-green font-semibold">12-Month Guarantee</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Premium Gutter Care</h3>
                    <p className="text-white/80 mb-4">
                      Comprehensive gutter cleaning and maintenance to protect your valuable Kirkland property investment.
                    </p>
                    <div className="text-moss-green font-semibold">Complete Protection</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Roof Restoration</h3>
                    <p className="text-white/80 mb-4">
                      Gentle yet thorough roof cleaning that restores appearance and extends the life of premium roofing materials.
                    </p>
                    <div className="text-moss-green font-semibold">Value Preservation</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Maintenance Programs</h3>
                    <p className="text-white/80 mb-4">
                      Customized maintenance schedules to keep your Kirkland property looking pristine year-round.
                    </p>
                    <div className="text-moss-green font-semibold">Ongoing Care</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Luxury House Washing (Add-On)</h3>
                    <p className="text-white/80 mb-4">
                      Specialized gentle washing for high-end siding materials, preserving beauty while removing contaminants.
                    </p>
                    <div className="text-moss-green font-semibold">Material-Safe Methods</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Estate Pressure Washing (Add-On)</h3>
                    <p className="text-white/80 mb-4">
                      Professional cleaning for driveways, walkways, patios, and outdoor living spaces throughout Kirkland.
                    </p>
                    <div className="text-moss-green font-semibold">Outdoor Living Care</div>
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

          {/* CTA Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                  Enhance Your Kirkland Property Today
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Experience the Seattle ProWash difference. Get your complimentary estimate and discover why Kirkland's finest homes trust our expertise.
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

export default Kirkland;