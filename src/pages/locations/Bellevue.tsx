import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MobileBottomBar from "@/components/MobileBottomBar";

const Bellevue = () => {
  useEffect(() => {
    document.title = "Roof & Gutter Cleaning in Bellevue, WA | Seattle ProWash";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Expert roof & gutter cleaning in Bellevue, WA. Professional moss removal & prevention. 12-month moss-free guarantee. Licensed & insured. Same-day quotes."
      );
    }

    // Add geographic meta tags for Bellevue
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
    addOrUpdateMetaTag('geo.placename', 'Bellevue');
    addOrUpdateMetaTag('geo.position', '47.6101;-122.2015');
    addOrUpdateMetaTag('ICBM', '47.6101, -122.2015');

    window.scrollTo(0, 0);
  }, []);

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
                  <Badge variant="secondary">Bellevue, WA</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Roof & Gutter Cleaning in Bellevue, WA
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Professional moss treatment and exterior cleaning services for Bellevue homeowners
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
                    Bellevue's Trusted Roof & Gutter Specialists
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Serving Bellevue homes with expert care, understanding the unique challenges Pacific Northwest weather brings to your property.
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
                        We understand Bellevue's specific challenges with moss growth and debris accumulation.
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
                        Over 180 satisfied customers across Bellevue and surrounding areas trust our professional service.
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
                        Same-day estimates and quick turnaround times for all Bellevue area properties.
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
                    Comprehensive Cleaning Services for Bellevue Homes
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    From moss treatment to gutter cleaning, we provide complete exterior care for your Bellevue property.
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

          {/* CTA Section */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                  Ready to Protect Your Bellevue Home?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get your free estimate today and discover why Bellevue homeowners trust Seattle ProWash.
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

export default Bellevue;
