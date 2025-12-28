import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MobileBottomBar from "@/components/MobileBottomBar";

const ServiceAreas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceAreas = [
    { name: "Bellevue", path: "/bellevue", featured: true },
    { name: "Bothell", path: "/bothell", featured: true },
    { name: "Kenmore", path: "/kenmore", featured: true },
    { name: "Kirkland", path: "/kirkland", featured: true },
    { name: "Redmond", path: "/redmond", featured: true },
    { name: "Sammamish", path: "/sammamish", featured: true },
    { name: "Woodinville", path: "/woodinville", featured: true },
    { name: "Lynnwood", path: null, featured: false },
    { name: "Mill Creek", path: null, featured: false },
    { name: "Mukilteo", path: null, featured: false },
    { name: "North Seattle", path: null, featured: false },
    { name: "Seattle", path: null, featured: false },
    { name: "Shoreline", path: null, featured: false },
    { name: "Snohomish", path: null, featured: false },
  ].sort((a, b) => a.name.localeCompare(b.name));

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
                  <Badge variant="secondary">Seattle Metro Area</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Serving the Seattle Metro Area
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Based in Kenmore, we provide professional roof cleaning and moss removal services to homeowners within ~15 miles across the Seattle metro area, including Seattle, North Seattle, Bellevue, Redmond, Sammamish, Woodinville, Kirkland, Bothell, Shoreline, Mukilteo, Mill Creek, Lynnwood, Snohomish and other nearby communities.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Same-Day Estimates</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">194+ 5-Star Reviews</span>
                </div>
              </div>
            </div>
          </section>

          {/* Radius Note Section */}
          <section className="py-12 bg-moss-green text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-8 text-center backdrop-blur-sm">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-4">~15-Mile Service Radius from Kenmore</h3>
                  <p className="text-xl text-white/90 mb-6">
                    If you're within approximately 15 miles of Kenmore, we'll come to you! See our full list below or call us to confirm your location.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="secondary"
                      size="lg"
                      onClick={() => window.location.href = '/#contact'}
                    >
                      Get a Fast Quote
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-moss-green"
                      onClick={() => window.location.href = 'tel:206-752-6690'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call 206-752-6690
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Map Visual */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="bg-primary-teal/10 rounded-lg p-12 text-center">
                  <div className="relative max-w-md mx-auto">
                    {/* Center (Kenmore) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-20 h-20 bg-bright-orange rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-white font-bold text-center text-sm">
                          <div>Seattle</div>
                          <div>ProWash</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Radius circle */}
                    <div className="w-80 h-80 mx-auto border-4 border-primary-teal rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-primary-teal/5 rounded-full"></div>
                      
                      {/* City markers around the circle */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-dark-teal">Lynnwood</div>
                      </div>
                      <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <div className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-dark-teal">Redmond</div>
                      </div>
                      <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2">
                        <div className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-dark-teal">Bellevue</div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-dark-teal">Seattle</div>
                      </div>
                      <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2">
                        <div className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-dark-teal">Shoreline</div>
                      </div>
                      <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-dark-teal">Bothell</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-8 text-lg">
                    Approximate 15-mile service radius from our Kenmore base
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cities We Serve */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                    Cities We Serve
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Professional roof cleaning, moss treatment, and gutter cleaning services throughout the Seattle metro area
                  </p>
                </div>

                {/* Featured Cities (with dedicated pages) */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-dark-teal mb-6 text-center">Featured Service Areas</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceAreas.filter(area => area.featured && area.path).map((area) => (
                      <Link key={area.name} to={area.path}>
                        <Card className="border-2 border-transparent hover:border-primary-teal transition-all duration-300 hover:shadow-lg h-full">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <MapPin className="w-6 h-6 text-primary-teal" />
                                <h3 className="text-xl font-bold text-dark-teal">{area.name}</h3>
                              </div>
                              <Badge variant="secondary">View Details</Badge>
                            </div>
                            <p className="text-gray-600 mb-4">
                              Professional roof and gutter services in {area.name}. Click to learn more about our local services.
                            </p>
                            <div className="flex items-center text-sm text-primary-teal font-semibold">
                              Learn More →
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Additional Cities */}
                <div className="bg-off-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-dark-teal mb-6 text-center">Additional Service Areas</h3>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {serviceAreas.filter(area => !area.featured || !area.path).map((area) => (
                      <div key={area.name} className="bg-white p-4 rounded-lg shadow text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4 text-moss-green" />
                          <p className="font-semibold text-dark-teal">{area.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-gray-600 mt-8">
                    Don't see your city? <strong>Call us at <a href="tel:206-752-6690" className="text-primary-teal hover:underline">206-752-6690</a></strong> to confirm we serve your area!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                    Why Seattle Metro Homeowners Choose Us
                  </h2>
                  <p className="text-xl text-gray-600">
                    Trusted expertise serving the Pacific Northwest
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-teal mb-3">Local Expertise</h3>
                    <p className="text-gray-600">
                      Based in Kenmore, we understand the unique challenges of Pacific Northwest weather and moss growth.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-teal mb-3">12-Month Guarantee</h3>
                    <p className="text-gray-600">
                      Our moss treatment comes with a full 12-month moss-free guarantee for your peace of mind.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-teal mb-3">194+ Five-Star Reviews</h3>
                    <p className="text-gray-600">
                      Join hundreds of satisfied customers across the Seattle metro area who trust our service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                  Ready to Protect Your Home?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get your free estimate today and discover why homeowners across the Seattle metro area trust Seattle ProWash.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="cta-orange"
                    size="xl"
                    className="bg-bright-orange hover:bg-bright-orange/90 text-white font-bold"
                    onClick={() => window.location.href = '/#contact'}
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
              </div>
            </div>
          </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default ServiceAreas;
