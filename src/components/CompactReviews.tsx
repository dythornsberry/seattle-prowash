import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";

const CompactReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah M.",
      location: "Kenmore",
      text: "Dylan did an amazing job on our roof. Moss is completely gone and it looks brand new!",
      stars: 5
    },
    {
      name: "Mike R.",
      location: "Bothell", 
      text: "Professional service, fair pricing, and excellent results. Highly recommend!",
      stars: 5
    },
    {
      name: "Jennifer L.",
      location: "Kirkland",
      text: "Fast response, great communication, and our gutters have never been cleaner.",
      stars: 5
    },
    {
      name: "Tom H.",
      location: "Bellevue",
      text: "Outstanding work on our roof treatment. Worth every penny for the 12-month guarantee.",
      stars: 5
    },
    {
      name: "Lisa K.",
      location: "Shoreline",
      text: "Reliable, trustworthy, and delivers exactly what they promise. Great experience!",
      stars: 5
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8">
            What Our Neighbors Say
          </h2>
          
          {/* Review Carousel */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Card className="border-brand-blue/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: reviews[currentReview].stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-foreground/80 text-lg mb-4 italic">
                  "{reviews[currentReview].text}"
                </blockquote>
                
                <div className="font-medium text-brand-blue">
                  {reviews[currentReview].name}
                </div>
                <div className="text-sm text-foreground/60">
                  {reviews[currentReview].location}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevReview}
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReview ? 'bg-brand-blue' : 'bg-brand-blue/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextReview}
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Google Reviews Link */}
          <Button
            variant="outline"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_PROFILE/review', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Read reviews on Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompactReviews;