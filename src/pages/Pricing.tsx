import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Phone, CheckCircle, Droplet, Home, Ruler, Mountain, TreePine } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roofFactors = [
    { icon: Ruler, factor: "Roof size", description: "Square footage directly affects time and materials" },
    { icon: Mountain, factor: "Roof pitch", description: "Steeper roofs require additional safety equipment" },
    { icon: TreePine, factor: "Moss severity", description: "Heavy moss buildup needs more treatment" },
    { icon: Home, factor: "Roof type", description: "Composition, cedar, metal, or tile" },
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
        title="Pricing | Roof & Gutter Cleaning"
        description="Transparent pricing for roof cleaning and gutter cleaning services in the Seattle area. Get a free personalized quote for your home."
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
              Honest Pricing for Quality Work
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Every home is unique. We provide free, personalized quotes based on your specific needs—no hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                Get My Free Quote →
              </Button>
              <Button 
                variant="prowash-secondary" 
                size="xl"
                onClick={() => window.location.href = 'tel:+12067526690'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 206-752-6690
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Roof Cleaning Card */}
              <Card className="border-2 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4 mx-auto">
                    <Droplet className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-blue">
                    Roof Cleaning
                  </CardTitle>
                  <CardDescription className="text-base">
                    Complete service: moss removal, treatment & gutter cleaning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4 bg-brand-orange/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Typical range</p>
                    <p className="text-3xl font-bold text-brand-blue">$500 – $2,000</p>
                    <p className="text-sm text-muted-foreground mt-1">Based on roof size & conditions</p>
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
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Gutter cleaning included</span>
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
                    Get My Free Quote →
                  </Button>
                </CardContent>
              </Card>

              {/* Gutter Cleaning Card */}
              <Card className="border-2 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-4 mx-auto">
                    <Home className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-blue">
                    Gutter Cleaning
                  </CardTitle>
                  <CardDescription className="text-base">
                    Complete cleaning with downspout flush
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4 bg-brand-orange/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Typical range</p>
                    <p className="text-3xl font-bold text-brand-blue">$300 – $600</p>
                    <p className="text-sm text-muted-foreground mt-1">Based on home size & accessibility</p>
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
                    Get My Free Quote →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Why Free Quotes */}
        <section className="py-16 md:py-20 bg-brand-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Why We Offer Free Quotes
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Every home in the Pacific Northwest is different. Tree coverage, roof style, pitch, and access all affect the job. Rather than guess, we provide a personalized quote based on your specific situation—always free, always accurate.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-3xl font-bold text-brand-orange mb-2">Same Day</p>
                  <p className="text-sm text-white/70">Most quotes delivered within hours</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-3xl font-bold text-brand-orange mb-2">No Obligation</p>
                  <p className="text-sm text-white/70">Get your price with zero pressure</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-3xl font-bold text-brand-orange mb-2">Accurate</p>
                  <p className="text-sm text-white/70">Final price matches your quote</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                  Get My Free Quote →
                </Button>
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={() => window.location.href = 'tel:+12067526690'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 206-752-6690
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
