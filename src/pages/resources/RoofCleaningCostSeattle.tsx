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

const RoofCleaningCostSeattle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleSchema = generateArticleSchema({
      headline: "What Roof Cleaning Costs in Seattle (2026 Guide)",
      description: "Real 2026 roof cleaning prices from a Seattle-area contractor: asphalt, composite, and metal roofs, what drives the price, and what should be included.",
      url: "https://www.seattleprowash.com/resources/roof-cleaning-cost-seattle",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Resources", url: "https://www.seattleprowash.com/resources" },
      { name: "Roof Cleaning Cost in Seattle", url: "https://www.seattleprowash.com/resources/roof-cleaning-cost-seattle" },
    ]);
    const cleanupArticle = injectSchema(articleSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);
    return () => { cleanupArticle(); cleanupBreadcrumb(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="What Roof Cleaning Costs in Seattle (2026 Guide)"
        description="Real 2026 roof cleaning prices from a Seattle-area contractor. Most asphalt roofs run $499–$1,500 with gutter cleaning included. Metal starts at $800. See what drives your price."
        url="https://www.seattleprowash.com/resources/roof-cleaning-cost-seattle"
      />
      <Header />

        <main className="pt-16 md:pt-20">
          {/* Header */}
          <section className="bg-brand-navy text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link to="/resources" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Resources
                </Link>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Pricing</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      6 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      July 11, 2026
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 mb-4">By Dylan Thornsberry, Owner of Seattle ProWash</p>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  What Roof Cleaning Costs in Seattle (2026 Guide)
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  Actual numbers from a contractor who cleans roofs here every week — no "call for pricing" runaround.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>The Short Answer</h2>
                  <p>
                    For most single-family homes in the Seattle area in 2026, professional roof cleaning with moss removal costs <strong>$499 to $1,500</strong> for an asphalt or composite roof — and that should include your gutter cleaning. Metal roofs start around <strong>$800</strong>. A standalone gutter cleaning runs <strong>$250 to $600</strong>.
                  </p>
                  <p>
                    Those are our actual prices, not national averages pulled from a lead-generation site. National cost guides often quote $300 roof cleanings that simply don't exist here — Seattle's steep pitches, two-story homes, and heavy moss make our market different.
                  </p>

                  <h2>Cost by Roof Type</h2>

                  <h3>Asphalt & Composite Shingle: $499 – $1,500</h3>
                  <p>
                    This covers the large majority of homes we clean. A one-story rambler with light moss lands near the bottom of the range. A two-story home with a steep pitch and several years of moss buildup lands near the top. The work includes moss removal, a preventative treatment that keeps moss from coming back (we guarantee it for 12 months), and a full gutter cleaning.
                  </p>

                  <h3>Metal Roofs: Starting at $800</h3>
                  <p>
                    Metal roofs are more common around here every year, and we clean a lot of them. They cost more because the surface is slick to work on and easy to scratch or dent if it's treated like asphalt — the process is slower and more careful. Standing seam, corrugated, and metal shake all fall in this category. Complex or large metal roofs can run $1,500 or more.
                  </p>

                  <h3>Tile & Cedar Shake: Custom Quote</h3>
                  <p>
                    Yes, we clean tile and cedar shake roofs too. They need multi-day treatment processes and very careful handling, so they're priced by custom quote — expect quotes starting well above $1,500 from anyone doing it properly.
                  </p>

                  <h2>What Actually Drives Your Price</h2>
                  <ul>
                    <li><strong>Roof size:</strong> More square footage means more time and more treatment product.</li>
                    <li><strong>Pitch:</strong> Steep roofs require ropes, anchors, and slower movement. A walkable 4/12 pitch and a 10/12 pitch are very different jobs.</li>
                    <li><strong>Moss severity:</strong> A light green haze brushes off quickly. Thick moss mats that have been growing for five years take hours of careful removal.</li>
                    <li><strong>Access:</strong> Tight lot lines, landscaping under the eaves, and three-story sections all add time.</li>
                  </ul>

                  <h2>What Should Be Included</h2>
                  <p>
                    When you compare quotes, make sure you're comparing the same scope. A proper roof cleaning in this market should include:
                  </p>
                  <ul>
                    <li>Moss and debris removal from the roof surface</li>
                    <li>Preventative moss treatment (ask how long it's guaranteed — ours is 12 months)</li>
                    <li>Gutter cleaning with downspout flush — the moss you remove ends up in the gutters, so a roof cleaning without gutter cleaning is half a job</li>
                    <li>Before and after photos, so you can see the work without climbing a ladder</li>
                    <li>Cleanup of everything that came off the roof</li>
                  </ul>

                  <h2>Red Flags on Cheap Quotes</h2>
                  <ul>
                    <li><strong>Pressure washing asphalt shingles.</strong> High pressure strips the granules that protect your roof and can void your shingle warranty. Nobody reputable does this.</li>
                    <li><strong>No license or insurance.</strong> Roof work is dangerous. If someone gets hurt on your property and the company isn't insured, that can become your problem. You can verify any Washington contractor's license, bond, and insurance for free at the L&amp;I website (our license is SEATTPL783M6, if you want to check us).</li>
                    <li><strong>No treatment included.</strong> Removing moss without treating the roots means it's back within a year, and you're paying twice.</li>
                  </ul>

                  <h2>Why Cleaning Beats Waiting</h2>
                  <p>
                    A new asphalt roof in the Seattle area costs $15,000–$25,000 or more. Moss shortens a roof's life by holding water against the shingles, lifting their edges, and letting rot start underneath. Cleaning every couple of years costs a small fraction of replacement and can add years to your roof's usable life. It's some of the cheapest insurance a homeowner can buy.
                  </p>
                </div>

                {/* Related Services */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Related Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/roof-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Roof Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Moss removal, treatment & gutter cleaning included</p>
                    </Link>
                    <Link to="/pricing" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Full Pricing Details</h4>
                      <p className="text-sm text-muted-foreground">Every service, every range, no hidden fees</p>
                    </Link>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/service-areas" className="text-brand-orange hover:underline font-semibold">
                      View All Service Areas →
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-brand-navy text-white rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Want a Real Number for Your Roof?</h3>
                  <p className="text-lg mb-6">
                    Send the quote form and Dylan will call or text with clear pricing — usually the same day.
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
                      className="border-white text-white hover:bg-white hover:text-brand-navy"
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

export default RoofCleaningCostSeattle;
