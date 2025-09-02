import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SingleBeforeAfter = () => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8">
            Real Results
          </h2>
          
          <div className="relative max-w-2xl mx-auto mb-6">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {!isAfter ? (
                <img 
                  src="/src/assets/new-roof-before-1.jpg"
                  alt="Roof treatment before - moss covered roof in Seattle"
                  className="w-full h-64 md:h-80 object-cover"
                  loading="eager"
                />
              ) : (
                <img 
                  src="/src/assets/new-roof-after-1.jpg"
                  alt="Roof treatment after - clean moss-free roof in Seattle"
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              )}
              
              {/* Before/After Labels */}
              <div className="absolute top-4 left-4">
                <span className="bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                  {isAfter ? 'After' : 'Before'}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant={!isAfter ? "default" : "outline"}
                size="sm"
                onClick={() => setIsAfter(false)}
                className={!isAfter ? "bg-brand-blue hover:bg-brand-blue-dark" : "border-brand-blue text-brand-blue"}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Before
              </Button>
              <Button
                variant={isAfter ? "default" : "outline"}
                size="sm"
                onClick={() => setIsAfter(true)}
                className={isAfter ? "bg-brand-blue hover:bg-brand-blue-dark" : "border-brand-blue text-brand-blue"}
              >
                After
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
            This Seattle roof went from moss-covered to spotless with our safe treatment process. 
            Results like this are backed by our 12-month moss-free guarantee.
          </p>

          {/* See More Link */}
          <div className="mb-8">
            <a 
              href="/gallery" 
              className="text-brand-blue hover:underline text-sm"
            >
              See more results →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBeforeAfter;