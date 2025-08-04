import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // TODO: Replace with real before/after photos from Seattle ProWash projects
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Roof Moss Removal - Kenmore Home",
      location: "Kenmore, WA",
      service: "Moss Removal + Gutter Cleaning",
      beforeAlt: "Moss-covered roof before professional cleaning",
      afterAlt: "Clean, moss-free roof after Seattle ProWash treatment"
    },
    {
      id: 2, 
      title: "House Soft Wash - Bothell Property",
      location: "Bothell, WA",
      service: "House Soft Wash",
      beforeAlt: "Dirty house siding with algae and mildew",
      afterAlt: "Clean, bright house exterior after soft washing"
    },
    {
      id: 3,
      title: "Gutter & Pressure Wash - Kirkland",
      location: "Kirkland, WA", 
      service: "Complete Property Clean",
      beforeAlt: "Clogged gutters and dirty driveway",
      afterAlt: "Clean gutters and pressure-washed driveway"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            See the Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real neighbors across Kenmore, Bothell, and Kirkland. See why homeowners trust Seattle ProWash.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Project Slider */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {beforeAfterProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
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

                      {/* Before/After Images */}
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-brand-navy text-center">Before</h4>
                          <div className="relative rounded-xl overflow-hidden shadow-lg">
                            {/* TODO: Replace with actual before photos */}
                            <div className="aspect-[4/3] bg-gray-300 flex items-center justify-center">
                              <div className="text-center text-gray-600">
                                <p className="font-semibold">Before Photo</p>
                                <p className="text-sm">{project.beforeAlt}</p>
                                <p className="text-xs mt-2 italic">TODO: Add real project photo</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* After */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-brand-navy text-center">After</h4>
                          <div className="relative rounded-xl overflow-hidden shadow-lg">
                            {/* TODO: Replace with actual after photos */}
                            <div className="aspect-[4/3] bg-brand-yellow/10 flex items-center justify-center">
                              <div className="text-center text-brand-navy">
                                <p className="font-semibold">After Photo</p>
                                <p className="text-sm">{project.afterAlt}</p>
                                <p className="text-xs mt-2 italic">TODO: Add real project photo</p>
                              </div>
                            </div>
                            {/* Success Badge */}
                            <div className="absolute top-4 right-4 bg-brand-yellow text-brand-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              ✓ Complete
                            </div>
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-white/90 border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-white/90 border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {beforeAfterProjects.map((_, index) => (
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

        {/* CTA */}
        <div className="text-center mt-16 fade-up">
          <p className="text-muted-foreground mb-6">Ready to see your home transformed?</p>
          <Button variant="prowash-primary" size="xl">
            Get My Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;