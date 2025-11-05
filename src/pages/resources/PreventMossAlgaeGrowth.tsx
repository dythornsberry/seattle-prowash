import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MobileBottomBar from "@/components/MobileBottomBar";

const PreventMossAlgaeGrowth = () => {
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
                  <Badge variant="secondary">Prevention</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      7 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      January 10, 2024
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  How to Prevent Moss and Algae Growth
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Pacific Northwest homes face unique challenges with moss and algae. Learn proven strategies to protect your roof and maintain your home's value.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>Understanding the Pacific Northwest Challenge</h2>
                  <p>
                    The combination of high humidity, frequent rainfall, and mild temperatures makes the Pacific Northwest a perfect breeding ground for moss and algae. These organisms thrive in our climate, making prevention strategies essential for every homeowner.
                  </p>

                  <h3>Why Moss and Algae Are Problems</h3>
                  <p>
                    Beyond aesthetics, moss and algae can cause serious damage:
                  </p>
                  <ul>
                    <li><strong>Moisture retention:</strong> Moss holds water against your roof, leading to rot and decay</li>
                    <li><strong>Shingle lifting:</strong> As moss grows, it can lift and damage roofing materials</li>
                    <li><strong>Ice dam formation:</strong> Retained moisture can freeze, causing ice dams in winter</li>
                    <li><strong>Premature aging:</strong> Algae can cause dark staining and accelerated deterioration</li>
                  </ul>

                  <h2>Prevention Strategies</h2>
                  
                  <h3>1. Improve Air Circulation</h3>
                  <p>
                    Proper ventilation is crucial for preventing moss growth. Trim overhanging tree branches that block sunlight and reduce air circulation over your roof. Ensure your attic has adequate ventilation to prevent moisture buildup.
                  </p>

                  <h3>2. Regular Debris Removal</h3>
                  <p>
                    Keep your roof clean of leaves, pine needles, and other organic debris that can trap moisture and provide nutrients for moss growth. Regular cleaning prevents the accumulation of materials that moss needs to establish itself.
                  </p>

                  <h3>3. Professional Moss Treatment</h3>
                  <p>
                    The most effective prevention method is professional moss treatment. Seattle ProWash uses specialized products that not only kill existing moss but create a protective barrier that prevents regrowth for up to 12 months.
                  </p>

                  <h3>4. Zinc or Copper Strips</h3>
                  <p>
                    Installing zinc or copper strips near the roof ridge can help prevent moss growth. When it rains, small amounts of these metals wash down the roof, creating an environment hostile to moss and algae.
                  </p>

                  <h2>Signs to Watch For</h2>
                  <p>
                    Early detection is key to preventing major problems. Watch for:
                  </p>
                  <ul>
                    <li>Green or black patches on your roof</li>
                    <li>Thick, spongy growth on shingles</li>
                    <li>Dark streaking (often caused by algae)</li>
                    <li>Lifting or curling shingles</li>
                    <li>Excessive moisture in gutters</li>
                  </ul>

                  <h2>Treatment Options</h2>
                  
                  <h3>DIY Methods</h3>
                  <p>
                    While professional treatment is most effective, some DIY options include:
                  </p>
                  <ul>
                    <li>Gentle brushing (never use pressure washers on shingles)</li>
                    <li>Zinc sulfate solutions</li>
                    <li>Oxygen bleach treatments</li>
                  </ul>

                  <h3>Professional Treatment</h3>
                  <p>
                    Professional moss treatment offers several advantages:
                  </p>
                  <ul>
                    <li>Safe removal without damaging roofing materials</li>
                    <li>Long-lasting prevention (12-month guarantee)</li>
                    <li>Comprehensive assessment of roof condition</li>
                    <li>Proper safety equipment and techniques</li>
                  </ul>

                  <h2>Maintenance Schedule</h2>
                  <p>
                    For optimal protection in the Pacific Northwest:
                  </p>
                  <ul>
                    <li><strong>Annual professional moss treatment</strong> (spring is ideal)</li>
                    <li><strong>Quarterly roof inspections</strong> to catch early growth</li>
                    <li><strong>Immediate debris removal</strong> after storms</li>
                    <li><strong>Tree trimming</strong> as needed to improve sunlight exposure</li>
                  </ul>
                </div>

                {/* Related Services */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Related Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/roof-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Roof Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Professional soft-wash roof cleaning and moss removal</p>
                    </Link>
                    <Link to="/gutter-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Gutter Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Complete gutter cleaning and debris removal</p>
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
                  <h3 className="text-2xl font-bold mb-4">Protect Your Roof with Professional Moss Treatment</h3>
                  <p className="text-lg mb-6">
                    Don't let moss damage your roof. Our 12-month guarantee gives you peace of mind.
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

export default PreventMossAlgaeGrowth;