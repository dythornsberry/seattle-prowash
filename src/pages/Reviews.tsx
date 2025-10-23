import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, ExternalLink, ShieldCheck } from "lucide-react";

const Reviews = () => {
  useEffect(() => {
    document.title = "Customer Reviews | Seattle ProWash";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read authentic customer reviews for Seattle ProWash roof and gutter cleaning services. 180+ five-star reviews from satisfied customers in Kenmore, Bothell, and Kirkland."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const featuredReviews = [
    {
      name: "Lucas H.",
      rating: 5,
      service: "Deck Power Washing",
      quote: "I needed my deck power washed immediately and heard from my neighbors that Seattle Prowash was legit. Dylan and his team did an excellent job and I was thoroughly impressed with their work.",
      verified: true
    },
    {
      name: "Aileen I.",
      rating: 5,
      service: "Pergola Roof Cleaning",
      quote: "Really happy with the work the Seattle Pro Wash team did to clean the transparent roof of my backyard pergola. It's a pretty high structure and a bit awkward to access, but they had the skills and tools to do the job right. The roof looks like new again. Quick friendly and efficient, highly recommended!",
      verified: true
    },
    {
      name: "Daniel S.",
      rating: 5,
      service: "Roof Cleaning",
      quote: "These guys did an amazing job cleaning up my roof. They did a great job not damaging anything and i would definitely hire them again down the line.",
      verified: true
    },
    {
      name: "Jon R.",
      rating: 5,
      service: "Roof & Concrete Cleaning",
      quote: "My experience with Seattle pro wash has always been very good. They follow up on my calls, they use modern scheduling software that sends text confirmation/reminders which I like. On site they have always been very professional.",
      verified: true
    },
    {
      name: "YT C.",
      rating: 5,
      service: "Driveway & Patio Cleaning",
      quote: "Dylan is prompt, attentive to details and caring. He power washed our front driveway and back yard. The work was meticulously done and he made sure all the furniture was moved back in place before leaving. He even cleaned our side walkway!",
      verified: true
    },
    {
      name: "Miguel A.",
      rating: 5,
      service: "Roof & Gutter Cleaning",
      quote: "Great job on my roof and gutters, friendly crew. Customer is always right attitude, price fair. Recommend them!",
      verified: true
    }
  ];

  const reviews = [
    ...featuredReviews,
  ];

  return (
    <>
      <StickyTopBar />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/95">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-brand-orange text-white mb-6 text-lg px-6 py-2">
                <Star className="w-5 h-5 mr-2 fill-white" />
                180+ Five-Star Reviews
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                What Our Customers Say
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Real reviews from real customers across Kenmore, Bothell, Kirkland and Greater Seattle
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="cta-orange"
                  size="lg"
                  onClick={() => window.open('https://g.page/r/CZ1YhG3KQ4_8EAE/review', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read All Google Reviews
                </Button>
                <Button
                  variant="prowash-outline"
                  size="lg"
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Get Free Quote Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="py-12 bg-brand-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div className="fade-up">
                <div className="text-5xl font-bold text-brand-orange mb-2">5.0</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <div className="text-brand-navy font-semibold">Average Rating</div>
              </div>
              <div className="fade-up">
                <div className="text-5xl font-bold text-brand-orange mb-2">180+</div>
                <div className="text-brand-navy font-semibold">Five-Star Reviews</div>
                <div className="text-sm text-muted-foreground mt-2">Verified Google Reviews</div>
              </div>
              <div className="fade-up">
                <div className="text-5xl font-bold text-brand-orange mb-2">100%</div>
                <div className="text-brand-navy font-semibold">Customer Satisfaction</div>
                <div className="text-sm text-muted-foreground mt-2">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Reviews Section */}
        <section className="section-spacing bg-brand-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  Featured Customer Reviews
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real reviews from homeowners who trust us with their roof and gutter cleaning needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {featuredReviews.map((review, index) => (
                  <Card key={index} className="border-2 border-brand-orange/10 shadow-lg hover:shadow-xl transition-shadow fade-up bg-white">
                    <CardContent className="p-6">
                      {/* Star Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                          ))}
                        </div>
                        {review.verified && (
                          <Badge variant="outline" className="text-brand-orange border-brand-orange/30">
                            <ShieldCheck className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>

                      {/* Review Quote */}
                      <blockquote className="text-brand-navy/80 italic mb-4 leading-relaxed line-clamp-4">
                        "{review.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="border-t pt-4">
                        <div>
                          <p className="font-bold text-brand-navy">{review.name}</p>
                          <p className="text-sm text-brand-orange font-semibold">{review.service}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center fade-up">
                <Button
                  variant="cta-orange"
                  size="lg"
                  onClick={() => window.open('https://g.page/r/CZ1YhG3KQ4_8EAE/review', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read All Google Reviews
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* All Reviews Grid */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  More Customer Feedback
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Hear from more satisfied customers across the Seattle area
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {reviews.slice(6).map((review, index) => (
                  <Card key={index} className="border-2 border-brand-orange/10 shadow-lg hover:shadow-xl transition-shadow fade-up">
                    <CardContent className="p-6">
                      {/* Star Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                          ))}
                        </div>
                        {review.verified && (
                          <Badge variant="outline" className="text-brand-orange border-brand-orange/30">
                            <ShieldCheck className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>

                      {/* Review Quote */}
                      <blockquote className="text-brand-navy/80 italic mb-4 leading-relaxed">
                        "{review.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-brand-navy">{review.name}</p>
                            <p className="text-sm text-brand-orange font-semibold">{review.service}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/95">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Satisfied Customers
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Experience the same professional service that earned us 180+ five-star reviews
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="cta-orange"
                  size="lg"
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Get Free Quote Today
                </Button>
                <Button
                  variant="prowash-outline"
                  size="lg"
                  onClick={() => window.location.href = 'tel:206-752-6690'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 206-752-6690
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-6">
                Same-day estimates • 12-month moss-free guarantee • Licensed & insured
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Reviews;
