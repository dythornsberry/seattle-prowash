import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MobileBottomBar from "@/components/MobileBottomBar";

const RoofGutterCleaningImportance = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Header */}
          <section className="bg-primary-teal text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link to="/resources" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Resources
                </Link>
                
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Maintenance</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      January 15, 2024
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Regular Roof and Gutter Cleaning Matters
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  In the Pacific Northwest, regular roof and gutter maintenance is essential for protecting your home investment.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>The Hidden Costs of Neglect</h2>
                  <p>
                    Many Pacific Northwest homeowners underestimate the importance of regular roof and gutter cleaning. With our region's heavy rainfall, moss growth, and debris accumulation, your home faces unique challenges that require proactive maintenance.
                  </p>

                  <h3>Water Damage Prevention</h3>
                  <p>
                    Clogged gutters can cause water to overflow and pool around your home's foundation, leading to costly structural damage. Regular cleaning ensures proper water flow away from your home, protecting your foundation, basement, and landscaping.
                  </p>

                  <h3>Roof Longevity</h3>
                  <p>
                    Moss, algae, and debris significantly shorten your roof's lifespan. Moss holds moisture against roofing materials, causing rot and deterioration. Professional cleaning and treatment can extend your roof's life by years.
                  </p>

                  <h3>Energy Efficiency</h3>
                  <p>
                    A clean roof reflects sunlight more effectively, helping maintain comfortable indoor temperatures and reducing energy costs. Dark stains from algae and moss can increase heat absorption, making your cooling system work harder.
                  </p>

                  <h2>Recommended Maintenance Schedule</h2>
                  <p>
                    For Pacific Northwest homes, Seattle ProWash recommends:
                  </p>
                  <ul>
                    <li><strong>Annual roof cleaning</strong> to remove moss, algae, and debris</li>
                    <li><strong>Biannual gutter cleaning</strong> (spring and fall) to prevent clogs</li>
                    <li><strong>Quarterly inspections</strong> to catch issues early</li>
                    <li><strong>Moss treatment</strong> every 12 to 18 months for prevention</li>
                  </ul>

                  <h2>Professional vs. DIY</h2>
                  <p>
                    While some homeowners attempt roof and gutter cleaning themselves, professional service offers several advantages:
                  </p>
                  <ul>
                    <li>Safety expertise and proper equipment</li>
                    <li>Comprehensive moss treatment that prevents regrowth</li>
                    <li>Damage assessment and early problem detection</li>
                    <li>Insurance and liability protection</li>
                  </ul>

                  <h2>The Seattle ProWash Difference</h2>
                  <p>
                    Our team understands the unique challenges of Pacific Northwest weather. We use specialized equipment and eco-friendly treatments to clean and protect your roof while ensuring the safety of your landscaping and family.
                  </p>
                </div>

                {/* Related Services */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Our Professional Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/roof-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Roof Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Professional moss removal and roof maintenance</p>
                    </Link>
                    <Link to="/gutter-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Gutter Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive gutter cleaning and protection</p>
                    </Link>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/service-areas" className="text-brand-orange hover:underline font-semibold">
                      View All Service Areas →
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-moss-green text-white rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Protect Your Home Investment</h3>
                  <p className="text-lg mb-6">
                    Don't wait for costly damage. Schedule your professional roof and gutter cleaning today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="secondary"
                      size="lg"
                      onClick={() => {
                        window.location.href = '/#contact';
                      }}
                    >
                      Get a Fast Quote
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-moss-green"
                      onClick={() => window.location.href = 'tel:206-752-6690'}
                    >
                      Call 206-752-6690
                    </Button>
                  </div>
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

export default RoofGutterCleaningImportance;