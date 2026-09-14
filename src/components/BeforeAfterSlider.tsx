import { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import InteractiveBeforeAfter from "./InteractiveBeforeAfter";
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
import rooftopDeckBefore from "@/assets/rooftop-deck-soft-wash-before-2026.jpg";
import rooftopDeckAfter from "@/assets/rooftop-deck-soft-wash-after-2026.jpg";

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
      id: 3,
      title: "Rooftop Deck Soft Wash - Seattle",
      location: "Seattle, WA",
      service: "Deck Membrane + Parapet Wall Soft Wash",
      beforeImage: rooftopDeckBefore,
      afterImage: rooftopDeckAfter,
      beforeAlt: "Seattle rooftop deck before soft washing - algae streaks on parapet walls and dirt buildup on the membrane",
      afterAlt: "Same Seattle rooftop deck after soft washing - clean membrane and spotless white walls"
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

  const project = beforeAfterProjects[currentSlide];

  return (
    <section id="results" className="section-spacing border-y bg-muted/50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">See the Difference</h2>
            <p className="mt-3 text-muted-foreground">Before and after photos from Seattle ProWash jobs.</p>
          </div>
          <Link to="/gallery" className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-navy">All Projects <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="mx-auto max-w-4xl">
          <InteractiveBeforeAfter key={project.id} beforeImage={project.beforeImage} afterImage={project.afterImage} beforeImageWebP={project.beforeImageWebP} afterImageWebP={project.afterImageWebP} beforeAlt={project.beforeAlt} afterAlt={project.afterAlt} />
          <div className="mt-5 flex items-center justify-between gap-4">
            <div aria-live="polite" className="min-w-0">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{project.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{currentSlide + 1} of {beforeAfterProjects.length}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="icon" className="h-11 w-11 border-border" onClick={prevSlide} aria-label="Show previous project" title="Previous project"><ChevronLeft aria-hidden="true" /></Button>
              <Button variant="outline" size="icon" className="h-11 w-11 border-border" onClick={nextSlide} aria-label="Show next project" title="Next project"><ChevronRight aria-hidden="true" /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BeforeAfterSlider);
