import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Phone, CheckCircle, Building2, Droplet, Home, Sparkles } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import commercialImg from "@/assets/commercial-building-washing.jpg";
import commercialEntranceAfter from "@/assets/commercial-entrance-after.jpg";

const Commercial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const commercialServices = [
    {
      title: "Commercial Power Washing",
      icon: Sparkles,
      description: "Storefronts, parking garages, sidewalks, loading docks, and building exteriors. We remove oil stains, gum, graffiti, and years of buildup.",
      includes: [
        "Concrete & asphalt surface cleaning",
        "Building exterior washing",
        "Grease & oil stain removal",
        "Sidewalk & entryway cleaning",
      ],
    },
    {
      title: "Commercial Roof Cleaning",
      icon: Droplet,
      description: "Flat roofs, metal roofs, and commercial composite roofing. Moss, algae, and debris removal to protect your investment and extend roof life.",
      includes: [
        "Low-pressure safe cleaning",
        "Moss & algae treatment",
        "Debris removal & disposal",
        "Preventative treatment application",
      ],
    },
    {
      title: "Commercial Gutter Cleaning",
      icon: Home,
      description: "Complete gutter system maintenance for commercial buildings. Prevent costly water damage to your property with regular cleaning.",
      includes: [
        "Full gutter system cleanout",
        "Downspout flush & testing",
        "Debris removal & hauling",
        "Drainage inspection",
      ],
    },
    {
      title: "Commercial Window Cleaning",
      icon: Building2,
      description: "Interior and exterior window cleaning for offices, retail, and multi-story buildings. Crystal-clear results that make your business shine.",
      includes: [
        "Exterior window cleaning",
        "Storefront glass cleaning",
        "Frame & sill detailing",
        "Hard water stain removal",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Commercial Cleaning Services"
        description="Commercial power washing, roof cleaning, gutter cleaning, and window cleaning for businesses in the Seattle area. Licensed & insured. Free estimates."
        url="https://www.seattleprowash.com/commercial"
      />

      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={commercialImg}
              alt="Commercial building power washing"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-brand-navy/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 mb-4">
              Commercial Services
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Commercial Cleaning Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Keep your business looking its best. Licensed, insured, and equipped for commercial properties across greater Seattle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                Get a Free Estimate →
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

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Our Commercial Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From storefronts to warehouses, we handle properties of all sizes with professional-grade equipment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {commercialServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-2 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full">
                          <IconComponent className="w-6 h-6 text-brand-orange" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-brand-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Businesses Choose Seattle ProWash
              </h2>
              <div className="grid sm:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-orange mb-2">Licensed</p>
                  <p className="text-sm text-white/70">Fully licensed & insured for commercial work</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-orange mb-2">Flexible</p>
                  <p className="text-sm text-white/70">Evenings & weekends available to minimize disruption</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-orange mb-2">Reliable</p>
                  <p className="text-sm text-white/70">Consistent quality with recurring service plans</p>
                </div>
              </div>
              <div className="text-center">
                <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
                  Request a Commercial Estimate →
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

export default Commercial;
