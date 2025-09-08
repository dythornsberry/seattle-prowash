import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      content: "Really happy with the work the Seattle Pro Wash team did to clean the transparent roof of my backyard pergola. It's a pretty high structure and a bit awkward to access, but they had the skills and tools to do the job right. The roof looks like new again. Quick friendly and efficient, highly recommended!",
      author: "Aileen Imperial",
      location: "Seattle Area",
      rating: 5,
      service: "Roof Cleaning"
    },
    {
      content: "These dudes are the way to go, very hard working and I was very satisfied with their work, thanks Dylan and the crew!",
      author: "Owen Andresen",
      location: "Seattle Area", 
      rating: 5,
      service: "Property Cleaning"
    },
    {
      content: "Seattle Pro Wash did an amazing job on my driveway! Service was friendly and efficient, they got it done in no time! Would definitely recommend, overall they did an amazing job and one that I won't forget.",
      author: "Kai Concepcion",
      location: "Seattle Area",
      rating: 5,
      service: "Driveway Pressure Washing"
    },
    {
      content: "I needed my deck power washed immediately and heard from my neighbors that Seattle Prowash was legit. Dylan and his team did an excellent job and I was thoroughly impressed with their work. Dylan is easily reachable and his team does great work.",
      author: "Lucas Hakamada",
      location: "Seattle Area",
      rating: 5,
      service: "Deck Pressure Washing"
    },
    {
      content: "These guys did an amazing job cleaning up my roof. They did a great job not damaging anything and i would definitely hire them again down the line.",
      author: "Daniel Shubert", 
      location: "Seattle Area",
      rating: 5,
      service: "Roof Cleaning"
    },
    {
      content: "Prowash has very good service and did an excellent job they made my metal roof brand new again. I recommend these guys to everyone and I'm definitely looking forward to seeing these guys again.",
      author: "Ajitesh Sangar",
      location: "Seattle Area",
      rating: 5,
      service: "Metal Roof Cleaning"
    },
    {
      content: "My experience with them was seamless from booking to appointment. Dylan's team kept me updated throughout the process with before and after photos. The prices are fair. I would highly recommend them.",
      author: "Kimani G",
      location: "Seattle Area",
      rating: 5,
      service: "House Washing"
    },
    {
      content: "Dylan did an amazing job cleaning our gutters, roof and clearing branches!",
      author: "Arielle Steger",
      location: "Seattle Area",
      rating: 5,
      service: "Gutter & Roof Cleaning"
    },
    {
      content: "If you miss good old fashion quality service, you will find it here. These guys are the best - on time, quality workmanship, and at a fair price. We have had them do several cleaning jobs and the results are always the same FANTASTIC. I wish I could do more than 5-stars.",
      author: "Mary Duros",
      location: "Seattle Area",
      rating: 5,
      service: "Multiple Services"
    },
    {
      content: "Dylan is prompt, attentive to details and caring. He power washed our front driveway and back yard. The work was meticulously done and he made sure all the furniture was moved back in place before leaving. He even cleaned our side walkway!",
      author: "YT Chu",
      location: "Seattle Area",
      rating: 5,
      service: "Pressure Washing"
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
            What Neighbors Say
          </h2>
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
          
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => window.open('https://g.page/r/CZ1YhG3KQ4_8EAE/review', '_blank')}
            >
              Read reviews on Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;