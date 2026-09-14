import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Phone, CheckCircle, Droplet, Home, Ruler, Mountain, TreePine, Star, Sparkles } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import asphaltRoofImg from "@/assets/recent-asphalt-roof-before-after-2026.webp";
import metalRoofImg from "@/assets/recent-green-metal-roof-before-after-2026.webp";
import gutterImg from "@/assets/gutter-cleaning-before-after.jpg";
import heavyMossRoofImg from "@/assets/new-roof-before-1.jpg";

// public/ asset — referenced by URL, not bundled
const heavyMossDebrisImg = "/lovable-uploads/7cdfb095-76e6-4419-b395-a8272819a23b.webp";
import { generateBreadcrumbSchema, injectSchema } from "@/utils/schema";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Pricing", url: "https://www.seattleprowash.com/pricing" },
    ]);
    const cleanup = injectSchema(breadcrumbSchema);
    return () => cleanup();
  }, []);

  const roofFactors = [
    { icon: Ruler, factor: "Roof size", description: "Square footage directly affects time and materials" },
    { icon: Mountain, factor: "Roof pitch", description: "Steeper roofs require additional safety equipment" },
    { icon: TreePine, factor: "Moss severity", description: "Heavy moss buildup needs more treatment" },
    { icon: Home, factor: "Access & layout", description: "Multi-story or hard-to-reach roofs add time" },
  ];

  const gutterFactors = [
    { icon: Ruler, factor: "Linear footage", description: "Total length of gutters to clean" },
    { icon: Mountain, factor: "Roof height", description: "Single, two, or three-story homes" },
    { icon: TreePine, factor: "Debris level", description: "Amount of leaves, needles, and buildup" },
    { icon: Home, factor: "Accessibility", description: "Landscaping and access points" },
  ];


  return (
    <>
      <SEOHead
        title="Roof & Complete Gutter Cleaning Prices"
        description="Roof cleaning starting at $849 and complete gutter cleaning starting at $400. Clear quotes for Seattle-area homes based on size, buildup, and access."
      />
      
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 mb-4">
              Transparent Pricing
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Roof &amp; Gutter Cleaning Prices
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4">
              Roof cleaning starts at $849. Complete gutter cleaning starts at $400.
            </p>
            <p className="text-base text-white/90 max-w-2xl mx-auto mb-8 font-medium">
              Your final quote depends on your home's size, buildup, roof material, and access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                Get Fast Quote →
              </Button>
              <Button 
                variant="prowash-secondary" 
                size="xl"
                onClick={() => window.location.href = 'tel:+12067526690'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call or Text 206-752-6690
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Cards - Roof Cleaning by Type */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-3">
                Roof Cleaning Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Roof cleaning is priced by roof material. Pick the card that matches yours.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Asphalt / Composite Roof Card */}
              <Card className="border-2 border-brand-orange ring-4 ring-brand-orange/30 lg:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
                <div className="bg-brand-orange text-white text-center text-sm font-bold py-2 tracking-wide">
                  ★ MOST POPULAR — THE ALL-IN-ONE
                </div>
                {/* Hero Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={asphaltRoofImg}
                    alt="Asphalt roof before and after moss cleaning"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-600 text-white border-green-600 font-semibold shadow-md">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Best Value — Gutters Included
                    </Badge>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-brand-blue">
                    Asphalt / Composite Roof
                  </CardTitle>
                  <CardDescription className="text-base">
                    The standard. Moss removal, treatment & gutter cleaning included.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4 bg-brand-orange/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Roof cleaning</p>
                    <p className="text-3xl font-bold text-brand-blue">Starting at $849</p>
                    <p className="text-sm text-muted-foreground mt-1">Smaller, straightforward roofs start at $849. Large roofs or heavy moss may cost $1,500 or more.</p>
                    <p className="text-xs text-muted-foreground mt-2">You get an exact price before anything is scheduled. No hidden fees, no surprises.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="font-semibold text-brand-blue text-sm">What affects your price:</p>
                    {roofFactors.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <IconComponent className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">{item.factor}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>✓ Gutter cleaning included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Moss treatment to prevent regrowth</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>12-month moss-free guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Safe, low-pressure cleaning</span>
                    </div>
                  </div>

                  <Button variant="cta-orange" className="w-full" onClick={navigateToContact}>
                    Get Fast Quote →
                  </Button>
                </CardContent>
              </Card>

              {/* Specialty Roof Cleaning Card (Metal / Tile / Cedar) */}
              <Card className="border-2 border-brand-navy/30 hover:border-brand-navy transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                {/* Hero Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={metalRoofImg}
                    alt="Metal roof before and after cleaning"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-brand-navy text-white border-brand-navy font-semibold shadow-md">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Specialty
                    </Badge>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-brand-blue">
                    Specialty Roof Cleaning
                  </CardTitle>
                  <CardDescription className="text-base">
                    Metal · Tile · Cedar Shake
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4 bg-brand-navy/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Metal roof cleaning</p>
                    <p className="text-3xl font-bold text-brand-blue">Starting at $849</p>
                    <p className="text-sm text-muted-foreground mt-1">Often $1,500+ · Custom quote based on your roof</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-brand-blue text-sm">Why specialty?</p>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">More time-consuming</p>
                        <p className="text-xs text-muted-foreground">Each roof type needs a different process</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">More custom</p>
                        <p className="text-xs text-muted-foreground">Treatment, rinse, and timing varies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">More difficult</p>
                        <p className="text-xs text-muted-foreground">Slippery surfaces, careful handling required</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Metal roof cleaning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Tile roof cleaning (multi-day treatment)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Cedar shake cleaning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Licensed & insured</span>
                    </div>
                  </div>

                  <Button variant="cta-orange" className="w-full" onClick={navigateToContact}>
                    Get Fast Quote →
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div id="heavy-moss-examples" className="max-w-5xl mx-auto mt-12 scroll-mt-28">
              <h3 className="text-2xl font-bold text-brand-blue text-center mb-2">
                Heavy moss examples
              </h3>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Jobs like these are closer to $1,500. Your quote depends on roof material, size, pitch, and access.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={heavyMossRoofImg}
                    alt="Heavy moss buildup along roof tile edges before cleaning"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    width={975}
                    height={1300}
                  />
                  <figcaption className="p-4">
                    <p className="font-semibold text-brand-navy">Heavy moss buildup</p>
                  </figcaption>
                </figure>
                <figure className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={heavyMossDebrisImg}
                    alt="Roof with heavy moss - thick moss rows and needle mats covering the shingles"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    width={1299}
                    height={1732}
                  />
                  <figcaption className="p-4">
                    <p className="font-semibold text-brand-navy">Heavy moss and needle buildup</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards - Gutter Cleaning */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-3">
                Complete Gutter Cleaning Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Full gutter clean plus roof blow-off, downspouts flushed and tested.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              {/* Gutter Cleaning Card */}
              <Card className="border-2 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                {/* Hero Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={gutterImg}
                    alt="Gutter cleaning before and after"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-brand-blue">
                    Complete Gutter Cleaning
                  </CardTitle>
                  <CardDescription className="text-base">
                    Complete cleaning with downspout flush
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4 bg-brand-orange/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Complete gutter cleaning</p>
                    <p className="text-3xl font-bold text-brand-blue">Starting at $400</p>
                    <p className="text-sm text-muted-foreground mt-1">Final quote based on home size, buildup, and access</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="font-semibold text-brand-blue text-sm">What affects your price:</p>
                    {gutterFactors.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <IconComponent className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">{item.factor}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Hand-cleaned for thorough results</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Downspouts flushed & tested</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Roof blow-off included</span>
                    </div>
                  </div>

                  <Button variant="cta-orange" className="w-full" onClick={navigateToContact}>
                    Get Fast Quote →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-xl font-semibold text-brand-blue mb-3">Pressure Washing Add-On</h2>
            <p className="text-muted-foreground">
              Available only with roof or gutter cleaning, subject to scope and availability.
              Mention your driveway, patio, or walkway when requesting your quote. No standalone pressure washing.
            </p>
          </div>
        </section>


        {/* Why Fast Quotes */}
        <section className="py-16 md:py-20 bg-brand-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Why We Offer Fast Quotes
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Every home in the Pacific Northwest is different. Tree coverage, roof style, pitch, and access all affect the job. Rather than guess, Dylan will call or text to confirm details and help you get clear pricing.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-3xl font-bold text-brand-orange mb-2">$0</p>
                  <p className="text-sm text-white/70">Fast quote, no surprise charges</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-3xl font-bold text-brand-orange mb-2">No Obligation</p>
                  <p className="text-sm text-white/70">Get your price with zero pressure</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-3xl font-bold text-brand-orange mb-2">Accurate</p>
                  <p className="text-sm text-white/70">Final price matches the agreed scope</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                  Get Fast Quote →
                </Button>
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={() => window.location.href = 'tel:+12067526690'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call or Text 206-752-6690
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Pricing;
