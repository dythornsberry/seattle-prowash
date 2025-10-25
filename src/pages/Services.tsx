import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Droplet, Home, Zap, Car } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";

// Import service images
import roofMossRemoval from "@/assets/roof-moss-removal-detailed-before-after.jpg";
import gutterCleaning from "@/assets/gutter-cleaning-before-after.jpg";
import houseWashing from "@/assets/house-softwash-before-after.jpg";
import pressureWashing from "@/assets/patio-pressure-washing-before-after.jpg";

const Services = () => {
  // Scroll to top and set up fade-up animations
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      id: "roof-cleaning",
      icon: Droplet,
      title: "Roof Cleaning & Moss Removal",
      subtitle: "Is moss slowly destroying your roof?",
      image: roofMossRemoval,
      description: "Left untreated, roof moss shortens the life of your shingles and can cause major water damage. We remove the moss, treat the roof, and keep your home protected, all backed by our 12-month moss-free guarantee.",
      process: [
        "Brush and blow moss and roof debris",
        "Apply our roof moss protection treatment"
      ],
      benefits: [
        "Extends roof lifespan by removing damaging moss and algae",
        "Maintains roofing manufacturer warranty compliance",
        "Improves curb appeal and property value"
      ],
      priceNote: "Starting at $499 for typical single-story homes",
      priceHelper: "Final price after quick photo or drive-by evaluation.",
      crossPromo: "For complete protection, pair this with our Gutter Cleaning service. Ask about our package discount!"
    },
    {
      id: "gutter-cleaning",
      icon: Car,
      title: "Gutter Cleaning",
      subtitle: "Complete gutter system maintenance and cleaning",
      image: gutterCleaning,
      description: "Comprehensive gutter cleaning service that prevents water damage and maintains proper drainage around your home. In the Pacific Northwest, we recommend cleaning gutters twice per year to prevent damage to your home",
      process: [
        "Remove all debris from gutters and downspouts",
        "Flush entire gutter system to ensure proper flow",
        "Check for damage and potential issues",
        "Clean up all debris from property"
      ],
      benefits: [
        "Prevents expensive water damage to foundation",
        "Eliminates pest breeding grounds",
        "Maintains proper roof drainage",
        "Extends gutter system lifespan"
      ],
      priceNote: "The perfect partner to our Roof Cleaning service. Standalone gutter cleaning starts at $249. Ask about our package discount when you book both!",
      priceHelper: "Final price after quick photo or drive-by evaluation."
    },
    {
      id: "pressure-washing", 
      icon: Zap,
      title: "Pressure Washing (Supplementary Service)",
      subtitle: "Restore driveways, patios, decks, and walkways",
      image: pressureWashing,
      description: "Professional pressure washing that removes years of buildup from your concrete surfaces, making them look new again. Perfect addition to our roof and gutter services.",
      process: [
        "Clean concrete, pavers, fencing, and other flat surfaces",
        "Use professional surface cleaner for streak-free results"
      ],
      benefits: [
        "Eliminates dangerous slip hazards from moss and algae",
        "Restores original concrete color and texture",
        "Removes discoloration and surface stains",
        "Increases property value and curb appeal"
      ],
      priceNote: "Starting at $249 for driveways and patios",
      priceHelper: "Final price after quick photo or drive-by evaluation."
    },
    {
      id: "house-washing",
      icon: Home,
      title: "House Washing (Supplementary Service)", 
      subtitle: "Gentle house washing for your home's full exterior",
      image: houseWashing,
      description: "Our gentle but effective house washing cleans your entire home's exterior, including 2nd-story homes, without the risk of damage from high-pressure washing.",
      process: [
        "Cleans siding, trim, soffits, eaves, exterior gutters, windows & doors"
      ],
      benefits: [
        "Safe on all siding materials (vinyl, wood, hardi-board siding)",
        "Removes mold, mildew, and organic stains completely", 
        "Environmentally friendly cleaning solutions",
        "Dramatically improves home appearance"
      ],
      priceNote: "Starting at $499 for typical homes",
      priceHelper: "Final price after quick photo or drive-by evaluation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Your Home, Brilliantly Clean & Protected.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                See our proven processes for restoring your roof, siding, and walkways to their original beauty.
              </p>
              <div className="flex justify-center">
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={navigateToContact}
                >
                  Get a Fast Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Sections */}
        {services.map((service, index) => {
          const IconComponent = service.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section key={service.id} id={service.id} className="section-spacing">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Content */}
                    <div className={`fade-up ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full">
                          <IconComponent className="w-6 h-6 text-brand-orange" />
                        </div>
                        <Badge variant="outline" className="text-brand-orange border-brand-orange">
                          Professional Service
                        </Badge>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-xl text-brand-orange font-semibold mb-6">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>

                      {/* Our Process */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-navy mb-4">Our Process:</h3>
                        <ul className="space-y-3">
                          {service.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-navy mb-4">Benefits:</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service-specific mini FAQ */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-navy mb-4">Common Questions</h3>
                        <div className="space-y-4">
                          {service.id === "roof-cleaning" && (
                            <>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: Is our roof moss protection treatment safe for my roof?</h4>
                                <p className="text-muted-foreground text-sm">A: Yes. Our moss protection treatment kills moss and algae at the root without high pressure. It protects shingles and keeps your warranty valid.</p>
                              </div>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: What types of roofs do you clean?</h4>
                                <p className="text-muted-foreground text-sm">A: We specialize in metal, asphalt/composite, and flat roofs (EPDM, TPO, PVC). We don't clean cedar shake or tile roofs; we recommend contacting a roofing professional for these specialized roof types.</p>
                              </div>
                            </>
                          )}
                          {service.id === "pressure-washing" && (
                            <>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: Will pressure washing damage my surfaces?</h4>
                                <p className="text-muted-foreground text-sm">A: No. We use appropriate pressure levels and professional surface cleaners to protect your concrete while removing all buildup.</p>
                              </div>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: How long does pressure washing take?</h4>
                                <p className="text-muted-foreground text-sm">A: Most driveways and patios take 2-3 hours depending on size and condition.</p>
                              </div>
                            </>
                          )}
                          {service.id === "house-washing" && (
                            <>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: Is house washing safe for all siding types?</h4>
                                <p className="text-muted-foreground text-sm">A: Yes. Our gentle house washing method is safe for vinyl, wood, hardiboard, and all common siding materials.</p>
                              </div>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: Do you clean windows during house washing?</h4>
                                <p className="text-muted-foreground text-sm">A: Yes, we clean exterior windows and doors as part of our complete house washing service.</p>
                              </div>
                            </>
                          )}
                          {service.id === "gutter-cleaning" && (
                            <>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: How often should gutters be cleaned in Seattle?</h4>
                                <p className="text-muted-foreground text-sm">A: We recommend twice per year due to our wet climate and heavy leaf fall.</p>
                              </div>
                              <div className="bg-brand-white border border-brand-orange/20 rounded-lg p-4">
                                <h4 className="font-bold text-brand-navy mb-2 text-sm">Q: Do you check for gutter damage?</h4>
                                <p className="text-muted-foreground text-sm">A: Yes, we inspect for damage and potential issues during cleaning and report our findings.</p>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="mt-4">
                          <a 
                            href="/faq" 
                            className="text-brand-orange hover:text-brand-orange/80 text-sm font-medium"
                          >
                            More questions? See our full FAQ here
                          </a>
                        </div>
                      </div>

                      {/* Cross-promotion for roof cleaning */}
                      {service.crossPromo && (
                        <div className="mb-6">
                          <p className="text-brand-orange font-medium text-sm">
                            {service.crossPromo}
                          </p>
                        </div>
                      )}

                      {/* Pricing */}
                      <div className="bg-brand-orange/10 rounded-lg p-4 mb-6">
                        <p className="text-brand-navy font-semibold">{service.priceNote}</p>
                        {(service as any).priceHelper && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {(service as any).priceHelper}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="prowash-primary" 
                  size="lg"
                  onClick={navigateToContact}
                        >
                          Get Quote for {service.title}
                        </Button>
                        <Button 
                          variant="prowash-phone" 
                          size="lg"
                          onClick={() => window.location.href = 'tel:206-752-6690'}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          206-752-6690
                        </Button>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`fade-up ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={`${service.title} before and after results`}
                          className="rounded-2xl shadow-2xl w-full"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                          Real Results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Why Choose Seattle ProWash */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Choose Seattle ProWash?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card className="border-brand-orange/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-brand-navy">PNW Climate Expertise</CardTitle>
                    <CardDescription>We specialize in cleaning techniques that are proven to combat the specific challenges of our Pacific Northwest climate, from heavy moss to stubborn grime.</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-brand-orange/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-brand-navy">Superior, Damage-Free Results</CardTitle>
                    <CardDescription>Professional-grade tools and techniques</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-brand-orange/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-brand-navy">A Track Record of Transformations</CardTitle>
                    <CardDescription>Proven transformations across Seattle area</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Property?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Get your free estimate today and see why Seattle area homeowners trust Seattle ProWash.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="prowash-secondary" 
                  size="xl"
                  onClick={navigateToContact}
                >
                  Get My Free Quote
                </Button>
                <Button 
                  variant="prowash-phone" 
                  size="xl"
                  onClick={() => window.location.href = 'tel:206-752-6690'}
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
    </div>
  );
};

export default Services;