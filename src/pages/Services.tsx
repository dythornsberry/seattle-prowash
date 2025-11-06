import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Droplet, Sparkles } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Services - Roof & Gutter Cleaning"
        description="Kenmore-based roof and gutter cleaning specialists serving Seattle Metro. Warranty-safe moss removal, complete gutter maintenance, and debris removal services."
        url="https://www.seattleprowash.com/services"
      />
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Roof & Gutter Cleaning Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Kenmore-based specialists protecting Seattle Metro homes from moss damage and drainage problems
              </p>
            </div>
          </div>
        </section>

        {/* Two service cards */}
        <section className="section-spacing bg-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              
              {/* Roof Cleaning Card */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full">
                      <Droplet className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-navy">Roof Cleaning</h2>
                  </div>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Warranty-safe moss removal for asphalt, metal, and composite roofs across Seattle Metro.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">No high-pressure damage to shingles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Moss treatment at the root</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Complete debris containment & cleanup</span>
                    </li>
                  </ul>

                  <Link to="/roof-cleaning">
                    <Button variant="prowash-secondary" size="lg" className="w-full">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Gutter Cleaning Card */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full">
                      <Sparkles className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-navy">Gutter Cleaning</h2>
                  </div>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Complete gutter system maintenance with hand-scooping, downspout flushing, and photo proof on completion.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Hand removal of all debris</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Downspout test & flush</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Debris bagged & hauled away</span>
                    </li>
                  </ul>

                  <Link to="/gutter-cleaning">
                    <Button variant="prowash-secondary" size="lg" className="w-full">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;