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
import treatmentApplication from "@/assets/moss-treatment-fresh-application.jpg";

const MossTreatmentVsRoofCleaning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleSchema = generateArticleSchema({
      headline: "Moss Treatment vs. Full Roof Cleaning: Which Do You Actually Need?",
      description: "The difference between roof moss treatment and full roof cleaning, when each one makes sense, and what they cost in the Seattle area.",
      url: "https://www.seattleprowash.com/resources/moss-treatment-vs-roof-cleaning",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Resources", url: "https://www.seattleprowash.com/resources" },
      { name: "Moss Treatment vs. Roof Cleaning", url: "https://www.seattleprowash.com/resources/moss-treatment-vs-roof-cleaning" },
    ]);
    const cleanupArticle = injectSchema(articleSchema);
    const cleanupBreadcrumb = injectSchema(breadcrumbSchema);
    return () => { cleanupArticle(); cleanupBreadcrumb(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Moss Treatment vs. Full Roof Cleaning: Which Do You Need?"
        description="Moss treatment kills the moss; full roof cleaning removes it too. A Seattle-area contractor explains when each makes sense and what they cost."
        url="https://www.seattleprowash.com/resources/moss-treatment-vs-roof-cleaning"
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
                  <Badge variant="secondary">Moss Removal</Badge>
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
                  Moss Treatment vs. Full Roof Cleaning: Which Do You Actually Need?
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  These are two different services at two different prices, and plenty of homeowners pay for the wrong one. Here's how to tell them apart.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 bg-off-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2>The Difference in One Paragraph</h2>
                  <p>
                    <strong>Moss treatment</strong> kills the moss where it sits. The dead moss dries out, loses its grip, and gradually sheds off the roof with weather over the following months. <strong>Full roof cleaning</strong> removes the moss and debris by hand and brush first, <em>then</em> applies the same treatment — so the roof looks clean the day we leave, not six months later. Both stop the damage; the difference is how fast your roof looks good and how much labor is involved.
                  </p>

                  <h2>When Moss Treatment Alone Makes Sense</h2>
                  <ul>
                    <li><strong>Light, early growth.</strong> If the moss is a green haze or small clumps rather than a thick carpet, treatment kills it before it can do real damage, and the small amount of dead material sheds on its own.</li>
                    <li><strong>Maintenance after a full cleaning.</strong> This is the main one. An annual treatment after a proper cleaning keeps the roof moss-free indefinitely — it's why we guarantee our treatment for 12 months.</li>
                    <li><strong>Budget now, cleaning later.</strong> Treatment stops the damage clock. If a full cleaning isn't in the budget this year, treating now protects the roof while you plan.</li>
                  </ul>

                  <figure className="my-8">
                    <img
                      src={treatmentApplication}
                      alt="Zinc-based moss treatment freshly applied to a mossy asphalt roof in the Seattle area"
                      className="w-full rounded-xl shadow-lg"
                      width={1100}
                      height={1467}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="text-sm text-muted-foreground text-center mt-2">
                      What treatment looks like on day one — the white powder kills moss at the root, then weather does the rest.
                    </figcaption>
                  </figure>

                  <h2>When You Need the Full Cleaning</h2>
                  <ul>
                    <li><strong>Established moss mats.</strong> Once moss is thick enough to hold water against the shingles and lift their edges, killing it isn't enough — the dead mat still traps moisture and blocks drainage while it slowly sheds. It needs to come off.</li>
                    <li><strong>You want it to look clean now.</strong> Treated moss turns brown before it sheds, and that takes months. If curb appeal matters — especially if you're selling — removal is the only fast answer.</li>
                    <li><strong>Clogged gutters and valleys.</strong> Heavy moss sheds into gutters and roof valleys. A full cleaning handles all of it in one visit, and our roof cleaning includes the gutter cleaning for exactly that reason.</li>
                  </ul>

                  <h2>What They Cost</h2>
                  <p>
                    In the Seattle area, our full roof cleaning — moss removal, treatment, and gutter cleaning — runs <strong>$499 to $1,200</strong> for most asphalt and composite roofs. A standalone moss treatment costs meaningfully less and is quoted based on your roof's size and pitch. If you're not sure which you need, send a couple of photos with the quote form and we'll tell you straight — plenty of roofs only need the treatment, and we'll say so.
                  </p>

                  <h2>What About DIY Moss Killer?</h2>
                  <p>
                    Bags of zinc-based moss killer from the hardware store do work on light growth, with caveats: granules applied unevenly leave striping, over-application can corrode gutters and flashings, and getting the coverage right means walking a wet, mossy roof — which is how homeowners get hurt. If your roof is walkable and the growth is light, DIY is a reasonable option. If it's steep, two stories, or the moss is established, it isn't worth the risk.
                  </p>

                  <h2>The Bottom Line</h2>
                  <p>
                    Thick moss: full cleaning. Light growth or annual upkeep: treatment. When in doubt, ask — an honest company will quote the cheaper service when it's the right one, because that's what gets them the annual maintenance customer for the next decade.
                  </p>
                </div>

                {/* Related Services */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Related Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/moss-treatment" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Moss Removal & Treatment</h4>
                      <p className="text-sm text-muted-foreground">12-month moss-free guarantee</p>
                    </Link>
                    <Link to="/roof-cleaning" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-brand-navy mb-2">Full Roof Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Moss removal, treatment & gutter cleaning</p>
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
                  <h3 className="text-2xl font-bold mb-4 text-white">Not Sure Which One Your Roof Needs?</h3>
                  <p className="text-lg mb-6">
                    Send the form and Dylan will tell you straight — even if the answer is the cheaper service.
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

export default MossTreatmentVsRoofCleaning;
