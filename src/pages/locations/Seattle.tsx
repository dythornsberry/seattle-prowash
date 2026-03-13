import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { injectSchema } from "@/utils/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import EnhancedTrustBar from "@/components/EnhancedTrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, MapPin } from "lucide-react";
import newRoofBefore1 from "@/assets/new-roof-before-1.jpg";
import metalRoofCleaningBeforeAfter from "@/assets/metal-roof-cleaning-before-after.jpg";
import roofMossRemovalDetailedBeforeAfter from "@/assets/roof-moss-removal-detailed-before-after.jpg";
import gutterCleaningBeforeAfter from "@/assets/gutter-cleaning-before-after.jpg";

const Seattle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject Service Schema for Seattle
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Roof and Gutter Cleaning",
      "areaServed": { "@type": "City", "name": "Seattle" },
      "provider": {
        "@type": "LocalBusiness",
        "name": "Seattle ProWash",
        "areaServed": "Seattle Metro"
      }
    };

    // Inject FAQ Schema for Seattle
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should gutters be cleaned in Seattle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Seattle's wet climate with heavy leaf fall and needle drop from surrounding evergreens, we recommend cleaning gutters twice per year-typically in late spring after pollen season and again in late fall after leaves drop. This prevents clogging that can lead to foundation damage and roof leaks during our rainy winters."
          }
        },
        {
          "@type": "Question",
          "name": "Is your roof cleaning warranty-safe in Seattle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We use a low-pressure soft-wash method specifically designed for Seattle's common roof types (composite, metal, asphalt). Our moss treatment kills growth at the root without damaging shingles or voiding manufacturer warranties, unlike high-pressure washing which can strip granules and cause premature aging."
          }
        },
        {
          "@type": "Question",
          "name": "Do you use high pressure or harsh chemicals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No high pressure on roofing materials. We apply an eco-friendly moss treatment that breaks down naturally and won't harm your landscaping when properly rinsed. For gutters, we hand-scoop debris and use controlled water flow for downspout flushing."
          }
        },
        {
          "@type": "Question",
          "name": "What's a typical price range in Seattle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Seattle homes range from $300-$600 for standard single-story roof cleaning and $400-$800 for two-story homes. Gutter cleaning typically runs $250-$400 depending on home size and gutter length. Final pricing depends on roof pitch, access, and specific conditions-we provide exact quotes after a quick photo review."
          }
        },
        {
          "@type": "Question",
          "name": "Will moss treatment affect my landscaping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our moss treatment is plant-safe when applied correctly. We pre-wet landscaping, cover sensitive plants, and thoroughly rinse all surfaces. The diluted runoff breaks down quickly and won't harm grass, shrubs, or garden beds around your Seattle home."
          }
        }
      ]
    };

    const cleanupService = injectSchema(serviceSchema);
    const cleanupFAQ = injectSchema(faqSchema);

    return () => {
      cleanupService();
      cleanupFAQ();
    };
  }, []);

  const localJobs = [
    {
      neighborhood: "Queen Anne",
      description: "2-story composite roof, moss removal + gutter flush",
      image: newRoofBefore1
    },
    {
      neighborhood: "Ballard",
      description: "1-story metal roof cleaning, downspout clearing",
      image: metalRoofCleaningBeforeAfter
    },
    {
      neighborhood: "Green Lake",
      description: "2-story asphalt, heavy moss + full gutter service",
      image: roofMossRemovalDetailedBeforeAfter
    },
    {
      neighborhood: "Capitol Hill",
      description: "Multi-level composite, gutter guards cleaned",
      image: gutterCleaningBeforeAfter
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      neighborhood: "Fremont",
      quote: "Dylan's team did an amazing job on our moss-covered roof. They were careful, thorough, and left everything spotless."
    },
    {
      name: "James T.",
      neighborhood: "Wallingford",
      quote: "Finally found a company that doesn't use high pressure. Our shingles look great and warranty is still valid."
    },
    {
      name: "Lisa K.",
      neighborhood: "Greenwood",
      quote: "Gutters were overflowing every rain. They cleared everything, tested downspouts, and sent before/after photos. Perfect."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Roof & Gutter Cleaning - Seattle"
        description="Kenmore-based roof and gutter cleaning specialists serving Seattle. Warranty-safe moss removal for Queen Anne, Ballard, Green Lake, Capitol Hill and all Seattle neighborhoods."
        url="https://www.seattleprowash.com/seattle-roof-gutter-cleaning"
      />
      <Header />
      <EnhancedTrustBar />
      
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span className="text-brand-orange font-semibold">Serving Seattle</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Roof & Gutter Cleaning in Seattle
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Kenmore-based specialists protecting Seattle homes from moss damage and drainage problems. From Queen Anne to Ballard, Green Lake to Capitol Hill-we serve all Seattle neighborhoods with warranty-safe roof cleaning and complete gutter maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta-orange" 
                  size="lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Get Seattle Quote
                </Button>
                <Button 
                  variant="prowash-secondary" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+12067526690'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  206-752-6690
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Jobs Gallery */}
        <section className="section-spacing bg-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
                Recent Seattle Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {localJobs.map((job, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={job.image}
                      alt={`${job.neighborhood}, Seattle - ${job.description}`}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <p className="font-bold text-brand-navy mb-1">{job.neighborhood}, Seattle</p>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roof Cleaning in Seattle */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-navy">
                Roof Cleaning in Seattle
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seattle's wet climate creates perfect conditions for moss, algae, and lichen growth on roofs. We specialize in safe removal for the composite, asphalt, and metal roofs common throughout Seattle neighborhoods.
              </p>
              
              <div className="bg-off-white border-l-4 border-brand-orange p-6 rounded mb-8">
                <h3 className="font-bold text-brand-navy mb-4">Our Warranty-Safe Process:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Soft-brush removal of moss, debris, and organic buildup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Low-pressure rinse (never high-pressure blasting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Eco-friendly moss treatment applied at the root</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Complete debris containment and cleanup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Before/after photos sent on completion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded mb-8">
                <p className="text-sm text-red-900">
                  <strong>What We Never Do:</strong> High-pressure washing (damages shingles), harsh bleach (harms plants), walking on fragile tiles. We protect your warranty and your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gutter Cleaning in Seattle */}
        <section className="section-spacing bg-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-navy">
                Gutter Cleaning in Seattle
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seattle's heavy rainfall demands fully functional gutters. Clogged systems lead to foundation damage, basement flooding, and landscape erosion.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Hand Removal:</strong> We scoop all debris-leaves, needles, granules-by hand
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Downspout Test:</strong> Every downspout is flushed to confirm full flow
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Debris Removal:</strong> All material is bagged and hauled away
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Photo Proof:</strong> Completion photos sent showing clean gutters and clear flow
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-navy text-center">
                Seattle Pricing Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-4">Roof Cleaning</h3>
                    <p className="text-3xl font-bold text-brand-orange mb-2">$300 – $800</p>
                    <p className="text-sm text-muted-foreground mb-4">Typical Seattle homes</p>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• 1-story: $300-$600</li>
                      <li>• 2-story: $400-$800</li>
                      <li>• Based on roof size, pitch, access</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-4">Gutter Cleaning</h3>
                    <p className="text-3xl font-bold text-brand-orange mb-2">$250 – $400</p>
                    <p className="text-sm text-muted-foreground mb-4">Most Seattle homes</p>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• 1-story: $250-$350</li>
                      <li>• 2-story: $250-$400</li>
                      <li>• Includes downspout flush & haul-away</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Exact quote provided after quick photo review. No surprise charges.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section-spacing bg-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-navy text-center">
                What Seattle Customers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex text-brand-orange mb-3">★★★★★</div>
                      <p className="text-muted-foreground italic mb-4">"{review.quote}"</p>
                      <p className="font-bold text-brand-navy">{review.name}</p>
                      <p className="text-sm text-brand-orange">{review.neighborhood}, Seattle</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-navy text-center">
                Seattle FAQs
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-navy mb-2">How often should gutters be cleaned in Seattle?</h3>
                    <p className="text-muted-foreground">In Seattle's wet climate with heavy leaf fall and needle drop from surrounding evergreens, we recommend cleaning gutters twice per year-typically in late spring after pollen season and again in late fall after leaves drop.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-navy mb-2">Is your roof cleaning warranty-safe in Seattle?</h3>
                    <p className="text-muted-foreground">Yes. We use a low-pressure soft-wash method specifically designed for Seattle's common roof types (composite, metal, asphalt). Our moss treatment kills growth at the root without damaging shingles or voiding manufacturer warranties.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-navy mb-2">Do you use high pressure or harsh chemicals?</h3>
                    <p className="text-muted-foreground">No high pressure on roofing materials. We apply an eco-friendly moss treatment that breaks down naturally and won't harm your landscaping when properly rinsed.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-navy mb-2">What's a typical price range in Seattle?</h3>
                    <p className="text-muted-foreground">Most Seattle homes range from $300-$600 for standard single-story roof cleaning and $400-$800 for two-story homes. Gutter cleaning typically runs $250-$400 depending on home size and gutter length.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-navy mb-2">Will moss treatment affect my landscaping?</h3>
                    <p className="text-muted-foreground">Our moss treatment is plant-safe when applied correctly. We pre-wet landscaping, cover sensitive plants, and thoroughly rinse all surfaces. The diluted runoff breaks down quickly and won't harm grass, shrubs, or garden beds.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section-spacing bg-off-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-brand-navy">Learn More</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/roof-cleaning">
                  <Button variant="outline">Roof Cleaning Details</Button>
                </Link>
                <Link to="/gutter-cleaning">
                  <Button variant="outline">Gutter Cleaning Details</Button>
                </Link>
                <Link to="/service-areas">
                  <Button variant="outline">All Service Areas</Button>
                </Link>
                <Link to="/#contact">
                  <Button variant="prowash-secondary">Get Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/95">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Protect Your Seattle Home?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get your free quote today. Same-day estimates available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta-orange" 
                  size="lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Get Free Quote
                </Button>
                <Button 
                  variant="prowash-secondary" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+12067526690'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
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

export default Seattle;
