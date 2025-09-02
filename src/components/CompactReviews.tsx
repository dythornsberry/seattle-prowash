import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";

const CompactReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "Seamless from booking to appointment. The before/after photos were awesome.",
      name: "Kimani G.",
      location: "Bothell"
    },
    {
      text: "Roof looks brand new. Great price and super professional.",
      name: "Jennifer C.",
      location: "Kenmore"
    },
    {
      text: "On time, careful, and the results were dramatic.",
      name: "YT C.",
      location: "Seattle"
    },
    {
      text: "Excellent moss treatment service. 12-month guarantee gives peace of mind.",
      name: "Michael R.",
      location: "Kirkland"
    },
    {
      text: "Professional team, fair pricing, and amazing results on our gutter cleaning.",
      name: "Sarah T.",
      location: "Bellevue"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleGoogleReviewsClick = () => {
    // Track Google reviews click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Reviews',
        event_label: 'Read reviews on Google'
      });
    }
    window.open('https://www.google.com/search?q=Seattle+ProWash+reviews', '_blank');
  };

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-seattle-blue mb-12">
            What Neighbors Say
          </h2>
          
          {/* Carousel */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8 min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-text-charcoal mb-4 italic">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <div className="text-seattle-blue font-medium">
                — {reviews[currentReview].name}, {reviews[currentReview].location}
              </div>
            </div>
          </div>

          {/* Review Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-seattle-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="seattle-secondary"
            onClick={handleGoogleReviewsClick}
          >
            Read reviews on Google →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompactReviews;