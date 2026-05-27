import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredReviews = [
  {
    name: "Daniel S.",
    service: "Roof Cleaning",
    quote: "These guys did an amazing job cleaning up my roof. They did a great job not damaging anything and i would definitely hire them again down the line.",
  },
  {
    name: "Jon R.",
    service: "Roof & Gutter Cleaning",
    quote: "My experience with Seattle ProWash has always been very good. They follow up on my calls, they use modern scheduling software that sends text confirmation and reminders which I like.",
  },
  {
    name: "Lori",
    service: "Roof & Gutter Cleaning",
    quote: "Excellent service. He came in within a couple days of the rains, and during. Dylan kept us up to date before our scheduled time.",
  },
  {
    name: "Kimani G.",
    service: "Roof & Gutter Cleaning",
    quote: "My experience with them was smooth from booking to appointment. Dylan's team kept me updated throughout the process with before and after photos.",
  },
  {
    name: "Ajitesh S.",
    service: "Metal Roof Cleaning",
    quote: "ProWash has very good service and did an excellent job, they made my metal roof brand new again. I recommend these guys to everyone.",
  },
  {
    name: "Miguel A.",
    service: "Roof & Gutter Cleaning",
    quote: "Great job on my roof and gutters, friendly crew. Customer is always right attitude, price fair. Recommend them!",
  },
];

const GoogleReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-brand-orange">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-orange" />
            ))}
            <span className="text-brand-navy font-semibold ml-1">5.0 from 200+ Google Reviews</span>
          </div>
        </div>

        <div
          className="max-w-3xl mx-auto fade-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Active review card */}
            <Card className="border-2 border-brand-orange/10 shadow-lg bg-white">
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                  <span className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-orange">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Google review
                  </span>
                </div>
                <blockquote className="text-lg md:text-xl text-brand-navy leading-relaxed mb-6 min-h-[120px] md:min-h-[140px]">
                  "{featuredReviews[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-brand-navy">{featuredReviews[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{featuredReviews[currentIndex].service}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentIndex + 1} / {featuredReviews.length}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prev / Next buttons */}
            <button
              onClick={goToPrev}
              aria-label="Previous review"
              className="absolute -left-3 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-brand-navy/10 shadow-md flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next review"
              className="absolute -right-3 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-brand-navy/10 shadow-md flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {featuredReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-8 bg-brand-orange" : "w-2 bg-brand-navy/20 hover:bg-brand-navy/40"
                }`}
              />
            ))}
          </div>

          {/* Read more on Google */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => window.open("https://g.page/r/CZ1YhG3KQ4_8EAE/review", "_blank", "noopener")}
              className="border-brand-navy/20 hover:border-brand-orange hover:text-brand-orange"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read all reviews on Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
