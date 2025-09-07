import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand, ExternalLink } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
// WebP images with JPG fallbacks
import newRoofBefore1WebP from "@/assets/new-roof-before-1.webp";
import newRoofAfter1WebP from "@/assets/new-roof-after-1.webp";
import newMetalRoofBefore2WebP from "@/assets/new-metal-roof-before-2.webp";
import newMetalRoofAfter2WebP from "@/assets/new-metal-roof-after-2.webp";
import newPatioBefore3WebP from "@/assets/new-patio-before-3.webp";
import newPatioAfter3WebP from "@/assets/new-patio-after-3.webp";
// JPG fallbacks
import newRoofBefore1 from "@/assets/new-roof-before-1.jpg";
import newRoofAfter1 from "@/assets/new-roof-after-1.jpg";
import newMetalRoofBefore2 from "@/assets/new-metal-roof-before-2.jpg";
import newMetalRoofAfter2 from "@/assets/new-metal-roof-after-2.jpg";
import newPatioBefore3 from "@/assets/new-patio-before-3.jpg";
import newPatioAfter3 from "@/assets/new-patio-after-3.jpg";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Metal Roof Deep Clean - Seattle",
      location: "Seattle, WA",
      service: "Moss Removal + Roof Treatment",
      beforeImage: newRoofBefore1,
      afterImage: newRoofAfter1,
      beforeImageWebP: newRoofBefore1WebP,
      afterImageWebP: newRoofAfter1WebP,
      beforeAlt: "Moss-covered metal roof before professional cleaning",
      afterAlt: "Clean metal roof after moss removal treatment",
      completionDate: "December 2024"
    },
    {
      id: 2,
      title: "Metal Roof & Skylight Restoration - Bellevue",
      location: "Bellevue, WA", 
      service: "Metal Roof Cleaning + Skylight Clean",
      beforeImage: newMetalRoofBefore2,
      afterImage: newMetalRoofAfter2,
      beforeImageWebP: newMetalRoofBefore2WebP,
      afterImageWebP: newMetalRoofAfter2WebP,
      beforeAlt: "Weathered metal roof with debris before professional cleaning",
      afterAlt: "Restored metal roof and skylights after specialized cleaning treatment",
      completionDate: "December 2024"
    },
    {
      id: 3,
      title: "Residential Patio Revival - Kirkland",
      location: "Kirkland, WA",
      service: "Concrete Pressure Washing", 
      beforeImage: newPatioBefore3,
      afterImage: newPatioAfter3,
      beforeImageWebP: newPatioBefore3WebP,
      afterImageWebP: newPatioAfter3WebP,
      beforeAlt: "Stained concrete patio with moss before pressure washing",
      afterAlt: "Clean, restored concrete patio after pressure washing",
      completionDate: "December 2024"
    },
    {
      id: 4,
      title: "Extreme Concrete Patio Recovery - Lake Forest Park",
      location: "Lake Forest Park, WA",
      service: "Extreme Pressure Washing",
      beforeImage: "/lovable-uploads/30f25fb0-b625-4f3e-8328-3084ca71c36b.png",
      afterImage: "/lovable-uploads/0d94bc5e-3592-4aa4-877a-d124110a3d0e.png",
      beforeAlt: "Severely neglected concrete patio with heavy moss and algae buildup",
      afterAlt: "Dramatically restored concrete patio after intensive pressure washing",
      completionDate: "January 2025"
    },
    {
      id: 5,
      title: "Asphalt Roof Moss Recovery - Seattle",
      location: "Seattle, WA",
      service: "Roof Moss Removal + Treatment",
      beforeImage: "/lovable-uploads/7cdfb095-76e6-4419-b395-a8272819a23b.png",
      afterImage: "/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.png",
      beforeAlt: "Asphalt roof heavily covered in moss and debris before professional cleaning",
      afterAlt: "Clean asphalt roof after professional moss removal and moss protection treatment",
      completionDate: "January 2025"
    },
    {
      id: 6,
      title: "Front Walkway Revival - Seattle",
      location: "Seattle Area, WA",
      service: "Concrete Walkway Pressure Washing",
      beforeImage: "/lovable-uploads/61bfb1f1-0bee-423a-be7a-c49142b6fd6b.png",
      afterImage: "/lovable-uploads/7a0d1b2c-03a2-4054-8cf2-6bdc1dca519c.png",
      beforeAlt: "Front walkway before pressure washing showing heavy moss and staining",
      afterAlt: "Clean front walkway after professional pressure washing transformation",
      completionDate: "January 2025"
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
            Before & After: Real Exterior Cleaning Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentic transformations from your neighbors across Kenmore, Bothell, and Kirkland. No stock photos, just real Seattle ProWash results.
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
                          <div className="flex items-center justify-center gap-2">
                            <h4 className="text-lg font-semibold text-brand-navy">Before</h4>
                            <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-medium">Problem</span>
                          </div>
                          <div 
                            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group transition-transform hover:scale-[1.02]"
                            onClick={() => setSelectedImage(project.beforeImage)}
                          >
                            <OptimizedImage
                              src={project.beforeImage}
                              srcWebP={project.beforeImageWebP}
                              alt={project.beforeAlt}
                              className="aspect-[4/3] w-full object-cover"
                              width={600}
                              height={450}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground text-center px-2">
                            {project.service.toLowerCase().includes('roof') ? `Roof moss treatment in ${project.location.split(',')[0]} – before moss removal` :
                             project.service.toLowerCase().includes('pressure') ? `Pressure washing in ${project.location.split(',')[0]} – before cleaning` :
                             `House washing in ${project.location.split(',')[0]} – before treatment`}
                          </p>
                        </div>

                        {/* After */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-center gap-2">
                            <h4 className="text-lg font-semibold text-brand-navy">After</h4>
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">Solved</span>
                          </div>
                          <div 
                            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group transition-transform hover:scale-[1.02]"
                            onClick={() => setSelectedImage(project.afterImage)}
                          >
                            <OptimizedImage
                              src={project.afterImage}
                              srcWebP={project.afterImageWebP}
                              alt={project.afterAlt}
                              className="aspect-[4/3] w-full object-cover"
                              width={600}
                              height={450}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            {/* Completion Date Badge */}
                            <div className="absolute top-4 right-4 bg-brand-yellow text-brand-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              {project.completionDate}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground text-center px-2">
                            {project.service.toLowerCase().includes('roof') ? `Roof moss treatment in ${project.location.split(',')[0]} – after moss removal` :
                             project.service.toLowerCase().includes('pressure') ? `Pressure washing in ${project.location.split(',')[0]} – after cleaning` :
                             `House washing in ${project.location.split(',')[0]} – after treatment`}
                          </p>
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
          <div className="space-y-6">
            <p className="text-muted-foreground mb-4">Ready to see your home transformed?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="prowash-primary" 
                size="xl"
                onClick={() => {
                  if (window.location.pathname === '/') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Get My Free Quote
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={() => setSelectedImage(null)}
            >
              <ChevronRight className="w-5 h-5 rotate-45 transform" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeforeAfterSlider;