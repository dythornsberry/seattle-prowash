import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const SimplifiedBeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterProjects = [
    {
      id: 1,
      caption: "Seattle, WA – Roof Soft Wash – Before & After",
      beforeImage: "/lovable-uploads/6f421435-bb27-40ea-ac27-6ba923f0d820.png",
      afterImage: "/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.png",
      beforeAlt: "Moss-covered roof before professional cleaning",
      afterAlt: "Clean roof after professional soft wash treatment"
    },
    {
      id: 2,
      caption: "Kirkland, WA – Concrete Patio Pressure Washing – Before & After", 
      beforeImage: "/lovable-uploads/30f25fb0-b625-4f3e-8328-3084ca71c36b.png",
      afterImage: "/lovable-uploads/0d94bc5e-3592-4aa4-877a-d124110a3d0e.png",
      beforeAlt: "Stained concrete patio before pressure washing",
      afterAlt: "Clean concrete patio after pressure washing"
    },
    {
      id: 3,
      caption: "Bellevue, WA – Metal Roof Cleaning – Before & After",
      beforeImage: "/public/metal-roof-cleaning-before-after-2.jpg",
      afterImage: "/public/metal-roof-skylight-cleaning-before-after.jpg",
      beforeAlt: "Weathered metal roof before professional cleaning",
      afterAlt: "Restored metal roof after specialized cleaning"
    },
    {
      id: 4,
      caption: "Seattle, WA – Front Walkway Revival – Before & After",
      beforeImage: "/lovable-uploads/61bfb1f1-0bee-423a-be7a-c49142b6fd6b.png",
      afterImage: "/lovable-uploads/7a0d1b2c-03a2-4054-8cf2-6bdc1dca519c.png",
      beforeAlt: "Front walkway before pressure washing",
      afterAlt: "Clean front walkway after pressure washing"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Project Slider */}
        <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {beforeAfterProjects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <div className="p-8">
                  {/* Caption */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-dark-teal">
                      {project.caption}
                    </h3>
                  </div>

                  {/* Before/After Images */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-dark-teal text-center">Before</h4>
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={project.beforeImage}
                          alt={project.beforeAlt}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          width="400"
                          height="300"
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-dark-teal text-center">After</h4>
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={project.afterImage}
                          alt={project.afterAlt}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          width="400"
                          height="300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 border-bright-orange hover:bg-bright-orange hover:text-white shadow-lg"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 border-bright-orange hover:bg-bright-orange hover:text-white shadow-lg"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {beforeAfterProjects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-bright-orange' : 'bg-bright-orange/30'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SimplifiedBeforeAfter;