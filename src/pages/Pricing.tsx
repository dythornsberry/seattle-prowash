import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { navigateToContact } from "@/lib/navigation";
import asphaltRoofImg from "@/assets/recent-asphalt-roof-before-after-2026.webp";
import gutterImg from "@/assets/gutter-cleaning-before-after.jpg";
import heavyMossRoofImg from "@/assets/new-roof-before-1.jpg";
import { generateBreadcrumbSchema, injectSchema } from "@/utils/schema";

const heavyMossDebrisImg = "/lovable-uploads/7cdfb095-76e6-4419-b395-a8272819a23b.webp";

const roofPackages = [
  {
    name: "Standard Roof Cleaning",
    description: "Light to moderate moss and debris buildup.",
    price: "$850–$1,200",
    image: asphaltRoofImg,
    alt: "Asphalt roof before and after moss cleaning",
  },
  {
    name: "Heavy Moss Removal",
    description: "For roofs heavily covered in moss.",
    price: "$1,200–$2,000",
    image: heavyMossRoofImg,
    alt: "Roof with thick moss buildup before cleaning",
  },
];

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return injectSchema(generateBreadcrumbSchema([
      { name: "Home", url: "https://www.seattleprowash.com" },
      { name: "Pricing", url: "https://www.seattleprowash.com/pricing" },
    ]));
  }, []);

  return (
    <>
      <SEOHead
        title="Roof & Complete Gutter Cleaning Prices"
        description="Roof and gutter cleaning packages: standard roof cleaning typically $850-$1,200; heavy moss removal typically $1,200-$2,000. Gutter-only cleaning starts at $350."
      />
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="bg-brand-navy py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Roof &amp; Gutter Cleaning Prices</h1>
            <p className="text-lg text-white/90 mb-8">See what's included. Get an exact quote for your home.</p>
            <Button variant="cta-orange" size="xl" onClick={navigateToContact}>Get a Quote</Button>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-3">Roof &amp; Gutter Cleaning Combo</h2>
              <p className="text-lg text-muted-foreground">
                Both options include deep roof cleaning, moss removal and treatment, roof blow-off, gutter cleanout, downspout flushing, and cleanup.
              </p>
              <p className="text-sm font-medium text-brand-blue mt-3">12-month moss-free guarantee included.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {roofPackages.map((service) => (
                <Card key={service.name} className="border border-brand-navy/20 shadow-none overflow-hidden flex flex-col">
                  <img src={service.image} alt={service.alt} className="w-full aspect-[16/9] object-cover" loading="lazy" />
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-brand-blue">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Typical price range</p>
                      <p className="text-3xl font-bold text-brand-blue">{service.price}</p>
                    </div>
                    <Button variant="cta-orange" className="w-full" onClick={navigateToContact}>Get a Quote</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="max-w-3xl mx-auto mt-6 text-center text-sm text-muted-foreground">
              Price depends on roof size, pitch, material, and access. Large or complex roofs may cost more. Metal, tile, and cedar roofs are quoted individually. Exact price confirmed before scheduling.
            </p>

            <div id="heavy-moss-examples" className="max-w-5xl mx-auto mt-12 scroll-mt-28">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Heavy Moss Examples</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <img src={heavyMossRoofImg} alt="Heavy moss buildup along roof tile edges before cleaning" className="w-full aspect-[4/3] object-cover rounded-lg" loading="lazy" width={975} height={1300} />
                  <figcaption className="mt-2 text-sm text-muted-foreground">Heavy moss buildup</figcaption>
                </figure>
                <figure>
                  <img src={heavyMossDebrisImg} alt="Roof with thick moss rows and needle buildup" className="w-full aspect-[4/3] object-cover rounded-lg" loading="lazy" width={1299} height={1732} />
                  <figcaption className="mt-2 text-sm text-muted-foreground">Moss and needle buildup</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">Complete Gutter Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src={gutterImg} alt="Gutter cleaning before and after" className="w-full aspect-[16/9] object-cover rounded-lg" loading="lazy" />
              <div className="space-y-4">
                <p className="text-3xl font-bold text-brand-blue">Starting at $350</p>
                <p className="text-muted-foreground">Roof blow-off, gutter cleanout, downspout flushing, and cleanup.</p>
                <p className="text-sm text-muted-foreground">Moss removal and treatment are not included. Price depends on home size, buildup, and access.</p>
                <Button variant="cta-orange" onClick={navigateToContact}>Get a Quote</Button>
              </div>
            </div>
            <div className="mt-10 border-t pt-6">
              <h3 className="text-xl font-bold text-brand-blue mb-2">House, Concrete &amp; Deck Cleaning</h3>
              <p className="text-muted-foreground">House soft washing, driveway and patio pressure washing, and deck cleaning are quoted by size and condition.</p>
              <Link className="inline-block mt-3 underline underline-offset-4" to="/pressure-washing">View services</Link>
              <p className="text-sm text-muted-foreground mt-3"><Link className="underline underline-offset-4" to="/window-cleaning">Exterior window cleaning</Link> is also available.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-brand-navy text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Your Quote</h2>
            <p className="text-white/80 mb-6">Dylan will call or text to confirm the details.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-orange" size="xl" onClick={navigateToContact}>Get a Quote</Button>
              <Button variant="prowash-secondary" size="xl" asChild>
                <a href="tel:+12067526690"><Phone className="w-5 h-5 mr-2" />Call 206-752-6690</a>
              </Button>
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
