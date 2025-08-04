import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Calendar } from "lucide-react";
import dylanOwnerPhoto from "@/assets/dylan-owner-patio-pressure-washing.jpg";
import dylanRoofWork from "@/assets/dylan-roof-work.jpg";
import technicianHousWashing from "@/assets/technician-house-washing.jpg";
import technicianTruckPortrait from "@/assets/technician-truck-portrait.jpg";

const About = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-brand-white fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Dylan & The Seattle ProWash Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-brand-white/90">
                Transforming Pacific Northwest properties since 2022 with expert soft washing and pressure washing services.
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
                      After years of working for other companies in the pressure washing industry, Dylan saw an opportunity to do things better. In 2022, he founded Seattle ProWash with a clear mission: deliver superior soft washing and pressure washing services using high-quality equipment and proven techniques.
                    </p>
                    <p>
                      "I learned the industry inside and out working for other companies," Dylan explains. "But I wanted to focus on what really matters: exceptional results that restore properties to their best condition."
                    </p>
                    <p>
                      Dylan's passion lies in property restoration. He genuinely believes that professional cleaning is the single greatest return on investment any homeowner can make. As a Pacific Northwest local, Dylan takes immense pride in helping his neighbors protect and beautify their homes against our unique climate. "When you see a moss-covered roof or stained driveway transformed back to like-new condition, you understand the incredible value we provide."
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">2022</div>
                      <div className="text-sm text-muted-foreground">Founded Seattle ProWash</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Properties Restored</div>
                    </div>
                  </div>
                </div>

                <div className="fade-up">
                  <div className="relative">
                    <img
                      src={dylanOwnerPhoto}
                      alt="Dylan, owner of Seattle ProWash, pressure washing a patio"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-navy px-6 py-3 rounded-xl font-bold shadow-lg">
                      Owner & Operator
                    </div>
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
                Why Property Owners Choose Seattle ProWash
              </h2>
              <p className="text-xl text-muted-foreground">
                Our commitment to excellence and genuine care for your property sets us apart.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="fade-up bg-brand-white border-brand-yellow/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Industry Experience</h3>
                  <p className="text-muted-foreground">Years of hands-on experience in professional cleaning techniques and equipment operation.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-yellow/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Quality Equipment</h3>
                  <p className="text-muted-foreground">Professional-grade soft washing and pressure washing equipment for superior results.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-yellow/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Customer Focused</h3>
                  <p className="text-muted-foreground">Every project is treated with the care and attention your property deserves.</p>
                </CardContent>
              </Card>

              <Card className="fade-up bg-brand-white border-brand-yellow/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Proven Results</h3>
                  <p className="text-muted-foreground">Consistent, reliable cleaning that restores your property's value and curb appeal.</p>
                </CardContent>
              </Card>
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
                  See our professional team in action, delivering exceptional results across the Pacific Northwest.
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
                    <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-brand-white px-4 py-2 rounded-lg">
                      <div className="font-semibold">Dylan - Owner</div>
                      <div className="text-sm">Roof Soft Washing Specialist</div>
                    </div>
                  </div>
                </div>

                <div className="fade-up">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={technicianHousWashing}
                      alt="Professional technician house washing"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-brand-white px-4 py-2 rounded-lg">
                      <div className="font-semibold">Professional Team</div>
                      <div className="text-sm">House Washing Experts</div>
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
                  <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-brand-white px-4 py-2 rounded-lg">
                    <div className="font-semibold">Fully Equipped</div>
                    <div className="text-sm">Professional Grade Equipment</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                Proudly Serving the Pacific Northwest
              </h2>
              <p className="text-xl text-brand-white/90 mb-8">
                We provide professional cleaning services throughout the greater Seattle area.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  "Kenmore", "Bothell", "Kirkland", "Redmond", "Bellevue", 
                  "Seattle", "Lynnwood", "Edmonds", "Mukilteo", "Mill Creek",
                  "Woodinville", "Sammamish", "Issaquah", "Renton"
                ].map((city) => (
                  <Badge key={city} variant="secondary" className="bg-brand-yellow text-brand-navy font-semibold py-2 px-4">
                    {city}
                  </Badge>
                ))}
              </div>

              <div className="text-center">
                <Button variant="prowash-secondary" size="xl">
                  Get Your Free Quote Today
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

export default About;