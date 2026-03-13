import { useState, useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Expand, X } from "lucide-react";
import { navigateToContact } from "@/lib/navigation";
import MobileBottomBar from "@/components/MobileBottomBar";

// Import only actual pressure washing business photos that exist
import dylanOwnerPatioPressureWashing from "@/assets/dylan-owner-patio-pressure-washing.jpg";
import dylanRoofWork from "@/assets/dylan-roof-work.jpg";
import heroCleaningService from "@/assets/hero-cleaning-service.jpg";
import prowashTruck from "@/assets/prowash-truck.jpg";
import prowashTruckStreet from "@/assets/prowash-truck-street.jpg";
import prowashTruckDriveway from "@/assets/prowash-truck-driveway.jpg";
import technicianTruckPortrait from "@/assets/technician-truck-portrait.jpg";
import technicianHoldingLadder from "@/assets/technician-holding-ladder.jpg";
import technicianMovingLadder from "@/assets/technician-moving-ladder.jpg";
import truckAtJobsite from "@/assets/truck-at-jobsite.jpg";
import asphaltRoofBefore from "@/assets/asphalt-roof-moss-cleaning-before-after.jpg";
import gutterBefore from "@/assets/gutter-cleaning-before-after.jpg";
import metalRoofBefore from "@/assets/metal-roof-cleaning-before-after.jpg";
import patioBefore from "@/assets/patio-pressure-washing-before-after.jpg";
import houseBefore from "@/assets/house-wash-exterior-before-after.jpg";
import drivewayBefore from "@/assets/driveway-moss-cleaning-before-after.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Roof Cleaning", 
    "Gutter Cleaning",
    "Team at Work"
  ];

  const galleryImages = {
    "Roof Cleaning": [
      { 
        src: asphaltRoofBefore, 
        alt: "Roof cleaning and moss removal before and after in Seattle", 
        title: "Roof cleaning,Seattle", 
        location: "Seattle", 
        description: "Complete roof moss removal and protection treatment showing dramatic transformation from heavy moss coverage to clean roof",
        service: "Roof Cleaning"
      },
      { 
        src: metalRoofBefore, 
        alt: "Metal roof cleaning transformation in Bellevue", 
        title: "Roof cleaning,Bellevue", 
        location: "Bellevue", 
        description: "Professional metal roof cleaning removed oxidation and staining to restore original shine",
        service: "Roof Cleaning"
      },
      { 
        src: dylanRoofWork, 
        alt: "Dylan working on roof cleaning project", 
        title: "Roof cleaning in progress,Kirkland", 
        location: "Kirkland", 
        description: "Professional roof cleaning specialist at work",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/e74889d8-949e-43d7-8979-5150f13e7df4.webp", 
        alt: "Metal roof moss removal and cleaning transformation", 
        title: "Roof cleaning with moss removal,Seattle Area", 
        location: "Seattle Area", 
        description: "Complete metal roof restoration with moss removal treatment",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/39ad7527-e74d-4532-a64b-0365b83aee6b.webp", 
        alt: "Metal roof and skylight cleaning before and after", 
        title: "Roof cleaning with skylight,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional metal roof cleaning with skylight cleaning",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/380b267e-dbb4-4a71-8ac9-2bba6d28b15c.webp", 
        alt: "Metal roof cleaning before and after with visible cleaning process", 
        title: "Roof cleaning,Seattle Area", 
        location: "Seattle Area", 
        description: "Intensive metal roof cleaning showing the process and dramatic results",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/7cdfb095-76e6-4419-b395-a8272819a23b.webp", 
        alt: "Asphalt roof heavily covered in moss before professional cleaning", 
        title: "Roof cleaning (before),Seattle", 
        location: "Seattle, WA", 
        description: "Severely moss-covered asphalt roof before treatment",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/cd85dd92-8acb-405d-a73c-44650e962bd8.webp", 
        alt: "Clean asphalt roof after professional moss removal", 
        title: "Roof cleaning (after),Seattle", 
        location: "Seattle, WA", 
        description: "Dramatic transformation after professional moss removal and cleaning",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/64d9c018-2edd-4f52-a9c8-26f38eacb1ab.webp", 
        alt: "Asphalt roof debris removal before and after", 
        title: "Roof cleaning,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional asphalt roof cleaning with complete debris and moss removal",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/d860338a-0f08-4e00-9f5a-6de054035c8f.webp", 
        alt: "Asphalt roof moss treatment before and after", 
        title: "Roof cleaning with moss treatment,Seattle Area", 
        location: "Seattle Area", 
        description: "Full roof moss treatment removing years of moss and organic buildup",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/61baa673-a9e7-4e3c-a983-cc33629610c0.webp", 
        alt: "Professional team performing roof moss treatment", 
        title: "Roof moss treatment in progress,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional team member applying moss treatment to asphalt roof",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/0b5d9cfa-52bb-4f34-b0ff-3ddd5f38c3b4.webp", 
        alt: "Asphalt roof moss removal before and after", 
        title: "Roof cleaning,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional moss removal on asphalt shingle roof with gentle treatment",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/06729db5-d286-4da3-88bf-5096689d3383.webp", 
        alt: "Roof moss treatment in progress on asphalt shingles", 
        title: "Roof moss treatment in progress,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional roof moss treatment application in action",
        service: "Roof Cleaning"
      },
      { 
        src: "/lovable-uploads/84877120-87fc-4d9f-8151-f6013e38b055.webp", 
        alt: "Asphalt roof moss removal before and after in Seattle", 
        title: "Roof cleaning,Seattle", 
        location: "Seattle, WA", 
        description: "Professional asphalt roof cleaning transformation with moss removal",
        service: "Roof Cleaning"
      }
    ],
    "Gutter Cleaning": [
      { 
        src: gutterBefore, 
        alt: "Gutter cleaning and brightening service in Bothell", 
        title: "Gutter cleaning,Bothell", 
        location: "Bothell", 
        description: "Complete gutter cleaning with brightening service, restoring exterior to like-new appearance",
        service: "Gutter Cleaning"
      },
      { 
        src: "/lovable-uploads/26d7c8d9-d5dc-42b1-ac63-62630e258539.webp", 
        alt: "Gutter cleaning before and after showing debris removal", 
        title: "Gutter cleaning,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional gutter cleaning removing debris, leaves, and buildup for proper water flow",
        service: "Gutter Cleaning"
      },
      { 
        src: "/lovable-uploads/b2ed7767-a921-4d56-8dfb-1c942c3daaa7.webp", 
        alt: "Gutter cleaning before and after showing complete system restoration", 
        title: "Gutter cleaning with roof blow-off,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional gutter cleaning transformation removing organic buildup and debris",
        service: "Gutter Cleaning"
      },
      { 
        src: "/lovable-uploads/e5ca4024-1728-4972-8b36-99d8c320f4e4.webp", 
        alt: "Gutter brightening before and after showing dramatic restoration", 
        title: "Gutter cleaning,Seattle Area", 
        location: "Seattle Area", 
        description: "Professional gutter brightening service restoring gutters to original color and brightness",
        service: "Gutter Cleaning"
      },
      { 
        src: "/lovable-uploads/ae56c077-963d-480b-a403-d5f4e4f81a2a.webp", 
        alt: "Gutter cleaning before and after with roof debris removal", 
        title: "Gutter cleaning with roof blow-off,Seattle Area", 
        location: "Seattle Area", 
        description: "Complete gutter cleaning service with roof blow-off removing moss and debris",
        service: "Gutter Cleaning"
      }
    ],
    "Team at Work": [
      { 
        src: prowashTruck, 
        alt: "Seattle ProWash professional equipment truck", 
        title: "Professional Equipment", 
        location: "Seattle Area", 
        description: "Seattle ProWash professional equipment and truck",
        service: "Equipment"
      },
      { 
        src: prowashTruckStreet, 
        alt: "ProWash truck on service call", 
        title: "Professional Service Call", 
        location: "Service Area", 
        description: "ProWash truck responding to service calls throughout the Seattle area",
        service: "Service"
      },
      { 
        src: prowashTruckDriveway, 
        alt: "ProWash truck at residential job", 
        title: "Residential Service", 
        location: "Residential", 
        description: "Professional residential cleaning services",
        service: "Service"
      },
      { 
        src: technicianTruckPortrait, 
        alt: "Professional technician with equipment", 
        title: "Professional Team", 
        location: "Seattle Area", 
        description: "Experienced and professional cleaning technicians",
        service: "Team"
      },
      { 
        src: technicianHoldingLadder, 
        alt: "Technician preparing equipment", 
        title: "Equipment Setup", 
        location: "On Site", 
        description: "Professional equipment preparation and safety procedures",
        service: "Equipment"
      },
      { 
        src: technicianMovingLadder, 
        alt: "Technician moving ladder for roof access", 
        title: "Safety First", 
        location: "On Site", 
        description: "Safety-first approach to all roof and exterior cleaning",
        service: "Safety"
      },
      { 
        src: truckAtJobsite, 
        alt: "ProWash truck at residential jobsite", 
        title: "Jobsite Setup", 
        location: "Residential", 
        description: "Professional jobsite setup and service delivery",
        service: "Service"
      },
      { 
        src: dylanRoofWork, 
        alt: "Dylan working on roof cleaning project", 
        title: "Roof Cleaning in Action", 
        location: "Kirkland", 
        description: "Professional roof cleaning specialist at work",
        service: "Roof Cleaning"
      }
    ]
  };

  const getFilteredImages = () => {
    if (activeCategory === "All") {
      const roofImages = galleryImages["Roof Cleaning"] || [];
      const gutterImages = galleryImages["Gutter Cleaning"] || [];
      const teamImages = galleryImages["Team at Work"] || [];
      
      const interspersedImages = [];
      const maxLength = Math.max(
        roofImages.length,
        gutterImages.length,
        teamImages.length
      );
      
      // Alternate between service types to create variety
      for (let i = 0; i < maxLength; i++) {
        if (i < roofImages.length) interspersedImages.push(roofImages[i]);
        if (i < gutterImages.length) interspersedImages.push(gutterImages[i]);
        if (i < teamImages.length) interspersedImages.push(teamImages[i]);
      }
      
      return interspersedImages;
    }
    return galleryImages[activeCategory as keyof typeof galleryImages] || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Before & After Gallery"
        description="See real roof and gutter cleaning transformations from Seattle ProWash. Before and after photos from Kenmore, Bothell, Kirkland, and Seattle area homes."
        url="https://www.seattleprowash.com/gallery"
      />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-brand-navy to-brand-navy/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Before & After: Real Exterior Cleaning Results
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Authentic transformations from your neighbors across Kenmore, Bothell, and Kirkland. No stock photos, just real Seattle ProWash results.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "prowash-primary" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                {activeCategory === "All" ? "All Projects" : activeCategory}
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional cleaning results that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredImages().map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Always visible label overlay - hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/95 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.service} On Site
                  </h3>
                    <p className="text-white/80 text-sm">
                      {image.title}
                    </p>
                  </div>
                  
                  {/* Hover overlay with additional details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4">
                      <Expand className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/90 text-sm mb-3">
                        {image.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-orange text-white text-xs">
                          {image.location}
                        </Badge>
                        <Badge variant="outline" className="border-white text-white text-xs">
                          {activeCategory === "All" ? 
                            Object.keys(galleryImages).find(cat => 
                              galleryImages[cat].includes(image)
                            ) : activeCategory
                          }
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust message */}
            <div className="text-center mt-12 px-4">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                ✓ All photos are real Seattle ProWash jobs • No stock images
              </div>
            </div>

            {getFilteredImages().length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No images found for this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready for Your Transformation?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let us restore your property to its best condition with our professional cleaning services.
              </p>
              <Button 
                variant="prowash-primary" 
                size="xl"
                onClick={navigateToContact}
                className="bg-moss-green hover:bg-moss-green-light"
              >
                Get Your Free Quote Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Expanded gallery view"
              className="max-w-full max-h-full object-contain rounded-lg"
              style={{ maxHeight: 'calc(100vh - 8rem)' }}
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-sm bg-black/50 px-3 py-1 rounded-full inline-block">
                Click anywhere to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
