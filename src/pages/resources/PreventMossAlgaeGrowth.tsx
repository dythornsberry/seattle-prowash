import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import MobileBottomBar from "@/components/MobileBottomBar";
import { navigateToContact } from "@/lib/navigation";
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from "@/utils/schema";

const PreventMossAlgaeGrowth = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleSchema = generateArticleSchema({
      headline: "How to Prevent Moss and Algae Growth on Your Roof",
      description: "Proven strategies to prevent moss and algae growth on Pacific Northwest roofs.",
      url: "https://www.seattleprowash.com/resources/prevent-moss-algae-growth",
      datePublished: "2025-12-10",
      dateModified: "2026-03-15",
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Resources", url: "https://www.seattleprowash.com/resources" },
      { name: "Prevent Moss & Algae Growth", url: "https://www.seattleprowash.com/resources/prevent-moss-algae-growth" },
    ]);
    const cleanupArticle = injectSchema(articleSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);
    return () => { cleanupArticle(); cleanupBreadcrumb(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="How to Prevent Moss and Algae Growth on Your Roof"
        description="Discover proven strategies to prevent moss and algae growth on Pacific Northwest roofs. Professional tips for protecting your home's value and extending roof life."
        url="https://www.seattleprowash.com/resources/prevent-moss-algae-growth"
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
                  <Badge variant="secondary">Prevention</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      7 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      December 10, 2025
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 mb-4">By Dylan Thornsberry, Owner of Seattle ProWash</p>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  How to Prevent Moss and Algae Growth
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Moss pays our bills, so take it from us: most of what it does to Seattle roofs is preventable. Here's what actually keeps it off, and which popular advice isn't worth your money.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>Why Every Roof Here Grows Moss</h2>
                  <p>
                    Moss needs three things: moisture, shade, and something to eat. Seattle delivers all three for about eight months a year: mild temperatures, near-constant drizzle, and big conifers dropping needles that compost right in your shingle seams. That's why the north face of nearly every untreated roof around here goes green. It isn't a cleaning problem; it's an ecosystem. The goal of prevention is making your roof a worse place to live than the forest floor next to it.
                  </p>

                  <h3>What It Actually Does to a Roof</h3>
                  <p>
                    Moss doesn't just sit there. It works like a sponge, holding water against the shingles for weeks after the rain stops. The root-like structures work under shingle edges and lift them, which opens paths for water. Over years, that means granule loss, rot at the edges, and a roof that ages faster than it should. And lately there's a new problem: insurance carriers reviewing aerial photos and sending fix-it letters for visibly mossy roofs. We get calls from those letters every month.
                  </p>

                  <h2>What Actually Prevents It</h2>

                  <h3>1. Deal with the needle load</h3>
                  <p>
                    Debris is moss food. If your roof sits under firs or maples, the single best free thing you can do is keep it clear. Needles in the valleys and seams hold moisture and become the bed moss establishes in. This is why we include a roof blow-off with every gutter cleaning: clear roof, clear gutters, nothing composting up there through the wet season.
                  </p>

                  <h3>2. Let light in where you can</h3>
                  <p>
                    Moss barely survives on roofs that get real sun. Nobody should top a beautiful tree for their roof's sake, but where a branch hangs directly over the roofline, trimming it back does double duty: more light and less debris. The difference between the shaded and sunny halves of the same roof is often night and day.
                  </p>

                  <h3>3. Annual moss treatment (the one that actually moves the needle)</h3>
                  <p>
                    A yearly treatment kills growth at the root before it can establish, and it's the reason we can put a 12-month moss-free guarantee on our work. Applied before the wet season, it protects through the months when moss does nearly all of its growing. On a roof that's kept up annually, a full cleaning is only needed every 2-4 years.
                  </p>

                  <h3>4. Zinc strips: fine, but don't expect miracles</h3>
                  <p>
                    Zinc strips at the ridge release a little zinc with each rain, which suppresses moss for the first few feet below the strip. On a tall Seattle roof face, the bottom two-thirds barely notices. They're a reasonable supplement on a new roof; they are not a substitute for treatment on a roof that already has a moss problem.
                  </p>

                  <h2>Caught It Early? What Green Patches Mean</h2>
                  <p>
                    A light green haze on the north face means moss is establishing. Treatment now is cheap and the roof will look normal within months as the dead material weathers off. Thick, spongy mats mean it's been years; that's a full cleaning, not just a treatment. Black streaks are algae, mostly cosmetic on asphalt, but the same soft-wash process removes them. Whatever you do, don't let anyone pressure-wash an asphalt roof: it strips the granules that protect the shingles, and the damage is permanent.
                  </p>

                  <h2>The Realistic Schedule</h2>
                  <ul>
                    <li><strong>Moss treatment:</strong> once a year, ideally heading into fall</li>
                    <li><strong>Full roof cleaning:</strong> every 2-4 years depending on tree cover</li>
                    <li><strong>Gutters (with roof blow-off):</strong> twice a year, spring and fall</li>
                  </ul>
                  <p>
                    Under heavy evergreens (common in Kenmore, Lake Forest Park, and Shoreline) shorten all of those intervals. In full sun, you can stretch them.
                  </p>
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
                      onClick={navigateToContact}
                    >
                      Get Fast Quote
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-moss-green"
                      onClick={() => window.location.href = 'tel:206-752-6690'}
                    >
                      Call or Text 206-752-6690
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
