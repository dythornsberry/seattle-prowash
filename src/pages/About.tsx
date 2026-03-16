import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Calendar } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import MobileBottomBar from "@/components/MobileBottomBar";
import dylanOwnerPhoto from "@/assets/dylan-owner-patio-pressure-washing.jpg";
import dylanRoofWork from "@/assets/dylan-roof-work.jpg";
import technicianHouseWashing from "@/assets/technician-house-washing.jpg";
import technicianTruckPortrait from "@/assets/technician-truck-portrait.jpg";

const About = () => {
  // Scroll to top and set up fade-up animations
  useEffect(() => {
    // Scroll to top on mount
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Dylan & the Team"
        description="Meet Dylan Thornsberry, owner of Seattle ProWash. Kenmore-based roof and gutter cleaning specialists serving Seattle Metro since 2022. 200+ 5-star reviews."
        url="https://www.seattleprowash.com/about"
      />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Meet Dylan, Owner of Seattle ProWash
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Helping Seattle-area homeowners protect their roofs and gutters with safe, effective moss removal and drainage solutions since 2022.
              </p>
            </div>
          </div>
        </section>

        {/* Dylan's Story */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                    Dylan's Story: From Employee to Expert
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      Seattle ProWash is owned and operated by Dylan Thornsberry out of Kenmore, WA. He started the company in 2022 after working for other roof cleaning outfits and deciding he could do it better.
                    </p>

                    <p>
                      The short version: too many homeowners were getting burned by companies that cut corners or disappeared after the first job. Dylan wanted to build something different.
                    </p>

                    <p className="italic text-brand-navy font-medium">
                      "I've worked on every type of roof and gutter system out there. I started Seattle ProWash to give my neighbors the kind of service I'd want on my own house."
                    </p>

                    <p>
                      Keeping up with roof and gutter maintenance is the cheapest way to avoid a $15,000+ roof replacement down the road. That's what drives the work.
                    </p>

                    <p className="italic text-brand-navy font-medium">
                      "A moss-covered roof looks bad, but the real cost is underneath. We catch it before it becomes a big problem."
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-orange mb-2">2022</div>
                      <div className="text-sm text-muted-foreground">Founded Seattle ProWash</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-orange mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Properties Restored</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-orange mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">5-Star Google Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-orange mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Communities Served</div>
                    </div>
                  </div>
                </div>

                <div className="fade-up">
                  <div className="relative">
                    <img
                      src={dylanOwnerPhoto}
                      alt="Dylan, owner of Seattle ProWash, performing professional roof cleaning services"
                      className="rounded-2xl shadow-2xl w-full"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                      15+ Communities Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal CTA from Dylan */}
        <section className="section-spacing bg-brand-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 fade-up">
                <div className="flex-shrink-0">
                  <img
                    src={dylanOwnerPhoto}
                    alt="Dylan, owner of Seattle ProWash"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                    Get a Free Quote
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    "Send us a few photos of your roof and we'll get you a quote the same day. No pressure, no hassle."
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="cta-orange" 
                      size="xl"
                      onClick={navigateToContact}
                    >
                      Get My Free Quote →
                    </Button>
                    <Button 
                      variant="outline"
                      size="xl"
                      onClick={() => window.location.href = 'tel:2067526690'}
                    >
                      Call 206-752-6690
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                The Seattle ProWash Promise
              </h2>
              <p className="text-xl text-muted-foreground">
                We treat your home like our own. Here is our commitment to you:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Built for PNW Weather</h3>
                  <p className="text-muted-foreground">We know what moss, rain, and evergreen needles do to roofs up here. We deal with it every day.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Soft-Wash, No Damage</h3>
                  <p className="text-muted-foreground">We use low-pressure soft-wash methods that clean without harming your shingles or gutters.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">We Clean Up After Ourselves</h3>
                  <p className="text-muted-foreground">When we leave, your property looks better than when we showed up. No mess, no surprises.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">500+ Roofs Cleaned</h3>
                  <p className="text-muted-foreground">We've done this enough to know what works. Check the before-and-after photos if you want proof.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="section-spacing bg-brand-orange/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <div className="bg-brand-white rounded-2xl p-8 shadow-lg border border-brand-orange/20">
                <p className="text-lg text-muted-foreground mb-6">
                  Ready for a moss-free roof? Call <a href="tel:+12067526690" className="text-brand-orange hover:underline">206-752-6690</a> or get your free quote today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    variant="prowash-primary" 
                    size="xl"
                    onClick={navigateToContact}
                  >
                    Get a Fast Quote
                  </Button>
                   <Button 
                     variant="prowash-phone" 
                     size="xl"
                     onClick={() => window.location.href = 'tel:206-752-6690'}
                   >
                     📞 206-752-6690
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team at Work */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                  Our Team at Work
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A few shots from recent jobs around the Seattle area
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="fade-up">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={dylanRoofWork}
                      alt="Dylan working on roof cleaning project"
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-white px-4 py-2 rounded-lg">
                      <div className="font-semibold">Dylan - Leading the Crew</div>
                      <div className="text-sm">Roof Moss Protection Specialist</div>
                    </div>
                  </div>
                </div>

                <div className="fade-up">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={technicianHouseWashing}
                      alt="Professional technician performing roof cleaning"
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-white px-4 py-2 rounded-lg">
                      <div className="font-semibold">Team at Work</div>
                      <div className="text-sm">Roof & Gutter Cleaning Experts</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-1 max-w-2xl mx-auto fade-up">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={technicianTruckPortrait}
                    alt="Seattle ProWash team member with professional equipment"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                    <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-white px-4 py-2 rounded-lg">
                      <div className="font-semibold">Professional-Grade Equipment</div>
                      <div className="text-sm">Ready for Any Challenge</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proudly Serving the Pacific Northwest
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We provide professional cleaning services throughout Kenmore and the greater Seattle area.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  "Kenmore", "Bothell", "Kirkland", "Redmond", "Bellevue", 
                  "Seattle", "Lynnwood", "Edmonds", "Mukilteo", "Mill Creek",
                  "Woodinville", "Sammamish", "Issaquah", "Renton"
                ].map((city) => (
                  <Badge key={city} variant="secondary" className="bg-brand-orange text-white font-semibold py-2 px-4">
                    {city}
                  </Badge>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  variant="prowash-primary" 
                  size="xl"
                  onClick={navigateToContact}
                  className="bg-moss-green hover:bg-moss-green-light"
                >
                  Get Your Free Quote Today
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

export default About;