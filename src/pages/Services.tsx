import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Droplet, Home, Zap, Car } from "lucide-react";

// Import service images
import roofMossRemoval from "@/assets/roof-moss-removal-detailed-before-after.jpg";
import gutterCleaning from "@/assets/gutter-cleaning-before-after.jpg";
import houseSoftwash from "@/assets/house-softwash-before-after.jpg";
import pressureWashing from "@/assets/patio-pressure-washing-before-after.jpg";

const Services = () => {
  // Intersection Observer for fade-up animations
  useEffect(() => {
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
      title: "Roof & Gutter Cleaning",
      subtitle: "Moss removal + full gutter cleanouts, done the right way.",
      image: roofMossRemoval,
      description: "Our professional roof cleaning service combines safe soft washing techniques with thorough gutter maintenance to protect your home's most important systems.",
      process: [
        "Brush and blow moss and roof debris",
        "Apply soft wash treatment (manufacturer-recommended method)",
        "Clean out gutters, flush downspouts, ground cleanup, and rinse siding if needed"
      ],
      benefits: [
        "Extends roof lifespan by removing damaging moss and algae",
        "Prevents water damage from clogged gutters",
        "Maintains manufacturer warranty compliance",
        "Improves curb appeal and property value"
      ],
      priceNote: "Starting at $499 for typical single-story homes"
    },
    {
      id: "pressure-washing", 
      icon: Zap,
      title: "Pressure Washing",
      subtitle: "Restore driveways, patios, decks, and walkways.",
      image: pressureWashing,
      description: "Professional pressure washing that removes years of buildup from your concrete surfaces, making them look new again while eliminating slip hazards.",
      process: [
        "Clean concrete, pavers, fencing, and other flatwork",
        "Use professional surface cleaner for streak-free results", 
        "Great for removing algae, moss, oil, and grime"
      ],
      benefits: [
        "Eliminates dangerous slip hazards from moss and algae",
        "Restores original concrete color and texture",
        "Removes stubborn oil stains and discoloration",
        "Increases property value and curb appeal"
      ],
      priceNote: "Starting at $249 for driveways and patios"
    },
    {
      id: "house-washing",
      icon: Home,
      title: "House Washing", 
      subtitle: "Soft wash cleaning for your home's full exterior.",
      image: houseSoftwash,
      description: "Gentle but effective soft washing that cleans your entire home exterior without the damage risk of high-pressure washing.",
      process: [
        "Cleans siding, trim, soffits, eaves, exterior gutters, windows & doors",
        "2nd-story homes included",
        "We use your water source (standard for soft washing)"
      ],
      benefits: [
        "Safe on all siding materials (vinyl, wood, fiber cement)",
        "Removes mold, mildew, and organic stains completely", 
        "Environmentally friendly cleaning solutions",
        "Dramatically improves home appearance"
      ],
      priceNote: "Starting at $499 for typical homes"
    },
    {
      id: "gutter-cleaning",
      icon: Car,
      title: "Gutter Cleaning",
      subtitle: "Complete gutter system maintenance and cleaning.",
      image: gutterCleaning,
      description: "Comprehensive gutter cleaning service that prevents water damage and maintains proper drainage around your home.",
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
      priceNote: "Starting at $249 - often included with roof cleaning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Professional Exterior Cleaning Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Detailed process breakdowns for roof cleaning, pressure washing, and house washing services across the Seattle area.
              </p>
              <div className="flex justify-center">
                <Button variant="prowash-secondary" size="xl">
                  Get Free Quote Today
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

                      {/* Pricing */}
                      <div className="bg-brand-orange/10 rounded-lg p-4 mb-6">
                        <p className="text-brand-navy font-semibold">{service.priceNote}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Final pricing confirmed after on-site evaluation
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="prowash-primary" size="lg">
                          Get Quote for {service.title}
                        </Button>
                        <Button variant="prowash-phone" size="lg">
                          <Phone className="w-4 h-4 mr-2" />
                          206.752.6690
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
                        <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-navy px-6 py-3 rounded-xl font-bold shadow-lg">
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
                <Card className="border-brand-yellow/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-brand-navy">Experience</CardTitle>
                    <CardDescription>Years of professional cleaning expertise</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-brand-yellow/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-brand-navy">Equipment</CardTitle>
                    <CardDescription>Professional-grade tools and techniques</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-brand-yellow/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-brand-navy">Results</CardTitle>
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
            <div className="max-w-4xl mx-auto text-center text-brand-white fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Property?
              </h2>
              <p className="text-xl mb-8 text-brand-white/90">
                Get your free estimate today and see why Seattle area homeowners trust Seattle ProWash.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="prowash-secondary" size="xl">
                  Get My Free Quote
                </Button>
                <Button variant="prowash-phone" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 206.752.6690
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