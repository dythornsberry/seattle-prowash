import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Droplet, Home, Phone } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import roofImg from "@/assets/roof-cleaning-before-after-new.jpg";
import gutterImg from "@/assets/gutter-cleaning-before-after.jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Roof Cleaning",
      icon: Droplet,
      image: roofImg,
      href: "/roof-cleaning",
      badge: "Most Popular",
      price: "Starting at $849",
      description: "Warranty-safe moss removal for asphalt, metal, and composite roofs. Includes gutter cleaning and a 12-month moss-free guarantee.",
      includes: [
        "Safe, low-pressure cleaning",
        "Moss treatment & prevention",
        "Gutter cleaning included",
        "12-month moss-free guarantee",
      ],
    },
    {
      title: "Complete Gutter Cleaning",
      icon: Home,
      image: gutterImg,
      href: "/gutter-cleaning",
      price: "Starting at $400",
      description: "Complete gutter system cleanout with downspout flush and roof blow-off. Hand-cleaned for thorough results.",
      includes: [
        "Hand removal of all debris",
        "Downspout flush & testing",
        "Roof debris blow-off",
        "Debris bagged & hauled away",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="All Services"
        description="Roof cleaning starting at $849 and complete gutter cleaning starting at $400 in Seattle, Kenmore, Bothell, and Kirkland."
        url="https://www.seattleprowash.com/services"
      />
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 mb-4">
              Roof &amp; Gutter Care
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Roof cleaning, moss removal, and complete gutter cleaning. Based in Kenmore, serving North Seattle and the Eastside.
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

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                return (
                  <Card key={index} className="border-2 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        {service.badge && (
                          <Badge className="bg-brand-orange text-white border-brand-orange text-xs">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-sm font-semibold text-brand-orange mb-3">{service.price}</p>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                      <ul className="space-y-2 mb-6">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={service.href}>
                        <Button variant="prowash-secondary" size="lg" className="w-full">
                          Learn More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p id="add-ons" className="max-w-6xl mx-auto mt-6 text-sm text-muted-foreground text-center">
              Pressure washing is available only as an add-on to roof or gutter cleaning, subject to scope and availability. No standalone pressure washing.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Tell us about your property and we'll recommend the right services. Fast quotes, no obligation.
            </p>
            <Button variant="cta-orange" size="xl" onClick={navigateToContact}>
              Get Fast Quote →
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Services;
