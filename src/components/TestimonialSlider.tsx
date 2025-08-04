import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      content: "These guys removed years of moss—roof looks brand new! Great price and super professional.",
      author: "Jennifer C.",
      location: "Kenmore, WA",
      rating: 5,
      service: "Roof Moss Removal"
    },
    {
      content: "Seamless from booking to finish. Loved the before/after photos and fair pricing.",
      author: "Kimani G.", 
      location: "Bothell, WA",
      rating: 5,
      service: "House Soft Wash"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            What Our Neighbors Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-brand-yellow text-2xl">
              ★★★★★
            </div>
            <span className="text-lg font-semibold text-brand-navy">5.0</span>
            <span className="text-muted-foreground">• 180 Google Reviews</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 border-2 border-brand-yellow/20 shadow-xl">
                      <CardContent className="p-8 md:p-12 text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-xl md:text-2xl text-brand-navy mb-8 font-light leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        
                        {/* Author Info */}
                        <div className="space-y-2">
                          <div className="font-bold text-brand-navy text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-muted-foreground">
                            {testimonial.location}
                          </div>
                          <div className="text-sm text-brand-yellow font-semibold">
                            {testimonial.service}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-brand-white border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-brand-white border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-brand-yellow' : 'bg-brand-yellow/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;