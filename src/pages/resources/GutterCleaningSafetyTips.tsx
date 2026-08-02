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

                <p className="text-sm text-white/70 mb-4">By Dylan Thornsberry, Owner of Seattle ProWash</p>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Safety Tips When Cleaning Gutters
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  We're on ladders every working day, so here's the honest version: what makes gutter cleaning dangerous, how to do it safely if you do it yourself, and when it stops being worth the risk.
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
                    <h3 className="text-lg font-bold text-red-800 mb-2">The Short Version</h3>
                    <p className="text-red-700">
                      A fall from a single-story gutter line is 10 feet onto concrete. Nothing your gutters can do to your house is worth what that does to you. One-story home, good ladder, dry day — reasonable DIY job. Anything more than that, hire it out — and not necessarily to us. Just don't get hurt over gutters.
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
                  <h2>The Ladder Is the Whole Game</h2>
                  <p>
                    Almost every gutter-cleaning injury is a ladder injury. Get the ladder part right and you've eliminated most of the risk:
                  </p>
                  <ul>
                    <li><strong>The 4-to-1 rule:</strong> for every 4 feet of height, the ladder base sits 1 foot from the wall. Steeper than that and it tips backward; shallower and the feet kick out.</li>
                    <li><strong>Firm, level ground only.</strong> Wet grass and bark beds shift under load. We carry plywood pads for soft ground — a scrap of plywood under the feet works at home too.</li>
                    <li><strong>Never lean past your belt buckle.</strong> Climb down and move the ladder. Yes, it's tedious. Reaching that extra two feet is how people go over sideways.</li>
                    <li><strong>Three points of contact</strong> — two feet and a hand, always. Which means debris goes in a bucket on a hook, not in your hands.</li>
                    <li><strong>A standoff stabilizer</strong> (~$40 at any hardware store) rests the ladder against the roof instead of crushing the gutter — steadier for you, and it won't bend the aluminum.</li>
                  </ul>

                  <h2>Pick Your Day</h2>
                  <p>
                    We reschedule jobs for weather, and we do this professionally — that should tell you something. Don't clean gutters in rain, wind, or frost. In a Seattle fall that can mean waiting a few days for a dry window. Wait. Wet aluminum, wet shoes, and wet ladder rungs are a bad combination, and frozen gutters won't clean out properly anyway.
                  </p>

                  <h2>Stay Off the Roof</h2>
                  <p>
                    Cleaning gutters from the roof — leaning over the edge — is how the worst falls happen. We do it with fall-protection gear and anchor points; without that equipment there is no safe version of standing at a roof edge looking down. If your gutter line can't be reached from a ladder, that's the line where DIY should stop.
                  </p>

                  <h2>The Stuff Nobody Warns You About</h2>
                  <ul>
                    <li><strong>Power lines.</strong> Know where your service drop connects to the house before you set up, and keep the ladder well clear. Aluminum ladders and power lines are a fatal combination.</li>
                    <li><strong>Wasps.</strong> Gutters and eaves are prime nest territory, especially late summer and fall. Getting swarmed 12 feet up is a fall risk more than a sting problem.</li>
                    <li><strong>Rotted fascia.</strong> If the wood behind the gutter is soft, the gutter can pull loose under any weight or pressure. If a gutter moves when you touch it, stop and inspect before continuing.</li>
                    <li><strong>The gunk itself.</strong> A season of composted needles and leaf muck is heavier than it looks and full of bacteria. Gloves aren't optional, and a scratch from a rusty fastener is a real thing to avoid.</li>
                  </ul>

                  <h2>Where We'd Draw the DIY Line</h2>
                  <p>
                    One-story rambler, walkable yard, decent ladder, dry day — clean your own gutters and save the money. We mean that.
                  </p>
                  <p>
                    Two or more stories, steep terrain around the house, gutters over a sunroom or deck roof, or any spot you can't comfortably reach from a ladder — hire it out. A professional crew has the stabilizers, the fall protection, and the insurance, and does hundreds of these a year. Our gutter cleaning starts at $250, includes the downspout flush and a roof blow-off, and takes about an hour or two. That's cheap compared to any version of falling off a ladder.
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
                      Get Fast Quote
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-dark-teal"
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

export default GutterCleaningSafetyTips;
