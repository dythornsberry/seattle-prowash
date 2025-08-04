import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeRoof1 from "@/assets/before-roof-1.jpg";
import afterRoof1 from "@/assets/after-roof-1.jpg";
import beforeHouse2 from "@/assets/before-house-2.jpg";
import afterHouse2 from "@/assets/after-house-2.jpg";
import beforeConcrete3 from "@/assets/before-concrete-3.jpg";
import afterConcrete3 from "@/assets/after-concrete-3.jpg";
import asphaltRoofMossCleaningBeforeAfter from "@/assets/asphalt-roof-moss-cleaning-before-after.jpg";
import concreteStairsBeforeAfter from "@/assets/concrete-stairs-before-after.jpg";
import coveredDrivewayBefore from "@/assets/covered-driveway-before.jpg";
import coveredDrivewayAfter from "@/assets/covered-driveway-after.jpg";
import decraRoofCleaningBefore from "@/assets/decra-roof-cleaning-before.jpg";
import decraRoofCleaningAfter from "@/assets/decra-roof-cleaning-after.jpg";
import drivewayMossCleaningBeforeAfter from "@/assets/driveway-moss-cleaning-before-after.jpg";
import gutterBrighteningBeforeAfter from "@/assets/gutter-brightening-before-after.jpg";
import gutterCleaningBeforeAfter from "@/assets/gutter-cleaning-before-after.jpg";
import houseSidingSoftwashBeforeAfter from "@/assets/house-siding-softwash-before-after.jpg";
import houseSoftwashBeforeAfter from "@/assets/house-softwash-before-after.jpg";
import houseWashExteriorBeforeAfter from "@/assets/house-wash-exterior-before-after.jpg";
import houseWashSidingBeforeAfter from "@/assets/house-wash-siding-before-after.jpg";
import metalRoofCleaningBeforeAfter from "@/assets/metal-roof-cleaning-before-after.jpg";
import modernPatioBeforeAfter from "@/assets/modern-patio-pressure-washing-before.jpg";
import modernPatioAfter from "@/assets/modern-patio-pressure-washing-after.jpg";
import patioPressureWashingBeforeAfter from "@/assets/patio-pressure-washing-before-after.jpg";
import paverDrivewayBefore from "@/assets/paver-driveway-cleaning-before.jpg";
import paverDrivewayAfter from "@/assets/paver-driveway-cleaning-after.jpg";
import plasticAwningBefore from "@/assets/plastic-awning-cleaning-before.jpg";
import plasticAwningAfter from "@/assets/plastic-awning-cleaning-after.jpg";
import roofMossMoldMildewBeforeAfter from "@/assets/roof-moss-mold-mildew-removal-before-after.jpg";
import roofMossRemovalDetailedBeforeAfter from "@/assets/roof-moss-removal-detailed-before-after.jpg";
import roofSoftwashBeforeAfter from "@/assets/roof-softwash-before-after.jpg";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Asphalt Roof Moss Removal - Kenmore",
      location: "Kenmore, WA",
      service: "Moss Removal + Roof Treatment",
      beforeImage: asphaltRoofMossCleaningBeforeAfter,
      afterImage: asphaltRoofMossCleaningBeforeAfter,
      beforeAlt: "Moss-covered asphalt roof before professional cleaning",
      afterAlt: "Clean asphalt roof after moss removal treatment",
      completionDate: "April 2024"
    },
    {
      id: 2,
      title: "House Exterior Soft Wash - Bothell",
      location: "Bothell, WA", 
      service: "Complete House Soft Wash",
      beforeImage: houseWashExteriorBeforeAfter,
      afterImage: houseWashExteriorBeforeAfter,
      beforeAlt: "Dirty house exterior with algae and mildew buildup",
      afterAlt: "Clean, bright house exterior after professional soft washing",
      completionDate: "March 2024"
    },
    {
      id: 3,
      title: "Driveway Moss Removal - Kirkland",
      location: "Kirkland, WA",
      service: "Pressure Washing + Moss Treatment", 
      beforeImage: drivewayMossCleaningBeforeAfter,
      afterImage: drivewayMossCleaningBeforeAfter,
      beforeAlt: "Moss-covered concrete driveway before cleaning",
      afterAlt: "Clean concrete driveway after moss removal and pressure washing",
      completionDate: "February 2024"
    },
    {
      id: 4,
      title: "Gutter Cleaning & Brightening - Seattle",
      location: "Seattle, WA",
      service: "Gutter Clean + Brightening",
      beforeImage: gutterBrighteningBeforeAfter,
      afterImage: gutterBrighteningBeforeAfter,
      beforeAlt: "Dirty, stained gutters before cleaning and brightening",
      afterAlt: "Bright, clean gutters after professional cleaning service",
      completionDate: "January 2024"
    },
    {
      id: 5,
      title: "Metal Roof Restoration - Woodinville", 
      location: "Woodinville, WA",
      service: "Metal Roof Cleaning",
      beforeImage: metalRoofCleaningBeforeAfter,
      afterImage: metalRoofCleaningBeforeAfter,
      beforeAlt: "Weathered metal roof before professional cleaning",
      afterAlt: "Restored metal roof after specialized cleaning treatment",
      completionDate: "December 2023"
    },
    {
      id: 6,
      title: "Patio Pressure Washing - Redmond",
      location: "Redmond, WA",
      service: "Concrete Pressure Washing",
      beforeImage: patioPressureWashingBeforeAfter,
      afterImage: patioPressureWashingBeforeAfter,
      beforeAlt: "Stained concrete patio before pressure washing",
      afterAlt: "Clean, restored concrete patio after pressure washing",
      completionDate: "November 2023"
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
                            <img
                              src={project.beforeImage}
                              alt={project.beforeAlt}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                        </div>

                        {/* After */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-brand-navy text-center">After</h4>
                          <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <img
                              src={project.afterImage}
                              alt={project.afterAlt}
                              className="aspect-[4/3] w-full object-cover"
                            />
                            {/* Completion Date Badge - Replacing "Complete" as Gemini suggested */}
                            <div className="absolute top-4 right-4 bg-brand-yellow text-brand-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              {project.completionDate}
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