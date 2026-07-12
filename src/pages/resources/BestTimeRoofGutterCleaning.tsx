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

const BestTimeRoofGutterCleaning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleSchema = generateArticleSchema({
      headline: "The Best Time of Year for Roof & Gutter Cleaning in Seattle",
      description: "When to schedule roof cleaning, moss treatment, and gutter cleaning in the Seattle area — season by season, from a local contractor.",
      url: "https://www.seattleprowash.com/resources/best-time-roof-gutter-cleaning-seattle",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Resources", url: "https://www.seattleprowash.com/resources" },
      { name: "Best Time for Roof & Gutter Cleaning", url: "https://www.seattleprowash.com/resources/best-time-roof-gutter-cleaning-seattle" },
    ]);
    const cleanupArticle = injectSchema(articleSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);
    return () => { cleanupArticle(); cleanupBreadcrumb(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Best Time of Year for Roof & Gutter Cleaning in Seattle"
        description="When should you schedule roof cleaning, moss treatment, and gutter cleaning in Seattle? Season-by-season advice from a Kenmore-based contractor who works year-round."
        url="https://www.seattleprowash.com/resources/best-time-roof-gutter-cleaning-seattle"
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
                  <Badge variant="secondary">Timing</Badge>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      July 11, 2026
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 mb-4">By Dylan Thornsberry, Owner of Seattle ProWash</p>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  The Best Time of Year for Roof & Gutter Cleaning in Seattle
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  We clean roofs and gutters twelve months a year. Here's how to time yours so you get the most out of it.
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
                  <ul>
                    <li><strong>Roof cleaning & moss treatment:</strong> any time of year works — moss treatment is effective in every season. Spring and early summer give the treatment the longest head start before the wet season.</li>
                    <li><strong>Gutter cleaning:</strong> late fall (after the leaves drop) is essential, and a spring check catches what winter storms left behind. Homes under evergreens need it more often — fir needles fall year-round.</li>
                    <li><strong>Scheduling reality:</strong> fall is the rush. If you want a specific week in October or November, book early. Most of the year we schedule within 1–2 weeks.</li>
                  </ul>

                  <h2>Season by Season</h2>

                  <h3>Spring (March – May)</h3>
                  <p>
                    The best all-around window. Winter storms have dropped their debris, moss is actively growing (which means treatment hits it hard), and you head into summer with clean gutters and a protected roof. If you only do one full roof cleaning a year, spring is a great pick.
                  </p>

                  <h3>Summer (June – August)</h3>
                  <p>
                    Dry roofs are safe roofs — for the people working on them. Summer is ideal for the actual work, and it's when steep or complicated roofs are easiest to do well. It's also the right time to fix the neglect that shows up when you're getting a house ready to sell. Moss grows slower in summer but it doesn't die on its own; a summer treatment still prevents the fall growth spurt.
                  </p>

                  <h3>Fall (September – November)</h3>
                  <p>
                    Gutter season. Once the big leaf drop finishes — usually mid-November around here — gutters need to be clear before the winter rain arrives. This is our busiest stretch of the year, so book ahead. A roof moss treatment in fall also works well: it protects through the wet months when moss does most of its growing.
                  </p>

                  <h3>Winter (December – February)</h3>
                  <p>
                    People assume we shut down in winter. We don't — winter is a perfectly good time for roof cleaning and moss treatment, and scheduling is usually easiest. Moss is at its greenest and most active in the cool, wet months, which means treatment is highly effective. The only constraint is safety: we won't work a roof in high winds or ice, so winter jobs occasionally shift a few days for weather.
                  </p>

                  <h2>How Often Should You Clean?</h2>
                  <ul>
                    <li><strong>Gutters:</strong> once or twice a year for most homes; three or four times if you're under big evergreens (common in Kenmore, Lake Forest Park, and Shoreline).</li>
                    <li><strong>Roof moss treatment:</strong> annually keeps most roofs moss-free indefinitely — that's why our treatment carries a 12-month guarantee.</li>
                    <li><strong>Full roof cleaning:</strong> every 2–4 years depending on tree cover and how long it's been since the last one.</li>
                  </ul>

                  <h2>The Honest Takeaway</h2>
                  <p>
                    The best time to clean your roof is before the moss does visible damage, and the best time to clean your gutters is before they overflow — not after. If it's been a few years, the current season is the right season. Timing matters less than actually getting it done.
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
                    <Link to="/gutter-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Gutter Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Hand-cleaned with downspout flush, from $250</p>
                    </Link>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/resources/roof-cleaning-cost-seattle" className="text-brand-orange hover:underline font-semibold">
                      See What Roof Cleaning Costs →
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-brand-navy text-white rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get on the Schedule?</h3>
                  <p className="text-lg mb-6">
                    Quotes are free and usually same-day. Most jobs are scheduled within 1–2 weeks.
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

export default BestTimeRoofGutterCleaning;
