import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import MobileBottomBar from "@/components/MobileBottomBar";
import { navigateToContact } from "@/lib/navigation";
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from "@/utils/schema";

const GutterCleaningSafetyTips = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleSchema = generateArticleSchema({
      headline: "Safety Tips When Cleaning Gutters",
      description: "Essential safety tips for gutter cleaning. Learn proper equipment, techniques, and when to call professionals.",
      url: "https://www.seattleprowash.com/resources/gutter-cleaning-safety-tips",
      datePublished: "2025-12-20",
      dateModified: "2026-03-15",
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Resources", url: "https://www.seattleprowash.com/resources" },
      { name: "Gutter Cleaning Safety Tips", url: "https://www.seattleprowash.com/resources/gutter-cleaning-safety-tips" },
    ]);
    const cleanupArticle = injectSchema(articleSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);
    return () => { cleanupArticle(); cleanupBreadcrumb(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Safety Tips When Cleaning Gutters"
        description="Essential safety tips for gutter cleaning. Learn proper equipment, techniques, and when to call professionals. Avoid common hazards and protect yourself."
        url="https://www.seattleprowash.com/resources/gutter-cleaning-safety-tips"
      />
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
                  <Badge variant="secondary">Safety</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      4 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      December 5, 2025
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Safety Tips When Cleaning Gutters
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Gutter cleaning can be dangerous without proper precautions. Learn essential safety tips and when to call the professionals.
                </p>
              </div>
            </div>
          </section>

          {/* Safety Warning */}
          <section className="py-8 bg-red-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-red-100 border border-red-200 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">Important Safety Notice</h3>
                    <p className="text-red-700">
                      Gutter cleaning involves working at height and can be extremely dangerous. According to the CDC, falls from ladders cause thousands of injuries annually. Consider professional services for your safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>Essential Safety Equipment</h2>
                  <p>
                    If you decide to clean your gutters yourself, proper equipment is non-negotiable:
                  </p>
                  <ul>
                    <li><strong>Sturdy ladder:</strong> Use a 4-to-1 rule (for every 4 feet of height, place the ladder 1 foot away from the wall)</li>
                    <li><strong>Ladder stabilizer:</strong> Prevents ladder from slipping sideways</li>
                    <li><strong>Safety harness:</strong> Attach to a secure anchor point</li>
                    <li><strong>Non-slip shoes:</strong> Proper footwear with good grip</li>
                    <li><strong>Work gloves:</strong> Protect hands from sharp debris and bacteria</li>
                    <li><strong>Safety glasses:</strong> Protect eyes from splashing debris</li>
                  </ul>

                  <h2>Before You Start</h2>
                  
                  <h3>Weather Conditions</h3>
                  <p>
                    Never attempt gutter cleaning in:
                  </p>
                  <ul>
                    <li>Wet or icy conditions</li>
                    <li>High winds</li>
                    <li>During or immediately after storms</li>
                    <li>When gutters are frozen</li>
                  </ul>

                  <h3>Inspect Your Equipment</h3>
                  <p>
                    Before each use, check that:
                  </p>
                  <ul>
                    <li>Ladder locks and hinges work properly</li>
                    <li>All rungs are secure and undamaged</li>
                    <li>Ladder feet are in good condition</li>
                    <li>Safety equipment is properly functioning</li>
                  </ul>

                  <h2>Safe Cleaning Techniques</h2>
                  
                  <h3>Ladder Positioning</h3>
                  <ul>
                    <li>Place ladder on firm, level ground</li>
                    <li>Have someone spot you when possible</li>
                    <li>Never lean out to reach, move the ladder instead</li>
                    <li>Keep your belt buckle between the ladder rails</li>
                    <li>Maintain three points of contact (two hands and one foot, or two feet and one hand)</li>
                  </ul>

                  <h3>Working on the Roof</h3>
                  <p>
                    <strong>We strongly advise against homeowners working directly on roofs.</strong> If roof access is necessary:
                  </p>
                  <ul>
                    <li>Use proper fall protection equipment</li>
                    <li>Wear non-slip shoes</li>
                    <li>Work only in dry conditions</li>
                    <li>Never work alone</li>
                  </ul>

                  <h2>Specific Hazards to Avoid</h2>
                  
                  <h3>Electrical Dangers</h3>
                  <ul>
                    <li>Stay away from power lines</li>
                    <li>Use fiberglass or wooden ladders near electrical equipment</li>
                    <li>Never use metal tools near power lines</li>
                  </ul>

                  <h3>Wildlife and Pests</h3>
                  <ul>
                    <li>Be aware of wasp nests, especially in fall</li>
                    <li>Watch for bird nests (protected by law in many areas)</li>
                    <li>Use caution around areas where animals might nest</li>
                  </ul>

                  <h3>Hidden Structural Issues</h3>
                  <ul>
                    <li>Check gutter stability before putting weight on them</li>
                    <li>Look for loose fasteners or damaged gutters</li>
                    <li>Be aware of rotted fascia boards</li>
                  </ul>

                  <h2>When to Call Professionals</h2>
                  <p>
                    Consider professional gutter cleaning services if:
                  </p>
                  <ul>
                    <li>Your home is more than one story</li>
                    <li>Gutters haven't been cleaned in over a year</li>
                    <li>You notice structural damage to gutters or roof</li>
                    <li>You're not comfortable working at height</li>
                    <li>You lack proper safety equipment</li>
                    <li>Your gutters require repairs</li>
                  </ul>

                  <h2>The Professional Advantage</h2>
                  <p>
                    Seattle ProWash technicians are trained in:
                  </p>
                  <ul>
                    <li>Advanced safety protocols and equipment</li>
                    <li>Proper ladder and roof safety techniques</li>
                    <li>Identifying and addressing structural issues</li>
                    <li>Thorough cleaning and inspection</li>
                    <li>Insurance and liability protection</li>
                  </ul>

                  <h3>Insurance Considerations</h3>
                  <p>
                    Many homeowner's insurance policies don't cover injuries sustained during DIY maintenance. Professional services carry liability insurance to protect you and your property.
                  </p>
                </div>

                {/* Related Services */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Related Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/gutter-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Gutter Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Safe, professional gutter cleaning by insured experts</p>
                    </Link>
                    <Link to="/roof-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Roof Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Professional roof and gutter maintenance</p>
                    </Link>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/service-areas" className="text-brand-orange hover:underline font-semibold">
                      View All Service Areas →
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-dark-teal text-white rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Your Safety is Our Priority</h3>
                  <p className="text-lg mb-6">
                    Let our experienced, insured professionals handle your gutter cleaning safely and effectively.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="secondary"
                      size="lg"
                      onClick={navigateToContact}
                    >
                      Get a Fast Quote
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-dark-teal"
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

export default GutterCleaningSafetyTips;
