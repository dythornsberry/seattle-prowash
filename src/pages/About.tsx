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
                      Seattle ProWash is owned and operated by Dylan Thornsberry, a Kenmore-based local who built this company to serve Seattle-area homeowners with honest, effective exterior cleaning.
                    </p>
                    
                    <p>
                      Dylan started this company with a simple belief: regular property maintenance is the single biggest investment you can make in your home.
                    </p>
                    
                    <p>
                      After seeing too many homes suffering considerable damage from neglected, clogged gutters and moss-covered roofs, he knew homeowners needed a reliable partner to protect their biggest asset. 
                    </p>
                    
                    <p className="italic text-brand-navy font-medium">
                      "I've worked on every kind of roof and gutter system you can imagine. I know what works best for each property. I started Seattle ProWash to bring honest, reliable cleaning to the people in my community."
                    </p>
                    
                    <p>
                      Beyond just preventing damage, simple maintenance dramatically boosts curb appeal and raises the value of a home. 
                    </p>
                    
                    <p className="italic text-brand-navy font-medium">
                      "Consistently maintaining your exterior doesn't just add value—it keeps you from facing costly repairs or needing premature roof and gutter replacements. That is truly why we exist."
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
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                    Let Us Show You the Difference
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    "I started this company to provide the honest, high-quality service our community deserves. Contact us today for your free, no-pressure quote, and let us earn your trust."
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
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">True Local Mastery</h3>
                  <p className="text-muted-foreground">We're experts in protecting Pacific Northwest homes from our specific climate.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">A Flawless Finish, Guaranteed</h3>
                  <p className="text-muted-foreground">Our gentle soft-wash method cleans completely without risking damage to your roof or gutters.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Unwavering Respect for Your Home</h3>
                  <p className="text-muted-foreground">We take pride in our professionalism, from clear communication to a spotless cleanup.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-orange/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Results That Speak for Themselves</h3>
                  <p className="text-muted-foreground">With 500+ properties restored, we deliver transformations that boost your home's value and curb appeal.</p>
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
                  See our professional team in action, delivering exceptional results across the Pacific Northwest
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="fade-up">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={dylanRoofWork}
                      alt="Dylan working on roof cleaning project"
                      className="w-full h-80 object-cover"
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