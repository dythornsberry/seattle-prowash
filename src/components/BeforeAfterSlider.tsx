import { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import InteractiveBeforeAfter from "./InteractiveBeforeAfter";
import { navigateToContact } from "@/lib/navigation";
// WebP images with JPG fallbacks
import newRoofBefore1WebP from "@/assets/new-roof-before-1.webp";
import newRoofAfter1WebP from "@/assets/new-roof-after-1.webp";
import newMetalRoofBefore2WebP from "@/assets/new-metal-roof-before-2.webp";
import newMetalRoofAfter2WebP from "@/assets/new-metal-roof-after-2.webp";
// JPG fallbacks
import newRoofBefore1 from "@/assets/new-roof-before-1.jpg";
import newRoofAfter1 from "@/assets/new-roof-after-1.jpg";
import newMetalRoofBefore2 from "@/assets/new-metal-roof-before-2.jpg";
import newMetalRoofAfter2 from "@/assets/new-metal-roof-after-2.jpg";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Metal Roof Cleaning - Seattle",
      location: "Seattle, WA",
      service: "Moss Removal + Roof Treatment",
      beforeImage: newRoofBefore1,
      afterImage: newRoofAfter1,
      beforeImageWebP: newRoofBefore1WebP,
      afterImageWebP: newRoofAfter1WebP,
      beforeAlt: "Seattle metal roof before moss removal treatment showing heavy moss growth and discoloration",
      afterAlt: "Seattle metal roof after professional moss removal and treatment - clean and restored"
    },
    {
      id: 2,
      title: "Metal Roof & Skylight Cleaning - Bellevue",
      location: "Bellevue, WA",
      service: "Metal Roof Cleaning + Skylight Clean",
      beforeImage: newMetalRoofBefore2,
      afterImage: newMetalRoofAfter2,
      beforeImageWebP: newMetalRoofBefore2WebP,
      afterImageWebP: newMetalRoofAfter2WebP,
      beforeAlt: "Bellevue metal roof with debris and weathering before professional cleaning",
      afterAlt: "Bellevue metal roof and skylights after specialized cleaning - restored to original condition"
    },
    {
      id: 5,
      title: "Asphalt Roof Moss Treatment - Seattle",
      location: "Seattle, WA",
      service: "Roof Moss Removal + Treatment",
      beforeImage: "/lovable-uploads/7cdfb095-76e6-4419-b395-a8272819a23b.webp",
      afterImage: "/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.webp",
      beforeAlt: "Seattle asphalt roof heavily covered in moss and debris before professional treatment",
      afterAlt: "Seattle asphalt roof after professional moss removal and protection treatment - fully restored"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  return (
    <section className="section-spacing overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Real Seattle Roof Cleaning Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentic transformations from neighbors across the Seattle Metro. No stock photos, just real results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Project Slider */}
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div 
                className="flex transition-all duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%) translateZ(0)`,
                  backfaceVisibility: 'hidden' as const
                }}
              >
                {beforeAfterProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 fade-up gallery-item">
                    <div className="bg-brand-white p-8">
                      {/* Project Info */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-brand-navy mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground">{project.location}</p>
                        <span className="inline-block bg-brand-yellow/10 text-brand-navy px-3 py-1 rounded-full text-sm font-semibold mt-2">
                          {project.service}
                        </span>
                      </div>

                      {/* Interactive Before/After Comparison */}
                      <InteractiveBeforeAfter
                        beforeImage={project.beforeImage}
                        afterImage={project.afterImage}
                        beforeImageWebP={project.beforeImageWebP}
                        afterImageWebP={project.afterImageWebP}
                        beforeAlt={project.beforeAlt}
                        afterAlt={project.afterAlt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-white/90 border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy shadow-lg"
              onClick={prevSlide}
              aria-label="Show previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-white/90 border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy shadow-lg"
              onClick={nextSlide}
              aria-label="Show next project"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {beforeAfterProjects.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show project ${index + 1}`}
                aria-pressed={index === currentSlide}
                className="flex h-6 w-6 items-center justify-center rounded-full"
                onClick={() => setCurrentSlide(index)}
              >
                <span
                  className={`block h-3 w-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-brand-yellow" : "bg-brand-yellow/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-up">
          <div className="space-y-6">
            <p className="text-muted-foreground mb-4">Ready to clean up your roof, gutters, or exterior surfaces?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="prowash-primary" 
                size="xl"
                onClick={navigateToContact}
              >
                Request Estimate
              </Button>
              <Button 
                variant="prowash-secondary" 
                size="xl"
                onClick={() => window.location.href = '/gallery'}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View More Projects
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              All photos are real Seattle ProWash jobs • No stock images
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default memo(BeforeAfterSlider);
