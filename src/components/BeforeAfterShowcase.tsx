import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeAfterImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface BeforeAfterShowcaseProps {
  images: BeforeAfterImage[];
  title?: string;
}

const BeforeAfterShowcase = ({ images, title = "Before & After Results" }: BeforeAfterShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8 text-center fade-up">
            {title}
          </h2>
          
          {/* Carousel */}
          <div className="relative fade-up">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={images[currentIndex].width || 1200}
                height={images[currentIndex].height || 800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-navy shadow-lg"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-navy shadow-lg"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-brand-orange w-8"
                          : "bg-brand-navy/30 hover:bg-brand-navy/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
