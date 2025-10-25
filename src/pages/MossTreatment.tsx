import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Clock, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MobileBottomBar from "@/components/MobileBottomBar";

const MossTreatment = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-primary-teal text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  Moss Treatment Specialists
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Roof Moss Treatment in Kenmore, Bothell & Kirkland
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Protect your roof investment with our comprehensive moss removal and prevention service
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 px-4 py-2 rounded-full">12-Month Moss-Free Guarantee</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Licensed & Insured</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full">Same-Day Estimates</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Moss Removal Matters */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">
                    Why Moss Removal is Critical for Your Roof
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    In the Pacific Northwest, moss growth isn't just unsightly—it's a serious threat to your roof's longevity and your home's protection.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Water Damage Prevention</h3>
                      <p className="text-gray-600">
                        Moss holds moisture against your roof, leading to rot, leaks, and costly structural damage over time.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Roof Longevity</h3>
                      <p className="text-gray-600">
                        Regular moss treatment can extend your roof's lifespan by preventing premature deterioration of shingles and tiles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dark-teal">Home Value Protection</h3>
                      <p className="text-gray-600">
                        A clean, moss-free roof maintains your home's curb appeal and protects your property investment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-16 bg-dark-teal text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our Professional Moss Treatment Process
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    We use a comprehensive approach that not only removes existing moss but prevents regrowth for up to 12 months.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-4">Inspection & Assessment</h3>
                    <p className="text-white/80">
                      We thoroughly inspect your roof to identify moss growth patterns and potential problem areas.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-4">Debris Removal</h3>
                    <p className="text-white/80">
                      We carefully brush or blow off loose moss, debris, and organic matter without damaging your roof.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-4">Treatment Application</h3>
                    <p className="text-white/80">
                      We apply our professional-grade moss treatment that kills existing growth and creates a protective barrier.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      4
                    </div>
                    <h3 className="text-xl font-bold mb-4">Prevention & Guarantee</h3>
                    <p className="text-white/80">
                      Our treatment continues working for months, preventing regrowth with our 12-month moss-free guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="py-16 bg-moss-green text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-moss-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  12-Month Moss-Free Guarantee
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  We're so confident in our moss treatment process that we guarantee your roof will remain moss-free for a full 12 months. If moss returns within that time, we'll retreat your roof at no additional cost.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">✓</div>
                    <p>Professional-grade treatment</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">✓</div>
                    <p>12-month protection</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">✓</div>
                    <p>Backed by our guarantee</p>
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
                  Ready to Protect Your Roof from Moss?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Don't let moss damage your biggest investment. Get your free estimate today and discover why homeowners in Kenmore, Bothell, and Kirkland trust Seattle ProWash for their moss treatment needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <p className="text-sm text-gray-500 mt-4">
                  Same-day estimates • Licensed & Insured • 180+ 5-star reviews
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default MossTreatment;