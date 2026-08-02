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

const RoofGutterCleaningImportance = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleSchema = generateArticleSchema({
      headline: "Why Regular Roof and Gutter Cleaning Matters",
      description: "Learn why regular roof and gutter maintenance is essential for Pacific Northwest homes.",
      url: "https://www.seattleprowash.com/resources/roof-gutter-cleaning-importance",
      datePublished: "2025-12-15",
      dateModified: "2026-03-15",
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Resources", url: "https://www.seattleprowash.com/resources" },
      { name: "Why Roof & Gutter Cleaning Matters", url: "https://www.seattleprowash.com/resources/roof-gutter-cleaning-importance" },
    ]);
    const cleanupArticle = injectSchema(articleSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);
    return () => { cleanupArticle(); cleanupBreadcrumb(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Why Regular Roof and Gutter Cleaning Matters"
        description="Learn why regular roof and gutter maintenance is essential for Pacific Northwest homes. Prevent water damage, extend roof life, and save on energy costs."
        url="https://www.seattleprowash.com/resources/roof-gutter-cleaning-importance"
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
                  <Badge variant="secondary">Maintenance</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      December 15, 2025
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 mb-4">By Dylan Thornsberry, Owner of Seattle ProWash</p>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Regular Roof and Gutter Cleaning Matters
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  The math on roof maintenance is lopsided: a few hundred dollars on a schedule, or five figures when the neglect catches up. Here's what actually goes wrong and when.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>The Math That Makes This Worth Reading</h2>
                  <p>
                    A roof cleaning with moss treatment runs $499–$1,200 for most asphalt roofs around here, and on our schedule that's an every-2-to-4-years expense. A roof replacement runs $10,000–$30,000. Moss and clogged gutters are the two things that quietly move that replacement date up by years — a well-maintained roof commonly lasts 10–15 years longer than a neglected one. Nothing else in home maintenance has a spread like that.
                  </p>

                  <h3>What clogged gutters actually do</h3>
                  <p>
                    A clogged gutter doesn't just overflow — it dumps every storm's water in a sheet right at your foundation line, and it holds standing water against the fascia boards until they rot. By the time you notice a sagging gutter or a damp basement corner, the water has been doing this for months. Twice-a-year cleaning (spring and fall, after the big leaf drop) is the whole fix.
                  </p>

                  <h3>What moss actually does</h3>
                  <p>
                    Moss is a sponge that lives on your roof. It holds water against the shingles for weeks after rain, works under the shingle edges and lifts them, and opens paths for leaks. There's also a newer cost: insurance carriers now review aerial imagery, and a visibly mossy roof can trigger a fix-it notice or even non-renewal. A meaningful share of our calls start with one of those letters.
                  </p>

                  <h3>The curb appeal part is real too</h3>
                  <p>
                    If you're selling, a green-streaked roof reads as "deferred maintenance" to every buyer and inspector who sees it — and it's one of the cheapest big-visual-impact fixes a house can get. Most of our pre-listing customers say the roof looks like it was replaced.
                  </p>

                  <h2>Recommended Maintenance Schedule</h2>
                  <p>
                    For Pacific Northwest homes, Seattle ProWash recommends:
                  </p>
                  <ul>
                    <li><strong>Full roof cleaning every 2-4 years</strong> to remove moss, algae, and debris (sooner under heavy tree cover)</li>
                    <li><strong>Annual moss treatment</strong> between cleanings to keep growth from coming back</li>
                    <li><strong>Gutter cleaning twice a year</strong> (spring and fall) to prevent clogs</li>
                  </ul>

                  <h2>Professional vs. DIY</h2>
                  <p>
                    Ground-floor gutters on a one-story home are a fair DIY job — we wrote a whole <Link to="/resources/gutter-cleaning-safety-tips">guide on doing it safely</Link>. The roof itself is different: moss treatment needs the right product at the right concentration to kill growth at the root without harming shingles or landscaping, and walking a wet Seattle roof without fall protection is a genuinely bad idea. That's the part worth paying for — along with the 12-month moss-free guarantee that comes with it, and a set of before/after photos so you can see exactly what was done.
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
                      <p className="text-sm text-muted-foreground">Complete gutter cleaning and protection</p>
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

export default RoofGutterCleaningImportance;
