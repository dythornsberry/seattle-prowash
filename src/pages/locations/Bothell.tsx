import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MobileBottomBar from "@/components/MobileBottomBar";

const Bothell = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <Header />
        
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
                  Protecting Bothell's beautiful homes with expert moss treatment and exterior cleaning services
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
                    Bothell's Premier Exterior Cleaning Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Serving Bothell families and businesses with reliable, professional roof and gutter cleaning services tailored to our Pacific Northwest climate.
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
                    Protecting Bothell homes with comprehensive cleaning and maintenance services designed for our local climate.
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
                    <h3 className="text-xl font-bold mb-4">Commercial Services</h3>
                    <p className="text-white/80 mb-4">
                      Professional exterior cleaning for Bothell businesses, maintaining curb appeal and property value.
                    </p>
                    <div className="text-bright-orange font-semibold">Business Solutions</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">House Washing (Add-On)</h3>
                    <p className="text-white/80 mb-4">
                      Gentle washing techniques that safely clean siding, removing moss, algae, and years of accumulated grime.
                    </p>
                    <div className="text-bright-orange font-semibold">Gentle & Effective</div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Concrete Cleaning (Add-On)</h3>
                    <p className="text-white/80 mb-4">
                      Professional pressure washing for driveways, walkways, and patios throughout Bothell neighborhoods.
                    </p>
                    <div className="text-bright-orange font-semibold">Surface Restoration</div>
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
                  <p className="text-gray-600 mb-4">Comprehensive exterior cleaning services for all Bothell neighborhoods</p>
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
                      Our work is backed by comprehensive guarantees, including our exclusive 12-month moss-free promise.
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

          {/* CTA Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                  Protect Your Bothell Home Today
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join hundreds of satisfied Bothell homeowners who trust Seattle ProWash for their exterior cleaning needs. Get your free estimate today.
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
  );
};

export default Bothell;