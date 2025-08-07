import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      content: "Dylan is prompt, attentive to details and caring. He power washed our front driveway and back yard. The work was meticulously done and he made sure all the furniture was moved back in place before leaving. He even cleaned our side walkway!",
      author: "YT Chu",
      location: "Seattle Area",
      rating: 5,
      service: "Pressure Washing"
    },
    {
      content: "Dylan went above and beyond! He helped me put on a temporary fix for a hole on my roof. He paid a lot of attention to details and is very knowledgeable about what he does.",
      author: "Dat Le",
      location: "Seattle Area", 
      rating: 5,
      service: "Roof Cleaning & Repair"
    },
    {
      content: "Dylan and the crew came out for my 99 year old grandmothers place. He was very informative, the place is old and he took the time to stop and inform us of some possible issues with continuing.",
      author: "Ohana V.",
      location: "Seattle Area",
      rating: 5,
      service: "House Washing"
    },
    {
      content: "We had Dylan and his crew do our Christmas lights, and we were so impressed with the professionalism and quality that we had Seattle ProWash come and clean my mother in law's roof after the bomb cyclone.",
      author: "Nick Tourte", 
      location: "Seattle Area",
      rating: 5,
      service: "Roof Cleaning"
    },
    {
      content: "My experience with them was seamless from booking to appointment. Dylan's team kept me updated throughout the process with before and after photos. The prices are fair.",
      author: "Kimani G.",
      location: "Bothell, WA",
      rating: 5,
      service: "House Soft Wash"
    },
    {
      content: "These guys removed years of moss and the roof looks brand new! Great price and super professional.",
      author: "Jennifer C.",
      location: "Kenmore, WA",
      rating: 5,
      service: "Roof Moss Removal"
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
    <section id="reviews" className="section-spacing bg-brand-gray scroll-mt-20">
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
            <span className="text-brand-gray-text font-medium">• 180 Google Reviews</span>
          </div>
          <p className="text-brand-gray-text mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. See what homeowners across the Seattle area are saying about our roof and gutter cleaning services. 
            <a 
              href="https://www.google.com/search?q=Seattle+ProWash+reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-orange hover:underline font-semibold"
            >
              Read all our reviews on Google
            </a>.
          </p>
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
                          <div className="font-bold text-brand-blue text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-brand-gray-text font-medium">
                            {testimonial.location}
                          </div>
                          <div className="text-sm text-brand-orange font-semibold">
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